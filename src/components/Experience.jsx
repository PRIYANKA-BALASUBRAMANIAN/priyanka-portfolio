import React from 'react';
import { internshipsData, certificationsData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-zinc-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Internships Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
              06 // Experience
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mt-1">
              Internships
            </h2>
            <p className="text-xs text-zinc-500 mt-2">
              Industry learning experiences focused on machine learning models and web technologies.
            </p>
          </div>

          <div className="md:col-span-9 space-y-6">
            {internshipsData.map((internship, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#fafafa] border border-zinc-200 rounded-lg hover:border-zinc-300 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pb-3 border-b border-zinc-200">
                  <div>
                    <h3 className="text-base font-bold text-zinc-900">
                      {internship.role}
                    </h3>
                    <div className="text-sm font-medium text-zinc-600">
                      {internship.company}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">
                    {internship.duration}
                  </span>
                </div>

                <p className="text-sm text-zinc-700 leading-relaxed mt-3 mb-4">
                  {internship.description}
                </p>

                <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-600">
                  {internship.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-zinc-400 mt-0.5">—</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-8 border-t border-zinc-200">
          <div className="md:col-span-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
              07 // Credentials
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mt-1">
              Certifications
            </h2>
            <p className="text-xs text-zinc-500 mt-2">
              Foundational verifications in cloud systems, data analytics, Python, and computer networking.
            </p>
          </div>

          <div className="md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsData.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="p-5 bg-[#fafafa] border border-zinc-200 rounded-lg hover:border-zinc-300 transition-colors"
                >
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
                    {cert.issuer}
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
