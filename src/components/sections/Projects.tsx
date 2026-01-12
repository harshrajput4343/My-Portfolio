"use client";
import React from "react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { ExternalLink, Github, ShoppingCart, FileText, MessageSquare, Trash2, HardHat } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Button";

const projects = [
  {
    title: "Quickart",
    description: "Full-Stack e-commerce platform with modular frontend architecture and serverless backend. Features role-based auth, real-time cart synchronization, and optimized product management.",
    tags: ["Next.js 14", "TypeScript", "Convex", "Clerk Auth", "MongoDB"],
    stats: "Reduced Load Time by 40%",
    link: "https://harshquickcart.vercel.app/",
    github: "https://github.com/harshrajput4343/New-Quickcarts",
    icon: <ShoppingCart size={24} />
  },
  {
    title: "ResoTrack",
    description: "AI-powered resume intelligence platform. Integrates Puter cloud for storage and Gemini API for ATS scoring and personalized improvement suggestions.",
    tags: ["React.js", "Gemini API", "Puter Cloud", "Tailwind CSS"],
    stats: "Real-time ATS Scoring",
    link: "https://github.com/harshrajput4343/ResoTrack/tree/main",
    github: "https://github.com/harshrajput4343/ResoTrack",
    icon: <FileText size={24} />
  },
  {
    title: "AI Medical Chatbot",
    description: "LLM-driven healthcare assistant using RAG pipeline over Pinecone vector search. Provides context-aware medical responses with reliable inference APIs.",
    tags: ["GenAI", "LangChain", "Pinecone", "Flask", "AWS"],
    stats: "Context-Aware RAG",
    link: "https://github.com/harshrajput4343/Medical-Chatbot-GenAi/tree/main",
    github: "https://github.com/harshrajput4343/Medical-Chatbot-GenAi",
    icon: <MessageSquare size={24} />
  },

  {
    title: "Waste Detection System",
    description: "An intelligent waste detection system leveraging YOLOv5 for precise real-time object detection and classification.",
    tags: ["YOLOv5", "Python", "OpenCV", "Deep Learning"],
    stats: "95% Detection Accuracy",
    link: "https://github.com/harshrajput4343/Waste-Detection-System/tree/main",
    github: "https://github.com/harshrajput4343/Waste-Detection-System",
    icon: <Trash2 size={24} />
  },

  {
    title: "PPE Detection for Construction Site Safety",
    description: "A real-time computer vision system built on YOLOv8 to detect personal protective equipment and safety violations on construction sites for automated monitoring and risk prevention.",
    tags: ["PyTorch", "YOLOv8", "Ultralytics", "OpenCV", "Computer Vision", "Python"],
    stats: "10 PPE Classes | 2,801 Labeled Images | Real-time Inference",
    link: "https://github.com/harshrajput4343/PPE-Detection-On-Construction-Using-YoloV8",
    github: "https://github.com/harshrajput4343/PPE-Detection-On-Construction-Using-YoloV8",
    icon: <HardHat size={24} />
  }
];

export const Projects = () => {
  return (
    <Section id="projects" className="container mx-auto px-6">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-4xl font-bold text-foreground mb-2">
            Featured Work
          </h2>
          <p className="text-foreground/60">Production-grade applications and AI systems.</p>
        </div>
        <Button variant="outline" className="hidden md:flex border-foreground text-foreground hover:bg-foreground hover:text-background" href="https://github.com/harshrajput4343">
          View All on GitHub <Github size={16} />
        </Button>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative bg-foreground/5 border border-foreground/5 rounded-2xl p-6 hover:bg-foreground/10 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>
              <div className="flex gap-3">
                <Link href={project.github} target="_blank" className="text-foreground/40 hover:text-foreground transition-colors">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href={project.link} target="_blank" className="text-foreground/40 hover:text-foreground transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground group-hover:text-blue-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-foreground/70 mb-6 min-h-[60px] text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-foreground/5 text-foreground/60 border border-foreground/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center md:hidden">
        <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background" href="https://github.com/harshrajput4343">
          View All on GitHub <Github size={16} />
        </Button>
      </div>
    </Section>
  );
};
