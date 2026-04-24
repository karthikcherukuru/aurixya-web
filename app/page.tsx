"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Services from "./components/Services";
import Showroom from "./components/Showroom";
import MonolithFooter from "./components/MonolithFooter";

// More advanced content for the rotating text
const rotatingWords = [
  "CONVERSATIONAL AGENTS",
  "AI VOICE AGENTS",
  "PREDICTIVE ANALYTICS DASHBOARDS",
  "REVENUE GENERATION PLATFORMS",
  "HIGH-FIDELITY USER EXPERIENCES"
];

export default function Home() {
  const [index, setIndex] = useState(0);

  // We need a ref for the Showroom section to track its scroll position
  const mainScrollRef = useRef(null);

  // Create scroll animations linked to the entire page
  const { scrollYProgress } = useScroll();

  // CYCLE WORDS
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // SCROLL-LINKED NAVBAR ANIMATION (Hides as user scrolls)
  // When page is unscrolled (0), navbar is visible (opacity 1).
  // When user is about 1.5 screens down (0.3 scroll progress), navbar is hidden (opacity 0 and y: 100).
  const navbarOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const navbarY = useTransform(scrollYProgress, [0, 0.3], [0, 100]); // Slides down out of frame

  return (
    // Outer wrapper allowing natural scrolling
    <div ref={mainScrollRef} className="bg-[#0a0a0a] text-white font-sans selection:bg-orange-500/30 relative">
      
      {/* =========================================
          1. HERO SECTION (Takes up exactly 1 screen)
          ========================================= */}
      <div className="min-h-screen flex flex-col relative z-10 snap-start">
        
        {/* =========================================
            VERCEL-STYLE DEPLOYMENT GLOW
            ========================================= */}
        <div 
          className="absolute top-0 inset-x-0 w-full h-[60vh] opacity-70 blur-[60px] pointer-events-none z-[-1]"
          style={{
            backgroundImage: 'linear-gradient(to right, #ef008f, #6ec3f4, #7038ff, #ffffff, #ef008f)',
            backgroundSize: '200% 100%',
            animation: 'gradient-x 12s ease-in-out infinite',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)'
          }}
        />
        <style>{`
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>

        {/* --- TOP HEADER --- */}
        <header className="w-full flex justify-between items-center p-6 md:px-12 relative z-20">
          <div className="font-[family-name:var(--font-pixelify)] text-2xl tracking-widest text-white flex items-center gap-2">
            AURIXYA
          </div>
          
          <Link href="/contact" className="group relative overflow-hidden px-4 py-2 border border-white/20 rounded-md text-sm font-medium shadow-sm transition-all duration-300">
            <span className="absolute inset-0 w-full h-full bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
            <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
              Get in touch
            </span>
          </Link>
        </header>

        {/* --- MAIN CENTER CONTENT --- */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 w-full max-w-5xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-extrabold tracking-tight text-center leading-[1] flex flex-col items-center w-full">
            <span className="text-white uppercase font-sans">BUILD</span>
            
            <div className="h-[1.5em] relative w-full flex justify-center mt-2">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={rotatingWords[index]}
                  initial={{ y: 80, opacity: 0, filter: "blur(6px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -80, opacity: 0, filter: "blur(6px)" }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.22, 1, 0.36, 1] // Butter-smooth custom ease
                  }}
                  className="absolute w-full text-center font-[family-name:var(--font-pixelify)] text-gray-300 tracking-normal uppercase text-4xl md:text-6xl lg:text-[5rem]"
                >
                  {rotatingWords[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>
        </main>
      </div>

      {/* =========================================
          2. SERVICES SECTION (Stacked cards)
          ========================================= */}
      <Services />

      {/* =========================================
          3. THE SHOWROOM (Bento, Neural, Constellation)
          ========================================= */}
      <Showroom />

      {/* =========================================
          4. THE MONOLITH FINALE & FOOTER (NEW & PREMIUM)
          ========================================= */}
      <MonolithFooter />

      {/* =========================================
          5. BOTTOM FLOATING NAV BAR (Fixed & Animated)
          ========================================= */}
      {/* Wrapped in a motion div with scroll-linked opacity and Y transform */}
      <motion.div 
        style={{ 
          opacity: navbarOpacity,
          y: navbarY
        }}
        className="fixed bottom-8 w-full flex justify-center px-4 z-50 pointer-events-none"
      >
        {/* pointer-events-auto ensures the buttons are still clickable */}
        <div className="bg-[#1c1c1c]/90 border border-white/10 rounded-full p-2 flex items-center shadow-2xl backdrop-blur-xl pointer-events-auto">
          
          <div className="flex items-center gap-6 md:gap-8 px-6 text-sm font-medium text-gray-400">
            {/* Linked directly to the new pages */}
            <Link href="/about" className="hover:text-white transition-colors">About us</Link>
            <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Internal Glare Animation: Routed to /contact */}
          <Link
            href="/contact"
            className="group relative overflow-hidden ml-2 bg-[#FF5A36] text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-[0_0_15px_rgba(255,90,54,0.3)] block"
          >
            <span className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-[800ms] ease-in-out z-0 skew-x-12 w-full"></span>
            <span className="relative z-10">Write to us</span>
          </Link>
        </div>
      </motion.div>

    </div>
  );
}