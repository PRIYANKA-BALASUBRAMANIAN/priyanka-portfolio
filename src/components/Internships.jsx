import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Edit3 } from 'lucide-react';
import { internships } from '../data/portfolioData';

export default function Internships() {
  return (
    <section id="internships" className="py-20 relative bg-[#090d16]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-800/60 text-violet-300 text-xs font-mono mb-3">
            <span>// 04. INTERNSHIPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Internships
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Practical industry exposure in Artificial Intelligence, Machine Learning pipelines, and responsive web development.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {internships.map((internship, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-900 text-cyan-300 border border-slate-700/80">
                    Verified Internship
                  </span>
                </div>

                {/* Role and Company */}
                <h3 className="text-xl font-bold text-white mb-1">
                  {internship.role}
                </h3>
                <h4 className="text-base font-semibold text-indigo-400 mb-3">
                  {internship.company}
                </h4>

                {/* Duration & Location */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-4 pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{internship.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{internship.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {internship.description}
                </p>

                {/* Key Takeaways / Learnings */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                    Key Highlights & Contributions:
                  </span>
                  {internship.learnings.map((learning, lIdx) => (
                    <div key={lIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{learning}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom footer note */}
              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1">
                  <Edit3 className="w-3 h-3 text-slate-500" />
                  <span>Dates & details editable in portfolioData.js</span>
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
