import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

const certifications: Certification[] = [
  { id: 1, title: 'Advanced React Patterns', issuer: 'Frontend Masters', date: '2026', description: 'Deep dive into advanced hooks, performance optimization, and composition patterns.' },
  { id: 2, title: 'UI/UX Design Systems', issuer: 'Design Academy', date: '2026', description: 'Mastering component architecture, design tokens, and accessibility standards.' },
  { id: 3, title: 'AI-Native Development', issuer: 'Anthropic Certification', date: '2026', description: 'Building agentic workflows and integrating LLMs into modern web applications.' },
];

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section className="py-20 px-6 bg-[#0C0C0C] text-[#D7E2EA]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif mb-12 text-center text-[#D7E2EA]">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <motion.button
              key={cert.id}
              className="card-premium p-8 rounded-[22px] cursor-pointer text-left w-full min-h-[120px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] touch-manipulation"
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 2 }}
              onClick={() => setSelectedCert(cert)}
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm text-[#D7E2EA]/70 mb-4">{cert.issuer} • {cert.date}</p>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-[1000] flex items-center justify-center p-6"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#121212] border border-[#D7E2EA]/20 p-10 rounded-[22px] max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl font-serif mb-4">{selectedCert.title}</h2>
              <p className="text-lg text-[#D7E2EA]/80 mb-2">{selectedCert.issuer}</p>
              <p className="text-sm text-[#D7E2EA]/60 mb-6">{selectedCert.date}</p>
              <p className="text-[#D7E2EA]/90">{selectedCert.description}</p>
              <button
                className="mt-8 bg-[#D7E2EA] text-[#0C0C0C] px-6 py-2 rounded-full font-semibold"
                onClick={() => setSelectedCert(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
