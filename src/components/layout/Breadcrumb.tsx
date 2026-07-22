import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const routeNameMap: Record<string, string> = {
    dashboard: 'Dashboard',
    profile: 'Profile Management',
    resume: 'Resume Management',
    skills: 'Skill Inventory',
    analysis: 'Skill Gap Analysis',
    recommendations: 'AI Learning Roadmap',
    'market-trends': 'Labor Market Trends',
    reports: 'Reports & Exports',
    settings: 'Settings',
    notifications: 'Notifications',
    admin: 'Admin Portal',
    users: 'User Management',
    'job-sources': 'Job Ingestion Sources',
    analytics: 'Platform Analytics',
    system: 'System Health & Monitoring',
    logs: 'Audit Logs'
  };

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-1 text-xs text-text-secondary mb-4">
      <Link to="/dashboard" className="flex items-center hover:text-brand-600 transition-colors">
        <Home className="w-3.5 h-3.5 mr-1" />
        <span>Home</span>
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = routeNameMap[name] || name.charAt(0).toUpperCase() + name.slice(1);

        return (
          <React.Fragment key={routeTo}>
            <ChevronRight className="w-3.5 h-3.5 text-text-muted shrink-0" />
            {isLast ? (
              <span className="font-semibold text-text-primary truncate">{displayName}</span>
            ) : (
              <Link to={routeTo} className="hover:text-brand-600 transition-colors truncate">
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
