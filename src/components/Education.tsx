"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    school: "University of South Asia",
    degree: "BS in Computer Science",
    period: "February 2022 - January 2026",
    location: "Lahore, PK",
    details: [
      "Focused on Core Computer Science principles and Software Engineering.",
      "Developing a deep understanding of modern web technologies and AI integration.",
      "Consistently maintaining a strong academic record while working on practical projects."
    ]
  }
];

export function Education() {
  return (
    <section id="education" className="section-padding relative overflow-hidden bg-[#020617]">
      {/* Background Spotlights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none translate-x-1/4" />
      
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold font-serif mb-6"
            >
              Education & <span className="text-teal-400 italic">Learning</span>
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              className="h-1 bg-teal-500 mx-auto rounded-full shadow-[0_0_15px_rgba(45,212,191,0.5)]" 
            />
          </div>

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <motion.div 
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="glass rounded-[2rem] p-6 md:p-8 card-hover border-white/5 relative overflow-hidden group"
                >
                  {/* Decorative Icon Background */}
                  <div className="absolute -right-12 -bottom-12 text-white/[0.03] group-hover:text-teal-500/5 transition-colors duration-700">
                    <GraduationCap size={300} strokeWidth={1} />
                  </div>

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shadow-xl shadow-teal-500/5 group-hover:scale-110 transition-transform duration-500">
                          <GraduationCap size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">{edu.degree}</h3>
                          <p className="text-zinc-500 font-semibold text-sm">{edu.school}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2 md:text-right">
                        <div className="inline-flex items-center gap-2 text-zinc-500 text-[11px] md:justify-end font-medium">
                          <Calendar size={12} className="text-teal-500/40" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="inline-flex items-center gap-2 text-zinc-500 text-[11px] md:justify-end font-medium">
                          <MapPin size={12} className="text-teal-500/40" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3 max-w-2xl">
                      {edu.details.map((detail, idx) => (
                        <div key={idx} className="flex gap-4 items-start group/item">
                          <div className="mt-2 w-1.5 h-[2px] rounded-full bg-teal-500/30 group-hover/item:bg-teal-400 group-hover/item:w-3 transition-all duration-300" />
                          <p className="text-zinc-400 leading-relaxed text-[13px] group-hover/item:text-zinc-300 transition-colors">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-500 group-hover:w-full transition-all duration-700" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
