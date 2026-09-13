"use client";

import { useState, useEffect } from "react";
import { X, Send, CheckCircle2, MessageCircle, Phone, Mail, Sparkles, Loader2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialPackage?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  initialService = "",
  initialPackage = "",
}: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [service, setService] = useState(initialService || "Web Development");
  const [selectedPackage, setSelectedPackage] = useState(initialPackage || "Digital Accelerator");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  useEffect(() => {
    if (initialService) setService(initialService);
    if (initialPackage) setSelectedPackage(initialPackage);
  }, [initialService, initialPackage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          businessName,
          service,
          package: selectedPackage,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setReferenceId(data.id);
      setIsSubmitted(true);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setBusinessName("");
    setMessage("");
    setIsSubmitted(false);
    setError(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={handleReset}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl rounded-[32px] p-6 sm:p-10 bg-gradient-to-b from-[#081534] via-[#050e24] to-[#020612] border border-blue-400/30 shadow-2xl shadow-blue-950/80 z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close button */}
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Success State */
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Inquiry Received!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <span className="text-cyan-400 font-bold">{name}</span>. A senior strategist from 
                Catalogue IT will review your details and reach out within 24 hours.
              </p>
              {referenceId && (
                <div className="pt-2">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-950/60 border border-blue-400/30 text-blue-300">
                    Reference: {referenceId}
                  </span>
                </div>
              )}
            </div>

            {/* Direct Instant Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/8801710663301"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Form State */
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-cyan-300 text-[11px] font-bold tracking-widest uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Direct Executive Consultation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Let&apos;s Build Your Digital Future
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Tell us about your business goals. We will prepare an actionable digital strategy.
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-200 text-xs">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  Full Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. David Rahman"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040a1c] border border-white/15 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  Email Address <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. david@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040a1c] border border-white/15 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+880 1710 663301"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040a1c] border border-white/15 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors"
                />
              </div>

              {/* Business Name */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  Business Name
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Your Brand or Store"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040a1c] border border-white/15 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors"
                />
              </div>
            </div>

            {/* Service & Package Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  Service of Interest
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040a1c] border border-white/15 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors"
                >
                  <option value="Web Development">01. Web Development</option>
                  <option value="Branding & Design">02. Branding & Design</option>
                  <option value="Digital Marketing">03. Digital Marketing</option>
                  <option value="Business Solutions">00. Business Solutions / Automation</option>
                  <option value="SEO & Growth">04. SEO & Local Growth</option>
                  <option value="Full Transformation">Complete Offline to Online Package</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  Target Package
                </label>
                <select
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040a1c] border border-white/15 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors"
                >
                  <option value="Starter Presence">Starter Presence ($499)</option>
                  <option value="Digital Accelerator">Digital Accelerator ($1,299)</option>
                  <option value="Scale & Dominate">Scale & Dominate ($2,899)</option>
                  <option value="Custom Enterprise">Custom Enterprise Scope</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                Brief Project Scope or Challenge
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you are looking to achieve..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#040a1c] border border-white/15 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-slate-500 resize-none transition-colors"
              />
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-blue-600/40 flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Routing Request...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Direct Contact Fallbacks */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <a href="tel:+8801710663301" className="hover:text-cyan-300 flex items-center gap-1">
                <Phone className="w-3 h-3 text-cyan-400" />
                <span>+8801710663301</span>
              </a>
              <a href="mailto:NWU@GMAIL.COM" className="hover:text-cyan-300 flex items-center gap-1">
                <Mail className="w-3 h-3 text-blue-400" />
                <span>NWU@GMAIL.COM</span>
              </a>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
