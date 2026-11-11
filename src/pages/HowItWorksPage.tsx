import React, { useState } from "react";
import {
  MessageCircle,
  ShoppingBag,
  CheckCircle2,
  Truck,
  Sparkles,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  ArrowRight,
  Flame,
} from "lucide-react";
import { BRAND_CONFIG, getQuickChatWhatsAppUrl } from "../data/brand";

interface HowItWorksPageProps {
  onNavigate: (page: string) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({
  onNavigate,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = [
    {
      num: "01",
      title: "Browse the Catalogue",
      description:
        "Check our available frozen fries varieties: Regular Fries (FF001) at Rs. 420/kg and 9mm Thick Cut (FF002) at Rs. 580/kg.",
      tip: "Both products come in sealed 1kg food-service bags.",
    },
    {
      num: "02",
      title: "Select Product & Quantity",
      description:
        "Use our interactive calculator to choose how many kilograms you require, whether a few packs for your home or bulk crates for your cafe.",
      tip: "Calculates estimated subtotal automatically.",
    },
    {
      num: "03",
      title: "Connect on WhatsApp",
      description:
        "Click the WhatsApp order button. A pre-formatted order enquiry will automatically load with your selected cut, quantity, and subtotal.",
      tip: "Our team operates 10:00 AM – 10:00 PM daily.",
    },
    {
      num: "04",
      title: "Confirm Stock & Final Pricing",
      description:
        "We review current warehouse inventory, verify current rate cards, and confirm product availability for your order.",
      tip: "All prices are finalized directly on WhatsApp.",
    },
    {
      num: "05",
      title: "Arrange Delivery & Dispatch",
      description:
        "Share your Karachi delivery address. We coordinate the dispatch window to ensure the cold-chain is maintained straight to your door.",
      tip: "Keep a freezer space cleared at -18°C.",
    },
  ];

  const faqs = [
    {
      question: "Are these ready-to-eat cooked fries or frozen supplies?",
      answer:
        "Fries Fusion provides quick-frozen potato fries supplies in 1kg pouches. You fry or air-fry them at home or in your cafe kitchen. We do not operate a cooked food delivery restaurant.",
    },
    {
      question: "Can individual households order, or is it strictly commercial?",
      answer:
        "Both! We gladly supply individual customers and families who want restaurant-grade fries at home, as well as high-volume commercial kitchens, cafes, burger joints, and food stalls.",
    },
    {
      question: "What areas in Karachi do you deliver to?",
      answer:
        "We are based in DMCHS, Karachi and coordinate deliveries across major Karachi areas. Delivery schedules and charges depend on your specific sector or neighborhood; our WhatsApp team will provide the exact timeline upon enquiry.",
    },
    {
      question: "What is the minimum order quantity?",
      answer:
        "For retail home customers, you can order from single 1kg packs upwards. For cafes and restaurants seeking wholesale terms, discuss your estimated weekly or monthly volumes with us on WhatsApp.",
    },
    {
      question: "How should I store the fries after receiving them?",
      answer:
        "Place the 1kg pouches immediately into your freezer at -18°C or below. Always keep them frozen until the moment they go into the fryer; do not allow them to defrost before cooking.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 flex flex-col gap-16">
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC928]/25 dark:bg-[#F4B316]/15 border border-[#FF861C]/30 dark:border-[#F4B316]/30 text-xs font-bold text-[#321B12] dark:text-[#F4B316] mb-3">
          <Truck className="w-3.5 h-3.5 text-[#FF861C] dark:text-[#F4B316]" />
          <span>Transparent Order Flow</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-[#321B12] dark:text-[#FDF9F0] font-['Outfit'] tracking-tight">
          How Ordering Works
        </h1>
        <p className="text-base sm:text-lg text-[#321B12]/80 dark:text-[#D6C7B2] mt-3 leading-relaxed">
          From browsing cuts to hearing the sizzle in your kitchen.
          Here is how direct WhatsApp ordering with Fries Fusion works step-by-step.
        </p>

        {/* Notice badge */}
        <div className="mt-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-800/40 text-xs text-amber-950 dark:text-amber-200 flex items-start gap-2.5 text-left max-w-2xl mx-auto">
          <AlertCircle className="w-4 h-4 text-[#FF861C] dark:text-[#F4B316] shrink-0 mt-0.5" />
          <p>
            <strong>Direct Communication Policy: </strong>
            Stock availability, delivery schedules, and finalized pricing must be confirmed directly with our team on WhatsApp before dispatch.
          </p>
        </div>
      </div>

      {/* 2. Step-by-Step Interactive Timeline */}
      <div className="max-w-4xl mx-auto w-full space-y-6">
        {steps.map((step) => (
          <div
            key={step.num}
            className="bg-white dark:bg-[#1D0F08] rounded-2xl p-6 sm:p-7 border border-[#321B12]/10 dark:border-[#381E10] shadow-xs flex flex-col sm:flex-row items-start gap-5 hover:border-[#FF861C]/40 dark:hover:border-[#F4B316]/40 transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#F5EEDB] dark:bg-[#28140B] text-[#25130A] dark:text-[#F4B316] flex items-center justify-center font-black text-2xl font-['Outfit'] shrink-0 border border-[#25130A]/8 dark:border-[#381E10]">
              {step.num}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#25130A] dark:text-[#FDF9F0] font-['Outfit'] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#25130A]/75 dark:text-[#D6C7B2] leading-relaxed font-sans mb-3">
                {step.description}
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E27D18] dark:text-[#F4B316] bg-[#FAF5E8] dark:bg-[#28140B] px-3 py-1 rounded-md border border-[#25130A]/5 dark:border-[#381E10]">
                <span>{step.tip}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Cooking Guidelines Preview */}
      <div className="bg-[#25130A] dark:bg-[#1A0D07] text-white rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto w-full border border-[#F4B316]/20 dark:border-[#381E10] shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <Flame className="w-6 h-6 text-[#F4B316]" />
          <h2 className="text-2xl sm:text-3xl font-black font-['Outfit']">
            Golden Fryer Execution
          </h2>
        </div>
        <p className="text-sm text-white/80 dark:text-[#D6C7B2] leading-relaxed mb-6 font-sans">
          For the crispiest results, follow the simple temperature and timing formula:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white/10 dark:bg-black/30 p-5 rounded-2xl border border-white/10 dark:border-white/5">
            <span className="text-xs font-bold text-[#F4B316] uppercase tracking-wider block mb-1">
              Regular Fries (FF001)
            </span>
            <div className="text-sm font-bold text-white">3 to 4 Minutes</div>
            <div className="text-xs text-white/70 dark:text-[#D6C7B2]/70 mt-1">
              Oil temperature: 175°C (350°F). Shake basket at minute 2 for even golden color.
            </div>
          </div>
          <div className="bg-white/10 dark:bg-black/30 p-5 rounded-2xl border border-white/10 dark:border-white/5">
            <span className="text-xs font-bold text-[#F4B316] uppercase tracking-wider block mb-1">
              9mm Thick Cut (FF002)
            </span>
            <div className="text-sm font-bold text-white">4 to 5 Minutes</div>
            <div className="text-xs text-white/70 dark:text-[#D6C7B2]/70 mt-1">
              Oil temperature: 175°C (350°F). Perfect sturdy crunch for melted cheese toppings.
            </div>
          </div>
        </div>
      </div>

      {/* 4. Frequently Asked Questions (FAQ) */}
      <div className="max-w-3xl mx-auto w-full">
        <div className="text-center mb-8">
          <div className="text-xs font-bold text-[#FF861C] dark:text-[#F4B316] uppercase tracking-wider font-['Outfit'] mb-1">
            Questions & Answers
          </div>
          <h2 className="text-3xl font-black text-[#321B12] dark:text-[#FDF9F0] font-['Outfit']">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white dark:bg-[#1D0F08] rounded-xl border border-[#321B12]/10 dark:border-[#381E10] overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-[#321B12] dark:text-[#FDF9F0] hover:bg-[#FFF9EC] dark:hover:bg-[#28140B] transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#FF861C] dark:text-[#F4B316] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#321B12]/40 dark:text-[#D6C7B2]/40 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#321B12]/75 dark:text-[#D6C7B2] leading-relaxed border-t border-[#321B12]/5 dark:border-[#381E10] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. Direct WhatsApp prompt */}
      <div className="text-center pt-4">
        <a
          href={getQuickChatWhatsAppUrl("How It Works Bottom CTA")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-md transition-colors"
        >
          <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
          <span>Ask Questions on WhatsApp ({BRAND_CONFIG.phoneDisplay})</span>
        </a>
      </div>
    </div>
  );
};
