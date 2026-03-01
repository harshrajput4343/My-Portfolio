"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { Send, MapPin, Mail, Linkedin, Phone } from "lucide-react";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus("Please fill in all fields");
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    // Create mailto link with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:harshkumarsingh4343@gmail.com?subject=${subject}&body=${body}`;

    // Open default email client
    window.location.href = mailtoLink;

    setStatus("Opening your email client...");

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setStatus("");
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Section id="contact" className="container mx-auto px-6">
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Let's Build the Future</h2>
          <p className="text-foreground/60">
            Interested in collaboration or have a project in mind? Let's connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm text-foreground/70 ml-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Harsh Kumar"
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                  suppressHydrationWarning
                />
              </div>
              <div>
                <label className="text-sm text-foreground/70 ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Harsh@example.com"
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                  suppressHydrationWarning
                />
              </div>
              <div>
                <label className="text-sm text-foreground/70 ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-blue-500 transition-colors min-h-[150px]"
                  suppressHydrationWarning
                />
              </div>
              {status && (
                <p className={`text-sm ${status.includes("fill") ? "text-red-400" : "text-green-400"}`}>
                  {status}
                </p>
              )}
              <Button type="submit" size="lg" className="w-full">
                Send Message <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center space-y-8 pl-0 md:pl-12 border-l border-foreground/10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Email</h4>
                <a href="mailto:harshkumarsingh4343@gmail.com" className="text-foreground/60 hover:text-foreground transition-colors block">harshkumarsingh4343@gmail.com</a>
                <a href="mailto:harsh.k22@iiits.in" className="text-foreground/60 hover:text-foreground transition-colors block text-sm">harsh.k22@iiits.in</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Phone</h4>
                <a href="tel:+919341045191" className="text-foreground/60 hover:text-foreground transition-colors">+91 9341045191</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">LinkedIn</h4>
                <a href="https://www.linkedin.com/in/harshkumar4343/" target="_blank" className="text-foreground/60 hover:text-foreground transition-colors">linkedin.com/in/harshkumar4343</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Location</h4>
                <span className="text-foreground/60">India (Open to Remote)</span>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </Section>
  );
};
