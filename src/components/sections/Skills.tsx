"use client";
import React from "react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const, staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const skillsData = [
  {
    category: "Languages",
    items: ["C/C++", "TypeScript", "JavaScript", "Python", "SQL"],
    color: "from-blue-600 to-indigo-600"
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Shadcn UI", "Redux", "Tiptap"],
    color: "from-pink-500 to-rose-500"
  },
  {
    category: "Backend & Databases",
    items: ["Node.js", "Express.js", "FastAPI", "Flask", "MongoDB", "PostgreSQL", "REST APIs", "WebSockets"],
    color: "from-purple-500 to-indigo-500"
  },
  {
    category: "Data Science & ML",
    items: ["EDA", "Feature Engineering", "Statistical Analysis", "Data Visualization", "Scikit-learn", "Classification", "Regression", "Clustering", "Ensemble Methods", "Hyperparameter Tuning"],
    color: "from-emerald-500 to-teal-600"
  },
  {
    category: "Deep Learning & LLMs",
    items: ["PyTorch", "Transformers", "Hugging Face", "LangChain", "RAG Pipelines", "GPT-4", "Gemini", "Azure OpenAI", "CNN", "Attention Networks"],
    color: "from-orange-500 to-red-500"
  },
  {
    category: "MLOps & DevOps",
    items: ["Docker", "CI/CD", "MLflow", "AWS", "Azure", "Git/GitHub", "GitHub Actions", "Vercel", "Model Deployment"],
    color: "from-cyan-500 to-blue-500"
  },
  {
    category: "Data & Visualization",
    items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Power BI", "Streamlit", "Pinecone", "ChromaDB", "Weaviate"],
    color: "from-yellow-500 to-amber-500"
  },
  {
    category: "Core CS",
    items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Operating Systems"],
    color: "from-slate-500 to-gray-600"
  }
];

export const Skills = () => {
  return (
    <Section id="skills" className="container mx-auto px-6">
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
        <div className="h-1 w-20 bg-blue-600 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((skillGroup, index) => (
          <motion.div key={index} variants={cardVariants}>
          <Card
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
          </motion.div>
        ))}
      </div>
      </motion.div>
    </Section>
  );
};


