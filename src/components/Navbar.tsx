// components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { Menu, X, Ship } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener to track when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-md mt-0" : "bg-transparent mt-6"
      }`}
    >
      <div className="container mx-auto">
        <div
          className={`mx-auto flex items-center justify-between h-16 transition-all ${
            scrolled
              ? "w-full px-4"
              : "w-auto bg-gray-900/90 px-4 shadow-lg max-w-3xl rounded-[20px] border border-blue-900/30"
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <Ship className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold text-white">
                Zhonghae
              </span>
            </a>
          </div>

          {/* Centered Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center justify-center space-x-8">
              <a
                href="#company"
                className="text-gray-300 hover:text-white font-medium"
              >
                회사소개
              </a>
              <a
                href="#services"
                className="text-gray-300 hover:text-white font-medium"
              >
                사업소개
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white font-medium"
              >
                고객센터
              </a>
            </div>
          </div>

          {/* Right side - inquiry button */}
          <div className="hidden md:block">
            <a
              href="#inquiry"
              className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
            >
              상담 문의
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-6 bg-gray-900 mt-2 rounded-[20px] shadow-lg border border-blue-900/30">
            <div className="flex flex-col space-y-4">
              <a href="#company" className="text-gray-300 hover:text-white">
                회사소개
              </a>
              <a href="#services" className="text-gray-300 hover:text-white">
                사업소개
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white">
                고객센터
              </a>
              <a
                href="#inquiry"
                className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors text-center"
              >
                상담 문의
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
