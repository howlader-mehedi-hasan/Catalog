"use client";

import Image from "next/image";
import { ArrowRight, BarChart3, Users, Zap } from "lucide-react";

interface GrowthProofProps {
  onOpenContact?: () => void;
}

export default function GrowthProof({ onOpenContact }: GrowthProofProps) {
  return (
    <section id="growth" className="relative py-20 sm:py-32 bg-[#02050e] overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Floating Widget: 400% Conversion Card from Assets */}
          <div className="lg:col-span-3 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] group">
              
              {/* Glowing back aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-[32px] blur-xl opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              
              {/* Glass Card Container */}
              <div className="relative rounded-[28px] overflow-hidden bg-[#061026]/90 border border-blue-400/30 p-2 shadow-2xl backdrop-blur-xl">
                <Image
                  src="/assets/widget-conversion.png"
                  alt="400% Conversion Rate Widget"
                  width={400}
                  height={500}
                  className="w-full h-auto object-contain rounded-[20px]"
                />
              </div>

              {/* Floating micro pill */}
              <div className="absolute -bottom-4 -left-4 px-3.5 py-1.5 rounded-full bg-[#0a1738] border border-blue-400/40 shadow-lg text-[11px] font-bold text-cyan-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                <span>Instant Visibility Spike</span>
              </div>
            </div>
          </div>

          {/* Center Column: Core Question Headline from Mockup */}
          <div className="lg:col-span-6 text-center space-y-6 order-1 lg:order-2 px-2">
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.15] tracking-tight">
              Your Business Is Good.
              <br />
              But Can People Find You{" "}
              <span className="relative inline-block text-[#00E5FF] tracking-normal">
                Online?
                {/* Hand-drawn neon squiggle underline */}
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-cyan-400"
                  viewBox="0 0 160 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8.5C35 2 75 11 115 5.5C135 3 150 9 157 7"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base font-semibold text-slate-300 uppercase tracking-widest leading-relaxed max-w-xl mx-auto pt-2">
              MANY LOCAL BUSINESSES HAVE GREAT PRODUCTS AND SERVICES BUT STILL DEPEND HEAVILY ON WALK-IN CUSTOMERS, WORD OF MOUTH, AND TRADITIONAL MARKETING.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/40 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer border border-blue-300/30"
              >
                <span>Fix Your Online Presence</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-blue-900/40 max-w-md mx-auto">
              <div className="text-center">
                <span className="block text-2xl font-black text-white">87%</span>
                <span className="text-[11px] text-slate-400">Buyers Research Online First</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-black text-cyan-400">3.8x</span>
                <span className="text-[11px] text-slate-400">Higher Close Rate</span>
              </div>
              <div className="col-span-2 sm:col-span-1 text-center">
                <span className="block text-2xl font-black text-blue-400">24/7</span>
                <span className="text-[11px] text-slate-400">Automated Pipeline</span>
              </div>
            </div>

          </div>

          {/* Right Floating Widget: $63,921 Revenue Widget from Assets */}
          <div className="lg:col-span-3 flex justify-center order-3">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] group">
              
              {/* Glowing back aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[32px] blur-xl opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              
              {/* Glass Card Container */}
              <div className="relative rounded-[28px] overflow-hidden bg-[#061026]/90 border border-blue-400/30 p-2 shadow-2xl backdrop-blur-xl">
                <Image
                  src="/assets/widget-revenue.png"
                  alt="$63,921 Revenue Growth Widget"
                  width={400}
                  height={500}
                  className="w-full h-auto object-contain rounded-[20px]"
                />
              </div>

              {/* Floating micro pill */}
              <div className="absolute -bottom-4 -right-4 px-3.5 py-1.5 rounded-full bg-[#0a1738] border border-blue-400/40 shadow-lg text-[11px] font-bold text-emerald-400 flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
                <span>+32.8% Verified Revenue</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Massive Glowing Curved Planet Horizon Arc at the Bottom from Assets */}
      <div className="relative w-full mt-12 sm:mt-16 pointer-events-none flex justify-center">
        <div className="w-full max-w-6xl px-4">
          <Image
            src="/assets/glow-horizon.png"
            alt="Glowing Blue Horizon Arc"
            width={1600}
            height={400}
            className="w-full h-auto object-contain -mb-10 sm:-mb-16 filter brightness-110 drop-shadow-[0_0_80px_rgba(0,102,255,0.7)]"
          />
        </div>
      </div>

    </section>
  );
}
