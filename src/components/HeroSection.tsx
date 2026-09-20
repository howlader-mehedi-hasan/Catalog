"use client";

import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onOpenContact?: () => void;
}

export default function HeroSection({ onOpenContact }: HeroSectionProps) {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Container matching mockup composition */}
        <div className="relative rounded-[36px] sm:rounded-[48px] p-6 sm:p-10 lg:p-14 bg-gradient-to-br from-[#0c2356]/85 via-[#071430]/75 to-[#020617]/90 border border-blue-400/25 shadow-2xl shadow-blue-950/50 backdrop-blur-2xl">
          
          {/* Top-Right 3D Loop Sculpture Overlay from assets */}
          <div className="absolute -top-10 -right-10 sm:-top-16 sm:-right-16 w-36 sm:w-56 md:w-72 lg:w-80 pointer-events-none z-20 transition-all duration-1000">
            <Image
              src="/assets/sculpture-loop.png"
              alt="3D Cyber Loop"
              width={320}
              height={320}
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,102,255,0.4)]"
            />
          </div>

          {/* Bottom-Left 3D Loop Sculpture Accent */}
          <div className="absolute -bottom-10 -left-10 sm:-bottom-14 sm:-left-14 w-28 sm:w-44 md:w-56 pointer-events-none z-20 opacity-80">
            <Image
              src="/assets/sculpture-loop.png"
              alt="3D Loop Sculpture"
              width={240}
              height={240}
              className="w-full h-auto object-contain -rotate-45 drop-shadow-[0_15px_30px_rgba(0,102,255,0.3)]"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>WELCOME TO CATALOGUE IT.</span>
              </div>

              {/* Headline strictly matching typography & structure in mockup */}
              <div className="space-y-1 sm:space-y-2">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                  <span className="font-editorial font-normal block text-slate-100">
                    Take Your
                  </span>
                  <span className="font-editorial font-normal block text-slate-100">
                    Business From
                  </span>
                </h1>
                
                {/* Offline to Online Pill Container */}
                <div className="pt-2 sm:pt-3">
                  <span className="inline-block px-5 sm:px-7 py-2 sm:py-3.5 rounded-2xl bg-[#0066FF] text-white text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight shadow-xl shadow-blue-600/40 border border-blue-300/40">
                    Offline to Online.
                  </span>
                </div>
              </div>

              {/* Subtitle / Value Proposition */}
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal pt-1">
                We empower local and established businesses with modern web architecture, 
                high-converting branding, and digital marketing engines that unlock scalable revenue.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenContact}
                  className="px-7 py-3.5 rounded-full font-bold text-sm tracking-wide bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-xl shadow-blue-600/35 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer border border-blue-400/30"
                >
                  <span>Start Your Digital Journey</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                
                <a
                  href="#services"
                  className="px-6 py-3.5 rounded-full font-semibold text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  Explore Services
                </a>
              </div>

            </div>

            {/* Right Graphic Column: Seated Entrepreneur with Floating Badges */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              
              <div className="relative w-full max-w-[420px] aspect-[4/4.5] flex items-center justify-center">
                
                {/* Center Image */}
                <div className="relative w-full h-full rounded-[28px] overflow-hidden">
                  <Image
                    src="/assets/hero-card.png"
                    alt="Digital Entrepreneur at Work"
                    width={560}
                    height={600}
                    priority
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Floating Tech Stack Badge (Apple, Figma, Framer) matching mockup */}
                <div className="absolute -top-4 -left-6 sm:-left-8 z-30 w-36 sm:w-44 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                  <Image
                    src="/assets/tech-stack.png"
                    alt="Tech badges (Apple, Figma, Framer)"
                    width={180}
                    height={60}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Floating $63,921 Live Revenue Badge matching mockup */}
                <div className="absolute -bottom-6 -right-4 sm:-right-8 z-30 w-48 sm:w-56 drop-shadow-[0_15px_30px_rgba(0,102,255,0.4)]">
                  <Image
                    src="/assets/widget-revenue.png"
                    alt="$63,921 Live Revenue Metric"
                    width={240}
                    height={160}
                    className="w-full h-auto object-contain"
                  />
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
