import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/layout/Sidebar';
import { TopNav } from '@/components/layout/TopNav';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { CommandKModal } from '@/components/layout/CommandKModal';
import { Toaster } from 'sonner';
import { cn } from '@/lib/utils';

export const AppLayout: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isCommandKOpen, setIsCommandKOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface-bg flex flex-col antialiased">
      {/* Toast Notification Container */}
      <Toaster position="top-right" richColors />

      {/* Command K Search Modal */}
      <CommandKModal isOpen={isCommandKOpen} onClose={() => setIsCommandKOpen(false)} />

      {/* Persistent Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Main Container Area */}
      <div
        className={cn(
          'flex-1 flex flex-col transition-all duration-300 min-h-screen',
          isSidebarCollapsed ? 'pl-20' : 'pl-70'
        )}
      >
        <TopNav onOpenCommandK={() => setIsCommandKOpen(true)} />

        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto space-y-6">
          <Breadcrumb />
          <Outlet />
        </main>

        <footer className="py-4 px-8 border-t border-surface-border bg-surface-card text-xs text-text-secondary flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 AI-Based Skill Gap Analyzer. Industrial Final Year Project.</span>
          <div className="flex space-x-4">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
            <span className="hover:underline cursor-pointer">Documentation</span>
          </div>
        </footer>
      </div>
    </div>
  );
};
