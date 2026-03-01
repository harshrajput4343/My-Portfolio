"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { ExternalLink, Github, ShoppingCart, FileText, MessageSquare, Trash2, HardHat, BookOpen, LayoutDashboard, BotMessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Button";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.12 } },
};

const projectCardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const projects = [
  {
    title: "FlowLoG",
    description: "Full-stack Trello-inspired Kanban board with drag-and-drop lists & cards, 37 Row-Level Security policies, checklists, labels, member management, dark/light themes, board templates, and real-time interactivity. 3-tier cloud architecture on Vercel + Render + Supabase.",
    tags: ["Next.js 16", "React 19", "TypeScript", "Prisma ORM", "PostgreSQL", "Supabase", "Express.js 5", "CSS Modules"],
    stats: "Full CRUD + Drag & Drop + RLS",
    link: "https://flowlogwork.vercel.app/",
    github: "https://github.com/harshrajput4343/FlowLoG",
    icon: <LayoutDashboard size={24} />
  },
  {
    title: "MultiGPT",
    description: "Multi-model AI chat app with smart auto-routing across 6 LLMs (Gemma, Nemotron, GLM). Real-time streaming, persistent chat history, tagging, full-text search, chat sharing via public links, glassmorphism UI, and Supabase Auth + RLS.",
    tags: ["React 19", "TypeScript", "Vite", "Supabase", "OpenRouter API", "Zustand", "Tailwind"],
    stats: "6 AI Models + Smart Routing",
    link: "https://multigpt.vercel.app/",
    github: "https://github.com/harshrajput4343/MULTIGPT",
    icon: <BotMessageSquare size={24} />
  },
  {
    title: "Quickart",
    description: "Production-ready e-commerce platform with SSR, static generation, and incremental regeneration. Modular frontend with TypeScript, custom hooks, global state, and serverless backend with MongoDB, Clerk Auth, and Convex real-time cart sync.",
    tags: ["Next.js 14", "TypeScript", "React", "MongoDB", "Convex", "Clerk Auth", "Serverless APIs"],
    stats: "Reduced Load Time by 40%",
    link: "https://harshquickcart.vercel.app/",
    github: "https://github.com/harshrajput4343/New-Quickcarts",
    icon: <ShoppingCart size={24} />
  },
  {
    title: "ResoTrack",
    description: "Serverless AI resume analyzer with React.js and TypeScript. Integrates Puter cloud for storage and authentication, Gemini API for ATS scoring, client-side PDF processing, and drag-and-drop file upload with real-time feedback.",
    tags: ["React.js", "TypeScript", "Gemini API", "Puter Cloud", "Tailwind CSS", "React Router"],
    stats: "Real-time ATS Scoring",
    link: "https://github.com/harshrajput4343/ResoTrack/tree/main",
    github: "https://github.com/harshrajput4343/ResoTrack",
    icon: <FileText size={24} />
  },
  {
    title: "AI Medical Chatbot",
    description: "LLM-powered healthcare assistant using GPT-4 and Gemini with prompt engineering and RAG over Pinecone vector search. LangChain pipelines for document ingestion, semantic retrieval, and Flask-based inference APIs with caching and logging.",
    tags: ["Gemini", "GPT-4", "LangChain", "Pinecone", "Hugging Face", "Flask", "AWS"],
    stats: "Context-Aware RAG Pipeline",
    link: "https://github.com/harshrajput4343/Medical-Chatbot-GenAi/tree/main",
    github: "https://github.com/harshrajput4343/Medical-Chatbot-GenAi",
    icon: <MessageSquare size={24} />
  },
  {
    title: "Book Recommender System",
    description: "Collaborative filtering–based recommender using Scikit-learn and nearest-neighbor similarity on user–item rating matrices. Features threshold-based filtering (200 books / 50 ratings), Streamlit web app, and Docker + AWS deployment.",
    tags: ["Python", "Scikit-learn", "Streamlit", "Docker", "AWS", "Kaggle"],
    stats: "Personalized Recommendations",
    link: "https://github.com/harshrajput4343",
    github: "https://github.com/harshrajput4343",
    icon: <BookOpen size={24} />
  },
  {
    title: "Waste Detection System",
    description: "Production-grade waste detection using YOLOv5 with dataset annotation, preprocessing, augmentation, and real-time inference. Modular OpenCV pipeline with bounding-box filtering, confidence scoring, and Dockerized deployment on AWS and Azure.",
    tags: ["YOLOv5", "Python", "OpenCV", "Docker", "AWS", "Azure", "CI/CD"],
    stats: "95% Detection Accuracy",
    link: "https://github.com/harshrajput4343/Waste-Detection-System/tree/main",
    github: "https://github.com/harshrajput4343/Waste-Detection-System",
    icon: <Trash2 size={24} />
  },
  {
    title: "PPE Detection for Construction Safety",
    description: "Real-time computer vision system built on YOLOv8 to detect personal protective equipment and safety violations on construction sites for automated monitoring and risk prevention.",
    tags: ["PyTorch", "YOLOv8", "Ultralytics", "OpenCV", "Computer Vision", "Python"],
    stats: "10 PPE Classes | 2,801 Labeled Images",
    link: "https://github.com/harshrajput4343/PPE-Detection-On-Construction-Using-YoloV8",
    github: "https://github.com/harshrajput4343/PPE-Detection-On-Construction-Using-YoloV8",
    icon: <HardHat size={24} />
  }
];

export const Projects = () => {
  return (
    <Section id="projects" className="container mx-auto px-6">
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }}>
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
            <motion.div
              key={project.title}
              variants={projectCardVariants}
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
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background" href="https://github.com/harshrajput4343">
            View All on GitHub <Github size={16} />
          </Button>
        </div>
      </motion.div>
    </Section>
  );
};
