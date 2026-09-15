import React, { useState } from 'react';
import { TopBanner } from './components/TopBanner';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ParentsTalkSection } from './components/ParentsTalkSection';
import { KillerPointsSection } from './components/KillerPointsSection';
import { CurriculumTracksSection } from './components/CurriculumTracksSection';
import { OfficialProofSection } from './components/OfficialProofSection';
import { ConsultFormSection } from './components/ConsultFormSection';
import { Footer } from './components/Footer';
import { BottomFloatingBar } from './components/BottomFloatingBar';
import { ImageModal } from './components/ImageModal';
import { ConsultSuccessModal } from './components/ConsultSuccessModal';
import { SourceCodeModal } from './components/SourceCodeModal';
import { LeadFormData } from './types';

export default function App() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);
  const [submittedLead, setSubmittedLead] = useState<LeadFormData | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isSourceModalOpen, setIsSourceModalOpen] = useState(false);

  const scrollToConsult = () => {
    const el = document.getElementById('consult-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenImage = (url: string, title: string) => {
    setSelectedImage({ url, title });
  };

  const handleSubmitSuccess = (data: LeadFormData) => {
    setSubmittedLead(data);
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#0B0C0E] text-white flex flex-col items-center selection:bg-[#FF5600] selection:text-white">
      {/* 1. Sticky Urgent Top Countdown Banner */}
      <TopBanner />

      {/* 2. Main Sticky Header with Logo & Fast Contact */}
      <Header
        onScrollToConsult={scrollToConsult}
        onOpenSourceModal={() => setIsSourceModalOpen(true)}
      />

      {/* 3. Main Center Responsive Column (Exact Initial Design & Composition) */}
      <main className="w-full max-w-2xl min-h-screen flex flex-col bg-[#0B0C0E] border-x border-white/5 shadow-2xl relative pt-[92px] pb-24">
        {/* Hero Section */}
        <HeroSection
          onScrollToConsult={scrollToConsult}
          onOpenImageModal={handleOpenImage}
        />

        {/* Real Parents Talk */}
        <ParentsTalkSection />

        {/* 3 Killer Points */}
        <KillerPointsSection />

        {/* 4 Curriculum Tracks */}
        <CurriculumTracksSection onOpenImageModal={handleOpenImage} />

        {/* Official Proof Showcase Gallery */}
        <OfficialProofSection onOpenImageModal={handleOpenImage} />

        {/* High Conversion Consultation Form */}
        <ConsultFormSection onSubmitSuccess={handleSubmitSuccess} />

        {/* Institutional Footer */}
        <Footer />
      </main>

      {/* 4. Bottom Sticky Floating Bar */}
      <BottomFloatingBar
        onScrollToConsult={scrollToConsult}
        onOpenSourceModal={() => setIsSourceModalOpen(true)}
      />

      {/* Modals */}
      <ImageModal
        isOpen={Boolean(selectedImage)}
        imageUrl={selectedImage?.url || ''}
        title={selectedImage?.title || ''}
        onClose={() => setSelectedImage(null)}
      />

      <ConsultSuccessModal
        isOpen={isSuccessModalOpen}
        leadData={submittedLead}
        onClose={() => setIsSuccessModalOpen(false)}
      />

      <SourceCodeModal
        isOpen={isSourceModalOpen}
        onClose={() => setIsSourceModalOpen(false)}
      />
    </div>
  );
}
