"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenContact?: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isClickScrolling = useRef(false);

  const navLinks = [
    { name: "HOME", id: "home", href: "#home" },
    { name: "SERVICES", id: "services", href: "#services" },
    { name: "ABOUT US", id: "about", href: "#about" },
    { name: "PORTFOLIO", id: "growth", href: "#growth" },
    { name: "PACKAGES", id: "packages", href: "#packages" },
    { name: "RESOURCES", id: "difference", href: "#difference" },
  ];

  useEffect(() => {
    // Check initial URL hash on mount
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const found = navLinks.find((link) => link.id === hash);
        if (found) setActiveSection(found.id);
      }
    }

    const sectionOrder = ["home", "about", "growth", "services", "difference", "packages"];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (isClickScrolling.current) return;

      // When near the top of the page, HOME is active
      if (window.scrollY < 200) {
        setActiveSection("home");
        return;
      }

      // If scrolled near bottom of page, activate the last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection("packages");
        return;
      }

      // Detect active section based on scroll offset
      const scrollPos = window.scrollY + 160;
      for (let i = sectionOrder.length - 1; i >= 0; i--) {
        const id = sectionOrder[i];
        if (id === "home") continue;
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

    isClickScrolling.current = true;
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 850);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", window.location.pathname);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elPos = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: elPos, behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030712]/80 backdrop-blur-2xl border-b border-white/[0.08] py-2.5 sm:py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
          : "bg-gradient-to-b from-[#030712]/90 via-[#030712]/40 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo inside White Pill Badge */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e as any, "#home", "home")}
            className="flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white text-slate-950 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_0_20px_rgba(255,255,255,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group shrink-0"
          >
            <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
              <Image
                src="/assets/logo-current.svg"
                alt="Catalogue IT Logo"
                width={24}
                height={24}
                className="w-full h-full object-contain group-hover:rotate-6 transition-transform duration-300"
              />
            </div>
            <span className="font-extrabold text-xs sm:text-sm tracking-tight text-slate-950 uppercase whitespace-nowrap">
              CATALOGUE <span className="text-blue-600">IT</span>
            </span>
          </Link>

          {/* Center Pill Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center bg-[#061026]/80 backdrop-blur-xl border border-white/[0.12] rounded-full p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider whitespace-nowrap transition-all duration-300 relative cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-[0_0_18px_rgba(37,99,235,0.55)] font-bold"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button (Desktop) */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={onOpenContact}
              className="group px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-[length:200%_auto] hover:bg-right hover:from-blue-500 hover:to-cyan-500 text-white shadow-[0_4px_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 cursor-pointer border border-blue-400/30 whitespace-nowrap"
            >
              <span>CONTACT</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Hamburger & Contact Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenContact}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-sm shadow-blue-600/40 cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-3 rounded-2xl bg-[#061026]/95 border border-blue-500/25 backdrop-blur-2xl shadow-2xl flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-600/40 font-bold"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 mt-1 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenContact) onOpenContact();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 font-bold text-xs uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 cursor-pointer"
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
