import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  LayoutDashboard,
  User,
  FileText,
  Brain,
  Sparkles,
  TrendingUp,
  FileSpreadsheet,
  Settings,
  Shield,
  Users,
  Database,
  Activity,
  ArrowRight
} from 'lucide-react';

export interface CommandKModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandKModal: React.FC<CommandKModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const items = [
    { title: 'Student Dashboard', path: '/dashboard', category: 'Student Portal', icon: <LayoutDashboard className="w-4 h-4" /> },
    { title: 'My Profile & Education', path: '/profile', category: 'Student Portal', icon: <User className="w-4 h-4" /> },
    { title: 'Resume Management', path: '/resume', category: 'Student Portal', icon: <FileText className="w-4 h-4" /> },
    { title: 'Skill Gap Analysis', path: '/analysis', category: 'AI Features', icon: <Brain className="w-4 h-4" /> },
    { title: 'AI Recommendations Roadmap', path: '/recommendations', category: 'AI Features', icon: <Sparkles className="w-4 h-4" /> },
    { title: 'Market Trends Dashboard', path: '/market-trends', category: 'Labor Intelligence', icon: <TrendingUp className="w-4 h-4" /> },
    { title: 'Historical Reports & PDF Export', path: '/reports', category: 'Reports', icon: <FileSpreadsheet className="w-4 h-4" /> },
    { title: 'Account Settings', path: '/settings', category: 'User Settings', icon: <Settings className="w-4 h-4" /> },
    { title: 'Admin Overview', path: '/admin', category: 'Administration', icon: <Shield className="w-4 h-4" /> },
    { title: 'User Management', path: '/admin/users', category: 'Administration', icon: <Users className="w-4 h-4" /> },
    { title: 'Job Sources & Scraping', path: '/admin/job-sources', category: 'Administration', icon: <Database className="w-4 h-4" /> },
    { title: 'System Health & Monitoring', path: '/admin/system', category: 'Administration', icon: <Activity className="w-4 h-4" /> }
  ];

  const filteredItems = items.filter(
    item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-slate-900/40 backdrop-blur-xs p-4 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-surface-card rounded-md border border-surface-border shadow-dropdown overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3 border-b border-surface-border bg-surface-card">
          <Search className="w-5 h-5 text-text-muted shrink-0 mr-3" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or search page (Ctrl+K)..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-text-primary placeholder:text-text-muted focus:outline-none"
          />
          <kbd className="px-2 py-0.5 text-[10px] font-semibold text-text-muted bg-slate-100 border border-slate-200 rounded-xs">
            ESC
          </kbd>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {filteredItems.length === 0 ? (
            <div className="p-6 text-center text-sm text-text-muted">No matching results found</div>
          ) : (
            filteredItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleSelect(item.path)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xs text-sm text-text-primary hover:bg-brand-50 hover:text-brand-700 cursor-pointer transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-text-secondary group-hover:text-brand-600">{item.icon}</span>
                  <span className="font-medium">{item.title}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] font-medium text-text-muted bg-slate-100 px-2 py-0.5 rounded-xs group-hover:bg-brand-100 group-hover:text-brand-700">
                    {item.category}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-brand-600 transition-opacity" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
