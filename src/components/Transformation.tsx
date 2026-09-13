"use client";

import Image from "next/image";
import { Globe, Radio, Megaphone, CheckCircle } from "lucide-react";

export default function Transformation() {
  const cards = [
    {
      title: "WITH WEBSITE",
      desc: "CUSTOMERS CAN EASILY LEARN ABOUT YOUR BUSINESS.",
      icon: Globe,
      features: ["24/7 Digital Storefront", "Product & Service Showcase", "Instant Credibility"],
      gradient: "from-blue-900/40 via-[#071330] to-blue-600/30",
    },
    {
      title: "ONLINE VISIBILITY",
      desc: "POTENTIAL CUSTOMERS CAN EASILY FIND YOU.",
      icon: Radio,
      features: ["Google Maps & Local Search", "SEO Keyword Dominance", "Active Social Presence"],
      gradient: "from-blue-900/40 via-[#071330] to-cyan-600/30",
    },
    {
      title: "DIGITAL MARKETING",
      desc: "YOU WILL NOT MISS OPPORTUNITIES TO REACH NEW CUSTOMERS.",
      icon: Megaphone,
      features: ["Targeted Ads on Meta & Google", "High-Converting Retargeting", "Automated Lead Funnels"],
      gradient: "from-blue-900/40 via-[#071330] to-blue-500/30",
    },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24 bg-[#030712] overflow-hidden">
      
      {/* Decorative 3D loop accent poking on the left */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-48 sm:w-64 pointer-events-none opacity-60 z-0">
        <Image
          src="/assets/sculpture-loop.png"
          alt="Loop accent"
          width={260}
          height={260}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading matching mockup */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Traditional Business <span className="text-blue-500 inline-block px-1">→</span> Digital Business
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            The fundamental shift modern businesses must make to thrive in today&apos;s digital-first economy.
          </p>
        </div>

        {/* 3 Transformation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative rounded-[28px] p-7 sm:p-8 bg-[#071330]/80 border border-blue-500/30 overflow-hidden flex flex-col justify-between min-h-[300px] shadow-xl hover:border-cyan-400/50 hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Background glow radiating from bottom like mockup */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-600/35 via-cyan-500/15 to-transparent pointer-events-none" />
                <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-blue-500/30 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

                {/* Card Header & Description */}
                <div className="relative z-10 space-y-4">
                  <span className="text-[11px] font-bold text-blue-400 tracking-widest uppercase">
                    STEP 0{idx + 1}
                  </span>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold tracking-wide text-slate-300 uppercase leading-relaxed">
                    {card.desc}
                  </p>

                  <ul className="pt-2 space-y-1.5">
                    {card.features.map((feat) => (
                      <li key={feat} className="text-xs text-slate-400 flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Icon Capsule Button matching mockup */}
                <div className="relative z-10 pt-6 flex justify-end">
                  <div className="w-14 h-14 rounded-2xl bg-[#030a1c] border border-blue-400/40 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-300 transition-all duration-300">
                    <Icon className="w-6 h-6 text-cyan-300 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dashed line matching mockup */}
        <div className="mt-16 sm:mt-20 mockup-dashed-divider opacity-40" />

      </div>
    </section>
  );
}
