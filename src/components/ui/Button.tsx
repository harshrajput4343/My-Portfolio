"use client";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, href, ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-white hover:bg-blue-600 shadow-[0_0_20px_-5px_var(--color-primary)] hover:shadow-[0_0_25px_-5px_var(--color-primary)] border border-blue-500/50",
      secondary: "bg-white text-black hover:bg-gray-200 border border-transparent",
      outline: "bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white/40",
      ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/5",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg font-semibold",
    };

    const baseClass = cn(
      "rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden",
      variants[variant],
      sizes[size],
      className
    );

    const content = (
      <>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {variant === 'primary' && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        )}
      </>
    );

    if (href) {
      const MotionLink = motion.create(Link);
      return (
        <MotionLink
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={baseClass}
          suppressHydrationWarning
          {...(props as any)}
        >
          {content}
        </MotionLink>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={baseClass}
        suppressHydrationWarning
        {...(props as any)}
      >
        {content}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
