"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { Palette, Smartphone, Globe, Monitor, Cloud } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Web Development",
    description: "Building high-performance, scalable web applications using modern frameworks.",
    icon: <Globe className="text-blue-500" size={32} />,
    features: ["Next.js & React", "E-commerce Solutions", "API Integration"]
  },
  {
    title: "Web Design",
    description: "Creating intuitive and visually stunning user experiences that convert.",
    icon: <Palette className="text-teal-400" size={32} />,
    features: ["Visual Identity", "Prototyping", "Responsive Design"],
    popular: true
  },
  {
    title: "App Development",
    description: "Designing and developing cross-platform mobile applications for iOS and Android.",
    icon: <Smartphone className="text-purple-500" size={32} />,
    features: ["React Native", "Mobile UI Design", "App Store Deployment"]
  },
  {
    title: "Application Development",
    description: "Developing robust enterprise-grade applications tailored to business needs.",
    icon: <Monitor className="text-orange-500" size={32} />,
    features: ["Desktop Apps", "Business Logic", "Custom Workflow"]
  },
  {
    title: "SaaS Development",
    description: "Building scalable Software as a Service platforms with subscription models.",
    icon: <Cloud className="text-pink-500" size={32} />,
    features: ["Multi-tenancy", "Stripe Integration", "Cloud Architecture"]
  }
];

export function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-[#020617]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/services_bg.png" 
          alt="Background" 
          fill 
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-8 font-serif"
          >
            My <span className="text-blue-500 italic">Services</span>
          </motion.h2>
        </div>

        {/* Mobile & Tablet Grid View */}
        <div className="grid md:grid-cols-2 gap-6 lg:hidden">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative p-6 rounded-[2rem] glass border-white/10 ${
                service.popular ? "shadow-lg shadow-blue-500/10" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-6 px-2 py-0.5 rounded-full bg-blue-600 text-[9px] font-bold text-white uppercase tracking-widest">
                  Popular
                </div>
              )}
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/5">
                <div className="scale-75">{service.icon}</div>
              </div>
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-zinc-500 text-[13px] leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="mt-auto space-y-2 pt-6 border-t border-white/5">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] text-zinc-400">
                    <div className="w-1 h-1 rounded-full bg-blue-500" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Marquee View */}
        <div className="hidden lg:block relative overflow-hidden py-10">
          <motion.div
            animate={{
              x: [0, "-50%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-6 w-max"
          >
            {[...services, ...services].map((service, i) => (
              <div
                key={i}
                className={`relative w-[350px] p-6 rounded-[2rem] glass card-hover flex flex-col border-white/10 ${
                  service.popular ? "shadow-lg shadow-blue-500/10" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-6 px-2 py-0.5 rounded-full bg-blue-600 text-[9px] font-bold text-white uppercase tracking-widest">
                    Popular
                  </div>
                )}
                
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/5">
                  <div className="scale-75">{service.icon}</div>
                </div>
                
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-zinc-500 text-[13px] leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mt-auto space-y-2 pt-6 border-t border-white/5">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-zinc-400">
                      <div className="w-1 h-1 rounded-full bg-blue-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
