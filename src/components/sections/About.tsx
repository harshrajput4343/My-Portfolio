"use client";
import React from "react";
import { Section } from "../ui/Section";
import Image from "next/image";
import { BrainCircuit } from "lucide-react";

export const About = () => {
  return (
    <Section id="about" className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-12 items-center">

        {/* Text Content */}
        <div className="md:w-3/5">
          <h2 className="text-4xl font-bold text-foreground mb-6">About Me</h2>
          <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
            <p>
              I am a technologist specializing in <span className="font-bold text-blue-600">Intelligent Systems</span> and <span className="font-bold text-blue-600">Machine Learning</span>.
              Currently pursuing my B.Tech in Electronics and Communication Engineering at <strong className="text-blue-600">IIIT Sri City</strong> (2022–2026),
              I bridge the gap between hardware constraints and advanced AI models.
            </p>
            <p>
              Born in Aurangabad, Bihar, my journey has been shaped by a deep curiosity about how systems think, how data moves, and how intelligent decisions are formed from raw information.
              As a <strong className="text-blue-600">Research Assistant</strong> in AI & IoT Security, I do not work at the level of isolated experiments or toy models;
              I design end-to-end, production-grade intelligence pipelines that transform noisy real-world data into reliable, deployable systems.
              My focus is on building architectures that remain stable under scale, resilient to uncertainty, and trustworthy in environments where failures carry real consequences.
            </p>
          </div>

          <div className="flex gap-8 mt-8">
            <div>
              <div className="flex items-baseline gap-1">
                <h4 className="text-2xl font-bold text-foreground mb-1">3+</h4>
              </div>
              <p className="text-sm text-foreground/50">Years of Coding</p>
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <h4 className="text-2xl font-bold text-foreground mb-1">10+</h4>
              </div>
              <p className="text-sm text-foreground/50">Projects Built</p>
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

      </div>
    </Section>
  );
};
