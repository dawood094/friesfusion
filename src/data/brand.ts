export interface Product {
  id: string;
  code: string;
  name: string;
  category: string;
  pricePerKg: number;
  cut: string;
  packaging: string;
  image: string;
  prepImage?: string;
  tagline: string;
  description: string;
  suitableFor: string[];
  cookingInstructions: string;
  storageNotice: string;
  features: string[];
}

export const BRAND_CONFIG = {
  name: "Fries Fusion",
  tagline: "Freshness Meets Crunch!",
  phoneDisplay: "0311 2080720",
  phoneNumber: "03112080720",
  internationalNumber: "923112080720",
  whatsAppBaseUrl: "https://wa.me/923112080720",
  instagramUrl: "https://www.instagram.com/fries_fusion",
  instagramHandle: "@fries_fusion",
  location: "DMCHS, Karachi",
  city: "Karachi",
  businessHours: "10:00 AM – 10:00 PM (Daily)",
  pricingNotice: "Prices are subject to confirmation. Contact us on WhatsApp before placing your order.",
  businessTypeNotice: "Fries Fusion provides quick-frozen fries supplies for homes, cafes, and commercial kitchens. Inquiries and orders are handled directly through WhatsApp.",
  logoUrl: "/assets/aistudio/removebg_a172558d.png",
};

export const PRODUCTS: Product[] = [
  {
    id: "regular-fries",
    code: "FF001",
    name: "Regular Fries",
    category: "Frozen Fries",
    pricePerKg: 420,
    cut: "Classic Regular Cut",
    packaging: "1kg Quick Frozen Pouch",
    image: "/assets/aistudio/regular_e9acc99d.jpg",
    prepImage: "/src/assets/images/fries_crispy_golden_hero_1794427598894.jpg",
    tagline: "The timeless golden crunch for every craving.",
    description:
      "Selected from high-starch potatoes and precision cut for that quintessential balance of a crisp, golden exterior and a fluffy potato interior. Quick-frozen to seal in fresh potato flavor and deliver uniform frying results batch after batch.",
    suitableFor: [
      "Home snacks",
      "Family gatherings",
      "Parties",
      "Cafes",
      "Food stalls",
      "Catering",
    ],
    cookingInstructions:
      "Deep fry directly from frozen in clean cooking oil at 175°C (350°F) for 3–4 minutes until golden yellow and crispy. Drain excess oil, sprinkle seasoning or salt immediately, and serve hot.",
    storageNotice:
      "Store frozen at -18°C or below. Do not refreeze once thawed.",
    features: [
      "Quick Frozen at peak freshness",
      "Consistent cut for even frying",
      "Standard 1kg food-service pouch",
      "Zero prep or peeling needed",
    ],
  },
  {
    id: "9mm-fries",
    code: "FF002",
    name: "9mm Fries",
    category: "Frozen Fries",
    pricePerKg: 580,
    cut: "Thick Cut (9x9 mm)",
    packaging: "1kg Quick Frozen Pouch",
    image: "/assets/aistudio/mmfries_214c8b9f.jpg",
    prepImage: "/src/assets/images/fries_loaded_gourmet_1794427600055.jpg",
    tagline: "Sturdy, thick cut built for loaded fries and gourmet burgers.",
    description:
      "Engineered for high heat retention and heavy toppings. The 9x9mm thick cut gives you maximum potato meatiness, an ultra-sturdy crunch that holds its bite under hot melted cheese, sauces, gravies, and loaded gourmet toppings.",
    suitableFor: [
      "Burger joints",
      "Loaded fries",
      "Home snacks",
      "Restaurants",
      "Gourmet food trucks",
    ],
    cookingInstructions:
      "Deep fry directly from frozen at 175°C (350°F) for 4–5 minutes until golden brown with a deep crunch. Can also be air fried at 200°C for 12–14 minutes, tossing every 4 minutes.",
    storageNotice:
      "Store frozen at -18°C or below. Do not refreeze once thawed.",
    features: [
      "Hearty 9x9 mm square thick cut",
      "Excellent heat & crunch retention",
      "Designed for loaded and sauced fries",
      "Commercial grade 1kg pouch",
    ],
  },
];

export const GALLERY_ITEMS = [
  {
    title: "Regular Fries 1kg Pack",
    category: "Official Packaging",
    image: "/assets/aistudio/regular_e9acc99d.jpg",
    description: "Thick Cut Quick Frozen 1kg food-service sealed packaging.",
  },
  {
    title: "9mm Fries 1kg Pack",
    category: "Official Packaging",
    image: "/assets/aistudio/mmfries_214c8b9f.jpg",
    description: "9x9 mm Thick Cut Quick Frozen 1kg food-service sealed packaging.",
  },
  {
    title: "Golden Crispy Serving",
    category: "Culinary Presentation",
    image: "/src/assets/images/fries_crispy_golden_hero_1794427598894.jpg",
    description: "Freshly prepared fries with sea salt and dipping sauce.",
  },
  {
    title: "Loaded Gourmet Fries",
    category: "Cafe & Restaurant Style",
    image: "/src/assets/images/fries_loaded_gourmet_1794427600055.jpg",
    description: "Hearty 9mm cut fries topped with melted cheddar and fresh garnish.",
  },
  {
    title: "Commercial Fryer Preparation",
    category: "Kitchen Service",
    image: "/src/assets/images/fries_commercial_fryer_1794427599946.jpg",
    description: "Lifting fresh, golden batch in high-volume food service kitchen.",
  },
  {
    title: "Cafe Dining Spread",
    category: "Hospitality & Dine-in",
    image: "/src/assets/images/fries_cafe_restaurant_spread_1794427600462.jpg",
    description: "The ideal burger and fries companion for cafes and casual eateries.",
  },
];

export const PRODUCT_BENEFITS = [
  {
    title: "Convenient Frozen Preparation",
    description: "Ready to fry straight from the freezer. No thawing, peeling, or slicing required.",
  },
  {
    title: "Easy Storage & High Yield",
    description: "Compact 1kg sealed pouches store easily in household or commercial deep freezers.",
  },
  {
    title: "Home & Commercial Versatility",
    description: "Engineered to satisfy quick family snack times as well as rush-hour restaurant fry stations.",
  },
  {
    title: "Convenient 1kg Food Service Pack",
    description: "Measured 1kg portions allow precise inventory control and minimal product wastage.",
  },
  {
    title: "Consistent Crunch & Texture",
    description: "Uniform potato cuts guarantee predictable fry times and reliable crunch on every plate.",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "Explore Products",
    description: "Browse our Regular Fries and 9mm Thick Cut varieties, specifications, and pack sizes.",
  },
  {
    number: "02",
    title: "Contact on WhatsApp",
    description: "Click any product or wholesale CTA to open a pre-filled WhatsApp message directly with our team.",
  },
  {
    number: "03",
    title: "Confirm Availability & Delivery",
    description: "We verify stock, share delivery schedules for your Karachi area, confirm total payment, and dispatch.",
  },
];

export function getProductOrderWhatsAppUrl(product: Product, quantityKg: number): string {
  const subtotal = product.pricePerKg * quantityKg;
  const message = [
    `*Hello Fries Fusion!* 👋`,
    ``,
    `I would like to enquire about ordering frozen fries:`,
    `• *Product:* ${product.name} (${product.code})`,
    `• *Cut:* ${product.cut}`,
    `• *Price:* Rs. ${product.pricePerKg} per kg`,
    `• *Quantity:* ${quantityKg} kg (${quantityKg} pack${quantityKg > 1 ? "s" : ""})`,
    `• *Estimated Subtotal:* Rs. ${subtotal.toLocaleString()}`,
    ``,
    `Please confirm product availability, current pricing, and delivery arrangements for my location.`,
    ``,
    `Thank you!`,
  ].join("\n");

  return `${BRAND_CONFIG.whatsAppBaseUrl}?text=${encodeURIComponent(message)}`;
}

export function getWholesaleWhatsAppUrl(data: {
  businessName: string;
  contactName: string;
  businessType: string;
  estimatedVolumeKg: string;
  message?: string;
}): string {
  const messageLines = [
    `*Hello Fries Fusion! Wholesale / Commercial Enquiry* 🍟`,
    ``,
    `I am interested in bulk frozen fries supply:`,
    `• *Business Name:* ${data.businessName || "Not specified"}`,
    `• *Contact Person:* ${data.contactName || "Not specified"}`,
    `• *Business Type:* ${data.businessType || "Cafe / Restaurant"}`,
    `• *Estimated Volume:* ${data.estimatedVolumeKg ? `${data.estimatedVolumeKg} kg` : "To be discussed"}`,
  ];

  if (data.message && data.message.trim().length > 0) {
    messageLines.push(`• *Additional Details:* ${data.message.trim()}`);
  }

  messageLines.push(
    ``,
    `Please share your bulk pricing tiers, delivery radius in Karachi, and payment terms.`,
    ``,
    `Thank you!`
  );

  return `${BRAND_CONFIG.whatsAppBaseUrl}?text=${encodeURIComponent(messageLines.join("\n"))}`;
}

export function getGeneralContactWhatsAppUrl(data: {
  name: string;
  topic: string;
  message: string;
}): string {
  const message = [
    `*Hello Fries Fusion!* 🍟`,
    ``,
    `• *Name:* ${data.name || "Customer"}`,
    `• *Topic:* ${data.topic || "General Enquiry"}`,
    `• *Message:* ${data.message || "Hello, I would like to enquire about Fries Fusion."}`,
    ``,
    `Please let me know how to proceed. Thank you!`,
  ].join("\n");

  return `${BRAND_CONFIG.whatsAppBaseUrl}?text=${encodeURIComponent(message)}`;
}

export function getQuickChatWhatsAppUrl(context: string = "General"): string {
  const message = `Hello Fries Fusion! I am visiting your website and would like to enquire about your frozen fries availability and delivery. (${context})`;
  return `${BRAND_CONFIG.whatsAppBaseUrl}?text=${encodeURIComponent(message)}`;
}
