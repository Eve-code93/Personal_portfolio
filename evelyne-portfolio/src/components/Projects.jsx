import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaCodeBranch, FaGlobe, FaExternalLinkAlt } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

const PROJECTS = [
  {
    name: 'SwiftDrop',
    repo: 'SwiftDrop',
    live: 'https://swiftdrop-1.onrender.com/',
  },
  {
    name: 'Delivery Tracker CLI',
    repo: 'delivery-tracker-cli',
    live: null,
  },
  {
    name: 'GitHub Profile Viewer',
    repo: 'github-profile-viewer',
    live: 'https://github-profile-viewer-rosy.vercel.app/',
  },
  {
    name: 'Furniture API',
    repo: 'ready_to_assemble_furniture_api',
    live: null,
  },
  {
    name: 'ALX Travel App',
    repo: 'alx_travel_app',
    live: null,
    inProgress: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: 'spring',
      stiffness: 100,
    },
  }),
  hover: {
    y: -8,
    boxShadow: '0 15px 30px -5px rgba(138, 79, 44, 0.2)',
  },
};

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const data = await Promise.all(
        PROJECTS.map(async (project) => {
          const res = await fetch(`https://api.github.com/repos/Eve-code93/${project.repo}`);
          const repoData = await res.json();
          return {
            ...repoData,
            live: project.live,
            displayName: project.name,
            inProgress: project.inProgress || false,
          };
        })
      );
      setRepos(data);
    };
    fetchRepos();
  }, []);

  return (
    <section
      id="projects"
      className="py-20 px-4 border-t border-[#c4bcb3]/30 bg-gradient-to-b from-[#e6e1d3] to-[#dad4c2]"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-[#8A4F2C] text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, idx) => (
            <motion.div
              key={repo.id}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              variants={cardVariants}
              viewport={{ once: true, margin: '-50px' }}
              className="relative bg-white/90 backdrop-blur-md p-6 rounded-xl border border-[#c4bcb3]/30 shadow-lg flex flex-col group transition"
            >
              {/* Currently working on badge */}
              {repo.inProgress && (
                <span className="absolute top-4 right-4 bg-[#8A4F2C] text-white text-xs px-3 py-1 rounded-full shadow-sm">
                  Currently Working On
                </span>
              )}

              <div className="mb-4">
                <h3 className="text-2xl font-bold text-[#8A4F2C] mb-1">
                  {repo.displayName || repo.name.replace(/[-_]/g, ' ')}
                </h3>
                <p className="text-[#4a4745] text-sm">
                  {repo.description || 'No description available.'}
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-[#6b5f57] mb-6">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <FaStar className="text-[#8A4F2C]" /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCodeBranch className="text-[#8A4F2C]" /> {repo.forks_count}
                  </span>
                </div>
                <span>
                  {repo.updated_at && new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mt-auto">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#8A4F2C] border border-[#8A4F2C] px-4 py-2 rounded hover:bg-[#8A4F2C] hover:text-white transition"
                >
                  <FiGithub />
                  View Repo
                </a>
                {repo.live && (
                  <a
                    href={repo.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#8A4F2C] border border-[#8A4F2C] px-4 py-2 rounded hover:bg-[#8A4F2C] hover:text-white transition"
                  >
                    <FaGlobe />
                    Live Preview
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/Eve-code93"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-[#8A4F2C] text-[#8A4F2C] rounded-lg hover:bg-[#8A4F2C] hover:text-white transition"
          >
            View All Projects <FaExternalLinkAlt className="ml-2" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
