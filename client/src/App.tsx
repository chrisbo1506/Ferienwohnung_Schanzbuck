import { Routes, Route } from "wouter"; // Routes statt Switch
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

// Import der Seiten-Komponenten
import ApartmentOnePage from "./pages/ApartmentOnePage";
import ApartmentTwoPage from "./pages/ApartmentTwoPage";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ImprintPage from "./pages/ImprintPage";

function App() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wohnung1" element={<ApartmentOnePage />} />
            <Route path="/wohnung2" element={<ApartmentTwoPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/agb" element={<TermsPage />} />
            <Route path="/datenschutz" element={<PrivacyPolicyPage />} />
            <Route path="/impressum" element={<ImprintPage />} />
            <Route element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </LanguageProvider>
  );
}

export default App;
