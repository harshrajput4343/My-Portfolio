"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight, Mail } from "lucide-react";

const MinimalBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Left Blue Beam */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute -top-[20%] left-[10%] w-[30vw] h-[140vh] bg-[conic-gradient(from_180deg_at_50%_50%,#2563eb_0deg,transparent_60deg)] opacity-60 blur-[120px] rotate-12 mix-blend-screen"
      />

      {/* Right Cyan/Green Beam */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        className="absolute -bottom-[20%] right-[10%] w-[35vw] h-[140vh] bg-[conic-gradient(from_0deg_at_50%_50%,#00f5d4_0deg,transparent_60deg)] opacity-50 blur-[120px] -rotate-12 mix-blend-screen"
      />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-3xl" />

      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#050505]">
      <MinimalBackground />

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-white/80 font-mono text-sm tracking-wide backdrop-blur-md">
            OPEN TO OPPORTUNITIES
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-white">
            Harsh Kumar
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/60 mb-10 font-light max-w-3xl mx-auto leading-relaxed">
            Aspiring AI Engineer & <span className="text-blue-500 font-normal">ML Researcher</span>
          </h2>
          <p className="text-white/40 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
            Designing intelligent systems that bridge the gap between complex data and real-world impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="min-w-[180px] text-lg h-14" href="#projects">
              View Work
            </Button>
            <Button variant="outline" size="lg" className="min-w-[180px] text-lg h-14" href="#contact">
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </motion.div>
    </section>
  );
};
