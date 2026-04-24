import Link from "next/link";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Global School Resource Planning (SRP)",
      scale: "9 domestic, 2 international institutions",
      challenge: "Managing massive datasets for thousands of users across global time zones required a system that wouldn't buckle under high concurrency.",
      solution: "Architected a secure, multi-tenant system using a robust Go backend to ensure high-speed data processing and strict data isolation.",
      impact: "Delivered a unified dashboard that standardizes resource allocation and attendance tracking across global borders."
    },
    {
      title: "Modern Workflow-Driven ERP",
      scale: "Deployed across 3 high-volume RMC plants",
      challenge: "The client was bottlenecked by cluttered, legacy systems causing data entry errors and delayed financial reporting.",
      solution: "Engineered a workflow-focused MVP replacing fragmented screens with a consolidated, high-performance UI utilizing modern design principles.",
      impact: "Fused operational tracking with financial reporting into a single real-time source of truth, drastically cutting administrative overhead."
    },
    {
      title: "Healthcare AI Voice Infrastructure",
      scale: "Active across multiple hospital front desks",
      challenge: "Automating patient scheduling without losing the human touch or introducing latency in voice responses.",
      solution: "Built a multilingual AI voice agent with an optimized integration pipeline, achieving sub-second latency for natural conversations.",
      impact: "Acts as a 24/7 digital receptionist. The report organizer automatically routes patient inquiries, offloading front-desk pressure."
    },
    {
      title: "Pharmacy Marketplace (Active Development)",
      scale: "Secure transactions for the Indian market",
      challenge: "Building a highly concurrent marketplace adhering to strict medical data security standards.",
      solution: "Architecting a highly optimized Next.js frontend paired with a scalable Go backend for real-time inventory synchronization.",
      impact: "Ensuring secure, rapid transaction processing and seamless vendor onboarding."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-white/30 overflow-hidden">
      
      {/* Ambient Background Glows (Matching your site's aesthetic) */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
        <div className="absolute top-[-10%] w-[800px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-pink-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-12 px-6 sm:px-12">
        
        {/* Navigation Bar */}
        <div className="flex justify-between items-center mb-20">
          <Link href="/" className="font-mono text-xl font-bold tracking-widest text-white hover:opacity-80 transition-opacity">
            AURIXYA
          </Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>

        {/* Header Section */}
        <header className="space-y-6 mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Enterprise Engineering <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Portfolio.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            We build high-performance, scalable web architecture and AI-driven infrastructure. We design systems that handle complex B2B logic with absolute transparency.
          </p>
        </header>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isSRP = project.title.includes("SRP");
            
            const cardContent = (
              <div 
                className={`p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl transition-all duration-500 group h-full ${
                  isSRP 
                    ? 'cursor-pointer hover:bg-white/[0.06] hover:border-purple-500/30 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)]' 
                    : 'hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300 flex items-center gap-2 flex-wrap">
                    {project.title}
                    {isSRP && (
                      <span className="text-sm font-sans font-normal text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity ml-1">
                        View System &rarr;
                      </span>
                    )}
                  </h3>
                </div>
                
                <p className="text-xs font-mono tracking-wider uppercase text-gray-500 mb-8 pb-6 border-b border-white/[0.05]">
                  Scale: {project.scale}
                </p>
                <div className="space-y-5 text-sm leading-relaxed text-gray-400">
                  <p><strong className="text-gray-200">The Challenge:</strong> {project.challenge}</p>
                  <p><strong className="text-gray-200">The Solution:</strong> {project.solution}</p>
                  <p><strong className="text-gray-200">The Impact:</strong> {project.impact}</p>
                </div>
              </div>
            );

            return isSRP ? (
              <Link href="/portfolio/SRP" key={index} className="block h-full">
                {cardContent}
              </Link>
            ) : (
              <div key={index} className="block h-full">
                {cardContent}
              </div>
            );
          })}
        </section>

        {/* Process & Transparency Section */}
        <section className="mt-24 p-12 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05] backdrop-blur-xl">
          <h2 className="text-3xl font-bold text-white mb-6">Our Process & Transparency</h2>
          <p className="text-gray-400 mb-10 max-w-3xl leading-relaxed">
            We treat your infrastructure as our own. We guarantee structured reporting, clear technical documentation, and immediate communication on architectural decisions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <span className="text-blue-400">01</span> Strict Version Control
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">Rigid Git workflows and seamless deployment pipelines for zero-downtime updates.</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <span className="text-purple-400">02</span> No Black Boxes
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">Structured sprint reporting and continuous visibility into the development lifecycle.</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <span className="text-pink-400">03</span> Proactive Monitoring
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">Built-in tracking ensuring system health and performance are constantly optimized.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}