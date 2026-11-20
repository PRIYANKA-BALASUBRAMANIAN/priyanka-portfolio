import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ state: 'error', message: 'Please complete all required fields.' });
      return;
    }

    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setStatus({
      state: 'success',
      message: 'Opening your default mail client with your prefilled message!'
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Section Label */}
          <div className="md:col-span-4 space-y-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
                08 // Get in Touch
              </span>
              <h2 className="text-2xl font-bold text-zinc-950 mt-1">
                Contact Me
              </h2>
            </div>

            <p className="text-sm text-zinc-600 leading-relaxed">
              I am interested in internship opportunities, technical discussions, and collaborative software projects in Artificial Intelligence and software engineering.
            </p>

            {/* Direct Information Box */}
            <div className="p-4 bg-white border border-zinc-200 rounded-lg space-y-3 text-xs font-mono">
              <div>
                <span className="text-zinc-400 block mb-0.5">Email:</span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-zinc-900 font-semibold break-all">
                    {personalInfo.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 hover:bg-zinc-100 rounded text-zinc-600 cursor-pointer"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-100">
                <span className="text-zinc-400 block mb-0.5">Location:</span>
                <span className="text-zinc-800">{personalInfo.location}</span>
              </div>

              <div className="pt-2 border-t border-zinc-100 space-y-1">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-zinc-700 hover:text-zinc-950"
                >
                  <span className="flex items-center gap-1.5">
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Profile</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-zinc-700 hover:text-zinc-950"
                >
                  <span className="flex items-center gap-1.5">
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="md:col-span-8">
            <div className="p-6 sm:p-8 bg-white border border-zinc-200 rounded-lg">
              <h3 className="text-base font-bold text-zinc-900 mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-zinc-500 mb-6">
                Feel free to reach out directly using this form.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-600 mb-1">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-3 py-2 bg-[#fafafa] border border-zinc-300 rounded text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 transition-colors font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-600 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full px-3 py-2 bg-[#fafafa] border border-zinc-300 rounded text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 transition-colors font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-600 mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="AI Internship / Opportunity / Project Discussion"
                    className="w-full px-3 py-2 bg-[#fafafa] border border-zinc-300 rounded text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-zinc-600 mb-1">Message *</label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-3 py-2 bg-[#fafafa] border border-zinc-300 rounded text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 transition-colors resize-none font-sans"
                  />
                </div>

                {status.message && (
                  <div
                    className={`p-3 rounded text-xs ${
                      status.state === 'error'
                        ? 'bg-rose-50 text-rose-700 border border-rose-200'
                        : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
