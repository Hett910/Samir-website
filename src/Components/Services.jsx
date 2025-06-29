// // Services.jsx
// import { 
//   FaPaintBrush, FaBusinessTime, FaFileAlt, FaFileInvoice, FaBoxOpen,  
//   FaUtensils, FaFacebook, FaBullhorn, FaCode, FaIdCard, FaFileSignature, FaEnvelopeOpenText 
// } from "react-icons/fa";
// import { MdDesignServices } from "react-icons/md";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom"; // Added for navigation

// export default function Services() {
//   const navigate = useNavigate(); // Hook to navigate on click

//   const services = [
//     {
//       icon: <FaPaintBrush className="w-6 h-6" />,
//       title: "Logo Design",
//       slug: "logo-design",
//       description: "Custom logos that represent your brand identity clearly.",
//       size: "col-span-1 row-span-1"
//     },
//     {
//       icon: <FaCode className="w-6 h-6" />,
//       title: "Web Development",
//       slug: "web-development",
//       description: "We create fast, responsive, and scalable web applications.",
//       size: "col-span-1 row-span-2"
//     },
//     {
//       icon: <FaBusinessTime className="w-6 h-6" />,
//       title: "Other services",
//       slug: "Other-services",
//       description: "Includes Visiting Card, Letterhead & Envelope design.",
//       size: "col-span-1 row-span-1"
//     },
//     {
//       icon: <MdDesignServices className="w-6 h-6" />,
//       title: "UI/UX Design",
//       slug: "ui-ux-design",
//       description: "Modern and user-centered design tailored for your users.",
//       size: "col-span-1 row-span-1"
//     },
//     {
//       icon: <FaFileInvoice className="w-6 h-6" />,
//       title: "Brochure Design",
//       slug: "brochure-design",
//       description: "Professional brochures crafted per page to showcase your services.",
//       size: "col-span-1 row-span-1"
//     },
//     {
//       icon: <FaBoxOpen className="w-6 h-6" />,
//       title: "Packaging Design",
//       slug: "packaging-design",
//       description: "Creative packaging tailored to fit your product requirements.",
//       size: "col-span-1 row-span-1"
//     },
//     {
//       icon: <FaUtensils className="w-6 h-6" />,
//       title: "Restaurant Menu Card",
//       slug: "restaurant-menu-card",
//       description: "Engaging and appetizing menu card designs.",
//       size: "col-span-1 row-span-2"
//     },
//     {
//       icon: <FaFacebook className="w-6 h-6" />,
//       title: "Social Media / Festival Poster",
//       slug: "social-media-festival-poster",
//       description: "Vibrant and eye-catching posters for every occasion.",
//       size: "col-span-1 row-span-1"
//     },
//     {
//       icon: <FaBullhorn className="w-6 h-6" />,
//       title: "Billboard / Banner / Signboard",
//       slug: "billboard-banner-signboard",
//       description: "Large format designs for outdoor advertisements.",
//       size: "col-span-2 row-span-1"
//     },
//     {
//       icon: <FaFileAlt className="w-6 h-6" />,
//       title: "Flyer Design",
//       slug: "flyer-design",
//       description: "Attractive flyers created per page for your campaigns.",
//       size: "col-span-1 row-span-1"
//     },
//     {
//       icon: <FaIdCard className="w-6 h-6" />,
//       title: "Business Card",
//       slug: "business-card",
//       description: "Premium business card designs that leave a lasting first impression.",
//       size: "col-span-1 row-span-2"
//     },
//     {
//       icon: <FaFileSignature className="w-6 h-6" />,
//       title: "Letterhead",
//       slug: "letterhead",
//       description: "Custom letterheads that reinforce your brand identity on every document.",
//       size: "col-span-1 row-span-2"
//     },
//     {
//       icon: <FaEnvelopeOpenText className="w-6 h-6" />,
//       title: "Envelope",
//       slug: "envelope",
//       description: "Branded envelopes to complete your professional stationery set.",
//       size: "col-span-1 row-span-2"
//     }
//   ];

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { 
//       opacity: 1, 
//       y: 0,
//       transition: { type: "spring", stiffness: 100, damping: 10 }
//     },
//     hover: { 
//       y: -5,
//       boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
//     }
//   };

//   return (
//     <section id="services" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a8f] mb-4">
//             Our Services
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Comprehensive design and development solutions for your business
//           </p>
//         </motion.div>

//         <motion.div 
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               variants={item}
//               whileHover="hover"
//               className={`${service.size} bg-white rounded-xl p-6 flex flex-col border border-gray-100 
//               transition-all duration-300 relative overflow-hidden group hover:border-gray-200 cursor-pointer`}
//               onClick={() => navigate(`/services/${service.slug}`)}
//             >
//               <div className="mb-4 p-3 bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center 
//                 transition-all duration-300 group-hover:bg-blue-100">
//                 <div className="text-blue-600">
//                   {service.icon}
//                 </div>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
//               <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
//               <div className="mt-auto pt-4">
//                 <span className="text-xs font-medium text-blue-600 hover:text-blue-700 transition flex items-center gap-1">
//                   Know more
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </span>
//               </div>
//               <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-blue-100 to-transparent group-hover:h-full transition-all duration-500 ease-in-out -z-10"></div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
// Services.jsx
import {
  FaPaintBrush, FaBusinessTime, FaFileAlt, FaFileInvoice, FaBoxOpen,
  FaUtensils, FaFacebook, FaBullhorn, FaCode, FaIdCard, FaFileSignature, FaEnvelopeOpenText
} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    { icon: <FaPaintBrush className="w-6 h-6" />, title: "Logo Design", slug: "logo-design", description: "Custom logos that represent your brand identity clearly.", size: "col-span-1 row-span-1" },
    { icon: <FaCode className="w-6 h-6" />, title: "Web Development", slug: "web-development", description: "We create fast, responsive, and scalable web applications.", size: "col-span-1 row-span-2" },
    { icon: <FaBusinessTime className="w-6 h-6" />, title: "Other services", slug: "Other-services", description: "Includes Visiting Card, Letterhead & Envelope design.", size: "col-span-1 row-span-1" },
    { icon: <MdDesignServices className="w-6 h-6" />, title: "UI/UX Design", slug: "ui-ux-design", description: "Modern and user-centered design tailored for your users.", size: "col-span-1 row-span-1" },
    { icon: <FaFileInvoice className="w-6 h-6" />, title: "Brochure Design", slug: "brochure-design", description: "Professional brochures crafted per page to showcase your services.", size: "col-span-1 row-span-1" },
    { icon: <FaBoxOpen className="w-6 h-6" />, title: "Packaging Design", slug: "packaging-design", description: "Creative packaging tailored to fit your product requirements.", size: "col-span-1 row-span-1" },
    { icon: <FaUtensils className="w-6 h-6" />, title: "Restaurant Menu Card", slug: "restaurant-menu-card", description: "Engaging and appetizing menu card designs.", size: "col-span-1 row-span-2" },
    { icon: <FaFacebook className="w-6 h-6" />, title: "Social Media / Festival Poster", slug: "social-media-festival-poster", description: "Vibrant and eye-catching posters for every occasion.", size: "col-span-1 row-span-1" },
    { icon: <FaBullhorn className="w-6 h-6" />, title: "Billboard / Banner / Signboard", slug: "billboard-banner-signboard", description: "Large format designs for outdoor advertisements.", size: "col-span-2 row-span-1" },
    { icon: <FaFileAlt className="w-6 h-6" />, title: "Flyer Design", slug: "flyer-design", description: "Attractive flyers created per page for your campaigns.", size: "col-span-1 row-span-1" },
    { icon: <FaIdCard className="w-6 h-6" />, title: "Business Card", slug: "business-card", description: "Premium business card designs that leave a lasting first impression.", size: "col-span-1 row-span-2" },
    { icon: <FaFileSignature className="w-6 h-6" />, title: "Letterhead", slug: "letterhead", description: "Custom letterheads that reinforce your brand identity on every document.", size: "col-span-1 row-span-2" },
    { icon: <FaEnvelopeOpenText className="w-6 h-6" />, title: "Envelope", slug: "envelope", description: "Branded envelopes to complete your professional stationery set.", size: "col-span-1 row-span-2" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
    }
  };

  return (
    <section id="services" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a8f] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive design and development solutions for your business
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {services.map((service, index) => {
            const baseClasses = "bg-white rounded-xl p-6 flex flex-col border border-gray-100 transition-all duration-300 relative overflow-hidden group hover:border-gray-200 cursor-pointer";
            const mdColSpan = service.size.includes("col-span-2") ? "md:col-span-2" : "md:col-span-1";
            const mdRowSpan = service.size.includes("row-span-2") ? "md:row-span-2" : "md:row-span-1";

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover="hover"
                onClick={() => navigate(`/services/${service.slug}`)}
                className={`col-span-1 sm:col-span-1 ${mdColSpan} ${mdRowSpan} ${baseClasses}`}
              >
                <div className="mb-4 p-3 bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-100">
                  <div className="text-blue-600">{service.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="mt-auto pt-4">
                  <span className="text-xs font-medium text-blue-600 hover:text-blue-700 transition flex items-center gap-1">
                    Know more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-blue-100 to-transparent group-hover:h-full transition-all duration-500 ease-in-out -z-10"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
