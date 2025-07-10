import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Full-Stack Web Developer',
    company: 'Freelance & Personal Projects',
    period: '2023 – Present',
    description:
      'Designed and developed full-stack applications using React, Django, and PostgreSQL. Focused on building responsive UIs, secure backends, and RESTful APIs. Projects include an e-commerce platform, blogging system, and a ready-to-assemble furniture API.',
    skills: ['React', 'Django', 'PostgreSQL', 'REST APIs', 'Tailwind CSS']
  },
  {
    role: 'ALX Software Engineering Program',
    company: 'ALX Africa',
    period: '2023 – 2024',
    description:
      'Completed a rigorous hands-on software engineering program focused on full-stack web development, databases, and system design. Worked in teams on real-world projects using Git, Agile practices, and clean code principles.',
    skills: ['Git', 'Agile', 'System Design', 'Algorithms', 'Team Collaboration']
  },
  {
    role: 'Hospitality Industry Background',
    company: 'Various Brands',
    period: '2015 – 2022',
    description:
      'Led customer-facing teams, managed operations, and developed strong communication and organizational skills. This experience shaped my approach to user empathy and service-oriented design in tech.',
    skills: ['Leadership', 'Communication', 'User Empathy', 'Problem Solving']
  }
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3
    }
  }
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-4 border-t border-[#c4bcb3]/30 bg-gradient-to-b from-[#e6e1d3] to-[#dad4c2]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-[#8A4F2C] text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          viewport={{ once: true }}
        >
          Professional Journey
        </motion.h2>

        <motion.div
          className="relative"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 h-full w-0.5 bg-[#8A4F2C]/20 -translate-x-1/2" />

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 120,
                  damping: 18,
                  delay: index * 0.2
                }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-6 ${
                    index % 2 === 0
                      ? 'left-6 md:left-1/2 -translate-x-1/2'
                      : 'right-6 md:right-1/2 translate-x-1/2'
                  } w-6 h-6 rounded-full bg-[#8A4F2C] border-4 border-[#e6e1d3] z-10`}
                />

                <motion.div
                  className={`bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-lg border border-[#c4bcb3]/30 shadow-md hover:shadow-lg transition-transform ${
                    index % 2 === 0
                      ? 'md:mr-auto md:max-w-[48%]'
                      : 'md:ml-auto md:max-w-[48%]'
                  }`}
                  whileHover={{ y: -6 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-[#8A4F2C] mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#4a4745] font-medium">{exp.company}</span>
                    <span className="text-[#8A4F2C]">•</span>
                    <span className="text-sm text-[#6b5f57] italic">{exp.period}</span>
                  </div>
                  <p className="text-[#4a4745] leading-relaxed mb-5">{exp.description}</p>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-[#8A4F2C]/10 text-[#8A4F2C] border border-[#8A4F2C]/20 backdrop-blur-sm"
                        whileHover={{ scale: 1.08 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
