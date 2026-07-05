import { motion } from 'framer-motion';
import AnimatedBorderCard from '../AnimatedBorderCard';
import { ExternalLink, Users, Briefcase, HeartHandshake } from 'lucide-react';

const roles = [
  'Builders', 'Commanders', 'Modeladores 3D',
  'Renderizadores', 'Creadores de Addons',
  'Desarrolladores', 'Diseñadores',
];

export default function UpcomingProject() {
  const logoUrl = import.meta.env.BASE_URL + 'workly-logo.png';

  return (
    <section id="proximo-proyecto" className="py-16 sm:py-24 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="space-y-10"
      >
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
          <span className="text-xs font-mono tracking-widest uppercase">Próximo Proyecto</span>
        </div>

        <AnimatedBorderCard>
          <div className="space-y-10">

            {/* Logo + title */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div
                className="shrink-0"
                onContextMenu={(e) => e.preventDefault()}
              >
                <img
                  src={logoUrl}
                  alt="Workly Game Core"
                  draggable={false}
                  style={{ WebkitUserDrag: 'none' } as React.CSSProperties}
                  className="w-36 sm:w-44 object-contain select-none drop-shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                />
              </div>
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
            <div className="space-y-3 text-muted-foreground font-light leading-relaxed border-t border-white/10 pt-8 text-sm sm:text-base">
              <p>
                Workly Craft v1.0 es una plataforma web creada para brindar oportunidades a personas con
                talento dentro de la comunidad de Minecraft y otros proyectos relacionados con videojuegos.
                Su objetivo es conectar a quienes desean ofrecer sus habilidades con personas o equipos
                que buscan colaboradores.
              </p>
            </div>

            {/* Who can join */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-3.5 h-3.5 opacity-60" />
                <span className="text-[10px] font-mono tracking-widest uppercase">¿Quiénes podrán formar parte?</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {roles.map((r) => (
                  <span
                    key={r}
                    className="glass px-3 py-1.5 rounded-full text-xs text-muted-foreground border border-white/08"
                  >
                    {r}
                  </span>
                ))}
                <span className="glass px-3 py-1.5 rounded-full text-xs text-muted-foreground border border-white/08 italic">
                  y más...
                </span>
              </div>
            </div>

            {/* Modalidades */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass rounded-xl p-5 space-y-2 border border-white/08">
                <div className="flex items-center gap-2 text-foreground">
                  <Briefcase className="w-4 h-4 opacity-70" />
                  <span className="text-sm font-medium">Trabajos remunerados</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-light">
                  Para quienes ofrecen sus servicios de manera profesional.
                </p>
              </div>
              <div className="glass rounded-xl p-5 space-y-2 border border-white/08">
                <div className="flex items-center gap-2 text-foreground">
                  <HeartHandshake className="w-4 h-4 opacity-70" />
                  <span className="text-sm font-medium">Colaboraciones gratuitas</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-light">
                  Para quienes desean adquirir experiencia o ayudar a la comunidad.
                </p>
              </div>
            </div>

            {/* Vision quote */}
            <div className="border-l-2 border-white/15 pl-5 text-sm text-muted-foreground font-light leading-relaxed italic border-t border-white/10 pt-8">
              "Queremos construir una comunidad donde el talento tenga más importancia que la experiencia
              previa, fomentando el aprendizaje, la colaboración y el crecimiento de cada integrante."
            </div>

            {/* CTA */}
            <div className="space-y-3 pt-1">
              <p className="text-xs text-muted-foreground font-light">
                Sin fecha oficial de lanzamiento. Apoya el proyecto participando en la votación de la comunidad.
              </p>
              <a
                href="https://dnx-studios.github.io/Workly.Vote/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass border border-white/15 text-sm font-medium text-foreground hover:bg-white/10 hover:border-white/25 transition-all duration-300 group"
              >
                Vota y apoya el proyecto
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </a>
            </div>

          </div>
        </AnimatedBorderCard>
      </motion.div>
    </section>
  );
}
