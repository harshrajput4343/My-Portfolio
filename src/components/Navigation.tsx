"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, FileText, Brain, Code } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/Button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Research", href: "#research" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/50 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-lg text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-shadow">
            HK
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">Harsh Kumar</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-cyan-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
            </Link>
          ))}
          <div className="h-6 w-px bg-white/10 mx-2" />
          <div className="flex items-center gap-4">
            <Link href="https://github.com/harshrajput4343" target="_blank" className="text-white/70 hover:text-white transition-colors">
              <Github size={20} />
            </Link>
            <Link href="https://www.linkedin.com/in/harshkumar4343/" target="_blank" className="text-white/70 hover:text-white transition-colors">
              <Linkedin size={20} />
            </Link>

            {/* Resume Dropdown */}
            <div className="relative">
              <Button
                size="sm"
                variant="primary"
                className="ml-2 flex items-center gap-2"
                onClick={() => setResumeOpen(!resumeOpen)}
              >
                Resume <FileText size={16} />
              </Button>

              <AnimatePresence>
                {resumeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col"
                    onMouseLeave={() => setResumeOpen(false)}
                  >
                    <a
                      href="/resumes/Harsh_SDE_Resume.pdf"
                      target="_blank"
                      className="flex items-center gap-3 px-4 py-3 text-sm text-white/80 hover:bg-white/5 hover:text-cyan-400 transition-colors border-b border-white/5"
                    >
                      <Code size={16} className="text-blue-400" />
                      <span>SDE (Software)</span>
                    </a>
                    <a
                      href="/resumes/Harsh_AI_Resume.pdf"
                      target="_blank"
                      className="flex items-center gap-3 px-4 py-3 text-sm text-white/80 hover:bg-white/5 hover:text-cyan-400 transition-colors"
                    >
                      <Brain size={16} className="text-purple-400" />
                      <span>AI / ML Engineer</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-cyan-400"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-4 pt-6 border-t border-white/10">
                <div className="flex gap-6">
                  <Link href="https://github.com/harshrajput4343" target="_blank" className="text-white/70 hover:text-white">
                    <Github size={24} />
                  </Link>
                  <Link href="https://www.linkedin.com/in/harshkumar4343/" target="_blank" className="text-white/70 hover:text-white">
                    <Linkedin size={24} />
                  </Link>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-sm text-white/50 font-medium uppercase tracking-wider mb-1">Download Resume</p>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="/resumes/Harsh_SDE_Resume.pdf"
                      target="_blank"
                      className="flex items-center justify-center gap-2 py-3 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm hover:bg-white/10 transition-colors"
                    >
                      <Code size={16} /> SDE
                    </a>
                    <a
                      href="/resumes/Harsh_AI_Resume.pdf"
                      target="_blank"
                      className="flex items-center justify-center gap-2 py-3 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm hover:bg-white/10 transition-colors"
                    >
                      <Brain size={16} /> AI / ML
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
