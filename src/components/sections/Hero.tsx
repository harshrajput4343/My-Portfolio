"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight, Mail } from "lucide-react";

const Ribbon = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const rotate = useTransform(scrollY, [0, 500], [0, 10]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none perspective-[1000px]">
      <motion.div
        style={{ y, rotateX: rotate }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[60vh] opacity-100"
      >
        {/* Core Ribbon Gradient (Light Mode) */}
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,#3b82f6_0deg,#2dd4bf_120deg,#a855f7_240deg,#3b82f6_360deg)] blur-[60px] opacity-30 mix-blend-multiply animate-drift" />

        {/* Secondary Flow Layer */}
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,#6366f1_100deg,transparent_200deg)] blur-[40px] opacity-40 mix-blend-multiply animate-drift"
          style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

        {/* Iridescent Sheen */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8)_0%,transparent_60%)] blur-[30px] mix-blend-overlay" />
      </motion.div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <Ribbon />

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-black/5 bg-black/5 text-black/60 font-mono text-sm tracking-wide backdrop-blur-md">
            OPEN TO OPPORTUNITIES
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-foreground leading-[1.1]">
            Harsh Kumar
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground/80 mb-10 font-light max-w-3xl mx-auto leading-relaxed">
            Aspiring AI Engineer & <span className="font-serif italic text-blue-600">ML Researcher</span>
          </h2>
          <p className="text-foreground/60 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
            Designing intelligent systems that bridge the gap between complex data and real-world impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="min-w-[180px] text-lg h-14" href="#projects">
              View Work
            </Button>
            <Button variant="outline" size="lg" className="min-w-[180px] text-lg h-14 bg-white/50 border-black/10 hover:bg-white/80 text-foreground" href="#contact">
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
