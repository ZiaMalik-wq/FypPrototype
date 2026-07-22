import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Brain, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';
import { Toaster } from 'sonner';

export const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface-bg flex items-center justify-center p-4 md:p-8 antialiased">
      <Toaster position="top-right" richColors />

      <div className="w-full max-w-4xl bg-surface-card border border-surface-border rounded-md shadow-card overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Side: Brand & Benefits */}
        <div className="bg-slate-900 text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-brand-600/10 blur-2xl pointer-events-none" />

          <div>
            <Link to="/" className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 rounded-sm bg-brand-600 text-white font-bold flex items-center justify-center shadow-subtle">
                SG
              </div>
              <span className="font-bold text-lg tracking-tight">AI Skill Gap Analyzer</span>
            </Link>

            <h2 className="text-2xl font-bold tracking-tight text-white mb-3">
              Bridge the Gap Between Education & Industry.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              AI-driven labor market intelligence and skill-gap decision support system for students and universities.
            </p>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                <span>NLP-based resume skill extraction & normalization</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <TrendingUp className="w-4 h-4 text-brand-400 shrink-0" />
                <span>Live tech demand trends from 14,000+ job listings</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-brand-400 shrink-0" />
                <span>Explainable AI recommendations and curated learning roadmaps</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 text-[11px] text-slate-400">
            Industrial Final Year Project • Version 1.0 Enterprise
          </div>
        </div>

        {/* Right Side: Form Container */}
        <div className="p-8 md:p-10 flex flex-col justify-center bg-surface-card">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
