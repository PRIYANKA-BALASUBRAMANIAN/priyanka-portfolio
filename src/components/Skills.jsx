import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-b border-zinc-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Section Label */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
              04 // Technical Skills
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mt-1">
              Skills &amp; Technologies
            </h2>
            <p className="text-xs text-zinc-500 mt-2">
              Languages, libraries, frameworks, and developer tools I utilize to design and implement practical projects.
            </p>
          </div>

          {/* Categorized Skills Grid */}
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData.map((categoryGroup, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#fafafa] border border-zinc-200 rounded-lg flex flex-col justify-between hover:border-zinc-300 transition-colors"
                >
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold pb-2 mb-3 border-b border-zinc-200">
                      {categoryGroup.category}
                    </h3>
                    
                    <ul className="space-y-2">
                      {categoryGroup.items.map((skill, sIdx) => (
                        <li
                          key={sIdx}
                          className="flex items-center gap-2 text-sm text-zinc-800 font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-2 border-t border-zinc-200/60 text-[11px] font-mono text-zinc-400">
                    {categoryGroup.items.length} technologies
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
