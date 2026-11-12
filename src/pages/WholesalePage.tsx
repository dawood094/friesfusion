import React, { useState } from "react";
import commercialFryer from "../assets/images/fries_commercial_fryer_1794427599946.jpg";
import cafeSpread from "../assets/images/fries_cafe_restaurant_spread_1794427600462.jpg";
import {
  MessageCircle,
  Building2,
  Coffee,
  Store,
  ChefHat,
  Flame,
  CheckCircle2,
  Package,
  TrendingDown,
  Clock,
  Sparkles,
  Send,
} from "lucide-react";
import {
  BRAND_CONFIG,
  PRODUCTS,
  getWholesaleWhatsAppUrl,
  getQuickChatWhatsAppUrl,
} from "../data/brand";

export const WholesalePage: React.FC = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    businessType: "Cafe",
    estimatedVolumeKg: "50-100 kg",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getWholesaleWhatsAppUrl(formData);
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 flex flex-col gap-16">
      {/* 1. Wholesale Hero */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC928]/25 dark:bg-[#F4B316]/15 border border-[#FF861C]/30 dark:border-[#F4B316]/30 text-xs font-bold text-[#321B12] dark:text-[#F4B316] mb-3">
          <Building2 className="w-3.5 h-3.5 text-[#FF861C] dark:text-[#F4B316]" />
          <span>B2B Commercial Supply</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-[#321B12] dark:text-[#FDF9F0] font-['Outfit'] tracking-tight">
          Wholesale Frozen Fries for Karachi Food Businesses
        </h1>
        <p className="text-base sm:text-lg text-[#321B12]/80 dark:text-[#D6C7B2] mt-3 leading-relaxed">
          Supplying cafes, restaurants, burger joints, food trucks, and commercial kitchens with premium quick-frozen fries in dependable 1kg food-service packs.
        </p>
      </div>

      {/* 2. Commercial Advantages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-[#1D0F08] p-6 sm:p-7 rounded-2xl border border-[#321B12]/10 dark:border-[#381E10] shadow-xs flex flex-col gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#FFF9EC] dark:bg-[#28140B] text-[#FF861C] dark:text-[#F4B316] flex items-center justify-center border border-[#25130A]/5 dark:border-[#381E10]">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#321B12] dark:text-[#FDF9F0] font-['Outfit']">
            Zero Kitchen Prep Time
          </h3>
          <p className="text-xs sm:text-sm text-[#321B12]/70 dark:text-[#D6C7B2] leading-relaxed">
            Eliminate washing, peeling, starch soaking, and manual cutting. Free your line cooks to focus on speed and plate presentation.
          </p>
        </div>

        <div className="bg-white dark:bg-[#1D0F08] p-6 sm:p-7 rounded-2xl border border-[#321B12]/10 dark:border-[#381E10] shadow-xs flex flex-col gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#FFF9EC] dark:bg-[#28140B] text-[#FF861C] dark:text-[#F4B316] flex items-center justify-center border border-[#25130A]/5 dark:border-[#381E10]">
            <TrendingDown className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#321B12] dark:text-[#FDF9F0] font-['Outfit']">
            Predictable Food Cost
          </h3>
          <p className="text-xs sm:text-sm text-[#321B12]/70 dark:text-[#D6C7B2] leading-relaxed">
            Standard 1kg sealed pouches make inventory tracking and portion costing effortless. Zero potato rotting, shrinkage, or cutting scrap waste.
          </p>
        </div>

        <div className="bg-white dark:bg-[#1D0F08] p-6 sm:p-7 rounded-2xl border border-[#321B12]/10 dark:border-[#381E10] shadow-xs flex flex-col gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#FFF9EC] dark:bg-[#28140B] text-[#FF861C] dark:text-[#F4B316] flex items-center justify-center border border-[#25130A]/5 dark:border-[#381E10]">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#321B12] dark:text-[#FDF9F0] font-['Outfit']">
            Consistent Plate Crunch
          </h3>
          <p className="text-xs sm:text-sm text-[#321B12]/70 dark:text-[#D6C7B2] leading-relaxed">
            Quick-frozen potatoes ensure repeatable frying curves batch after batch, keeping customers raving about your sides.
          </p>
        </div>
      </div>

      {/* 3. Product Variety for Commercial Kitchens */}
      <div className="bg-white dark:bg-[#1D0F08] rounded-3xl p-8 sm:p-10 border border-[#321B12]/10 dark:border-[#381E10] shadow-sm">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold text-[#FF861C] dark:text-[#F4B316] uppercase tracking-wider font-['Outfit']">
            Varieties for Your Menu
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#321B12] dark:text-[#FDF9F0] font-['Outfit'] mt-1">
            Two High-Performance Commercial Cuts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#FAF5E8]/40 dark:bg-[#160B06] border border-[#25130A]/8 dark:border-[#381E10] flex flex-col sm:flex-row items-center gap-6 shadow-[0_4px_24px_-4px_rgba(37,19,10,0.06)] hover:shadow-md transition-shadow"
            >
              <div className="w-40 h-52 sm:w-48 sm:h-60 bg-gradient-to-b from-[#FAF5E8] via-white to-[#FAF5E8] dark:from-[#24130A] dark:via-[#1D0F08] dark:to-[#24130A] rounded-2xl p-3 shrink-0 border border-[#25130A]/8 dark:border-[#381E10] flex items-center justify-center shadow-inner">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-auto h-full max-h-[210px] object-contain drop-shadow-xl hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 text-left w-full">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold text-[#E27D18] dark:text-[#F4B316] uppercase font-['Outfit']">
                    {prod.code}
                  </span>
                  <span className="text-xs text-[#25130A]/40 dark:text-[#D6C7B2]/40">·</span>
                  <span className="text-xs font-semibold text-[#25130A]/70 dark:text-[#D6C7B2]">
                    {prod.packaging}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#25130A] dark:text-[#FDF9F0] font-['Outfit']">
                  {prod.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#25130A]/75 dark:text-[#D6C7B2] mt-1.5 line-clamp-3 leading-relaxed">
                  {prod.description}
                </p>
                <div className="mt-4 pt-3 border-t border-[#25130A]/8 dark:border-[#381E10] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#25130A]/60 dark:text-[#D6C7B2]/60 block font-medium">Standard Rate</span>
                    <span className="text-base font-black text-[#D9381E] tabular-nums font-['Outfit']">
                      Rs. {prod.pricePerKg}/kg
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#E27D18] dark:text-[#F4B316] bg-[#FAF5E8] dark:bg-[#28140B] px-3 py-1.5 rounded-xl border border-[#25130A]/8 dark:border-[#381E10]">
                    Bulk Tier on WhatsApp
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Commercial Kitchen Action Photo Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-lg border border-[#321B12]/10 dark:border-[#381E10]">
          <img
            src={commercialFryer}
            alt="Commercial Fryer Basket Action"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
            <span className="text-xs font-bold text-[#FFC928] uppercase">
              High Rush Execution
            </span>
            <span className="text-base font-bold">
              Rapid recovery & even crisping in busy kitchens
            </span>
          </div>
        </div>

        <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-lg border border-[#321B12]/10 dark:border-[#381E10]">
          <img
            src={cafeSpread}
            alt="Cafe Dining Spread with Loaded Fries"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
            <span className="text-xs font-bold text-[#FFC928] uppercase">
              Cafe & Dine-In Appeal
            </span>
            <span className="text-base font-bold">
              Premium presentation that compliments craft burgers
            </span>
          </div>
        </div>
      </div>

      {/* 5. Dedicated Wholesale WhatsApp Enquiry Form */}
      <div className="bg-[#321B12] dark:bg-[#1A0D07] text-white rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto w-full shadow-xl border border-white/5 dark:border-[#381E10]">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-[#FFC928] uppercase tracking-wider font-['Outfit']">
            Bulk Quotation Request
          </span>
          <h2 className="text-3xl font-black font-['Outfit'] mt-1 text-white">
            Send Wholesale Enquiry via WhatsApp
          </h2>
          <p className="text-sm text-white/70 mt-2">
            Fill in your business details below. Submitting will format an organized quotation request and open WhatsApp directly with our commercial team.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                Business / Restaurant Name *
              </label>
              <input
                type="text"
                required
                value={formData.businessName}
                onChange={(e) =>
                  setFormData({ ...formData, businessName: e.target.value })
                }
                placeholder="e.g. The Burger Joint"
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 dark:bg-black/30 border border-white/20 dark:border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#FFC928]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                Contact Person *
              </label>
              <input
                type="text"
                required
                value={formData.contactName}
                onChange={(e) =>
                  setFormData({ ...formData, contactName: e.target.value })
                }
                placeholder="Your name"
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 dark:bg-black/30 border border-white/20 dark:border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#FFC928]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                Business Type
              </label>
              <select
                value={formData.businessType}
                onChange={(e) =>
                  setFormData({ ...formData, businessType: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-[#28150d] dark:bg-black/40 border border-white/20 dark:border-white/10 text-white text-sm focus:outline-none focus:border-[#FFC928]"
              >
                <option value="Cafe / Coffee House">Cafe / Coffee House</option>
                <option value="Burger Joint / Fast Food">Burger Joint / Fast Food</option>
                <option value="Casual Dine-in Restaurant">Casual Dine-in Restaurant</option>
                <option value="Food Stall / Kiosk">Food Stall / Kiosk</option>
                <option value="Catering / Event Kitchen">Catering / Event Kitchen</option>
                <option value="Bulk Reseller / Retailer">Bulk Reseller / Retailer</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                Estimated Monthly Volume
              </label>
              <select
                value={formData.estimatedVolumeKg}
                onChange={(e) =>
                  setFormData({ ...formData, estimatedVolumeKg: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-[#28150d] dark:bg-black/40 border border-white/20 dark:border-white/10 text-white text-sm focus:outline-none focus:border-[#FFC928]"
              >
                <option value="25-50 kg">25 – 50 kg (Sample / Small cafe)</option>
                <option value="50-100 kg">50 – 100 kg (Medium cafe)</option>
                <option value="100-250 kg">100 – 250 kg (High-volume burger shop)</option>
                <option value="250+ kg">250+ kg (Commercial chain / bulk)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
              Specific Requirements / Delivery Area in Karachi
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="e.g. Regular Cut vs 9mm sample requirements, delivery frequency to Gulshan / DHA / Clifton..."
              className="w-full px-4 py-2.5 rounded-xl bg-white/10 dark:bg-black/30 border border-white/20 dark:border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#FFC928]"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1ca54f] text-white font-bold text-base shadow-md transition-all cursor-pointer mt-4"
          >
            <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
            <span>Open WhatsApp Wholesale Enquiry</span>
          </button>
        </form>
      </div>
    </div>
  );
};
