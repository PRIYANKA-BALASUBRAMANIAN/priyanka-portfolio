import React from 'react';
import { areasOfInterest } from '../data/portfolioData';

export default function AreasOfInterest() {
  return (
    <section id="interests" className="py-20 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Section Label */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
              03 // Focus Areas
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mt-1">
              Areas of Interest
            </h2>
            <p className="text-xs text-zinc-500 mt-2">
              Primary domains I am actively exploring and applying through practical coursework and personal projects.
            </p>
          </div>

          {/* List of Interests */}
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {areasOfInterest.map((interest, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white border border-zinc-200 rounded-lg flex items-center justify-between hover:border-zinc-400 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-zinc-400">
                      0{idx + 1}
                    </span>
                    <span className="text-sm font-semibold text-zinc-800">
                      {interest}
                    </span>
                  </div>
                  <span className="text-zinc-300 font-mono text-xs">/</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
