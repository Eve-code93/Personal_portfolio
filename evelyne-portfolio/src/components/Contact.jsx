import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 border-t border-[#c4bcb3]/30 bg-gradient-to-b from-[#e6e1d3] to-[#dad4c2]"
    >
      <div className="max-w-md mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-serif font-bold text-[#8A4F2C] mb-3">
            Let's Connect
          </h2>
          <p className="text-[#4a4745]">
            Have a project in mind or want to chat? Reach out below.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          action="https://formspree.io/f/xnnvepyr"
          method="POST"
          className="space-y-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full p-3 bg-white/80 rounded-lg border border-[#c4bcb3]/30 focus:outline-none focus:ring-2 focus:ring-[#8A4F2C]/50 placeholder-[#6b5f57]"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full p-3 bg-white/80 rounded-lg border border-[#c4bcb3]/30 focus:outline-none focus:ring-2 focus:ring-[#8A4F2C]/50 placeholder-[#6b5f57]"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your message"
              rows="4"
              required
              className="w-full p-3 bg-white/80 rounded-lg border border-[#c4bcb3]/30 focus:outline-none focus:ring-2 focus:ring-[#8A4F2C]/50 placeholder-[#6b5f57]"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 bg-[#8A4F2C] text-white rounded-lg hover:bg-[#6D4C41] transition-colors font-medium flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaPaperPlane />
            Send Message
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="mt-10 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[
            { icon: <FaEnvelope />, link: 'mailto:evelynejoseph1993@gmail.com', label: 'Email' },
            { icon: <FaGithub />, link: 'https://github.com/Eve-code93', label: 'GitHub' },
            { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/evelynembithejoseph/', label: 'LinkedIn' },
            { icon: <FaWhatsapp />, link: 'https://wa.me/254718334271', label: 'WhatsApp' }
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/80 rounded-full border border-[#c4bcb3]/30 text-[#8A4F2C] hover:bg-[#8A4F2C] hover:text-white transition-colors"
              whileHover={{ y: -3 }}
              title={item.label}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;