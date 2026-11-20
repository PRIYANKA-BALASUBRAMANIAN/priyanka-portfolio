import React from 'react';
import { ArrowDown, ExternalLink, FileText, Github, Linkedin, Mail, MapPin, Sparkles, Terminal, Code2, Bot, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResumeModal }) {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Glows & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status / Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs text-slate-300 mb-6 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-slate-200">Open to AI & Software Engineering Roles</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400 font-mono text-[11px]">Class of 2027</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">{personalInfo.name}</span>
            </h1>

            {/* Heading */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-200 mb-5 flex items-center gap-2 flex-wrap">
              <span className="text-cyan-400">{personalInfo.role.split('|')[0].trim()}</span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="text-slate-400">{personalInfo.role.split('|')[1].trim()}</span>
            </h2>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed mb-6 max-w-2xl font-normal">
              Computer Science student at <span className="text-slate-100 font-medium">{personalInfo.college}</span> with a passionate focus on{' '}
              <span className="text-cyan-300 font-medium">Artificial Intelligence</span>,{' '}
              <span className="text-indigo-300 font-medium">Generative AI & RAG</span>,{' '}
              <span className="text-slate-100 font-medium">software development</span>, and analytical problem-solving.
              Eager to build intelligent systems that solve tangible, real-world problems.
            </p>

            {/* Quick Metadata Chips */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-8">
              <div className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-800/80 px-2.5 py-1 rounded-md">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-800/80 px-2.5 py-1 rounded-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>CGPA: <strong className="text-slate-200">{personalInfo.cgpa}</strong> / 10</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-800/80 px-2.5 py-1 rounded-md font-mono">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Python • React • FastAPI • Qdrant</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-violet-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all cursor-pointer group"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 transition-all cursor-pointer shadow-sm group"
              >
                <FileText className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-800/40 hover:bg-slate-800/80 border border-transparent hover:border-slate-700 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social links row */}
            <div className="mt-8 flex items-center gap-4 text-slate-400">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-500">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all"
                title="GitHub (Editable in portfolioData.js)"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-cyan-400 transition-all"
                title="LinkedIn (Editable in portfolioData.js)"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-cyan-400 transition-all"
                title="Email (Editable in portfolioData.js)"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Terminal & Spec Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container */}
              <div className="glass-card rounded-2xl p-6 shadow-2xl relative overflow-hidden border border-slate-800">
                
                {/* Window header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-slate-400">priyanka-ai-profile.json</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded">
                    B.Tech AI 2027
                  </span>
                </div>

                {/* Code / Architecture Snippet */}
                <div className="font-mono text-xs space-y-2 text-slate-300">
                  <div className="text-slate-500">// Candidate Profile & Focus Areas</div>
                  <div className="text-slate-300">
                    <span className="text-cyan-400">const</span> <span className="text-amber-300">candidate</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">name:</span> <span className="text-emerald-300">"{personalInfo.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">degree:</span> <span className="text-emerald-300">"B.Tech CSE (AI)"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">institution:</span> <span className="text-emerald-300">"Karunya University"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">cgpa:</span> <span className="text-amber-300">8.68</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">specialization:</span> [
                  </div>
                  <div className="pl-8 text-cyan-300">
                    "Generative AI", "RAG Systems", "ML", "Full-Stack"
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="text-indigo-300">keyProjects:</span> [
                  </div>
                  <div className="pl-8 text-violet-300">
                    "EcoPulse", "Hybrid RAG Assistant", "Log Threat Analytics"
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="text-indigo-300">status:</span> <span className="text-emerald-400">"Ready for Opportunities"</span>
                  </div>
                  <div className="text-slate-300">&#125;;</div>
                </div>

                {/* Stat pills at bottom of card */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center">
                  <div className="bg-slate-900/70 p-2.5 rounded-lg border border-slate-800/60">
                    <div className="text-base font-bold text-cyan-400">8.68</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">CGPA</div>
                  </div>
                  <div className="bg-slate-900/70 p-2.5 rounded-lg border border-slate-800/60">
                    <div className="text-base font-bold text-indigo-400">5+</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Core Projects</div>
                  </div>
                  <div className="bg-slate-900/70 p-2.5 rounded-lg border border-slate-800/60">
                    <div className="text-base font-bold text-violet-400">2</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Internships</div>
                  </div>
                </div>

              </div>

              {/* Decorative side badge */}
              <div className="absolute -bottom-4 -left-4 bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">AI-First Engineer</div>
                  <div className="text-[11px] text-slate-400">FastAPI • Qdrant • Streamlit • React</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
