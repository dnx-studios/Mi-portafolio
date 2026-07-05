import { motion } from 'framer-motion';

export default function Goal() {
  return (
    <section id="objetivo" className="py-16 sm:py-24 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <blockquote className="glass rounded-2xl px-8 py-7 border-l-2 border-white/20 space-y-3">
          <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
            Mi objetivo
          </p>
          <p className="text-foreground/80 font-light leading-relaxed sm:text-lg">
            Mi objetivo es seguir creciendo como desarrollador, aprendiendo nuevas tecnologías y
            colaborando en proyectos que tengan un impacto real. Quiero construir herramientas
            que sean útiles, bien diseñadas y que las personas disfruten usar.
          </p>
        </blockquote>
      </motion.div>
    </section>
  );
}
