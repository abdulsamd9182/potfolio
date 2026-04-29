"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExternalLink, ArrowLeft, Zap, Target, ShieldCheck, Code2, Globe, Rocket, Layout } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ElevytrixPage() {
  const features = [
    {
      title: "Custom Solutions",
      description: "Tailored software development designed to solve specific business problems.",
      icon: <Code2 size={20} className="text-blue-500" />
    },
    {
      title: "Scalable Infrastructure",
      description: "Cloud-native architectures that grow seamlessly with your user base.",
      icon: <Globe size={20} className="text-teal-400" />
    },
    {
      title: "Premium Design",
      description: "High-end UI/UX design that focuses on user engagement and conversion.",
      icon: <Layout size={20} className="text-blue-600" />
    },
    {
      title: "Fast Delivery",
      description: "Agile methodologies ensuring rapid deployment without compromising quality.",
      icon: <Rocket size={20} className="text-teal-500" />
    }
  ];

  return (
    <main className="relative bg-[#020617] text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section for Project */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        <Container>
          <Link href="/#projects" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-10 text-[13px] group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-bold text-blue-400 mb-6 tracking-widest uppercase">
                SOFTWARE AGENCY
              </div>
              <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight">
                Elevytrix <span className="text-blue-500 italic">Dev Solutions</span>
              </h1>
              <p className="text-[15px] text-zinc-400 mb-8 leading-relaxed max-w-xl">
                Elevytrix is a modern software development agency specializing in high-performance web applications and enterprise-grade solutions. 
                We bridge the gap between complex technology and intuitive user experiences.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.elevytrixdev.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-all flex items-center gap-3 shadow-xl shadow-blue-600/20"
                >
                  Live Preview <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image 
                src="/elevytrix_preview_1777451566675.png" 
                alt="Elevytrix Preview"
                fill
                className="object-cover opacity-80"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Details & Features */}
      <section className="py-16 bg-white/[0.01]">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass p-8 rounded-[2rem] border-white/5">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-3">
                <Target size={20} className="text-blue-500" /> The Challenge
              </h2>
              <p className="text-zinc-500 leading-relaxed text-[13px]">
                Building a brand presence that conveys both technical expertise and creative innovation while maintaining a highly accessible digital footprint.
              </p>
            </div>
            <div className="glass p-8 rounded-[2rem] border-white/5">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-3">
                <ShieldCheck size={20} className="text-teal-400" /> The Solution
              </h2>
              <p className="text-zinc-500 leading-relaxed text-[13px]">
                A cutting-edge tech stack combined with a modular design system that allows for rapid iteration and deployment of high-quality software products.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl glass border-white/5 hover:border-blue-500/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <div className="scale-75">{feature.icon}</div>
                </div>
                <h3 className="text-md font-bold mb-3">{feature.title}</h3>
                <p className="text-zinc-500 text-[11px] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
