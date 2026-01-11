"use client";
import React from "react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { motion } from "framer-motion";
import { FlaskConical, Network, Shield, Server, Database } from "lucide-react";

const ResearchVisual = () => {
  return (
    <div className="relative h-64 w-full bg-white/5 rounded-xl overflow-hidden flex items-center justify-center border border-white/5 md:h-full min-h-[300px]">
      {/* Simple Architecture Diagram */}
      <div className="relative z-10 flex items-center gap-4 md:gap-8">
        {/* IoT Node */}
        <div className="flex flex-col items-center gap-2">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center text-blue-400"
          >
            <Server size={24} />
          </motion.div>
          <span className="text-xs text-white/50">FastAPI</span>
        </div>

        {/* Arrow */}
        <motion.div
          animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-cyan-500"
        />

        {/* Model */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-24 h-24 rounded-xl bg-cyan-500/10 border border-cyan-500/50 flex flex-col items-center justify-center text-cyan-400 backdrop-blur-md">
            <div className="text-xs font-mono mb-1">XGBoost + CNN</div>
            <div className="grid grid-cols-3 gap-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
                />
              ))}
            </div>
          </div>
          <span className="text-xs text-white/50">Inference</span>
        </div>

        {/* Arrow */}
        <motion.div
          animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          className="h-0.5 w-12 bg-gradient-to-r from-cyan-500 to-green-500"
        />

        {/* Output */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center text-green-400">
            <Database size={24} />
          </div>
          <span className="text-xs text-white/50">MLflow</span>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid-white/[0.02]" />
    </div>
  )
}

export const Research = () => {
  return (
    <Section id="research" className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FlaskConical className="text-cyan-400" />
              <h2 className="text-4xl font-bold text-white">Experience</h2>
            </div>
            <h3 className="text-2xl text-blue-400 font-medium mb-2">
              Research Assistant
            </h3>
            <p className="text-xl text-white/80 mb-4">IIIT Sri City (June 2025 – Aug 2025)</p>

            <ul className="space-y-4 text-white/70 leading-relaxed list-disc pl-4 marker:text-blue-500">
              <li>
                Designed and built production-grade Python services and RESTful APIs using <strong>FastAPI and Flask</strong> to deploy AI-based IoT anomaly detection systems.
              </li>
              <li>
                Implemented scalable data preprocessing and feature engineering pipelines using <strong>NumPy and Pandas</strong> for high-volume sensor and network data.
              </li>
              <li>
                Integrated CNN, attention-based deep learning models, and <strong>XGBoost</strong> into backend inference workflows for real-time prediction and monitoring.
              </li>
              <li>
                Developed <strong>MLflow-driven</strong> experiment tracking, model versioning, and validation pipelines to ensure reproducible and reliable model deployments.
              </li>
            </ul>

            <div className="flex flex-wrap gap-3 mt-8">
              {["FastAPI", "XGBoost", "MLflow", "CNN + Attention", "IoT Security"].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs border border-blue-500/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <ResearchVisual />
        </div>
      </div>
    </Section>
  );
};
