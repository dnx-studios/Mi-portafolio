import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section id="servicios" className="py-24 sm:py-32 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-12"
      >
        <div className="font-mono text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase">
          04 &mdash; Servicios
        </div>

        <div className="space-y-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-foreground">Bots para Discord</h3>
            <p className="font-light text-muted-foreground leading-loose">
              Moderación <span className="mx-2 sm:mx-3 text-border">·</span> Comandos personalizados <span className="mx-2 sm:mx-3 text-border">·</span> Tickets <span className="mx-2 sm:mx-3 text-border">·</span> Economía <span className="mx-2 sm:mx-3 text-border">·</span> Niveles <span className="mx-2 sm:mx-3 text-border">·</span> Verificación <span className="mx-2 sm:mx-3 text-border">·</span> Logs <span className="mx-2 sm:mx-3 text-border">·</span> Automatización <span className="mx-2 sm:mx-3 text-border">·</span> Integración con APIs <span className="mx-2 sm:mx-3 text-border">·</span> Sistemas exclusivos
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-foreground">Addons para Minecraft</h3>
            <p className="font-light text-muted-foreground leading-loose">
              Addons básicos <span className="mx-2 sm:mx-3 text-border">·</span> Sistemas por comandos <span className="mx-2 sm:mx-3 text-border">·</span> Eventos personalizados <span className="mx-2 sm:mx-3 text-border">·</span> Mecánicas adaptadas
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}