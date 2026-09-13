"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Check, Copy, Sparkles, MessageCircle, ShieldCheck, Zap, Layers } from "lucide-react";

interface DifferenceSectionProps {
  onOpenContact?: () => void;
}

export default function DifferenceSection({ onOpenContact }: DifferenceSectionProps) {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string, type: "phone" | "email") => {
    navigator.clipboard.writeText(text);
    if (type === "phone") {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const differentiators = [
    {
      icon: Zap,
      title: "Engineered For Speed",
      desc: "Zero bloated templates. We build modern Next.js systems with sub-second page loads that maximize Google quality scores.",
    },
    {
      icon: ShieldCheck,
      title: "Commercial Accountability",
      desc: "We don't sell vanity metrics. Every campaign and system is directly measured against conversions, qualified leads, and ROI.",
    },
    {
      icon: Layers,
      title: "Full-Stack Single Partner",
      desc: "From branding & UI/UX to code development, cloud hosting, and paid ad acquisition — one unified agency executing your vision.",
    },
  ];

  return (
    <section id="difference" className="relative py-20 sm:py-32 bg-[#02050f] overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: 3D Mint/Cyan Grid Sculpture Container matching mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-square rounded-[40px] p-6 sm:p-10 bg-gradient-to-br from-[#0c2b48]/60 via-[#06162d]/80 to-[#020917] border border-cyan-400/30 shadow-2xl shadow-cyan-950/40 backdrop-blur-2xl flex items-center justify-center group">
              
              {/* Cyan ambient aura behind sculpture */}
              <div className="absolute inset-16 bg-cyan-400/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />

              {/* 3D Grid Sculpture from Assets */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/assets/sculpture-grid.png"
                  alt="3D Mint Grid Sculpture"
                  width={460}
                  height={460}
                  className="w-full h-full object-contain filter drop-shadow-[0_25px_50px_rgba(0,240,255,0.35)] group-hover:rotate-2 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 px-4 py-2.5 rounded-2xl bg-[#040e24]/90 border border-cyan-400/30 backdrop-blur-md flex items-center justify-between">
                <span className="text-xs font-bold text-slate-200">System Architecture</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-400/20 text-cyan-300 font-bold">
                  PRECISION 2026
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Direct Contact Card matching mockup */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Unfair Advantage</span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                What Makes Us
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-400">
                  Different?
                </span>
              </h2>

              <p className="text-xs sm:text-sm font-semibold tracking-wide text-cyan-400 uppercase">
                ONE INTEGRATED TEAM. ZERO JARGON. MEASURABLE REVENUE IMPACT.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Most agencies build pretty websites that don&apos;t convert, or run expensive ads to broken landing pages. 
                Catalogue IT bridges the complete gap — engineering your digital foundation, crafting unforgettable branding, 
                and running precision acquisition campaigns under one roof.
              </p>
            </div>

            {/* Feature Mini Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {differentiators.map((d) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.title}
                    className="p-4 rounded-2xl bg-[#071330]/60 border border-white/10 hover:border-blue-400/40 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-cyan-400 mb-2" />
                    <h4 className="text-xs font-bold text-white mb-1">{d.title}</h4>
                    <p className="text-[11px] text-slate-400 leading-normal">{d.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Contact Card strictly matching the mockup */}
            <div className="rounded-[28px] p-6 sm:p-8 bg-[#060e20] border border-blue-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <h3 className="text-sm sm:text-base font-extrabold tracking-wider text-blue-400 uppercase">
                  ONE BUSINESS. ONE DIGITAL PARTNER.
                </h3>

                <ul className="space-y-3 pt-1">
                  
                  {/* Phone */}
                  <li className="flex items-center justify-between text-xs sm:text-sm text-slate-200 font-mono">
                    <a
                      href="tel:+8801710663301"
                      className="flex items-center gap-2.5 hover:text-cyan-300 transition-colors group"
                    >
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="font-bold">+8801710663301</span>
                    </a>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://wa.me/8801710663301"
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 text-[11px] font-bold hover:bg-emerald-500/30 transition-colors flex items-center gap-1"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>WhatsApp</span>
                      </a>
                      <button
                        onClick={() => copyToClipboard("+8801710663301", "phone")}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                        title="Copy phone"
                      >
                        {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </li>

                  {/* Email */}
                  <li className="flex items-center justify-between text-xs sm:text-sm text-slate-200 font-mono">
                    <a
                      href="mailto:NWU@GMAIL.COM"
                      className="flex items-center gap-2.5 hover:text-cyan-300 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="font-bold">NWU@GMAIL.COM</span>
                    </a>
                    <button
                      onClick={() => copyToClipboard("NWU@GMAIL.COM", "email")}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                      title="Copy email"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </li>

                  {/* Address */}
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-sans pt-1">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-200">ADDRESS: </span>
                      <span className="text-slate-400">Khulna / Dhaka, Bangladesh (Global Remote & On-Site Strategy)</span>
                    </div>
                  </li>

                </ul>

                <div className="pt-3">
                  <button
                    onClick={onOpenContact}
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                  >
                    Start Project With Us
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
