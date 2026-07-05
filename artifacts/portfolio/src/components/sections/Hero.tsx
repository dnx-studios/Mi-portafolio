import { motion, type Variants } from 'framer-motion';

export default function Hero() {
  const avatarUrl = import.meta.env.BASE_URL + 'avatar.png';

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
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
        {/* Avatar */}
        <motion.div variants={itemVariants} className="flex flex-col items-start gap-4">
          <div
            className="avatar-ring"
            onContextMenu={(e) => e.preventDefault()}
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-black">
              <img
                src={avatarUrl}
                alt="Dinox"
                draggable={false}
                className="w-full h-full object-cover select-none"
                style={{ WebkitUserDrag: 'none' } as React.CSSProperties}
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.style.display = 'none';
                  t.parentElement!.innerHTML =
                    '<div class="w-full h-full flex items-center justify-center font-serif text-3xl text-white/30">D</div>';
                }}
              />
            </div>
          </div>
          <div className="font-mono text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase">
            Desarrollador · México · 17 años
          </div>
        </motion.div>

        {/* Name */}
        <motion.div variants={itemVariants} className="space-y-1 sm:space-y-2">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-foreground leading-tight tracking-tight">
            Dinox
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-muted-foreground italic leading-tight">
            Desarrollador
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-muted-foreground/80 max-w-md font-sans font-light leading-relaxed"
        >
          Convirtiendo ideas en proyectos funcionales.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6"
        >
          <a
            href="#proyectos"
            className="w-full sm:w-auto px-6 py-3 rounded-lg glass border border-white/15 text-white text-sm tracking-wide font-medium text-center hover:bg-white/10 hover:border-white/25 transition-all duration-300"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="w-full sm:w-auto px-6 py-3 rounded-lg glass border border-white/08 text-foreground text-sm tracking-wide font-medium text-center hover:bg-white/08 hover:border-white/15 transition-all duration-300"
          >
            Contactar
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
