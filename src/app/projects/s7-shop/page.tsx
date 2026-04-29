"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExternalLink, ArrowLeft, CheckCircle2, Zap, Target, ShoppingBag, CreditCard, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function S7ShopPage() {
  const features = [
    {
      title: "Real-time Inventory",
      description: "Seamless stock management that updates instantly across all user sessions.",
      icon: <Zap size={20} className="text-blue-500" />
    },
    {
      title: "Secure Checkout",
      description: "Integrated with Stripe for safe, encrypted payment processing.",
      icon: <CreditCard size={20} className="text-teal-400" />
    },
    {
      title: "Admin Dashboard",
      description: "A powerful backend to manage products, orders, and customer data.",
      icon: <ShieldCheck size={20} className="text-blue-600" />
    },
    {
      title: "Responsive Design",
      description: "Perfectly optimized for mobile, tablet, and desktop viewing experiences.",
      icon: <ShoppingBag size={20} className="text-teal-500" />
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
                FEATURED PROJECT
              </div>
              <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight">
                S7 Shop <span className="text-blue-500 italic">E-commerce</span>
              </h1>
              <p className="text-[15px] text-zinc-400 mb-8 leading-relaxed max-w-xl">
                S7 Shop is a premium, full-stack e-commerce platform designed for speed, security, and scalability. 
                Built with the modern web in mind, it provides a seamless shopping experience from product discovery to final checkout.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://s7shop.up.railway.app" 
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
                src="/s7_shop_preview_1777451456900.png" 
                alt="S7 Shop Preview"
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
                Creating a high-performance store that can handle thousands of concurrent users during peak shopping seasons while maintaining 
                sub-second page load times and a robust inventory synchronization system.
              </p>
            </div>
            <div className="glass p-8 rounded-[2rem] border-white/5">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-3">
                <ShieldCheck size={20} className="text-teal-400" /> The Solution
              </h2>
              <p className="text-zinc-500 leading-relaxed text-[13px]">
                Leveraging Next.js for server-side rendering, Redis for high-speed caching, and a modular architecture that separates 
                core business logic from UI components for maximum flexibility and performance.
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
