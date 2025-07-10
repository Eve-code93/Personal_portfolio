import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiGithub, FiCode, FiSmartphone, FiActivity } from 'react-icons/fi';

const techBadges = [
  { label: 'React', icon: <FiSmartphone /> },
  { label: 'Django', icon: <FiCode /> },
  { label: 'GitHub', icon: <FiGithub /> },
];

const WelcomeScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const animateAndHide = async () => {
      await controls.start({ opacity: 1, y: 0, transition: { staggerChildren: 0.25 } });
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 800);
      }, 4000);
    };
    animateAndHide();
  }, [controls, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#e6e1d3] via-[#dad4c2] to-[#c4bcb3] overflow-hidden"
    >
      {/* Glowing dots background */}
      <div className="absolute w-full h-full overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#8A4F2C] rounded-full opacity-20 blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{ y: [-10, 10] }}
            transition={{
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 3 + Math.random() * 2,
              delay: i * 0.05
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.1, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10"
      >
        {/* Hero Title */}
        <motion.h1
          className="text-5xl md:text-6xl font-serif font-bold text-[#1C1C1C] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Evelyne’s <span className="text-[#8A4F2C]">Portfolio</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-[#4a4745] mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Code • Design • Creativity
        </motion.p>

        {/* Animated Tech Badges */}
        <motion.div className="flex justify-center gap-6 mb-10">
          {techBadges.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              className="bg-white/80 backdrop-blur-lg p-4 rounded-xl text-[#8A4F2C] shadow-md flex items-center gap-2 text-sm font-medium hover:scale-105 transition-transform"
            >
              {item.icon}
              {item.label}
            </motion.div>
          ))}
        </motion.div>

        {/* Pulse Loading Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              className="w-2 h-2 rounded-full bg-[#8A4F2C]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
                delay: dot * 0.2
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeScreen;
