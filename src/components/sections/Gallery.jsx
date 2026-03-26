import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useTranslation } from "react-i18next";
import Section, { SectionTitle } from "../layout/Section";
import { gallerySections, getAllImages } from "../../data/gallery";

const sectionOrder = [
  "restaurant",
  "cheese",
  "yogurt",
  "charcuterie",
  "bakery",
  "events",
  "misc",
];

const navSections = [
  { id: "restaurant", icon: "🍽️" },
  { id: "foodProduction", icon: "🧀" },
  { id: "events", icon: "🎪" },
  { id: "misc", icon: "🌶️" },
];

function ImageGrid({ images, onImageClick, columns = 4 }) {
  const colClass =
    columns === 3
      ? "grid-cols-2 md:grid-cols-3"
      : columns === 2
      ? "grid-cols-2"
      : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4";

  return (
    <div className={`grid ${colClass} gap-3 md:gap-4`}>
      {images.map((item, index) => (
        <motion.div
          key={item.src}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: index * 0.03 }}
          className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
          onClick={() => onImageClick(item.src)}
        >
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
            <p className="text-white text-xs md:text-sm font-medium leading-tight">
              {item.alt}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="flex items-center justify-center my-16 md:my-20">
      <div className="h-px bg-forest/20 flex-1" />
      <div className="mx-4 w-2 h-2 rounded-full bg-gold" />
      <div className="h-px bg-forest/20 flex-1" />
    </div>
  );
}

function SubsectionCaption({ children }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center text-warm-gray italic text-sm md:text-base mb-4 mt-8"
    >
      {children}
    </motion.p>
  );
}

function StoryText({ children, className = "" }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className={`text-warm-gray leading-relaxed text-base md:text-lg mb-6 ${className}`}
    >
      {children}
    </motion.p>
  );
}

function CategoryTitle({ children }) {
  return (
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-6"
    >
      {children}
    </motion.h3>
  );
}

function SubcategoryTitle({ children }) {
  return (
    <motion.h4
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="font-heading text-xl md:text-2xl font-semibold text-forest mb-4"
    >
      {children}
    </motion.h4>
  );
}

export default function Gallery() {
  const { t } = useTranslation();
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const allImages = getAllImages();
  const slides = allImages.map((item) => ({
    src: item.src,
    alt: item.alt,
    title: item.alt,
  }));

  const openLightbox = useCallback(
    (imageSrc) => {
      const idx = allImages.findIndex((img) => img.src === imageSrc);
      setLightboxIndex(idx >= 0 ? idx : 0);
    },
    [allImages]
  );

  const restaurant = gallerySections.restaurant;
  const cheese = gallerySections.cheese;
  const yogurt = gallerySections.yogurt;
  const charcuterie = gallerySections.charcuterie;
  const bakery = gallerySections.bakery;
  const events = gallerySections.events;
  const misc = gallerySections.misc;

  return (
    <Section id="gallery" className="bg-cream-dark">
      <SectionTitle subtitle={t("gallery.subtitle")}>
        {t("gallery.title")}
      </SectionTitle>

      {/* Quick navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {navSections.map((sec) => (
          <a
            key={sec.id}
            href={`#gallery-${sec.id}`}
            className="px-5 py-2.5 text-sm font-medium rounded-full bg-white text-warm-gray hover:text-forest hover:bg-forest/5 border border-cream-dark shadow-sm transition-all"
          >
            <span className="mr-1.5">{sec.icon}</span>
            {t(
              `gallery.${sec.id}.title`,
              t(`gallery.foodProduction.title`, sec.id)
            )}
          </a>
        ))}
      </div>

      {/* ═══════════════════════════════════════════
          RESTAURANT SECTION
          ═══════════════════════════════════════════ */}
      <div id="gallery-restaurant">
        <CategoryTitle>{t(restaurant.textKeys.title)}</CategoryTitle>
        <StoryText>{t(restaurant.textKeys.intro)}</StoryText>

        {/* First row: 4 images */}
        <ImageGrid
          images={restaurant.images.slice(0, 4)}
          onImageClick={openLightbox}
          columns={4}
        />

        <div className="mt-8">
          <StoryText>{t(restaurant.textKeys.story)}</StoryText>
        </div>

        {/* Second row: remaining images */}
        <ImageGrid
          images={restaurant.images.slice(4)}
          onImageClick={openLightbox}
          columns={3}
        />

        <div className="mt-8">
          <StoryText>{t(restaurant.textKeys.pivot)}</StoryText>
        </div>
      </div>

      <SectionDivider />

      {/* ═══════════════════════════════════════════
          FOOD PRODUCTION SECTION
          ═══════════════════════════════════════════ */}
      <div id="gallery-foodProduction">
        <CategoryTitle>{t("gallery.foodProduction.title")}</CategoryTitle>

        {/* ── Cheese ── */}
        <div className="mb-12">
          <SubcategoryTitle>{t(cheese.textKeys.title)}</SubcategoryTitle>
          <StoryText>{t(cheese.textKeys.intro)}</StoryText>
          <StoryText>{t(cheese.textKeys.varieties)}</StoryText>
          <StoryText>{t(cheese.textKeys.learning)}</StoryText>

          {/* Cows subsection */}
          <StoryText>{t(cheese.textKeys.cows)}</StoryText>
          <SubsectionCaption>{t(cheese.textKeys.cowsCaption)}</SubsectionCaption>
          <ImageGrid
            images={cheese.subsections.cows}
            onImageClick={openLightbox}
            columns={2}
          />

          {/* Processing subsection */}
          <SubsectionCaption>
            {t(cheese.textKeys.processingCaption)}
          </SubsectionCaption>
          <ImageGrid
            images={cheese.subsections.processing}
            onImageClick={openLightbox}
            columns={3}
          />

          {/* Covid story */}
          <div className="mt-8">
            <StoryText>{t(cheese.textKeys.covid)}</StoryText>
          </div>

          {/* Results subsection */}
          <SubsectionCaption>
            {t(cheese.textKeys.resultsCaption)}
          </SubsectionCaption>
          <ImageGrid
            images={cheese.subsections.results}
            onImageClick={openLightbox}
            columns={4}
          />
        </div>

        {/* ── Yogurt ── */}
        <div className="mb-12">
          <SubcategoryTitle>{t(yogurt.textKeys.title)}</SubcategoryTitle>
          <SubsectionCaption>{t(yogurt.textKeys.caption)}</SubsectionCaption>
          <ImageGrid
            images={yogurt.images}
            onImageClick={openLightbox}
            columns={2}
          />
        </div>

        {/* ── Charcuterie ── */}
        <div className="mb-12">
          <SubcategoryTitle>{t(charcuterie.textKeys.title)}</SubcategoryTitle>
          <StoryText>{t(charcuterie.textKeys.intro)}</StoryText>
          <ImageGrid
            images={charcuterie.images}
            onImageClick={openLightbox}
            columns={4}
          />
        </div>

        {/* ── Bakery ── */}
        <div className="mb-12">
          <SubcategoryTitle>{t(bakery.textKeys.title)}</SubcategoryTitle>
          <StoryText>{t(bakery.textKeys.intro)}</StoryText>
          <ImageGrid
            images={bakery.images}
            onImageClick={openLightbox}
            columns={4}
          />
        </div>
      </div>

      <SectionDivider />

      {/* ═══════════════════════════════════════════
          EVENTS SECTION
          ═══════════════════════════════════════════ */}
      <div id="gallery-events">
        <CategoryTitle>{t(events.textKeys.title)}</CategoryTitle>
        <StoryText>{t(events.textKeys.intro)}</StoryText>
        <ImageGrid
          images={events.images}
          onImageClick={openLightbox}
          columns={4}
        />
      </div>

      <SectionDivider />

      {/* ═══════════════════════════════════════════
          MISC SECTION
          ═══════════════════════════════════════════ */}
      <div id="gallery-misc">
        <CategoryTitle>{t(misc.textKeys.title)}</CategoryTitle>
        <StoryText>{t(misc.textKeys.intro)}</StoryText>
        <ImageGrid
          images={misc.images}
          onImageClick={openLightbox}
          columns={3}
        />
      </div>

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
