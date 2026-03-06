import { motion } from "framer-motion";
import { ChevronDown, Mail, ImageIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/food/tricolor-spaetzle-bratwurst.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/80 via-forest-dark/70 to-forest-dark/90" />
        {/* Decorative gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-forest/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-swiss-red/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
            </span>
            {t("hero.badge")}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
        >
          Marcus Lauer{" "}
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold-light font-normal">
            (EFZ/MBA)
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gold-light font-heading italic mb-4"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {t("hero.tagline1")}{" "}
          <br className="hidden sm:inline" />
          {t("hero.tagline2")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-light text-forest-dark font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5"
          >
            <Mail size={20} />
            {t("hero.ctaContact")}
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all border border-white/20"
          >
            <ImageIcon size={20} />
            {t("hero.ctaGallery")}
          </a>
        </motion.div>

        {/* Key stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            ["40+", t("hero.stats.years")],
            ["4", t("hero.stats.languages")],
            ["3", t("hero.stats.continents")],
            ["20+", t("hero.stats.entrepreneur")],
          ].map(([num, label]) => (
            <div key={label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold">
                {num}
              </div>
              <div className="text-sm text-white/60 mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-white/40 hover:text-white/70 transition-colors">
          <ChevronDown size={32} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
