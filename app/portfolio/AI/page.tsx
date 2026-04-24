import Link from "next/link";

export default function AgenticAIPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-cyan-500/30 overflow-hidden pb-24">
      
      {/* Ambient Neural Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-cyan-900/10 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-purple-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-12 px-6 sm:px-12">
        
        {/* Navigation Bar */}
        <div className="flex justify-between items-center mb-20">
          <Link href="/" className="font-mono text-xl font-bold tracking-widest text-white hover:opacity-80 transition-opacity">
            AURIXYA
          </Link>
          <Link href="/portfolio" className="text-sm text-gray-400 hover:text-white transition-colors">
            &larr; Back to Portfolio
          </Link>
        </div>

        {/* Executive Hero Section */}
        <header className="space-y-8 mb-24 text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
            Agentic AI Infrastructure
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Architecting the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Autonomous Enterprise.
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Deploying self-governing, multi-modal AI ecosystems. We build cognitive digital workforces that think, speak, and execute complex workflows with human-parity latency and zero-fault compliance.
          </p>
        </header>

        {/* Anchor Case Study: Healthcare (The Ultimate Proof) */}
        <section className="mb-24">
          <div className="p-10 md:p-14 rounded-[2rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.08] backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute top-[-50%] right-[-10%] w-full h-full bg-cyan-500/5 blur-[100px] rounded-full group-hover:bg-cyan-500/10 transition-all duration-700 pointer-events-none"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-sm font-mono text-cyan-400 tracking-widest uppercase mb-4">Anchor Deployment</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">High-Stakes Healthcare Triage</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Healthcare environments demand absolute precision. We deployed a strict-compliance, multilingual voice agent serving as the primary digital receptionist for high-volume medical facilities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0"></div>
                    <p className="text-gray-300"><strong className="text-white">Custom RAG Pipeline:</strong> Autonomously structures fragmented patient inquiries into normalized datasets.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0"></div>
                    <p className="text-gray-300"><strong className="text-white">Secure Telemetry:</strong> Seamlessly queries legacy hospital scheduling databases without exposing internal API endpoints.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0"></div>
                    <p className="text-gray-300"><strong className="text-white">Operational Impact:</strong> Eradicated Tier-1 administrative bottlenecks, ensuring 24/7 immediate response times while maintaining strict data hygiene.</p>
                  </div>
                </div>
              </div>
              
              {/* Abstract Visual Representation of the "Report Organizer" */}
              <div className="hidden lg:flex flex-col gap-4 p-8 rounded-2xl bg-black/40 border border-white/[0.05]">
                <div className="flex justify-between items-center pb-4 border-b border-white/[0.05]">
                  <span className="text-xs font-mono text-gray-500">SYSTEM.TELEMETRY</span>
                  <span className="text-xs font-mono text-green-400 border border-green-400/30 bg-green-400/10 px-2 py-1 rounded">SECURE_SYNC</span>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex gap-4 text-gray-400"><span className="text-cyan-400">{">"}</span> <span>Ingesting Voice Payload...</span> <span className="ml-auto text-gray-600">12ms</span></div>
                  <div className="flex gap-4 text-gray-400"><span className="text-cyan-400">{">"}</span> <span>Entity Extraction (PII Redacted)</span> <span className="ml-auto text-gray-600">45ms</span></div>
                  <div className="flex gap-4 text-gray-400"><span className="text-cyan-400">{">"}</span> <span>Executing Database Mutation</span> <span className="ml-auto text-gray-600">82ms</span></div>
                  <div className="flex gap-4 text-white"><span className="text-cyan-400">{">"}</span> <span>Synthesizing Audio Response...</span> <span className="ml-auto text-green-400">140ms</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cognitive Infrastructure (Bento Grid) */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-white mb-8 px-2">The Cognitive Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="col-span-1 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                <div className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)]"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Ultra-Low Latency Voice</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Sub-500ms conversational latency utilizing advanced SIP trunking and edge-node processing. Engineered for complete conversational fluidity, dynamic interruption handling, and emotional cadence matching.
              </p>
            </div>

            <div className="col-span-1 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                <div className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.8)]"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Agentic Execution</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Moving beyond reactive language models. Our agents autonomously query databases, update CRM pipelines, schedule complex logistics, and trigger external webhooks in real-time while actively speaking.
              </p>
            </div>

            <div className="col-span-1 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mb-6">
                <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Zero-Trust Sovereignty</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Engineered for strict US regulatory environments. Implementations feature edge-level PII redaction, zero-retention memory configurations, and isolated compute environments to ensure data privacy.
              </p>
            </div>

          </div>
        </div>

        {/* The Deployment Protocol */}
        <section className="p-10 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.05] backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-white mb-10 text-center">Enterprise Onboarding Protocol</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Hidden on mobile) */}
            <div className="hidden md:block absolute top-[24px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent z-0"></div>
            
            <div className="relative z-10 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#0a0a0a] border border-white/[0.1] flex items-center justify-center text-cyan-400 font-mono text-sm font-bold">01</div>
              <h4 className="text-white font-bold">Infrastructural Audit</h4>
              <p className="text-sm text-gray-500 px-4">Rigorous analysis of current data pipelines to map security guardrails and operational bottlenecks.</p>
            </div>
            
            <div className="relative z-10 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#0a0a0a] border border-white/[0.1] flex items-center justify-center text-blue-400 font-mono text-sm font-bold">02</div>
              <h4 className="text-white font-bold">Sandboxed Engineering</h4>
              <p className="text-sm text-gray-500 px-4">Developing agentic logic and fine-tuning acoustic models in a highly secure, isolated environment.</p>
            </div>
            
            <div className="relative z-10 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#0a0a0a] border border-white/[0.1] flex items-center justify-center text-purple-400 font-mono text-sm font-bold">03</div>
              <h4 className="text-white font-bold">Live Shadow Telemetry</h4>
              <p className="text-sm text-gray-500 px-4">Gradual rollout backed by real-time execution monitoring to ensure 100% deterministic accuracy.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}