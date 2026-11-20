import React from 'react';
import { X, FileText, Download, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/40 backdrop-blur-[2px]">
      <div 
        className="w-full max-w-md bg-white border border-zinc-300 rounded-lg p-6 shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-zinc-400 hover:text-zinc-800 rounded transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-zinc-100 border border-zinc-200 rounded text-zinc-800">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-zinc-950">Resume / CV</h3>
            <p className="text-xs text-zinc-500 font-mono">B. Priyanka — B.Tech CSE (AI)</p>
          </div>
        </div>

        <div className="space-y-3 my-4 text-xs text-zinc-600">
          <p>
            You can download the curriculum vitae directly as a PDF or request an updated copy via email.
          </p>

          <div className="p-3 bg-zinc-50 border border-zinc-200 rounded font-mono text-[11px] space-y-1">
            <div className="flex justify-between">
              <span className="text-zinc-400">Undergraduate:</span>
              <span className="text-zinc-800">B.Tech CSE (AI) • 2023–2027</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Institution:</span>
              <span className="text-zinc-800">Karunya University</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Cumulative GPA:</span>
              <span className="text-zinc-900 font-semibold">8.68 / 10</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <a
            href={personalInfo.resumePath}
            download="B_Priyanka_Resume.pdf"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}?subject=Resume Request - B. Priyanka`}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Request by Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}
