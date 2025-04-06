'use client'; // Required for Framer Motion and potential client-side interactions

import React from 'react';
import Header from '@/components/Header'; // Assuming components are in src/components
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import PainPointsSection from '@/components/PainPointsSection'; // Added import
import HowItWorksSection from '@/components/HowItWorksSection';
import FeatureHighlightsSection from '@/components/FeatureHighlightsSection';
import InvoicePreviewSection from '@/components/InvoicePreviewSection';
import ResultsSection from '@/components/ResultsSection'; // Added import
import WaitlistCTASection from '@/components/WaitlistCTASection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PainPointsSection /> {/* Added new section */}
        <HowItWorksSection />
        <FeatureHighlightsSection />
        <InvoicePreviewSection />
        <ResultsSection /> {/* Added new section */}
        <WaitlistCTASection />
      </main>
      <Footer />
    </>
  );
}
