import { motion } from 'framer-motion';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const experiences = [
 {
  role: 'ALX ProDev Program (Backend Specialization)',
  company: 'ALX Africa',
  period: '2025 (Ongoing – Ends Dec)',
  description:
    'An advanced backend & DevOps specialization focusing on CI/CD, containerization, microservices, security, and performance optimization. ',
  skills: [
    'Advanced Python',
    'SQL & DB Design',
    'Docker',
    'Microservices',
    'CI/CD Pipelines',
    'Security Best Practices',
    'Testing with Pytest',
    'Caching & Redis',
  ],
  certificateLink: '', // You'll upload later
  learnMore: 'https://www.alxafrica.com/prodev/'
  },

  {
    role: 'Full-Stack Software Developer',
    company: 'Moringa School',
    period: '2024 (Ends July 2025)',
    description:
      'Comprehensive curriculum with hands-on training in frontend and backend technologies. Building full-stack web apps using React, Django, and PostgreSQL.',
    skills: ['JavaScript', 'React', 'HTML/CSS', 'Flask', 'Agile'],
    links: {
      course: 'https://moringaschool.com/',
    },
    certificate: '', // Add later
  },
  {
    role: 'ALX Backend Engineering Graduate',
    company: 'ALX Africa',
    period: '2024 – 2025',
    description:
      'Completed intensive backend training: Python, APIs, databases, Linux, Git, and advanced system design with peer learning.',
    skills: ['Python', 'APIs', 'System Design', 'GitHub', 'Collaboration'],
    links: {
      course: 'https://www.alxafrica.com/software-engineering/',
      linkedin: 'https://www.linkedin.com/in/evelynembithejoseph/',
    },
    certificate: '/certificates/alx-backend.pdf', // Replace with actual URL later
  },
  {
    role: 'Full-Stack Developer (Freelance & Personal)',
    company: 'Self-Taught & Projects',
    period: '2023 – Present',
    description:
      'Built and deployed web apps using Django, React, and PostgreSQL. Projects include an e-commerce site, blog engine, and furniture API.',
    skills: ['React', 'Django', 'PostgreSQL', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/Eve-code93',
    },
  },
 
  {
    role: 'Marketing & Sales (Real Estate)',
    company: 'Various Real Estate Brands',
    period: '2015 – 2022',
    description:
      'Managed listings, optimized content with SEO, and closed property sales. This business background shaped my user-first approach in tech.',
    skills: ['SEO', 'Sales', 'Customer Success', 'Content Strategy'],
     links: {
      linkedin: 'https://www.linkedin.com/in/evelynembithejoseph/',
    },
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-4 border-t border-[#c4bcb3]/30 bg-gradient-to-b from-[#e6e1d3] to-[#dad4c2]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-[#8A4F2C] text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          Experience & Education
        </motion.h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-md p-6 rounded-xl border border-[#c4bcb3]/30 shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-2">
                <h3 className="text-xl md:text-2xl font-bold text-[#8A4F2C]">{exp.role}</h3>
                <p className="text-sm text-[#6b5f57] flex items-center gap-1">
                  <span>{exp.company}</span>
                  <span className="text-[#8A4F2C]">•</span>
                  <span className="italic">{exp.period}</span>
                </p>
              </div>

              <p className="text-[#4a4745] mb-4">{exp.description}</p>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-[#8A4F2C]/10 text-[#8A4F2C] border border-[#8A4F2C]/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 text-sm text-[#4a4745]">
                {exp.links?.course && (
                  <a
                    href={exp.links.course}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#8A4F2C] transition"
                  >
                    View Course
                  </a>
                )}
                {exp.certificate && (
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#8A4F2C] transition"
                  >
                    View Certificate
                  </a>
                )}
                {exp.links?.linkedin && (
                  <a
                    href={exp.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 underline hover:text-[#8A4F2C] transition"
                  >
                    <FaLinkedin className="text-base" />
                    Learn More
                  </a>
                )}
                {exp.links?.github && (
                  <a
                    href={exp.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#8A4F2C] transition"
                  >
                    Projects on GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
