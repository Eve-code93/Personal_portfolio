import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showResumeOptions, setShowResumeOptions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = [
        'about',
        'experience',
        'projects',
        'skills',
        'certifications',
        'contact',
      ];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleResumeMenu = () => {
    setShowResumeOptions(!showResumeOptions);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-[#c4bcb3]/30 shadow-sm ${
        scrolled ? 'bg-[#e6e1d3]/95 backdrop-blur-md' : 'bg-[#e6e1d3]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6">
        {/* Brand */}
        <h1 className="text-lg md:text-2xl font-serif font-bold text-[#8A4F2C] tracking-tight">
          Evelyne Mbithe Joseph
        </h1>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm md:text-base font-medium">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className={`relative transition-colors duration-200 ${
                activeSection === item.id
                  ? 'text-[#8A4F2C] font-semibold'
                  : 'text-[#4a4745] hover:text-[#8A4F2C]'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-[#8A4F2C]"
                  transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
                />
              )}
            </motion.a>
          ))}
        </nav>

        {/* Resume Button */}
        <div className="relative">
          <motion.button
            onClick={toggleResumeMenu}
            className="px-4 py-2 border border-[#8A4F2C] text-[#8A4F2C] rounded-md font-medium hover:bg-[#8A4F2C]/10 transition text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.button>

          {showResumeOptions && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute right-0 mt-2 w-44 bg-white border border-[#c4bcb3] rounded-md shadow-lg z-50"
            >
              <a
                href="/_Resume 1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-[#4a4745] hover:bg-[#8A4F2C]/10"
                onClick={() => setShowResumeOptions(false)}
              >
                View Resume
              </a>
              <a
                href="/_Resume 1.pdf"
                download="_Resume 1.pdf"
                className="block px-4 py-2 text-sm text-[#4a4745] hover:bg-[#8A4F2C]/10 border-t border-[#c4bcb3]"
                onClick={() => setShowResumeOptions(false)}
              >
                Download PDF
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
