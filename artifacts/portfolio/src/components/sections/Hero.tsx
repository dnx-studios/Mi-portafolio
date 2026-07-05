import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Code2, Terminal } from 'lucide-react';

export default function Hero() {
  const avatarUrl = import.meta.env.BASE_URL + 'avatar.png';

  return (
    <section 
      id="inicio" 
      className="min-h-screen pt-28 pb-20 flex flex-col justify-center relative w-full"
    >
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono mb-6">
              <Terminal className="w-4 h-4" />
              <span>System.out.println("Hello, World!");</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              Dinox <span className="text-muted-foreground font-light">|</span> <span className="text-gradient">Desarrollador</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground font-light max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Convirtiendo ideas en proyectos funcionales.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a 
              href="#proyectos" 
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 hover:shadow-[var(--shadow-glow)]"
            >
              <Code2 className="w-5 h-5" />
              Ver proyectos
            </a>
            <a 
              href="#contacto" 
              className="w-full sm:w-auto px-8 py-4 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 border border-white/5 transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contactar
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground font-mono"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Disponible para proyectos
            </span>
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          className="relative lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
            {/* Glow effect behind avatar */}
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl group-hover:bg-primary/30 transition-all duration-500 transform group-hover:scale-110"></div>
            
            {/* Avatar container */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-card/50 backdrop-blur-sm overflow-hidden z-10 flex items-center justify-center p-2 shadow-xl transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-1">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-black/40 border border-white/5 relative">
                <img 
                  src={avatarUrl} 
                  alt="Dinox Avatar" 
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-125 saturate-110 transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-6xl">😺</div>';
                  }}
                />
                
                {/* Tech decorative overlay */}
                <div className="absolute top-0 right-0 p-3 opacity-30 text-xs font-mono text-primary flex flex-col items-end">
                  <span>&lt;sys/init&gt;</span>
                  <span>0x0F4A</span>
                </div>
              </div>
            </div>
            
            {/* Decorative floating elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-16 h-16 rounded-xl bg-card border border-white/10 flex items-center justify-center shadow-lg z-20 backdrop-blur-md"
            >
              <Code2 className="w-8 h-8 text-primary" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-4 px-4 py-2 rounded-lg bg-card border border-white/10 flex items-center gap-2 shadow-lg z-20 backdrop-blur-md"
            >
              <span className="text-xl">🇲🇽</span>
              <span className="font-mono text-sm font-medium">MXN_DEV</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
