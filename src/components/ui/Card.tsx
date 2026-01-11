"use client";
import React from "react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card = ({ children, className, hoverEffect = true, ...props }: CardProps) => {
  return (
    <motion.div
      initial={hoverEffect ? { opacity: 0, y: 20 } : undefined}
      whileInView={hoverEffect ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={hoverEffect ? { y: -5, boxShadow: "0 10px 40px -10px rgba(37,99,235,0.1)" } : undefined}
      transition={{ duration: 0.4 }}
      className={cn(
        "glass-card rounded-xl p-6 relative overflow-hidden",
        className
      )}
      {...props as any}
    >
      {/* Decorative gradient blob */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
