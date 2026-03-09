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
const MukteshwarTempleGuide = lazy(() => import("./pages/blog/MukteshwarTempleGuide"));
const MukteshwarWeatherGuide = lazy(() => import("./pages/blog/MukteshwarWeatherGuide"));

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
            <Route path="/blog/mukteshwar-mahadev-temple-guide" element={<Suspense fallback={<div className="min-h-screen" />}><MukteshwarTempleGuide /></Suspense>} />
            <Route path="/blog/mukteshwar-weather-guide" element={<Suspense fallback={<div className="min-h-screen" />}><MukteshwarWeatherGuide /></Suspense>} />
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
