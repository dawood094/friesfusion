import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

interface ScrollToTopProps {
  hide?: boolean;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ hide = false }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down more than 350px
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (hide || !visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      title="Back to top"
      className="fixed bottom-[84px] right-5 sm:right-5.5 z-40 w-11 h-11 rounded-full bg-[#25130A] dark:bg-[#2A150C] text-[#F4B316] border border-[#F4B316]/30 dark:border-[#F4B316]/50 shadow-lg hover:shadow-xl hover:bg-[#321B12] dark:hover:bg-[#381C0F] active:scale-90 transition-all duration-200 flex items-center justify-center cursor-pointer group animate-in fade-in slide-in-from-bottom-2 duration-200"
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
      <span className="sr-only">Scroll to top</span>
    </button>
  );
};
