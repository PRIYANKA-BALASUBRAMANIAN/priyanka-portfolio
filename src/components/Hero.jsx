import React from 'react';
import { ArrowDown, FileText, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResumeModal }) {
  return (
    <section id="home" className="pt-32 pb-20 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Academic status pill */}
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-600 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
          <span>B.Tech CSE (AI) • Class of 2027 • CGPA: 8.68</span>
        </div>

        {/* Primary Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-3">
          {personalInfo.name}
        </h1>

        {/* Role & Academic Affiliation */}
        <h2 className="text-lg sm:text-xl font-medium text-zinc-600 mb-6">
          Computer Science &amp; Engineering Student <span className="text-zinc-400">|</span> Artificial Intelligence
        </h2>

        {/* Short natural introduction */}
        <p className="text-base sm:text-lg text-zinc-700 leading-relaxed max-w-3xl mb-8">
          {personalInfo.introduction}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium text-white bg-zinc-950 hover:bg-zinc-800 transition-colors shadow-sm"
          >
            <span>View My Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium text-zinc-700 bg-white hover:bg-zinc-100 border border-zinc-300 transition-colors cursor-pointer"
          >
            <FileText className="w-4 h-4 text-zinc-500" />
            <span>Download Resume</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md text-sm font-medium text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
          >
            <Mail className="w-4 h-4 text-zinc-500" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* External Profile Links */}
        <div className="pt-6 border-t border-zinc-200 flex flex-wrap items-center gap-6 text-xs text-zinc-600 font-mono">
          <span className="text-zinc-400 uppercase tracking-wider">Profiles:</span>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-zinc-950 transition-colors font-medium"
          >
            <Github className="w-4 h-4 text-zinc-700" />
            <span>github.com/PRIYANKA-BALASUBRAMANIAN</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-zinc-950 transition-colors font-medium"
          >
            <Linkedin className="w-4 h-4 text-zinc-700" />
            <span>linkedin.com/in/b-priyanka-4a8b972a2</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-1.5 hover:text-zinc-950 transition-colors font-medium"
          >
            <Mail className="w-4 h-4 text-zinc-700" />
            <span>{personalInfo.email}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
