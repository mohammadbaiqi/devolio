import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainContent from "./components/MainContent";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Portofolio from "./pages/Portofolio";
import DetailPage from "./pages/DetailPage";

const queryClient = new QueryClient();

const DEFAULT_PERSON = "raif";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/:name" element={<MainContent />}>
            <Route index element={<Index />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="portfolio" element={<Portofolio />} />
            <Route path="portfolio/:portoId" element={<DetailPage />} />
          </Route>

          <Route path="/" element={<Navigate to={`/${DEFAULT_PERSON}`} replace />} />
          <Route path="/about-us" element={<Navigate to={`/${DEFAULT_PERSON}/about-us`} replace />} />
          <Route path="/contact" element={<Navigate to={`/${DEFAULT_PERSON}/contact`} replace />} />
          <Route path="/portfolio" element={<Navigate to={`/${DEFAULT_PERSON}/portfolio`} replace />} />
          <Route path="/portfolio/:name/:portoId" element={<Navigate to={`/${DEFAULT_PERSON}/portfolio/:portoId`} replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
