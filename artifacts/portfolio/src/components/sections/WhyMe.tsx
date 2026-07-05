import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  "Más de cinco años aprendiendo programación.",
  "Desarrollo de soluciones personalizadas.",
  "Experiencia manteniendo un bot utilizado por miles de usuarios.",
  "Comunicación constante durante el desarrollo.",
  "Compromiso con la calidad y la mejora continua."
];

export default function WhyMe() {
  return (
    <section className="py-24 relative w-full border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            ¿Por qué trabajar <span className="text-primary">conmigo?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Mi enfoque no se limita a escribir código, sino a entender el problema y entregar una solución robusta y bien estructurada.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + (idx * 0.1) }}
              className="glass-panel p-4 rounded-xl border border-white/5 flex items-start gap-4 hover:bg-white/5 transition-colors"
            >
              <div className="mt-1 shrink-0">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground font-medium">{reason}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
