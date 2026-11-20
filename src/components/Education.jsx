import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-[#090d16]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono mb-3">
            <span>// 06. EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Background
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Undergraduate foundation in Computer Science with a specialization in Artificial Intelligence.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-10 border border-slate-800/80 relative overflow-hidden">
            
            {/* Top accent badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500/20 via-indigo-500/10 to-transparent w-72 h-32 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Degree & Institution */}
              <div className="md:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      Undergraduate Degree
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {education.degree}
                    </h3>
                  </div>
                </div>

                <div className="pl-0 sm:pl-16">
                  <p className="text-base sm:text-lg font-semibold text-indigo-300 mb-2">
                    Specialization: {education.specialization}
                  </p>
                  <p className="text-sm sm:text-base text-slate-200 font-medium">
                    {education.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{education.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{education.location}</span>
                    </div>
                  </div>
                </div>

                {/* Relevant Coursework */}
                <div className="pt-4 pl-0 sm:pl-16 border-t border-slate-800/60">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Key Coursework & Domains:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: CGPA Spotlight Card */}
              <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/90 border border-slate-800/80 text-center shadow-inner">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                  Cumulative Grade Point
                </div>
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-1">
                  {education.cgpa}
                </div>
                <div className="text-xs font-mono text-slate-500 mb-4">
                  Scale of {education.cgpaScale}
                </div>
                <div className="w-full pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-400 flex items-center justify-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Consistent Academic Record</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
