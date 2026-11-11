import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { BRAND_CONFIG, getQuickChatWhatsAppUrl } from "../data/brand";

interface FloatingWhatsAppProps {
  hide?: boolean;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ hide = false }) => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  if (hide) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
      {/* Floating Prompt Bubble */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#25130A] px-3.5 py-2 rounded-xl shadow-lg border border-[#25130A]/10 text-xs font-semibold animate-in fade-in duration-300">
          <span>Need frozen fries? Chat on WhatsApp!</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="p-1 hover:bg-[#25130A]/10 rounded text-[#25130A]/60 hover:text-[#25130A] cursor-pointer"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href={getQuickChatWhatsAppUrl("Floating Button")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Fries Fusion on WhatsApp"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1ca54f] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 group"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366] transition-transform group-hover:scale-110" />
      </a>
    </div>
  );
};
