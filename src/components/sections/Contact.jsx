import { motion } from "framer-motion";
import Section, { SectionTitle } from "../layout/Section";
import {
  Mail,
  MessageCircle,
  MapPin,
  Calendar,
  Caravan,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  "Keine Unterkunft nötig — eigener Camper-Van",
  "Sofort einsatzbereit — schnelle Einarbeitung",
  "4 Sprachen: DE, EN, FR, ES",
  "Koch EFZ + MBA = Kulinarik trifft Betriebswirtschaft",
  "40+ Jahre internationale Erfahrung",
  "Ideal für Saison, Vertretung oder Beratung",
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Dark top section */}
      <div className="bg-forest-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            light
            subtitle="Lassen Sie uns über Ihre Anforderungen sprechen — unverbindlich und unkompliziert."
          >
            Kontakt
          </SectionTitle>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Contact methods */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {/* Email */}
                <a
                  href="mailto:marcusk66@yahoo.com"
                  className="flex items-center gap-4 p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all group"
                >
                  <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                    <Mail className="text-gold" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">E-Mail</p>
                    <p className="text-white/60 text-sm">
                      marcusk66@yahoo.com
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/573044548280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all group"
                >
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <MessageCircle className="text-green-400" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">WhatsApp</p>
                    <p className="text-white/60 text-sm">
                      Direktnachricht senden
                    </p>
                  </div>
                </a>

                {/* Availability */}
                <div className="flex items-center gap-4 p-5 bg-swiss-red/10 rounded-2xl border border-swiss-red/20">
                  <div className="w-14 h-14 bg-swiss-red/20 rounded-xl flex items-center justify-center">
                    <Calendar className="text-swiss-red" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      Verfügbar ab August 2026
                    </p>
                    <p className="text-white/60 text-sm">
                      Saisonale & temporäre Engagements
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-14 h-14 bg-forest-light/20 rounded-xl flex items-center justify-center">
                    <Caravan className="text-forest-light" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      Ganze Schweiz
                    </p>
                    <p className="text-white/60 text-sm">
                      Flexibel mit eigenem Camper-Van — keine Unterkunft nötig
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Benefits list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-heading text-2xl font-bold text-white mb-6">
                Warum Marcus Lauer?
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-white/80"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-gold flex-shrink-0 mt-0.5"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-10 p-6 bg-gold/10 rounded-2xl border border-gold/20">
                <p className="text-gold font-heading text-xl font-bold mb-2">
                  Bereit für ein Gespräch?
                </p>
                <p className="text-white/70 text-sm mb-4">
                  Ob Saisonverstärkung, Beratungsprojekt oder Notfall-Ersatz —
                  schreiben Sie mir und wir finden die passende Lösung.
                </p>
                <a
                  href="mailto:marcusk66@yahoo.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-light text-forest-dark font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-gold/25"
                >
                  <Mail size={18} />
                  Jetzt anfragen
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
