"use client";

import { Check, Sparkles, ArrowRight, Shield } from "lucide-react";

interface PackagesSectionProps {
  onSelectPackage?: (pkgName: string) => void;
}

export default function PackagesSection({ onSelectPackage }: PackagesSectionProps) {
  const packages = [
    {
      name: "STARTER PRESENCE",
      tagline: "Ideal for offline businesses building their first digital footprint.",
      price: "$499",
      period: "one-time setup",
      highlight: false,
      features: [
        "Modern 5-Page Responsive Next.js Website",
        "Google Business Profile & Map Optimization",
        "Mobile-First Responsive Layout",
        "SSL Security & Domain Setup Assistance",
        "WhatsApp & Contact Form Lead Routing",
        "1 Month Maintenance & Technical Support",
      ],
      badge: "Standard",
      buttonText: "Choose Starter",
      accent: "border-blue-500/30",
    },
    {
      name: "DIGITAL ACCELERATOR",
      tagline: "Our most requested package for companies ready to capture active market share.",
      price: "$1,299",
      period: "setup + monthly growth",
      highlight: true,
      features: [
        "Everything in Starter Presence",
        "Custom High-Speed Web App with CMS",
        "Full Visual Brand Identity & Social Kit",
        "Targeted Meta & Google Ad Campaign Setup",
        "Conversion Funnel Optimization",
        "Google Analytics 4 & Real-Time Dashboard",
        "Bi-Weekly Strategy & Reporting Calls",
      ],
      badge: "Most Popular",
      buttonText: "Get Growth Package",
      accent: "border-cyan-400 shadow-cyan-500/20",
    },
    {
      name: "SCALE & DOMINATE",
      tagline: "Full-service digital ecosystem for ambitious enterprises scaling aggressively.",
      price: "$2,899",
      period: "custom enterprise tier",
      highlight: false,
      features: [
        "Everything in Digital Accelerator",
        "Enterprise Custom Portal / E-Commerce System",
        "CRM & Automated Email/SMS Pipeline Integration",
        "Omni-Channel Paid Acquisition Management",
        "Dedicated Account Director & Engineering Lead",
        "Weekly Sprint Reviews & SLA Guarantee",
        "24/7 Priority Emergency Support",
      ],
      badge: "Enterprise",
      buttonText: "Dominate Your Market",
      accent: "border-blue-500/40",
    },
  ];

  return (
    <section id="packages" className="relative py-20 sm:py-32 bg-[#030712] overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Clear & Transparent Investment</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Tailored Growth Packages
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Choose the tier that matches your current stage. All packages are deployed on 
            world-class infrastructure with zero hidden maintenance fees.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-[32px] p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.highlight
                  ? "bg-gradient-to-b from-[#0c2356] via-[#061430] to-[#020718] border-2 border-cyan-400/80 shadow-2xl shadow-cyan-500/20 scale-105 z-10"
                  : "bg-[#060e22]/90 border border-white/10 hover:border-blue-400/40 shadow-xl"
              }`}
            >
              {/* Badge for popular */}
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-xs font-extrabold tracking-wider uppercase shadow-lg">
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between pb-4">
                  <h3 className="text-lg font-black tracking-wider text-white uppercase">
                    {pkg.name}
                  </h3>
                  {!pkg.highlight && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed min-h-[36px] mb-6">
                  {pkg.tagline}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 pb-6 border-b border-white/10">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    /{pkg.period}
                  </span>
                </div>

                {/* Features List */}
                <div className="py-6 space-y-3">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    What&apos;s Included:
                  </span>
                  <ul className="space-y-3">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.highlight ? "text-cyan-400" : "text-blue-400"}`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-white/10">
                <button
                  onClick={() => onSelectPackage && onSelectPackage(pkg.name)}
                  className={`w-full py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.highlight
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-xl shadow-cyan-500/30 hover:scale-[1.02]"
                      : "bg-white/10 hover:bg-white/15 text-white hover:border-blue-400/30 border border-white/10"
                  }`}
                >
                  <span>{pkg.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Satisfaction Guarantee Notice */}
        <div className="mt-16 text-center max-w-xl mx-auto p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-3">
          <Shield className="w-5 h-5 text-cyan-400 shrink-0" />
          <span className="text-xs text-slate-300">
            Need a custom scope or ongoing retainer? We tailor packages to your exact roadmap.
          </span>
        </div>

      </div>
    </section>
  );
}
