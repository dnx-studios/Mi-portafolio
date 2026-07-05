import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Activity, ExternalLink, Bot } from 'lucide-react';

export default function FeaturedProject() {
  return (
    <section id="proyectos" className="py-24 relative w-full border-t border-white/5">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-primary mr-2">02.</span> Proyecto Destacado
        </h2>
        <div className="h-px bg-white/10 flex-1 max-w-[200px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="group relative"
      >
        {/* Glow behind the card */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-blue-600/30 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
        
        <div className="relative glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 overflow-hidden">
          
          {/* Decorative tech background */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
            
            {/* Content Left */}
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono uppercase font-bold tracking-wider mb-2 border border-primary/20">
                <Bot className="w-3.5 h-3.5" />
                Discord Bot
              </div>
              
              <h3 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-white group-hover:text-primary transition-colors duration-300">
                Alien Cat
              </h3>
              
              <div className="prose prose-invert prose-p:text-muted-foreground prose-p:leading-relaxed prose-lg max-w-none">
                <p>
                  Alien Cat es el proyecto más importante en el que he trabajado hasta la fecha.
                </p>
                <p>
                  Este bot ha sido utilizado por miles de usuarios y me ha permitido adquirir experiencia desarrollando sistemas escalables para comunidades de Discord.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 mt-6 border-t border-white/5">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white tracking-tight">10,393+</div>
                    <div className="text-sm text-muted-foreground">usuarios</div>
                    <div className="text-[10px] text-muted-foreground/60 font-mono mt-1">ACT. 2 JUL 2026</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white tracking-tight">1 año</div>
                    <div className="text-sm text-muted-foreground">de desarrollo</div>
                    <div className="text-[10px] text-muted-foreground/60 font-mono mt-1">7 JUL 2026</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Right / Status Card */}
            <div className="h-full flex flex-col justify-center gap-6">
              <div className="bg-black/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-2xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="flex items-center justify-between mb-8">
                  <div className="text-sm font-mono text-muted-foreground">ESTADO DEL SISTEMA</div>
                  <Activity className="w-4 h-4 text-yellow-500" />
                </div>
                
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="w-20 h-20 rounded-full bg-yellow-500/10 border-2 border-yellow-500/30 flex items-center justify-center mb-4 relative">
                    <div className="absolute inset-0 rounded-full border border-yellow-500 animate-[spin_4s_linear_infinite] border-t-transparent"></div>
                    <div className="absolute inset-2 rounded-full border border-yellow-500/50 animate-[spin_3s_linear_infinite_reverse] border-b-transparent"></div>
                    <Bot className="w-8 h-8 text-yellow-500" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">En mantenimiento</div>
                  <div className="text-sm text-yellow-500/80 bg-yellow-500/10 px-3 py-1 rounded-full font-mono">
                    STATUS: UPGRADING
                  </div>
                </div>
              </div>
              
              {/* Optional generic illustration/code block instead of image to maintain aesthetic */}
              <div className="bg-black/60 rounded-xl p-4 font-mono text-xs text-muted-foreground/80 overflow-hidden h-32 border border-white/5 relative">
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-white/5 flex flex-col items-center py-4 gap-1 text-[10px]">
                  <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                </div>
                <div className="pl-10 text-primary/70">class <span className="text-yellow-300">AlienCat</span> extends <span className="text-blue-300">Client</span> {'{'}</div>
                <div className="pl-14">constructor() {'{'}</div>
                <div className="pl-18">super({'{'} intents: [Intents.FLAGS.GUILDS] {'}'});</div>
                <div className="pl-18 text-green-400/70">// Initializing core systems</div>
                <div className="pl-18">this.systemState = <span className="text-orange-300">'MAINTENANCE'</span>;</div>
                <div className="pl-14">{'}'}</div>
                <div className="pl-10">{'}'}</div>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
            </div>
            
          </div>
        </div>
      </motion.div>
    </section>
  );
}
