import React, { useState } from "react";
import {
  MessageCircle,
  Phone,
  Instagram,
  MapPin,
  Clock,
  Send,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import {
  BRAND_CONFIG,
  getGeneralContactWhatsAppUrl,
  getQuickChatWhatsAppUrl,
} from "../data/brand";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    topic: "Product Availability & Pricing",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getGeneralContactWhatsAppUrl(formData);
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 flex flex-col gap-16">
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC928]/25 dark:bg-[#F4B316]/15 border border-[#FF861C]/30 dark:border-[#F4B316]/30 text-xs font-bold text-[#321B12] dark:text-[#F4B316] mb-3">
          <Phone className="w-3.5 h-3.5 text-[#FF861C] dark:text-[#F4B316]" />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-[#321B12] dark:text-[#FDF9F0] font-['Outfit'] tracking-tight">
          Contact Fries Fusion
        </h1>
        <p className="text-base sm:text-lg text-[#321B12]/80 dark:text-[#D6C7B2] mt-3 leading-relaxed">
          We handle all enquiries and orders directly through WhatsApp to provide quick, personalized customer care.
        </p>
      </div>

      {/* 2. Contact Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: WhatsApp */}
        <div className="bg-white dark:bg-[#1D0F08] rounded-2xl p-6 border border-[#321B12]/10 dark:border-[#381E10] shadow-xs flex flex-col justify-between gap-4">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mb-3">
              <MessageCircle className="w-6 h-6 fill-[#25D366] text-white" />
            </div>
            <h3 className="text-lg font-bold text-[#321B12] dark:text-[#FDF9F0] font-['Outfit']">
              WhatsApp Hotline
            </h3>
            <p className="text-xs text-[#321B12]/70 dark:text-[#D6C7B2] mt-1">
              Direct ordering, quantity calculations, and stock checks.
            </p>
          </div>
          <div>
            <a
              href={BRAND_CONFIG.whatsAppBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-black text-[#25D366] hover:underline block"
            >
              {BRAND_CONFIG.phoneDisplay}
            </a>
            <span className="text-[11px] text-[#321B12]/50 dark:text-[#D6C7B2]/50 block mt-0.5">
              Available on WhatsApp
            </span>
          </div>
        </div>

        {/* Card 2: Location */}
        <div className="bg-white dark:bg-[#1D0F08] rounded-2xl p-6 border border-[#321B12]/10 dark:border-[#381E10] shadow-xs flex flex-col justify-between gap-4">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#FFF9EC] dark:bg-[#28140B] text-[#FF861C] dark:text-[#F4B316] flex items-center justify-center mb-3 border border-[#321B12]/10 dark:border-[#381E10]">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#321B12] dark:text-[#FDF9F0] font-['Outfit']">
              Karachi Location
            </h3>
            <p className="text-xs text-[#321B12]/70 dark:text-[#D6C7B2] mt-1">
              Frozen supplies dispatch and management base.
            </p>
          </div>
          <div>
            <span className="text-base font-bold text-[#321B12] dark:text-[#FDF9F0] block">
              {BRAND_CONFIG.location}
            </span>
            <span className="text-[11px] text-[#321B12]/50 dark:text-[#D6C7B2]/50 block mt-0.5">
              Karachi, Pakistan
            </span>
          </div>
        </div>

        {/* Card 3: Business Hours */}
        <div className="bg-white dark:bg-[#1D0F08] rounded-2xl p-6 border border-[#321B12]/10 dark:border-[#381E10] shadow-xs flex flex-col justify-between gap-4">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#FFF9EC] dark:bg-[#28140B] text-[#FFC928] dark:text-[#F4B316] flex items-center justify-center mb-3 border border-[#321B12]/10 dark:border-[#381E10]">
              <Clock className="w-6 h-6 text-[#321B12] dark:text-[#F4B316]" />
            </div>
            <h3 className="text-lg font-bold text-[#321B12] dark:text-[#FDF9F0] font-['Outfit']">
              Business Hours
            </h3>
            <p className="text-xs text-[#321B12]/70 dark:text-[#D6C7B2] mt-1">
              Customer support & order dispatch windows.
            </p>
          </div>
          <div>
            <span className="text-sm font-bold text-[#321B12] dark:text-[#FDF9F0] block">
              {BRAND_CONFIG.businessHours}
            </span>
            <span className="text-[11px] text-[#321B12]/50 dark:text-[#D6C7B2]/50 block mt-0.5">
              7 Days a Week
            </span>
          </div>
        </div>

        {/* Card 4: Instagram */}
        <div className="bg-white dark:bg-[#1D0F08] rounded-2xl p-6 border border-[#321B12]/10 dark:border-[#381E10] shadow-xs flex flex-col justify-between gap-4">
          <div>
            <div className="w-12 h-12 rounded-xl bg-pink-50 dark:bg-pink-950/30 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-3 border border-pink-200 dark:border-pink-900/40">
              <Instagram className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#321B12] dark:text-[#FDF9F0] font-['Outfit']">
              Instagram
            </h3>
            <p className="text-xs text-[#321B12]/70 dark:text-[#D6C7B2] mt-1">
              Follow us for fries updates, crunch reels, and notices.
            </p>
          </div>
          <div>
            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#FF861C] dark:text-[#F4B316] hover:underline block"
            >
              {BRAND_CONFIG.instagramHandle}
            </a>
            <span className="text-[11px] text-[#321B12]/50 dark:text-[#D6C7B2]/50 block mt-0.5">
              @fries_fusion
            </span>
          </div>
        </div>
      </div>

      {/* 3. Quick Enquiry Form & Map/Service Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct WhatsApp Form */}
        <div className="lg:col-span-7 bg-white dark:bg-[#1D0F08] rounded-3xl p-6 sm:p-8 border border-[#321B12]/10 dark:border-[#381E10] shadow-sm">
          <div className="mb-6">
            <span className="text-xs font-bold text-[#FF861C] dark:text-[#F4B316] uppercase tracking-wider font-['Outfit']">
              Message Us Directly
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#321B12] dark:text-[#FDF9F0] font-['Outfit'] mt-1">
              Quick WhatsApp Enquiry
            </h2>
            <p className="text-xs sm:text-sm text-[#321B12]/70 dark:text-[#D6C7B2] mt-1">
              Complete this short form and press Send to launch WhatsApp with your pre-composed inquiry.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#321B12]/70 dark:text-[#D6C7B2] mb-1.5">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter your name"
                className="w-full px-4 py-2.5 rounded-xl border border-[#25130A]/15 dark:border-[#381E10] bg-white dark:bg-[#28140B] text-[#25130A] dark:text-[#FDF9F0] placeholder-[#25130A]/40 dark:placeholder-[#D6C7B2]/40 text-sm focus:outline-none focus:border-[#E27D18] dark:focus:border-[#F4B316]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#25130A]/70 dark:text-[#D6C7B2] mb-1.5 font-['Outfit']">
                Enquiry Topic
              </label>
              <select
                value={formData.topic}
                onChange={(e) =>
                  setFormData({ ...formData, topic: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl border border-[#25130A]/15 dark:border-[#381E10] text-[#25130A] dark:text-[#FDF9F0] text-sm focus:outline-none focus:border-[#E27D18] dark:focus:border-[#F4B316] bg-white dark:bg-[#28140B]"
              >
                <option value="Product Availability & Pricing">
                  Product Availability & Pricing
                </option>
                <option value="Home Delivery to My Area">
                  Home Delivery to My Area
                </option>
                <option value="Wholesale & Cafe Bulk Supply">
                  Wholesale & Cafe Bulk Supply
                </option>
                <option value="General Question">General Question</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#25130A]/70 dark:text-[#D6C7B2] mb-1.5 font-['Outfit']">
                Your Message *
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Write your questions or order details here..."
                className="w-full px-4 py-2.5 rounded-xl border border-[#25130A]/15 dark:border-[#381E10] bg-white dark:bg-[#28140B] text-[#25130A] dark:text-[#FDF9F0] placeholder-[#25130A]/40 dark:placeholder-[#D6C7B2]/40 text-sm focus:outline-none focus:border-[#E27D18] dark:focus:border-[#F4B316]"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1ca54f] text-white font-bold text-sm sm:text-base shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>Send Enquiry via WhatsApp</span>
            </button>
          </form>
        </div>

        {/* Right Column: Karachi Service Hub Card */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-[#25130A] dark:bg-[#1A0D07] text-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#F4B316]/20 dark:border-[#381E10]">
            <h3 className="text-xl font-bold font-['Outfit'] text-white mb-2">
              Karachi Delivery Operations
            </h3>
            <p className="text-xs sm:text-sm text-white/75 dark:text-[#D6C7B2] leading-relaxed mb-4">
              Our fulfillment center is located in <strong>DMCHS, Karachi</strong>. We coordinate cold-packed rider and transport deliveries across the city.
            </p>

            <div className="space-y-2.5 text-xs text-white/80 dark:text-[#D6C7B2] border-t border-white/10 dark:border-[#381E10] pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFC928]" />
                <span>Coverage includes PECHS, Gulshan, DHA, Clifton, Bahadurabad, North Nazimabad & more.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFC928]" />
                <span>Cold-insulated packaging ensures fries arrive solid and frozen.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFC928]" />
                <span>Operating hours: 10:00 AM – 10:00 PM daily.</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 dark:border-[#381E10]">
              <a
                href={getQuickChatWhatsAppUrl("Contact Operations Card")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 dark:bg-black/30 hover:bg-white/20 dark:hover:bg-black/50 text-[#FFC928] dark:text-[#F4B316] text-xs font-bold flex items-center justify-center gap-2 transition-colors border border-white/10 dark:border-white/5"
              >
                <span>Check Delivery Slot for Your Area</span>
              </a>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/30 rounded-2xl p-5 border border-amber-200/80 dark:border-amber-800/40 text-xs text-amber-950 dark:text-amber-200">
            <strong className="block font-bold mb-1">
              Notice on Walk-In Orders:
            </strong>
            <p className="text-amber-900/85 dark:text-amber-200/80">
              Please message us on WhatsApp before arriving in person to verify stock availability in our cold storage and avoid waiting times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
