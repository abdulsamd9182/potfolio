"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Container } from "./ui/Container";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    company: "XenithCode",
    role: "Frontend Developer Intern",
    period: "Jun 2025 - September 2025",
    description: "Worked on React.js-based web applications, focusing on responsive UI and modern styling.",
    highlights: [
      "Built responsive user interfaces using Tailwind CSS and shadcn/ui components.",
      "Implemented routing, protected routes, and API integration for authentication.",
      "Developed interactive dashboards and gained exposure to Next.js project structures."
    ],
    color: "blue"
  },
  {
    company: "Fiverr",
    role: "Logo Designer (Freelance)",
    period: "September 2020 - December 2021",
    description: "Provided custom branding and logo design solutions for global clients.",
    highlights: [
      "Designed unique, high-quality logos tailored to client brand identities.",
      "Managed multiple client projects and maintained high satisfaction ratings.",
      "Developed a strong eye for visual aesthetics and creative problem-solving."
    ],
    color: "purple"
  },
  {
    company: "SQA Intern (Theoretical)",
    role: "Software Quality Assurance Trainee",
    period: "Theoretical Training",
    description: "Gained comprehensive knowledge of software testing methodologies and lifecycles.",
    highlights: [
      "Studied SDLC, STLC, and Bug Life Cycle concepts in depth.",
      "Learned fundamentals of Manual Testing: Functional, Regression, Smoke, and UI testing.",
      "Understood QA documentation, reporting processes, and severity/priority metrics."
    ],
    color: "teal"
  }
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" ref={containerRef} className="section-padding relative overflow-hidden bg-[#020617]">
      {/* Dynamic Background Spotlights */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none translate-y-1/4 -translate-x-1/4" />
      
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute inset-0 -z-10 bg-blue-500/5 blur-3xl rounded-full"
            />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-serif mb-6 tracking-tight"
            >
              Professional <span className="text-blue-500 italic">Journey</span>
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]" 
            />
          </div>

          <div className="relative space-y-20">
            {/* Background Static Line */}
            <div className="absolute left-[1.75rem] md:left-1/2 before:top-4 before:bottom-4 -translate-x-1/2 w-[2px] h-full bg-white/[0.05]" />
            
            {/* Active Moving Line */}
            <motion.div 
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute left-[1.75rem] md:left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-blue-600 via-teal-400 to-transparent z-10"
            />
            
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-24 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Marker with Pulse Effect */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-[#020617] border border-white/10 flex items-center justify-center text-blue-500 z-20 shadow-2xl group transition-all duration-500">
                  <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-tr from-blue-600 to-teal-400 opacity-0 group-hover:opacity-50 transition-opacity" />
                  <Briefcase size={20} className="relative z-10 group-hover:scale-110 transition-transform" />
                  
                  {/* Decorative Pulse */}
                  <span className="absolute inset-0 rounded-xl animate-ping bg-blue-500/10 -z-10" />
                </div>

                {/* Content Card with Enhanced Glass & Border */}
                <div className="w-full md:w-[calc(50%-3rem)] pl-20 md:pl-0">
                  <motion.div 
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="glass rounded-[2rem] p-6 md:p-8 card-hover border-white/5 relative group overflow-hidden"
                  >
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Border Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex flex-col gap-3 mb-6 relative z-10">
                      <div className="inline-flex items-center gap-2 text-blue-400 font-bold text-[10px] tracking-widest uppercase bg-blue-500/5 w-fit px-3 py-1 rounded-full border border-blue-500/10">
                        <Calendar size={12} className="text-blue-500" />
                        {exp.period}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">{exp.role}</h3>
                        <p className="text-zinc-500 font-semibold text-sm flex items-center gap-2">
                          <span className="w-4 h-[1px] bg-white/20" />
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-zinc-400 mb-8 leading-relaxed text-[13px] relative z-10">
                      {exp.description}
                    </p>

                    <div className="grid gap-3 relative z-10">
                      {exp.highlights.map((item, idx) => (
                        <div key={idx} className="flex gap-3 items-start group/item">
                          <div className="mt-1.5 w-1.5 h-[2px] rounded-full bg-blue-500/30 group-hover/item:bg-blue-400 group-hover/item:w-4 transition-all duration-300" />
                          <p className="text-[11px] text-zinc-500 group-hover/item:text-zinc-300 transition-colors leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
