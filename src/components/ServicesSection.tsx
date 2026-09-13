"use client";

import { useState } from "react";
import Image from "next/image";
import { Code2, Palette, Megaphone, Cpu, Search, ArrowUpRight, Sparkles } from "lucide-react";

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const services = [
    {
      id: "00",
      tag: "CORE SYSTEM",
      title: "BUSINESS SOLUTIONS",
      desc: "MODERNIZE THE WAY YOUR BUSINESS OPERATES.",
      icon: Cpu,
      details: [
        "Automated CRM & Lead Management",
        "Custom Business Dashboards",
        "E-Commerce & Payment Gateways",
        "Workflow Automation & APIs",
      ],
      gradient: "from-blue-600/20 to-purple-600/10",
      accent: "border-blue-500/40",
    },
    {
      id: "01",
      tag: "FLAGSHIP",
      title: "WEB DEVELOPMENT",
      desc: "PROFESSIONAL WEBSITES DESIGNED TO ESTABLISH CREDIBILITY, SHOWCASE YOUR BUSINESS, AND TURN VISITORS INTO CUSTOMERS.",
      icon: Code2,
      details: [
        "Next.js & React High-Speed Web Apps",
        "Ultra-Fast Vercel Edge Hosting",
        "Mobile-First Responsive UI/UX",
        "Interactive Animations & Micro-Interactions",
      ],
      gradient: "from-blue-600/30 to-cyan-500/20",
      accent: "border-cyan-400/50",
    },
    {
      id: "02",
      tag: "IDENTITY",
      title: "BRANDING & DESIGN",
      desc: "BUILD A BRAND THAT PEOPLE RECOGNIZE, REMEMBER, AND TRUST.",
      icon: Palette,
      details: [
        "Logo & Visual Brand Guidelines",
        "Design Systems & Component Libraries",
        "3D Assets & Marketing Creatives",
        "Social Media & Ad Kit Templates",
      ],
      gradient: "from-purple-600/20 to-pink-600/10",
      accent: "border-purple-400/40",
    },
    {
      id: "03",
      tag: "ACQUISITION",
      title: "DIGITAL MARKETING",
      desc: "PUT YOUR BUSINESS IN FRONT OF THE PEOPLE WHO ARE LOOKING FOR WHAT YOU OFFER.",
      icon: Megaphone,
      details: [
        "High-ROI Meta & Google Ads",
        "Targeted Audience Funnels",
        "Retargeting & Abandoned Cart Recovery",
        "Conversion Rate Optimization (CRO)",
      ],
      gradient: "from-blue-600/20 to-cyan-600/20",
      accent: "border-blue-400/40",
    },
    {
      id: "04",
      tag: "ORGANIC GROWTH",
      title: "SEO & LOCAL DOMINANCE",
      desc: "DOMINATE SEARCH ENGINES AND LOCAL MAP PACKS SO READY BUYERS CHOOSE YOU FIRST.",
      icon: Search,
      details: [
        "Local Google Business Profile Ranking",
        "Technical SEO & Core Web Vitals",
        "High-Intent Keyword Targeting",
        "Monthly Traffic & Revenue Reporting",
      ],
      gradient: "from-cyan-600/20 to-emerald-600/10",
      accent: "border-emerald-400/40",
    },
  ];

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#030712] overflow-hidden">
      
      {/* Top Banner Quote matching the design mockup */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24">
        <div className="relative rounded-[32px] overflow-hidden p-8 sm:p-14 text-center bg-gradient-to-r from-blue-900/40 via-blue-600/30 to-cyan-600/20 border border-blue-400/30 shadow-2xl shadow-blue-950/60 backdrop-blur-2xl">
          
          <div className="relative z-10 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-300">
              CATALOGUE IT MANIFESTO
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Nothing will work
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-cyan-300">
                unless you do.
              </span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm font-medium tracking-wide max-w-lg mx-auto pt-2">
              Transforming your business starts with a single decision. We provide the technology, 
              strategy, and execution to turn vision into measurable profit.
            </p>
          </div>

          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-radial from-blue-500/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full-Stack Agency Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              End-To-End Digital Services
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md">
            Click any service to view specialized deliverables, or select a service to discuss custom enterprise implementation.
          </p>
        </div>

        {/* Services Grid matching mockup's rounded dark cards with colored glow borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            const isHovered = activeTab === idx;

            return (
              <div
                key={svc.title}
                onMouseEnter={() => setActiveTab(idx)}
                onMouseLeave={() => setActiveTab(null)}
                className={`group relative rounded-[28px] p-7 sm:p-8 bg-gradient-to-b from-[#08132e] to-[#040817] border ${
                  svc.accent
                } shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isHovered ? "scale-[1.02] border-opacity-100" : "border-opacity-40"
                }`}
                onClick={() => onSelectService && onSelectService(svc.title)}
              >
                {/* Subtle top accent */}
                <div className="flex items-center justify-between pb-6">
                  <span className="text-xs font-mono font-bold text-blue-400 tracking-wider">
                    {svc.id}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold tracking-wider text-slate-300 uppercase">
                    {svc.tag}
                  </span>
                </div>

                {/* Main Content */}
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-cyan-300 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium tracking-wide text-slate-300 uppercase leading-relaxed">
                    {svc.desc}
                  </p>

                  {/* Bullet Deliverables */}
                  <ul className="pt-2 space-y-2 border-t border-white/10">
                    {svc.details.map((item) => (
                      <li key={item} className="text-xs text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-4 flex items-center justify-between text-xs font-bold text-blue-400 group-hover:text-cyan-300 transition-colors">
                  <span>Consult on this service</span>
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 group-hover:bg-blue-600 flex items-center justify-center text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
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
