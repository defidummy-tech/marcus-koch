import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Section, { SectionTitle } from "../layout/Section";
import {
  UtensilsCrossed,
  TrendingUp,
  Users,
  Flame,
  Milk,
  Clock,
} from "lucide-react";

const serviceIcons = [UtensilsCrossed, TrendingUp, Users, Flame, Milk, Clock];
const bgImages = [
  "/images/food/tricolor-spaetzle-bratwurst.jpg",
  "/images/credentials/mba-diploma.jpg",
  "/images/portrait/marcus-cooking-action.jpg",
  "/images/restaurant/swiss-catering-buffet.jpg",
  "/images/cheese/rosemary-herb-cheese.jpg",
  "/images/portrait/marcus-portrait-main.jpg",
];

function ServiceCard({ service, index, icon: Icon, bgImage }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-cream-dark overflow-hidden"
    >
      {/* Faded background image */}
      {bgImage && (
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={bgImage}
            alt=""
            className="w-full h-full object-cover opacity-[0.12] group-hover:opacity-[0.22] transition-opacity duration-500 scale-110"
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
  const { t } = useTranslation();
  const items = t("services.items", { returnObjects: true });

  return (
    <Section id="services" className="bg-cream-dark">
      <SectionTitle subtitle={t("services.subtitle")}>
        {t("services.title")}
      </SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {items.map((service, i) => (
          <ServiceCard
            key={i}
            service={service}
            index={i}
            icon={serviceIcons[i]}
            bgImage={bgImages[i]}
          />
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
          {t("services.approach.title")}
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-warm-gray leading-relaxed">
          <div>
            <p className="mb-3">
              <strong className="text-charcoal">{t("services.approach.firstWeek")}</strong>{" "}
              {t("services.approach.firstWeekText")}
            </p>
            <p>
              {t("services.approach.stressText")}
            </p>
          </div>
          <div>
            <p className="mb-3">
              <strong className="text-charcoal">
                {t("services.approach.profitNiches")}
              </strong>{" "}
              {t("services.approach.profitNichesText")}
            </p>
            <p>
              <strong className="text-charcoal">{t("services.approach.menuDev")}</strong>{" "}
              {t("services.approach.menuDevText")}
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
