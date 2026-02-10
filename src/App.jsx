import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full overflow-x-hidden min-h-screen">
      {/* Background Mesh Gradient */}
      <div className="fixed inset-0 bg-slate-50 dark:bg-slate-950 -z-50 transition-colors duration-300"></div>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-40 pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[30%] right-[20%] w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[20%] left-[30%] w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <Navbar />

      <main className="pb-24"> {/* Padding bottom for floating navbar */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;