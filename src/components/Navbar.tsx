import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, Menu, X, ArrowRight, Moon, Sun } from "lucide-react";
import { BRAND_CONFIG, getQuickChatWhatsAppUrl } from "../data/brand";
import { useTheme } from "../context/ThemeContext";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onMobileMenuChange?: (isOpen: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onMobileMenuChange,
}) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(68);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Measure header height accurately
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, [scrolled]);

  // Ironclad mobile body scroll lock with scrollY restoration
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      onMobileMenuChange?.(true);

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
        onMobileMenuChange?.(false);
      };
    } else {
      onMobileMenuChange?.(false);
    }
  }, [mobileMenuOpen, onMobileMenuChange]);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "products", label: "Products" },
    { id: "about", label: "About Us" },
    { id: "how-it-works", label: "How It Works" },
    { id: "wholesale", label: "Wholesale & Cafes" },
    { id: "contact", label: "Contact Us" },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Permanent Fixed Header - Never scrolls away or disappears */}
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200 border-b ${
          scrolled || mobileMenuOpen
            ? "bg-[#FBF7EE] dark:bg-[#160B06] shadow-xs border-[#25130A]/10 dark:border-white/10 py-3"
            : "bg-[#FBF7EE] dark:bg-[#160B06] border-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Zone */}
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-3 text-left focus:outline-none group shrink-0 cursor-pointer"
              aria-label="Fries Fusion Home"
            >
              <img
                src={BRAND_CONFIG.logoUrl}
                alt="Fries Fusion Logo"
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#25130A] dark:text-[#FDF9F0] font-['Outfit'] leading-none">
                  Fries <span className="text-[#E27D18]">Fusion</span>
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-[#25130A]/60 dark:text-[#D6C7B2]/70 tracking-wider uppercase font-sans mt-0.5">
                  Freshness Meets Crunch!
                </span>
              </div>
            </button>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-sm font-semibold whitespace-nowrap transition-colors duration-150 py-1 relative cursor-pointer ${
                      isActive
                        ? "text-[#25130A] dark:text-[#F4B316]"
                        : "text-[#25130A]/70 dark:text-[#D6C7B2]/75 hover:text-[#25130A] dark:hover:text-[#F4B316]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF861C] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action & Night Mode Toggle */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* Desktop Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                title={isDarkMode ? "Switch to Day Mode" : "Switch to Night Mode"}
                aria-label={isDarkMode ? "Switch to Day Mode" : "Switch to Night Mode"}
                className="p-2 sm:p-2.5 rounded-xl border border-[#25130A]/10 dark:border-white/15 bg-white/80 dark:bg-[#1E1009] text-[#25130A] dark:text-[#F4B316] hover:bg-[#F4B316]/15 dark:hover:bg-[#F4B316]/20 transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 text-[#F4B316]" />
                ) : (
                  <Moon className="w-4 h-4 text-[#25130A]" />
                )}
              </button>

              <a
                href={getQuickChatWhatsAppUrl("Navbar Header CTA")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1ca54f] rounded-lg shadow-sm hover:shadow transition-all duration-150 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>WhatsApp Enquiry</span>
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                className="lg:hidden p-2 rounded-lg text-[#25130A] dark:text-[#FDF9F0] hover:bg-[#25130A]/5 dark:hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Header spacer to prevent page content jump under fixed header */}
      <div
        style={{ height: `${headerHeight}px` }}
        className="w-full shrink-0"
        aria-hidden="true"
      />

      {/* Full-Height Mobile Navigation Drawer below Header */}
      {mobileMenuOpen && (
        <div
          style={{
            top: `${headerHeight}px`,
            height: `calc(100dvh - ${headerHeight}px)`,
          }}
          className="lg:hidden fixed inset-x-0 bottom-0 z-40 bg-[#FBF7EE] dark:bg-[#160B06] flex flex-col justify-between overflow-y-auto overscroll-contain px-5 py-6 border-t border-[#25130A]/10 dark:border-white/10 shadow-2xl animate-in fade-in duration-150"
        >
          <div className="flex flex-col gap-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#25130A]/50 dark:text-[#D6C7B2]/60 px-2 pb-1 font-sans">
              Navigation Menu
            </div>
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between w-full px-4 py-3.5 text-base font-bold rounded-xl transition-all duration-150 text-left cursor-pointer active:scale-[0.99] ${
                    isActive
                      ? "bg-[#25130A] dark:bg-[#2A150C] text-[#F4B316] shadow-sm border border-[#F4B316]/30"
                      : "text-[#25130A] dark:text-[#FDF9F0] hover:bg-[#25130A]/5 dark:hover:bg-white/5 bg-white/70 dark:bg-[#1E1009] border border-[#25130A]/5 dark:border-white/5"
                  }`}
                >
                  <span className="font-['Outfit'] tracking-wide">{link.label}</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-150 ${
                      isActive ? "text-[#F4B316] translate-x-0.5" : "text-[#25130A]/40 dark:text-[#D6C7B2]/40"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="pt-5 mt-5 border-t border-[#25130A]/10 dark:border-white/10 flex flex-col gap-3 shrink-0">
            {/* Night Mode Switcher Row */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/80 dark:bg-[#1E1009] border border-[#25130A]/10 dark:border-white/10 shadow-xs">
              <div className="flex items-center gap-2.5">
                {isDarkMode ? (
                  <Moon className="w-4 h-4 text-[#F4B316]" />
                ) : (
                  <Sun className="w-4 h-4 text-[#E27D18]" />
                )}
                <span className="text-sm font-bold text-[#25130A] dark:text-[#FDF9F0] font-['Outfit']">
                  {isDarkMode ? "Night Mode Active" : "Day Mode Active"}
                </span>
              </div>
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle Night Mode"
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                  isDarkMode ? "bg-[#F4B316]" : "bg-[#25130A]/20"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isDarkMode ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <a
              href={getQuickChatWhatsAppUrl("Mobile Menu CTA")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1ca54f] text-white font-bold text-sm shadow-md transition-colors"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>Chat with Fries Fusion on WhatsApp</span>
            </a>

            <div className="bg-[#25130A]/4 dark:bg-white/5 rounded-xl p-3 text-center flex flex-col gap-1 border border-[#25130A]/5 dark:border-white/5">
              <span className="text-xs font-bold text-[#25130A] dark:text-[#FDF9F0]">
                Karachi Delivery · Daily 10 AM – 10 PM
              </span>
              <span className="text-[11px] text-[#25130A]/60 dark:text-[#D6C7B2]/70 font-medium">
                DMCHS, Karachi · 0311 2080720
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
