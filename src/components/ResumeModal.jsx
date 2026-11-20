import React from 'react';
import { X, FileText, Download, ExternalLink, AlertCircle, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="glass-card w-full max-w-lg rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-2xl relative bg-[#0d1322]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Curriculum Vitae</h3>
            <p className="text-xs text-slate-400 font-mono">B. Priyanka • AI & Software Engineering</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 my-5 text-sm text-slate-300">
          <p className="leading-relaxed">
            Thank you for your interest! You can download the latest resume file or preview qualifications directly below.
          </p>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between text-slate-300">
              <span className="text-slate-500">Degree:</span>
              <span className="text-cyan-300">B.Tech CSE (AI) - 2027</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span className="text-slate-500">Academic CGPA:</span>
              <span className="text-emerald-400 font-bold">8.68 / 10</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span className="text-slate-500">Specialization:</span>
              <span>Generative AI, RAG, Python, React</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/60 text-xs text-cyan-200 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span className="leading-relaxed">
              <strong>Quick Tip:</strong> To provide your actual PDF, place your file in <code className="text-white bg-slate-800 px-1 py-0.5 rounded">public/resume.pdf</code> or paste your Google Drive / Cloud link in <code className="text-white bg-slate-800 px-1 py-0.5 rounded">src/data/portfolioData.js</code>.
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <a
            href={personalInfo.resumePath}
            download="B_Priyanka_Resume.pdf"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume PDF</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}?subject=Resume Request - B. Priyanka`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-all cursor-pointer"
          >
            <span>Request by Email</span>
          </a>
        </div>

      </div>
    </div>
  );
}
