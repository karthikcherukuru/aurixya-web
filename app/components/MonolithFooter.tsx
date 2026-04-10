"use client";

// ADDED: Imported 'Variants' from framer-motion
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

const footerLinks = [
  {
    title: "Company",
    links: ["Services", "Our Expertise", "The Process", "Agnostic Architecture"],
  },
  {
    title: "Expertise",
    links: ["Agentic AI Orchestration", "Predictive ERP Ecosystems", "Distributed Web Systems", "High-Availability Pipelines"],
  },
  {
    title: "Connect",
    links: ["Community", "Discover Opportunities", "strategic@aurixya.in"],
  },
  {
    title: "Legal",
    links: ["Privacy Protocol", "Terms of Engagement", "Zero-Fault SLA"],
  },
];

export default function MonolithFooter() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Deep Parallax with more steps for realism.
  const yGraphic = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yTitle = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityTitle = useTransform(scrollYProgress, [0, 0.4, 0.9, 1], [0, 1, 1, 0]);

  // ADDED: Explicitly declared the type as 'Variants' to satisfy TypeScript
  const rippleVariant: Variants = {
    initial: {
      scale: 0,
      opacity: 0.6,
    },
    hover: {
      scale: 3,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer ref={ref} className="min-h-screen bg-black w-full flex flex-col items-center justify-center pt-24 pb-12 px-6 md:px-12 font-sans relative z-10 selection:bg-orange-500/30 overflow-hidden snap-start">
      
      {/* --- LAYER 1: Parallax Background Constellation Graphic --- */}
      <motion.div style={{ y: yGraphic }} className="absolute inset-0 z-0 opacity-[0.03] flex items-center justify-center">
        <div className="w-full h-full relative">
          <div className="absolute top-[30%] left-[20%] w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-[20%] right-[25%] w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-[60%] right-[35%] w-0.5 h-0.5 bg-white rounded-full"></div>
          <div className="absolute top-[10%] left-[60%] w-[120vw] h-[60vh] border border-white/20 rounded-full"></div>
        </div>
      </motion.div>

      {/* =========================================
          LAYER 2: CINEMATIC FINALE & PRIMARY CTA
          ========================================= */}
      <div className="flex-1 flex flex-col items-center justify-center w-full z-10">
        
        {/* --- CINEMATIC TITLE --- */}
        <motion.div style={{ y: yTitle, opacity: opacityTitle }} className="text-center mb-16 md:mb-28">
          {/* ADDED: Replaced "Let's" with "Let&apos;s" to fix strict React HTML entity errors */}
          <h2 className="text-5xl md:text-8xl lg:text-[7.5rem] font-extrabold text-white tracking-tighter leading-[0.9] max-w-6xl mx-auto uppercase">
            Let&apos;s forge<br/>the autonomous future.
          </h2>
        </motion.div>

        {/* --- THE MONOLITH BUTTON --- */}
        <motion.button
          whileHover="hover"
          className="group relative overflow-hidden bg-white text-black text-2xl font-bold px-16 py-6 rounded-full shadow-[0_0_50px_rgba(255,255,255,0.25)] block"
        >
          <motion.span
            variants={rippleVariant}
            initial="initial"
            className="absolute inset-0 bg-white/40 rounded-full"
          />
          <span className="relative z-10 text-2xl font-bold uppercase tracking-widest">Architect your system</span>
        </motion.button>
      </div>

      {/* =========================================
          LAYER 3: THE COMPREHENSIVE, PREMIUM FOOTER
          ========================================= */}
      <div className="w-full max-w-7xl mx-auto z-20 mt-24 md:mt-32 pt-16 border-t border-white/5 relative">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-12 gap-y-16">
          
          {/* 1. Left Column: Logo & Value & Socials */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
            <div className="font-[family-name:var(--font-pixelify)] text-2xl tracking-widest text-white flex items-center gap-2">
              AURIXYA
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              We engineer scalable ecosystems to redefine operation telemetry and achieve true business autonomy. 
            </p>
            {/* Pure SVG Icons - No dependencies required */}
            <div className="flex items-center gap-6 text-gray-600">
              {/* LinkedIn SVG */}
              <a href="https://linkedin.com/company/aurixya" target="_blank" className="hover:text-white transition-colors" title="Linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              {/* Instagram SVG */}
              <a href="https://instagram.com/aurixya" target="_blank" className="hover:text-white transition-colors" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              {/* Mail SVG */}
              <a href="mailto:contact@aurixya.in" className="hover:text-white transition-colors" title="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
              {/* MapPin SVG */}
              <div className="hover:text-white transition-colors cursor-default" title="HQ (Placeholder)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
            </div>
          </div>

          {/* 2-5. Link Columns (Populated) */}
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col gap-5">
              <h5 className="text-gray-500 font-mono text-xs uppercase tracking-[0.2em] mb-3">{section.title}</h5>
              <div className="flex flex-col gap-3 text-gray-400 font-medium text-sm">
                {section.links.map((link) => (
                  <button key={link} className="hover:text-white transition-colors text-left">
                    {link}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* =========================================
            LAYER 4: MINIMALIST BOTTOM BAR
            ========================================= */}
        <div className="w-full mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-700 font-mono text-xs gap-4">
          <p>© 2024 AURIXYA. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <button className="hover:text-white transition-colors">Privacy Protocol</button>
            <button className="hover:text-white transition-colors">Terms of Engagement</button>
          </div>
        </div>
      </div>

    </footer>
  );
}