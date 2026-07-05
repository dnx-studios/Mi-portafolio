import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import FeaturedProject from './components/sections/FeaturedProject';
import UpcomingProject from './components/sections/UpcomingProject';
import Services from './components/sections/Services';
import Technologies from './components/sections/Technologies';
import WhyMe from './components/sections/WhyMe';
import Goal from './components/sections/Goal';
import Contact from './components/sections/Contact';

function Portfolio() {
  return (
    <div className="grid-bg min-h-[100dvh] text-foreground">
      <Navbar />

      <main className="w-full flex flex-col items-center">
        <div className="max-w-[680px] w-full mx-auto px-6 lg:px-0">
          <Hero />
          <About />
          <FeaturedProject />
          <UpcomingProject />
          <Services />
          <Technologies />
          <WhyMe />
          <Goal />
          <Contact />
        </div>
      </main>

      <footer className="w-full py-16 text-center text-[10px] font-mono tracking-widest text-muted-foreground mt-12 border-t border-border uppercase">
        <p>Dinox &copy; 2026</p>
      </footer>
    </div>
  );
}

export default Portfolio;
