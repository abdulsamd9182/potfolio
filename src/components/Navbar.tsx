"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Basic active link detection
      const sections = navLinks.map(link => link.name.toLowerCase());
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveLink(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "flex items-center gap-2 px-2 py-2 rounded-full glass transition-all duration-500",
          isScrolled ? "scale-95 shadow-2xl shadow-blue-500/20" : "scale-100"
        )}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-teal-400 p-[2px] ml-1">
          <div className="w-full h-full rounded-full bg-[#020617] flex items-center justify-center text-[10px] font-bold">
            AS
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                activeLink === link.name ? "text-white" : "text-zinc-400 hover:text-white"
              )}
            >
              {activeLink === link.name && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              {link.name}
            </Link>
          ))}
        </div>


        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center text-zinc-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-0 right-0 mt-4 px-4 lg:hidden"
          >
            <div className="glass rounded-3xl p-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-lg font-medium px-4 py-3 rounded-2xl transition-all",
                    activeLink === link.name ? "bg-blue-600 text-white" : "text-zinc-400 hover:bg-white/5"
                  )}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
