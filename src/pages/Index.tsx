import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Impact from '../components/Impact';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Index = () => (
  <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
    {/* Grain texture overlay */}
    <div className="grain-overlay" />

    <Navbar />
    <Hero />
    <div className="divider" />
    <About />
    <Impact />
    <div className="divider" />
    <Projects />
    <Experience />
    <div className="divider" />
    <Skills />
    <Contact />
  </div>
);

export default Index;
