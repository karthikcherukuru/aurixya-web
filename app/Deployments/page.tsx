"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Deployments() {
  const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans relative overflow-hidden selection:bg-[#00FF66]/30">
      
      {/* =========================================
          VERCEL-STYLE DEPLOYMENT GLOW
          ========================================= */}
      <div 
        className="absolute top-0 inset-x-0 w-full h-[60vh] opacity-70 blur-[60px] pointer-events-none z-0"
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

      {/* Navbar Minimal */}
      <header className="w-full flex justify-between items-center p-6 md:px-12 relative z-20">
        <Link href="/" className="font-[family-name:var(--font-pixelify)] text-2xl tracking-widest text-white hover:text-[#6ec3f4] transition-colors">
          AURIXYA
        </Link>
        <Link href="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
          Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center pt-16 pb-32 px-6 relative z-10 w-full max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="text-center mb-20 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#6ec3f4] animate-pulse"></span>
            LIVE SYSTEMS
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
            Deployments.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Explore our production-grade ecosystems. Built for scale, engineered for absolute autonomy.
          </p>
        </motion.div>

        {/* =========================================
            DEPLOYMENT 1: AURIXYA BILLING (BENTO GRID)
            ========================================= */}
        <div className="w-full mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Aurixya Billing</h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-[#00FF66]/10 text-[#00FF66] text-sm font-medium border border-[#00FF66]/20">Lightning-fast billing workflows</span>
                <span className="px-4 py-2 rounded-full bg-white/5 text-gray-300 text-sm font-medium border border-white/10">Automated compliance</span>
              </div>
            </div>
            <Link href="/contact">
              <button className="bg-white text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform whitespace-nowrap">
                Request a Demo
              </button>
            </Link>
          </motion.div>

          {/* 6-Image Asymmetrical Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[600px] w-full">
            
            {/* Image 1: Main Large Feature */}
            <motion.div className="md:col-span-2 md:row-span-2 rounded-[32px] overflow-hidden bg-white/5 border border-white/10 relative group">
              {/* Replace src with your image: /images/billing-1.png */}
              <img src="/images/placeholder-1.jpg" alt="Aurixya Billing Dashboard" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity hover:mix-blend-normal" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 font-mono text-sm text-[#00FF66]">01 // CORE DASHBOARD</div>
            </motion.div>

            {/* Image 2: Top Right Wide */}
            <motion.div className="md:col-span-2 md:row-span-1 rounded-[32px] overflow-hidden bg-white/5 border border-white/10 relative group">
              <img src="/images/placeholder-2.jpg" alt="Billing Workflow" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity hover:mix-blend-normal" />
              <div className="absolute bottom-4 left-6 font-mono text-xs text-white/70">02 // WORKFLOW</div>
            </motion.div>

            {/* Image 3: Middle Right Square 1 */}
            <motion.div className="md:col-span-1 md:row-span-1 rounded-[32px] overflow-hidden bg-white/5 border border-white/10 relative group">
              <img src="/images/placeholder-3.jpg" alt="Compliance Checks" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity hover:mix-blend-normal" />
              <div className="absolute bottom-4 left-4 font-mono text-xs text-white/70">03 // COMPLIANCE</div>
            </motion.div>

            {/* Image 4: Middle Right Square 2 */}
            <motion.div className="md:col-span-1 md:row-span-1 rounded-[32px] overflow-hidden bg-white/5 border border-white/10 relative group">
              <img src="/images/placeholder-4.jpg" alt="Analytics" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity hover:mix-blend-normal" />
              <div className="absolute bottom-4 left-4 font-mono text-xs text-white/70">04 // ANALYTICS</div>
            </motion.div>

            {/* Image 5: Bottom Left Wide */}
            <motion.div className="md:col-span-2 md:row-span-1 rounded-[32px] overflow-hidden bg-white/5 border border-white/10 relative group">
              <img src="/images/placeholder-5.jpg" alt="Patient Records" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity hover:mix-blend-normal" />
              <div className="absolute bottom-4 left-6 font-mono text-xs text-white/70">05 // PATIENT DATA</div>
            </motion.div>

            {/* Image 6: Bottom Right Wide */}
            <motion.div className="md:col-span-2 md:row-span-1 rounded-[32px] overflow-hidden bg-[#00FF66]/5 border border-[#00FF66]/20 relative group flex items-center justify-center">
              <img src="/images/placeholder-6.jpg" alt="Invoicing" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500 mix-blend-luminosity" />
              <div className="relative z-10 text-center px-4">
                <h3 className="text-[#00FF66] font-bold text-xl mb-1">Zero-Friction Invoicing</h3>
                <p className="text-gray-400 text-sm">Engineered for the White & Green aesthetic.</p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* =========================================
            DEPLOYMENT 2: AI FRONTDESK OPS
            ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="w-full relative overflow-hidden rounded-[40px] bg-white/[0.02] border border-white/10 backdrop-blur-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* Text Content */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7038ff]/10 border border-[#7038ff]/20 text-xs font-mono text-[#7038ff] mb-6 w-max">
                <span className="w-2 h-2 rounded-full bg-[#7038ff] animate-pulse"></span>
                AGENTIC AI ECOSYSTEM
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">AI Frontdesk Ops</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Replace manual phone tagging with an autonomous conversational agent. It speaks directly with your patients, handles complex scheduling, and integrates seamlessly into your clinic&apos;s existing calendar.
              </p>
              
              <ul className="flex flex-col gap-4 mb-10">
                <li className="flex items-center gap-4 text-gray-300">
                  <svg className="w-6 h-6 text-[#7038ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="font-medium text-lg">Multi-lingual Voice Capabilities</span>
                </li>
                <li className="flex items-center gap-4 text-gray-300">
                  <svg className="w-6 h-6 text-[#7038ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="font-medium text-lg">24/7 Autonomous Booking</span>
                </li>
              </ul>

              <Link href="/contact" className="w-max">
                <button className="bg-gradient-to-r from-[#6ec3f4] via-[#7038ff] to-[#ef008f] text-white font-bold px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(112,56,255,0.3)]">
                  Request a Demo
                </button>
              </Link>
            </div>

            {/* Image Content */}
            <div className="relative min-h-[400px] lg:min-h-full bg-[#0a0a0a] border-t lg:border-t-0 lg:border-l border-white/10 overflow-hidden group">
              {/* Replace src with your image: /images/ai-frontdesk.jpg */}
              <img src="/images/ai-placeholder.jpg" alt="AI Frontdesk Interface" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700 mix-blend-luminosity" />
              
              {/* Abstract Visualizer Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-32 h-32 rounded-full border border-[#7038ff]/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                <div className="absolute w-16 h-16 rounded-full bg-[#7038ff]/20 blur-xl animate-pulse"></div>
              </div>
              <div className="absolute bottom-6 right-6 font-mono text-xs text-gray-500 bg-black/50 px-3 py-1 rounded-full backdrop-blur-md">
                VOICE_NODE_ACTIVE
              </div>
            </div>

          </div>
        </motion.div>

      </main>
    </div>
  );
}