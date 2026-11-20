import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  Code, 
  CheckCircle2, 
  AlertCircle,
  FolderGit2
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filterCategories = ['All', 'Featured', 'AI / Sustainability', 'Generative AI', 'Security / NLP', 'Machine Learning', 'Full Stack / AI'];

  const filteredProjects = projects.filter(project => {
    if (filter === 'All') return true;
    if (filter === 'Featured') return project.featured;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono mb-3">
            <span>// 03. FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Practical Engineering & AI Systems
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Selected projects demonstrating practical implementations of Machine Learning, Generative AI, AST parsing, and full-stack software development.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl flex flex-col justify-between overflow-hidden border border-slate-800/80 hover:border-slate-700 transition-all group"
            >
              <div className="p-6">
                
                {/* Top Category Badge & Featured Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-cyan-400">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-amber-300 bg-amber-950/40 border border-amber-800/50 px-2 py-0.5 rounded-full">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs font-medium text-indigo-400 mb-3">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <div className="mb-5 space-y-1.5 pt-2 border-t border-slate-800/60">
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/80 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer: Action Links */}
              <div className="p-4 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between text-xs">
                
                {/* GitHub link with placeholder notice */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white font-medium hover:underline transition-colors"
                  title="Editable GitHub Link in src/data/portfolioData.js"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub Repository</span>
                </a>

                {/* Demo Link or Placeholder */}
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-slate-500 italic">
                    Placeholder Link
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Note on Placeholders for Recruiter Transparency */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 font-mono inline-flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-cyan-400" />
            Project repository links are configured as editable placeholders in <code className="text-cyan-400">src/data/portfolioData.js</code>.
          </p>
        </div>

      </div>
    </section>
  );
}
