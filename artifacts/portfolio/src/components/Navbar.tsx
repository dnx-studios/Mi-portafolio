import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre mí', href: '#sobre-mi' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Tecnologías', href: '#tecnologias' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple intersection observer logic for active section
      const sections = navItems.map(item => item.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      
      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 100) {
        setActiveSection('inicio');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-md border-b border-white/10 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a 
            href="#inicio" 
            className="font-display font-bold text-xl tracking-tighter flex items-center gap-2 group"
          >
            <span className="w-8 h-8 rounded bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <span className="font-mono text-lg font-bold">D</span>
            </span>
            <span>Dinox<span className="text-primary">.</span></span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  activeSection === item.href.substring(1)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-primary/10 rounded-md -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-foreground p-2 -mr-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menú de navegación"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-card border-l border-white/10 z-50 flex flex-col p-6 shadow-2xl md:hidden"
            >
              <div className="flex justify-end mb-8">
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-muted-foreground hover:text-foreground bg-white/5 rounded-full"
                  aria-label="Cerrar menú de navegación"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                      activeSection === item.href.substring(1)
                        ? 'bg-primary/10 text-primary border border-primary/20'
                        : 'text-muted-foreground hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
