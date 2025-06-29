// src/components/Hero.jsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useParams } from "react-router-dom";
import animationData from '../assets/hero-animation.json'; // You'll need to add this file

export default function Hero() {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll) if you're using it elsewhere
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init();
    }
  }, []);

const { slug } = useParams();
  useEffect(() => {
  window.scrollTo(0, 0);
}, [slug]);

const phoneNumber = "919173393706"; 
const message = "Hello! I would like to talk about your services."; 
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#3054aa] to-[#1a3a8f] text-white min-h-screen flex items-center justify-center overflow-hidden px-4 rounded-2xl "
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 10 + 5 + 'px',
                height: Math.random() * 10 + 5 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content with animations */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="inline-block">
                <motion.span 
                  className="inline-block"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Empowering
                </motion.span>
              </span>{' '}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Digital Solutions
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              We design, build, and scale custom web solutions that drive business growth and innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.a
  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
  target="_blank" // open in new tab
  rel="noopener noreferrer"
  className="inline-block bg-white text-[#3054aa] px-8 py-4 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
  whileHover={{ 
    scale: 1.05,
    boxShadow: '0 10px 25px -5px rgba(255, 255, 255, 0.3)'
  }}
  whileTap={{ scale: 0.95 }}
>
  Let's Talk
</motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3].map((i) => (
                    <img 
                      key={i}
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i+20}.jpg`}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      alt="Client"
                    />
                  ))}
                </div>
                <span className="text-sm">Trusted by 100+ clients</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Animation/Illustration */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Lottie 
              animationData={animationData} 
              loop={true}
              className="max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </motion.div>
    </section>
  );
}