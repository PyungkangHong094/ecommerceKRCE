// components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
        scrolled ? "bg-white shadow-md mt-0" : "bg-transparent mt-6"
      }`}
    >
      <div className="container mx-auto">
        <div
          className={`mx-auto flex items-center justify-center h-16 transition-all ${
            scrolled
              ? "w-full"
              : "w-auto bg-white px-4 shadow-md max-w-3xl rounded-[20px]"
          }`}
        >
          {/* Centered Navigation */}
          <div className="flex items-center justify-center space-x-2 md:space-x-10">
            {/* Logo (only show on scrolled or mobile) */}
            <div
              className={`flex items-center ${
                scrolled ? "block" : "hidden"
              } md:hidden`}
            >
              <a href="/" className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="text-red-500"
                >
                  <rect
                    x="4"
                    y="4"
                    width="12"
                    height="12"
                    fill="currentColor"
                  />
                  <rect
                    x="16"
                    y="16"
                    width="12"
                    height="12"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>

            {/* Logo on desktop non-scrolled */}
            <div
              className={`flex-shrink-0 hidden md:block ${
                scrolled ? "md:hidden" : ""
              }`}
            >
              <a href="/" className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="text-red-500"
                >
                  <rect
                    x="4"
                    y="4"
                    width="12"
                    height="12"
                    fill="currentColor"
                  />
                  <rect
                    x="16"
                    y="16"
                    width="12"
                    height="12"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>

            {/* Menu Items - Desktop */}
            <a
              href="#company"
              className="hidden md:block text-gray-700 hover:text-gray-900 font-medium"
            >
              회사소개
            </a>
            <a
              href="#services"
              className="hidden md:block text-gray-700 hover:text-gray-900 font-medium"
            >
              사업소개
            </a>
            <a
              href="#contact"
              className="hidden md:block text-gray-700 hover:text-gray-900 font-medium"
            >
              고객센터
            </a>
            <a
              href="#inquiry"
              className="hidden md:block bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              상담 문의
            </a>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-6 bg-white mt-2 rounded-[20px] shadow-lg">
            <div className="flex flex-col space-y-4">
              <a href="#company" className="text-gray-700 hover:text-gray-900">
                회사소개
              </a>
              <a href="#services" className="text-gray-700 hover:text-gray-900">
                사업소개
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">
                고객센터
              </a>
              <a
                href="#inquiry"
                className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors text-center"
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
