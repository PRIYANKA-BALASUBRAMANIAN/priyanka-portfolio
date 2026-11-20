import React from 'react';
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 text-xs font-mono mb-3">
            <span>// 05. CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry Certifications & Credentials
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Formal verifications in Cloud foundations, Data Analytics, Python programming, and Network fundamentals.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900/90 text-cyan-400 border border-slate-800">
                    {cert.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-1">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="text-xs font-semibold text-indigo-400 mb-3 flex items-center gap-2">
                  <span>{cert.issuer}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400 font-normal">{cert.issueDate}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              {/* Footer / Credential Link */}
              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Credential</span>
                </span>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-cyan-300 font-medium transition-colors"
                  title="Editable link placeholder in src/data/portfolioData.js"
                >
                  <span>Verify Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
