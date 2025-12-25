import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import Architecture from "./pages/services/Architecture";
import Interior from "./pages/services/Interior";
import Construction from "./pages/services/Construction";
import Structure from "./pages/services/Structure";
import Property from "./pages/services/Property";
import MapSanction from "./pages/services/MapSanction";
import Vastu from "./pages/services/Vastu";

import Renovation from "./pages/services/Renovation";
import Consultation from "./pages/services/Consultation";
import UrbanPlanning from "./pages/services/UrbanPlanning";


import ScrollToTop from "./components/ScrollToTop";
import FloatingContactButton from "./components/FloatingContactButton";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./routes/AdminRoute";

import BlogDetail from "./components/BlogDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <FloatingContactButton />

      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

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
        <Route path="/services/renovation-remodeling" element={<Renovation />} />
<Route path="/services/project-consultation" element={<Consultation />} />
<Route path="/services/urban-planning" element={<UrbanPlanning />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
