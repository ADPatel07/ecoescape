import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FloatingCTA } from "@/components/FloatingCTA";
import { useHashScroll } from "@/hooks/useHashScroll";

const RoomsSection = lazy(() => import("@/components/RoomsSection").then(m => ({ default: m.RoomsSection })));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const DiningSection = lazy(() => import("@/components/DiningSection").then(m => ({ default: m.DiningSection })));
const GardenSection = lazy(() => import("@/components/GardenSection").then(m => ({ default: m.GardenSection })));
const GallerySection = lazy(() => import("@/components/GallerySection").then(m => ({ default: m.GallerySection })));
const ThingsToDoSection = lazy(() => import("@/components/ThingsToDoSection").then(m => ({ default: m.ThingsToDoSection })));
const AmenitiesSection = lazy(() => import("@/components/AmenitiesSection").then(m => ({ default: m.AmenitiesSection })));
const PoliciesSection = lazy(() => import("@/components/PoliciesSection").then(m => ({ default: m.PoliciesSection })));
const BookingSection = lazy(() => import("@/components/BookingSection").then(m => ({ default: m.BookingSection })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const SectionFallback = () => <div className="min-h-[200px]" />;

const Index = () => {
  useHashScroll();
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <Suspense fallback={<SectionFallback />}>
          <RoomsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <DiningSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <GardenSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <GallerySection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ThingsToDoSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <AmenitiesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <PoliciesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <BookingSection />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
      <FloatingCTA />
    </div>
  );
};

export default Index;
