"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExternalLink, ArrowLeft, Zap, Target, ShieldCheck, Truck, Package, BarChart3, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LogismartPage() {
  const features = [
    {
      title: "Fleet Tracking",
      description: "Real-time GPS tracking and route optimization for entire logistics fleets.",
      icon: <Truck size={20} className="text-blue-500" />
    },
    {
      title: "Smart Inventory",
      description: "Automated warehouse management with real-time stock level monitoring.",
      icon: <Package size={20} className="text-teal-400" />
    },
    {
      title: "Performance Analytics",
      description: "In-depth data visualization for supply chain efficiency and cost reduction.",
      icon: <BarChart3 size={20} className="text-blue-600" />
    },
    {
      title: "On-time Delivery",
      description: "Smart scheduling system to ensure sub-second accuracy in delivery windows.",
      icon: <Clock size={20} className="text-teal-500" />
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
                LOGISTICS & SUPPLY CHAIN
              </div>
              <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight">
                Logismart <span className="text-blue-500 italic">Solutions</span>
              </h1>
              <p className="text-[15px] text-zinc-400 mb-8 leading-relaxed max-w-xl">
                Logismart Solutions is a cutting-edge platform designed to revolutionize modern logistics. 
                By integrating smart tracking with predictive analytics, it enables businesses to achieve unprecedented efficiency in their supply chain operations.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.logismartsolutions.com" 
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
                src="/logismart_preview.png" 
                alt="Logismart Preview"
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
                Developing a system that can process massive streams of real-time GPS data and translate them into actionable business insights with minimal latency.
              </p>
            </div>
            <div className="glass p-8 rounded-[2rem] border-white/5">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-3">
                <ShieldCheck size={20} className="text-teal-400" /> The Solution
              </h2>
              <p className="text-zinc-500 leading-relaxed text-[13px]">
                Building a distributed backend architecture with high-speed websocket communication and a responsive dashboard that provides instant visual feedback.
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
