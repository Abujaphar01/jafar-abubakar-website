import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteContent } from "@/data/siteContent";

export const viewport: Viewport = {
  themeColor: "#FAF9F5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.meta.siteUrl),
  title: {
    default: `${siteContent.meta.name} — ${siteContent.meta.role}`,
    template: `%s | ${siteContent.meta.name}`,
  },
  description: siteContent.meta.description,
  keywords: [
    "Jafar Abubakar",
    "AI Engineer",
    "AI Entrepreneur",
    "Scholarship Gate SG",
    "CTO Scholarship Gate SG",
    "Business Automation",
    "Machine Learning",
    "Python Developer",
    "Agricultural Technology",
    "AgriTech",
    "Artificial Intelligence",
  ],
  authors: [{ name: siteContent.meta.name, url: siteContent.meta.siteUrl }],
  creator: siteContent.meta.name,
  openGraph: {
    type: "website",
    locale: siteContent.meta.locale,
    url: siteContent.meta.siteUrl,
    title: `${siteContent.meta.name} — ${siteContent.meta.role}`,
    description: siteContent.meta.tagline + " " + siteContent.meta.description,
    siteName: siteContent.meta.name,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteContent.meta.name} — ${siteContent.meta.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.meta.name} — ${siteContent.meta.role}`,
    description: siteContent.meta.tagline,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteContent.meta.name,
    jobTitle: ["AI Engineer", "Entrepreneur", "Chief Technology Officer"],
    worksFor: {
      "@type": "Organization",
      name: "Scholarship Gate SG",
      url: "https://scholarshipgatesg.com",
    },
    description: siteContent.meta.description,
    email: `mailto:${siteContent.contact.email}`,
    telephone: siteContent.contact.whatsapp.display,
    url: siteContent.meta.siteUrl,
    image: `${siteContent.meta.siteUrl}/images/jafar-abubakar.jpg`,
    sameAs: [
      "https://www.linkedin.com/in/jafar-abubakar-51b42927a/",
      "https://github.com/Abujaphar01",
      "https://scholarshipgatesg.com",
    ],
    knowsLanguage: ["Hausa", "English", "Chinese", "Arabic"],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Python",
      "APIs",
      "AI Automation",
      "Business Automation",
      "Agricultural Technology",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=jetbrains-mono:400,500|newsreader:400,400i,500,500i,600|plus-jakarta-sans:400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-canvas text-ink antialiased selection:bg-navy selection:text-canvas">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
