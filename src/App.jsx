import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PricingPage from "./components/PricingPage.jsx";
import PricingSection from "./components/PricingSection";
import AboutPage from "./components/AboutPage.jsx";
import Blog from "./components/Blog.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Faqs from "./components/Faqs.jsx";
import Terms from "./pages/Terms.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <Technologies />
                <Portfolio />
                <PricingSection />
                <Blog />
                <Testimonial />
                <Faqs />
                <Contact />
              </>
            }
          />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
