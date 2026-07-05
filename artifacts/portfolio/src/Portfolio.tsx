import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import FeaturedProject from './components/sections/FeaturedProject';
import Services from './components/sections/Services';
import Technologies from './components/sections/Technologies';
import WhyMe from './components/sections/WhyMe';
import Goal from './components/sections/Goal';
import Contact from './components/sections/Contact';

function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/30">
      {/* Noise overlay for texture */}
      <div className="noise-overlay"></div>
      
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl">
          <Hero />
          <About />
          <FeaturedProject />
          <Services />
          <Technologies />
          <WhyMe />
          <Goal />
          <Contact />
        </div>
      </main>

      <footer className="w-full py-8 text-center text-sm text-muted-foreground mt-20 border-t border-white/5">
        <p>Diseñado y desarrollado por Dinox &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default Portfolio;
