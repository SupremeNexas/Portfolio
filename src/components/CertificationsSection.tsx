import { useState } from 'react';
import { motion } from 'framer-motion';
import { CertificateModal, CertificateModalData } from './CertificateModal';

interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  fileUrl?: string;
}

const certifications: CertificationItem[] = [
  {
    id: '1',
    title: 'OpenAI Foundations',
    issuer: 'OpenAI',
    fileUrl: '/certificates/Open-Ai-Foundation-certificate-a72ll5k9z0.pdf',
  },
  {
    id: '2',
    title: 'OpenAI Agents and Models',
    issuer: 'OpenAI',
    fileUrl: '/certificates/OpenAi-Agents-Models-certificate-ym21x89nn4.pdf',
  },
  {
    id: '3',
    title: 'Anthropic AI Fluency',
    issuer: 'Anthropic',
    fileUrl: '/certificates/Anthropic-Ai-Fluency-certificate-tuxdc8fjb26h-1783230034.pdf',
  },
  {
    id: '4',
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    fileUrl: '/certificates/Claude-code-in-action-certificate-6jiifg3vdvye-1783235083.pdf',
  },
  {
    id: '5',
    title: 'Claude Platform',
    issuer: 'Anthropic',
    fileUrl: '/certificates/Claude-Platform-certificate-zo6fykirpk4y-1783234016.pdf',
  },
  {
    id: '6',
    title: 'Claude 101 & Claude Code 101',
    issuer: 'Anthropic',
    fileUrl: '/certificates/ClaudeCode-101-certificate-twp39eard4jv-1783231019.pdf',
  },
  {
    id: '7',
    title: 'Claude Cowork',
    issuer: 'Anthropic',
    fileUrl: '/certificates/Claude-cowork-certificate-ih8d7333gdou-1783234744.pdf',
  },
  {
    id: '8',
    title: 'Civic & Social Service Internship (CSSI)',
    issuer: 'Nirvana Sangh Foundation',
    fileUrl: '/certificates/Nirvana_CSSI.jpg',
  },
];

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<CertificateModalData | null>(null);

  const handleCardClick = (cert: CertificationItem) => {
    setSelectedCert({
      title: cert.title,
      issuer: cert.issuer,
      fileUrl: cert.fileUrl,
    });
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  return (
    <>
      <section id="certifications" className="pt-2 sm:pt-4 pb-4 xs:pb-6 sm:pb-8 bg-[#0C0C0C] overflow-hidden relative z-10">
        <h2 className="hero-heading font-black uppercase text-center text-3xl xs:text-4xl sm:text-5xl md:text-6xl leading-none mb-4 xs:mb-6 sm:mb-8 px-4">
          <a
            href="https://github.com/SupremeNexas/Portfolio/tree/main/portfolio/certificates"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-[#f3f3f3]"
          >
            Certifications
          </a>
        </h2>

        {/* Continuous Horizontal Marquee of Clickable Certification Cards */}
        <div className="flex overflow-hidden py-2">
          <motion.div
            className="flex gap-4 xs:gap-6 sm:gap-8"
            style={{ willChange: 'transform' }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
          >
            {[...certifications, ...certifications].map((cert, index) => (
              <button
                type="button"
                key={`${cert.id}-${index}`}
                onClick={() => handleCardClick(cert)}
                className="card-premium p-4 xs:p-6 sm:p-8 rounded-2xl flex-shrink-0 w-[220px] xs:w-[260px] sm:w-[300px] border border-[#212121] flex flex-col justify-between text-left cursor-pointer hover:border-[#444444] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white select-none"
              >
                <div>
                  <h3 className="text-[#f3f3f3] text-sm xs:text-base sm:text-lg font-medium leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-[#9c9c9c] text-xs xs:text-sm mt-2">
                    {cert.issuer}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-[0.6875rem] xs:text-xs text-[#777777] font-mono tracking-wider uppercase">
                  <span>View Certificate</span>
                  <span aria-hidden="true">&rarr;</span>
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Centered Modal / Popup for Certificate Viewer */}
      <CertificateModal
        certificate={selectedCert}
        onClose={handleCloseModal}
      />
    </>
  );
}
