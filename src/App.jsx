import React, { useState } from 'react';
import { Phone, MessageSquare, Star, Calculator } from 'lucide-react';

export default function App() {
  // --- STATE FOR CALCULATOR ---
  const [missedCalls, setMissedCalls] = useState(5);
  const [avgTicket, setAvgTicket] = useState(350);

  const weeklyLoss = missedCalls * avgTicket;
  const yearlyLoss = weeklyLoss * 52;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">AUTO</span>
            <span className="text-xl font-black tracking-tighter text-blue-600 uppercase">HVAC</span>
          </div>
          <a href="#booking" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-blue-700 transition">
            Book Demo
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 border border-blue-100">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            For HVAC Companies with 1-5 Vans
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Stop Losing Service Calls to <span className="text-blue-600">Voicemail</span>.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            We build the "Growth Ecosystem" that answers calls, qualifies leads, and books jobs 24/7.
            Zero missed calls. Zero lost revenue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#calculator" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition">
              <Calculator size={20} />
              Calculate Lost Revenue
            </a>
            <a href="#booking" className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg text-slate-600 hover:text-blue-600 transition border border-slate-200 hover:border-blue-200">
              See Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* --- ROI CALCULATOR SECTION --- */}
      <section id="calculator" className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
            <div>
              <h2 className="text-3xl font-bold mb-4">The "Leaky Bucket" Calculator</h2>
              <p className="text-slate-600 mb-8">
                Most HVAC owners don't realize how much the "5-minute rule" costs them.
                If you don't answer, they call your competitor.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Missed Calls Per Week</label>
                  <input
                    type="range" min="1" max="50"
                    value={missedCalls}
                    onChange={(e) => setMissedCalls(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="text-right font-bold text-blue-600">{missedCalls} calls</div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Average Job Value ($)</label>
                  <input
                    type="number"
                    value={avgTicket}
                    onChange={(e) => setAvgTicket(parseInt(e.target.value))}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-mono"
                  />
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-2xl flex flex-col justify-center text-center">
              <span className="text-slate-400 font-medium mb-2 uppercase tracking-widest text-xs">You Are Currently Losing</span>
              <div className="text-5xl font-black text-red-400 mb-2">
                ${weeklyLoss.toLocaleString()}
              </div>
              <span className="text-slate-400 text-sm mb-8">per week</span>

              <div className="border-t border-slate-700 pt-8">
                <span className="text-slate-400 font-medium mb-2 uppercase tracking-widest text-xs">Annual Revenue Lost</span>
                <div className="text-4xl font-bold text-white">
                  ${yearlyLoss.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES / ECOSYSTEM --- */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Growth Ecosystem</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We don't just "install AI." We install a workflow that captures revenue automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 AI Receptionist</h3>
              <p className="text-slate-600 leading-relaxed">
                Never misses a call. Qualifies leads, checks your service area, and books appointments directly into your calendar while you sleep.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant SMS Follow-Up</h3>
              <p className="text-slate-600 leading-relaxed">
                Busy on a job? Our system instantly texts missed calls: "Hey, this is Mike. I'm under a house. How can I help?"
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition">
                <Star size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Review Automator</h3>
              <p className="text-slate-600 leading-relaxed">
                Job done? We automatically text the customer a Google Review link before your tech even leaves the driveway.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- BOOKING SECTION --- */}
      <section id="booking" className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stop The Bleeding. Start The Growing.
          </h2>
          <p className="text-slate-400 mb-12 text-lg">
            No sales pressure. Just a 15-minute demo to see if our system fits your workflow.
          </p>

          {/* INCREASED HEIGHT TO h-[750px] TO STOP SCROLLING */}
          <div className="bg-white rounded-xl overflow-hidden h-[750px] shadow-2xl">
            <iframe
              /* ADDED '?layout=month_view' TO FORCE THE CALENDAR LOOK */
              src="https://cal.com/alae-mehdi-vdpcqt/30min"
              style={{ width: "100%", height: "100%", border: "none", overflow: "hidden" }}
              title="Booking Calendar"
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-slate-950 text-slate-500 text-center border-t border-slate-900">
        <p>© 2026 AutoHVAC Systems. Built for American Trades.</p>
      </footer>

    </div>
  )
}