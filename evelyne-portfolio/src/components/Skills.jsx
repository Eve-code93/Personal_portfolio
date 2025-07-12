import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaReact, FaHtml5, FaCss3Alt, FaDatabase, FaGit,
} from 'react-icons/fa';
import {
  SiJavascript, SiTailwindcss, SiDjango, SiFlask, SiPostgresql, SiFastapi,
  SiFigma, SiMiro, SiDocker, SiCypress
} from 'react-icons/si';

const categories = {
  'Languages': [
    { name: 'Python', icon: <FaPython />, level: 90 },
    { name: 'JavaScript', icon: <SiJavascript />, level: 85 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
  ],
  'Frontend': [
    { name: 'React', icon: <FaReact />, level: 88 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 80 },
  ],
  'Backend': [
    { name: 'Django', icon: <SiDjango />, level: 92 },
    { name: 'Flask', icon: <SiFlask />, level: 75 },
    { name: 'FastAPI', icon: <SiFastapi />, level: 65 },
  ],
  'Databases/APIs': [
    { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85 },
    { name: 'SQL', icon: <FaDatabase />, level: 80 },
    { name: 'REST APIs', icon: <FaDatabase />, level: 83 },
  ],
  'Collaboration': [
    { name: 'Git & GitHub', icon: <FaGit />, level: 88 },
    { name: 'Figma', icon: <SiFigma />, level: 70 },
    { name: 'Miro', icon: <SiMiro />, level: 65 },
  ],
  'Exploring': [
    { name: 'Docker', icon: <SiDocker />, level: 55 },
    { name: 'CI/CD', icon: <SiCypress />, level: 50 },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Languages');

  return (
    <section id="skills" className="py-16 px-4 bg-[#e6e1d3] border-t border-[#c4bcb3]/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-[#8A4F2C] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring' }}
        >
          Skills Snapshot
        </motion.h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                activeTab === category
                  ? 'bg-[#8A4F2C] text-white shadow-sm'
                  : 'bg-[#dad4c2] text-[#4a4745] hover:bg-[#c4bcb3]/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {categories[activeTab].map((skill, i) => (
            <motion.div
              key={skill.name}
              className="w-28 flex flex-col items-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-3xl text-[#4a4745] mb-1">{skill.icon}</div>
              <span className="text-xs font-medium text-[#4a4745]">{skill.name}</span>

              {/* Progress bar (auto loaded) */}
              <motion.div
                className="w-full mt-2"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-full h-1.5 bg-[#c4bcb3]/40 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#8A4F2C] to-[#6D4C41] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                  />
                </div>
                <div className="text-[10px] mt-1 text-[#6b5f57]">{skill.level}%</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
