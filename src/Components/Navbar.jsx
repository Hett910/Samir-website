// src/components/Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-white/80 sticky top-0 z-50 shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:py-5">
        {/* Logo image */}
        <div className="flex items-center cursor-pointer select-none">
          <img
            src="/logo.jpeg"  
            alt="Brand Logo"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-12 text-lg font-semibold text-[#3054aa]">
          {["home", "services", "about", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="relative group hover:text-[#1e40af] transition-colors duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-[#3054aa] to-[#1e40af] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#3054aa] focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-inner border-t border-gray-200">
          {["home", "services", "about", "contact"].map((item) => (
            <li key={item} className="border-b border-gray-100">
              <a
                href={`#${item}`}
                className="block px-6 py-4 text-[#3054aa] font-semibold hover:bg-gradient-to-r hover:from-[#3054aa]/10 hover:to-[#1e40af]/10 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
