import React, { useState } from 'react';
import { 
  Code2, 
  Brain, 
  Layers, 
  Server, 
  Database, 
  Wrench, 
  Check, 
  Sparkles,
  Terminal
} from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

const categoryIcons = {
  "AI / Machine Learning": <Brain className="w-5 h-5 text-cyan-400" />,
  "Programming Languages": <Code2 className="w-5 h-5 text-blue-400" />,
  "Frontend Development": <Layers className="w-5 h-5 text-indigo-400" />,
  "Backend Development": <Server className="w-5 h-5 text-violet-400" />,
  "Databases": <Database className="w-5 h-5 text-purple-400" />,
  "Developer Tools": <Wrench className="w-5 h-5 text-emerald-400" />
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsCategories.map(c => c.category)];

  const displayedCategories = selectedCategory === 'All'
    ? skillsCategories
    : skillsCategories.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative bg-[#090d16]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-300 text-xs font-mono mb-3">
            <span>// 02. TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Technical Capabilities
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            A comprehensive overview of programming languages, machine learning stacks, backend frameworks, and engineering tools.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((catGroup, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-inner">
                    {categoryIcons[catGroup.category] || <Terminal className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-wide">
                      {catGroup.category}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-mono">
                      {catGroup.skills.length} core technologies
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {catGroup.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {catGroup.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 transition-all text-xs text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                      <span className="font-medium text-slate-100">{skill.name}</span>
                      <span className="text-[10px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified Competency</span>
                <span className="text-cyan-400/80">Active Stack</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Highlights Summary Box */}
        <div className="mt-12 glass-card rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Continuous Exploration & Emerging Technologies
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Actively learning and building with Agentic Workflows, LangChain, Hugging Face pipelines, and high-performance vector stores.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2 font-mono text-xs text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1.5 rounded-lg">
            <span>Specialization: AI + Full Stack</span>
          </div>
        </div>

      </div>
    </section>
  );
}
