import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { PricingTestPage } from "@/components/PricingTestPage";
import { lazy, Suspense } from "react";

const Blog = lazy(() => import("./pages/Blog"));
const KumaoniFoodGuide = lazy(() => import("./pages/blog/KumaoniFoodGuide"));
const ThingsToDoInMukteshwar = lazy(() => import("./pages/blog/ThingsToDoInMukteshwar"));
const MukteshwarTempleGuide = lazy(() => import("./pages/blog/MukteshwarTempleGuide"));
const MukteshwarWeatherGuide = lazy(() => import("./pages/blog/MukteshwarWeatherGuide"));
const StargazingGuide = lazy(() => import("./pages/blog/StargazingGuide"));
const BirdwatchingGuide = lazy(() => import("./pages/blog/BirdwatchingGuide"));
const TrekkingGuide = lazy(() => import("./pages/blog/TrekkingGuide"));
const FruitOrchardsGuide = lazy(() => import("./pages/blog/FruitOrchardsGuide"));
const SnowfallGuide = lazy(() => import("./pages/blog/SnowfallGuide"));
const WeekendItinerary = lazy(() => import("./pages/blog/WeekendItinerary"));
const HowToReachGuide = lazy(() => import("./pages/blog/HowToReachGuide"));
const CafesAndRestaurantsGuide = lazy(() => import("./pages/blog/CafesAndRestaurantsGuide"));
const SuiteWithMountainView = lazy(() => import("./pages/rooms/SuiteWithMountainView"));
const SpaciousApartment = lazy(() => import("./pages/rooms/SpaciousApartment"));
const FamilyRoom = lazy(() => import("./pages/rooms/FamilyRoom"));
const FamilyRoom2 = lazy(() => import("./pages/rooms/FamilyRoom2"));

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Suspense fallback={<div className="min-h-screen" />}><Blog /></Suspense>} />
            <Route path="/blog/kumaoni-food-guide" element={<Suspense fallback={<div className="min-h-screen" />}><KumaoniFoodGuide /></Suspense>} />
            <Route path="/blog/things-to-do-in-mukteshwar" element={<Suspense fallback={<div className="min-h-screen" />}><ThingsToDoInMukteshwar /></Suspense>} />
            <Route path="/blog/mukteshwar-mahadev-temple-guide" element={<Suspense fallback={<div className="min-h-screen" />}><MukteshwarTempleGuide /></Suspense>} />
            <Route path="/blog/mukteshwar-weather-guide" element={<Suspense fallback={<div className="min-h-screen" />}><MukteshwarWeatherGuide /></Suspense>} />
            <Route path="/blog/stargazing-in-mukteshwar" element={<Suspense fallback={<div className="min-h-screen" />}><StargazingGuide /></Suspense>} />
            <Route path="/blog/birdwatching-in-mukteshwar-guide" element={<Suspense fallback={<div className="min-h-screen" />}><BirdwatchingGuide /></Suspense>} />
            <Route path="/blog/mukteshwar-trekking-guide" element={<Suspense fallback={<div className="min-h-screen" />}><TrekkingGuide /></Suspense>} />
            <Route path="/blog/fruit-orchards-of-mukteshwar-guide" element={<Suspense fallback={<div className="min-h-screen" />}><FruitOrchardsGuide /></Suspense>} />
            <Route path="/blog/mukteshwar-snowfall-guide" element={<Suspense fallback={<div className="min-h-screen" />}><SnowfallGuide /></Suspense>} />
            <Route path="/blog/mukteshwar-weekend-itinerary" element={<Suspense fallback={<div className="min-h-screen" />}><WeekendItinerary /></Suspense>} />
            <Route path="/blog/how-to-reach-mukteshwar-guide" element={<Suspense fallback={<div className="min-h-screen" />}><HowToReachGuide /></Suspense>} />
            <Route path="/blog/best-cafes-and-restaurants-in-mukteshwar" element={<Suspense fallback={<div className="min-h-screen" />}><CafesAndRestaurantsGuide /></Suspense>} />
            <Route path="/rooms/suite-with-mountain-view" element={<Suspense fallback={<div className="min-h-screen" />}><SuiteWithMountainView /></Suspense>} />
            <Route path="/rooms/spacious-apartment" element={<Suspense fallback={<div className="min-h-screen" />}><SpaciousApartment /></Suspense>} />
            <Route path="/rooms/family-room" element={<Suspense fallback={<div className="min-h-screen" />}><FamilyRoom /></Suspense>} />
            <Route path="/rooms/family-room-2" element={<Suspense fallback={<div className="min-h-screen" />}><FamilyRoom2 /></Suspense>} />
            <Route path="/test-pricing" element={<PricingTestPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
