import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

const certifications = [
  {
    title: 'ALX Software Engineering',
    issuer: 'ALX Africa',
    year: '2024',
    status: 'Completed',
    link: 'https://www.alxafrica.com/software-engineering/',
    description: 'Intensive 12-month program covering full-stack development, algorithms, and system design with peer learning methodology.'
  },
  {
    title: 'ALX Foundations',
    issuer: 'ALX Africa', 
    year: '2023',
    status: 'Completed',
    link: 'https://www.alxafrica.com/foundations/',
    description: 'Fundamentals of programming, Linux, Git, and problem-solving techniques.'
  },
  {
    title: 'Moringa Software Development',
    issuer: 'Moringa School',
    year: 'Expected 2025',
    status: 'In Progress',
    link: 'https://moringaschool.com/',
    description: 'Immersive program focusing on modern JavaScript frameworks, UI/UX principles, and agile methodologies.'
  }
];

const Certifications = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="certifications" className="py-20 px-4 border-t border-[#c4bcb3]/30 bg-gradient-to-b from-[#e6e1d3] to-[#dad4c2]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-[#8A4F2C] mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring' }}
          >
            Professional Certifications
          </motion.h2>
          <p className="text-[#4a4745] max-w-xl mx-auto">
            Validated expertise through rigorous programs and assessments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <motion.div
                key={i}
                className="relative h-full cursor-pointer"
                onClick={() => handleToggle(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <div className={`absolute inset-0 bg-[#8A4F2C] rounded-xl transition-all duration-300 ${isExpanded ? 'opacity-10' : 'opacity-0'}`} />

                <div className="h-full bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-[#c4bcb3]/30 shadow-sm flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-[#8A4F2C]/10 p-3 rounded-lg text-[#8A4F2C]">
                      <FaCertificate className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#4a4745]">{cert.title}</h3>
                      <p className="text-sm text-[#6b5f57]">{cert.issuer}</p>
                    </div>
                  </div>

                  <div className="mt-auto space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[#6b5f57]">{cert.year}</span>
                      <span className={`font-medium ${
                        cert.status === 'In Progress' ? 'text-yellow-700' : 'text-green-700'
                      }`}>
                        {cert.status}
                      </span>
                    </div>

                    <motion.div
                      className="overflow-hidden"
                      initial={false}
                      animate={{ height: isExpanded ? 'auto' : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-[#4a4745] text-sm pt-2">{cert.description}</p>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[#8A4F2C] text-sm font-medium mt-2"
                      >
                        View credential <FaExternalLinkAlt className="text-xs" />
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
