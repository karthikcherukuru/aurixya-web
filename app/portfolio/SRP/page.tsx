import Link from "next/link";

export default function SRPShowcasePage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-white/30 overflow-hidden pb-24">
      
      {/* Ambient Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-900/15 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-12 px-6 sm:px-12">
        
        {/* Navigation Bar */}
        <div className="flex justify-between items-center mb-20">
          <Link href="/" className="font-mono text-xl font-bold tracking-widest text-white hover:opacity-80 transition-opacity">
            AURIXYA
          </Link>
          <div className="flex gap-6">
            <Link href="/portfolio" className="text-sm text-gray-400 hover:text-white transition-colors">
              &larr; Back to Portfolio
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <header className="space-y-8 mb-24 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono tracking-widest uppercase mb-4">
            Deployed & Scaled Ecosystem
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            School Resource <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-purple-400">
              Planning (SRP)
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            A centralized telemetry and command architecture engineered to give institutional owners absolute, real-time control over operations, revenue pipelines, and academic performance.
          </p>
        </header>

        {/* Owner Command Center Highlight */}
        <section className="mb-24">
          <div className="p-10 md:p-14 rounded-[2rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.08] backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[80px] rounded-full group-hover:bg-purple-500/20 transition-all duration-700"></div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Owner Command Center</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Eradicate operational blind spots. We architected a top-down visibility dashboard that transforms scattered institutional data into actionable, high-level intelligence.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✦</span>
                  <span>Real-time revenue vs. expense analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✦</span>
                  <span>Instant alerts for low attendance & absent staff</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✦</span>
                  <span>Daily fee collection & liquidity tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✦</span>
                  <span>Macro-level student & teacher attendance metrics</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core Infrastructure Grid (Bento Box Style) */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 px-2">Core Infrastructure Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Financial Pillar */}
            <div className="col-span-1 md:col-span-2 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                Financial & Revenue Architecture
              </h3>
              <div className="space-y-6 text-sm text-gray-400">
                <div>
                  <strong className="text-gray-200 block mb-1">Automated Fee Ecosystem</strong>
                  <p>Flexible term-based structures, automated online/offline payment tracking, instantaneous receipt generation, and aggressive defaulter identification.</p>
                </div>
                <div>
                  <strong className="text-gray-200 block mb-1">Payroll Automation Engine</strong>
                  <p>Complex algorithmic salary calculation dynamically linked to staff attendance, granular leave policies, penalty adjustments, and automated payslip generation.</p>
                </div>
              </div>
            </div>

            {/* Communications Pillar */}
            <div className="col-span-1 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                Autonomous Comms
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Decouple administration from manual outreach. The system automatically handles critical communications.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Real-time WhatsApp Integration</li>
                <li>• Automated Fee Reminders</li>
                <li>• Instant Absentee Alerts</li>
                <li>• System-wide Announcements</li>
              </ul>
            </div>

            {/* Academic & Faculty Pillar */}
            <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3">Faculty Telemetry</h3>
                <p className="text-sm text-gray-400 mb-4">Granular tracking of teacher performance, daily attendance routing with late-day logic, and administrative evaluation rankings.</p>
              </div>

              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3">Academic Intelligence</h3>
                <p className="text-sm text-gray-400 mb-4">Automated report card generation, subject-wise exam telemetry, and predictive identification of struggling students.</p>
              </div>

              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3">Role-Based Autonomy</h3>
                <p className="text-sm text-gray-400 mb-4">Strict cryptographic access controls segmented by Owner, Admin, Accountant, and Teacher configurations.</p>
              </div>

            </div>
          </div>
        </div>

        {/* Parent Portal Extension */}
        <section className="mt-8 p-8 rounded-3xl border border-white/[0.05] bg-gradient-to-r from-transparent via-white/[0.02] to-transparent text-center">
          <h3 className="text-xl font-bold text-white mb-3">Scalable Parent Access Portal (Optional)</h3>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Extend the ecosystem directly to parents with a secure portal for real-time academic tracking, attendance logs, and frictionless fee transactions.
          </p>
        </section>

      </div>
    </div>
  );
}