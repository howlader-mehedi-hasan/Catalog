"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight, Heart } from "lucide-react";

interface FooterProps {
  onOpenContact?: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer className="relative bg-[#02040a] border-t border-blue-900/30 pt-16 pb-12 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px] flex items-center justify-center shadow-lg shadow-blue-500/20">
                <div className="w-full h-full rounded-full bg-[#040916] flex items-center justify-center p-1.5">
                  <Image
                    src="/assets/logo-current.svg"
                    alt="Catalogue IT Logo"
                    width={28}
                    height={28}
                    className="w-full h-full object-contain filter invert"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                  CATALOGUE <span className="text-blue-500">IT</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-semibold -mt-1">
                  Technology & Marketing Agency
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              We help traditional businesses make the leap from offline to online with world-class 
              engineering, bespoke branding, and high-ROI acquisition engines.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/8801710663301"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold hover:bg-emerald-500/25 transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Hotline</span>
              </a>

              <button
                onClick={onOpenContact}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
              >
                Contact Team
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#" className="hover:text-cyan-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">Traditional to Digital</a>
              </li>
              <li>
                <a href="#growth" className="hover:text-cyan-300 transition-colors">Growth Proof</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-cyan-300 transition-colors">Pricing Packages</a>
              </li>
              <li>
                <a href="#difference" className="hover:text-cyan-300 transition-colors">Why Catalogue IT</a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>01. Web Development</li>
              <li>02. Branding & Visual Systems</li>
              <li>03. Paid Ads (Meta & Google)</li>
              <li>00. Business ERP & Automation</li>
              <li>04. Local Search Dominance (SEO)</li>
              <li>Conversion Rate Optimization</li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="tel:+8801710663301" className="font-mono hover:text-cyan-300 transition-colors">
                  +8801710663301
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="mailto:NWU@GMAIL.COM" className="font-mono hover:text-cyan-300 transition-colors">
                  NWU@GMAIL.COM
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Khulna / Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Catalogue IT. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
              Vercel Optimized
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
              Next.js 16 + Node.js
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
              Firebase Ready
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
