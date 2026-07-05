import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="sobre-mi" className="py-24 sm:py-32 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="glass w-full flex items-center justify-between px-6 py-4 rounded-xl text-left hover:bg-white/5 transition-colors"
        >
          <h2 className="text-2xl sm:text-3xl font-serif text-foreground m-0">Sobre mí</h2>
          <ChevronDown 
            className={`w-6 h-6 text-foreground/70 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} 
          />
        </button>
        
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-2 px-2 space-y-6 text-foreground/80 font-sans font-light leading-relaxed sm:text-lg">
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
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
