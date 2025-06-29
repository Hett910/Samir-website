// App.jsx
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import "./index.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import About from "./Components/About";
import Footer from "./Components/Footer";
import GeneratedComponent from "./Components/servicedesc";
import AboutPage from "./Components/aboutcompany"; 
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      easing: "ease-in-out",
      once: true,
      delay: 100,
    });
  }, []);

  // Check if path is /services/:slug (we just check if it starts with /services/)
  const isServicePage = location.pathname.startsWith("/services/");

  return (
    <>
      {/* Only show global Navbar when NOT on /services/:slug */}
      {!isServicePage && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <About />
              <Footer />
            </>
          }
        />
       <Route path="/services/:slug" element={<GeneratedComponent />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
