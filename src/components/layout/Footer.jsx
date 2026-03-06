import { ChefHat, Mail, ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-forest-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ChefHat className="text-gold" size={24} />
              <span className="font-heading text-xl font-bold text-white">
                Marcus Lauer
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              {t("footer.tagline")}
              <br />
              {t("footer.tagline2")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">{t("footer.navigation")}</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {["about", "services", "experience", "gallery", "credentials", "contact"].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="hover:text-gold transition-colors"
                >
                  {t(`nav.${id}`)}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-3">{t("footer.contactTitle")}</h4>
            <a
              href="mailto:marcusk66@yahoo.com"
              className="flex items-center gap-2 text-sm hover:text-gold transition-colors"
            >
              <Mail size={16} />
              marcusk66@yahoo.com
            </a>
            <p className="text-sm text-white/60 mt-3">
              {t("footer.available")}
              <br />
              {t("footer.availableText")}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Marcus Lauer. {t("footer.rights")}
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-xs text-white/40 hover:text-gold transition-colors"
          >
            <ArrowUp size={14} />
            {t("footer.backToTop")}
          </button>
        </div>
      </div>
    </footer>
  );
}
