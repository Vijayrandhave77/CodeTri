import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <Portfolio />
              <Technologies />
              <Contact />
            </>
          } />
          
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;