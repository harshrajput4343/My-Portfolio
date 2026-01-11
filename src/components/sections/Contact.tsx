"use client";
import React from "react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { Send, MapPin, Mail, Linkedin } from "lucide-react";
import { Card } from "../ui/Card";

export const Contact = () => {
  return (
    <Section id="contact" className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Build the Future</h2>
          <p className="text-white/60">
            Interested in collaboration or have a project in mind? Let's connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-white/70 ml-1">Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Harsh Kumar"
                  suppressHydrationWarning
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70 ml-1">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="harshkumarsingh4343@gmail.com"
                  suppressHydrationWarning
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70 ml-1">Message</label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors min-h-[150px]"
                  placeholder="Tell me about your project..."
                  suppressHydrationWarning
                />
              </div>
              <Button className="w-full">
                Send Message <Send size={18} />
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <Card className="flex items-center gap-4 bg-white/5 border-white/5">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white">Email</h4>
                <a href="mailto:contact@harshkumar.ai" className="text-white/60 hover:text-white transition-colors">harshkumarsingh4343@gmail.com</a>
              </div>
            </Card>

            <Card className="flex items-center gap-4 bg-white/5 border-white/5">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Linkedin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white">LinkedIn</h4>
                <a href="#" className="text-white/60 hover:text-white transition-colors">www.linkedin.com/in/harshkumar4343</a>
              </div>
            </Card>

            <Card className="flex items-center gap-4 bg-white/5 border-white/5">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white">Location</h4>
                <span className="text-white/60">India (Open to Remote)</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};
