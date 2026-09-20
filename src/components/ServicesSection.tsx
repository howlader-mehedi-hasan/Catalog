"use client";

import Image from "next/image";
import { Code2, Palette, Megaphone, Search } from "lucide-react";

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const services = [
    {
      id: "01",
      title: "WEBSITE DEVELOPMENT",
      desc: "PROFESSIONAL WEBSITES DESIGNED TO ESTABLISH CREDIBILITY, SHOWCASE YOUR BUSINESS, AND TURN VISITORS INTO CUSTOMERS.",
      icon: Code2,
      cardClass: "border-blue-500/40 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,102,255,0.3)]",
      iconColor: "text-blue-400",
    },
    {
      id: "02",
      title: "BRANDING & DESIGN",
      desc: "BUILD A BRAND THAT PEOPLE RECOGNIZE, REMEMBER, AND TRUST.",
      icon: Palette,
      // Distinctive magenta/purple neon edge glow matching the original mockup
      cardClass: "border-fuchsia-500/80 shadow-[0_0_35px_rgba(217,70,239,0.25)] hover:shadow-[0_0_45px_rgba(217,70,239,0.4)]",
      iconColor: "text-fuchsia-400",
    },
    {
      id: "03",
      title: "DIGITAL MARKETING",
      desc: "PUT YOUR BUSINESS IN FRONT OF THE PEOPLE WHO ARE LOOKING FOR WHAT YOU OFFER.",
      icon: Megaphone,
      cardClass: "border-blue-500/40 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,102,255,0.3)]",
      iconColor: "text-cyan-400",
    },
    {
      id: "04",
      title: "SEO & SOCIAL MEDIA",
      desc: "DOMINATE SEARCH ENGINES AND SOCIAL PLATFORMS SO READY BUYERS CHOOSE YOU FIRST.",
      icon: Search,
      cardClass: "border-blue-500/40 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,102,255,0.3)]",
      iconColor: "text-emerald-400",
    },
  ];

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#030712] overflow-hidden scroll-mt-24">
      
      {/* Top Banner Quote: "Nothing will work unless you do." (Asset 6.png / banner-quote.png) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24">
        <div className="relative rounded-[32px] overflow-hidden drop-shadow-[0_20px_50px_rgba(0,102,255,0.3)] group">
          <Image
            src="/assets/banner-quote.png"
            alt="Nothing will work unless you do"
            width={1200}
            height={360}
            className="w-full h-auto object-cover rounded-[32px] border border-blue-400/30"
            priority
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Services 4-Card Grid matching mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;

            return (
              <div
                key={svc.id}
                onClick={() => onSelectService && onSelectService(svc.title)}
                className={`group relative rounded-[28px] p-7 sm:p-8 bg-gradient-to-b from-[#08132e] to-[#040817] border ${svc.cardClass} transition-all duration-300 flex flex-col justify-between min-h-[340px] cursor-pointer hover:-translate-y-1.5`}
              >
                {/* Number Badge at Top */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-mono">
                    {svc.id}
                  </span>
                </div>

                {/* Card Title & Uppercase Description */}
                <div className="space-y-4 my-auto pt-4">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium tracking-wide text-slate-300 uppercase leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                {/* Bottom Icon Capsule Button */}
                <div className="pt-4 flex justify-end">
                  <div className="w-12 h-12 rounded-2xl bg-[#030919] border border-white/10 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Icon className={`w-5 h-5 ${svc.iconColor}`} />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
