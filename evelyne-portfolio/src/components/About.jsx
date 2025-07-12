import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 border-t border-[#c4bcb3]/30 bg-[#e6e1d3]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-[#8A4F2C] mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl leading-relaxed text-[#4a4745]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Hi, I'm <span className="font-semibold text-[#8A4F2C]">Evelyne</span>. I'm a Nairobi-based, globally available full-stack developer who transitioned from hospitality into tech. 
          I’ve always thrived in fast-paced environments and love turning challenges into opportunities for growth.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl leading-relaxed text-[#4a4745] mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          My work blends frontend and backend development with a strong interest in DevOps and system architecture. 
          I'm currently advancing my skills in full-stack development with a keener interest in Backend Development and DevOps where I focus on everything from CI/CD to microservices.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl leading-relaxed text-[#4a4745] mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Outside of code, I enjoy writing on{" "}
          <a
            href="https://medium.com/@evembijo"
            className="text-[#8A4F2C] underline hover:text-[#6D4C41] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>, exploring design trends, and collaborating with teams that build meaningful things. Have a look and let me know what you think!. 
          I'm curious, always learning, and passionate about tech that makes a difference.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
