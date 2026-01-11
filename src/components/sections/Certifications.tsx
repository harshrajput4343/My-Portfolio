"use client";
import React from "react";
import { Section } from "../ui/Section";
import { Award, Trophy, Star, Users } from "lucide-react";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    year: "2025",
    icon: <Award className="text-blue-400" size={24} />
  },
  {
    title: "Complete Data Science, Machine Learning, Deep Learning, NLP Bootcamp",
    issuer: "UDEMY - Krish Naik",
    year: "2024",
    icon: <Award className="text-cyan-400" size={24} />
  },
  {
    title: "250+ Problems Solved",
    issuer: "LeetCode / GFG",
    year: "Ongoing",
    icon: <Star className="text-yellow-400" size={24} />
  }
];

const leadership = [
  {
    title: "Cricket Team Captain",
    role: "IIIT Sri City",
    period: "Sep 2024 - Nov 2025",
    desc: "Captained the college team in intercollegiate tournaments, leading match strategy and on-field performance.",
    icon: <Trophy className="text-yellow-500" size={24} />
  },
  {
    title: "Events Coordinator",
    role: "Abhisarga (Tech Fest)",
    period: "Mar 2024 - Dec 2024",
    desc: "Managed technical event logistics for 1,500+ participants across 15+ competitions, ensuring 100% on-time execution.",
    icon: <Users className="text-purple-500" size={24} />
  }
]

export const Certifications = () => {
  return (
    <Section id="achievements" className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-white mb-4">Achievements & Leadership</h2>
      <div className="h-1 w-20 bg-blue-500 rounded-full mx-auto mb-16" />

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Certifications Column */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Award className="text-blue-400" /> Certifications
          </h3>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                <div className="mt-1">{cert.icon}</div>
                <div>
                  <h4 className="font-bold text-white leading-tight mb-1">{cert.title}</h4>
                  <div className="text-sm text-white/50 flex gap-2 items-center">
                    <span>{cert.issuer}</span>
                    <span className="w-1 h-1 bg-white/30 rounded-full" />
                    <span>{cert.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Column */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Users className="text-purple-400" /> Leadership
          </h3>
          <div className="space-y-6">
            {leadership.map((item, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-white leading-tight mb-1">{item.title}</h4>
                  <div className="text-sm text-blue-400 mb-2">{item.role} • {item.period}</div>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
