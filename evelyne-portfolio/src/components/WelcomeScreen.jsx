import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiCode, FiCpu, FiLayers } from 'react-icons/fi';

const WelcomeScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();
  const iconControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await iconControls.start({
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.2 }
      });

      setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 800);
      }, 3500);
    };

    sequence();
  }, [onComplete, iconControls]);

  const floatingIcons = [
    { icon: <FiCode className="text-3xl" />, delay: 0.1 },
    { icon: <FiCpu className="text-3xl" />, delay: 0.3 },
    { icon: <FiLayers className="text-3xl" />, delay: 0.5 },
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#e6e1d3] via-[#dad4c2] to-[#c4bcb3]"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.1, opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center relative z-10"
      >
        {/* Main title */}
        <motion.h1
          className="text-5xl md:text-6xl font-serif font-bold text-[#1C1C1C] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to <span className="text-[#8A4F2C]">Evelyne’s</span> Portfolio
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-[#4a4745] mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Web Developer • Clean Code Enthusiast • Digital Creator
        </motion.p>

        {/* Animated icons */}
        <motion.div className="flex justify-center gap-6 mb-10">
          {floatingIcons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={iconControls}
              custom={index}
              whileHover={{ scale: 1.1 }}
              className="text-[#1C1C1C] bg-white/70 p-4 rounded-full shadow backdrop-blur-md"
              transition={{ type: 'spring', stiffness: 200 }}
            >
              {item.icon}
            </motion.div>
          ))}
        </motion.div>

        {/* Loading bar */}
        <motion.div
          className="h-1 bg-[#c2b8a2] rounded-full max-w-sm mx-auto overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "linear" }}
        >
          <motion.div
            className="h-full bg-[#8A4F2C]"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeScreen;
