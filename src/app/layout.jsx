import "./globals.css";
import { Urbanist, Coming_Soon } from "next/font/google";
import Script from "next/script";

// Load fonts the Next.js way (preload + swap, no render-blocking)
const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});
const comingSoon = Coming_Soon({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-coming-soon",
  display: "swap",
});

// --------- EDIT THESE ----------
const SITE_NAME = "Internal Haven";
const SITE_DOMAIN = "https://www.internalhaven.com" || 'https://internalhaven.com'; 
const SITE_DESC =
  "Feeling stuck or overwhelmed? Discover your purpose, break through barriers, and build the fulfilling life you deserve with Internal Haven’s professional life coaching.";
const OG_IMAGE = `${SITE_DOMAIN}/og-image.png`; // 1200x630 recommended
const BUSINESS_EMAIL = "alyssa@internalhaven.com";

// --------------------------------

export const metadata = {
  metadataBase: new URL(SITE_DOMAIN),
  title: {
    default: `${SITE_NAME} – Professional Life Coaching`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESC,
  applicationName: SITE_NAME,
  keywords: [
    "life coach",
    "professional coaching",
    "mindset coaching",
    "career coaching",
    "goal setting",
    "habit building",
    "emotional intelligence",
    "Goal setting",
    "mindset shifts",
    "Personal growth",
    "life transformation",
    "Building Confidence",
    "Stress Management",
    "Women's Empowerment",
    "Mindful Living",
    "Purpose Driven",
    "Confindence Coach",
    "Cultivating Self-Awareness",
    "Future Planning",
    "Self-Care Practices",
    "Time Management",
    "Career Advancement",
    "Navigating Change",
    "Mindfulness Practices",
    "Self-Discovery Journeys",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_DOMAIN,
    siteName: SITE_NAME,
    title: `${SITE_NAME} – Professional Life Coaching`,
    description: SITE_DESC,
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} cover` },
    ],
    locale: "en_US",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: `${SITE_NAME} – Professional Life Coaching`,
  //   description: SITE_DESC,
  //   site: TWITTER_HANDLE,
  //   creator: TWITTER_HANDLE,
  //   images: [OG_IMAGE],
  // },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  category: "Professional Services",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    // Fill these only if you use them
    google: "", // "google-site-verification=..."
    other: { me: ["mailto:" + BUSINESS_EMAIL] },
  },
  // Optional viewport (Next sets a good default, keep if you want to be explicit)
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: "#0b0b0b",
  },
};

export default function RootLayout({ children }) {
  // JSON-LD: Organization + WebSite (basic + helpful for Sitelinks Search Box)
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_DOMAIN,
    logo: `${SITE_DOMAIN}/logo.png`,
    sameAs: [
      "https://instagram.com/internalhaven", // replace/remove
      "https://www.facebook.com/internalhaven", // replace/remove
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: BUSINESS_EMAIL,
      contactType: "customer support",
      areaServed: "US",
      availableLanguage: ["en"],
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_DOMAIN,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_DOMAIN}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className={`${urbanist.variable} ${comingSoon.variable}`}>
      <body className="font-coming-soon antialiased">
        {children}

        {/* JSON-LD */}
        <Script
          id="org-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
