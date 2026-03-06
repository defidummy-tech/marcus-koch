import { motion } from "framer-motion";
import Section, { SectionTitle } from "../layout/Section";
import { services } from "../../data/services";

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-cream-dark overflow-hidden"
    >
      {/* Faded background image */}
      {service.bgImage && (
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={service.bgImage}
            alt=""
            className="w-full h-full object-cover opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500 scale-110"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        <div className="w-14 h-14 bg-forest/10 group-hover:bg-forest group-hover:text-white rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
          <Icon size={28} className="text-forest group-hover:text-white transition-colors" />
        </div>
        <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
          {service.title}
        </h3>
        <p className="text-warm-gray text-sm leading-relaxed mb-4">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {service.highlights.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-cream-dark/80 text-forest text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <Section id="services" className="bg-cream-dark">
      <SectionTitle
        subtitle="Nicht Linienkoch — sondern Berater, Konzeptentwickler und Küchenchef in einem."
      >
        Meine Leistungen
      </SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>

      {/* Approach highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-cream-dark"
      >
        <h3 className="font-heading text-xl font-bold text-charcoal mb-4">
          Meine Arbeitsweise
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-warm-gray leading-relaxed">
          <div>
            <p className="mb-3">
              <strong className="text-charcoal">In der ersten Woche</strong>{" "}
              packe ich an — vom Büro des Küchenchefs bis zur Abwaschstation.
              Ich beobachte Produktions- und Betriebsprozesse, analysiere
              Arbeitsabläufe und lerne die Organisation von Grund auf kennen.
            </p>
            <p>
              Wenn «Stresssituationen» übermässig auftreten, müssen Abläufe
              optimiert werden — nicht das Personal. Oft helfen kluge
              Anpassungen am Menü, um den Druck in der Küche nachhaltig zu
              reduzieren.
            </p>
          </div>
          <div>
            <p className="mb-3">
              <strong className="text-charcoal">
                Ich finde Profit-Nischen,
              </strong>{" "}
              die andere übersehen: An einem Regentag auf der Alp ohne Gäste
              produziere ich Granola-Energieriegel für Wanderer oder Kombucha
              als Erfrischungsgetränk — zusätzliche Einnahmen aus vorhandenen
              Ressourcen.
            </p>
            <p>
              <strong className="text-charcoal">Menüentwicklung:</strong> Lokal
              zuerst, frisch zuerst, saisonal zuerst, Qualität zuerst. Ich
              wandere durch Wälder und Alpweiden, sammle wilde Beeren und
              Bergthymian für meine Küche.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
