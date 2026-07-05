import { motion } from 'framer-motion';

const reasons = [
  { icon: '🕐', text: 'Más de cinco años aprendiendo programación.' },
  { icon: '🔧', text: 'Desarrollo de soluciones personalizadas a cada proyecto.' },
  { icon: '📈', text: 'Experiencia manteniendo un bot usado por miles de usuarios.' },
  { icon: '💬', text: 'Comunicación constante durante todo el desarrollo.' },
  { icon: '✅', text: 'Compromiso con la calidad y la mejora continua.' },
];

export default function WhyMe() {
  return (
    <section id="por-que" className="py-16 sm:py-24 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="space-y-10"
      >
        <h2 className="text-2xl sm:text-3xl font-serif text-foreground">¿Por qué conmigo?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {reasons.map(({ icon, text }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.07 }}
              className="glass rounded-xl px-5 py-4 flex items-start gap-4"
            >
              <span className="text-lg mt-0.5 shrink-0">{icon}</span>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
