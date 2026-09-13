import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catalogue IT | Technology & Marketing Agency",
  description: "Take Your Business From Offline to Online with Catalogue IT. Modern Web Development, Branding, Digital Marketing, and Business Automation.",
  icons: {
    icon: [
      { url: "/assets/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/assets/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#030712] text-slate-100 selection:bg-blue-500/30 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
