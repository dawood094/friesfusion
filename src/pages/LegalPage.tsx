import React, { useState } from "react";
import { Shield, FileText, Info, MessageCircle } from "lucide-react";
import { BRAND_CONFIG } from "../data/brand";

interface LegalPageProps {
  initialTab?: "privacy" | "terms";
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = "privacy" }) => {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">(initialTab);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      {/* Header Tabs */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <button
          onClick={() => setActiveTab("privacy")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
            activeTab === "privacy"
              ? "bg-[#321B12] dark:bg-[#F4B316] text-[#FFC928] dark:text-[#25130A] shadow-sm"
              : "bg-white dark:bg-[#1D0F08] text-[#321B12]/70 dark:text-[#D6C7B2] hover:text-[#321B12] dark:hover:text-white border border-[#321B12]/10 dark:border-[#381E10]"
          }`}
        >
          <Shield className="w-4 h-4" />
          <span>Privacy Policy</span>
        </button>

        <button
          onClick={() => setActiveTab("terms")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
            activeTab === "terms"
              ? "bg-[#25130A] dark:bg-[#F4B316] text-[#F4B316] dark:text-[#25130A] shadow-sm"
              : "bg-white dark:bg-[#1D0F08] text-[#25130A]/70 dark:text-[#D6C7B2] hover:text-[#25130A] dark:hover:text-white border border-[#25130A]/10 dark:border-[#381E10]"
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Terms of Use</span>
        </button>
      </div>

      {/* Content Container */}
      <div className="bg-white dark:bg-[#1D0F08] rounded-3xl p-6 sm:p-10 border border-[#25130A]/8 dark:border-[#381E10] shadow-[0_4px_24px_-4px_rgba(37,19,10,0.06)] text-[#25130A] dark:text-[#FDF9F0]">
        {activeTab === "privacy" ? (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-[#E27D18] dark:text-[#F4B316] uppercase tracking-wider font-['Outfit']">
                Customer Data & Privacy
              </span>
              <h1 className="text-3xl font-black font-['Outfit'] text-[#25130A] dark:text-[#FDF9F0] mt-1">
                Privacy Policy
              </h1>
              <p className="text-xs text-[#25130A]/60 dark:text-[#D6C7B2]/60 mt-1">
                Last Updated: January 2026
              </p>
            </div>

            <div className="prose prose-sm text-[#321B12]/80 dark:text-[#D6C7B2] space-y-4 font-sans leading-relaxed">
              <section>
                <h3 className="text-base font-bold text-[#321B12] dark:text-[#FDF9F0] font-['Outfit']">
                  1. Information We Collect
                </h3>
                <p>
                  At <strong>Fries Fusion</strong>, we respect your privacy. When you place an enquiry or order with us through our website or via WhatsApp, we may collect minimal contact information, including your full name, WhatsApp/telephone number, delivery address in Karachi, and your product enquiry details.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-[#321B12] dark:text-[#FDF9F0] font-['Outfit']">
                  2. How We Use Your Information
                </h3>
                <p>
                  The information provided is utilized strictly for:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Processing product orders and confirming inventory availability.</li>
                  <li>Coordinating cold-chain delivery schedules to your residential address or commercial kitchen.</li>
                  <li>Responding to inquiries, sample requests, and wholesale quotations.</li>
                  <li>Providing customer service and follow-up regarding order satisfaction.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-base font-bold text-[#321B12] dark:text-[#FDF9F0] font-['Outfit']">
                  3. Direct Communications via WhatsApp
                </h3>
                <p>
                  Fries Fusion conducts ordering communication directly through WhatsApp. We do not sell, rent, monetize, or disclose your telephone number or personal data to unauthorized third-party marketers.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-[#321B12] dark:text-[#FDF9F0] font-['Outfit']">
                  4. Data Security
                </h3>
                <p>
                  We implement reasonable organizational safeguards to protect customer records and delivery destinations from unauthorized access, alteration, or disclosure.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-[#321B12] dark:text-[#FDF9F0] font-['Outfit']">
                  5. Contact for Privacy Inquiries
                </h3>
                <p>
                  If you have questions regarding our privacy practices or wish to update or delete your contact records from our order history, please message us on WhatsApp at <strong>{BRAND_CONFIG.phoneDisplay}</strong> or visit our office at {BRAND_CONFIG.location}.
                </p>
              </section>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-[#FF861C] dark:text-[#F4B316] uppercase tracking-wider font-['Outfit']">
                Terms & Conditions
              </span>
              <h1 className="text-3xl font-black font-['Outfit'] text-[#321B12] dark:text-[#FDF9F0] mt-1">
                Terms of Use
              </h1>
              <p className="text-xs text-[#321B12]/60 dark:text-[#D6C7B2]/60 mt-1">
                Last Updated: January 2026
              </p>
            </div>

            <div className="prose prose-sm text-[#321B12]/80 dark:text-[#D6C7B2] space-y-4 font-sans leading-relaxed">
              <section>
                <h3 className="text-base font-bold text-[#321B12] dark:text-[#FDF9F0] font-['Outfit']">
                  1. Nature of the Business
                </h3>
                <p>
                  <strong>Fries Fusion</strong> is a supplier of quick-frozen food products and frozen french fries packaged in 1kg sealed food-service pouches. We supply raw frozen goods for cooking in household or commercial fryers and air fryers. We are not a ready-to-eat restaurant, fast-food outlet, or cooked food delivery establishment.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-[#321B12] dark:text-[#FDF9F0] font-['Outfit']">
                  2. Pricing & Order Confirmation
                </h3>
                <p>
                  Product prices listed on this website (e.g. Regular Fries FF001 at Rs. 420 per kg and 9mm Fries FF002 at Rs. 580 per kg) are current reference rates and are subject to final stock verification and written confirmation on WhatsApp before an order is scheduled for dispatch.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-[#321B12] dark:text-[#FDF9F0] font-['Outfit']">
                  3. Cold Storage & Product Handling
                </h3>
                <p>
                  Our fries are flash-frozen to -18°C. Upon receiving delivery in Karachi, the customer is responsible for inspecting packaging and transferring the pouches into adequate deep-freeze storage (-18°C or colder). Fries Fusion cannot be held liable for product defrosting, sogginess, or spoilage caused by improper thawing or delayed freezer transfer post-delivery.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-[#321B12] dark:text-[#FDF9F0] font-['Outfit']">
                  4. Commercial Wholesale Agreements
                </h3>
                <p>
                  For cafes, restaurants, and bulk buyers, delivery frequency, payment terms, and volume rate cards are established by direct agreement via our commercial WhatsApp team.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-[#321B12] dark:text-[#FDF9F0] font-['Outfit']">
                  5. Governing Location
                </h3>
                <p>
                  All transactions and inquiries are managed from our base in DMCHS, Karachi, Pakistan.
                </p>
              </section>
            </div>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-[#321B12]/10 dark:border-[#381E10] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#321B12]/60 dark:text-[#D6C7B2]/60">
          <div>
            Official Fries Fusion Legal Documentation · Karachi, PK
          </div>
          <a
            href={BRAND_CONFIG.whatsAppBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] font-bold hover:underline flex items-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4 fill-[#25D366] text-white" />
            <span>Questions? Message on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
