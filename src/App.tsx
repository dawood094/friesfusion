import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { ProductDetailModal } from "./components/ProductDetailModal";
import { LoadingScreen } from "./components/LoadingScreen";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { AboutPage } from "./pages/AboutPage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { WholesalePage } from "./pages/WholesalePage";
import { ContactPage } from "./pages/ContactPage";
import { LegalPage } from "./pages/LegalPage";
import { Product, PRODUCTS } from "./data/brand";

import { ThemeProvider, useTheme } from "./context/ThemeContext";

function MainApp() {
  const { isDarkMode } = useTheme();
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Sync hash routing on mount and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").trim().toLowerCase();
      const validPages = [
        "home",
        "products",
        "about",
        "how-it-works",
        "wholesale",
        "contact",
        "privacy",
        "terms",
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage("home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page === "home" ? "" : page;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenProductModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDarkMode
          ? "dark bg-[#120905] text-[#FDF9F0]"
          : "bg-[#FBF7EE] text-[#25130A]"
      } selection:bg-[#F4B316]/35 selection:text-[#25130A] overflow-x-hidden transition-colors duration-250`}
    >
      {/* Animated Fries Start Screen */}
      {showLoading && (
        <LoadingScreen onFinish={() => setShowLoading(false)} />
      )}

      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onMobileMenuChange={setIsMobileMenuOpen}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentPage === "home" && (
          <HomePage
            onNavigate={navigateTo}
            onOpenProductModal={handleOpenProductModal}
          />
        )}
        {currentPage === "products" && (
          <ProductsPage onOpenProductModal={handleOpenProductModal} />
        )}
        {currentPage === "about" && <AboutPage onNavigate={navigateTo} />}
        {currentPage === "how-it-works" && (
          <HowItWorksPage onNavigate={navigateTo} />
        )}
        {currentPage === "wholesale" && <WholesalePage />}
        {currentPage === "contact" && <ContactPage />}
        {currentPage === "privacy" && <LegalPage initialTab="privacy" />}
        {currentPage === "terms" && <LegalPage initialTab="terms" />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenProductModal={handleOpenProductModal}
      />

      {/* Product View Details Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={handleCloseProductModal}
      />

      {/* Scroll to Top Floating Button */}
      <ScrollToTop hide={isMobileMenuOpen || Boolean(selectedProduct)} />

      {/* Floating Quick WhatsApp Launcher */}
      <FloatingWhatsApp hide={isMobileMenuOpen || Boolean(selectedProduct)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
