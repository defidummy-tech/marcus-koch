import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const sectionIds = ["about", "services", "experience", "gallery", "credentials", "contact"];

const languages = [
  { code: "de", label: "DE", flag: "🇨🇭" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "es", label: "ES", flag: "🇪🇸" },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(sectionIds, 200);

  const navItems = sectionIds.map((id) => ({ id, label: t(`nav.${id}`) }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const changeLang = (code) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <span
              className={`font-heading text-xl md:text-2xl font-bold transition-colors ${
                scrolled ? "text-forest" : "text-white"
              }`}
            >
              Marcus Lauer
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeId === item.id
                    ? scrolled
                      ? "text-forest bg-forest/10"
                      : "text-white bg-white/20"
                    : scrolled
                    ? "text-charcoal/70 hover:text-forest hover:bg-forest/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Language switcher */}
            <div className="relative ml-2">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  scrolled
                    ? "text-charcoal/70 hover:text-forest hover:bg-forest/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                <Globe size={14} />
                {i18n.language?.substring(0, 2).toUpperCase()}
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-1 bg-white rounded-xl shadow-lg border border-cream-dark py-1 min-w-[100px] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLang(lang.code)}
                      className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2 hover:bg-cream-dark transition-colors ${
                        i18n.language?.startsWith(lang.code)
                          ? "text-forest font-semibold bg-forest/5"
                          : "text-charcoal"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Availability badge */}
            <span className="ml-2 px-3 py-1.5 bg-swiss-red text-white text-xs font-semibold rounded-full animate-pulse">
              {t("nav.availBadge")}
            </span>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-cream/98 backdrop-blur-md border-t border-cream-dark shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeId === item.id
                    ? "text-forest bg-forest/10"
                    : "text-charcoal/70 hover:text-forest hover:bg-forest/5"
                }`}
              >
                {item.label}
              </button>
            ))}
            {/* Mobile language switcher */}
            <div className="flex gap-2 px-4 py-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { changeLang(lang.code); setIsOpen(false); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    i18n.language?.startsWith(lang.code)
                      ? "bg-forest text-white"
                      : "bg-cream-dark text-charcoal hover:bg-forest/10"
                  }`}
                >
                  {lang.flag} {lang.label}
                </button>
              ))}
            </div>
            <div className="pt-2">
              <span className="inline-block px-3 py-1.5 bg-swiss-red text-white text-xs font-semibold rounded-full">
                {t("nav.availBadgeMobile")}
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
