import './styles/globals.css';
import Cursor from './components/Cursor';
import Noise from './components/Noise';
import WaterCanvas from './components/WaterCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import Divider from './components/Divider';

export default function App() {
  return (
    <>
      <Cursor />
      <WaterCanvas />
      <Noise />
      <Navbar />
      <Hero />
      <Marquee />
      <Skills />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Education />
      <Footer />
    </>
  );
}
