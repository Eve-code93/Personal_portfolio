import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Highlight nav link based on scroll position
      const sections = ['about', 'experience', 'projects', 'skills', 'certifications'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`w-full ${
        scrolled ? 'bg-[#e6e1d3]/90 backdrop-blur-sm' : 'bg-[#e6e1d3]'
      } text-[#1C1C1C] fixed top-0 z-50 transition-all duration-300 border-b border-[#c4bcb3]/30 shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo/Name */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-[#8A4F2C] whitespace-nowrap"
        >
          Evelyne Mbithe Joseph
        </motion.h1>

        {/* Navigation */}
        <nav className="flex items-center justify-center flex-wrap gap-x-6 gap-y-2 text-base md:text-lg font-medium tracking-wide">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className={`relative px-1 py-1 transition-all duration-200 ${
                activeSection === item.id
                  ? 'text-[#8A4F2C] font-semibold scale-105'
                  : 'text-[#4a4745] hover:text-[#8A4F2C]'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-[#8A4F2C]"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.a>
          ))}
        </nav>

        {/* Resume Button */}
        <motion.a
          href="/Evelyne_Joseph_Resume.pdf"
          download
          className="hidden md:block relative px-4 py-2 rounded-md group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center gap-1 text-[#8A4F2C] group-hover:text-white transition-colors">
            <span>Resume</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </span>
          <span className="absolute inset-0 border border-[#8A4F2C] rounded-md group-hover:border-transparent transition-all duration-300"></span>
          <span className="absolute inset-0 bg-[#8A4F2C] rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Navbar;
