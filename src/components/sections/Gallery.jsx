import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useTranslation } from "react-i18next";
import Section, { SectionTitle } from "../layout/Section";
import { galleryItems } from "../../data/gallery";

const categoryIds = ["all", "dishes", "bakery", "charcuterie", "cheese", "products", "restaurant"];

export default function Gallery() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const categories = categoryIds.map((id) => ({
    id,
    label: t(`gallery.categories.${id}`),
  }));

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const slides = filtered.map((item) => ({
    src: item.src,
    alt: item.alt,
    title: item.alt,
  }));

  return (
    <Section id="gallery" className="bg-cream-dark">
      <SectionTitle subtitle={t("gallery.subtitle")}>
        {t("gallery.title")}
      </SectionTitle>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
              activeCategory === cat.id
                ? "bg-forest text-white shadow-md"
                : "bg-white text-warm-gray hover:text-forest hover:bg-forest/5 border border-cream-dark"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Photo grid */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, index) => (
            <motion.div
              key={item.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <p className="text-white text-xs md:text-sm font-medium leading-tight">
                  {item.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        styles={{
          container: { backgroundColor: "rgba(0,0,0,.92)" },
        }}
      />
    </Section>
  );
}
