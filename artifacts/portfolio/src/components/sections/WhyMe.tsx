import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  "Más de cinco años aprendiendo programación.",
  "Desarrollo de soluciones personalizadas.",
  "Experiencia manteniendo un bot utilizado por miles de usuarios.",
  "Comunicación constante durante el desarrollo.",
  "Compromiso con la calidad y la mejora continua."
];

export default function WhyMe() {
  return (
    <section id="por-que" className="py-24 sm:py-32 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-12"
      >
        <div className="font-mono text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase">
          06 &mdash; ¿Por qué conmigo?
        </div>

        <div className="space-y-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex items-start gap-6 group">
              <span className="font-mono text-[10px] sm:text-xs text-white/20 pt-1.5 group-hover:text-primary transition-colors duration-300">
                0{idx + 1}
              </span>
              <p className="font-light text-foreground/80 leading-relaxed sm:text-lg">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}