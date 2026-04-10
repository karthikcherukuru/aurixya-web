"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const philosophies = [
  {
    num: "01",
    title: "Absolute Autonomy",
    desc: "We don't just build software; we engineer digital workforces. Our systems are designed to operate, learn, and scale independently, removing human bottlenecks from your operations."
  },
  {
    num: "02",
    title: "Framework Agnostic",
    desc: "We are not bound to a single stack. Whether it requires the raw concurrency of Go, the speed of Next.js, or complex Python neural networks, we use the exact right tool for the mathematical reality of your problem."
  },
  {
    num: "03",
    title: "Zero-Fault Tolerance",
    desc: "In enterprise environments, 'good enough' is a vulnerability. We subject our architectures to rigorous edge-case simulations and load testing to ensure 99.9% uptime and impenetrable security."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans relative overflow-hidden selection:bg-orange-500/30">
      
      {/* Background Glow Effects */}
      <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[#FF5A36]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-20%] w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

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
      <main className="flex-1 flex flex-col items-center pt-20 pb-32 px-6 relative z-10 w-full max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 max-w-3xl"
        >
          <h2 className="text-[#FF5A36] font-mono text-sm tracking-[0.2em] mb-6 uppercase">The Aurixya Standard</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
            We Engineer <br/>The Future.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Aurixya is a premier technical agency specializing in Agentic AI, high-performance web ecosystems, and scalable data pipelines. We partner with visionaries to turn complex data into actionable intelligence.
          </p>
        </motion.div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {philosophies.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/[0.03] border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 flex flex-col h-full"
            >
              <span className="text-[#FF5A36] font-mono text-2xl mb-6 opacity-80">{item.num}</span>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed flex-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </main>
    </div>
  );
}