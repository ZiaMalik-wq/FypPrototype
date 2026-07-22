import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { Brain } from 'lucide-react';
import { Toaster } from 'sonner';

export const PublicLayout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface-bg flex flex-col antialiased">
      <Toaster position="top-right" richColors />

      {/* Landing Sticky Navbar */}
      <header className="h-16 bg-surface-card border-b border-surface-border sticky top-0 z-30 px-6 md:px-12 flex items-center justify-between shadow-subtle">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-sm bg-brand-600 text-white font-bold flex items-center justify-center shrink-0 shadow-subtle">
            SG
          </div>
          <span className="font-bold text-text-primary text-base tracking-tight">
            AI Skill Gap Analyzer
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-text-secondary">
          <a href="#features" className="hover:text-brand-600 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-brand-600 transition-colors">How It Works</a>
          <a href="#faq" className="hover:text-brand-600 transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>
            Sign In
          </Button>
          <Button size="sm" onClick={() => navigate('/register')}>
            Get Started
          </Button>
        </div>
      </header>

      {/* Main Public Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Marketing Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 md:px-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-sm">
          <div>
            <div className="flex items-center space-x-2 text-white font-bold text-base mb-3">
              <Brain className="w-5 h-5 text-brand-500" />
              <span>AI Skill Gap Analyzer</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering students and academic institutions with intelligent, evidence-based labor market intelligence and personalized learning roadmaps.
            </p>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Product</h5>
            <ul className="space-y-2 text-xs">
              <li><Link to="/login" className="hover:text-white">Resume Analysis</Link></li>
              <li><Link to="/login" className="hover:text-white">Skill Gap Detection</Link></li>
              <li><Link to="/login" className="hover:text-white">Labor Market Trends</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Resources</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#faq" className="hover:text-white">Documentation</a></li>
              <li><a href="#faq" className="hover:text-white">API Specs</a></li>
              <li><a href="#faq" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Contact</h5>
            <p className="text-xs text-slate-400">
              Department of Computer Science<br />
              COMSATS University Islamabad<br />
              Email: fyp-support@skillgap.ai
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <span>© 2026 AI-Based Skill Gap Analyzer. Industrial Final Year Project.</span>
          <span>Designed with Microsoft Fluent 2 & Enterprise UX Standards.</span>
        </div>
      </footer>
    </div>
  );
};
