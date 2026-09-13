"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Transformation from "@/components/Transformation";
import GrowthProof from "@/components/GrowthProof";
import ServicesSection from "@/components/ServicesSection";
import DifferenceSection from "@/components/DifferenceSection";
import PackagesSection from "@/components/PackagesSection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

  const handleOpenContact = (service = "", pkg = "") => {
    setSelectedService(service);
    setSelectedPackage(pkg);
    setIsContactOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#030712] text-slate-100 selection:bg-blue-600/30 selection:text-white relative">
      {/* Navigation Header */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Hero Section */}
      <HeroSection onOpenContact={() => handleOpenContact()} />

      {/* Transformation (Traditional Business -> Digital Business) */}
      <Transformation />

      {/* Growth & Proof (Can People Find You Online? + 400% & $63,921 widgets + Horizon glow) */}
      <GrowthProof onOpenContact={() => handleOpenContact()} />

      {/* Quote Banner & End-to-End Capabilities */}
      <ServicesSection
        onSelectService={(serviceTitle) => handleOpenContact(serviceTitle, "")}
      />

      {/* What Makes Us Different? (3D Grid Sculpture + Contact Card) */}
      <DifferenceSection onOpenContact={() => handleOpenContact()} />

      {/* Transparent Packages */}
      <PackagesSection
        onSelectPackage={(pkgName) => handleOpenContact("", pkgName)}
      />

      {/* Site Footer */}
      <Footer onOpenContact={() => handleOpenContact()} />

      {/* Interactive Consultation Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialService={selectedService}
        initialPackage={selectedPackage}
      />
    </main>
  );
}
