import { motion, type Variants } from 'framer-motion';
import { MessageSquare, Shield, Ticket, Coins, Zap, Search, Database, Fingerprint, Cog, Server, Layers, Wrench, Gamepad2, Terminal } from 'lucide-react';

const botServices = [
  { name: 'Moderación', icon: Shield, desc: 'Sistemas automatizados de seguridad' },
  { name: 'Comandos', icon: Zap, desc: 'Funcionalidad personalizada' },
  { name: 'Tickets', icon: Ticket, desc: 'Soporte organizado para usuarios' },
  { name: 'Economía', icon: Coins, desc: 'Sistemas monetarios y tiendas' },
  { name: 'Niveles', icon: Layers, desc: 'Sistemas de XP y recompensas' },
  { name: 'Verificación', icon: Fingerprint, desc: 'Filtros de entrada al servidor' },
  { name: 'Registros (Logs)', icon: Search, desc: 'Historial detallado de acciones' },
  { name: 'Automatización', icon: Cog, desc: 'Tareas programadas y respuestas' },
  { name: 'Integración APIs', icon: Database, desc: 'Conexión con servicios externos' },
  { name: 'Sistemas Exclusivos', icon: Server, desc: 'Mecánicas únicas por comunidad' },
];

const mcServices = [
  { name: 'Addons Básicos', icon: Layers },
  { name: 'Sistemas por Comandos', icon: Terminal },
  { name: 'Eventos Personalizados', icon: Zap },
  { name: 'Mecánicas Adaptadas', icon: Gamepad2 },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 relative w-full border-t border-white/5">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-primary mr-2">03.</span> Servicios
        </h2>
        <div className="h-px bg-white/10 flex-1 max-w-[200px]"></div>
      </div>

      <div className="space-y-24">
        
        {/* Discord Bots Category */}
        <div>
          <div className="mb-10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#5865F2]/10 border border-[#5865F2]/20 flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6 text-[#5865F2]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Desarrollo de Bots para Discord</h3>
              <p className="text-muted-foreground mt-1">Soluciones integrales para la gestión y crecimiento de tu comunidad.</p>
            </div>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {botServices.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={item}
                className="glass-panel p-5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-card/50 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{service.name}</h4>
                <p className="text-xs text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Minecraft Category */}
        <div className="relative">
          {/* Subtle background element specific to this section */}
          <div className="absolute top-1/2 right-10 w-64 h-64 bg-green-500/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2" />
          
          <div className="mb-10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
              <Wrench className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Addons para Minecraft</h3>
              <p className="text-muted-foreground mt-1">Modificaciones y sistemas personalizados para mejorar la experiencia.</p>
            </div>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {mcServices.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={item}
                className="glass-panel p-6 rounded-xl border border-white/5 hover:border-green-500/30 transition-colors group flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-card/50 border border-white/5 flex items-center justify-center mb-4 group-hover:bg-green-500/20 group-hover:border-green-500/30 transition-all group-hover:scale-110">
                  <service.icon className="w-6 h-6 text-muted-foreground group-hover:text-green-500 transition-colors" />
                </div>
                <h4 className="font-medium text-foreground">{service.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
