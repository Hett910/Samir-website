// src/components/Footer.jsx
// export default function Footer() {
//   return (
//     <footer className="bg-[#3054aa] text-white py-6 rounded-t-2xl">
//       <div className="max-w-6xl mx-auto text-center">
//         <p>&copy; {new Date().getFullYear()} Brand Expert. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }
import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaTwitter,
} from 'react-icons/fa';

const links = {
  "Products": ["Templates","Social Media Templates","Brochure Templates","Business Card Templates"],
  "Services": ["Logo Design", "Web-Design", "UI/UX Design","Packaging Design","More"],
  "Support": ["Advice", "Help Center", "Contact Support"],
  "Company": ["About Us", "Contact Us", "Affiliates", "Resources"],
};

const socialIcons = [
  {
    name: 'Facebook',
    icon: <FaFacebookF />,
    url: 'https://www.facebook.com/profile.php?id=61550833618025', // Your actual link
    bg: 'bg-blue-100',
    hover: 'hover:bg-blue-200',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/brand_expertindia?igsh=MWt6azBhazlyNjlt&utm_source=qr', // Replace with your Instagram if available
    bg: 'bg-pink-100',
    hover: 'hover:bg-pink-200',
  },
  {
    name: 'Google',
    icon: <FaGoogle />,
    url: 'https://www.google.com/search?sa=X&sca_esv=0451c88ea934734a&rlz=1C1RXQR_enIN1087IN1087&biw=1920&bih=945&sxsrf=AE3TifOmGfcGSamyDJccICywatkZTqnuqw:1749229060716&kgmid=/g/11y45zczp5&q=Brand+Expert&shndl=30&shem=lcuae,uaasie&source=sh/x/loc/uni/m1/1&kgs=cb3d4f8a0476dc48', 
    bg: 'bg-red-100',
    hover: 'hover:bg-red-200',
  },
  {
    name: 'Twitter',
    icon: <FaTwitter />,
    url: 'https://x.com/brande76352?s=21', // Optional
    bg: 'bg-blue-50',
    hover: 'hover:bg-blue-100',
  },
];


const GeneratedComponent = () => {
  return (
    <footer className="bg-white text-gray-800 py-16 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">

        {/* Brand */}
        <div className="flex flex-col items-start">
          <a href="/" className="inline-block">
            <img 
              src="logo.jpeg" 
              alt="Brand Logo"
              className="h-auto w-auto mt-15 "  
            />
          </a>
          {/* <p className="mt-3 ml-15  text-lg text-black-500">Brand Makers</p>  */}
        </div>

        
{Object.entries(links).map(([title, items], idx) => (
  <div key={idx}>
    <h3 className="text-lg font-semibold text-gray-900 tracking-wide uppercase mb-4">
      {title}
    </h3>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i}>
  <a
  href="#"
  className="group relative inline-block pb-1 text-gray-500 text-lg transition-colors duration-200 hover:text-blue-600"
>
  {item}
  <span
    className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-600 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
  />
</a>

</li>

      ))}
    </ul>
  </div>
))}


      </div>

      {/* Divider */}
      <div className="mt-16 border-t border-gray-100 pt-8">
        {/* Socials */}
        <div className="flex justify-center space-x-6 mb-6">
          {socialIcons.map((social, idx) => (
  <div key={idx} className="relative group text-center">
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-10 h-10 flex items-center justify-center rounded-full shadow-sm transition-all duration-200 transform ${social.bg} ${social.hover} hover:scale-110`}
      aria-label={social.name}
      title={social.name}
    >
      <span className="text-xl text-gray-700">{social.icon}</span>
    </a>
    <span
      className="absolute left-1/2 -translate-x-1/2 text-xs text-gray-600 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300"
    >
      {social.name}
    </span>
  </div>
))}

        </div>

        {/* Copyright */}
        <p className="text-center text-lg text-gray-400"> {/* Bigger copyright text */}
          © {new Date().getFullYear()} Brand Expert. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default GeneratedComponent;
