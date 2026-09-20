import React, { useLayoutEffect, useRef, useCallback } from 'react';
import './ScrollStack.css';

interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 60,
  itemScale = 0.03,
  itemStackDistance = 28,
  stackPosition = '15%',
  scaleEndPosition = '8%',
  baseScale = 0.88,
  rotationAmount = 0,
  onStackComplete
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef<boolean>(false);
  const cardsRef = useRef<HTMLElement[]>([]);
  const cardTopsRef = useRef<number[]>([]);
  const endElementTopRef = useRef<number>(0);
  const isUpdatingRef = useRef<boolean>(false);
  const lastTransformsRef = useRef<Map<number, string>>(new Map());

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return typeof value === 'number' ? value : parseFloat(value);
  }, []);

  // Cache element positions relative to document
  const measurePositions = useCallback(() => {
    if (!cardsRef.current.length) return;
    const scrollY = window.scrollY || document.documentElement.scrollTop || 0;

    cardTopsRef.current = cardsRef.current.map((card) => {
      if (!card) return 0;
      // Get position without current transform offset
      const rect = card.getBoundingClientRect();
      const currentTransform = card.style.transform;
      let currentY = 0;
      if (currentTransform) {
        const match = currentTransform.match(/translate3d\(0px,\s*([-\d.]+)px/);
        if (match) {
          currentY = parseFloat(match[1]) || 0;
        }
      }
      return rect.top + scrollY - currentY;
    });

    const endElement = document.querySelector('.scroll-stack-end') as HTMLElement;
    if (endElement) {
      const rect = endElement.getBoundingClientRect();
      endElementTopRef.current = rect.top + scrollY;
    }
  }, []);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const containerHeight = window.innerHeight;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElementTop = endElementTopRef.current;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = cardTopsRef.current[i] || 0;
      if (!cardTop) return;

      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop > 0 ? endElementTop - containerHeight : pinStart + 1000;

      // Calculate smooth scale progress
      let scaleProgress = 0;
      if (scrollTop >= triggerEnd) {
        scaleProgress = 1;
      } else if (scrollTop > triggerStart) {
        scaleProgress = (scrollTop - triggerStart) / (triggerEnd - triggerStart);
      }

      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      // Smooth Pinning / Stacking translateY calculation
      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const roundedTranslateY = Math.round(translateY * 10) / 10;
      const roundedScale = Math.round(scale * 1000) / 1000;
      const transformKey = `${roundedTranslateY}_${roundedScale}`;

      if (lastTransformsRef.current.get(i) !== transformKey) {
        lastTransformsRef.current.set(i, transformKey);
        card.style.transform = `translate3d(0, ${roundedTranslateY}px, 0) scale(${roundedScale}) rotate(${rotation}deg)`;
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    onStackComplete,
    parsePercentage
  ]);

  useLayoutEffect(() => {
    const cards = Array.from(document.querySelectorAll('.scroll-stack-card')) as HTMLElement[];
    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.webkitBackfaceVisibility = 'hidden';
      card.style.transform = 'translate3d(0,0,0)';
    });

    // Initial measurement
    measurePositions();
    updateCardTransforms();

    let rafId: number | null = null;
    const onScroll = () => {
      if (isUpdatingRef.current) return;
      isUpdatingRef.current = true;
      rafId = requestAnimationFrame(() => {
        updateCardTransforms();
        isUpdatingRef.current = false;
      });
    };

    const onResize = () => {
      measurePositions();
      updateCardTransforms();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    // Periodic measure sync for dynamic images/content
    const timer = setTimeout(() => {
      measurePositions();
      updateCardTransforms();
    }, 500);

    return () => {
      clearTimeout(timer);
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      stackCompletedRef.current = false;
      cardsRef.current = [];
      lastTransformsRef.current.clear();
    };
  }, [itemDistance, measurePositions, updateCardTransforms]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
