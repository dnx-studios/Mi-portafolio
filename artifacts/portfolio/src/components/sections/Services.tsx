import { motion } from 'framer-motion';

const discordFeatures = [
  'Moderación', 'Comandos personalizados', 'Tickets', 'Economía',
  'Niveles', 'Verificación', 'Logs', 'Automatización',
  'Integración con APIs', 'Sistemas exclusivos',
];

const minecraftFeatures = [
  'Addons básicos', 'Sistemas por comandos',
  'Eventos personalizados', 'Mecánicas adaptadas',
];

export default function Services() {
  return (
    <section id="servicios" className="py-16 sm:py-24 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="space-y-10"
      >
        <h2 className="text-2xl sm:text-3xl font-serif text-foreground">Servicios</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Discord */}
          <div className="glass rounded-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🤖</span>
              <h3 className="text-lg font-serif text-foreground">Bots para Discord</h3>
            </div>
            <ul className="space-y-2">
              {discordFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground font-light">
                  <span className="w-1 h-1 rounded-full bg-white/25 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Minecraft */}
          <div className="glass rounded-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⛏️</span>
              <h3 className="text-lg font-serif text-foreground">Addons para Minecraft</h3>
            </div>
            <ul className="space-y-2">
              {minecraftFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground font-light">
                  <span className="w-1 h-1 rounded-full bg-white/25 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
