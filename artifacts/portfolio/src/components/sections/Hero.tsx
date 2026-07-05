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
      className="min-h-screen pt-32 pb-24 flex flex-col justify-center w-full items-center text-center sm:items-start sm:text-left"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8 flex flex-col items-center sm:items-start"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center sm:items-start gap-4">
          <div className="avatar-ring flex-shrink-0">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-black flex items-center justify-center">
              <img 
                src={avatarUrl} 
                alt="Dinox" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = '<div class="text-3xl font-serif text-white/50">D</div>';
                }}
              />
            </div>
          </div>
          <div className="font-mono text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase">
            Desarrollador · México · 17 años
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-2">
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

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-6 w-full sm:w-auto">
          <a 
            href="#proyectos" 
            className="glass w-full sm:w-auto px-6 py-3 rounded-lg text-white border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-sm tracking-wide font-medium text-center"
          >
            Ver proyectos
          </a>
          <a 
            href="#contacto" 
            className="glass w-full sm:w-auto px-6 py-3 rounded-lg text-foreground hover:bg-white/5 hover:border-white/20 transition-all duration-300 text-sm tracking-wide font-medium text-center"
          >
            Contactar
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
