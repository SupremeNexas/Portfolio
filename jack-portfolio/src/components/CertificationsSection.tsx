import { motion } from 'framer-motion';

const certifications = [
  { id: '1', title: 'OpenAI Foundations', issuer: 'OpenAI' },
  { id: '2', title: 'OpenAI Agents and Models', issuer: 'OpenAI' },
  { id: '3', title: 'Anthropic AI Fluency', issuer: 'Anthropic' },
  { id: '4', title: 'C‍laude Code in Action', issuer: 'Anthropic' },
  { id: '5', title: 'Claude Platform', issuer: 'Anthropic' },
  { id: '6', title: 'Claude 101 & C‍laude Code 101', issuer: 'Anthropic' },
  { id: '7', title: 'Claude Cowork', issuer: 'Anthropic' },
  { id: '8', title: 'Civic & Social Service Internship (CSSI)', issuer: 'Nirvana Sangh Foundation' },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="pt-20 pb-10 bg-[#0C0C0C] overflow-hidden">
      <h2 className="text-[#f3f3f3] text-center font-aeonik text-[44px] mb-16">
        <a href="https://github.com/SupremeNexas/Portfolio/tree/main/portfolio/certificates" target="_blank" rel="noopener noreferrer" className="hover:underline">CERTIFICATIONS</a>
      </h2>

      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-8"
          style={{ willChange: 'transform' }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...certifications, ...certifications].map((cert, index) => (
            <div
              key={index}
              className="card-premium p-8 rounded-xl flex-shrink-0 w-[300px] border border-[#212121]"
            >
              <h3 className="text-[#f3f3f3] text-lg font-medium">{cert.title}</h3>
              <p className="text-[#9c9c9c] text-sm mt-2">{cert.issuer}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
