"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Container } from "./ui/Container";
import { ExternalLink, Code, Target, Zap, CheckCircle2, FolderCode, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "S7 Shop - E-commerce Store",
    description: "A premium full-featured online store with real-time inventory and seamless checkout.",
    tags: ["Next.js", "Stripe", "Prisma"],
    image: "/s7_shop_preview_1777451456900.png",
    link: "/projects/s7-shop",
    challenge: "Handling high-concurrency during flash sales.",
    action: "Implemented Redis caching and optimistic UI updates.",
    result: "Reduced server load by 40% and improved CX."
  },
  {
    title: "No Trainer - AI Fitness App",
    description: "An intelligent fitness companion that replaces the need for a physical trainer with AI plans.",
    tags: ["React", "Python", "Tailwind"],
    image: "/no_trainer_preview_1777451535332.png",
    link: "/projects/no-trainer",
    challenge: "Simplifying complex workout data for everyday users.",
    action: "Developed interactive dashboards and dynamic workout builders.",
    result: "Helped users increase workout consistency by 35%."
  },
  {
    title: "Elevytrix - Software Solutions",
    description: "A modern software development agency specializing in high-performance web applications.",
    tags: ["WebRTC", "Socket.io", "Node.js"],
    image: "/elevytrix_preview_1777451566675.png",
    link: "/projects/elevytrix",
    challenge: "Conveying technical expertise through a creative digital presence.",
    action: "Built a modular design system and integrated high-speed communication layers.",
    result: "Increased client inquiries by 50% through improved UX."
  },
  {
    title: "Chattha Global Family",
    description: "A sophisticated community platform designed to preserve heritage and foster global connections.",
    tags: ["Next.js", "Community", "Scale"],
    image: "/chattha_preview.png",
    link: "/projects/chattha-global",
    challenge: "Preserving cultural heritage while providing modern networking tools.",
    action: "Implemented a global member directory and secure community portals.",
    result: "Successfully connected over 5,000 members across 12 countries."
  },
  {
    title: "Logismart Solutions",
    description: "An intelligent logistics platform for real-time fleet tracking and supply chain optimization.",
    tags: ["React", "Logistics", "IoT"],
    image: "/logismart_preview.png",
    link: "/projects/logismart",
    challenge: "Processing real-time GPS data for large-scale fleets.",
    action: "Developed a high-speed tracking dashboard and smart inventory system.",
    result: "Improved delivery efficiency by 25% for enterprise clients."
  }
];

export function Projects() {
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
    <section id="projects" ref={containerRef} className="section-padding relative overflow-hidden bg-[#020617]">
      {/* Dynamic Background Spotlights */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/4" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none translate-y-1/4 translate-x-1/4" />

      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24 relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-serif mb-6 tracking-tight"
            >
              Selected <span className="text-blue-500 italic">Projects</span>
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]" 
            />
          </div>

          <div className="relative space-y-24">
            {/* Background Static Line */}
            <div className="absolute left-[1.75rem] md:left-1/2 before:top-4 before:bottom-4 -translate-x-1/2 w-[2px] h-full bg-white/[0.05]" />
            
            {/* Active Moving Line */}
            <motion.div 
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute left-[1.75rem] md:left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-blue-600 via-teal-400 to-transparent z-10"
            />

            {projects.map((project, i) => (
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
                {/* Timeline Marker */}
                <div className="absolute left-[1.75rem] md:left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#020617] border border-white/10 flex items-center justify-center text-blue-500 z-20 shadow-2xl group transition-all duration-500">
                  <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-tr from-blue-600 to-teal-400 opacity-0 group-hover:opacity-50 transition-opacity" />
                  <FolderCode size={20} className="relative z-10 group-hover:scale-110 transition-transform" />
                  <span className="absolute inset-0 rounded-xl animate-ping bg-blue-500/10 -z-10" />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-3rem)] pl-20 md:pl-0">
                  <Link href={project.link || "#"}>
                    <motion.div 
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="glass rounded-[2rem] p-6 card-hover border-white/5 relative group overflow-hidden cursor-pointer"
                    >
                      {/* Project Image Preview */}
                      <div className="aspect-video w-full mb-6 rounded-xl overflow-hidden relative border border-white/5 bg-zinc-900">
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
                      </div>

                      <div className="relative z-10">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                        <p className="text-zinc-400 mb-6 leading-relaxed text-[13px]">
                          {project.description}
                        </p>

                        <div className="space-y-3 mb-6">
                          <div className="flex gap-3 items-start group/item">
                            <Target size={14} className="text-blue-500/50 mt-0.5" />
                            <p className="text-[11px] text-zinc-500 leading-relaxed"><span className="text-zinc-300 font-bold">CHALLENGE:</span> {project.challenge}</p>
                          </div>
                          <div className="flex gap-3 items-start group/item">
                            <Zap size={14} className="text-blue-500/50 mt-0.5" />
                            <p className="text-[11px] text-zinc-500 leading-relaxed"><span className="text-zinc-300 font-bold">ACTION:</span> {project.action}</p>
                          </div>
                          <div className="flex gap-3 items-start group/item">
                            <CheckCircle2 size={14} className="text-blue-500/50 mt-0.5" />
                            <p className="text-[11px] text-zinc-500 leading-relaxed"><span className="text-zinc-300 font-bold">RESULT:</span> {project.result}</p>
                          </div>
                        </div>

                        <div className="flex gap-4 pt-4 border-t border-white/5">
                          <div className="flex items-center gap-2 text-[11px] font-bold text-zinc-400 group-hover:text-white transition-colors">
                            <Code size={14} /> Source
                          </div>
                          <div className="flex items-center gap-2 text-[11px] font-bold text-zinc-400 group-hover:text-white transition-colors">
                            <ExternalLink size={14} /> View Details
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </div>

                <div className="hidden md:block w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
