import React from 'react';
import { motion } from 'framer-motion';
import { SiPython, SiJavascript, SiHtml5, SiCss, SiGit } from 'react-icons/si';
import { Coffee, Braces, Network } from 'lucide-react';

const techs = [
  { name: 'Java', icon: Coffee },
  { name: 'Python', icon: SiPython },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss },
  { name: 'JSON', icon: Braces },
  { name: 'Git & GitHub', icon: SiGit },
  { name: 'APIs REST', icon: Network },
];

export default function Technologies() {
  return (
    <section id="tecnologias" className="py-24 sm:py-32 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-10"
      >
        <div className="font-mono text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase">
          05 &mdash; Tecnologías
        </div>

        <div className="flex flex-wrap gap-3">
          {techs.map((tech) => (
            <div 
              key={tech.name} 
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm font-light text-muted-foreground hover:border-white/20 hover:text-foreground transition-colors duration-300"
            >
              <tech.icon className="w-3.5 h-3.5 opacity-60" />
              {tech.name}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}