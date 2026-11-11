import React, { useState } from "react";
import {
  MessageCircle,
  Eye,
  Info,
  Check,
  Flame,
  Snowflake,
  Scale,
  Clock,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
import {
  BRAND_CONFIG,
  PRODUCTS,
  Product,
  getProductOrderWhatsAppUrl,
  getQuickChatWhatsAppUrl,
} from "../data/brand";
import { ProductCard } from "../components/ProductCard";

interface ProductsPageProps {
  onOpenProductModal: (product: Product) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onOpenProductModal,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedFilter === "regular") return p.code === "FF001";
    if (selectedFilter === "thick") return p.code === "FF002";
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col gap-12 sm:gap-16">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5E8] dark:bg-[#1D0F08] border border-[#F4B316]/40 text-xs font-bold text-[#25130A] dark:text-[#F4B316] mb-3 shadow-xs">
          <ShoppingBag className="w-3.5 h-3.5 text-[#E27D18]" />
          <span>Official Product Catalogue</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-[#25130A] dark:text-[#FDF9F0] font-['Outfit'] tracking-tight">
          Frozen Fries Product Line
        </h1>
        <p className="text-base text-[#25130A]/75 dark:text-[#D6C7B2]/80 mt-3 leading-relaxed font-sans">
          Premium quick-frozen fries packaged in convenient 1kg commercial-grade pouches.
          Choose your ideal cut thickness, calculate quantities, and confirm your order directly on WhatsApp.
        </p>

        {/* Pricing notice callout */}
        <div className="mt-6 p-4 rounded-2xl bg-[#FAF5E8] dark:bg-[#1D0F08] border border-[#F4B316]/30 dark:border-[#381E10] text-xs text-[#25130A] dark:text-[#D6C7B2] flex items-start gap-2.5 text-left max-w-2xl mx-auto shadow-xs">
          <Info className="w-4 h-4 text-[#E27D18] shrink-0 mt-0.5" />
          <div className="space-y-1 font-sans">
            <p className="font-bold text-[#25130A] dark:text-[#FDF9F0]">
              {BRAND_CONFIG.pricingNotice}
            </p>
            <p className="text-[#25130A]/75 dark:text-[#D6C7B2]/80">
              {BRAND_CONFIG.businessTypeNotice}
            </p>
          </div>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="mt-8 inline-flex items-center p-1 bg-white dark:bg-[#1D0F08] rounded-2xl border border-[#25130A]/10 dark:border-[#381E10] shadow-sm">
          <button
            onClick={() => setSelectedFilter("all")}
            className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer active:scale-95 ${
              selectedFilter === "all"
                ? "bg-[#25130A] dark:bg-[#2A150C] text-[#F4B316] shadow-sm border border-transparent dark:border-[#F4B316]/30"
                : "text-[#25130A]/70 dark:text-[#D6C7B2]/75 hover:text-[#25130A] dark:hover:text-[#FDF9F0] hover:bg-[#25130A]/5 dark:hover:bg-white/5"
            }`}
          >
            All Products ({PRODUCTS.length})
          </button>
          <button
            onClick={() => setSelectedFilter("regular")}
            className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer active:scale-95 ${
              selectedFilter === "regular"
                ? "bg-[#25130A] dark:bg-[#2A150C] text-[#F4B316] shadow-sm border border-transparent dark:border-[#F4B316]/30"
                : "text-[#25130A]/70 dark:text-[#D6C7B2]/75 hover:text-[#25130A] dark:hover:text-[#FDF9F0] hover:bg-[#25130A]/5 dark:hover:bg-white/5"
            }`}
          >
            Regular Cut (FF001)
          </button>
          <button
            onClick={() => setSelectedFilter("thick")}
            className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer active:scale-95 ${
              selectedFilter === "thick"
                ? "bg-[#25130A] dark:bg-[#2A150C] text-[#F4B316] shadow-sm border border-transparent dark:border-[#F4B316]/30"
                : "text-[#25130A]/70 dark:text-[#D6C7B2]/75 hover:text-[#25130A] dark:hover:text-[#FDF9F0] hover:bg-[#25130A]/5 dark:hover:bg-white/5"
            }`}
          >
            9mm Thick Cut (FF002)
          </button>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={onOpenProductModal}
          />
        ))}
      </div>

      {/* Cut Comparison & Technical Specifications Table */}
      <div className="bg-white dark:bg-[#1D0F08] rounded-3xl p-6 sm:p-8 border border-[#25130A]/10 dark:border-[#381E10] shadow-sm hover:shadow-md transition-shadow max-w-5xl mx-auto w-full">
        <div className="mb-6">
          <div className="text-xs font-bold text-[#E27D18] uppercase tracking-wider font-['Outfit'] mb-1">
            Cut Comparison & Technical Specifications
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#25130A] dark:text-[#FDF9F0] font-['Outfit']">
            Which Cut Fits Your Menu?
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#25130A] dark:text-[#FDF9F0]">
            <thead>
              <tr className="border-b border-[#25130A]/15 dark:border-white/10 text-xs uppercase tracking-wider text-[#25130A]/60 dark:text-[#D6C7B2]/70 font-['Outfit']">
                <th className="py-3 px-4 font-bold">Feature</th>
                <th className="py-3 px-4 font-bold text-[#25130A] dark:text-[#FDF9F0]">Regular Fries (FF001)</th>
                <th className="py-3 px-4 font-bold text-[#25130A] dark:text-[#FDF9F0]">9mm Fries (FF002)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#25130A]/10 dark:divide-white/10 font-sans">
              <tr className="hover:bg-[#FAF5E8]/50 dark:hover:bg-[#2A150C]/50 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#25130A]/70 dark:text-[#D6C7B2]/75">Cut Profile</td>
                <td className="py-3.5 px-4 font-bold">Classic Regular Cut (6x6 mm)</td>
                <td className="py-3.5 px-4 font-bold">Thick Cut (9x9 mm)</td>
              </tr>
              <tr className="hover:bg-[#FAF5E8]/50 dark:hover:bg-[#2A150C]/50 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#25130A]/70 dark:text-[#D6C7B2]/75">Official Price</td>
                <td className="py-3.5 px-4 font-black text-[#D9381E] tabular-nums text-base">Rs. 420 per kg</td>
                <td className="py-3.5 px-4 font-black text-[#D9381E] tabular-nums text-base">Rs. 580 per kg</td>
              </tr>
              <tr className="hover:bg-[#FAF5E8]/50 dark:hover:bg-[#2A150C]/50 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#25130A]/70 dark:text-[#D6C7B2]/75">Packaging Unit</td>
                <td className="py-3.5 px-4">1kg sealed food-service pouch</td>
                <td className="py-3.5 px-4">1kg sealed food-service pouch</td>
              </tr>
              <tr className="hover:bg-[#FAF5E8]/50 dark:hover:bg-[#2A150C]/50 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#25130A]/70 dark:text-[#D6C7B2]/75">Cooking Time (Fryer)</td>
                <td className="py-3.5 px-4 tabular-nums">3 to 4 minutes @ 175°C</td>
                <td className="py-3.5 px-4 tabular-nums">4 to 5 minutes @ 175°C</td>
              </tr>
              <tr className="hover:bg-[#FAF5E8]/50 dark:hover:bg-[#2A150C]/50 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#25130A]/70 dark:text-[#D6C7B2]/75">Best Application</td>
                <td className="py-3.5 px-4">Daily snacking, side fries, party platters, tea-time</td>
                <td className="py-3.5 px-4">Loaded cheese fries, gourmet burger sides, restaurant menus</td>
              </tr>
              <tr className="hover:bg-[#FAF5E8]/50 dark:hover:bg-[#2A150C]/50 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#25130A]/70 dark:text-[#D6C7B2]/75">Crunch Retention</td>
                <td className="py-3.5 px-4">Quick crisp, light golden bite</td>
                <td className="py-3.5 px-4">High heat hold, sturdy bite under sauces</td>
              </tr>
              <tr className="hover:bg-[#FAF5E8]/50 dark:hover:bg-[#2A150C]/50 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#25130A]/70 dark:text-[#D6C7B2]/75">Specs & Subtotal</td>
                <td className="py-3.5 px-4">
                  <button
                    onClick={() => onOpenProductModal(PRODUCTS[0])}
                    className="text-xs font-bold text-[#25130A] dark:text-[#F4B316] hover:text-[#D9381E] underline cursor-pointer"
                  >
                    Calculate & Select Quantity
                  </button>
                </td>
                <td className="py-3.5 px-4">
                  <button
                    onClick={() => onOpenProductModal(PRODUCTS[1])}
                    className="text-xs font-bold text-[#25130A] dark:text-[#F4B316] hover:text-[#D9381E] underline cursor-pointer"
                  >
                    Calculate & Select Quantity
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Cooking & Storage Best Practices */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
        <div className="group bg-white dark:bg-[#1D0F08] p-7 rounded-3xl border border-[#25130A]/10 dark:border-[#381E10] hover:border-[#E27D18]/30 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF5E8] dark:bg-[#2A150C] text-[#E27D18] dark:text-[#F4B316] flex items-center justify-center border border-[#F4B316]/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
            <Flame className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#25130A] dark:text-[#FDF9F0] font-['Outfit'] group-hover:text-[#E27D18] transition-colors">
            Deep Frying Tips for Maximum Crunch
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#25130A]/75 dark:text-[#D6C7B2]/80 font-sans">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
              <span><strong>Never thaw beforehand:</strong> Drop directly from frozen into hot cooking oil.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
              <span><strong>Keep oil temperature stable:</strong> Maintain 175°C (350°F) to avoid oily absorption.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
              <span><strong>Do not overcrowd the basket:</strong> Fry in batches for uniform crisping.</span>
            </li>
          </ul>
        </div>

        <div className="group bg-white dark:bg-[#1D0F08] p-7 rounded-3xl border border-[#25130A]/10 dark:border-[#381E10] hover:border-[#E27D18]/30 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF5E8] dark:bg-[#2A150C] text-[#E27D18] dark:text-[#F4B316] flex items-center justify-center border border-[#F4B316]/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
            <Snowflake className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#25130A] dark:text-[#FDF9F0] font-['Outfit'] group-hover:text-[#E27D18] transition-colors">
            Cold-Chain Storage Rules
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#25130A]/75 dark:text-[#D6C7B2]/80 font-sans">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
              <span><strong>Store at -18°C or colder:</strong> Store upright in standard freezer compartments.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
              <span><strong>Do not refreeze thawed product:</strong> Once defrosted, use immediately.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
              <span><strong>Reseal pouch tightly:</strong> Protect from freezer burn with food clips.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
