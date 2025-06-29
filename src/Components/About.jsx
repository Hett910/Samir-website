import { motion } from "framer-motion";
import { FaLightbulb, FaUsers, FaRocket } from "react-icons/fa";
import Gallery from "./ourwork"; // adjust path if Gallery.jsx is in a different folder
import TeamSection from "./teamdesc"
import { Link } from "react-router-dom"; // Make sure this is i
import AboutPage from "./aboutcompany"; 

// import SamirImage from "";
 
// New animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const cardHover = {
  hover: {
    y: -10,
    boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.3)",
    transition: { type: "spring", stiffness: 300 },
  },
};

const workImages = [
  {
    id: 1,
    src: "/Photos/SamirImage.jpg",
    alt: "E-commerce Website",
    category: "Web Design",
  },
  {
    id: 2,
    src: "/Photos/SamirImage.jpg",
    alt: "Mobile App UI",
    category: "App Design",
  },
  {
    id: 3,
    src: "/Photos/SamirImage.jpg",
    alt: "Brand Identity",
    category: "Branding",
  },
  {
    id: 4,
    src: "/Photos/SamirImage.jpg",
    alt: "Dashboard Analytics",
    category: "UX/UI",
  },
];


export default function About() {
  return (
    
    <section id="about" className="relative bg-[#3054aa] overflow-hidden">
      {/* New background animation - Flowing waves */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute inset-0 bg-[url('/wave-pattern.svg')] bg-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        {/* Title section with new animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div variants={slideUp} className="inline-block mb-6">
            <span className="text-sm font-semibold tracking-wider text-blue-200 uppercase">
              Who We Are
            </span>
          </motion.div>

          <motion.h2
            variants={slideUp}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            About <span className="text-blue-200">Our Company</span>
          </motion.h2>

          <motion.p
            variants={slideUp}
            className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
          >
            We are innovators, creators, and problem-solvers dedicated to
            transforming your digital vision into reality.
          </motion.p>
        </motion.div>

        {/* Core values with new card animation */}
        

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={containerVariants}
  className="grid md:grid-cols-3 gap-8 mb-28"
>
  {
  [
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Innovation",
      text: "We constantly push boundaries to deliver cutting-edge solutions.",
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Collaboration",
      text: "We work closely with you to create tailored solutions.",
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Who We Are",
      text: "Quality is at the heart of everything we do. Click here for more information.",
      link: "/about", 
    },
  ].map((item, index) => {
    const CardContent = (
      <motion.div
        key={index}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={{
          hidden: slideUp.hidden,
          visible: slideUp.visible,
          hover: cardHover.hover,
        }}
        className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 cursor-pointer"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-blue-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-blue-300"
        >
          {item.icon}
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
        <p className="text-blue-100">{item.text}</p>
      </motion.div>
    );

    return item.link ? (
      <Link to={item.link} key={index}>
        {CardContent}
      </Link>
    ) : (
      <div key={index}>{CardContent}</div>
    );
  })}

</motion.div>

        {/* Work showcase with new gallery animation */}
        {/* <div className="mb-28">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-blue-200">Work</span>
            </h3>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              A showcase of our recent projects and design solutions
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {workImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      delay: index * 0.1,
                    },
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  zIndex: 10,
                  transition: { type: "spring", stiffness: 400 },
                }}
                className="group relative overflow-hidden rounded-xl aspect-square shadow-lg"
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3054aa]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="text-blue-200 text-sm font-medium">
                      {image.category}
                    </span>
                    <h4 className="text-white text-xl font-semibold mt-1">
                      {image.alt}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div> */}
        <Gallery />
        
        <br/>
        <br/>
        <br/>
        <br/>

        {/* Team description with new animation */}
        {/* <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true, margin: "-100px" }}
          id="contact"
          className="max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-sm p-10 rounded-xl border border-white/20"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Meet Our <span className="text-blue-200">Team</span>
            </h3>
            <p className="text-lg text-blue-100 leading-relaxed">
              Our team consists of passionate developers, creative designers,
              and strategic thinkers who collaborate to deliver exceptional
              results.
            </p>
          </motion.div>
        </motion.div> */}
        
        <TeamSection/>
      </div>
    </section>
  );
}
