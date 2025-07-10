import { motion } from 'framer-motion';
import { FaPython, FaReact, FaDatabase, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiDjango, SiFlask, SiJavascript, SiPostgresql, SiTailwindcss, SiGit } from 'react-icons/si';

const skillSections = [
  {
    title: 'Core Languages',
    skills: [
      { name: 'Python', icon: <FaPython />, level: 90 },
      { name: 'JavaScript', icon: <SiJavascript />, level: 85 },
      { name: 'SQL', icon: <FaDatabase />, level: 80 },
      { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 90 }
    ]
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: <FaReact />, level: 88 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 80 },
      { name: 'Responsive Design', icon: <FaCss3Alt />, level: 85 }
    ]
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Django', icon: <SiDjango />, level: 92 },
      { name: 'Flask', icon: <SiFlask />, level: 75 },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85 },
      { name: 'REST APIs', icon: <FaDatabase />, level: 83 }
    ]
  },
  {
    title: 'Tools & Version Control',
    skills: [
      { name: 'Git', icon: <SiGit />, level: 85 },
      { name: 'Agile Methodologies', icon: <SiGit />, level: 80 },
      { name: 'VS Code', icon: <SiGit />, level: 90 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 border-t border-[#c4bcb3]/30 bg-gradient-to-b from-[#e6e1d3] to-[#dad4c2]">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-[#8A4F2C] text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 150 }}
          viewport={{ once: true }}
        >
          My Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillSections.map((section, idx) => (
            <motion.div
              key={section.title}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-[#c4bcb3]/30 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-[#8A4F2C] mb-6 pb-2 border-b border-[#c4bcb3]/30 flex items-center gap-3">
                <span className="bg-[#8A4F2C]/10 p-2 rounded-lg">
                  {section.skills[0].icon}
                </span>
                {section.title}
              </h3>
              <div className="space-y-4">
                {section.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className="group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-3">
                        <span className="text-[#8A4F2C] opacity-80 group-hover:opacity-100 transition-opacity">
                          {skill.icon}
                        </span>
                        <span className="text-[#4a4745] font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs text-[#6b5f57]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#c4bcb3]/20 h-2 rounded-full overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-[#8A4F2C] to-[#6D4C41] h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: i * 0.05 + 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          className="mt-12 bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-[#c4bcb3]/30 shadow-sm max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-[#8A4F2C] mb-4">Currently Learning </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Figma', 'Docker', 'AWS', 'Jest', 'GraphQL', 'Node.js', 'CI/CD'].map((skill) => (
              <motion.span
                key={skill}
                className="px-4 py-2 text-sm rounded-full bg-[#8A4F2C]/10 text-[#4a4745] border border-[#c4bcb3]"
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;