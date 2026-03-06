import { motion } from "framer-motion";

export default function Section({
  id,
  children,
  className = "",
  dark = false,
}) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${
        dark ? "bg-forest-dark text-white" : ""
      } ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionTitle({ children, subtitle, light = false }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {children}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl mx-auto ${
            light ? "text-white/70" : "text-warm-gray"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 mx-auto w-20 h-1 rounded-full ${
          light ? "bg-gold" : "bg-forest"
        }`}
      />
    </div>
  );
}
