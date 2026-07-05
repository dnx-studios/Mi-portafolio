import { motion } from 'framer-motion';
import { 
  SiPython, 
  SiJavascript, 
  SiHtml5, 
  SiCss,
  SiGit
} from 'react-icons/si';
import { Braces, Network, Coffee } from 'lucide-react';

const techs = [
  { name: 'Java', icon: Coffee, color: '#ED8B00', category: 'Backend' },
  { name: 'Python', icon: SiPython, color: '#3776AB', category: 'Backend' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Frontend / Backend' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26', category: 'Frontend' },
  { name: 'CSS', icon: SiCss, color: '#1572B6', category: 'Frontend' },
  { name: 'JSON', icon: Braces, color: '#8A8A8A', category: 'Data' },
  { name: 'Git & GitHub', icon: SiGit, color: '#F05032', category: 'Herramientas' },
  { name: 'APIs REST', icon: Network, color: '#0ea5e9', category: 'Arquitectura' },
];

export default function Technologies() {
  return (
    <section id="tecnologias" className="py-24 relative w-full border-t border-white/5">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-primary mr-2">04.</span> Tecnologías
        </h2>
        <div className="h-px bg-white/10 flex-1 max-w-[200px]"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {techs.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative h-full"
          >
            {/* Hover glow */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md z-0"
              style={{ backgroundColor: tech.color }}
            />
            
            <div className="glass-panel rounded-2xl p-6 h-full border border-white/5 group-hover:border-white/20 transition-colors relative z-10 flex flex-col items-center justify-center gap-4 text-center">
              <tech.icon 
                className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" 
                style={{ color: tech.color }} 
              />
              <div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base">{tech.name}</h3>
                <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground block mt-1">
                  {tech.category}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
