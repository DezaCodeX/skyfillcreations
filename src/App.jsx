import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PageShell from "./components/PageShell.jsx";
import Home from "./pages/Home.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import WorkGalleryPage from "./pages/WorkGalleryPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import { DataProvider } from "./context/DataContext.jsx";

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageShell>
              <Home />
            </PageShell>
          }
        />
        <Route
          path="/about"
          element={
            <PageShell>
              <AboutPage />
            </PageShell>
          }
        />
        <Route
          path="/services"
          element={
            <PageShell>
              <ServicesPage />
            </PageShell>
          }
        />
        <Route
          path="/work-gallery"
          element={
            <PageShell>
              <WorkGalleryPage />
            </PageShell>
          }
        />
        <Route
          path="/portfolio"
          element={
            <PageShell>
              <PortfolioPage />
            </PageShell>
          }
        />
        <Route
          path="/contact"
          element={
            <PageShell>
              <ContactPage />
            </PageShell>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <MotionConfig reducedMotion="user">
          <div className="relative isolate min-h-screen bg-black text-white">
            <Navbar />
            <main id="main" className="relative z-10">
              <AnimatedRoutes />
            </main>
            <Footer />
            <Analytics />
          </div>
        </MotionConfig>
      </BrowserRouter>
    </DataProvider>
  );
}
