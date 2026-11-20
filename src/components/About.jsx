import React from 'react';
import { Brain, Cpu, Lightbulb, Rocket, CheckCircle2, GraduationCap, Code } from 'lucide-react';
import { personalInfo, aboutData } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      title: "AI & Generative Intelligence",
      description: "Deep interest in exploring LLMs, RAG frameworks, vector databases (Qdrant), and natural language processing pipelines."
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      title: "Analytical & Algorithmic Thinking",
      description: "Strong grounding in Computer Science fundamentals, data structures, AST parsing, and statistical machine learning models."
    },
    {
      icon: <Code className="w-5 h-5 text-violet-400" />,
      title: "Full-Stack System Building",
      description: "Experience connecting machine learning backends (FastAPI/Python) with intuitive user interfaces in React and Streamlit."
    },
    {
      icon: <Rocket className="w-5 h-5 text-emerald-400" />,
      title: "Rapid Learner & Agile Mindset",
      description: "Constantly expanding skills through industry certifications, hands-on internships, and building working prototypes."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono mb-3">
            <span>// 01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Background & Technical Focus
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Detailed Story */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
              {aboutData.headline}
            </h3>

            {aboutData.description.map((paragraph, index) => (
              <p key={index} className="text-slate-300 leading-relaxed text-base">
                {paragraph}
              </p>
            ))}

            {/* Core Values / Strengths bullet points */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Hands-on Project Architecture</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>8.68 CGPA Academic Excellence</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Clean Code & Modular Design</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Effective Cross-Functional Collaborator</span>
              </div>
            </div>

            {/* Quick highlight cards */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {aboutData.highlights.map((item, idx) => (
                <div key={idx} className="glass-card p-3 rounded-xl border border-slate-800 text-center">
                  <div className="text-sm sm:text-base font-bold text-cyan-300">{item.value}</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical Pillars Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover p-5 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0 shadow-inner">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
