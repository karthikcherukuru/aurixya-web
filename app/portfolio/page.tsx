export default function PortfolioPage() {
  const projects = [
    {
      title: "Global School Resource Planning (SRP)",
      scale: "27 domestic, 9 international institutions",
      challenge: "Managing massive datasets for thousands of users across global time zones required a system that wouldn't buckle under high concurrency.",
      solution: "Architected a secure, multi-tenant system using a robust Go backend to ensure high-speed data processing and strict data isolation.",
      impact: "Delivered a unified dashboard that standardizes resource allocation and attendance tracking across global borders."
    },
    {
      title: "Modern Workflow-Driven ERP",
      scale: "Deployed across 18 high-volume RMC plants",
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
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 py-20 px-6 sm:px-12 font-sans selection:bg-white/30">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header Section */}
        <header className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Enterprise Engineering Portfolio
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            We build high-performance, scalable web architecture and AI-driven infrastructure. We design systems that handle complex B2B logic with absolute transparency.
          </p>
        </header>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:bg-white/[0.05] transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-sm font-mono text-gray-400 mb-6 pb-4 border-b border-white/[0.1]">
                Scale: {project.scale}
              </p>
              <div className="space-y-4 text-sm leading-relaxed text-gray-300">
                <p><strong className="text-white">The Challenge:</strong> {project.challenge}</p>
                <p><strong className="text-white">The Solution:</strong> {project.solution}</p>
                <p><strong className="text-white">The Impact:</strong> {project.impact}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Process & Transparency Section */}
        <section className="mt-20 p-10 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08]">
          <h2 className="text-3xl font-bold text-white mb-6">Our Process & Transparency</h2>
          <p className="text-gray-400 mb-8 max-w-3xl">
            We treat your infrastructure as our own. We guarantee structured reporting, clear technical documentation, and immediate communication on architectural decisions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-white">Strict Version Control</h4>
              <p className="text-sm text-gray-400">Rigid Git workflows and seamless deployment pipelines for zero-downtime updates.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-white">No Black Boxes</h4>
              <p className="text-sm text-gray-400">Structured sprint reporting and continuous visibility into the development lifecycle.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-white">Proactive Monitoring</h4>
              <p className="text-sm text-gray-400">Built-in tracking ensuring system health and performance are constantly optimized.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}