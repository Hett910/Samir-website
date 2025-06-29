import { useParams } from "react-router-dom";
// import Navbar from "./Navbar";
import { useState } from 'react';
import React from "react";
import { motion } from 'framer-motion';
import { FaPaintBrush, FaCode, FaBusinessTime, FaFileInvoice,FaPenFancy, FaBoxOpen, FaUtensils, FaFacebook, FaBullhorn, FaFileAlt, FaIdCard, FaFileSignature, FaEnvelopeOpenText } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import Lottie from 'lottie-react';
import animationData from '../assets/hero-animation.json';
// import { useAnimation } from "framer-motion";
import { useEffect } from "react";
// import { CheckCircle } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Mail } from "lucide-react";
import * as Icons from "lucide-react";

const handleQuestionClick = () => {
  // const phoneNumber = "918866378552";  
  const phoneNumber2 = "919173393706";  
  const message = "Hi Brand Expert, I have some queries about your services. Can you help me with more details?";

  const url = `https://wa.me/${phoneNumber2}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};


export default function GeneratedComponent() {
  const { slug } = useParams();
 const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
  window.scrollTo(0, 0);
}, [slug]);


  const formattedTitle = slug.replace(/-/g, " ").toUpperCase();
  const formattedName = slug.replace(/-/g, " ");

const services = [
  {
    icon: <FaPaintBrush className="w-6 h-6" />,
    title: "Logo Design",
    slug: "logo-design",
    description: "“Your logo isn’t just a mark - it’s the beginning of your story.”",
    overview: [
    `We believe your logo is the cornerstone of your brand identity. At our design studio, we don’t just deliver a graphic—we craft a powerful visual identity that resonates with your audience and communicates your values. Whether you're a startup looking to make your mark or an established business ready for a refresh, we bring creativity, strategy, and precision to every logo design project.`,
    `We conduct thorough market research to understand your industry and competitors.`,
    `Our creative process ensures your logo is memorable and timeless.`,
      `We prioritize brand alignment to make sure your logo fits your company ethos.`,
      `Deliverables include scalable vector files and all necessary formats.`,
      `We offer expert advice on brand colors and typography to complement your logo.`,
    ],
    points: [
      "Unique concepts tailored to your business",
      "Multiple revisions until satisfied",
      "High-resolution deliverables"
    ],
    whyChooseUs: [
      {
        title: 'Experienced Designers',
        description: 'Our team brings years of industry expertise to create impactful logos.',
        icon: 'users',
      },
      {
        title: 'Unique Concepts',
        description: 'Every logo is crafted from scratch to ensure originality and brand relevance.',
        icon: 'lightbulb',
      },
      {
        title: 'Unlimited Revisions',
        description: 'We fine-tune the design until you’re 100% satisfied.',
        icon: 'refresh-ccw',
      },
      {
        title: 'Fast Turnaround',
        description: 'Get your first concepts within 48 hours of placing your order.',
        icon: 'clock',
      },
    ],
    gallery: [
      "/logo8.jpg",
      "/logo9.jpg",
      "/logo10.jpg",
      "/logo11.jpg",
      "/logo12.jpg",
      "/logo13.jpg",
    ],
    packages: [
      {
        name: "Essential Plan",
        price: "₹599",

    features: [
        "2 Logo Concepts",
        "2 Revisions",
        "Logo Intro Video (non-custom)",
        "2D & 3D Logo Options",
        "Source Files: PDF, CDR, PNG, JPG",
        "Delivery in 2 Working Days",
        "50% Advance Payment",
        "No Free Sample/Demo"
        ]
      },
      {
        name: " Growth Plan",
        price: "₹899",
        features: [
       "4 Logo Concepts",
       "4 Revisions",
       "Logo Intro Video (non-custom)",
       "2D & 3D Logo Options",
      "Source Files Included",
      "Delivery in 2 Working Days",
      "50% Advance Payment",
      "No Free Sample/Demo"
]
      },
      {
        name: "Premium Plan ",
        price: "₹1799",

        features: [
      "3 Logo Concepts",
      "3 Revisions",
      "Logo Intro Video (non-custom)",
      "Visiting Card Design",
      "Letterhead design",
      "Envelope design",
      "2D & 3D Logo Options",
      "Source Files Included",
      "Delivery in 2 Working Days",
      "No Free Sample/Demo",
      
]

      }
    ]
  },
  {
  icon: <FaCode className="w-6 h-6" />,
  title: "Web Development",
  slug: "web-development",
  description: "We create fast, responsive, and scalable web applications.",
  overview: [
    `Our web development services are designed to empower your business with a strong online presence. We combine modern UI/UX principles with robust backend technologies to build responsive, SEO-friendly websites that not only look great but also perform flawlessly. From sleek landing pages to full-stack web apps, we deliver solutions that are tailored, scalable, and ready for growth.`,
    "We build websites optimized for speed and performance to enhance user experience.",
    "Our development follows best SEO practices for better search engine ranking.",
    "Custom integrations allow seamless connection with third-party tools.",
    "We focus on accessibility to ensure your website can be used by everyone.",
    "Post-launch support and maintenance to keep your site secure and updated."
  ],
  points: [
    "Responsive across devices",
    "SEO optimized code",
    "Backend and frontend integration"
  ],
  whyChooseUs: [
    {
      title: 'Full-Stack Expertise',
      description: 'From backend architecture to pixel-perfect frontends, our team delivers seamless end-to-end solutions.',
      icon: 'layers',
    },
    {
      title: 'Modern Tech Stack',
      description: 'We leverage the latest frameworks like React, Next.js, and Node.js to build fast, scalable applications.',
      icon: 'code',
    },
    {
      title: 'Custom-Built Solutions',
      description: 'Every website is tailored to your unique business needs—no cookie-cutter templates here.',
      icon: 'wrench',
    },
    {
      title: 'Performance & SEO Focused',
      description: 'We optimize your website for fast loading times and better rankings on search engines.',
      icon: 'zap',
    },
    {
      title: 'Responsive Design',
      description: 'Your site will look and function beautifully on desktop, tablet, and mobile devices.',
      icon: 'smartphone',
    },
    {
      title: 'Post-Launch Support',
      description: 'We provide ongoing maintenance and support to keep your website secure and up-to-date.',
      icon: 'life-buoy',
    }
  ],

  packages: [
    {
      name: "Basic",
      price: "Custom Pricing",
      features: [
        "Landing Page or Personal Site",
        "Mobile Responsive Design",
        "Essential SEO Setup",
        //"Delivery in 3–5 Days"
      ]
    },
    {
      name: "Business",
      price: "Custom Pricing",
      features: [
        "Multi-Page Website (up to 10 pages)",
        "CMS Integration (WordPress, Sanity, etc.)",
        "Advanced SEO Optimization",
        "Contact Forms, Chat, and Integrations",
       // "Delivery in 5–10 Days"
      ]
    },
    {
      name: "Custom",
      price: "Fully Tailored",
      features: [
        "Unlimited Pages or Web App",
        "Custom Features and APIs",
        "Scalable Architecture",
        "Ongoing Maintenance & Support",
        "Timeline Based on Requirements"
      ]
    }
  ]
},

  // 3
  {
  icon: <FaBusinessTime className="w-6 h-6" />,
  title: "Other services",
  slug: "Other-services",
  description: "Unify your brand across every printed piece—consistency that speaks volumes.",
  overview: [
    `Our 'Other Services' package covers a broad range of essential business materials designed to help you communicate your brand effectively across all touchpoints.`,
    `From shopping bag designs to admission forms, every item is tailored with a strong focus on visual appeal, clarity, and consistency.`,
    `Each design reflects your brand's personality through cohesive typography, color schemes, and layout aesthetics.`,
    `We deliver high-resolution, print-ready files that make production seamless and professional.`,
    `Perfect for businesses looking to establish or maintain a strong brand presence in both physical and promotional materials.`,
    `Our services are flexible—whether you need a one-off item or a complete suite of brand collateral, we deliver with quality and precision.`
  ],
  points: [
    "Custom-designed business essentials",
    "Ready-to-print high-quality files",
    "Cohesive branding across all formats"
  ],
  whyChooseUs: [
    {
      title: 'Versatile Design Range',
      description: 'From catalogs to ID cards, we handle diverse formats with creative precision.',
      icon: 'grid',
    },
    {
      title: 'High-Resolution Output',
      description: 'All designs are delivered in professional print-ready formats for production ease.',
      icon: 'file-text',
    },
    {
      title: 'Tailored Branding',
      description: 'Every piece is aligned with your brand’s unique voice and visual identity.',
      icon: 'palette',
    },
    {
      title: 'Efficient Delivery',
      description: 'We work fast without compromising on quality—perfect for urgent business needs.',
      icon: 'clock',
    }
  ],
  gallery: [],
  packages: [
    {
      name: "Other Designing Works",
      price: "",
      features: [
        "Shopping Bag Design (Two Sides)",
        "Product Catalog (Per Page)",
        "File Folder Design",
        "Paper Advertisement",
        "Ticket Design",
        "Ticket Cover",
        "Sticker / Price Tag",
        "Money Receipt",
        "Certificate Design",
        "Admission Form",
        "Company Profile (Per Page)",
        "ID Card Design"
      ]
    }
  ]
},

// 4
{
  icon: <MdDesignServices className="w-6 h-6" />,
  title: "UI/UX Design",
  slug: "ui-ux-design",
  description: "“Design is not just what it looks like and feels like. Design is how it works.”",
  overview: [
    `We craft intuitive, user-centric interfaces that enhance user satisfaction and drive engagement. Our UI/UX design services focus on understanding your users’ needs and delivering seamless digital experiences. From wireframes to fully responsive design systems, we make sure your product doesn’t just look stunning—it performs effortlessly.`,
    `We conduct deep user research and competitor analysis to inform our design strategy.`,
    `Prototyping and wireframing help us validate ideas quickly before full-scale development.`,
    `Every design decision is made with usability and accessibility in mind.`,
    `We follow a mobile-first, responsive approach to ensure compatibility across all devices.`,
    `Collaboration is key—we iterate with your feedback to ensure the final product exceeds expectations.`
  ],
  points: [
    "User-centered design process",
    "High-fidelity prototypes and wireframes",
    "Design systems and UI kits"
  ],
  whyChooseUs: [
    {
      title: 'Human-Centered Design',
      description: 'We prioritize your users by designing experiences that are intuitive and frictionless.',
      icon: 'user',
    },
    {
      title: 'Modern Aesthetics',
      description: 'Our design language is clean, modern, and tailored to your brand’s personality.',
      icon: 'layout',
    },
    {
      title: 'Interactive Prototypes',
      description: 'We deliver clickable prototypes to help you visualize flow and interactivity before development.',
      icon: 'mouse-pointer',
    },
    {
      title: 'Mobile-First Approach',
      description: 'Every design is responsive and optimized for performance on mobile devices.',
      icon: 'smartphone',
    }
  ],
  gallery: [
    "/uiux.jpg",
    "/uiux2.jpg",
    "/uiux3.jpg",
    
  ],
  packages: [
  {
    name: "Starter UI/UX",
    price: "",
    features: [
      "1 Landing Page Design (Figma)",
      "User-Centered Wireframe",
      "Basic UI Elements & Layout",
      "2 Revisions",
      "Delivery in 3 Working Days",
      "Figma or PDF File Provided"
    ]
  },
  {
    name: "Professional UI/UX",
    price: "",
    features: [
      "Up to 5 Screens (Web or Mobile App)",
      "Custom Wireframes & UI Elements",
      "User Flow Mapping",
      "Interactive Prototype (Figma)",
      "3 Revisions",
      "Delivery in 5 Working Days",
      "Handoff-Ready Design for Developers"
    ]
  },
  {
    name: "Premium UI/UX Suite",
    price: "",
    features: [
      "Up to 10 Screens (Web, App, or Dashboard)",
      "Complete UX Research & User Journey",
      "Interactive Prototypes & Animations",
      "Design System & Component Library",
      "Unlimited Revisions",
      "Developer Handoff + Asset Export",
      "Priority Delivery in 7 Working Days"
    ]
  }
]

},
// 5
{
  icon: <FaFileInvoice className="w-6 h-6" />,
  title: "Brochure Design",
  slug: "brochure-design",
  description: "“Transform your message into a visually compelling story.”",
  overview: [
    `Our brochure design service helps you communicate your message clearly, creatively, and effectively. Whether it's for marketing, informational, or corporate use, we design brochures that reflect your brand's personality and drive engagement.`,
    `We start with understanding your goals and target audience to craft relevant layouts.`,
    `Our team uses high-impact visuals, consistent branding, and persuasive copy for maximum impact.`,
    `Designs are optimized for both print and digital distribution formats.`,
    `We provide guidance on folding styles, paper types, and print specifications.`,
    `Deliverables are high-resolution and print-ready, with optional editable source files.`
  ],
  points: [
    "Tailored design aligned with brand identity",
    "Multiple layout options",
    "High-resolution, print-ready files"
  ],
  whyChooseUs: [
    {
      title: 'Creative Storytelling',
      description: 'We turn your content into an engaging visual journey that captivates readers.',
      icon: 'book-open',
    },
    {
      title: 'Marketing Focused',
      description: 'Designs are crafted with conversion and readability in mind.',
      icon: 'trending-up',
    },
    {
      title: 'Custom Layouts',
      description: 'From bi-folds to tri-folds and beyond, we tailor the layout to your needs.',
      icon: 'layout',
    },
    {
      title: 'Expert Print Guidance',
      description: 'We assist with print specifications and recommendations to ensure professional results.',
      icon: 'printer',
    },
  ],
  gallery: [
    "/br2.jpg",
    "/br1.jpg",
    "/br3.jpg",
    "/br4.jpg",
    "/br5.jpg",
    "/br6.jpg",
  ],
packages: [
  {
    name: "Brochure Design",
    price: "",
    features: [
      "Creative Layout for Print or Digital Use",
      "Includes Text, Images & Branding Elements",
      "Designed to Communicate Key Messages Clearly",
      "Multiple Formats: Bi-fold, Tri-fold, Booklet, or PDF",
      "Ideal for Marketing, Promotion, or Informational Use",
      "Tailored to Your Company, Product, or Event",
      "Visually Engaging to Attract Your Target Audience",
      "Delivered in Print-Ready & Digital Formats"
    ]
  }
]


},
// 6
{
  icon: <FaBoxOpen className="w-6 h-6" />,
  title: "Packaging Design",
  slug: "packaging-design",
  description: "“Packaging is the silent ambassador of your brand.”",
  overview: [
    `We craft packaging designs that speak volumes—visually compelling, functional, and aligned with your brand identity. Whether it's a sleek product box, eco-friendly wrapper, or label design, we ensure your product stands out on the shelf and connects with your audience.`,
    `We study your target market and competitors to deliver packaging that captivates.`,
    `Creative visuals paired with strategic messaging ensure high impact.`,
    `Designs are optimized for printing and production feasibility.`,
    `We balance aesthetics with practicality for different packaging materials.`,
    `You get multiple mockups and print-ready files in all formats.`
  ],
  points: [
    "Custom dieline and layout designs",
    "High-resolution print-ready files",
    "Product-matching color schemes"
  ],
  whyChooseUs: [
    {
      title: 'Print-Ready Deliverables',
      description: 'Our designs are delivered in CMYK and fit the printer’s specifications perfectly.',
      icon: 'printer',
    },
    {
      title: 'Industry Research',
      description: 'Each design is created with a deep understanding of current trends and market behavior.',
      icon: 'search',
    },
    {
      title: '3D Mockups Included',
      description: 'We provide realistic 3D previews to visualize your packaging before print.',
      icon: 'cube',
    },
    {
      title: 'Eco-Friendly Options',
      description: 'We offer guidance for sustainable and recyclable packaging solutions.',
      icon: 'leaf',
    }
  ],
  
  packages: [
  
  {
  name: "Packaging Design",
  price: "",
  features: [
    "Custom Box / Pouch / Wrapper Design",
    "Attractive Visuals to Boost Shelf Appeal",
    "Includes Branding: Logo, Colors, Fonts",
    "Essential Info: Ingredients, Instructions, Barcode",
    "Tailored for Your Product Type & Size",
    "Designed for Functionality & Usability",
    "Protection-Oriented Layout for Safe Storage",
    "Print-Ready Files in PDF / AI / PNG Format"
  ]
}
]

},
// 7

{
  icon: <FaUtensils className="w-6 h-6" />,
  title: "Restaurant Menu Card",
  slug: "restaurant-menu-card",
  description: "“A well-designed menu is a restaurant’s silent salesperson.”",
  overview: [
    `We design visually engaging menu cards that not only reflect your restaurant’s brand but also influence customer choices. Our menus are created to be both aesthetically pleasing and functionally organized for easy readability and customer satisfaction.`,
    `We incorporate your theme, cuisine, and branding into the design seamlessly.`,
    `Menu layout is optimized for upselling and readability.`,
    `We offer both print and digital versions—great for dine-in and QR scan menus.`,
    `Multilingual design support is available for wider customer reach.`,
    `Final delivery includes print-ready PDFs and editable source files.`
  ],
  points: [
    "Custom designs for dine-in, takeaway & digital menus",
    "Brand-aligned colors and fonts",
    "Organized layout with sections"
  ],
  whyChooseUs: [
    {
      title: 'Strategic Layouts',
      description: 'We organize your menu to maximize sales of high-margin items.',
      icon: 'list',
    },
    {
      title: 'Thematic Design',
      description: 'Every menu is customized to match your restaurant’s vibe and cuisine.',
      icon: 'palette',
    },
    {
      title: 'Multiple Formats',
      description: 'Get print-ready and digital-friendly versions in one go.',
      icon: 'file-text',
    },
    {
      title: 'Quick Delivery',
      description: 'Menus delivered within 48–72 hours depending on complexity.',
      icon: 'clock',
    }
  ],
  gallery: [
    "/re.jpg",
    "/re2.jpg",
    "/re3.jpg"
  ],
  packages: [
  {
    name: "Starter Combo",
    price: "",
    features: [
      "Logo Design (2 Concepts)",
      "Business Card Design (Front & Back)",
      "Letterhead Design",
      "Envelope Design",
      "Print-Ready Files (PDF, PNG, JPG)",
      "2 Revisions for Each Item",
      "Delivery in 3 Working Days"
    ]
  },
  {
    name: "Professional Combo",
    price: "",
    features: [
      "Logo Design (3 Concepts)",
      "Business Card & Letterhead Design",
      "Envelope & Invoice Template",
      "Email Signature & Social Media Banner",
      "Print-Ready + Editable Files",
      "3 Revisions for Each Item",
      "Delivery in 4 Working Days"
    ]
  },
  {
    name: "Corporate Identity Combo",
    price: "",
    features: [
      "Logo Design (4 Custom Concepts)",
      "Complete Stationery Set (Card, Letterhead, Envelope)",
      "Invoice Template & Email Signature (HTML & PNG)",
      "Folder, ID Card & Slide Cover Design",
      "Social Media Kit (Profile + Cover Image)",
      "Priority Delivery in 5 Working Days"
    ]
  }
]

},
// 8
  {
    icon: <FaFacebook className="w-6 h-6" />,
    title: "Social Media / Festival Poster",
    slug: "social-media-festival-poster",
    description: "Captivate your audience with vibrant and eye-catching posters tailored for social media and festive occasions.",
    overview: [
      `We design visually stunning posters that amplify your brand presence across social platforms and during festival seasons. Our creative approach ensures your message stands out and connects emotionally with your target audience.`,
      `Posters designed with platform-specific dimensions and resolution to maximize engagement.`,
      `Custom artwork and typography that reflect the spirit of your brand and festival theme.`,
      `We incorporate vibrant colors and festive elements to create compelling visuals.`,
      `Flexible formats suitable for digital sharing or print.`,
      `Quick turnaround with options for multiple revisions to ensure perfection.`,
    ],
    points: [
      "Customized designs for social media platforms",
      "Festive and thematic creativity",
      "High-resolution digital and print-ready files"
    ],
    whyChooseUs: [
      {
        title: 'Creative Experts',
        description: 'Our designers specialize in creating festive and social media posters that grab attention.',
        icon: 'users',
      },
      {
        title: 'Platform-Specific Design',
        description: 'We optimize every poster for the specific social media platform or festival requirements.',
        icon: 'smartphone',
      },
      {
        title: 'Unlimited Revisions',
        description: 'We keep working on your poster until it perfectly fits your vision.',
        icon: 'refresh-ccw',
      },
      {
        title: 'Fast Delivery',
        description: 'Get your poster designs within 48 hours after order confirmation.',
        icon: 'clock',
      },
    ],
   
    packages: [
  {
    name: "Social media small pack",
    price: "3500",
    features: [
      "upto 20 page Design",
      "Print-Ready PDF",
      "Delivery in 2 Working Days"
    ]
  },
  {
    name: "Social media medium pack",
    price: "5000",
    features: [
      "upto 35 Pages Design",
      "Print-Ready PDF",
      "Delivery in 2 Working Days"
      
    ]
  },
  {
    name: "Social media large pack",
    price: "5500",
    features: [
      "Up to 35 Pages Design",
      "Print-Ready PDF",
      "Delivery in 2 Working Days"
    ]
  },
  {
    name: "Festival poster small pack",
    price: "2000",
    features: [
      "20 Festival Poster Design",
      "Print-Ready PDF",
      "Delivery in 2 Working Days"
    ]
  },
  {
    name: "Festival poster medium pack",
    price: "2500",
    features: [
      "Up to 30 Festival Poster Design",
      "Print-Ready PDF",
      "Delivery in 2 Working Days"
    ]
  },
  {
    name: "Festival poster large pack",
    price: "4000",
    features: [
      "Up to 50 Festival Poster Design",
      "Print-Ready PDF",
      "Delivery in 2 Working Days"
    ]
  }
]

  },
  // 9
  {
    icon: <FaBullhorn className="w-6 h-6" />,
    title: "Billboard / Banner / Signboard Card",
    slug: "billboard-banner-signboard",
    description: "Make a bold statement with impactful billboard, banner, and signboard designs that capture attention instantly.",
    overview: [
      `Our billboard, banner, and signboard designs are crafted to deliver maximum visual impact in large formats. We blend creative messaging with bold visuals to ensure your outdoor or event advertising is effective and memorable.`,
      `Designs tailored to standard billboard and banner sizes, ensuring crisp and clear visibility.`,
      `Use of high-contrast colors and readable typography optimized for distance viewing.`,
      `We incorporate brand elements and key messages to boost recognition and recall.`,
      `Print-ready files prepared according to vendor specifications.`,
      `Timely delivery and multiple revision options to perfect your design.`,
    ],
    points: [
      "High-impact large format designs",
      "Readable typography and strong visuals",
      "Print-ready and vendor-compliant files"
    ],
    whyChooseUs: [
      {
        title: 'Large Format Specialists',
        description: 'Our expertise ensures your designs look great even on the biggest canvases.',
        icon: 'maximize',
      },
      {
        title: 'Brand Consistency',
        description: 'We keep your brand message clear and consistent across all outdoor media.',
        icon: 'layers',
      },
      {
        title: 'Revision Flexibility',
        description: 'We work with you to tweak designs until they meet your exact standards.',
        icon: 'refresh-ccw',
      },
      {
        title: 'Quick Turnaround',
        description: 'Delivering quality designs fast, so your campaign stays on schedule.',
        icon: 'clock',
      },
    ],
    gallery: [
      "/ba.jpg",
      "/ba2.jpg",
      "/ba3.jpg"
    ],
   packages: [
  {
    name: "Basic Outdoor Design",
    price: "",
    features: [
      "1 Billboard or Banner Design",
      "High-Resolution Output for Print",
      "2 Revisions",
      "Delivery in 2 Working Days",
      "Print-Ready File (PDF, PNG)"
    ]
  },
  {
    name: "Multi-Surface Pack",
    price: "",
    features: [
      "Up to 3 Sizes/Formats (Billboard, Banner, Signboard)",
      "Design Customization for Placement",
      "Mockup Previews",
      "3 Revisions",
      "Delivery in 4 Working Days"
    ]
  },
  {
    name: "Premium Outdoor Suite",
    price: "",
    features: [
      "Full Campaign Visuals (Billboard + Banner + Signboard)",
      "Size & Format Adjustments",
      "Commercial Rights + Editable Files",
      "Unlimited Revisions",
      "Priority Delivery in 5 Working Days"
    ]
  }
]

  },
  // 10
  {
    icon: <FaFileAlt className="w-6 h-6" />,
    title: "Flyer Design",
    slug: "flyer-design",
    description: "Captivate your audience with stunning and effective flyer designs.",
    overview: [
      `Flyers are powerful tools to spread your message quickly and creatively. Our flyer design services focus on combining eye-catching visuals with clear communication to boost your promotions, events, or product launches.`,
      `We tailor each flyer to your brand’s style and target audience.`,
      `Our team ensures balanced layouts that highlight key information.`,
      `High-quality print-ready files are delivered for smooth production.`,
      `We offer guidance on paper quality and finishing options.`,
    ],
    points: [
      "Custom flyer designs tailored to your campaign",
      "High-resolution print-ready files",
      "Fast delivery and multiple revisions"
    ],
    whyChooseUs: [
      {
        title: 'Creative Excellence',
        description: 'Our designers bring fresh and impactful ideas to every flyer.',
        icon: 'feather',
      },
      {
        title: 'Brand Consistency',
        description: 'Your flyer will reflect your brand’s unique personality perfectly.',
        icon: 'layers',
      },
      {
        title: 'Print Ready',
        description: 'We provide files formatted correctly for any printing process.',
        icon: 'printer',
      },
      {
        title: 'Quick Turnaround',
        description: 'Receive your flyer concepts fast without compromising quality.',
        icon: 'clock',
      },
    ],
    
    packages: [
  {
    name: "Basic Flyer",
    price: "",
    features: [
      "Single-Sided Flyer Design (A5 or A4)",
      "2 Design Concepts",
      "2 Revisions",
      "Print-Ready PDF + JPG",
      "Delivery in 2 Working Days"
    ]
  },
  {
    name: "Double-Sided Flyer",
    price: "",
    features: [
      "Front & Back Flyer Design",
      "Custom Layout & Icons",
      "Editable Source File (AI or PSD)",
      "3 Revisions",
      "Delivery in 3 Working Days"
    ]
  },
  {
    name: "Premium Flyer Pack",
    price: "",
    features: [
      "Up to 3 Flyers (Single or Double-Sided)",
      "Thematic Visuals & Typography",
      "Custom Icons/Illustrations",
      "Unlimited Revisions",
      "Editable + Print-Ready Files",
      "Delivery in 4 Working Days"
    ]
  }
]

  },
  // 11
  {
    icon: <FaIdCard className="w-6 h-6" />,
    title: "Business Card",
    slug: "business-card",
    description: "Make a lasting impression with professionally designed business cards.",
    overview: [
      `A business card is often the first tangible interaction with your brand. We craft distinctive and elegant business card designs that communicate professionalism and brand identity at a glance.`,
      `We pay attention to typography, layout, and brand colors to ensure your card stands out.`,
      `Our designs are print-ready and compatible with all standard card sizes and finishes.`,
      `We offer advice on paper types, embossing, foil stamping, and other premium options.`,
    ],
    points: [
      "Custom, brand-aligned business card designs",
      "Print-ready files in multiple formats",
      "Options for premium finishes and paper types"
    ],
    whyChooseUs: [
      {
        title: 'Attention to Detail',
        description: 'We perfect every element from typography to spacing for maximum impact.',
        icon: 'eye',
      },
      {
        title: 'Brand Alignment',
        description: 'Your business card will seamlessly match your overall brand identity.',
        icon: 'layers',
      },
      {
        title: 'Print-Ready Delivery',
        description: 'Files are optimized for any printing method you choose.',
        icon: 'printer',
      },
      {
        title: 'Fast & Reliable',
        description: 'Receive your design concepts quickly with dependable support.',
        icon: 'clock',
      },
    ],
    gallery: [
      "/vc.jpg",
      "/vc2.jpg",
      "/vc3.jpg"
    ],
   packages: [
    {
  name: "Business Card",
  price: "",
  features: [
    "A business card is a small printed card that contains essential information about a person or company.",
    "It is a key part of professional identity and is widely used for networking and business communication.",
    "Typically includes: Person’s name, Job title or designation, Company name, Contact details (phone, email, website), Company logo.",
    "Sometimes also includes: Tagline, Address, or QR code.",
    "Why Business Cards Matter: They provide a quick and convenient way to share contact info during meetings or networking events.",
    "They help make a strong first impression and reflect your brand’s professionalism.",
    "A well-designed card makes you memorable and represents the quality and identity of your business."
  ]
}

   ]

  },
  // 12
  {
    icon: <FaFileSignature className="w-6 h-6" />,
    title: "Letterhead",
    slug: "letterhead",
    description: "Professional letterhead designs to elevate your official communication.",
    overview: [
      `Your letterhead sets the tone for all official documents and correspondence. We design elegant and functional letterheads that reinforce your brand identity with every page.`,
      `Designs are tailored to your brand’s colors, fonts, and logo placement for consistency.`,
      `We deliver print-ready files compatible with various paper sizes and printer types.`,
      `Advice on paper quality and special printing options is available upon request.`,
    ],
    points: [
      "Custom branded letterhead designs",
      "Print-ready, high-resolution files",
      "Optimized for both digital and print use"
    ],
    whyChooseUs: [
      {
        title: 'Brand Consistency',
        description: 'Letterheads perfectly match your existing brand guidelines.',
        icon: 'layers',
      },
      {
        title: 'Professional Layouts',
        description: 'Clean, readable, and formal designs suited for official documents.',
        icon: 'file-text',
      },
      {
        title: 'Print & Digital Ready',
        description: 'Files optimized for both paper and electronic distribution.',
        icon: 'printer',
      },
      {
        title: 'Timely Delivery',
        description: 'Get your letterhead design quickly without compromising quality.',
        icon: 'clock',
      },
    ],
    gallery: [
      "/lh.jpg",
      "/lh3.jpg",
      "/lh2.jpg"
    ],
   packages: [
  {
  name: "Letterhead Design",
  price: "",
  features: [
    "Company Name, Logo, and Contact Info in Header",
    "Includes Address, Phone, Email, Website",
    "Optional Tagline or Registration Details",
    "Perfect for Invoices, Letters, and Legal Docs",
    "Reflects Your Brand Identity",
    "Adds Professionalism & Credibility",
    "Polished & Print-Ready Layout",
    "Delivered in PDF, PNG, or DOCX Format"
  ]
}
]

  },
  // 13
  {
    icon: <FaEnvelopeOpenText className="w-6 h-6" />,
    title: "Envelope",
    slug: "envelope",
    description: "Make your brand stand out with professionally designed envelopes that leave a lasting impression.",
    overview: [
      `Envelopes are more than just packaging — they are an extension of your brand's personality. We create custom envelope designs that reflect your corporate identity and elevate your communication materials. Whether it's for business correspondence, invitations, or marketing campaigns, our designs ensure your message arrives with style and professionalism.`,
      `We analyze your brand guidelines to create envelopes that are cohesive and visually appealing.`,
      `Our designers use high-quality printing techniques and material recommendations for the best results.`,
      `Custom sizes and finishes available to suit your specific needs and budgets.`,
      `We deliver print-ready files and can assist with print vendor coordination if required.`,
      `Ensure your envelopes make a memorable first impression before they are even opened.`,
    ],
    points: [
      "Custom envelope sizes and styles",
      "Brand-consistent design",
      "Print-ready files with bleed and crop marks"
    ],
    whyChooseUs: [
      {
        title: 'Brand Alignment',
        description: 'We ensure your envelope design matches your overall branding for a consistent look.',
        icon: 'layers',
      },
      {
        title: 'High-Quality Designs',
        description: 'Our designs focus on quality and attention to detail to impress your recipients.',
        icon: 'feather',
      },
      {
        title: 'Flexible Formats',
        description: 'We provide files suitable for various printing methods and vendors.',
        icon: 'file-text',
      },
      {
        title: 'Timely Delivery',
        description: 'We respect deadlines and deliver your designs on time, every time.',
        icon: 'clock',
      },
    ],
    gallery: [
      "/en2.jpg",
      "/en3.jpg",
      "/en.jpg",
    ],
   packages: [
  {
  name: "Envelope Design",
  price: "",
  features: [
    "Customized Layout with Company Logo",
    "Includes Business Name & Address",
    "Optional Tagline or Brand Elements",
    "Consistent with Brand Colors & Patterns",
    "Perfect for Letters, Invoices & Marketing Materials",
    "Enhances Brand Image & Recognition",
    "Creates a Professional First Impression",
    "Delivered in Print-Ready Format (PDF, PNG)"
  ]
}

]

  }
];

  const content = services.find(service => service.slug === slug);

  return (
    <>
    {selectedImage && (
  <div
    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    onClick={() => setSelectedImage(null)}
  >
    <img
      src={selectedImage}
      alt="Selected"
      className="max-w-full max-h-[90vh] rounded-lg shadow-lg border-4 border-white"
    />
  </div>
)}

      <div className="relative h-[70vh] bg-blue-900 text-white text-center overflow-hidden rounded-b-3xl">
        {/* Bubbles Animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 10 + 15 + 'px',
                height: Math.random() * 10 + 15 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.5, 0.9, 0.5],
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

      <div className="absolute hidden md:block top-1/2 right-4 transform -translate-y-1/2 z-10">
  <motion.div
    className="w-40 h-40 mr-55 bg-white rounded-md flex items-center justify-center cursor-pointer"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
    whileHover={{
      rotate: -360,
      scale: 1.2
    }}
  >
    {content?.icon && React.cloneElement(content.icon, {
      className: "w-12 h-12 text-blue-900",
      style: { transform: "rotate(-360deg)" }
    })}
  </motion.div>
</div>


            <div className="container mx-auto px-4 sm:px-8 relative z-10">
  <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">

          {/* Text content with animations */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1 
              className="text-4xl mt-50 md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {/* <span className="inline-block">
                <motion.span 
                  className="inline-block"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                   LOGO
                </motion.span>
              </span>{' '} */}
              {/* <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-200"
                initial={{ opacity: 0 }}    
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
               DESIGNING
              </motion.span> */}
              {content && (() => {
  const words = content.title.split(" ");
  const firstWord = words[0];
  const rest = words.slice(1).join(" ").toUpperCase();

  return (
    <>
      <motion.h1 
        className="text-4xl mt-50 md:text-6xl font-bold mb-6 leading-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {firstWord.toUpperCase()}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-200">
          {rest}
        </span>
      </motion.h1>

      <motion.p 
        className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        {content.description}
      </motion.p>
    </>
  );
})()}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
            </motion.p>      
          </motion.div>

          {/* Animation/Illustration */}
          {false && (
  <motion.div 
    className="lg:w-1/2 "
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
)}
        </div>
      </div>
      </div>
      {/* Service Details Section */}
      {content ? (
  <div className="max-w-6xl mx-auto px-6 py-16 text-left space-y-20 bg-white font-sans">
    
    {/* 🔹 Hero Section */}
    <section className="text-center mb-12">
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-blue-900 tracking-tight">
    What <span className="text-blue-900">We Offer</span>
  </h2>
    </section>

    {/* 🔹 Detailed Service Overview */}
    <section className="space-y-8 bg-gradient-to-br bg-blue-500 from-white to-blue-100 p-8 rounded-3xl shadow-sm">
  <div className="text-lg text-gray-800 leading-relaxed space-y-4">
    <p>
      At <span className="font-semibold text-blue-800">{content.title}</span>, we specialize in delivering high-quality, tailored solutions that align perfectly with your unique business goals. Our team combines creativity, strategy, and cutting-edge tools to bring your vision to life.
    </p>

   <ul className="bg-blue-100 text-blue-900 p-4 rounded-xl border-l-4 border-blue-500 shadow-sm list-disc list-inside space-y-2">
  {content.overview.map((point, idx) => (
    <li key={idx}>{point}</li>
  ))}
</ul>

  </div>

  <section className="space-y-6">
  <h2 className="text-3xl sm:text-7xl md:text-5xl font-bold text-blue-900 tracking-tight text-center md:text-left">
    Things to <span className="text-blue-500">Consider</span>
  </h2>
  <ul className="list-disc list-inside space-y-2 text-blue-900 text-base sm:text-lg font-medium pl-4">
    {content.points.map((point, idx) => (
      <li key={idx} className="leading-snug">
        {point}
      </li>
    ))}
  </ul>
</section>

</section>


    {/* 🔹 Why Choose Us */}
    
{content.whyChooseUs && (
  <section className=" bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-3xl p-10 shadow-xl">
    <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
      Why Choose Us?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {content.whyChooseUs.map((item, idx) => {
        const LucideIcon = Icons[item.icon] || Icons.Star;
        return (
          <div
            key={idx}
            className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="p-2 bg-blue-100 rounded-full text-blue-600">
              <LucideIcon size={24} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-800">
                {item.title}
              </h4>
              <p className="text-blue-700 text-sm">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  </section>
)} 
{/* 🔹 Gallery Section */}
{content.gallery && content.gallery.length > 0 && (
  <section className="pt-16 pb-8 px-6 bg-gradient-to-br from-white via-blue-50 to-white rounded-3xl shadow-xl">
    <h2 className="text-5xl font-bold text-blue-800 mb-10 text-center">
      Our <span className="text-blue-500">Creative Showcase</span>
    </h2>

    <div
      className={`max-w-6xl mx-auto gap-6 ${
        content.gallery.length === 1
          ? "flex justify-center"
          : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      }`}
    >
      {content.gallery.map((img, idx) => (
        <div
          key={idx}
          className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer"
          onClick={() => setSelectedImage(img)}
          style={{ maxWidth: content.gallery.length === 1 ? "400px" : "auto" }}
        >
          <img
            src={img}
            alt={`Gallery ${idx + 1}`}
            className="w-full h-64 object-cover"
          />
        </div>
      ))}
    </div>
  </section>
)}



    {/* 🔹 Packages Section */}
{content.packages && (
  <section className="pt-8 pb-16 bg-white px-4 md:px-8">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 text-center md:text-left">
    Packages Built to<span className="text-blue-500"> Skyrocket Your Brand</span>
  </h1>
    <div className="max-w-3xl mx-auto text-center mb-12">
      <p className="text-2xl mt-10 text-blue-800 font-medium">
        Whether you're just starting out or scaling to dominate your industry, we've crafted these packages to deliver unmatched value, creativity, and results. No fluff. Just real outcomes.
      </p>
    </div>

    {/* Section Title */}
    <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
      Tailored to fit your<span className="text-blue-500"> business needs!</span>
    </h2>

    {/* Packages Grid */}
   <div
  className={`grid gap-8 max-w-6xl mx-auto ${
    content.packages.length === 1 ? 'grid-cols-1 justify-center' : 'grid-cols-1 md:grid-cols-3'
  }`}
>
  {content.packages.map((pkg, idx) => {
    const whatsappMessage = `Hi Brand Expert, I'm interested in your ${pkg.name}of your ${content.title}. Can you tell me more about it?`;
    const whatsappLink = `https://wa.me/919173393706?text=${encodeURIComponent(whatsappMessage)}`;

    return (
      <div
        key={idx}
        className="bg-blue-50 border border-blue-100 rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300 relative"
      >
        {/* Highlight Badge */}
        {(idx === 2 || idx === 5 )&& content.packages.length > 2 && (
          <div className="absolute top-1 right-2">
            <span className="bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
              🌟 Best Value
            </span>
          </div>
        )}

        {/* Package Name */}
        <h3 className="text-xl font-bold text-blue-900 mb-2">{pkg.name}</h3>

        {/* Price */}
        <p className="text-3xl font-extrabold text-blue-700 mb-4">{pkg.price}</p>

        {/* Features */}
        <ul className="list-disc list-inside text-blue-800 space-y-2 pl-4 mb-6">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex gap-2 items-start">
              <span className="text-green-600 text-lg">✔</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* WhatsApp Button */}
        <div className="text-center">
          <button
            onClick={() => window.open(whatsappLink, "_blank", "noopener,noreferrer")}
            className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-full font-semibold transition inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Get Package
          </button>
        </div>
      </div>
    );
  })}
</div>

  </section>
)}


{/* fotter  */}
<section className="mt-20 bg-blue-50 py-12 px-6 rounded-3xl shadow-inner text-center">
  <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
    Still Have <span className="text-blue-500"> Any Questions? </span>
  </h3>
  <p className="text-blue-800 mb-6 text-base md:text-lg">
    We’re here to help. Feel free to reach out and we’ll guide you through your perfect solution with no additional cost.
  </p>
  <p className="text-blue-800 text-3xl mb-6 md:text-lg">
    Press the below button to contact us 
  </p>
  <button
    onClick={handleQuestionClick}
    className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm md:text-base py-3 px-6 rounded-full shadow-lg transition duration-300"
  >
    <Mail className="w-5 h-5" />
    Contact Us
  </button>
</section>

  </div>
) : (
  <div className="text-center py-20 text-gray-400">
    <p>Service not found.</p>
  </div>
)}

    </>
  );
}
  