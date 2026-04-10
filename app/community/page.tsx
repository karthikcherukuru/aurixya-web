"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Community() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans relative overflow-hidden selection:bg-orange-500/30">
      
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#FF5A36]/5 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Navbar Minimal */}
      <header className="w-full flex justify-between items-center p-6 md:px-12 relative z-20">
        <Link href="/" className="font-[family-name:var(--font-pixelify)] text-2xl tracking-widest text-white hover:text-[#FF5A36] transition-colors">
          AURIXYA
        </Link>
        <Link href="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
          Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center pt-16 pb-32 px-6 relative z-10 w-full max-w-5xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF5A36] animate-pulse"></span>
            NETWORK ONLINE
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
            The Collective.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Join a curated network of AI engineers, founders, and tech visionaries. Collaborate on open-source infrastructure and stay at the bleeding edge of autonomy.
          </p>
        </motion.div>

        {/* Community Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          
          {/* Discord Card */}
          <motion.a 
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden bg-white/[0.02] border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-xl hover:bg-[#5865F2]/10 hover:border-[#5865F2]/50 transition-all duration-500"
          >
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#5865F2]/20 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-[#5865F2]"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M7.5 4.27a15.82 15.82 0 0 0-4.08 1.48A18.42 18.42 0 0 0 1.5 19a16.8 16.8 0 0 0 5 2.1 16.5 16.5 0 0 0 1.25-2.02A13.5 13.5 0 0 1 5.3 17.5a13.3 13.3 0 0 1 1.77-1.14c.22-.12.44-.24.66-.36A11.3 11.3 0 0 0 12 17a11.3 11.3 0 0 0 4.27-.9c.22.12.44.24.66.36a13.3 13.3 0 0 1 1.77 1.14 13.5 13.5 0 0 1-2.45 1.58 16.5 16.5 0 0 0 1.25 2.02 16.8 16.8 0 0 0 5-2.1 18.42 18.42 0 0 0-1.92-13.25 15.82 15.82 0 0 0-4.08-1.48"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Engineering Discord</h3>
            <p className="text-gray-400 mb-6">Real-time architecture discussions, debugging sessions, and exclusive network access.</p>
            <span className="text-sm font-bold text-[#5865F2] uppercase tracking-widest group-hover:pl-2 transition-all">Join Server →</span>
          </motion.a>

          {/* GitHub Card */}
          <motion.a 
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative overflow-hidden bg-white/[0.02] border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-xl hover:bg-white/[0.06] hover:border-white/30 transition-all duration-500"
          >
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-white"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Open Source Repos</h3>
            <p className="text-gray-400 mb-6">Access our public SDKs, infrastructure templates, and agentic framework wrappers.</p>
            <span className="text-sm font-bold text-white uppercase tracking-widest group-hover:pl-2 transition-all">View GitHub →</span>
          </motion.a>

          {/* Newsletter Card */}
          <motion.a 
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 group relative overflow-hidden bg-gradient-to-br from-[#FF5A36]/10 to-transparent border border-[#FF5A36]/20 rounded-[32px] p-8 md:p-12 backdrop-blur-xl hover:border-[#FF5A36]/50 transition-all duration-500 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1">
              <div className="w-12 h-12 bg-[#FF5A36]/20 rounded-2xl flex items-center justify-center mb-6">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF5A36]"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">The Weekly Telemetry</h3>
              <p className="text-gray-400 text-lg mb-0 max-w-lg">Get high-signal, zero-noise updates on breakthroughs in LLM fine-tuning, system architecture, and tech news.</p>
            </div>
            
            <div className="w-full md:w-auto flex items-center justify-center">
               <button className="w-full md:w-auto bg-[#FF5A36] text-white font-bold py-4 px-8 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,90,54,0.4)]">
                 Subscribe Now
               </button>
            </div>
          </motion.a>

        </div>
      </main>
    </div>
  );
}