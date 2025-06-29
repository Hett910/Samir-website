import { motion } from 'framer-motion';
import { FaRocket } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function AboutPage() {
     const { slug } = useParams();
    
      useEffect(() => {
      window.scrollTo(0, 0);
    }, [slug]);
  return (
    
    <div>
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-blue-900 text-white text-center overflow-hidden rounded-b-3xl">
        {/* Bubbles Animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 10 + 15 + "px",
                height: Math.random() * 10 + 15 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        

        {/* Rotating Icon */}
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-10">
          <motion.div
            className="w-40 h-40 mr-50  bg-white rounded-md flex items-center justify-center cursor-pointer"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            whileHover={{ rotate: -360, scale: 1.2 }}
          >
            <FaRocket className="w-12 h-12 text-blue-900" />
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-4xl mt-50 md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-200">We Are</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Quality is at the heart of everything we do
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Section Below Hero */}
      <section className="bg-white text-gray-800 py-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-blue-900">About <span className="text-blue-500">Our Company</span></h2>
          <p className="text-lg leading-relaxed mb-6">
            <section className="bg-white text-gray-800 py-16 px-6 md:px-20 lg:px-32">
  
    <p className="text-lg leading-relaxed mb-6">
      We are a team of <span className="font-semibold">creative thinkers, passionate designers, crazy developers, and enthusiastic marketers.</span> These are the people who have become our identity, our strength, and the reason we're recognized as one of the best. But it wasn't easy — it’s been one incredible journey that shaped us, challenged us, and earned us this remarkable reputation.
    </p>
    <p className="text-lg leading-relaxed mb-6">
      We started off as a small creative agency, but our vision was always bigger. There was a demand in the market for a <span className="font-semibold">design agency that offered stunning visuals at market-competitive prices</span>. That gap led to the birth of <span className="font-semibold">Gujraat (Ahmedabad) Graphic Design</span>, now celebrated for its customer-centric approach to design.
    </p>
    <p className="text-lg leading-relaxed mb-6">
      <span className="font-semibold">Gujraat (Ahmedabad) Graphic Design</span> was founded with the sole purpose of helping small-to-medium-sized businesses create strong, memorable brand identities. For those who don’t know, we’re a proud subsidiary of <span className="font-semibold">Stepup Web Design</span>, a US-based agency empowering global brands and institutions through eye-catching visuals and strategic creativity.
    </p>
    <p className="text-lg leading-relaxed">
      So whether you're launching a new startup or looking to <span className="font-semibold">revamp your existing brand identity</span>, Gujraat (Ahmedabad) Graphic Design is here to make your vision a reality — with creativity, passion, and excellence at every step.
    </p>
  
</section>

          </p>
        </div>
        <div className="flex items-center cursor-pointer select-none">
          <img
            src="/logo.jpeg"  
            alt="Brand Logo"
            className="h-100 w-100 ml-120    object-contain"
          />
        </div>
      </section>
      
    </div>
  );
}
