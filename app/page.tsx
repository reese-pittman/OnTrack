import React from 'react';
import NavBar from '@/components/layout/LandingNavBar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/landing/HeroSection';
import Stats_Features from '@/components/landing/Stats_Features';


export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <main className="">
        <HeroSection />
        <Stats_Features />
      </main>
      <Footer />
    </div>
    
  );
}