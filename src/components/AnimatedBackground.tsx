"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary Ribbon */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[100vh]"
      >
        {/* Core Ribbon Gradient */}
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,#3b82f6_0deg,#2dd4bf_120deg,#a855f7_240deg,#3b82f6_360deg)] blur-[80px] opacity-20 animate-drift" />
      </motion.div>

      {/* Secondary Flow Layer */}
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180vw] h-[80vh]"
      >
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,#6366f1_100deg,transparent_200deg)] blur-[60px] opacity-25" />
      </motion.div>

      {/* Floating Accent Orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[15%] w-[30vw] h-[30vw] bg-[radial-gradient(circle,rgba(34,211,238,0.15)_0%,transparent_70%)] blur-[40px]"
      />
      <motion.div
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[10%] w-[35vw] h-[35vw] bg-[radial-gradient(circle,rgba(167,139,250,0.15)_0%,transparent_70%)] blur-[40px]"
      />

      {/* Iridescent Sheen */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] mix-blend-overlay" />
    </div>
  );
};
