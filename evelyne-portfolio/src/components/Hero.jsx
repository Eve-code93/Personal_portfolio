import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const [lastVisit, setLastVisit] = useState('');

  useEffect(() => {
    const last = localStorage.getItem('lastVisit');
    if (last) setLastVisit(last);
    localStorage.setItem('lastVisit', new Date().toLocaleString());
  }, []);

  return (
    <section
      id="hero"
      className="min-h-[70vh] flex flex-col items-center justify-center bg-[#e6e1d3] px-6 font-mono text-[#3c3b38] relative border-b border-[#c4bcb3]/30"
    >
      {/* Header text */}
      <motion.h1
        className="text-xl md:text-2xl mb-8 font-semibold text-[#8A4F2C]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typewriter
          words={['Full-Stack Software Developer for Hire']}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={40}
          delaySpeed={3000}
        />
      </motion.h1>

      {/* Simulated terminal */}
      <div className="w-full max-w-3xl text-left leading-loose text-[1.2rem] md:text-[1.35rem]">
        <p className="mb-4">
          <span className="text-[#8A4F2C] font-bold">eve@portfolio</span>:~$&nbsp;
          <Typewriter
            words={['Bonjour', 'hello', 'Karibu', '👋', 'Ciao', 'Hola']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={2000}
          />
        </p>

        <p className="mb-4">
          <span className="text-[#8A4F2C] font-bold">eve@portfolio</span>:~$&nbsp;
          <Typewriter
            words={[
              'I build fast, scalable full-stack apps.',
              'React + Django = 💻💥',
              'Clean code. Reliable systems.',
              'Frontend meets Backend.',
              'Crafting digital experiences.',
              'Your next project starts here.',
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={40}
            delaySpeed={2500}
          />
        </p>

        <p className="mb-6">
          <span className="text-[#8A4F2C] font-bold">eve@portfolio</span>:~$&nbsp;
          <Typewriter
            words={[
              'Open to remote opportunities.',
              'Available for freelance work.',
              'Let’s build something amazing.',
              'Ready to collaborate on your next project.',
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={3000}
          />
        </p>
      </div>

      {/* Last Visit */}
      {lastVisit && (
        <p className="text-sm text-[#5f5954] italic mt-4">// Last visit: {lastVisit}</p>
      )}

      {/* Scroll Arrow */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaArrowDown className="text-[#8A4F2C] text-xl opacity-80" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
