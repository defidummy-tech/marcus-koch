import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useTranslation } from "react-i18next";
import Section, { SectionTitle } from "../layout/Section";
import { diplomas, references } from "../../data/credentials";
import { Award, Quote } from "lucide-react";

export default function Credentials() {
  const { t } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = [
    ...diplomas.map((d) => ({ src: d.image, alt: d.title })),
    ...references
      .filter((r) => r.image)
      .map((r) => ({ src: r.image, alt: r.title })),
  ];

  const openLightbox = (image) => {
    const idx = allImages.findIndex((img) => img.src === image);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setLightboxOpen(true);
  };

  return (
    <Section id="credentials">
      <SectionTitle
        subtitle={t("credentials.subtitle")}
      >
        {t("credentials.title")}
      </SectionTitle>

      {/* Diplomas */}
      <div className="mb-16">
        <h3 className="font-heading text-2xl font-bold text-charcoal mb-6 flex items-center gap-2">
          <Award className="text-gold" size={24} />
          {t("credentials.diplomas")}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {diplomas.map((diploma, i) => (
            <motion.div
              key={diploma.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(diploma.image)}
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all group-hover:-translate-y-1 border border-cream-dark">
                <img
                  src={diploma.image}
                  alt={diploma.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-2 px-1">
                <p className="text-xs font-semibold text-charcoal leading-tight">
                  {diploma.title}
                </p>
                <p className="text-xs text-warm-gray">
                  {diploma.issuer} · {diploma.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* References */}
      <div>
        <h3 className="font-heading text-2xl font-bold text-charcoal mb-6 flex items-center gap-2">
          <Quote className="text-gold" size={24} />
          {t("credentials.references")}
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {references.map((ref, i) => (
            <motion.div
              key={ref.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-cream-dark hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => ref.image && openLightbox(ref.image)}
            >
              <div className="flex gap-4">
                {ref.image && (
                  <div className="flex-shrink-0 w-16 h-20 rounded-lg overflow-hidden border border-cream-dark">
                    <img
                      src={ref.image}
                      alt={ref.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <h4 className="font-semibold text-charcoal text-sm mb-1">
                    {ref.title}
                  </h4>
                  {ref.quote && (
                    <p className="text-warm-gray text-sm italic leading-relaxed mb-2">
                      &ldquo;{ref.quote}&rdquo;
                    </p>
                  )}
                  <p className="text-xs text-forest font-medium">
                    {ref.source || ref.issuer} · {ref.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        index={lightboxIndex}
        close={() => setLightboxOpen(false)}
        slides={allImages}
        styles={{
          container: { backgroundColor: "rgba(0,0,0,.95)" },
        }}
      />
    </Section>
  );
}
