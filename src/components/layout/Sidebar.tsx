import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAppSelector } from '@/store';
import {
  LayoutDashboard,
  User,
  FileText,
  Boxes,
  Brain,
  Sparkles,
  TrendingUp,
  FileSpreadsheet,
  Settings,
  Shield,
  Users,
  Database,
  BarChart3,
  Activity,
  ScrollText,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggleCollapse }) => {
  const { user } = useAppSelector(state => state.auth);
  const isAdminRole = user?.role === 'SystemAdmin';

  const studentNavItems = [
    { title: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { title: 'Profile', path: '/profile', icon: User },
    { title: 'Resume', path: '/resume', icon: FileText },
    { title: 'Skills Inventory', path: '/skills', icon: Boxes },
    { title: 'Skill Gap Analysis', path: '/analysis', icon: Brain },
    { title: 'Recommendations', path: '/recommendations', icon: Sparkles },
    { title: 'Market Trends', path: '/market-trends', icon: TrendingUp },
    { title: 'Reports & Exports', path: '/reports', icon: FileSpreadsheet },
    { title: 'Settings', path: '/settings', icon: Settings }
  ];

  const adminNavItems = [
    { title: 'Admin Overview', path: '/admin', icon: Shield },
    { title: 'User Management', path: '/admin/users', icon: Users },
    { title: 'Job Ingestion Sources', path: '/admin/job-sources', icon: Database },
    { title: 'Platform Analytics', path: '/admin/analytics', icon: BarChart3 },
    { title: 'System Health', path: '/admin/system', icon: Activity },
    { title: 'Audit Logs', path: '/admin/logs', icon: ScrollText },
    { title: 'Student Portal View', path: '/dashboard', icon: LayoutDashboard }
  ];

  const navItems = isAdminRole ? adminNavItems : studentNavItems;

  return (
    <aside
      className={cn(
        'fixed top-0 left-0 bottom-0 z-30 bg-surface-card border-r border-surface-border transition-all duration-300 flex flex-col group/sidebar',
        isCollapsed ? 'w-20' : 'w-70'
      )}
    >
      {/* Floating Border Toggle Handle */}
      <button
        onClick={onToggleCollapse}
        className="absolute -right-3 top-5 w-6 h-6 rounded-full border border-surface-border bg-surface-card hover:bg-brand-50 hover:text-brand-600 text-text-secondary flex items-center justify-center shadow-subtle transition-all duration-150 focus-ring z-40 hover:scale-110"
        title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        aria-label={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
      >
        {isCollapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
      </button>

      {/* Brand Header */}
      <div
        className={cn(
          'h-16 flex items-center border-b border-surface-border shrink-0 px-4',
          isCollapsed ? 'justify-center' : 'justify-between'
        )}
      >
        <div
          className={cn(
            'flex items-center space-x-3 overflow-hidden cursor-pointer',
            isCollapsed && 'justify-center'
          )}
          onClick={isCollapsed ? onToggleCollapse : undefined}
          title={isCollapsed ? 'Click to expand sidebar' : undefined}
        >
          <div className="w-9 h-9 rounded-sm bg-brand-600 text-white font-bold flex items-center justify-center shrink-0 shadow-subtle hover:bg-brand-700 transition-colors">
            SG
          </div>
          {!isCollapsed && (
            <div className="flex flex-col truncate">
              <span className="font-bold text-text-primary text-sm tracking-tight leading-tight">
                Skill Gap Analyzer
              </span>
              <span className="text-[10px] font-semibold text-brand-600 uppercase tracking-wider">
                Enterprise AI v1.0
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto py-4 px-2 space-y-1.5">
        {navItems.map(item => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              title={isCollapsed ? item.title : undefined}
              className={({ isActive }) =>
                cn(
                  'flex items-center py-2.5 rounded-sm text-sm font-medium transition-colors group relative',
                  isCollapsed ? 'justify-center px-0' : 'space-x-3 px-3',
                  isActive
                    ? 'bg-brand-50 text-brand-600 font-semibold shadow-2xs'
                    : 'text-text-secondary hover:text-text-primary hover:bg-slate-50'
                )
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && isCollapsed && (
                    <span className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-brand-600 rounded-r-xs" />
                  )}
                  <Icon className={cn('w-5 h-5 shrink-0 transition-colors', isActive ? 'text-brand-600' : 'text-text-secondary group-hover:text-text-primary')} />
                  {!isCollapsed && <span className="truncate">{item.title}</span>}
                </>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Footer Profile Mini Card */}
      <div className={cn('p-3 border-t border-surface-border bg-slate-50/50 shrink-0', isCollapsed && 'flex justify-center')}>
        <div className={cn('flex items-center', isCollapsed ? 'justify-center' : 'space-x-3')}>
          <img
            src={user?.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'}
            alt="User Avatar"
            title={isCollapsed ? `${user?.fullName} (${user?.email})` : undefined}
            className="w-8 h-8 rounded-full border border-surface-border object-cover shrink-0"
          />
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-text-primary truncate">{user?.fullName}</p>
              <p className="text-[11px] text-text-muted truncate">{user?.email}</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
