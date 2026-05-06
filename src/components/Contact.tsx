"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Code, X, Globe, Camera, ShieldCheck, Send } from "lucide-react";
import { Container } from "./ui/Container";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xpwzjpqg", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-[#020617]">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
      
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold font-serif mb-4 tracking-tight"
            >
              Let's Start a <span className="text-blue-500 italic">Conversation</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 items-start">
            {/* Contact Info - Compact side cards */}
            <div className="lg:col-span-4 space-y-3">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass p-5 rounded-2xl border-white/5 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-0.5">Email Me</p>
                    <p className="text-[12px] font-medium text-white truncate max-w-[150px]">abdulsamad...gmail.com</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass p-5 rounded-2xl border-white/5 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-0.5">Call Me</p>
                    <p className="text-[12px] font-medium text-white">+92 3244520651</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass p-5 rounded-2xl border-white/5 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-0.5">Location</p>
                    <p className="text-[12px] font-medium text-white">Lahore, Pakistan</p>
                  </div>
                </div>
              </motion.div>

              <div className="flex gap-2 justify-center lg:justify-start pt-2">
                {[Code, X, Globe, Camera].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -2, backgroundColor: "rgba(37,99,235,0.15)" }}
                    className="w-8 h-8 rounded-lg glass border-white/5 flex items-center justify-center text-zinc-500 hover:text-blue-500 transition-all"
                  >
                    <Icon size={14} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Form Card - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 glass p-6 md:p-8 rounded-[2rem] border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
              
              {status === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 mb-6">
                    <ShieldCheck size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-zinc-400 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-blue-500 text-sm font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Name</label>
                      <input 
                        name="name"
                        type="text" 
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-blue-500/50 transition-all outline-none text-[12px] text-white placeholder:text-zinc-600"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Email</label>
                      <input 
                        name="email"
                        type="email" 
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-blue-500/50 transition-all outline-none text-[12px] text-white placeholder:text-zinc-600"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-blue-500/50 transition-all outline-none resize-none text-[12px] text-white placeholder:text-zinc-600"
                    />
                  </div>
                  <button 
                    disabled={status === "loading"}
                    className="w-full py-3.5 rounded-xl bg-blue-600 text-white text-[12px] font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10">
                      {status === "loading" ? "Sending..." : "Send Message"}
                    </span>
                    {status !== "loading" && <Send size={14} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  </button>
                  {status === "error" && (
                    <p className="text-red-500 text-[11px] text-center mt-2">Something went wrong. Please try again.</p>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
