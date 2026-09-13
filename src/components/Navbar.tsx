"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenContact?: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "SERVICES", href: "#services" },
    { name: "ABOUT US", href: "#about" },
    { name: "PORTFOLIO", href: "#growth" },
    { name: "PACKAGES", href: "#packages" },
    { name: "RESOURCES", href: "#difference" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030712]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-[#040916] flex items-center justify-center overflow-hidden p-1.5">
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
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
                CATALOGUE <span className="text-blue-500">IT</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-semibold -mt-1 hidden sm:block">
                Technology & Marketing Agency
              </span>
            </div>
          </Link>

          {/* Center Pill Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center bg-[#071330]/80 backdrop-blur-md border border-blue-500/25 rounded-full px-5 py-1.5 shadow-lg shadow-blue-950/40">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
                  idx === 0
                    ? "bg-blue-600 text-white shadow-sm shadow-blue-500/50"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="relative group px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer border border-blue-400/30"
            >
              <span>CONTACT</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenContact}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600 text-white"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-[#061026]/95 border border-blue-500/30 backdrop-blur-xl shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wide text-slate-200 hover:bg-blue-600/20 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 mt-1 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenContact) onOpenContact();
                }}
                className="w-full py-3 rounded-xl bg-blue-600 font-bold text-sm uppercase tracking-wider text-white flex items-center justify-center gap-2"
              >
                <span>Request Consultation</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
