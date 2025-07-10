import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const certifications = [
  {
    title: 'ALX Software Engineering Program',
    issuer: 'ALX Africa',
    year: '2024',
    status: 'Completed',
    link: 'https://www.alxafrica.com/software-engineering/'
  },
  {
    title: 'ALX Foundations',
    issuer: 'ALX Africa',
    year: '2023',
    status: 'Completed',
    link: 'https://www.alxafrica.com/foundations/'
  },
  {
    title: 'Moringa Software Development Certificate',
    issuer: 'Moringa School',
    year: 'Expected 2025',
    status: 'In Progress',
    link: 'https://moringaschool.com/'
  }
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-20 px-4 border-t border-[#c4bcb3]/30 bg-gradient-to-b from-[#c4bcb3] to-[#e6e1d3]"
    >
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-[#8A4F2C] text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-[#c4bcb3]/30 shadow-md flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 120 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4 text-[#8A4F2C]">
                <FaCertificate className="text-2xl" />
                <h3 className="text-lg font-bold">{cert.title}</h3>
              </div>

              <p className="text-[#4a4745] mb-2">
                <span className="font-semibold">Issuer:</span> {cert.issuer}
              </p>
              <p className="text-[#4a4745] mb-2">
                <span className="font-semibold">Year:</span> {cert.year}
              </p>
              <p className={`mb-4 font-medium ${cert.status === 'In Progress' ? 'text-yellow-700' : 'text-green-700'}`}>
                {cert.status}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8A4F2C] font-medium hover:underline text-sm mt-auto"
              >
                View Program ↗
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
