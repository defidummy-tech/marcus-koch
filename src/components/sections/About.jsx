import Section, { SectionTitle } from "../layout/Section";
import {
  Award,
  GraduationCap,
  Globe,
  Languages,
  Caravan,
  ChefHat,
} from "lucide-react";

const highlights = [
  { icon: ChefHat, text: "Koch EFZ — Eidgenössischer Fachausweis" },
  { icon: GraduationCap, text: "MBA & BSc (Summa Cum Laude, Top 2%)" },
  { icon: Award, text: "40+ Jahre internationale Berufserfahrung" },
  { icon: Languages, text: "Deutsch · English · Français · Español" },
  { icon: Globe, text: "Schweiz · USA · Kolumbien" },
  { icon: Caravan, text: "Eigener Camper-Van — schweizweit flexibel" },
];

export default function About() {
  return (
    <Section id="about">
      <SectionTitle subtitle="Koch aus Leidenschaft, Unternehmer aus Überzeugung">
        Über mich
      </SectionTitle>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Portrait */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/portrait/marcus-portrait-main.jpg"
              alt="Marcus Lauer — Schweizer Küchenchef"
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
          <p className="text-lg leading-relaxed text-charcoal mb-4">
            Ich bin ein Schweizer Küchenchef der alten Schule — gelernt am{" "}
            <strong>Hotel de la Paix in Lausanne</strong>, geprägt von der
            Grossküche des <strong>Anaheim Hilton</strong> in Kalifornien und
            über 20 Jahre geschärft als Unternehmer in Kolumbien.
          </p>
          <p className="text-base leading-relaxed text-warm-gray mb-4">
            In Cartagena gründete ich das{" "}
            <strong>Restaurante Casa Suiza</strong> — Swiss-Fusion-Küche mit
            täglich frischem Brot, Basler Läckerli zum Kaffee und Spätzli als
            Bestseller. Später baute ich eine komplette Lebensmittelmanufaktur
            auf: Käse, Joghurt, Charcuterie, Backwaren — alles handwerklich und
            von Grund auf.
          </p>
          <p className="text-base leading-relaxed text-warm-gray mb-6">
            Als mir die Milchqualität nicht genügte, kaufte ich{" "}
            <strong>eigene Jersey-Kühe</strong> — für höheren Protein- und
            Fettgehalt. Ich röstete Kaffee über Holzkohle in der Sierra Nevada,
            räucherte Fleisch mit Avocadoholz und reifte Blauschimmelkäse in den
            Anden. Jetzt bringe ich diese Erfahrung zurück in die Schweiz.
          </p>

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
              Ihr Vorteil
            </p>
            <p className="text-charcoal leading-relaxed">
              <strong>Unterkunft nicht nötig.</strong> Ich bringe meinen eigenen
              Camper-Van mit und bin flexibel in der ganzen Schweiz einsetzbar —
              für saisonale oder temporäre Engagements, ohne Logistikaufwand für
              Sie.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
