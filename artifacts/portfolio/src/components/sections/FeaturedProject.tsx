import React from 'react';
import { motion } from 'framer-motion';

export default function FeaturedProject() {
  return (
    <section id="proyectos" className="py-24 sm:py-32 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-12"
      >
        <div className="font-mono text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase">
          03 &mdash; Proyecto Destacado
        </div>

        <div className="border border-border p-8 sm:p-12 space-y-10 hover:border-white/10 transition-colors duration-500">
          <div className="space-y-4">
            <h3 className="text-3xl sm:text-4xl font-serif text-foreground tracking-tight">Alien Cat</h3>
            <p className="text-muted-foreground font-light leading-relaxed max-w-lg">
              Alien Cat es el proyecto más importante en el que he trabajado hasta la fecha. Este bot ha sido utilizado por miles de usuarios y me ha permitido adquirir experiencia desarrollando sistemas escalables para comunidades de Discord.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4 border-t border-border">
            <div>
              <div className="text-2xl font-serif text-foreground mb-1">10,393+</div>
              <div className="text-[10px] sm:text-xs font-mono tracking-widest text-muted-foreground uppercase">usuarios</div>
            </div>
            <div>
              <div className="text-2xl font-serif text-foreground mb-1">1 año</div>
              <div className="text-[10px] sm:text-xs font-mono tracking-widest text-muted-foreground uppercase">de desarrollo</div>
            </div>
            <div>
              <div className="text-2xl font-serif text-primary italic mb-1">En mant.</div>
              <div className="text-[10px] sm:text-xs font-mono tracking-widest text-muted-foreground uppercase">estado actual</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}