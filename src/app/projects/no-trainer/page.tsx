"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExternalLink, ArrowLeft, Zap, Target, ShieldCheck, Activity, Dumbbell, Trophy, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NoTrainerPage() {
  const features = [
    {
      title: "AI Workout Plans",
      description: "Customized exercise routines generated based on your goals and equipment.",
      icon: <Activity size={20} className="text-blue-500" />
    },
    {
      title: "Progress Tracking",
      description: "Visual charts and metrics to monitor your fitness journey over time.",
      icon: <Trophy size={20} className="text-teal-400" />
    },
    {
      title: "Exercise Library",
      description: "Comprehensive database of exercises with form guides and tips.",
      icon: <Dumbbell size={20} className="text-blue-600" />
    },
    {
      title: "Community Support",
      description: "Connect with others and share your achievements for extra motivation.",
      icon: <Users size={20} className="text-teal-500" />
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
                HEALTH & FITNESS
              </div>
              <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight">
                No Trainer <span className="text-blue-500 italic">AI Fitness</span>
              </h1>
              <p className="text-[15px] text-zinc-400 mb-8 leading-relaxed max-w-xl">
                No Trainer is an intelligent fitness companion that replaces the need for a physical trainer. 
                Using advanced algorithms, it crafts personalized workout experiences tailored to your body type and fitness objectives.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://no-trainer-theta.vercel.app" 
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
                src="/no_trainer_preview_1777451535332.png" 
                alt="No Trainer Preview"
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
                Designing an interface that simplifies complex workout data while providing enough depth for advanced athletes to track their micro-progressions.
              </p>
            </div>
            <div className="glass p-8 rounded-[2rem] border-white/5">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-3">
                <ShieldCheck size={20} className="text-teal-400" /> The Solution
              </h2>
              <p className="text-zinc-500 leading-relaxed text-[13px]">
                Implementing a highly interactive dashboard with dynamic progress charts and a modular workout builder that adapts to user feedback in real-time.
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
