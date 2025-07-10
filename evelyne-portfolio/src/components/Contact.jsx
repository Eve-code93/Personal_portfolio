import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 border-t border-[#c4bcb3]/30 bg-gradient-to-b from-[#e6e1d3] to-[#dad4c2]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-serif font-bold text-[#8A4F2C] mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 150 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            className="text-[#4a4745] text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Reach out for collaborations, opportunities, or just to say hello!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-[#8A4F2C]">Contact Me</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Email */}
              <motion.a
                href="mailto:evelynejoseph1993@gmail.com"
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-[#c4bcb3]/30 hover:border-[#8A4F2C]/50 transition-all group"
                whileHover={{ y: -5 }}
                title="Email Me"
              >
                <div className="bg-[#8A4F2C]/10 p-3 rounded-lg text-[#8A4F2C] group-hover:bg-[#8A4F2C] group-hover:text-white transition-all mb-2">
                  <FaEnvelope className="text-2xl" />
                </div>
                <span className="text-[#4a4745] font-medium">Email</span>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/Eve-code93"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-[#c4bcb3]/30 hover:border-[#8A4F2C]/50 transition-all group"
                whileHover={{ y: -5 }}
                title="GitHub Profile"
              >
                <div className="bg-[#8A4F2C]/10 p-3 rounded-lg text-[#8A4F2C] group-hover:bg-[#8A4F2C] group-hover:text-white transition-all mb-2">
                  <FaGithub className="text-2xl" />
                </div>
                <span className="text-[#4a4745] font-medium">GitHub</span>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/evelynembithejoseph/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-[#c4bcb3]/30 hover:border-[#8A4F2C]/50 transition-all group"
                whileHover={{ y: -5 }}
                title="LinkedIn Profile"
              >
                <div className="bg-[#8A4F2C]/10 p-3 rounded-lg text-[#8A4F2C] group-hover:bg-[#8A4F2C] group-hover:text-white transition-all mb-2">
                  <FaLinkedin className="text-2xl" />
                </div>
                <span className="text-[#4a4745] font-medium">LinkedIn</span>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/254718334271"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-[#c4bcb3]/30 hover:border-[#8A4F2C]/50 transition-all group"
                whileHover={{ y: -5 }}
                title="WhatsApp Chat"
              >
                <div className="bg-[#8A4F2C]/10 p-3 rounded-lg text-[#8A4F2C] group-hover:bg-[#8A4F2C] group-hover:text-white transition-all mb-2">
                  <FaWhatsapp className="text-2xl" />
                </div>
                <span className="text-[#4a4745] font-medium">WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-[#c4bcb3]/30 shadow-sm">
              <h3 className="text-2xl font-bold text-[#8A4F2C] mb-6">Send a Direct Message</h3>
              <form
                action="https://formspree.io/f/xnnvepyr"
                method="POST"
                className="space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#6b5f57] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-3 rounded-lg border border-[#c4bcb3]/50 focus:outline-none focus:ring-2 focus:ring-[#8A4F2C]/50 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#6b5f57] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-3 rounded-lg border border-[#c4bcb3]/50 focus:outline-none focus:ring-2 focus:ring-[#8A4F2C]/50 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#6b5f57] mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full p-3 rounded-lg border border-[#c4bcb3]/50 focus:outline-none focus:ring-2 focus:ring-[#8A4F2C]/50 focus:border-transparent transition-all"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#8A4F2C] to-[#6D4C41] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all font-medium shadow-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPaperPlane />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;