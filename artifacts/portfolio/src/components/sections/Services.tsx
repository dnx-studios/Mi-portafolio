import { motion } from 'framer-motion';
import { SiDiscord } from 'react-icons/si';
import {
  Shield, Terminal, TicketCheck, BadgeDollarSign,
  TrendingUp, CheckCircle2, ScrollText, Zap, Plug2, Star,
  Package, Sparkles, Settings2, Gamepad2,
} from 'lucide-react';

const discordFeatures = [
  { name: 'Moderación', icon: Shield },
  { name: 'Comandos personalizados', icon: Terminal },
  { name: 'Tickets', icon: TicketCheck },
  { name: 'Economía', icon: BadgeDollarSign },
  { name: 'Niveles', icon: TrendingUp },
  { name: 'Verificación', icon: CheckCircle2 },
  { name: 'Logs', icon: ScrollText },
  { name: 'Automatización', icon: Zap },
  { name: 'Integración con APIs', icon: Plug2 },
  { name: 'Sistemas exclusivos', icon: Star },
];

const minecraftFeatures = [
  { name: 'Addons básicos', icon: Package },
  { name: 'Sistemas por comandos', icon: Terminal },
  { name: 'Eventos personalizados', icon: Sparkles },
  { name: 'Mecánicas adaptadas', icon: Settings2 },
];

function Ticker({
  items,
  duration = 22,
  reverse = false,
}: {
  items: { name: string; icon: React.ElementType }[];
  duration?: number;
  reverse?: boolean;
}) {
  const marquee = [...items, ...items, ...items];
  return (
    <div className="relative w-full overflow-hidden flex py-2">
      <motion.div
        className="flex gap-3 min-w-max"
        animate={{ x: reverse ? ['-50%', 0] : [0, '-50%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
      >
        {marquee.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="glass flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-light text-foreground whitespace-nowrap"
          >
            <item.icon className="w-3.5 h-3.5 opacity-60 shrink-0" />
            <span>{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="py-16 sm:py-24 w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="space-y-12"
      >
        <h2 className="text-2xl sm:text-3xl font-serif text-foreground">Servicios</h2>

        {/* Discord Bots */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5 text-muted-foreground">
            <SiDiscord className="w-4 h-4 opacity-70" />
            <span className="text-xs font-mono tracking-widest uppercase">Bots para Discord</span>
          </div>
          <Ticker items={discordFeatures} duration={28} />
        </div>

        {/* Minecraft Addons */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5 text-muted-foreground">
            <Gamepad2 className="w-4 h-4 opacity-70" />
            <span className="text-xs font-mono tracking-widest uppercase">Addons para Minecraft</span>
          </div>
          <Ticker items={minecraftFeatures} duration={16} reverse />
        </div>
      </motion.div>
    </section>
  );
}
