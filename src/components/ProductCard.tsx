import React from "react";
import { MessageCircle, Eye, Check } from "lucide-react";
import { Product, getProductOrderWhatsAppUrl } from "../data/brand";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
}) => {
  const defaultOrderUrl = getProductOrderWhatsAppUrl(product, 1);

  return (
    <div className="group bg-white dark:bg-[#1D0F08] rounded-3xl overflow-hidden border border-[#25130A]/10 dark:border-[#381E10] shadow-[0_4px_24px_-4px_rgba(37,19,10,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_24px_48px_-12px_rgba(37,19,10,0.18)] dark:hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7)] hover:border-[#F4B316]/50 dark:hover:border-[#F4B316]/50 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative">
      <div>
        {/* Product image container with generous height, glossy backdrop, and smooth hover zoom */}
        <div
          onClick={() => onViewDetails(product)}
          className="relative h-80 sm:h-96 md:h-[420px] bg-gradient-to-b from-[#FAF5E8] via-white to-[#FAF5E8] dark:from-[#180C06] dark:via-[#1D0F08] dark:to-[#180C06] p-5 sm:p-7 flex items-center justify-center overflow-hidden border-b border-[#25130A]/6 dark:border-white/5 cursor-pointer"
        >
          {/* Subtle decorative radial gradient aura */}
          <div className="absolute inset-0 bg-radial from-[#F4B316]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <img
            src={product.image}
            alt={`${product.name} 1kg packaging`}
            className="w-auto h-full max-h-[340px] sm:max-h-[380px] object-contain transition-all duration-500 ease-out group-hover:scale-108 group-hover:-translate-y-1 drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />

          {/* Badges with hover interaction */}
          <div className="absolute top-4 left-4 bg-[#25130A] dark:bg-[#2A150C] text-[#F4B316] text-xs font-bold px-3 py-1.5 rounded-xl shadow-md font-['Outfit'] border border-[#F4B316]/20 transition-transform duration-200 group-hover:scale-105">
            {product.code}
          </div>

          <div className="absolute top-4 right-4 bg-white/95 dark:bg-[#2A150C]/90 backdrop-blur-xs text-[#25130A] dark:text-[#FDF9F0] text-xs font-bold px-3 py-1.5 rounded-xl border border-[#25130A]/10 dark:border-white/10 shadow-xs transition-transform duration-200 group-hover:scale-105">
            1 kg Food Service Pack
          </div>

          {/* Subtle click to expand hint on hover */}
          <div className="absolute bottom-3 right-3 bg-[#25130A]/90 dark:bg-[#2A150C]/95 text-[#F4B316] text-[11px] font-semibold px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 flex items-center gap-1.5 shadow-md border border-[#F4B316]/20">
            <Eye className="w-3.5 h-3.5 text-[#E27D18]" />
            <span>Click to View Specs & Calculator</span>
          </div>
        </div>

        {/* Product information */}
        <div className="p-6 sm:p-7">
          <div className="text-xs font-bold text-[#E27D18] uppercase tracking-wider mb-1.5 font-['Outfit'] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#E27D18] animate-pulse" />
            <span>{product.cut}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-[#25130A] dark:text-[#FDF9F0] font-['Outfit'] mb-2 group-hover:text-[#E27D18] transition-colors duration-200">
            {product.name}
          </h3>

          <p className="text-xs sm:text-sm text-[#25130A]/75 dark:text-[#D6C7B2]/80 line-clamp-2 leading-relaxed mb-4 font-sans">
            {product.description}
          </p>

          {/* Key perks */}
          <div className="space-y-1.5 mb-5">
            {product.features.slice(0, 2).map((feat) => (
              <div key={feat} className="flex items-center gap-2 text-xs text-[#25130A]/85 dark:text-[#D6C7B2]">
                <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Price display with red accent & dynamic hover state */}
          <div className="pt-3 border-t border-[#25130A]/10 dark:border-white/10 flex items-baseline justify-between mb-4">
            <div>
              <span className="text-xs text-[#25130A]/60 dark:text-[#D6C7B2]/70 block font-medium">Official Rate</span>
              <span className="text-2xl sm:text-3xl font-black text-[#D9381E] font-['Outfit'] tabular-nums tracking-tight">
                Rs. {product.pricePerKg} <span className="text-xs font-semibold text-[#25130A]/60 dark:text-[#D6C7B2]/70">/ kg</span>
              </span>
            </div>
            <span className="text-xs font-bold text-[#25130A] dark:text-[#F4B316] bg-[#FAF5E8] dark:bg-[#2A150C] px-3 py-1.5 rounded-lg border border-[#F4B316]/30">
              Quick Frozen Pouch
            </span>
          </div>
        </div>
      </div>

      {/* Structured Actions: View specs & calculator + WhatsApp Enquiry */}
      <div className="p-5 sm:p-6 pt-0 grid grid-cols-1 sm:grid-cols-12 gap-2.5">
        <button
          onClick={() => onViewDetails(product)}
          className="sm:col-span-8 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25130A] dark:bg-[#2A150C] hover:bg-[#381c0f] dark:hover:bg-[#381C0F] border border-transparent dark:border-[#F4B316]/30 active:scale-98 text-[#F4B316] font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
        >
          <Eye className="w-4 h-4 text-[#F4B316]" />
          <span>Calculate Price & Specs</span>
        </button>

        <a
          href={defaultOrderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="sm:col-span-4 flex items-center justify-center gap-1.5 py-3.5 px-3 rounded-xl border-2 border-[#25D366]/50 hover:border-[#25D366] bg-white dark:bg-[#1E1009] hover:bg-[#25D366]/10 active:scale-98 text-[#1ca54f] dark:text-[#25D366] font-bold text-xs sm:text-sm shadow-xs hover:shadow transition-all duration-200"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span>Enquire</span>
        </a>
      </div>
    </div>
  );
};
