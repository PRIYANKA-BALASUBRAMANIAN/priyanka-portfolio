import React from 'react';
import { Github, ArrowUpRight, Code, Terminal, Check, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
            05 // Selected Work
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 mt-1">
            Projects
          </h2>
          <p className="text-sm text-zinc-600 mt-2 max-w-2xl">
            Detailed walkthrough of applications and systems I have engineered, combining machine learning pipelines, text processing, and full-stack development.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-10">
          {projectsData.map((project, index) => (
            <article
              key={project.id}
              className="p-6 sm:p-8 bg-white border border-zinc-200 rounded-lg hover:border-zinc-400 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 pb-3 border-b border-zinc-200">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-400 font-semibold">
                    PROJECT {index + 1}
                  </span>
                  <span className="text-zinc-300">/</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">
                    {project.title}
                  </h3>
                </div>

                {/* Top GitHub Link Badge */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-700 hover:text-zinc-950 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>

              {/* Subtitle */}
              <div className="text-xs sm:text-sm font-medium text-zinc-500 font-mono mt-2 mb-4">
                {project.subtitle}
              </div>

              {/* Detailed Description */}
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Technical Implementation Points */}
              {project.details && (
                <div className="mb-6 p-4 bg-[#fafafa] border border-zinc-200 rounded-md">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Implementation Highlights:
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-700">
                    {project.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-zinc-400 mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies List */}
              <div className="mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Technologies:
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-mono text-zinc-800 bg-zinc-100 border border-zinc-200 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Prominent Footer GitHub Action Button */}
              <div className="pt-4 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded transition-colors shadow-sm w-full sm:w-auto cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source Code on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </a>

                <span className="text-xs font-mono text-zinc-500 truncate">
                  {project.githubUrl}
                </span>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
