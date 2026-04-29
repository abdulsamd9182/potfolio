"use client";

import { Container } from "./ui/Container";
import { Mail, Phone, MapPin, Code, Globe, X, ArrowUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-16 pb-8 relative overflow-hidden bg-[#020617] border-t border-white/5">
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-teal-400 p-[1px] mb-6">
              <div className="w-full h-full rounded-full bg-[#020617] flex items-center justify-center text-[10px] font-bold tracking-tighter">
                AS
              </div>
            </div>
            <p className="text-zinc-500 text-[13px] leading-relaxed mb-8 max-w-xs">
              Crafting high-performance digital experiences through clean code and intuitive design. Specialized in full-stack development and modern web architectures.
            </p>
            <div className="flex gap-3">
              {[Code, Globe, X, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, backgroundColor: "rgba(37, 99, 235, 0.1)" }}
                  className="w-9 h-9 rounded-xl glass border-white/5 flex items-center justify-center text-zinc-500 hover:text-blue-500 transition-all"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:pl-10">
            <h3 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] mb-8">Navigation</h3>
            <ul className="space-y-4">
              {["Home", "Services", "Education", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <Link 
                    href={`#${link.toLowerCase()}`}
                    className="text-zinc-500 hover:text-blue-400 transition-colors text-[13px] font-medium flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-5">
            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[13px] text-zinc-500 group">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/5 border border-white/5 flex items-center justify-center text-blue-500">
                    <Mail size={14} />
                  </div>
                  <span className="truncate">abdulsamad...gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-[13px] text-zinc-500 group">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/5 border border-white/5 flex items-center justify-center text-teal-400">
                    <Phone size={14} />
                  </div>
                  <span>+92 3244520651</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[13px] text-zinc-500 group">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/5 border border-white/5 flex items-center justify-center text-purple-400">
                    <MapPin size={14} />
                  </div>
                  <span>Lahore, Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-zinc-600 text-[10px] tracking-widest font-bold uppercase">
              © {new Date().getFullYear()} ABDUL SAMAD.
            </p>
            <div className="hidden md:block h-3 w-[1px] bg-white/10" />
            <p className="text-zinc-600 text-[10px] tracking-widest font-bold uppercase">
              ALL RIGHTS RESERVED.
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] font-bold text-zinc-500 hover:text-white transition-colors uppercase tracking-[0.2em]"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-all border border-white/5 group-hover:border-blue-500">
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </Container>
    </footer>
  );
}
