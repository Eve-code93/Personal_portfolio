import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WelcomeScreen from './components/WelcomeScreen';


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
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="relative bg-gradient-to-b from-[#e6e1d3] to-[#c4bcb3] text-[#1C1C1C] min-h-screen font-sans antialiased">
    

      {/* Welcome Screen - Shows first, then fades out */}
      {!showContent && <WelcomeScreen onComplete={() => setShowContent(true)} />}

      {/* Main Content */}
      {showContent && (
        <>
          <Navbar />
          <main className="pt-16 md:pt-20">
            <Hero />

            <Section id="about" title="About Me">
              <p className="max-w-4xl mx-auto text-[#4a4745] leading-relaxed text-lg">
                I'm Evelyne, a passionate full-stack developer specializing in modern web technologies. 
                With expertise in both frontend and backend development, I create performant, 
                accessible digital experiences that users love.
              </p>
            </Section>

            <Section id="experience" title="Professional Journey">
              <div className="max-w-4xl mx-auto">
                <p className="text-[#4a4745] mb-8">Coming soon...</p>
                <div className="h-64 bg-white/30 rounded-lg flex items-center justify-center backdrop-blur-sm border border-[#c4bcb3]/30">
                  <p className="text-[#8A4F2C]">Experience timeline will go here</p>
                </div>
              </div>
            </Section>

            <Section id="projects" title="My Work">
              <div className="max-w-6xl mx-auto">
                <p className="text-[#4a4745] mb-8">Coming soon...</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-white/30 rounded-lg h-64 flex items-center justify-center backdrop-blur-sm border border-[#c4bcb3]/30">
                      <p className="text-[#8A4F2C]">Project {item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            <Section id="skills" title="My Toolkit">
              <div className="max-w-4xl mx-auto">
                <p className="text-[#4a4745] mb-8">Coming soon...</p>
                <div className="h-64 bg-white/30 rounded-lg flex items-center justify-center backdrop-blur-sm border border-[#c4bcb3]/30">
                  <p className="text-[#8A4F2C]">Skills visualization will go here</p>
                </div>
              </div>
            </Section>

            <Section id="certifications" title="Credentials">
              <div className="max-w-4xl mx-auto">
                <p className="text-[#4a4745] mb-8">Coming soon...</p>
                <div className="h-64 bg-white/30 rounded-lg flex items-center justify-center backdrop-blur-sm border border-[#c4bcb3]/30">
                  <p className="text-[#8A4F2C]">Certifications will be displayed here</p>
                </div>
              </div>
            </Section>

            <Section id="contact" title="Get In Touch">
              <div className="max-w-2xl mx-auto">
                <p className="text-[#4a4745] mb-8">Coming soon...</p>
                <div className="h-64 bg-white/30 rounded-lg flex items-center justify-center backdrop-blur-sm border border-[#c4bcb3]/30">
                  <p className="text-[#8A4F2C]">Contact form will go here</p>
                </div>
              </div>
            </Section>
          </main>

          <footer className="py-8 border-t border-[#c4bcb3]/20 text-center text-[#8A4F2C]/80">
            <p>© {new Date().getFullYear()} Evelyne Mbithe Joseph. All rights reserved.</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
