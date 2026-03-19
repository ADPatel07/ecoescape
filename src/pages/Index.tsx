import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { useHashScroll } from "@/hooks/useHashScroll";
import { reviewSchemas } from "@/config/testimonials";

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
      <PageMeta
        title="Best Homestay in Mukteshwar | Ecoescape Uttarakhand - Book Direct for Best Rates"
        description="Book Ecoescape Mukteshwar - best boutique homestay in Mukteshwar, Uttarakhand with sunrise views, 100+ plant garden, in-house restaurant. Perfect for families, couples & workations."
        canonical="https://ecoescapemukteshwar.com"
        ogTitle="Ecoescape Mukteshwar | Boutique Homestay with Sunrise Views & Garden"
        ogDescription="A Green Paradise in the Mountains. Boutique homestay with 100+ plant varieties, stunning sunrise views, in-house restaurant & terrace dining. Book direct for best rates."
        jsonLd={reviewSchemas}
      />
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
