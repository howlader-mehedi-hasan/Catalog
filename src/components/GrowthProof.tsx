"use client";

import Image from "next/image";

interface GrowthProofProps {
  onOpenContact?: () => void;
}

export default function GrowthProof({ onOpenContact }: GrowthProofProps = {}) {
  return (
    <section id="growth" className="relative pt-24 pb-36 sm:pt-32 sm:pb-48 bg-[#02050e] overflow-hidden scroll-mt-24">
      
      {/* Ambient background glow behind the text */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Planetary Horizon Glow Arc (Asset 2.png / glow-horizon.png) strictly matching the mockup at the bottom */}
      <div className="absolute -bottom-20 sm:-bottom-28 md:-bottom-36 lg:-bottom-48 left-1/2 -translate-x-1/2 w-full max-w-[1500px] pointer-events-none z-0 flex justify-center opacity-90">
        <Image
          src="/assets/glow-horizon.png"
          alt="Atmospheric Blue Horizon Glow Arc"
          width={2000}
          height={1075}
          className="w-full h-auto object-contain filter brightness-110 drop-shadow-[0_0_80px_rgba(0,102,255,0.7)]"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Composition Grid matching mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Floating Widget: 400% Conversion Card with Geometric Glass Backdrop (Flipped) */}
          <div className="lg:col-span-3 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[280px] sm:max-w-[310px] flex items-center justify-center">
              
              {/* Geometric Beveled Glass Shape Background (Asset 10.png - Flipped for left side symmetry) */}
              <div className="absolute -inset-4 pointer-events-none opacity-35 z-0 scale-x-[-1]">
                <Image
                  src="/assets/card-glass-shape.png"
                  alt="Glass Card Backdrop"
                  width={340}
                  height={420}
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,102,255,0.35)]"
                />
              </div>

              {/* Conversion Rate Widget from Assets */}
              <div className="relative z-10 w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-500">
                <Image
                  src="/assets/widget-conversion.png"
                  alt="400% Conversion Rate Metric"
                  width={320}
                  height={380}
                  className="w-full h-auto object-contain rounded-[24px]"
                />
              </div>

            </div>
          </div>

          {/* Center Column: Core Question Headline strictly matching Mockup */}
          <div className="lg:col-span-6 text-center space-y-5 order-1 lg:order-2 px-2">
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.12] tracking-tight">
              <span>Your Business Is</span>
              <br />
              <span>Good. But Can</span>
              <br />
              <span>People</span>
              <br />
              <span>Find You </span>
              <span className="relative inline-block text-[#00E5FF] tracking-normal">
                Online?
                {/* Hand-drawn neon squiggle underline matching mockup */}
                <svg
                  className="absolute left-0 -bottom-2 sm:-bottom-3 w-full h-3 sm:h-4 text-cyan-400"
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

            <p className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-400 uppercase tracking-widest leading-relaxed max-w-lg mx-auto pt-2">
              MANY LOCAL BUSINESSES HAVE GREAT PRODUCTS AND SERVICES BUT STILL DEPEND HEAVILY ON WALK-IN CUSTOMERS, WORD OF MOUTH, AND TRADITIONAL MARKETING.
            </p>

          </div>

          {/* Right Floating Widget: $63,921 Revenue Widget with Geometric Glass Backdrop */}
          <div className="lg:col-span-3 flex justify-center order-3">
            <div className="relative w-full max-w-[280px] sm:max-w-[310px] flex items-center justify-center">
              
              {/* Geometric Beveled Glass Shape Background (Asset 10.png) */}
              <div className="absolute -inset-4 pointer-events-none opacity-35 z-0">
                <Image
                  src="/assets/card-glass-shape.png"
                  alt="Glass Card Backdrop"
                  width={340}
                  height={420}
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,102,255,0.35)]"
                />
              </div>

              {/* Revenue Card from Assets */}
              <div className="relative z-10 w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-500">
                <Image
                  src="/assets/widget-revenue.png"
                  alt="$63,921 Live Revenue Growth Widget"
                  width={320}
                  height={380}
                  className="w-full h-auto object-contain rounded-[24px]"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
