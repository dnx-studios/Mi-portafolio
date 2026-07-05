import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export default function Goal() {
  return (
    <section className="py-24 relative w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl overflow-hidden"
      >
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-background z-0"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')] opacity-50 z-0"></div>
        
        <div className="relative z-10 px-8 py-16 md:py-24 text-center max-w-4xl mx-auto flex flex-col items-center border border-white/10 rounded-3xl backdrop-blur-sm">
          
          <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-8 border border-primary/30 shadow-[var(--shadow-glow)]">
            <Target className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-6 font-bold">Mi Objetivo</h2>
          
          <p className="text-2xl md:text-3xl lg:text-4xl font-display font-medium leading-tight text-white">
            "Continuar creciendo como desarrollador, participar en proyectos cada vez más ambiciosos y crear herramientas que ayuden a comunidades, creadores de contenido y servidores de Discord a ofrecer una mejor experiencia."
          </p>
          
        </div>
      </motion.div>
    </section>
  );
}
