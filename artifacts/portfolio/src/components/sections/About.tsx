import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 sm:py-32 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8"
      >
        <div className="font-mono text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase">
          02 &mdash; Sobre mí
        </div>
        
        <div className="space-y-6 text-foreground/80 font-sans font-light leading-relaxed sm:text-lg">
          <p>
            ¡Hola! Soy Dinox.
          </p>
          <p>
            Desde que comencé a programar, mi objetivo ha sido aprender constantemente y superar nuevos desafíos. Disfruto desarrollar proyectos que no solo funcionen correctamente, sino que también aporten valor a quienes los utilizan.
          </p>
          <p>
            Actualmente me enfoco en el desarrollo de bots para Discord y addons básicos para Minecraft mediante sistemas de comandos, buscando siempre ofrecer un trabajo organizado y de calidad.
          </p>
        </div>
      </motion.div>
    </section>
  );
}