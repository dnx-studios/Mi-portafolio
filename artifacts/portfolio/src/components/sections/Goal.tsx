import React from 'react';
import { motion } from 'framer-motion';

export default function Goal() {
  return (
    <section id="objetivo" className="py-24 sm:py-32 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-12"
      >
        <div className="font-mono text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase">
          07 &mdash; Mi objetivo
        </div>

        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif leading-snug sm:leading-snug md:leading-snug text-foreground/90 italic border-l border-primary/30 pl-6 sm:pl-8 py-2">
          "Continuar creciendo como desarrollador, participar en proyectos cada vez más ambiciosos y crear herramientas que ayuden a comunidades, creadores de contenido y servidores de Discord a ofrecer una mejor experiencia."
        </blockquote>
      </motion.div>
    </section>
  );
}