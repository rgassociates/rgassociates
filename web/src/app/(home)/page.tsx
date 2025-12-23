"use client";

import {
  HeroSection,
  FeaturedServices,
  WhyChooseUs,
  HowItWorks,
  FAQSection,
  FinalCTA,
} from '@/components/homepage';

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <FeaturedServices />
      <WhyChooseUs />
      <HowItWorks />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
