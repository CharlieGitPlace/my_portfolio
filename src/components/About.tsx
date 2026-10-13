"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Globe, Shield, Terminal, ArrowUpRight } from "lucide-react";
import TechSphereWrapper from "./TechSphereWrapper";

const STRENGTHS = [
  {
    icon: <Terminal className="w-5 h-5 text-blue-400" />,
    title: "Full-Stack Development",
          desc: "Build scalable frontend and backend applications using JavaScript, TypeScript, React, and modern frameworks.",
  },
  {
    icon: <Globe className="w-5 h-5 text-indigo-400" />,
    title: "AI & OpenAI Integration",
    desc: "Integrate OpenAI APIs to build intelligent chatbots, automation, and AI-powered user experiences.",
  },
  {
    icon: <Shield className="w-5 h-5 text-cyan-400" />,
    title: "API & System Integration",
    desc: "Design REST APIs and connect databases, third-party services, and existing platforms.",
  },
  {
    icon: <Award className="w-5 h-5 text-zinc-300" />,
    title: "Performance Optimization",
    desc: "Improve application speed through caching, database optimization, asset optimization, and efficient architecture.",
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-indigo-300" />,
    title: "WordPress & Shopify Development",
    desc: "Extend WordPress, Shopify, and other web platforms with custom features and integrations.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-24 flex items-center justify-center overflow-hidden border-t border-zinc-900 bg-[#07070a]"
    >
      {/* Background Volumetric lights */}
      <div className="absolute top-[40%] right-[-10%] w-[450px] h-[450px] bg-blue-950/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[450px] h-[450px] bg-indigo-950/5 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Grid Decors */}
      <div className="absolute inset-0 bg-dot-matrix opacity-10 pointer-events-none" />

      <div className="w-[92%] max-w-6xl mx-auto flex flex-col space-y-16 z-10">
        {/* Header */}
        <div className="flex flex-col space-y-3 text-center items-center font-sans">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-1.5 text-[9px] text-zinc-400 border border-zinc-800 bg-zinc-900/40 px-3.5 py-1 rounded-full tracking-widest font-mono uppercase"
          >
            <span>BIOGRAPHY</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="aurora-text heading-underline font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight"
          >
            About Charlie
          </motion.h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-sans max-w-md mx-auto leading-relaxed">
            Full-Stack Developer with expertise in OpenAI integration and modern web technologies.
          </p>
        </div>

        {/* Content Split: Text & 3D Sphere */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center font-sans">
          {/* Left Hand: About content and academics */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sheen card-glow p-6 rounded-2xl border border-zinc-800/80 bg-[#0d0d12]/75 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            >
              <h3 className="font-semibold text-white tracking-wide text-lg mb-4 flex items-center gap-2">
                <span>Developer Overview</span>
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                A seasoned <strong>Full-Stack Developer</strong> with over a decade of experience designing, developing, and maintaining scalable web applications for clients and internal teams. Proficient in <strong>JavaScript, TypeScript, Angular, and React</strong>, with a strong focus on building responsive user interfaces, robust web solutions, and efficient internal tools tailored to diverse business needs.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                I provide services that build cross-platform AI solutions by integrating the OpenAI API into existing websites and applications, such as WordPress sites, e-commerce platforms, and custom systems.Additionally, by connecting AI services with REST APIs, databases, and existing back-end systems, I enable the implementation of features like AI-powered chatbots, intelligent Q&A, customer support, and workflow automation, allowing for the integration of AI capabilities without requiring a complete platform overhaul.
              </p>
            </motion.div>

            {/* Micro details grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="p-4 border border-zinc-800/80 bg-zinc-900/40 rounded-xl font-mono text-[10px] text-zinc-300 tracking-wider flex items-center justify-between hover:border-zinc-700/80 transition-colors">
                <span>PHP & JavaScript Expert</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </div>
              <div className="p-4 border border-zinc-800/80 bg-zinc-900/40 rounded-xl font-mono text-[10px] text-zinc-300 tracking-wider flex items-center justify-between hover:border-zinc-700/80 transition-colors">
                <span>FOCUS: FULL-STAC + OpenAI API</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </div>
            </motion.div>
          </div>

          {/* Right Hand: 3D rotating Tag Cloud Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="w-full max-w-[420px] rounded-2xl border border-zinc-800/80 bg-[#0d0d12]/50 backdrop-blur-md relative p-2 shadow-2xl">
              {/* Scanline decoration */}
              <div className="absolute inset-0 bg-cyber-grid-pattern bg-[size:15px_15px] opacity-[0.03] z-0" />
              <TechSphereWrapper />
            </div>
          </motion.div>
        </div>

        {/* Core Strengths Grid Panel */}
        <div className="flex flex-col space-y-6 pt-8 font-sans">
          <h3 className="font-semibold text-zinc-400 tracking-widest text-center text-xs uppercase mb-2">
            {"// KEY STRENGTHS & SPECIALIZATIONS"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {STRENGTHS.map((str, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="sheen card-glow p-5 rounded-2xl border border-zinc-800 bg-[#0d0d12]/60 hover:border-zinc-700/80 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-start space-y-4 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] shadow-inner text-left"
              >
                <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-850 w-fit">
                  {str.icon}
                </div>
                <div className="flex flex-col space-y-1">
                  <h4 className="font-semibold text-white tracking-wide text-[12px] uppercase">
                    {str.title}
                  </h4>
                  <p className="text-zinc-400 text-[11px] leading-relaxed">
                    {str.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
