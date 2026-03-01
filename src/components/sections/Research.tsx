"use client";
import React from "react";
import { Section } from "../ui/Section";
import { motion, Variants } from "framer-motion";
import { FlaskConical, Server, Database, Cloud, Cog, Workflow, FolderOpen, Activity, TableProperties } from "lucide-react";

const ResearchVisual = () => {
  return (
    <div className="relative h-96 w-full overflow-hidden flex items-center justify-center">
      {/* 4 Step Flow: Nodes -> Process -> Engine -> Tracking */}
      <div className="relative z-10 flex items-center gap-2 md:gap-4 lg:gap-6">

        {/* Step 1: IoT Node */}
        <div className="flex flex-col items-center gap-2">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/50 flex items-center justify-center text-blue-500"
          >
            <Server size={20} />
          </motion.div>
          <span className="text-[10px] md:text-xs text-foreground/50 text-center">IoT Nodes</span>
        </div>

        {/* Arrow */}
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-px w-6 md:w-10 bg-foreground/20"
        />

        {/* Step 2: Preprocessing */}
        <div className="flex flex-col items-center gap-2 text-blue-500">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/50 flex items-center justify-center"
          >
            <TableProperties size={20} />
          </motion.div>
          <span className="text-[10px] md:text-xs text-foreground/50 text-center">Preprocessing<br /><span className="text-[9px] text-foreground/30">NumPy/Pandas</span></span>
        </div>

        {/* Arrow */}
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          className="h-px w-6 md:w-10 bg-foreground/20"
        />

        {/* Step 3: AI Backend */}
        <div className="flex flex-col items-center gap-2 text-cyan-500">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
            className="w-16 h-16 rounded-xl bg-cyan-500/10 border border-cyan-500/50 flex flex-col items-center justify-center backdrop-blur-md p-1"
          >
            <Activity size={20} className="mb-1" />
            <div className="text-[8px] font-mono text-center">FastAPI +<br />XGBoost</div>
          </motion.div>
          <span className="text-[10px] md:text-xs text-foreground/50 text-center">Anomaly<br />Detection</span>
        </div>

        {/* Arrow */}
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
          className="h-px w-6 md:w-10 bg-foreground/20"
        />

        {/* Step 4: Tracking */}
        <div className="flex flex-col items-center gap-2 text-green-500">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
            className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/50 flex items-center justify-center"
          >
            <Database size={20} />
          </motion.div>
          <span className="text-[10px] md:text-xs text-foreground/50 text-center">MLflow<br />Tracking</span>
        </div>

      </div>
    </div>
  )
}

const AWSPipelineVisual = () => {
  return (
    <div className="relative h-96 w-full flex items-center justify-center">
      <div className="relative z-10 flex items-center gap-3 md:gap-5">
        {/* S3 Buckets */}
        <div className="flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 rounded-lg bg-orange-500/20 border border-orange-500 flex items-center justify-center text-orange-400"
          >
            <FolderOpen size={22} />
          </motion.div>
          <span className="text-xs text-foreground/50 text-center leading-tight">S3 Buckets<br /><span className="text-[10px] text-foreground/30">raw / labeled / processed</span></span>
        </div>

        {/* Arrow */}
        <motion.div
          animate={{ x: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-0.5 w-8 bg-gradient-to-r from-orange-500 to-yellow-500"
        />

        {/* SageMaker Ground Truth */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-20 h-20 rounded-xl bg-yellow-500/10 border border-yellow-500/50 flex flex-col items-center justify-center text-yellow-400 backdrop-blur-md p-2">
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
              <Cog size={20} />
            </motion.div>
            <div className="text-[9px] font-mono text-center leading-tight mt-1">SageMaker<br />Ground Truth</div>
          </div>
          <span className="text-xs text-foreground/50">Labeling</span>
        </div>

        {/* Arrow */}
        <motion.div
          animate={{ x: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          className="h-0.5 w-8 bg-gradient-to-r from-yellow-500 to-purple-500"
        />

        {/* Lambda */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-20 h-20 rounded-xl bg-purple-500/10 border border-purple-500/50 flex flex-col items-center justify-center text-purple-400 backdrop-blur-md">
            <div className="text-xs font-mono mb-1">Lambda</div>
            <div className="flex gap-1">
              {[1, 2, 3].map(i => (
                <motion.div
                  key={i}
                  animate={{ scaleY: [0.5, 1.5, 0.5] }}
                  transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                  className="w-1.5 h-3 bg-purple-400 rounded-full origin-bottom"
                />
              ))}
            </div>
          </div>
          <span className="text-xs text-foreground/50">Preprocessing</span>
        </div>

        {/* Arrow */}
        <motion.div
          animate={{ x: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
          className="h-0.5 w-8 bg-gradient-to-r from-purple-500 to-green-500"
        />

        {/* Step Functions */}
        <div className="flex flex-col items-center gap-2">
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 rounded-lg bg-green-500/20 border border-green-500 flex items-center justify-center text-green-400"
          >
            <Workflow size={22} />
          </motion.div>
          <span className="text-xs text-foreground/50 text-center leading-tight">Step Functions<br /><span className="text-[10px] text-foreground/30">Orchestration</span></span>
        </div>
      </div>
    </div>
  );
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export const Research = () => {
  return (
    <Section id="research" className="container mx-auto px-6">
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="flex flex-col md:flex-row gap-12">
        <div className="flex-1 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FlaskConical className="text-cyan-400" />
              <h2 className="text-4xl font-bold text-foreground">Experience</h2>
            </div>
            <h3 className="text-2xl text-blue-600 font-bold mb-2">
              Research Assistant — AI Backend Development
            </h3>
            <p className="text-xl text-foreground/80 mb-4">IIIT Sri City (June 2025 – Aug 2025)</p>

            <ul className="space-y-4 text-foreground/70 leading-relaxed list-disc pl-4 marker:text-blue-500">
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
              {["FastAPI", "Flask", "XGBoost", "MLflow", "CNN + Attention", "IoT Security"].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 text-xs border border-blue-600/20 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>


          <div className="pt-12 border-t border-white/10">
            <h3 className="text-2xl text-blue-600 font-bold mb-2">
              Data Science Intern
            </h3>
            <p className="text-xl text-foreground/80 mb-4">CodeClause (Dec 2025 – Jan 2026)</p>

            <ul className="space-y-4 text-foreground/70 leading-relaxed list-disc pl-4 marker:text-blue-500">
              <li>
                Configured AWS S3 buckets (raw/labeled/processed data), SageMaker Ground Truth labeling, 30+ annotated images.
              </li>
              <li>
                Deployed Lambda functions for preprocessing, configured IAM roles, orchestrated workflows via Step Functions.
              </li>
              <li>
                Built production-ready ML pipeline integrating S3, Lambda, Step Functions for end-to-end automation.
              </li>
            </ul>

            <div className="flex flex-wrap gap-3 mt-8">
              {["AWS S3", "SageMaker", "Lambda", "Step Functions", "IAM", "ML Pipeline"].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs border border-orange-500/20 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <ResearchVisual />
          <AWSPipelineVisual />
        </div>
      </motion.div>
    </Section>
  );
};
