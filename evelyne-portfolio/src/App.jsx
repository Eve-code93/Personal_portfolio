import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const Section = ({ id, title, children }) => (
  <section id={id} className="py-20 px-4 border-t border-[#c4bcb3]/20">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#8A4F2C] inline-block">
        {title}
      </h2>
    </div>
    {children}
  </section>
);

function App() {
  return (
    <div className="relative bg-gradient-to-b from-[#e6e1d3] to-[#c4bcb3] text-[#1C1C1C] min-h-screen font-sans antialiased">
      <Navbar />

      <main className="pt-16 md:pt-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <footer className="py-8 border-t border-[#c4bcb3]/20 text-center text-[#8A4F2C]/80">
        <p>© {new Date().getFullYear()} Evelyne Mbithe Joseph. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
