import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, User, Hash, Globe2 } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 relative w-full border-t border-white/5">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-primary mr-2">05.</span> Contacto
        </h2>
        <div className="h-px bg-white/10 flex-1 max-w-[200px]"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-4xl font-display font-bold mb-4">¿Iniciamos un proyecto?</h3>
          <p className="text-xl text-muted-foreground mb-8">
            ¿Tienes una idea o proyecto? Estaré encantado de ayudarte a convertirla en realidad.
          </p>
          
          <a 
            href="mailto:dinoxio@proton.me"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[var(--shadow-glow)] group"
          >
            <Mail className="w-6 h-6" />
            dinoxio@proton.me
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden"
        >
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[50px] -mr-20 -mt-20"></div>
          
          <div className="space-y-6 relative z-10">
            <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Detalles</h4>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Nombre</div>
                <div className="font-semibold text-lg">Dinox</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <Hash className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Edad</div>
                <div className="font-semibold text-lg">17 años</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <Globe2 className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Nacionalidad</div>
                <div className="font-semibold text-lg flex items-center gap-2">
                  Mexicano <span className="text-xl leading-none">🇲🇽</span>
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
