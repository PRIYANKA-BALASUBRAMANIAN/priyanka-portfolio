import React from 'react';
import { aboutContent } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Section Label */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
              01 // About Me
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mt-1">
              Background &amp; Motivation
            </h2>
          </div>

          {/* Narrative Content */}
          <div className="md:col-span-9 space-y-4 text-zinc-700 text-base leading-relaxed">
            {aboutContent.paragraphs.map((para, idx) => (
              <p key={idx}>
                {para}
              </p>
            ))}

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-zinc-600 border-t border-zinc-200 mt-6">
              <div className="bg-white p-3 rounded border border-zinc-200">
                <div className="text-zinc-400 uppercase text-[10px] mb-1">Focus</div>
                <div className="font-semibold text-zinc-900">AI Applications &amp; Full Stack</div>
              </div>
              <div className="bg-white p-3 rounded border border-zinc-200">
                <div className="text-zinc-400 uppercase text-[10px] mb-1">Institution</div>
                <div className="font-semibold text-zinc-900">Karunya University (2027)</div>
              </div>
              <div className="bg-white p-3 rounded border border-zinc-200">
                <div className="text-zinc-400 uppercase text-[10px] mb-1">Current Standing</div>
                <div className="font-semibold text-zinc-900">8.68 CGPA (Consistent)</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
