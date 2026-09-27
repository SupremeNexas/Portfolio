import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, AlertCircle } from 'lucide-react';

export interface CertificateModalData {
  title: string;
  issuer: string;
  fileUrl?: string;
}

interface CertificateModalProps {
  certificate: CertificateModalData | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const modalContentRef = useRef<HTMLDivElement>(null);

  // 1. Prevent background scrolling while popup is open & restore when closed
  useEffect(() => {
    if (!certificate) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Handle Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  // Determine file type
  const isPdf = certificate?.fileUrl?.toLowerCase().endsWith('.pdf');
  const isImage = certificate?.fileUrl?.match(/\.(jpeg|jpg|png|webp|svg)$/i);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          key="certificate-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 xs:p-4 sm:p-6 md:p-8 bg-black/75 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Centered Modal Card Container */}
          <motion.div
            key="certificate-content"
            ref={modalContentRef}
            initial={{ scale: 0.92, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-6xl max-h-[94vh] h-[90vh] bg-[#0c0c0c] border border-[#262626] rounded-[20px] xs:rounded-[24px] sm:rounded-[28px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 xs:px-6 py-3 sm:py-3.5 border-b border-[#1f1f1f] bg-[#0f0f0f]/90 shrink-0">
              <div className="min-w-0 pr-3">
                <h3 className="text-[#f3f3f3] font-semibold text-sm xs:text-base sm:text-lg tracking-tight truncate">
                  {certificate.title}
                </h3>
                <p className="text-[#888888] font-normal text-xs sm:text-sm truncate">
                  {certificate.issuer}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {certificate.fileUrl && (
                  <a
                    href={certificate.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 xs:p-2 rounded-full text-[#888888] hover:text-white hover:bg-[#1a1a1a] transition-colors"
                    title="Open in new tab"
                    aria-label="Open certificate in new tab"
                  >
                    <ExternalLink className="w-4 h-4 xs:w-5 xs:h-5" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 xs:p-2 rounded-full text-[#888888] hover:text-white hover:bg-[#1a1a1a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Close certificate modal"
                >
                  <X className="w-5 h-5 xs:w-6 xs:h-6" />
                </button>
              </div>
            </div>

            {/* Modal Body / Certificate Content */}
            <div className="relative flex-1 w-full h-full bg-[#050505] overflow-hidden flex items-center justify-center p-2 sm:p-4">
              {certificate.fileUrl ? (
                isPdf ? (
                  <iframe
                    src={`${certificate.fileUrl}#view=FitH&toolbar=0&navpanes=0`}
                    title={`${certificate.title} Certificate`}
                    className="w-full h-full rounded-xl border border-[#1c1c1c] bg-white shadow-inner"
                  />
                ) : isImage ? (
                  <img
                    src={certificate.fileUrl}
                    alt={`${certificate.title} Certificate`}
                    className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
                  />
                ) : (
                  <iframe
                    src={certificate.fileUrl}
                    title={`${certificate.title} Certificate`}
                    className="w-full h-full rounded-xl border border-[#1c1c1c] bg-white shadow-inner"
                  />
                )
              ) : (
                <div className="flex flex-col items-center justify-center gap-3 p-8 text-center max-w-md">
                  <AlertCircle className="w-10 h-10 text-[#888888]" />
                  <p className="text-[#f3f3f3] font-medium text-base">
                    Certificate asset not available
                  </p>
                  <p className="text-[#777777] text-xs xs:text-sm">
                    The document for &quot;{certificate.title}&quot; is currently being updated or stored in the archive.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
