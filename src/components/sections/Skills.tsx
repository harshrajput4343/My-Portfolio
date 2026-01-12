"use client";
import React from "react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    items: ["C/C++", "TypeScript", "JavaScript", "Python", "SQL"],
    color: "from-blue-600 to-indigo-600"
  },
  {
    category: "Backend & Cloud",
    items: ["Node.js", "Express.js", "FastAPI", "MongoDB", "PostgreSQL", "Django"],
    color: "from-purple-500 to-indigo-500"
  },
  {
    category: "Databases & Vector Stores",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Pinecone", "ChromaDB", "Weaviate"],
    color: "from-emerald-500 to-teal-600"
  },
  {
    category: "MLOps & Deployment",
    items: ["FastAPI", "REST APIs", "Docker", "CI/CD", "MLflow", "Model Deployment", "Experiment Tracking"],
    color: "from-orange-500 to-red-500"
  },
  {
    category: "Cloud & Tools",
    items: ["AWS", "Azure", "Git", "GitHub Actions", "Streamlit", "Power BI", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
    color: "from-cyan-500 to-blue-500"
  }
];

export const Skills = () => {
  return (
    <Section id="skills" className="container mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
        <div className="h-1 w-20 bg-blue-600 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((skillGroup, index) => (
          <Card
            key={index}
            className="group hover:border-foreground/20 transition-colors bg-white/50 backdrop-blur-sm shadow-sm"
          >
            <h3 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${skillGroup.color} mb-6`}>
              {skillGroup.category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-md bg-white border border-gray-200 text-sm font-medium text-gray-800 shadow-sm hover:shadow-md hover:border-blue-200 hover:text-blue-600 transition-all"
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


