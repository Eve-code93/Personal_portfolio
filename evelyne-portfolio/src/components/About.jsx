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
         I'm Evelyne, a passionate full-stack developer dedicated to crafting elegant and intuitive web applications. 
          With a background in both frontend and backend development, I enjoy transforming complex problems into beautiful, functional experiences. 
          I'm constantly learning and thrive in collaborative, fast-paced environments that challenge me to push the boundaries of what's possible.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl leading-relaxed text-[#4a4745] mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Outside of coding, I enjoy writing on <a 
            href="https://medium.com/@evembijo" 
            className="text-[#8A4F2C] underline hover:text-[#6D4C41] transition-colors" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Medium
          </a>, exploring UI/UX trends, and contributing to open-source projects. My goal is to use technology to create meaningful digital products that leave a lasting impact to not only myself but to the people around me.
        </motion.p>
      </div>
    </section>
  );
};

export default About;