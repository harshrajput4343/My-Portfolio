"use client";
import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import Image from "next/image";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export const About = () => {
  return (
    <Section id="about" className="container mx-auto px-6">
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="flex flex-col md:flex-row gap-12 items-center">

        {/* Text Content */}
        <div className="md:w-3/5">
          <h2 className="text-4xl font-bold text-foreground mb-6">About Me</h2>
          <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
            <p>
              I am a <span className="font-bold text-blue-600">Full-Stack Developer</span> and <span className="font-bold text-blue-600">AI/ML Engineer</span> currently
              pursuing my B.Tech in Electronics & Communication Engineering at <strong className="text-blue-600">IIIT Sri City</strong> (Nov 2022 – June 2026) with a CGPA of <strong className="text-blue-600">7.5</strong>.
              I build production-grade applications and end-to-end machine learning pipelines that solve real-world problems.
            </p>
            <p>
              Born in Aurangabad, Bihar, my journey has been shaped by a deep curiosity about how systems are built and how data drives intelligent decisions.
              As a <strong className="text-blue-600">Research Assistant</strong> at IIIT Sri City and a <strong className="text-blue-600">Data Science Intern</strong> at CodeClause,
              I have designed scalable backend services, deployed AI-based anomaly detection systems, and built collaborative filtering recommender systems.
              My focus spans full-stack development with <strong className="text-blue-600">Next.js, React, and Node.js</strong> to deep learning pipelines with <strong className="text-blue-600">PyTorch, LangChain, and MLflow</strong>.
            </p>
          </div>

          {/* Education */}
          <div className="mt-8 space-y-3">
            <h3 className="text-sm font-bold text-foreground/40 uppercase tracking-widest">Education</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-foreground/5 border border-foreground/5">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0" />
                <div>
                  <p className="font-bold text-foreground text-sm">IIIT Sri City — B.Tech, ECE</p>
                  <p className="text-xs text-foreground/50">CGPA: 7.5 • Nov 2022 – June 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-foreground/5 border border-foreground/5">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0" />
                <div>
                  <p className="font-bold text-foreground text-sm">D.A.V Public School — CBSE (X)</p>
                  <p className="text-xs text-foreground/50">Percentage: 91.4% • April 2009 – April 2019</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-8 mt-8">
            <div>
              <div className="flex items-baseline gap-1">
                <h4 className="text-2xl font-bold text-foreground mb-1">4+</h4>
              </div>
              <p className="text-sm text-foreground/50">Years of Coding</p>
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <h4 className="text-2xl font-bold text-foreground mb-1">10+</h4>
              </div>
              <p className="text-sm text-foreground/50">Projects Built</p>
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <h4 className="text-2xl font-bold text-foreground mb-1">250+</h4>
              </div>
              <p className="text-sm text-foreground/50">Problems Solved</p>
            </div>
          </div>
        </div>

        {/* Image/Decoration Side */}
        <div className="md:w-2/5 flex justify-center relative">
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />
          <div className="relative z-10 w-80 h-80 rounded-3xl overflow-hidden glass-card p-2 rotate-3 hover:rotate-0 transition-all duration-500">
            <div className="w-full h-full bg-surface/50 rounded-2xl overflow-hidden relative">
              <Image
                src="/images/profile.jpg"
                alt="Harsh Kumar"
                fill
                className="object-cover"
              />
            </div>
            {/* Name Overlay */}
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-foreground/5">
              <h3 className="text-2xl font-bold text-foreground">Harsh Kumar</h3>
              <p className="text-xs text-blue-500 font-mono">@harshrajput4343</p>
            </div>
          </div>
        </div>

      </motion.div>
    </Section>
  );
};
