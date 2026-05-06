"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import Image from "next/image";

const skills = [
  "Next.js", "React", "TypeScript", "Tailwind CSS",
  "Node.js", "PostgreSQL", "Framer Motion", "UI Design"
];

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-xs font-bold text-teal-400 mb-8 tracking-widest uppercase">
              ABOUT ME
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight font-serif">
              Crafting <span className="text-blue-500 italic">solutions</span> through code.
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              I am a **Software Engineer** with a passion for building 
              end-to-end solutions. From designing intuitive user interfaces 
              to architecting robust server-side systems, I enjoy the challenge 
              of creating seamless digital products.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, i) => (
                <div 
                  key={i}
                  className="p-4 rounded-2xl glass text-center group hover:border-blue-500/30 transition-all"
                >
                  <p className="text-sm font-semibold text-zinc-300 group-hover:text-blue-400 transition-colors">{skill}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden glass p-3">
              <div className="relative w-full h-full rounded-[2rem] bg-zinc-900 overflow-hidden border border-white/5">
                <Image 
                  src="/profile.jpg" 
                  alt="Abdul Samad" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="absolute -bottom-6 md:-bottom-8 -left-2 md:-left-8 glass p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl shadow-blue-500/20"
            >
              <div className="text-2xl md:text-4xl font-bold text-blue-500">5+</div>
              <div className="text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold mt-1 md:mt-2">Years Exp.</div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="absolute -top-6 md:-top-8 -right-2 md:-right-8 glass p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl shadow-teal-500/20"
            >
              <div className="text-2xl md:text-4xl font-bold text-teal-400">50+</div>
              <div className="text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold mt-1 md:mt-2">Projects Done</div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
