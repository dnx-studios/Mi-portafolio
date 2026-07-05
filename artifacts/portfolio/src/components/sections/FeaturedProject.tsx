import { motion } from 'framer-motion';
import AnimatedBorderCard from '../AnimatedBorderCard';

export default function FeaturedProject() {
  return (
    <section id="proyectos" className="py-24 sm:py-32 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-12"
      >
        <h2 className="text-2xl sm:text-3xl font-serif text-foreground">Proyecto Destacado</h2>

        <AnimatedBorderCard>
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl font-serif text-foreground tracking-tight">Alien Cat</h3>
              <p className="text-muted-foreground font-light leading-relaxed max-w-lg">
                Alien Cat es el proyecto más importante en el que he trabajado hasta la fecha. Este bot ha sido utilizado por miles de usuarios y me ha permitido adquirir experiencia desarrollando sistemas escalables para comunidades de Discord.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 border-t border-white/10">
              <div>
                <div className="text-2xl font-serif text-foreground mb-1">10,393+</div>
                <div className="text-[10px] sm:text-xs font-mono tracking-widest text-muted-foreground uppercase">usuarios</div>
              </div>
              <div>
                <div className="text-2xl font-serif text-foreground mb-1">1 año</div>
                <div className="text-[10px] sm:text-xs font-mono tracking-widest text-muted-foreground uppercase">de desarrollo</div>
              </div>
              <div>
                <div className="text-2xl font-serif text-primary italic mb-1">En mant.</div>
                <div className="text-[10px] sm:text-xs font-mono tracking-widest text-muted-foreground uppercase">estado actual</div>
              </div>
            </div>
          </div>
        </AnimatedBorderCard>
      </motion.div>
    </section>
  );
}
