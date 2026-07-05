import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 sm:py-32 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-12"
      >
        <div className="font-mono text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase">
          08 &mdash; Contacto
        </div>

        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-3xl sm:text-4xl font-serif text-foreground tracking-tight">¿Tienes una idea o proyecto?</h3>
            <p className="font-light text-muted-foreground sm:text-lg">Estaré encantado de ayudarte.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm font-light text-muted-foreground border-y border-border py-10">
            <div className="space-y-1">
              <span className="block text-[10px] font-mono tracking-widest uppercase text-white/40">Nombre</span>
              <span className="text-foreground text-base">Dinox</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] font-mono tracking-widest uppercase text-white/40">Edad</span>
              <span className="text-foreground text-base">17 años</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] font-mono tracking-widest uppercase text-white/40">Nacionalidad</span>
              <span className="text-foreground text-base">Mexicano</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] font-mono tracking-widest uppercase text-white/40">Correo</span>
              <a href="mailto:dinoxio@proton.me" className="block text-foreground text-base hover:text-primary transition-colors">
                dinoxio@proton.me
              </a>
            </div>
          </div>

          <div>
            <a 
              href="mailto:dinoxio@proton.me"
              className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium text-sm tracking-wide hover:bg-foreground/90 transition-colors"
            >
              Escribir correo
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}