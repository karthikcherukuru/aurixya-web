"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    // ⚠️ REPLACE THIS WITH YOUR ACTUAL WEB3FORMS ACCESS KEY ⚠️
    const access_key = "65d17600-a0ef-46c1-88c6-22e079697845";

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", access_key);
    formData.append("subject", "New Lead from Aurixya Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // Butter-smooth premium ease curve
  const premiumEase = [0.16, 1, 0.3, 1];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans relative overflow-hidden selection:bg-orange-500/30">
      
      {/* Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#FF5A36]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Navbar Minimal */}
      <header className="w-full flex justify-between items-center p-6 md:px-12 relative z-20">
        <Link href="/" className="font-[family-name:var(--font-pixelify)] text-2xl tracking-widest text-white hover:text-[#FF5A36] transition-colors">
          AURIXYA
        </Link>
        <Link href="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
          Back to Home
        </Link>
      </header>

      {/* Main Content: Split Screen Layout */}
      <main className="flex-1 flex items-center justify-center py-12 px-6 lg:px-12 w-full max-w-7xl mx-auto relative z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* =========================================
              LEFT COLUMN: CONTACT INFO & LOCATIONS
              ========================================= */}
          <div className="flex flex-col pt-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: premiumEase }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#FF5A36] animate-pulse"></span>
                COMMUNICATION CHANNELS
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                Let's Architect <br/>
                <span className="text-[#FF5A36]">The Future.</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Reach out to our engineering hubs. Whether you need a bespoke ERP or an autonomous AI agent, our teams are ready to scale your vision.
              </p>
            </motion.div>

            {/* Info Cards (Staggered Animation) */}
            <div className="flex flex-col gap-4">
              
              {/* Email Card */}
              <motion.a 
                href="mailto:sales@aurixya.in"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: premiumEase }}
                className="group flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all backdrop-blur-xl"
              >
                <div className="w-12 h-12 rounded-full bg-[#FF5A36]/10 flex items-center justify-center group-hover:bg-[#FF5A36]/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF5A36]"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-1">Direct Communications</h4>
                  <p className="text-lg font-bold text-white group-hover:text-[#FF5A36] transition-colors">sales@aurixya.in</p>
                </div>
              </motion.a>

              {/* Locations Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: premiumEase }}
                className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-1">Engineering Hubs</h4>
                  <p className="text-lg font-bold text-white tracking-wide">HYDERABAD <span className="text-gray-600 font-normal mx-2">|</span> BANGALORE</p>
                </div>
              </motion.div>

              {/* LinkedIn Card */}
              <motion.a 
                href="https://www.linkedin.com/company/aurixya"
                target="_blank"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: premiumEase }}
                className="group flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-[#0077b5]/10 hover:border-[#0077b5]/30 transition-all backdrop-blur-xl"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#0077b5]/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-[#0077b5] transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div>
                  <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-1">Professional Network</h4>
                  <p className="text-lg font-bold text-white group-hover:text-[#0077b5] transition-colors">Follow Aurixya on LinkedIn</p>
                </div>
              </motion.a>

            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: WEB3FORMS SUBMISSION
              ========================================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: premiumEase }}
            className="w-full bg-white/[0.03] border border-white/10 rounded-[40px] p-8 md:p-12 backdrop-blur-3xl shadow-2xl relative"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-8">Deploy a Request</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 block">Full Name</label>
                      <input required type="text" id="name" name="name" placeholder="John Doe" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#FF5A36] focus:bg-white/10 transition-all"
                      />
                    </div>
                    
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 block">Business Email</label>
                      <input required type="email" id="email" name="email" placeholder="john@company.com" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#FF5A36] focus:bg-white/10 transition-all"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label htmlFor="inquiry" className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 block">Primary Requirement</label>
                      <select id="inquiry" name="inquiry_type" required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#FF5A36] focus:bg-white/10 transition-all appearance-none cursor-pointer"
                      >
                        <option value="Agentic AI" className="bg-[#0a0a0a]">Agentic AI Ecosystems</option>
                        <option value="Web Development" className="bg-[#0a0a0a]">High-Performance Web Apps</option>
                        <option value="Data Engineering" className="bg-[#0a0a0a]">Data Engineering & Pipelines</option>
                        <option value="Consulting" className="bg-[#0a0a0a]">Strategic Technical Consulting</option>
                        <option value="Other" className="bg-[#0a0a0a]">Other Requirement</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 block">Project Details</label>
                      <textarea required id="message" name="message" rows={4} placeholder="Describe your objectives, scale, and timeline..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#FF5A36] focus:bg-white/10 transition-all resize-none"
                      ></textarea>
                    </div>

                    {/* Error Message */}
                    {errorMessage && <p className="text-red-400 text-sm font-medium">{errorMessage}</p>}

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="mt-2 w-full bg-[#FF5A36] text-white font-bold py-4 rounded-xl hover:bg-[#ff7052] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,90,54,0.3)]"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        "INITIATE PROTOCOL"
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                /* Success State */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-16"
                >
                  <div className="w-20 h-20 bg-[#FF5A36]/20 text-[#FF5A36] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,90,54,0.3)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Transmission Received</h2>
                  <p className="text-gray-400 mb-8 max-w-sm">
                    Your requirements have been securely routed to our engineering division. We will be in contact shortly.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-sm font-medium text-white"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </main>
    </div>
  );
}