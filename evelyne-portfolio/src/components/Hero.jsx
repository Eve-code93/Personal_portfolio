import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#e6e1d3] to-[#c4bcb3] text-[#1C1C1C] px-4"
    >
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-serif font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hi, I'm <span className="text-[#8A4F2C]">Evelyne</span>
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl font-medium mb-8 text-[#4a4745]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Web Developer & Digital Craftsman
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-[#4a4745] max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          I create elegant, functional digital experiences with meticulous attention to detail, 
          blending clean code with thoughtful design for seamless user interactions.
        </motion.p>

        {/* Main CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-[#8A4F2C] text-white rounded-lg hover:bg-[#9e5c38] transition-all duration-300 font-medium shadow-md hover:shadow-lg hover:scale-105"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work →
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 border-2 border-[#8A4F2C] text-[#8A4F2C] rounded-lg hover:bg-[#8A4F2C] hover:text-white transition-all duration-300 font-medium shadow-md hover:shadow-lg hover:scale-105"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Let's Connect
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex justify-center gap-6 text-[#8A4F2C] text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.a
            href="https://github.com/Eve-code93"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-[#4a4745] transition"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/evelynembithejoseph/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-[#4a4745] transition"
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
