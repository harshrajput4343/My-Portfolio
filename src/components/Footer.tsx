"use client";
import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Link href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4 inline-block">
            Harsh Kumar
          </Link>
          <p className="text-white/60 max-w-sm">
            Building intelligent systems that merge machine learning, data, and cloud infrastructure to solve real-world problems.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["About", "Skills", "Research", "Projects"].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`} className="text-white/60 hover:text-cyan-400 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Connect</h4>
          <div className="flex gap-4">
            <Link href="https://github.com/harshrajput4343/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-white/60">
              <Github size={20} />
            </Link>
            <Link href="https://www.linkedin.com/in/harshkumar4343/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-white/60">
              <Linkedin size={20} />
            </Link>
            <Link href="mailto:harshkumarsingh4343@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-white/60">
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
        <p>© {new Date().getFullYear()} Harsh Kumar. All rights reserved.</p>
        <p>Designed & Built with Next.js + Tailwind</p>
      </div>
    </footer>
  );
};
