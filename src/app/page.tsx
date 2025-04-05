'use client'; // Required for Framer Motion and potential client-side interactions

import React from 'react';
import Header from '@/components/Header'; // Assuming components are in src/components
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeatureHighlightsSection from '@/components/FeatureHighlightsSection';
import InvoicePreviewSection from '@/components/InvoicePreviewSection';
import WaitlistCTASection from '@/components/WaitlistCTASection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeatureHighlightsSection />
        <InvoicePreviewSection />
        <WaitlistCTASection />
      </main>
      <Footer />
    </>
  );
}
