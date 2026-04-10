"use client";

import { motion } from "framer-motion";

export default function Showroom() {
  return (
    <div className="w-full bg-[#fcfcfc] relative z-10 font-sans selection:bg-orange-500/30">
      
      {/* ==============================================
          OPTION 1: THE LIGHT BENTO GRID (Impact & Scale)
          ============================================== */}
      <section className="min-h-screen snap-start flex flex-col justify-center max-w-6xl mx-auto w-full px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-[#FF5A36] font-mono text-sm tracking-[0.2em] mb-4">AURIXYA</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">Engineering Scale & Autonomy</h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">Measurable impact through high-fidelity engineering and autonomous systems.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/80 border border-gray-200/80 rounded-[32px] p-10 backdrop-blur-2xl hover:bg-white hover:border-gray-300 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <h4 className="text-[#FF5A36] font-mono mb-4 uppercase tracking-widest text-xs">Conversational Autonomy</h4>
            <div className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Front-Desk AI Eradication of Human Bottlenecks.</div>
            <p className="text-gray-600 text-lg leading-relaxed">
              We revolutionized inbound routing and customer reception for high-volume enterprises. By deploying autonomous voice agents capable of natural language processing and dynamic scheduling, we engineered zero-latency query resolution—achieving 24/7 operational continuity and unprecedented administrative efficiency.
            </p>
          </div>

          <div className="bg-white/80 border border-gray-200/80 rounded-[32px] p-10 backdrop-blur-2xl hover:bg-white hover:border-gray-300 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <h4 className="text-[#FF5A36] font-mono mb-4 uppercase tracking-widest text-xs">Enterprise Infrastructure</h4>
            <div className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Bespoke ERP Ecosystems for Conglomerates.</div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Architected and deployed a massive-scale, high-availability ERP matrix for a multi-regional grocery conglomerate. We unified fragmented inventory telemetry, predictive supply-chain algorithms, and real-time point-of-sale synchronization into a single, high-fidelity command center.
            </p>
          </div>

          <div className="md:col-span-2 bg-gradient-to-br from-white to-gray-50 border border-gray-200/80 rounded-[32px] p-10 md:p-12 backdrop-blur-2xl hover:border-gray-300 transition-all duration-500 flex flex-col md:flex-row items-center gap-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <div className="flex-1">
              <h4 className="text-[#FF5A36] font-mono mb-4 uppercase tracking-widest text-xs">Agnostic Architecture</h4>
              <div className="text-4xl font-extrabold text-gray-900 mb-4">We Don't Force Frameworks.</div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Client parameters dictate our tools, not the other way around. Whether you require the absolute concurrency of Go, the rapid deployment of Next.js, or complex Python-based neural networks, we engineer tailored tech ecosystems optimized strictly for your specific scaling trajectory and security requirements.
              </p>
            </div>
            <div className="w-full md:w-1/3 h-40 rounded-2xl bg-gray-100 border border-gray-200 relative overflow-hidden flex items-center justify-center shadow-inner">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,54,0.05)_0,transparent_70%)]"></div>
               <div className="text-gray-400 font-mono text-sm text-center">SYSTEM_AGNOSTIC<br/>[INFRASTRUCTURE_READY]</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================
          OPTION 2: THE LIGHT NEURAL PIPELINE
          ============================================== */}
      <section className="min-h-screen snap-start flex flex-col justify-center max-w-5xl mx-auto w-full px-4 relative py-16">
        <div className="text-center mb-20">
          <h2 className="text-[#FF5A36] font-mono text-sm tracking-[0.2em] mb-4">AURIXYA</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">The Engineering Pipeline</h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">From abstract concept to autonomous execution.</p>
        </div>

        <div className="relative flex flex-col py-10">
          <div className="absolute left-[36px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gray-300 to-transparent md:-translate-x-1/2"></div>
          
          {[
            { step: "01", title: "Pre-Onboard Analysis", desc: "Rigorous infrastructural audits to identify operational bottlenecks. We architect high-yield technical roadmaps before a single line of code is written." },
            { step: "02", title: "Ecosystem Onboarding", desc: "Synchronizing our engineering protocols with your business objectives, establishing secure data pipelines, access controls, and communication cadences." },
            { step: "03", title: "Core Development", desc: "Executing agile, high-velocity engineering sprints. Building the foundational logic, integrating LLMs, and forging scalable backend architectures." },
            { step: "04", title: "Rigorous Testing", desc: "Subjecting the platform to extreme load-testing, security penetration, and edge-case simulations to guarantee absolute zero-fault tolerances." },
            { step: "05", title: "Live Deployment", desc: "Executing zero-downtime migrations and live market launches, seamlessly transitioning systems from staging into high-traffic production environments." },
            { step: "06", title: "Strategic Closure", desc: "Delivering comprehensive documentation, operational training, and establishing real-time telemetry for future-proof scaling and continuous evolution." }
          ].map((item, i) => (
            <div key={item.step} className={`flex w-full mb-12 relative ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"} justify-start pl-24 md:pl-0`}>
              
              <div className="absolute left-[28px] md:left-1/2 top-8 w-5 h-5 bg-[#FF5A36] rounded-full -translate-y-1/2 md:-translate-x-1/2 shadow-[0_0_15px_rgba(255,90,54,0.4)] border-[4px] border-white z-10"></div>
              
              <div className="w-full md:w-[45%] bg-white/80 border border-gray-200 p-8 rounded-3xl backdrop-blur-xl hover:bg-white hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300">
                <span className="text-[#FF5A36] font-mono text-xl mb-3 block opacity-90">{item.step}</span>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==============================================
          OPTION 3: THE LIGHT CONSTELLATION
          ============================================== */}
      <section className="min-h-screen snap-start flex flex-col justify-center max-w-7xl mx-auto w-full px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-[#FF5A36] font-mono text-sm tracking-[0.2em] mb-4">AURIXYA</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">The Neural Network</h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">A dynamic web of our technical capabilities and intelligence architectures.</p>
        </div>

        <div className="w-full h-[600px] relative overflow-hidden bg-gray-50 border border-gray-200 rounded-[40px] flex items-center justify-center shadow-inner">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          {[
            { word: "Multi-Agent Orchestration", top: "15%", left: "10%", delay: 0, size: "text-xl", color: "text-[#FF5A36]" },
            { word: "RAG Pipelines", top: "25%", right: "15%", delay: 1, size: "text-2xl", color: "text-gray-900" },
            { word: "Vector Databases", top: "70%", left: "15%", delay: 2, size: "text-lg", color: "text-gray-600" },
            { word: "Server-Side Rendering", top: "10%", right: "30%", delay: 0.5, size: "text-sm", color: "text-gray-400" },
            { word: "Predictive Analytics", top: "80%", right: "10%", delay: 1.5, size: "text-xl", color: "text-gray-800" },
            { word: "Goroutines & Concurrency", bottom: "20%", left: "30%", delay: 2.5, size: "text-[#FF5A36]", color: "text-[#FF5A36] font-mono" },
            { word: "Micro-Frontends", top: "45%", left: "5%", delay: 1.2, size: "text-sm", color: "text-gray-500" },
            { word: "Real-Time Telemetry", bottom: "15%", right: "35%", delay: 0.8, size: "text-lg", color: "text-gray-700" },
            { word: "LLM Fine-Tuning", top: "40%", right: "5%", delay: 2.2, size: "text-xl", color: "text-gray-900" },
            { word: "ETL Data Lakes", bottom: "30%", right: "20%", delay: 0.3, size: "text-sm", color: "text-gray-400" },
            { word: "Distributed Systems", top: "60%", left: "10%", delay: 1.8, size: "text-2xl", color: "text-[#FF5A36]" },
            { word: "WebSockets", top: "30%", left: "25%", delay: 0.7, size: "text-base", color: "text-gray-500" },
            { word: "Semantic Search", bottom: "40%", left: "20%", delay: 1.1, size: "text-lg", color: "text-gray-800" },
          ].map((item, index) => (
            <motion.div 
              key={index}
              animate={{ y: [0, -15, 0], opacity: [0.7, 1, 0.7] }} 
              transition={{ repeat: Infinity, duration: 4 + (index % 3), ease: "easeInOut", delay: item.delay }} 
              className={`absolute ${item.size} ${item.color} font-bold tracking-wide drop-shadow-sm cursor-default hover:text-[#FF5A36] hover:scale-110 transition-all z-10`}
              style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
            >
              {item.word}
            </motion.div>
          ))}
          
          <div className="relative z-20 w-40 h-40 rounded-full border border-gray-200 flex flex-col items-center justify-center backdrop-blur-md bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
             <div className="w-full h-full absolute inset-0 rounded-full border-t-[2px] border-[#FF5A36] animate-spin" style={{ animationDuration: '3s' }}></div>
            <span className="font-[family-name:var(--font-pixelify)] text-gray-900 tracking-widest text-xl">AURIXYA</span>
            <span className="text-[10px] text-[#FF5A36] font-mono tracking-[0.3em] mt-1">CORE</span>
          </div>
        </div>
      </section>

    </div>
  );
}