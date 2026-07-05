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
  // Double the array for seamless loop
  const marqueeItems = [...techs, ...techs, ...techs];

  return (
    <section id="tecnologias" className="py-24 sm:py-32 w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-10"
      >
        <h2 className="text-2xl sm:text-3xl font-serif text-foreground">Tecnologías</h2>

        <div className="relative w-full overflow-hidden flex py-4">
          <motion.div 
            className="flex gap-4 min-w-max"
            animate={{ x: [0, '-50%'] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: 'linear', 
              repeatType: 'loop' 
            }}
          >
            {marqueeItems.map((tech, idx) => (
              <div 
                key={`${tech.name}-${idx}`} 
                className="glass flex items-center gap-3 px-6 py-3 rounded-full text-sm font-light text-foreground"
              >
                <tech.icon className="w-4 h-4 opacity-70" />
                <span>{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
