
"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { ArrowRight, Download, Code, Globe, Mail, X } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 px-4 md:px-8 lg:pl-12 overflow-hidden">
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl md:text-4xl font-bold tracking-tight mb-4 leading-tight font-serif"
            >
              Abdul Samad <span className="text-blue-600">.</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-xl font-semibold text-zinc-400 mb-8"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-md text-zinc-500 mb-10 max-w-xl leading-relaxed"
            >
              I specialize in crafting high-performance web applications from
              pixel-perfect frontends to scalable backend architectures.
              Let's build something exceptional together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <Link href="#projects">
                <button className="group px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-semibold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                  View My Work
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-72 h-72 md:w-[28rem] md:h-[28rem]"
            >
              {/* Rotating Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-blue-500/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-dashed border-teal-500/20 rounded-full"
              />
              <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-blue-600 to-teal-400 p-[2px]">
                <div className="relative w-full h-full rounded-full bg-[#020617] overflow-hidden">
                  <Image
                    src="/1.jpeg"
                    alt="Abdul Samad"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-16 rounded-full bg-blue-600/20 blur-[80px] -z-10" />
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Bottom Separator & Scroll Indicator */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute left-1/2 -translate-x-1/2 -top-12 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-blue-600 to-transparent" />
        </motion.div>
      </div>

      {/* Decorative Blur Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-teal-600/5 blur-[120px] rounded-full" />
    </section>
  );
}
