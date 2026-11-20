import React from 'react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 border-b border-zinc-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Section Label */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
              02 // Education
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mt-1">
              Academic Record
            </h2>
          </div>

          {/* Academic Card */}
          <div className="md:col-span-9">
            <div className="border border-zinc-200 rounded-lg p-6 bg-[#fafafa]">
              
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 pb-4 border-b border-zinc-200">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900">
                    {educationData.college}
                  </h3>
                  <p className="text-sm font-medium text-zinc-700 mt-0.5">
                    {educationData.degree}
                  </p>
                  <p className="text-xs text-zinc-500 font-mono mt-1">
                    {educationData.location}
                  </p>
                </div>
                
                <div className="sm:text-right shrink-0">
                  <span className="inline-block text-xs font-mono text-zinc-600 bg-white border border-zinc-200 px-2.5 py-1 rounded">
                    {educationData.period}
                  </span>
                  <div className="text-sm font-semibold text-zinc-900 mt-2 font-mono">
                    CGPA: <span className="text-zinc-950 font-bold">{educationData.cgpa}</span> / 10
                  </div>
                </div>
              </div>

              {/* Curriculum & Key Highlights */}
              <div className="pt-4 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Curriculum Highlights:
                </div>
                <ul className="space-y-1.5 text-sm text-zinc-700">
                  {educationData.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-zinc-400 mt-1">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
