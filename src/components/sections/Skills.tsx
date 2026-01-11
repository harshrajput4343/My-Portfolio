"use client";
import React from "react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    items: ["C/C++", "TypeScript", "JavaScript", "Python", "SQL"],
    color: "from-blue-500 to-blue-700"
  },
  {
    category: "Backend & Cloud",
    items: ["Node.js", "Express.js", "FastAPI", "MongoDB", "PostgreSQL", "AWS", "Docker"],
    color: "from-purple-500 to-indigo-500"
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Shadcn UI", "Redux", "Tiptap"],
    color: "from-cyan-500 to-teal-500"
  },
  {
    category: "AI Engineering",
    items: ["RAG Pipelines", "LLM Inference", "MLflow", "LangChain", "Hugging Face", "PyTorch"],
    color: "from-pink-500 to-rose-500"
  }
];

export const Skills = () => {
  return (
    <Section id="skills" className="container mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
        <div className="h-1 w-20 bg-blue-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((skillGroup, index) => (
          <Card
            key={index}
            className="group hover:border-white/20 transition-colors"
          >
            <h3 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${skillGroup.color} mb-6`}>
              {skillGroup.category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-sm text-white/70 group-hover:bg-white/10 group-hover:text-white transition-all shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${skillGroup.color} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity`} />
          </Card>
        ))}
      </div>
    </Section>
  );
};
