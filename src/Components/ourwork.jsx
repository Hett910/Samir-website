// import React from "react";

// const workImages = [
//   {
//     id: 1,
//     src: "/Photos/logo.jpg",
//     alt: "E-commerce Website",
//     category: "Web Design",
//   },
//   {
//     id: 2,
//     src: "/Photos/logo.jpg",
//     alt: "Mobile App UI",
//     category: "App Design",
//   },
//   {
//     id: 3,
//     src: "/Photos/logo.jpg",
//     alt: "Brand Identity",
//     category: "Branding",
//   },
//   {
//     id: 4,
//     src: "/Photos/logo.jpg",
//     alt: "Dashboard Analytics",
//     category: "UX/UI",
//   },
// ];

// const Gallery = () => {
//   return (
//     <div className="min-h-screen bg-[#3054aa] flex items-center justify-center p-6">
//       <div className="grid grid-cols-2 gap-6 w-full max-w-5xl">
//         {workImages.map((image) => (
//           <div
//             key={image.id}
//             className="relative rounded-xl overflow-hidden shadow-lg aspect-square"
//           >
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="object-cover w-full h-full"
//             />
//             <div className="absolute bottom-0 bg-black bg-opacity-60 text-white text-sm p-2 w-full text-center">
//               <p className="font-semibold">{image.alt}</p>
//               <p className="text-xs">{image.category}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;

{/* < first attempt */}

// const services = [
//   {
//     title: "Project Planning",
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor.",
//     icon: "📐", // Replace with real SVG icons as needed
//   },
//   {
//     title: "Project Management",
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor.",
//     icon: "📊",
//   },
//   {
//     title: "General Contracting",
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor.",
//     icon: "🧱",
//   },
//   {
//     title: "Interior Design",
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor.",
//     icon: "🛋️",
//   },
//   {
//     title: "Exterior Design",
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor.",
//     icon: "🏠",
//   },
//   {
//     title: "Space Planning",
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor.",
//     icon: "📏",
//   },
// ];

// export default function OurServices() {
//   return (
//     <section className="bg-white py-16 px-4 md:px-12">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold text-black">Our services</h2>
//         <p className="text-gray-600 max-w-xl mx-auto mt-4">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit varius rhoncus, nullam pulvinar ut sollicitudin dictumst porttitor.
//         </p>
//         <div className="flex justify-center gap-4 mt-6">
//           <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition">Get a quote</button>
//           <button className="border border-gray-300 px-6 py-2 rounded hover:bg-gray-100 transition">Learn more</button>
//         </div>
//       </div>

//       {/* Services Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="relative border rounded p-6 hover:shadow-md transition bg-white overflow-hidden"
//           >
//             {/* Pattern Background */}
//             <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;utf8,<svg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M0 40 L40 0 M-10 30 L10 50 M30 -10 L50 10\' stroke=\'%23ccc\' stroke-width=\'1\' /></svg>')] bg-repeat pointer-events-none" />

//             {/* Card Content */}
//             <div className="relative z-10">
//               <div className="text-4xl mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
//               <p className="text-gray-600 mb-4">{service.p>
//               <a href="#" className="text-orange-500 font-medium inline-flex items-center group">
//                 Learn more
//                 <svg
//                   className="ml-1 w-4 h-4 transition-transform transform group-hover:translate-x-1"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import { motion, AnimatePresence } from "framer-motion";
// import React, { useState } from "react";

// const Gallery = () => {
//   const [showAll, setShowAll] = useState(false);

//   const workImages = [
//     {
//       id: 1,
//       src: "logo.jpg",
//       alt: "E-commerce Website",
//       category:
//         " the image will be shown here and if clicked, it will redirect to the webpage",
//     },
//     {
//       id: 2,
//       src: "logo.jpg",
//       alt: "Mobile App UI",
//       category:
//         " the image will be shown here and if clicked, it will redirect to the webpage",
//     },
//     {
//       id: 3,
//       src: "logo.jpg",
//       alt: "Brand Identity",
//       category:
//         " the image will be shown here and if clicked, it will redirect to the webpage",
//     },
//     {
//       id: 4,
//       src: "logo.jpg",
//       alt: "Dashboard Analytics",
//       category:
//         " the image will be shown here and if clicked, it will redirect to the webpage",
//     },
//     {
//       id: 5,
//       src: "logo.jpg",
//       alt: "Landing Page Design",
//       category:
//         " the image will be shown here and if clicked, it will redirect to the webpage",
//     },
//     {
//       id: 6,
//       src: "logo.jpg",
//       alt: "Social Media Post",
//       category:
//         " the image will be shown here and if clicked, it will redirect to the webpage",
//     },
//     {
//       id: 7,
//       src: "logo.jpg",
//       alt: "Logo Design",
//       category:
//         " the image will be shown here and if clicked, it will redirect to the webpage",
//     },
//     {
//       id: 8,
//       src: "logo.jpg",
//       alt: "Portfolio Website",
//       category:
//         " the image will be shown here and if clicked, it will redirect to the webpage",
//     },
//     {
//       id: 9,
//       src: "logo.jpg",
//       alt: "Portfolio Website",
//       category:
//         " the image will be shown here and if clicked, it will redirect to the webpage",
//     },
//     {
//       id: 10,
//       src: "logo.jpg",
//       alt: "Portfolio Website",
//       category:
//         " the image will be shown here and if clicked, it will redirect to the webpage",
//     },
//     {
//       id: 11,
//       src: "logo.jpg",
//       alt: "Portfolio Website",
//       category:
//         " the image will be shown here and if clicked, it will redirect to the webpage",
//     },
//   ];

//   const initialImages = workImages.slice(0, 4);
//   const extraImages = workImages.slice(4);

//   const imageAnimation = {
//     hidden: { opacity: 0, scale: 0.95, y: 30 },
//     visible: { opacity: 1, scale: 1, y: 0 },
//     exit: { opacity: 0, scale: 0.95, y: 30 },
//   };

//   return (
//     <section className="w-full min-h-screen bg-white/10 py-20 px-6 md:px-20">
//       {/* Title */}
//       <motion.div
//         whileHover={{ scale: 1.02 }}
//         transition={{ type: "spring", stiffness: 200 }}
//         className="flex justify-center"
//       >
//         <h3 className="text-2xl md:text-5xl font-bold text-white mb-6 text-center">
//           Our <span className="text-blue-200">Projects</span>
//         </h3>
//       </motion.div>

//       {/* Grid: First 4 Images */}
//       <div className="max-w-9xl mx-auto grid gap-12 grid-cols-1 sm:grid-cols-2">
//         {initialImages.map((item) => (
//           <GalleryCard key={item.id} item={item} />
//         ))}

//         {/* AnimatePresence for Extra Images */}
//         <AnimatePresence>
//           {showAll &&
//             extraImages.map((item) => (
//               <motion.div
//                 key={item.id}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 variants={imageAnimation}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//               >
//                 <GalleryCard item={item} />
//               </motion.div>
//             ))}
//         </AnimatePresence>
//       </div>

//       {/* View More / View Less Button */}
//       <div className="flex justify-center mt-10">
//         <button
//           onClick={() => setShowAll(!showAll)}
//           className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
//         >
//           {showAll ? "View Less" : "View More"}
//         </button>
//       </div>
//     </section>
//   );
// };

// // Gallery Card Component
// const GalleryCard = ({ item }) => (
//   <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 aspect-square">
//     <img
//       src={item.src}
//       alt={item.alt}
//       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//     />

//     {/* Gradient Overlay */}
//     <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>

//     {/* }
//     <div className="absolute bottom-0 left-0 right-0 text-black text-center py-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//       <p className="text-2xl font-bold text-gray-900">{item.alt}</p>
//       <p className="text-base md:text-lg font-medium text-gray-800 tracking-normal leading-snug px-4">
//         {item.category}
//       </p>
//     </div>
//   </div>
// );

// export default Gallery;

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const workImages = [
    { id: 1, src: "/logo2.jpg", alt: "", category: "" },
    { id: 2, src: "logo3.jpg", alt: "", category: "" },
    { id: 3, src: "logo4.jpg", alt: "", category: "" },
    { id: 4, src: "logo5.jpg", alt: "", category: "" },
    { id: 5, src: "logo6.jpg", alt: "", category: "" },
    { id: 6, src: "logo7.jpg", alt: "", category: "" },
    // { id: 7, src: "logo.jpg", alt: "", category: "" },
    // { id: 8, src: "logo.jpg", alt: "", category: "" },
    // { id: 9, src: "logo.jpg", alt: "", category: "" },
    // { id: 10, src: "logo.jpg", alt: "", category: "" },
    // { id: 11, src: "logo.jpg", alt: "", category: "" },
    // { id: 12, src: "logo.jpg", alt: "", category: "" },
  ];
  

  const displayedImages = showAll ? workImages : workImages.slice(0, 4);

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 30 },
  };

  return (
    <section className="w-full min-h-screen bg-white/10 py-10 px-6 md:px-20 p-10 rounded-xl border border-white/20">
      {/* Title */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="flex justify-center"
      >
        <h3 className="text-2xl md:text-5xl font-bold text-white mb-6 text-center">
          Our <span className="text-blue-200">Projects</span>
        </h3>
      </motion.div>

      {/* Grid of Images */}
      <div className="max-w-9xl mx-auto grid gap-12 grid-cols-1 sm:grid-cols-2">
        <AnimatePresence>
          {displayedImages.map((item) => (
            <motion.div
              key={item.id}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={imageAnimation}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              layout
            >
              <GalleryCard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mt-10">
        <button
  type="button"
  onClick={() => setShowAll((prev) => !prev)}
  className="relative inline-flex items-center justify-center px-8 py-3 font-semibold rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-lg overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-xl"
>
  <span className="relative z-10">{showAll ? "View Less" : "View More"}</span>
  <span
    className="absolute top-0 left-0 w-12 h-full bg-white opacity-10 -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none z-0 "
  ></span>
</button>

      </div>
    </section>
  );
};

// Gallery Card Component
const GalleryCard = ({ item }) => (
  <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 aspect-square">
    <img
      src={item.src}
      alt={item.alt}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
    <div className="absolute bottom-0 left-0 right-0 text-black text-center py-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      <p className="text-2xl font-bold text-gray-900">{item.alt}</p>
      <p className="text-base md:text-lg font-medium text-gray-800 tracking-normal leading-snug px-4">
        {item.category}
      </p>
    </div>
  </div>
);

export default Gallery;
