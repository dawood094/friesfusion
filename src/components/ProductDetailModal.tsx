import React, { useState, useEffect } from "react";
import { X, MessageCircle, Plus, Minus, Info, Check, ShieldCheck, Flame } from "lucide-react";
import { Product, BRAND_CONFIG, getProductOrderWhatsAppUrl } from "../data/brand";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [isAnimatingAmount, setIsAnimatingAmount] = useState<boolean>(false);

  const handleQuantityChange = (newQty: number) => {
    if (newQty < 1) return;
    setQuantity(newQty);
    setIsAnimatingAmount(true);
    setTimeout(() => setIsAnimatingAmount(false), 280);
  };

  // Reset quantity whenever product opens
  useEffect(() => {
    if (product) {
      setQuantity(1);
      setIsAnimatingAmount(false);
    }
  }, [product]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [product, onClose]);

  if (!product) return null;

  const subtotal = product.pricePerKg * quantity;
  const whatsAppUrl = getProductOrderWhatsAppUrl(product, quantity);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative bg-white dark:bg-[#1D0F08] rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden border border-[#25130A]/10 dark:border-[#381E10] my-4 text-[#25130A] dark:text-[#FDF9F0] transition-colors duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar with close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#25130A]/8 dark:border-white/10 bg-[#FAF5E8] dark:bg-[#160B06]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#E27D18] uppercase tracking-wider font-['Outfit']">
              {product.code}
            </span>
            <span className="text-xs text-[#25130A]/40 dark:text-white/40">·</span>
            <span className="text-xs font-semibold text-[#25130A]/70 dark:text-[#D6C7B2]/75">
              {product.category}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-[#25130A]/60 dark:text-white/60 hover:text-[#25130A] dark:hover:text-white hover:bg-[#25130A]/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-8 max-h-[calc(88vh-80px)] overflow-y-auto">
          {/* Left Column: Official Packaging & Specs */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="relative h-80 sm:h-[440px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#F7F2E7] via-white to-[#F7F2E7] dark:from-[#180C06] dark:via-[#1D0F08] dark:to-[#180C06] border border-[#25130A]/8 dark:border-white/5 flex items-center justify-center p-6 shadow-inner">
              <img
                src={product.image}
                alt={`${product.name} Official 1kg Packaging`}
                className="w-auto h-full max-h-[400px] object-contain drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#25130A] dark:bg-[#2A150C] text-[#F4B316] text-xs font-bold px-3 py-1.5 rounded-lg shadow-md font-['Outfit'] border border-[#F4B316]/20">
                Official 1kg Pack
              </div>
            </div>

            {/* Quick specs */}
            <div className="bg-[#FAF5E8] dark:bg-[#160B06] p-4 rounded-xl border border-[#25130A]/8 dark:border-white/10 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#25130A]/70 dark:text-[#D6C7B2]/70">Cut Specification:</span>
                <span className="font-bold text-[#25130A] dark:text-[#FDF9F0]">{product.cut}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#25130A]/70 dark:text-[#D6C7B2]/70">Packaging:</span>
                <span className="font-bold text-[#25130A] dark:text-[#FDF9F0]">{product.packaging}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#25130A]/70 dark:text-[#D6C7B2]/70">Storage:</span>
                <span className="font-bold text-[#25130A] dark:text-[#FDF9F0]">-18°C Deep Frozen</span>
              </div>
            </div>
          </div>

          {/* Right Column: Information, Pricing & Ordering */}
          <div className="md:col-span-7 flex flex-col justify-between gap-5">
            <div>
              <h3
                id="modal-title"
                className="text-2xl sm:text-3xl font-extrabold text-[#25130A] dark:text-[#FDF9F0] font-['Outfit']"
              >
                {product.name}
              </h3>
              <p className="text-sm text-[#E27D18] font-semibold mt-1">
                {product.tagline}
              </p>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-black text-[#25130A] dark:text-[#FDF9F0] font-['Outfit'] tabular-nums">
                  Rs. {product.pricePerKg}
                </span>
                <span className="text-sm font-semibold text-[#25130A]/60 dark:text-[#D6C7B2]/70">
                  / 1kg pouch
                </span>
              </div>

              <p className="text-sm text-[#25130A]/80 dark:text-[#D6C7B2]/85 leading-relaxed mt-3 font-sans">
                {product.description}
              </p>

              {/* Suitable For */}
              <div className="mt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#25130A]/70 dark:text-[#D6C7B2]/70 mb-2">
                  Ideal Usage:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.suitableFor.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-md bg-[#FAF5E8] dark:bg-[#160B06] text-[#25130A] dark:text-[#FDF9F0] border border-[#25130A]/10 dark:border-white/10 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cooking advice */}
              <div className="mt-4 p-3 bg-amber-50/70 dark:bg-amber-950/30 rounded-xl border border-amber-200/60 dark:border-amber-800/40 text-xs text-amber-950 dark:text-amber-200 flex items-start gap-2">
                <Flame className="w-4 h-4 text-[#E27D18] shrink-0 mt-0.5" />
                <p>
                  <strong className="font-bold">Preparation: </strong>
                  {product.cookingInstructions}
                </p>
              </div>
            </div>

            {/* Ordering & Calculator Section */}
            <div className="border-t border-[#25130A]/10 dark:border-white/10 pt-4 space-y-4">
              {/* Quantity selector */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#25130A]/70 dark:text-[#D6C7B2]/70 block font-['Outfit']">
                    Select Quantity
                  </span>
                  <span className="text-xs text-[#25130A]/50 dark:text-[#D6C7B2]/50">
                    1kg food service pouches
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border-2 border-[#25130A]/15 dark:border-white/15 rounded-xl overflow-hidden bg-[#FAF5E8] dark:bg-[#160B06]">
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                      className="p-2.5 hover:bg-[#25130A]/10 dark:hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer text-[#25130A] dark:text-[#FDF9F0]"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-14 text-center font-black text-sm text-[#25130A] dark:text-[#FDF9F0] tabular-nums font-['Outfit']">
                      {quantity} kg
                    </span>
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="p-2.5 hover:bg-[#25130A]/10 dark:hover:bg-white/10 transition-colors cursor-pointer text-[#25130A] dark:text-[#FDF9F0]"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Estimated subtotal calculation in bold vibrant RED */}
              <div className="flex items-center justify-between p-4 bg-rose-50/70 dark:bg-rose-950/30 rounded-2xl border-2 border-[#D9381E]/30 dark:border-[#D9381E]/40 shadow-xs transition-colors">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#25130A]/70 dark:text-[#D6C7B2]/70 block font-['Outfit']">
                    Estimated Subtotal
                  </span>
                  <span className="text-xs font-bold text-[#D9381E]">
                    {quantity} kg × Rs. {product.pricePerKg}
                  </span>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-block text-2xl sm:text-3xl font-black text-[#D9381E] tabular-nums font-['Outfit'] transition-all duration-200 transform origin-right ${
                      isAnimatingAmount ? "scale-115 text-red-600 drop-shadow-sm" : "scale-100"
                    }`}
                  >
                    Rs. {subtotal.toLocaleString()}
                  </span>
                  <span className="block text-[10px] text-[#25130A]/50 dark:text-[#D6C7B2]/50 font-medium">
                    Subject to confirmation
                  </span>
                </div>
              </div>

              {/* Pricing Notice */}
              <div className="flex items-start gap-2 text-xs text-[#25130A]/70 dark:text-[#D6C7B2]/80 bg-[#FAF5E8] dark:bg-[#160B06] p-3 rounded-xl border border-[#25130A]/8 dark:border-white/10">
                <Info className="w-4 h-4 text-[#E27D18] shrink-0 mt-0.5" />
                <p className="leading-snug">
                  {BRAND_CONFIG.pricingNotice}
                </p>
              </div>

              {/* WhatsApp Action Button */}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1ca54f] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                <span>Order {quantity}kg on WhatsApp</span>
              </a>

              <p className="text-center text-[11px] text-[#25130A]/60 dark:text-[#D6C7B2]/60">
                Fries Fusion supplies frozen fries pouches. We do not operate a ready-to-eat restaurant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
