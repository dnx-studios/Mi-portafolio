import React from 'react';
import { motion } from 'framer-motion';
import { User, Terminal, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 relative w-full border-t border-white/5">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-primary mr-2">01.</span> Sobre mí
        </h2>
        <div className="h-px bg-white/10 flex-1 max-w-[200px]"></div>
      </div>

      <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-lg text-muted-foreground leading-relaxed"
        >
          <p className="text-xl font-medium text-foreground">
            ¡Hola! Soy <span className="text-primary font-bold">Dinox</span>.
          </p>
          
          <p>
            Desde que comencé a programar, mi objetivo ha sido aprender constantemente y superar nuevos desafíos. Disfruto desarrollar proyectos que no solo funcionen correctamente, sino que también aporten valor a quienes los utilizan.
          </p>
          
          <div className="p-6 rounded-2xl glass-panel border-l-4 border-l-primary relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500"></div>
            <p className="relative z-10 font-medium text-foreground/90">
              Actualmente me enfoco en el desarrollo de bots para Discord y addons básicos para Minecraft mediante sistemas de comandos, buscando siempre ofrecer un trabajo organizado y de calidad.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4"
        >
          {/* Quick stats/info cards */}
          <div className="p-5 rounded-xl glass-panel flex flex-col gap-3 hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <User className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground font-mono mb-1">EDAD</div>
              <div className="font-semibold text-lg">17 Años</div>
            </div>
          </div>
          
          <div className="p-5 rounded-xl glass-panel flex flex-col gap-3 hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground font-mono mb-1">EXPERIENCIA</div>
              <div className="font-semibold text-lg">+5 Años</div>
            </div>
          </div>
          
          <div className="p-5 rounded-xl glass-panel flex flex-col gap-3 hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground font-mono mb-1">ENFOQUE</div>
              <div className="font-semibold text-lg">Backend & Bots</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
