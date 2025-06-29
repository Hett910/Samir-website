import React, { useState, useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const femaleImg = "https://www.w3schools.com/howto/img_avatar2.png";
const maleImg = "https://www.w3schools.com/howto/img_avatar.png";

const reviews = [
  {
    name: "Dayal singh Solanki",
    title: "",
    description: "I am thoroughly impressed with the exceptional service provided by Brand Expert. Their team demonstrated a deep understanding of our brand's needs, delivering high-quality work at an incredible pace.",
    img: maleImg,
     stars: 5,
    dotColor: "bg-green-400",
  },
  {
    name: "SUDHAKAR_33",
    title: "Company Manager ",
    description: "Great and awesome work.Really I was worry because I can’t trust any people through online.But this guy proves me a lot quick response.He make attractive design such a nice work…Good creativity @kushal and @Brand expert most Trustable page….All the best",
    img: maleImg,
    stars: 5,
    dotColor: "bg-blue-400",
  },
  {
    name: "Ajay Sharma",
    title: "",
    description: "ब्रांड एक्सपर्ट लोगोस डिज़ाइनर जैसे नाम से ही ब्रांड क्वालिटी शब्द का उच्चाऱण होता है वैसे ही इनका काम ब्रांडेड है मैंने यहाँ से लोगोस एंड वीडियो बनवाये है यूनिक डिजाइन दिए है वो भी आपके बजट में जब भी आप लोगोंस बनवाने का सोच रहें है तो ब्रांड एक्सपर्ट के पास ही जाएँ धन्यवाद",
    img: maleImg,
    stars: 5,
    dotColor: "bg-pink-400",
  },
  {
    name: "Laxman lokare",
    title: "",
    description: "They are very prompt and very responsive and it has been extremely smooth having these guys be apart of my re-brand. Thank you so much for making a very therapeutic re-brand for us which we were looking for exactly. Quick response deliver work and outstanding logo design. Very happy with the end result",
    img: maleImg,
    stars: 5,
    dotColor: "bg-yellow-400",
  },
  {
    name: "Muhammad Waseem",
    title: "",
    description: "The best person in making the logo in best price... Once you share your ideas and ask the logo he will doing the best .. we cannot expect any failure in the designs .....",
    img: maleImg,
    stars: 5,
    dotColor: "bg-yellow-400",
  },
];

const GeneratedComponent = () => {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const variants = {
    enter: { opacity: 0, x: 60 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -60 },
  };

  const review = reviews[current];

  return (
    <section className="bg-white/10 text-white py-12 px-6 rounded-xl border border-white/20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <motion.h2 className="text-4xl md:text-6xl font-extrabold mb-2">
          Client <span className="text-blue-400"> Testimonials</span>
        </motion.h2>
        <p className="text-gray-300 text-2xl">Hear from the people who trusted us</p>
      </div>

      <div className="relative flex items-center justify-center">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Review"
          className="absolute left-0 p-3 rounded-full bg-white/10 hover:bg-blue-400 transition text-white shadow-md z-10"
        >
          <ArrowLeft size={28} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={review.name}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-10 max-w-4xl mx-6 shadow-lg flex gap-8 items-center"
          >
            <img
              src={review.img}
              alt={review.name}
              className="w-36 h-36 rounded-full object-cover border-4 border-blue-400 shadow-md flex-shrink-0"
            />
            <div className="flex flex-col text-left">
              <Quote size={40} className="text-blue-400 mb-4" />
              <p className="text-lg leading-relaxed text-gray-100 mb-6">
                "{review.description}"
              </p>
              <div className="flex items-center mb-2">
    {Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < review.stars ? "text-yellow-400" : "text-gray-400"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.951c.3.92-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.287-3.95a1 1 0 00-.364-1.119l-3.36-2.44c-.783-.57-.38-1.81.588-1.81h4.149a1 1 0 00.95-.69l1.286-3.951z" />
      </svg>
    ))}
  </div>
              <h3 className="text-white font-bold text-2xl">{review.name}</h3>
              <p className="text-blue-300 text-sm font-semibold">{review.title}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Next Review"
          className="absolute right-0 p-3 rounded-full bg-white/10 hover:bg-blue-400 transition text-white shadow-md z-10"
        >
          <ArrowRight size={28} />
        </button>
      </div>
    </section>
    
  );
};

export default GeneratedComponent;
