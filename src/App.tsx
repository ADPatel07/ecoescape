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
const WorkcationGuide = lazy(() => import("./pages/blog/WorkcationGuide"));
const RomanticGetawayGuide = lazy(() => import("./pages/blog/RomanticGetawayGuide"));
const SoloTravelGuide = lazy(() => import("./pages/blog/SoloTravelGuide"));
const FamilyVacationGuide = lazy(() => import("./pages/blog/FamilyVacationGuide"));
const MonsoonGuide = lazy(() => import("./pages/blog/MonsoonGuide"));
const PhotographySpotsGuide = lazy(() => import("./pages/blog/PhotographySpotsGuide"));
const LocalFestivalsGuide = lazy(() => import("./pages/blog/LocalFestivalsGuide"));
const PackingListGuide = lazy(() => import("./pages/blog/PackingListGuide"));
const KainchiDhamToMukteshwar = lazy(() => import("./pages/blog/KainchiDhamToMukteshwar"));
const MukteshwarToNainitalDayTrip = lazy(() => import("./pages/blog/MukteshwarToNainitalDayTrip"));
const BestResortsInMukteshwar = lazy(() => import("./pages/blog/BestResortsInMukteshwar"));
const SpiritualKumaonGuide = lazy(() => import("./pages/blog/SpiritualKumaonGuide"));
const BhaluGaadWaterfallTrek = lazy(() => import("./pages/blog/BhaluGaadWaterfallTrek"));
const BackpackerMukteshwarGuide = lazy(() => import("./pages/blog/BackpackerMukteshwarGuide"));
const MukteshwarMahadevHistory = lazy(() => import("./pages/blog/MukteshwarMahadevHistory"));
const DelhiToMukteshwarRoadTrip = lazy(() => import("./pages/blog/DelhiToMukteshwarRoadTrip"));
const MukteshwarOffbeatPlaces = lazy(() => import("./pages/blog/MukteshwarOffbeatPlaces"));
const MukteshwarSpringGuide = lazy(() => import("./pages/blog/MukteshwarSpringGuide"));
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
            <Route path="/blog/workcation-guide" element={<Suspense fallback={<div className="min-h-screen" />}><WorkcationGuide /></Suspense>} />
            <Route path="/blog/romantic-getaway-guide" element={<Suspense fallback={<div className="min-h-screen" />}><RomanticGetawayGuide /></Suspense>} />
            <Route path="/blog/solo-travel-guide" element={<Suspense fallback={<div className="min-h-screen" />}><SoloTravelGuide /></Suspense>} />
            <Route path="/blog/family-vacation-guide" element={<Suspense fallback={<div className="min-h-screen" />}><FamilyVacationGuide /></Suspense>} />
            <Route path="/blog/monsoon-in-mukteshwar-guide" element={<Suspense fallback={<div className="min-h-screen" />}><MonsoonGuide /></Suspense>} />
            <Route path="/blog/best-photography-spots-in-mukteshwar" element={<Suspense fallback={<div className="min-h-screen" />}><PhotographySpotsGuide /></Suspense>} />
            <Route path="/blog/local-festivals-and-culture-guide" element={<Suspense fallback={<div className="min-h-screen" />}><LocalFestivalsGuide /></Suspense>} />
            <Route path="/blog/mukteshwar-ultimate-packing-list" element={<Suspense fallback={<div className="min-h-screen" />}><PackingListGuide /></Suspense>} />
            <Route path="/blog/kainchi-dham-to-mukteshwar-distance" element={<Suspense fallback={<div className="min-h-screen" />}><KainchiDhamToMukteshwar /></Suspense>} />
            <Route path="/blog/mukteshwar-to-nainital-day-trip" element={<Suspense fallback={<div className="min-h-screen" />}><MukteshwarToNainitalDayTrip /></Suspense>} />
            <Route path="/blog/best-resorts-in-mukteshwar" element={<Suspense fallback={<div className="min-h-screen" />}><BestResortsInMukteshwar /></Suspense>} />
            <Route path="/blog/spiritual-kumaon-guide" element={<Suspense fallback={<div className="min-h-screen" />}><SpiritualKumaonGuide /></Suspense>} />
            <Route path="/blog/bhalu-gaad-waterfall-trek" element={<Suspense fallback={<div className="min-h-screen" />}><BhaluGaadWaterfallTrek /></Suspense>} />
            <Route path="/blog/mukteshwar-backpacker-guide" element={<Suspense fallback={<div className="min-h-screen" />}><BackpackerMukteshwarGuide /></Suspense>} />
            <Route path="/blog/mukteshwar-mahadev-temple-history" element={<Suspense fallback={<div className="min-h-screen" />}><MukteshwarMahadevHistory /></Suspense>} />
            <Route path="/blog/delhi-to-mukteshwar-road-trip" element={<Suspense fallback={<div className="min-h-screen" />}><DelhiToMukteshwarRoadTrip /></Suspense>} />
            <Route path="/blog/offbeat-places-in-mukteshwar" element={<Suspense fallback={<div className="min-h-screen" />}><MukteshwarOffbeatPlaces /></Suspense>} />
            <Route path="/blog/spring-in-mukteshwar-guide" element={<Suspense fallback={<div className="min-h-screen" />}><MukteshwarSpringGuide /></Suspense>} />
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
