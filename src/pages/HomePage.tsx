import React, { useState } from "react";
import {
  MessageCircle,
  ArrowRight,
  Package,
  Snowflake,
  Flame,
  ChefHat,
  Sparkles,
  ShoppingBag,
  ExternalLink,
  CheckCircle2,
  Maximize2,
  X,
  Building2,
  Coffee,
  Store,
  HelpCircle,
  Star,
} from "lucide-react";
import {
  BRAND_CONFIG,
  PRODUCTS,
  Product,
  PRODUCT_BENEFITS,
  HOW_IT_WORKS_STEPS,
  GALLERY_ITEMS,
  getQuickChatWhatsAppUrl,
  getProductOrderWhatsAppUrl,
} from "../data/brand";
import { ProductCard } from "../components/ProductCard";

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenProductModal: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenProductModal,
}) => {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<
    (typeof GALLERY_ITEMS)[0] | null
  >(null);

  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-16">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-4 sm:pt-8 md:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Brand & Copy */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#F4B316]/20 border border-[#F4B316]/40 text-xs font-bold text-[#25130A] dark:text-[#F4B316] tracking-wide">
                <Snowflake className="w-4 h-4 text-[#E27D18]" />
                <span>Karachi's Premium Quick-Frozen Fries</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#25130A] dark:text-[#FDF9F0] font-['Outfit'] tracking-tight leading-[1.08] text-balance">
                Freshness Meets{" "}
                <span className="text-[#E27D18] underline decoration-[#F4B316] decoration-wavy decoration-4">
                  Crunch!
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#25130A]/80 dark:text-[#D6C7B2]/90 leading-relaxed max-w-2xl font-normal font-sans">
                Discover restaurant-quality frozen fries delivered directly to your doorstep.
                Specially cut and flash-frozen for unmatched crispiness, whether you are feeding hungry kids at home or powering high-turnover cafe rush hours.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => onNavigate("products")}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25130A] dark:bg-[#2A150C] hover:bg-[#3d2012] dark:hover:bg-[#3A1E11] text-[#F4B316] font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-150 cursor-pointer border border-transparent dark:border-[#F4B316]/30 active:scale-95"
                >
                  <ShoppingBag className="w-5 h-5 text-[#F4B316]" />
                  <span>View Available Products</span>
                </button>

                <a
                  href={getQuickChatWhatsAppUrl("Hero Section Contact CTA")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1ca54f] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-150"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                  <span>Contact via WhatsApp</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#25130A]/8 dark:border-white/10 text-xs font-semibold text-[#25130A]/80 dark:text-[#D6C7B2]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E27D18] shrink-0" />
                  <span>1kg Food Service Pack</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E27D18] shrink-0" />
                  <span>Zero Thawing Needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E27D18] shrink-0" />
                  <span>Karachi-wide Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E27D18] shrink-0" />
                  <span>Direct WhatsApp Support</span>
                </div>
              </div>
            </div>

            {/* Right Column: Master Brand Visual Showcase (No duplication of product cards) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Background decorative card with glowing aura & hover lift */}
                <div className="group relative bg-gradient-to-br from-[#FAF5E8] via-white to-[#F5EEDB] dark:from-[#1D0F08] dark:via-[#24130A] dark:to-[#1D0F08] p-6 sm:p-8 rounded-3xl border border-[#25130A]/10 dark:border-[#381E10] shadow-xl hover:shadow-2xl hover:border-[#F4B316]/50 transition-all duration-300 overflow-hidden">
                  {/* Subtle golden ambient background glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4B316]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#F4B316]/25 transition-all duration-500" />
                  
                  {/* Mascot Badge & Brand Presentation */}
                  <div className="relative flex items-center justify-between pb-4 border-b border-[#25130A]/8 dark:border-white/10">
                    <div className="flex items-center gap-3">
                      <img
                        src="/public/assets/aistudio/removebg_a172558d.png"
                        alt="Fries Fusion Mascot Emblem"
                        className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <span className="text-xs font-bold text-[#E27D18] uppercase tracking-wider block font-['Outfit']">
                          Master Quality Cut
                        </span>
                        <span className="text-base sm:text-lg font-black text-[#25130A] dark:text-[#FDF9F0] font-['Outfit']">
                          Fries Fusion Standard
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#25130A] dark:bg-[#2A150C] text-[#F4B316] text-[11px] font-bold font-['Outfit'] shadow-xs border border-transparent dark:border-[#F4B316]/30">
                      Karachi, PK
                    </span>
                  </div>

                  {/* Mouthwatering Golden Serving Showcase Image */}
                  <div className="relative mt-5 rounded-2xl overflow-hidden border border-[#25130A]/10 dark:border-white/10 shadow-md group/img aspect-16/10">
                    <img
                      src="/src/assets/images/fries_crispy_golden_hero_1794427598894.jpg"
                      alt="Golden Crispy Fried Fries Batch"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-108"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#25130A]/80 via-transparent to-transparent flex items-end p-4">
                      <div className="text-white">
                        <span className="text-[11px] font-bold text-[#F4B316] uppercase tracking-wider block">
                          Always Golden · Never Soggy
                        </span>
                        <span className="text-sm font-bold font-['Outfit']">
                          Crispy Exterior · Tender Potato Center
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 4 Premium Kitchen Assurance Points */}
                  <div className="grid grid-cols-2 gap-2.5 mt-5">
                    <div className="p-2.5 rounded-xl bg-white/90 dark:bg-[#180C06] border border-[#25130A]/6 dark:border-white/5 shadow-xs flex items-center gap-2 hover:bg-white dark:hover:bg-[#201008] hover:border-[#F4B316]/40 transition-colors">
                      <Snowflake className="w-4 h-4 text-[#E27D18] shrink-0" />
                      <span className="text-xs font-semibold text-[#25130A] dark:text-[#FDF9F0]">
                        Flash-Frozen at -18°C
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/90 dark:bg-[#180C06] border border-[#25130A]/6 dark:border-white/5 shadow-xs flex items-center gap-2 hover:bg-white dark:hover:bg-[#201008] hover:border-[#F4B316]/40 transition-colors">
                      <Flame className="w-4 h-4 text-[#D9381E] shrink-0" />
                      <span className="text-xs font-semibold text-[#25130A] dark:text-[#FDF9F0]">
                        Drop Frozen into Oil
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/90 dark:bg-[#180C06] border border-[#25130A]/6 dark:border-white/5 shadow-xs flex items-center gap-2 hover:bg-white dark:hover:bg-[#201008] hover:border-[#F4B316]/40 transition-colors">
                      <Package className="w-4 h-4 text-[#E27D18] shrink-0" />
                      <span className="text-xs font-semibold text-[#25130A] dark:text-[#FDF9F0]">
                        1kg Commercial Packs
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/90 dark:bg-[#180C06] border border-[#25130A]/6 dark:border-white/5 shadow-xs flex items-center gap-2 hover:bg-white dark:hover:bg-[#201008] hover:border-[#F4B316]/40 transition-colors">
                      <Sparkles className="w-4 h-4 text-[#F4B316] shrink-0" />
                      <span className="text-xs font-semibold text-[#25130A] dark:text-[#FDF9F0]">
                        Zero Peeling or Prep
                      </span>
                    </div>
                  </div>

                  {/* Interactive Catalogue Jump Bar */}
                  <div className="mt-5 pt-4 border-t border-[#25130A]/8 dark:border-white/10 flex items-center justify-between gap-3">
                    <div className="text-left">
                      <span className="text-xs font-bold text-[#25130A] dark:text-[#FDF9F0] block">
                        2 Varieties Available:
                      </span>
                      <span className="text-[11px] text-[#25130A]/70 dark:text-[#D6C7B2]/70">
                        Regular Cut & 9mm Thick Cut
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        const el = document.getElementById("products-preview");
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                        } else {
                          onNavigate("products");
                        }
                      }}
                      className="px-4 py-2 rounded-xl bg-[#25130A] dark:bg-[#2A150C] hover:bg-[#3d2012] dark:hover:bg-[#3A1E11] text-[#F4B316] text-xs font-bold flex items-center gap-1.5 shadow-sm hover:shadow transition-all duration-200 cursor-pointer active:scale-95 border border-transparent dark:border-[#F4B316]/30"
                    >
                      <span>Explore Both Cuts Below</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product Catalogue Preview (Dedicated Showcase Section - No duplicates) */}
      <section
        id="products-preview"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-24"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12 border-b border-[#25130A]/10 dark:border-white/10 pb-6">
          <div>
            <div className="text-xs font-bold text-[#E27D18] uppercase tracking-wider font-['Outfit'] mb-1">
              Official Product Catalogue
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#25130A] dark:text-[#FDF9F0] font-['Outfit']">
              Available Frozen Fries Varieties
            </h2>
            <p className="text-sm text-[#25130A]/75 dark:text-[#D6C7B2]/80 mt-1 max-w-xl font-sans">
              Authentic 1kg food-service grade pouches. Flash-frozen to preserve potato freshness and deliver consistent crunch.
            </p>
          </div>
          <button
            onClick={() => onNavigate("products")}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#25130A] dark:text-[#F4B316] hover:text-[#E27D18] transition-colors cursor-pointer self-start md:self-auto group"
          >
            <span>View Full Specifications & Comparison</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onOpenProductModal}
            />
          ))}
        </div>

        {/* Pricing notice disclaimer box */}
        <div className="mt-8 max-w-4xl mx-auto p-4 bg-white/70 dark:bg-[#1D0F08] rounded-2xl border border-[#25130A]/10 dark:border-[#381E10] text-xs text-[#25130A]/70 dark:text-[#D6C7B2]/80 text-center shadow-xs">
          <p>
            <strong className="text-[#25130A] dark:text-[#FDF9F0]">Important Notice: </strong>
            {BRAND_CONFIG.pricingNotice} {BRAND_CONFIG.businessTypeNotice}
          </p>
        </div>
      </section>

      {/* 3. Product Benefits Section */}
      <section className="bg-white/60 dark:bg-[#160B06]/60 py-16 border-y border-[#25130A]/6 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold text-[#E27D18] uppercase tracking-wider font-['Outfit'] mb-2">
              Why Choose Fries Fusion
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#25130A] dark:text-[#FDF9F0] font-['Outfit']">
              Built for Ultimate Kitchen Convenience
            </h2>
            <p className="text-sm text-[#25130A]/70 dark:text-[#D6C7B2]/80 mt-2 font-sans">
              Genuine benefits designed for hassle-free frying, zero waste, and authentic potato crunch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCT_BENEFITS.map((benefit, index) => {
              const icons = [Snowflake, Package, ChefHat, Flame, Sparkles];
              const IconComp = icons[index % icons.length];
              return (
                <div
                  key={benefit.title}
                  className="group bg-white dark:bg-[#1D0F08] p-7 rounded-3xl border border-[#25130A]/8 dark:border-[#381E10] shadow-[0_4px_20px_-4px_rgba(37,19,10,0.05)] hover:shadow-xl hover:border-[#E27D18]/40 hover:-translate-y-2 transition-all duration-300 flex flex-col gap-3.5 relative overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#F5EEDB] dark:bg-[#2A150C] text-[#E27D18] dark:text-[#F4B316] flex items-center justify-center shadow-xs border border-[#25130A]/6 dark:border-white/5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#25130A] dark:text-[#FDF9F0] font-['Outfit'] group-hover:text-[#E27D18] transition-colors duration-200">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#25130A]/70 dark:text-[#D6C7B2]/80 leading-relaxed font-sans">
                    {benefit.description}
                  </p>
                </div>
              );
            })}

            {/* Extra wholesale spotlight card */}
            <div className="group bg-[#25130A] text-white p-7 rounded-3xl border border-[#25130A] flex flex-col justify-between gap-4 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-[#F4B316]/50 transition-all duration-300 relative overflow-hidden">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#F4B316] flex items-center justify-center mb-3.5 border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-['Outfit'] group-hover:text-[#F4B316] transition-colors duration-200">
                  Commercial & Cafe Supply
                </h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed mt-1 font-sans">
                  Are you a cafe or restaurant in Karachi? Inquire about recurring bulk orders, scheduled supply, and commercial pricing.
                </p>
              </div>
              <button
                onClick={() => onNavigate("wholesale")}
                className="self-start text-xs font-bold text-[#F4B316] hover:underline flex items-center gap-1.5 cursor-pointer group/btn"
              >
                <span>Wholesale Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold text-[#E27D18] uppercase tracking-wider font-['Outfit'] mb-2">
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#25130A] dark:text-[#FDF9F0] font-['Outfit']">
            How Fries Fusion Ordering Works
          </h2>
          <p className="text-sm text-[#25130A]/70 dark:text-[#D6C7B2]/80 mt-2 font-sans">
            Seamless WhatsApp-based direct communication. No complicated accounts or hidden charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div
              key={step.number}
              className="group bg-white dark:bg-[#1D0F08] p-7 sm:p-8 rounded-3xl border border-[#25130A]/8 dark:border-[#381E10] shadow-[0_4px_20px_-4px_rgba(37,19,10,0.05)] hover:shadow-xl hover:border-[#F4B316]/50 hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-between overflow-hidden"
            >
              <div>
                <span className="text-4xl sm:text-5xl font-black text-[#F4B316] group-hover:text-[#E27D18] group-hover:scale-105 transition-all duration-300 font-['Outfit'] block mb-3">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-[#25130A] dark:text-[#FDF9F0] font-['Outfit'] mb-2 group-hover:text-[#E27D18] transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#25130A]/75 dark:text-[#D6C7B2]/80 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#25130A]/8 dark:border-white/10 flex items-center justify-between text-xs text-[#25130A]/60 dark:text-[#D6C7B2]/60">
                <span>Direct Contact</span>
                <span className="font-bold text-[#E27D18]">Karachi, PK</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Wholesale & Cafes Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="group relative rounded-3xl bg-gradient-to-r from-[#25130A] via-[#2F180E] to-[#25130A] text-white p-8 sm:p-10 lg:p-12 overflow-hidden border border-[#F4B316]/25 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <span className="text-xs font-bold text-[#F4B316] uppercase tracking-wider font-['Outfit']">
                Wholesale & Commercial Kitchen Supply
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">
                Power Your Food Business with Consistent Golden Crunch
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl font-sans">
                Supplying cafes, restaurants, burger joints, food stalls, and catering kitchens across Karachi.
                Eliminate potato washing, peeling, and uneven cuts. Enjoy predictable portion cost and steady bulk stock.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate("wholesale")}
                  className="px-6 py-3.5 rounded-xl bg-[#F4B316] hover:bg-[#e2a212] active:scale-95 text-[#25130A] font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  Explore Wholesale Terms
                </button>
                <a
                  href={getQuickChatWhatsAppUrl("Wholesale Homepage CTA")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>Wholesale WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-3 w-full">
                <div className="bg-white/10 hover:bg-white/20 backdrop-blur-xs p-4 rounded-2xl border border-white/10 hover:border-[#F4B316]/60 transition-all duration-200 text-center hover:scale-105 hover:-translate-y-1 cursor-default group/tile">
                  <Coffee className="w-6 h-6 text-[#F4B316] group-hover/tile:scale-110 transition-transform mx-auto mb-1.5" />
                  <span className="text-xs font-bold block text-white">Cafes & Lounges</span>
                  <span className="text-[10px] text-white/60">Gourmet sides</span>
                </div>
                <div className="bg-white/10 hover:bg-white/20 backdrop-blur-xs p-4 rounded-2xl border border-white/10 hover:border-[#F4B316]/60 transition-all duration-200 text-center hover:scale-105 hover:-translate-y-1 cursor-default group/tile">
                  <Building2 className="w-6 h-6 text-[#F4B316] group-hover/tile:scale-110 transition-transform mx-auto mb-1.5" />
                  <span className="text-xs font-bold block text-white">Restaurants</span>
                  <span className="text-[10px] text-white/60">Uniform cuts</span>
                </div>
                <div className="bg-white/10 hover:bg-white/20 backdrop-blur-xs p-4 rounded-2xl border border-white/10 hover:border-[#F4B316]/60 transition-all duration-200 text-center hover:scale-105 hover:-translate-y-1 cursor-default group/tile">
                  <Flame className="w-6 h-6 text-[#F4B316] group-hover/tile:scale-110 transition-transform mx-auto mb-1.5" />
                  <span className="text-xs font-bold block text-white">Burger Joints</span>
                  <span className="text-[10px] text-white/60">Loaded fries</span>
                </div>
                <div className="bg-white/10 hover:bg-white/20 backdrop-blur-xs p-4 rounded-2xl border border-white/10 hover:border-[#F4B316]/60 transition-all duration-200 text-center hover:scale-105 hover:-translate-y-1 cursor-default group/tile">
                  <Store className="w-6 h-6 text-[#F4B316] group-hover/tile:scale-110 transition-transform mx-auto mb-1.5" />
                  <span className="text-xs font-bold block text-white">Food Stalls</span>
                  <span className="text-[10px] text-white/60">Zero prep</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold text-[#E27D18] uppercase tracking-wider font-['Outfit'] mb-1">
              Visual Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#25130A] font-['Outfit']">
              Product Packaging & Serving Gallery
            </h2>
            <p className="text-sm text-[#25130A]/75 mt-1 font-sans">
              Inspect our authentic 1kg transparent pouches and golden culinary presentations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedGalleryImage(item)}
              className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-white border border-[#25130A]/10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#25130A]/90 via-[#25130A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
                <span className="text-[11px] font-semibold text-[#F4B316] uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="text-sm sm:text-base font-bold font-['Outfit']">
                  {item.title}
                </span>
                <span className="text-xs text-white/80 line-clamp-1 mt-0.5 font-sans">
                  {item.description}
                </span>
              </div>
              <div className="absolute top-3 right-3 bg-white/90 p-1.5 rounded-lg text-[#25130A] shadow-xs group-hover:scale-110 transition-transform">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Modal Lightbox */}
      {selectedGalleryImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedGalleryImage(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl p-4 text-[#321B12]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#321B12]/10">
              <div>
                <span className="text-xs font-bold text-[#FF861C] uppercase tracking-wider">
                  {selectedGalleryImage.category}
                </span>
                <h3 className="text-lg font-bold font-['Outfit']">
                  {selectedGalleryImage.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedGalleryImage(null)}
                className="p-1 rounded-lg hover:bg-[#321B12]/10 cursor-pointer"
              >
                <X className="w-5 h-5 text-[#321B12]" />
              </button>
            </div>
            <div className="mt-3 aspect-4/3 rounded-xl overflow-hidden bg-[#FFF9EC] flex items-center justify-center">
              <img
                src={selectedGalleryImage.image}
                alt={selectedGalleryImage.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="mt-3 text-xs sm:text-sm text-[#321B12]/75">
              {selectedGalleryImage.description}
            </p>
          </div>
        </div>
      )}

      {/* 7. Customer Reviews / Honest Feedback Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="group bg-white dark:bg-[#1D0F08] rounded-3xl p-8 sm:p-10 border border-[#25130A]/10 dark:border-[#381E10] shadow-sm hover:shadow-xl hover:border-[#F4B316]/40 hover:-translate-y-1 transition-all duration-300 text-center max-w-3xl mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-[#FAF5E8] dark:bg-[#2A150C] text-[#25130A] flex items-center justify-center mx-auto mb-4 border border-[#F4B316]/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
            <Star className="w-7 h-7 text-[#E27D18] fill-[#F4B316]" />
          </div>

          <div className="text-xs font-bold text-[#E27D18] uppercase tracking-wider font-['Outfit'] mb-1">
            Customer Feedback & Reviews
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#25130A] dark:text-[#FDF9F0] font-['Outfit'] mb-3">
            We Value Your Genuine Experience
          </h2>

          <p className="text-sm text-[#25130A]/75 dark:text-[#D6C7B2]/85 leading-relaxed max-w-xl mx-auto mb-6 font-sans">
            At Fries Fusion, we pride ourselves on authentic customer relationships and real product satisfaction. We never publish fake testimonials or fabricated reviews. If you have enjoyed our fries at home or serve them in your cafe, we would love to hear your feedback!
          </p>

          <a
            href={getQuickChatWhatsAppUrl("Customer Review Submission")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
            <span>Share Feedback on WhatsApp</span>
          </a>
        </div>
      </section>

      {/* 8. Pre-Footer Quick Action Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="group bg-[#FAF5E8] dark:bg-[#1D0F08] rounded-3xl p-6 sm:p-8 border border-[#25130A]/10 dark:border-[#381E10] hover:border-[#E27D18]/30 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-[#25130A] dark:text-[#FDF9F0] font-['Outfit']">
              Ready for the Crunch?
            </h3>
            <p className="text-xs sm:text-sm text-[#25130A]/70 dark:text-[#D6C7B2]/80 mt-1 font-sans">
              Contact us on WhatsApp now to check current stock and arrange swift Karachi delivery.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getQuickChatWhatsAppUrl("Bottom Banner CTA")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Message {BRAND_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
