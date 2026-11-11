import React from "react";
import {
  MessageCircle,
  Package,
  Snowflake,
  ShieldCheck,
  CheckCircle2,
  Users,
  Store,
  ChefHat,
  ArrowRight,
} from "lucide-react";
import {
  BRAND_CONFIG,
  getQuickChatWhatsAppUrl,
} from "../data/brand";

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 flex flex-col gap-16">
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5E8] dark:bg-[#1D0F08] border border-[#F4B316]/40 text-xs font-bold text-[#25130A] dark:text-[#F4B316] mb-3 shadow-xs">
          <Package className="w-3.5 h-3.5 text-[#E27D18]" />
          <span>Our Story & Mission</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-[#25130A] dark:text-[#FDF9F0] font-['Outfit'] tracking-tight">
          About Fries Fusion
        </h1>
        <p className="text-base sm:text-lg text-[#25130A]/80 dark:text-[#D6C7B2]/85 mt-3 leading-relaxed font-sans">
          Dedicated to supplying premium quick-frozen fries across Karachi.
          Bringing restaurant-grade golden crunch to homes and commercial kitchens with zero hassle.
        </p>
      </div>

      {/* 2. Brand Introduction & Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-6 flex flex-col gap-5">
          <div className="text-xs font-bold text-[#E27D18] uppercase tracking-wider font-['Outfit']">
            Freshness Meets Crunch!
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#25130A] dark:text-[#FDF9F0] font-['Outfit'] leading-tight">
            Elevating the Everyday French Fry Experience
          </h2>
          <p className="text-sm sm:text-base text-[#25130A]/80 dark:text-[#D6C7B2]/85 leading-relaxed font-sans">
            Fries are one of the most loved comfort foods worldwide, yet preparing them from scratch involves unpredictable potato varieties, labor-intensive peeling, soaking, uneven slicing, and soggy results.
          </p>
          <p className="text-sm sm:text-base text-[#25130A]/80 dark:text-[#D6C7B2]/85 leading-relaxed font-sans">
            <strong>Fries Fusion</strong> was created to solve this challenge. By selecting high-starch potatoes, cutting them to uniform food-service standards, and flash-freezing them immediately, we ensure that every single fry holds its shape, locks in sweet potato flavor, and crisps up evenly in minutes.
          </p>
          <div className="p-5 bg-[#FAF5E8] dark:bg-[#1D0F08] rounded-2xl border border-[#25130A]/10 dark:border-[#381E10]">
            <span className="text-xs font-bold text-[#E27D18] uppercase tracking-wider block mb-1 font-['Outfit']">
              Our Core Philosophy
            </span>
            <p className="text-sm text-[#25130A] dark:text-[#FDF9F0] font-semibold italic">
              "We believe great fries should never be complicated. Quality potatoes, precise cutting, proper freezing, and direct customer care on WhatsApp."
            </p>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#1D0F08] p-6 sm:p-8 border border-[#25130A]/10 dark:border-[#381E10] shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-16/10 rounded-2xl overflow-hidden mb-6">
              <img
                src="/src/assets/images/fries_crispy_golden_hero_1794427598894.jpg"
                alt="Fries Fusion Golden Crisp Fries"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center gap-4">
              <img
                src={BRAND_CONFIG.logoUrl}
                alt="Fries Fusion Mascot"
                className="w-14 h-14 object-contain shrink-0 group-hover:scale-110 transition-transform"
              />
              <div>
                <h3 className="text-lg font-bold text-[#25130A] dark:text-[#FDF9F0] font-['Outfit']">
                  Fries Fusion Karachi
                </h3>
                <p className="text-xs text-[#25130A]/70 dark:text-[#D6C7B2]/75">
                  Headquartered in DMCHS, Karachi. Supplying food-service packs daily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Who We Serve: Home & Commercial Customers */}
      <div className="bg-white dark:bg-[#1D0F08] rounded-3xl p-8 sm:p-12 border border-[#25130A]/10 dark:border-[#381E10] shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-bold text-[#E27D18] uppercase tracking-wider font-['Outfit'] mb-1">
            Customer Segments
          </div>
          <h2 className="text-3xl font-black text-[#25130A] dark:text-[#FDF9F0] font-['Outfit']">
            Tailored for Every Kitchen Scale
          </h2>
          <p className="text-sm text-[#25130A]/70 dark:text-[#D6C7B2]/80 mt-2 font-sans">
            Whether frying a single plate at home or hundreds of baskets during weekend rush, Fries Fusion provides the reliable backbone for your menu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Homes & Families */}
          <div className="p-6 rounded-2xl bg-[#FAF5E8] dark:bg-[#160B06] border border-[#25130A]/10 dark:border-white/10 flex flex-col justify-between gap-5">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#2A150C] text-[#E27D18] dark:text-[#F4B316] flex items-center justify-center mb-4 shadow-xs">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#25130A] dark:text-[#FDF9F0] font-['Outfit'] mb-2">
                Homes & Families
              </h3>
              <p className="text-xs sm:text-sm text-[#25130A]/75 dark:text-[#D6C7B2]/80 leading-relaxed font-sans">
                Enjoy hassle-free snacks, after-school bites, movie night platters, and weekend family get-togethers. Our 1kg pouches fit neatly into domestic freezer drawers and cook to golden perfection in minutes.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-[#25130A]/80 dark:text-[#D6C7B2]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>Zero kitchen mess or potato peelings</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>Child-friendly crispy golden texture</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>Air-fryer and deep-fryer compatible</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Commercial Cafes & Kitchens */}
          <div className="p-6 rounded-2xl bg-[#25130A] dark:bg-[#2A150C] text-white border border-[#25130A] dark:border-[#381E10] flex flex-col justify-between gap-5 shadow-md">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 text-[#F4B316] flex items-center justify-center mb-4">
                <ChefHat className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-['Outfit'] mb-2">
                Cafes, Restaurants & Stalls
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-sans">
                Food service businesses require predictable food costs, rapid ticket execution, and fries that maintain crunch during table delivery. Our 1kg pouches ensure standard portion control and minimal fryer oil degradation.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-white/80">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F4B316]" />
                <span>Accurate cost-per-serving calculations</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F4B316]" />
                <span>High heat retention for loaded fry recipes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F4B316]" />
                <span>Reliable wholesale supply across Karachi</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4. Packaging & Quality Presentation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-[#1D0F08] p-6 rounded-2xl border border-[#25130A]/10 dark:border-[#381E10] flex flex-col gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FAF5E8] dark:bg-[#2A150C] text-[#E27D18] dark:text-[#F4B316] flex items-center justify-center">
            <Package className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#25130A] dark:text-[#FDF9F0] font-['Outfit']">
            Clear Food-Service Pouches
          </h3>
          <p className="text-xs sm:text-sm text-[#25130A]/70 dark:text-[#D6C7B2]/80 leading-relaxed font-sans">
            Transparent food-grade pouches allow you to visually verify the cut thickness, intact lengths, and lack of freezer burn before opening.
          </p>
        </div>

        <div className="bg-white dark:bg-[#1D0F08] p-6 rounded-2xl border border-[#25130A]/10 dark:border-[#381E10] flex flex-col gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FAF5E8] dark:bg-[#2A150C] text-[#E27D18] dark:text-[#F4B316] flex items-center justify-center">
            <Snowflake className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#25130A] dark:text-[#FDF9F0] font-['Outfit']">
            Cold-Chain Integrity
          </h3>
          <p className="text-xs sm:text-sm text-[#25130A]/70 dark:text-[#D6C7B2]/80 leading-relaxed font-sans">
            Maintained at sub-zero temperatures throughout handling to prevent clumping, moisture migration, and starch breakdown.
          </p>
        </div>

        <div className="bg-white dark:bg-[#1D0F08] p-6 rounded-2xl border border-[#25130A]/10 dark:border-[#381E10] flex flex-col gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FAF5E8] dark:bg-[#2A150C] text-[#E27D18] dark:text-[#F4B316] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#25130A] dark:text-[#FDF9F0] font-['Outfit']">
            Zero Hidden Additives
          </h3>
          <p className="text-xs sm:text-sm text-[#25130A]/70 dark:text-[#D6C7B2]/80 leading-relaxed font-sans">
            Pure potatoes cut and frozen. No artificial flavorings, unlisted chemicals, or synthetic coatings. Authentic potato taste you can trust.
          </p>
        </div>
      </div>

      {/* 5. Contact Callout */}
      <div className="p-8 rounded-3xl bg-[#FAF5E8] dark:bg-[#1D0F08] border border-[#25130A]/10 dark:border-[#381E10] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h3 className="text-2xl font-black text-[#25130A] dark:text-[#FDF9F0] font-['Outfit']">
            Have Questions About Our Products?
          </h3>
          <p className="text-sm text-[#25130A]/75 dark:text-[#D6C7B2]/80 mt-1 font-sans">
            Message Fries Fusion directly on WhatsApp for real-time answers, delivery timings, and stock checks.
          </p>
        </div>
        <a
          href={getQuickChatWhatsAppUrl("About Us Page CTA")}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
