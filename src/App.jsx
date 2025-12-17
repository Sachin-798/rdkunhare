import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";

// MAIN PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

// SERVICES SUB-PAGES
import Architecture from "./pages/services/Architecture";
import Interior from "./pages/services/Interior";
import Construction from "./pages/services/Construction";
import Structure from "./pages/services/Structure";
import Property from "./pages/services/Property";
import MapSanction from "./pages/services/MapSanction";
import Vastu from "./pages/services/Vastu";
import ScrollToTop from "./components/ScrollToTop"
import FloatingContactButton from "./components/FloatingContactButton";


function App() {
  return (
    <>
      <Navbar />
      

          <ScrollToTop />
          <FloatingContactButton />

      {/* CONTENT AREA */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* SERVICES */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/architecture-design" element={<Architecture />} />
        <Route path="/services/interior-design" element={<Interior />} />
        <Route path="/services/building-construction" element={<Construction />} />
        <Route path="/services/structure-design" element={<Structure />} />
        <Route path="/services/property-management" element={<Property />} />
        <Route path="/services/map-sanction" element={<MapSanction />} />
        <Route path="/services/vastu" element={<Vastu />} />

        {/* OTHER PAGES */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
