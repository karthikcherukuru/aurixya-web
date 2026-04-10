"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "AGENTIC AI",
    heading: "Build Autonomous Systems That Think, Decide, and Act Independently",
    paragraphs: [
      "Create advanced AI agents that go beyond simple interactions—automating workflows, making intelligent decisions, and executing tasks in real time.",
      "Our systems integrate seamlessly into your business, continuously learning and optimizing performance.",
      "From multi-agent ecosystems to self-evolving pipelines, we transform AI into a powerful digital workforce."
    ]
  },
  {
    title: "WEB DEVELOPMENT",
    heading: "High-Performance Digital Experiences Built to Scale and Convert",
    paragraphs: [
      "Develop ultra-fast, visually striking websites and web applications designed for scalability and engagement.",
      "We leverage modern frameworks and refined UI/UX principles to craft premium digital products.",
      "Whether startup or enterprise, we build platforms that not only impress—but deliver measurable growth."
    ]
  },
  {
    title: "DATA ENGINEERING",
    heading: "Turn Complex Data Into Scalable, Actionable Intelligence",
    paragraphs: [
      "Design and implement powerful data pipelines that process and deliver insights in real time.",
      "We build scalable infrastructures capable of handling large volumes with speed and precision.",
      "Transform raw data into clarity with systems optimized for analytics, AI, and decision-making."
    ]
  },
  {
    title: "CONSULTING",
    heading: "Strategic Tech Expertise to Drive Innovation and Growth",
    paragraphs: [
      "Work with experts who align technology with real business outcomes.",
      "We uncover opportunities, streamline processes, and design tailored solutions for your needs.",
      "From strategy to execution, we enable smarter, faster, and future-ready decisions."
    ]
  },
  {
    title: "AI VOICE AGENT",
    heading: "Intelligent Voice Automation That Works 24/7 Without Fail",
    paragraphs: [
      "Implement AI voice assistants that manage calls, schedule appointments, and resolve queries 24/7.",
      "Handle multiple conversations simultaneously across multiple languages with natural, human-like interactions.",
      "Increase efficiency, reduce costs, and deliver seamless customer experiences at scale."
    ]
  }
];

// ADDED: Explicitly telling TypeScript this is a tuple of exactly 4 numbers
const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="min-h-screen bg-black w-full flex flex-col items-center justify-center py-24 px-4 font-sans relative z-10 snap-start">
      
      {/* --- TABS NAVIGATION (HEADINGS) --- */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16 w-full max-w-5xl relative z-20">
        {services.map((service, index) => (
          <button
            key={service.title}
            onClick={() => setActiveTab(index)}
            className={`text-sm md:text-base font-bold tracking-widest uppercase transition-colors duration-500 ease-out relative pb-2 ${
              activeTab === index 
                ? "text-[#FF5A36] drop-shadow-[0_0_8px_rgba(255,90,54,0.6)]" 
                : "text-gray-600 hover:text-[#FF5A36]"
            }`}
          >
            {service.title}
            
            {/* Animated underline with Fluid Spring physics */}
            {activeTab === index && (
              <motion.div
                layoutId="activeTabUnderline"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute left-0 bottom-0 h-[2px] w-full bg-[#FF5A36] shadow-[0_0_10px_rgba(255,90,54,0.8)]"
              />
            )}
          </button>
        ))}
      </div>

      {/* --- STACKED GLASS CARDS CONTAINER --- */}
      <div className="relative w-full max-w-4xl h-[500px] md:h-[400px]">
        {services.map((service, index) => {
          const offset = (index - activeTab + services.length) % services.length;
          
          return (
            <motion.div
              key={service.title}
              initial={false}
              animate={{
                top: offset * 24, 
                scale: 1 - offset * 0.05, 
                zIndex: services.length - offset,
                opacity: offset === 0 ? 1 : Math.max(1 - offset * 0.3, 0),
              }}
              transition={{ 
                duration: 0.8, 
                ease: premiumEase 
              }}
              className="absolute left-0 w-full p-8 md:p-12 rounded-3xl bg-white/[0.02] backdrop-blur-3xl border border-white/5 shadow-[0_16px_40px_0_rgba(0,0,0,0.4)]"
            >
              <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                {service.heading}
              </h2>
              <div className="space-y-4 text-gray-400 font-medium md:text-lg">
                {service.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}