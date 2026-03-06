import { useTranslation } from "react-i18next";
import Section, { SectionTitle } from "../layout/Section";
import {
  Award,
  GraduationCap,
  Globe,
  Languages,
  Caravan,
  ChefHat,
} from "lucide-react";

const highlightIcons = [ChefHat, GraduationCap, Award, Languages, Globe, Caravan];
const highlightKeys = ["efz", "mba", "years", "languages", "continents", "camper"];

export default function About() {
  const { t } = useTranslation();

  const highlights = highlightKeys.map((key, i) => ({
    icon: highlightIcons[i],
    text: t(`about.highlights.${key}`),
  }));

  return (
    <Section id="about">
      <SectionTitle subtitle={t("about.subtitle")}>
        {t("about.title")}
      </SectionTitle>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Portrait */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/portrait/marcus-portrait-main.jpg"
              alt={t("about.imgAlt")}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          {/* Floating accent */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/20 rounded-2xl -z-10" />
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-forest/20 rounded-2xl -z-10" />
        </div>

        {/* Text content */}
        <div>
          <p
            className="text-lg leading-relaxed text-charcoal mb-4"
            dangerouslySetInnerHTML={{ __html: t("about.p1") }}
          />
          <p
            className="text-base leading-relaxed text-warm-gray mb-4"
            dangerouslySetInnerHTML={{ __html: t("about.p2") }}
          />
          <p
            className="text-base leading-relaxed text-warm-gray mb-6"
            dangerouslySetInnerHTML={{ __html: t("about.p3") }}
          />

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 p-3 bg-cream-dark rounded-xl"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center">
                  <Icon size={20} className="text-forest" />
                </div>
                <span className="text-sm font-medium text-charcoal">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* USP callout */}
          <div className="mt-8 p-5 bg-forest/5 border-l-4 border-forest rounded-r-xl">
            <p className="text-forest font-semibold text-sm uppercase tracking-wide mb-1">
              {t("about.usp.label")}
            </p>
            <p
              className="text-charcoal leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t("about.usp.text") }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
