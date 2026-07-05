import { motion } from 'framer-motion';
import AnimatedBorderCard from '../AnimatedBorderCard';
import { ExternalLink } from 'lucide-react';

const roles = [
  '🏗️ Builders',
  '⚙️ Commanders',
  '🎨 Modeladores 3D',
  '🎥 Renderizadores',
  '📦 Creadores de Addons',
  '💻 Desarrolladores',
  '🎨 Diseñadores',
];

export default function UpcomingProject() {
  const logoUrl = import.meta.env.BASE_URL + 'workly-logo.png';

  return (
    <section id="proximo-proyecto" className="py-24 sm:py-32 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="space-y-12"
      >
        {/* Header */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            🚀 Próximo Proyecto
          </span>
        </div>

        <AnimatedBorderCard>
          <div className="space-y-10">

            {/* Logo + title */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <img
                src={logoUrl}
                alt="Workly Game Core"
                className="w-36 sm:w-44 object-contain drop-shadow-[0_0_24px_rgba(220,38,38,0.4)]"
              />
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] font-mono tracking-widest text-amber-400 uppercase border border-amber-400/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  En desarrollo
                </div>
                <h3 className="text-3xl sm:text-4xl font-display text-foreground tracking-tight leading-tight">
                  Workly Craft v1.0
                </h3>
                <p className="text-xs font-mono text-muted-foreground tracking-wider">
                  DNX Studios · Workly Game Core
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed border-t border-white/10 pt-8">
              <p>
                Workly Craft v1.0 es una plataforma web creada para brindar oportunidades a personas con
                talento dentro de la comunidad de Minecraft y otros proyectos relacionados con videojuegos.
                Su objetivo es conectar a quienes desean ofrecer sus habilidades con personas o equipos
                que buscan colaboradores.
              </p>

              <p className="text-foreground/90 font-normal">¿Quiénes podrán formar parte?</p>
              <ul className="grid grid-cols-2 gap-1.5 text-sm">
                {roles.map((r) => (
                  <li key={r} className="flex items-center gap-2 text-muted-foreground">
                    {r}
                  </li>
                ))}
                <li className="text-muted-foreground col-span-2 text-xs italic">Y muchas otras profesiones relacionadas.</li>
              </ul>
            </div>

            {/* Modalidades */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass rounded-xl p-5 space-y-1.5 border border-white/10">
                <div className="text-lg">💰</div>
                <div className="text-sm font-semibold text-foreground">Trabajos remunerados</div>
                <div className="text-xs text-muted-foreground leading-relaxed">Para quienes ofrecen sus servicios de manera profesional.</div>
              </div>
              <div className="glass rounded-xl p-5 space-y-1.5 border border-white/10">
                <div className="text-lg">🤝</div>
                <div className="text-sm font-semibold text-foreground">Colaboraciones gratuitas</div>
                <div className="text-xs text-muted-foreground leading-relaxed">Para quienes desean adquirir experiencia o ayudar a la comunidad.</div>
              </div>
            </div>

            {/* Vision */}
            <div className="text-sm text-muted-foreground leading-relaxed border-t border-white/10 pt-8 italic">
              "Queremos construir una comunidad donde el talento tenga más importancia que la experiencia
              previa, fomentando el aprendizaje, la colaboración y el crecimiento de cada integrante."
            </div>

            {/* CTA */}
            <div className="pt-2">
              <p className="text-xs text-muted-foreground mb-4">
                Sin fecha oficial de lanzamiento. Apoya el proyecto participando en la votación de la comunidad.
              </p>
              <a
                href="https://dnx-studios.github.io/Workly.Vote/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass border border-white/20 text-sm font-medium text-foreground hover:bg-white/10 hover:border-white/40 transition-all duration-300 group"
              >
                <span>Vota y apoya el proyecto</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </a>
            </div>

          </div>
        </AnimatedBorderCard>
      </motion.div>
    </section>
  );
}
