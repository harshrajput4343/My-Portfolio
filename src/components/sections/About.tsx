"use client";
import React from "react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <Section id="about" className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            About Me
          </h2>
          <div className="space-y-4 text-lg text-white/70 leading-relaxed">
            <p>
              I am a technologist specializing in <span className="text-blue-400">Intelligent Systems</span> and <span className="text-cyan-400">Machine Learning</span>.
              Currently pursuing my B.Tech in Electronics and Communication Engineering at <strong className="text-white">IIIT Sri City</strong> (2022–2026),
              I bridge the gap between hardware constraints and advanced AI models.
            </p>
            <p>
              Born in Aurangabad, Bihar, my journey has been shaped by a deep curiosity about how systems think, how data moves, and how intelligent decisions are formed from raw information.
              As a <strong className="text-white">Research Assistant</strong> in AI & IoT Security, I do not work at the level of isolated experiments or toy models;
              I design end-to-end, production-grade intelligence pipelines that transform noisy real-world data into reliable, deployable systems.
              My focus is on building architectures that remain stable under scale, resilient to uncertainty, and trustworthy in environments where failures carry real consequences.
            </p>
            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                <h4 className="text-2xl font-bold text-white mb-1">3+</h4>
                <p className="text-sm text-white/50">Years of Coding</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                <h4 className="text-2xl font-bold text-white mb-1">10+</h4>
                <p className="text-sm text-white/50">Projects Built</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image/Visual Placeholder - REPLACED WITH REAL IMAGE */}
        <div className="flex-1 w-full max-w-md relative">
          <Card className="aspect-[4/5] relative flex items-center justify-center p-0 overflow-hidden group border-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/20 z-0 group-hover:scale-110 transition-transform duration-700" />

            {/* Profile Image */}
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile.jpg"
                alt="Harsh Kumar"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-2xl font-bold text-white">Harsh Kumar</h3>
              <p className="text-blue-400">AI Engineer</p>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};
