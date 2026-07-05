import { motion, type Variants } from 'framer-motion';

export default function Hero() {
  const avatarUrl = import.meta.env.BASE_URL + 'avatar.png';

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section 
      id="inicio" 
      className="min-h-screen pt-32 pb-24 flex flex-col justify-center w-full"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-border shrink-0">
            <img 
              src={avatarUrl} 
              alt="Dinox" 
              className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-xs font-serif bg-white/5">D</div>';
              }}
            />
          </div>
          <div className="font-mono text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase">
            Desarrollador · México · 17 años
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-1 sm:space-y-2">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-foreground leading-tight tracking-tight">
            Dinox
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-muted-foreground italic leading-tight">
            Desarrollador
          </h2>
        </motion.div>

        <motion.p variants={itemVariants} className="text-lg sm:text-xl text-muted-foreground/80 max-w-md font-sans font-light leading-relaxed">
          Convirtiendo ideas en proyectos funcionales.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6">
          <a 
            href="#proyectos" 
            className="w-full sm:w-auto px-6 py-3 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm tracking-wide font-medium text-center"
          >
            Ver proyectos
          </a>
          <a 
            href="#contacto" 
            className="w-full sm:w-auto px-6 py-3 border border-border text-foreground hover:border-white/30 transition-all duration-300 text-sm tracking-wide font-medium text-center"
          >
            Contactar
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}