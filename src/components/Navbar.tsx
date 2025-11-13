"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

interface NavItem {
  id: string;
  label: string;
}

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    { id: "gallery", label: "גלריה" },
    { id: "services", label: "שירותים" },
    { id: "faq", label: "שאלות נפוצות" },
    { id: "contact", label: "צור קשר" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToSection(id);
    }
  };

  return (
    <motion.nav
      id="main-navigation"
      ref={navRef}
      dir="rtl"
      className={`fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          className="text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4ECDC4] rounded-md">
            <h1 className="text-2xl font-bold text-[#4ECDC4]">
              סטודיו לצילום ביתא
            </h1>
            <p className="text-sm text-gray-600 hidden md:block">
              צילום מקצועי בסטנדרטים גבוהים
            </p>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex items-center space-x-0 space-x-reverse space-y-0 rtl:space-x-reverse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, staggerChildren: 0.1 }}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                className="px-4 py-2 mx-2 text-gray-700 hover:text-[#4ECDC4] focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:ring-offset-2 rounded-md transition-colors duration-300 text-right"
                aria-label={`ניווט אל ${item.label}`}
                tabIndex={0}
              >
                <span className="relative">
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4ECDC4]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-700 hover:text-[#4ECDC4] focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:ring-offset-2 rounded-md"
            aria-expanded={isOpen}
            aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full right-0 w-full bg-white shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-2 flex flex-col items-end" dir="rtl">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="w-full"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                    className="w-full text-right py-3 px-4 text-gray-700 hover:bg-gray-100 hover:text-[#4ECDC4] focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:ring-inset rounded-md transition-colors duration-300"
                    aria-label={`ניווט אל ${item.label}`}
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;