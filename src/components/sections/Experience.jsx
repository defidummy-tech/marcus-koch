import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Section, { SectionTitle } from "../layout/Section";
import { experience as experienceData } from "../../data/experience";

const typeColors = {
  culinary: "bg-forest text-white",
  education: "bg-gold text-forest-dark",
  entrepreneurial: "bg-swiss-red text-white",
  current: "bg-forest text-white ring-4 ring-forest/30",
};

function TimelineItem({ item, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative flex gap-4 md:gap-6 pb-8"
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full flex-shrink-0 mt-1.5 ${
            typeColors[item.type]
          }`}
        />
        {!isLast && (
          <div className="w-0.5 flex-grow bg-forest/20 mt-2" />
        )}
      </div>

      {/* Content card */}
      <div
        className={`flex-grow rounded-xl overflow-hidden ${
          item.type === "current"
            ? "bg-forest/5 border border-forest/20 p-4 md:p-5"
            : item.image
            ? "bg-white shadow-sm border border-cream-dark"
            : "pb-2"
        }`}
      >
        {/* Image row for items with photos */}
        {item.image && (
          <div className="relative h-36 md:h-44 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute bottom-3 left-4 inline-block px-3 py-1 bg-white/90 text-forest text-xs font-bold rounded-full">
              {item.year}
            </span>
          </div>
        )}

        <div className={item.image ? "p-4 md:p-5" : ""}>
          {!item.image && (
            <span className="inline-block px-3 py-1 bg-forest/10 text-forest text-xs font-bold rounded-full mb-2">
              {item.year}
            </span>
          )}
          <h3 className="font-heading text-lg md:text-xl font-bold text-charcoal mb-2">
            {item.title}
          </h3>
          <p className="text-warm-gray text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { t } = useTranslation();
  const translatedItems = t("experience.items", { returnObjects: true });

  // Merge translated text with static data (type, image) from experience.js
  const experience = translatedItems.map((item, i) => ({
    ...item,
    type: experienceData[i]?.type || "culinary",
    image: experienceData[i]?.image,
  }));

  return (
    <Section id="experience">
      <SectionTitle subtitle={t("experience.subtitle")}>
        {t("experience.title")}
      </SectionTitle>

      <div className="max-w-3xl mx-auto">
        {experience.map((item, i) => (
          <TimelineItem
            key={item.year}
            item={item}
            index={i}
            isLast={i === experience.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}
