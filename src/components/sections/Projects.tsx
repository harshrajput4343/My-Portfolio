"use client";
import React from "react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Button";

const projects = [
  {
    title: "Quickart",
    description: "Full-Stack e-commerce platform with modular frontend architecture and serverless backend. Features role-based auth, real-time cart synchronization, and optimized product management.",
    tags: ["Next.js 14", "TypeScript", "Convex", "Clerk Auth", "MongoDB"],
    stats: "Reduced Load Time by 40%",
    link: "https://harshquickcart.vercel.app/",
    github: "https://github.com/harshrajput4343/New-Quickcarts"
  },
  {
    title: "ResoTrack",
    description: "AI-powered resume intelligence platform. Integrates Puter cloud for storage and Gemini API for ATS scoring and personalized improvement suggestions.",
    tags: ["React.js", "Gemini API", "Puter Cloud", "Tailwind CSS"],
    stats: "Real-time ATS Scoring",
    link: "https://github.com/harshrajput4343/ResoTrack/tree/main",
    github: "https://github.com/harshrajput4343/ResoTrack"
  },
  {
    title: "AI Medical Chatbot",
    description: "LLM-driven healthcare assistant using RAG pipeline over Pinecone vector search. Provides context-aware medical responses with reliable inference APIs.",
    tags: ["GenAI", "LangChain", "Pinecone", "Flask", "AWS"],
    stats: "Context-Aware RAG",
    link: "https://github.com/harshrajput4343/Medical-Chatbot-GenAi/tree/main",
    github: "https://github.com/harshrajput4343/Medical-Chatbot-GenAi"
  },

  {
    title: "Waste Detection System",
    description: "An intelligent waste detection system leveraging YOLOv5 for precise real-time object detection and classification.",
    tags: ["YOLOv5", "Python", "OpenCV", "Deep Learning"],
    stats: "95% Detection Accuracy",
    link: "https://github.com/harshrajput4343/Waste-Detection-System/tree/main",
    github: "https://github.com/harshrajput4343/Waste-Detection-System"
  },

  {
    title: "PPE Detection for Construction Site Safety",
    description: "A real-time computer vision system built on YOLOv8 to detect personal protective equipment and safety violations on construction sites for automated monitoring and risk prevention.",
    tags: ["PyTorch", "YOLOv8", "Ultralytics", "OpenCV", "Computer Vision", "Python"],
    stats: "10 PPE Classes | 2,801 Labeled Images | Real-time Inference",
    link: "https://github.com/harshrajput4343/PPE-Detection-On-Construction-Using-YoloV8",
    github: "https://github.com/harshrajput4343/PPE-Detection-On-Construction-Using-YoloV8"
  }


];

export const Projects = () => {
  return (
    <Section id="projects" className="container mx-auto px-6">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-2">
            Featured Work
          </h2>
          <p className="text-white/60">Production-grade applications and AI systems.</p>
        </div>
        <Button variant="outline" className="hidden md:flex" href="https://github.com/harshrajput4343">
          View All on GitHub <Github size={16} />
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="group hover:bg-white/[0.02] transition-colors">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-mono text-blue-400 mt-1 block">
                  {project.stats}
                </span>
              </div>
              <div className="flex gap-3">
                <Link href={project.github} target="_blank" className="text-white/40 hover:text-white transition-colors">
                  <Github size={20} />
                </Link>
                <Link href={project.link} target="_blank" className="text-white/40 hover:text-white transition-colors">
                  <ExternalLink size={20} />
                </Link>
              </div>
            </div>

            <p className="text-white/70 mb-6 min-h-[60px] text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-white/60 border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center md:hidden">
        <Button variant="outline" href="https://github.com/harshrajput4343">
          View All on GitHub <Github size={16} />
        </Button>
      </div>
    </Section>
  );
};
