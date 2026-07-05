import { motion } from 'framer-motion';
import { SiYoutube, SiDiscord, SiX, SiInstagram, SiTiktok } from 'react-icons/si';
import { Mail } from 'lucide-react';

const socials = [
  {
    name: 'YouTube',
    icon: SiYoutube,
    href: 'https://youtube.com/@dinoxxyt?si=uSeH6ujpLPcaXT6b',
  },
  {
    name: 'Discord',
    icon: SiDiscord,
    href: 'https://discord.gg/KzCr6awWzX',
  },
  {
    name: 'X',
    icon: SiX,
    href: 'https://x.com/dinoxio6843',
  },
  {
    name: 'Instagram',
    icon: SiInstagram,
    href: 'https://www.instagram.com/_dinoxio?igsh=MXF5OTk3OWxvYWxsag==',
  },
  {
    name: 'TikTok',
    icon: SiTiktok,
    href: 'https://www.tiktok.com/@dinox_68?_r=1&_t=ZS-97mAUvKirjD',
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="py-16 sm:py-24 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="space-y-10"
      >
        <h2 className="text-2xl sm:text-3xl font-serif text-foreground">Contacto</h2>

        <div className="glass rounded-2xl p-8 sm:p-12 space-y-10">
          {/* Header */}
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif text-foreground tracking-tight">
              ¿Tienes una idea o proyecto?
            </h3>
            <p className="font-light text-muted-foreground">Estaré encantado de ayudarte.</p>
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-2 gap-6 text-sm border-y border-white/10 py-8">
            {[
              { label: 'Nombre', value: 'Dinox' },
              { label: 'Edad', value: '17 años' },
              { label: 'Nacionalidad', value: 'Mexicano' },
              { label: 'Correo', value: 'dinoxio@proton.me', href: 'mailto:dinoxio@proton.me' },
            ].map(({ label, value, href }) => (
              <div key={label} className="space-y-1">
                <span className="block text-[10px] font-mono tracking-widest uppercase text-white/35">
                  {label}
                </span>
                {href ? (
                  <a href={href} className="text-foreground hover:text-primary transition-colors">
                    {value}
                  </a>
                ) : (
                  <span className="text-foreground">{value}</span>
                )}
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <p className="text-[10px] font-mono tracking-widest uppercase text-white/35">Redes sociales</p>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/8 border border-white/08 hover:border-white/15 transition-all duration-300"
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href="mailto:dinoxio@proton.me"
            className="glass inline-flex items-center gap-2.5 px-6 py-3 rounded-lg text-sm font-medium text-white hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <Mail className="w-4 h-4 opacity-70" />
            Escribir correo
          </a>
        </div>
      </motion.div>
    </section>
  );
}
