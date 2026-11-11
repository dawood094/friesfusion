import React from "react";
import { MessageCircle, Instagram, MapPin, Clock, Phone, ChevronRight } from "lucide-react";
import { BRAND_CONFIG, PRODUCTS } from "../data/brand";

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenProductModal?: (product: (typeof PRODUCTS)[0]) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenProductModal }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1C0E07] text-white pt-16 pb-12 border-t border-[#F4B316]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src={BRAND_CONFIG.logoUrl}
                alt="Fries Fusion"
                className="w-12 h-12 object-contain bg-white/5 rounded-full p-1 border border-[#F4B316]/30"
              />
              <div>
                <span className="text-2xl font-black text-white font-['Outfit'] tracking-tight block">
                  Fries <span className="text-[#F4B316]">Fusion</span>
                </span>
                <span className="text-xs text-[#F4B316] font-semibold tracking-wide uppercase">
                  {BRAND_CONFIG.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-white/70 leading-relaxed font-sans">
              Karachi's trusted supplier of quick-frozen fries in convenient 1kg
              food-service packs. Engineered for golden crunch and dependable
              performance in homes, cafes, burger joints, and restaurants.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BRAND_CONFIG.whatsAppBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#25D366] text-white hover:bg-[#20ba59] transition-transform hover:scale-105"
                aria-label="Contact on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              </a>
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/10 text-white hover:bg-[#FF861C] transition-colors"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-4 font-['Outfit'] border-b border-white/10 pb-2">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75 font-medium">
              {[
                { id: "home", label: "Home" },
                { id: "products", label: "Our Products" },
                { id: "about", label: "About Fries Fusion" },
                { id: "how-it-works", label: "How It Works" },
                { id: "wholesale", label: "Wholesale & Cafes" },
                { id: "contact", label: "Contact Us" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="flex items-center gap-2 hover:text-[#FFC928] transition-colors text-left cursor-pointer group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#FF861C] group-hover:translate-x-0.5 transition-transform" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Official Products */}
          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-4 font-['Outfit'] border-b border-white/10 pb-2">
              Official Products
            </h4>
            <div className="space-y-3.5">
              {PRODUCTS.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white/5 p-3 rounded-lg border border-white/10 hover:border-[#FFC928]/40 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-bold text-white">
                      {prod.name}
                    </span>
                    <span className="text-xs font-semibold text-[#FFC928] tabular-nums">
                      Rs. {prod.pricePerKg}/kg
                    </span>
                  </div>
                  <div className="text-xs text-white/60 mt-1">
                    {prod.cut} · {prod.packaging}
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <button
                      onClick={() => {
                        if (onOpenProductModal) {
                          onOpenProductModal(prod);
                        } else {
                          handleNav("products");
                        }
                      }}
                      className="text-xs font-semibold text-[#FFC928] hover:underline cursor-pointer"
                    >
                      View Specifications & Rates
                    </button>
                  </div>
                </div>
              ))}
              <p className="text-xs text-white/50 italic pt-1">
                *Prices subject to WhatsApp confirmation before dispatch.
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-4 font-['Outfit'] border-b border-white/10 pb-2">
              Contact & Location
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF861C] shrink-0 mt-1" />
                <span>
                  <strong className="text-white block">Karachi Hub:</strong>
                  {BRAND_CONFIG.location}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0 mt-1" />
                <div>
                  <strong className="text-white block">WhatsApp Hotline:</strong>
                  <a
                    href={BRAND_CONFIG.whatsAppBaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline font-bold"
                  >
                    {BRAND_CONFIG.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="w-4 h-4 text-[#FF861C] shrink-0 mt-1" />
                <div>
                  <strong className="text-white block">Instagram:</strong>
                  <a
                    href={BRAND_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FFC928] transition-colors"
                  >
                    {BRAND_CONFIG.instagramHandle}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#FFC928] shrink-0 mt-1" />
                <div>
                  <strong className="text-white block">Business Hours:</strong>
                  <span>{BRAND_CONFIG.businessHours}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with legal & copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {currentYear} {BRAND_CONFIG.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav("privacy")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => handleNav("terms")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
            <span>·</span>
            <button
              onClick={() => handleNav("wholesale")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Commercial Supply
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
