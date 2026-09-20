"use client";

import Image from "next/image";
import { Globe, Radio, Megaphone } from "lucide-react";

export default function Transformation() {
  const cards = [
    {
      title: "WITH WEBSITE",
      desc: "CUSTOMERS CAN EASILY LEARN ABOUT YOUR BUSINESS.",
      icon: Globe,
    },
    {
      title: "ONLINE VISIBILITY",
      desc: "POTENTIAL CUSTOMERS CAN EASILY FIND YOU.",
      icon: Radio,
    },
    {
      title: "DIGITAL MARKETING",
      desc: "YOU WILL NOT MISS OPPORTUNITIES TO REACH NEW CUSTOMERS.",
      icon: Megaphone,
    },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24 bg-[#030712] overflow-hidden scroll-mt-24">
      
      {/* Decorative 3D loop accent in background */}
      <div className="absolute top-1/3 -left-16 sm:-left-20 w-44 sm:w-60 pointer-events-none opacity-40 -z-0">
        <Image
          src="/assets/sculpture-loop.png"
          alt="Loop accent"
          width={240}
          height={240}
          className="w-full h-auto object-contain -rotate-12"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading matching mockup */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Traditional Business <span className="text-blue-500 inline-block px-1">→</span> Digital Business
          </h2>
        </div>

        {/* 3 Transformation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative rounded-[32px] p-8 sm:p-9 bg-[#071330]/90 border border-blue-500/30 overflow-hidden flex flex-col justify-between min-h-[260px] sm:min-h-[280px] shadow-xl hover:border-cyan-400/50 hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Subtle bottom gradient glow */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blue-600/25 via-cyan-500/10 to-transparent pointer-events-none" />

                {/* Card Title & Uppercase Description */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom Icon Capsule Button matching mockup */}
                <div className="relative z-10 pt-6 flex justify-end">
                  <div className="w-14 h-14 rounded-2xl bg-[#030919] border border-blue-400/40 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-300 transition-all duration-300">
                    <Icon className="w-6 h-6 text-cyan-300 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dashed line matching mockup with 3D Cyber Sculpture overlapping */}
        <div className="relative mt-20 sm:mt-24">
          <div className="mockup-dashed-divider opacity-30" />
          
          <div className="absolute -top-14 right-12 sm:right-24 w-28 sm:w-36 pointer-events-none z-10 drop-shadow-[0_15px_30px_rgba(0,102,255,0.4)]">
            <Image
              src="/assets/sculpture-loop.png"
              alt="3D Sculpture Accent"
              width={160}
              height={160}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
