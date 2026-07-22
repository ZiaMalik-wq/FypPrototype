import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './Button';

export interface EmptyStateProps {
  icon?: React.ReactNode;
  illustration?: 'resume' | 'analysis' | 'reports' | 'default';
  title: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  illustration = 'default',
  title,
  description,
  actionText,
  onAction,
  className
}) => {
  // Minimal geometric illustrations matching the academic/enterprise theme
  const renderIllustration = () => {
    switch (illustration) {
      case 'resume':
        return (
          <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
            <rect x="35" y="10" width="50" height="70" rx="4" fill="#F0F5FA" stroke="#DCE4EC" strokeWidth="2"/>
            <rect x="45" y="25" width="30" height="4" rx="2" fill="#0F4C81" opacity="0.8"/>
            <rect x="45" y="37" width="22" height="4" rx="2" fill="#10B981" opacity="0.8"/>
            <rect x="45" y="49" width="30" height="4" rx="2" fill="#64748B" opacity="0.5"/>
            <rect x="45" y="61" width="16" height="4" rx="2" fill="#64748B" opacity="0.5"/>
            <circle cx="85" cy="70" r="16" fill="#10B981" />
            <path d="M85 64v12M79 70h12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        );
      case 'analysis':
        return (
          <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
            <circle cx="60" cy="45" r="28" fill="#F0FDFA" stroke="#DCE4EC" strokeWidth="1.5"/>
            <circle cx="60" cy="45" r="14" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2" strokeDasharray="3 3"/>
            <circle cx="60" cy="20" r="5" fill="#6366F1"/>
            <circle cx="38" cy="55" r="5" fill="#0F4C81"/>
            <circle cx="82" cy="55" r="5" fill="#10B981"/>
            <line x1="60" y1="25" x2="60" y2="31" stroke="#6366F1" strokeWidth="1.5"/>
            <line x1="43" y1="52" x2="49" y2="48" stroke="#0F4C81" strokeWidth="1.5"/>
            <line x1="77" y1="52" x2="71" y2="48" stroke="#10B981" strokeWidth="1.5"/>
            <path d="M57 45h6M60 42v6" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 'reports':
        return (
          <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
            <rect x="25" y="20" width="70" height="50" rx="6" fill="#F8FAFC" stroke="#DCE4EC" strokeWidth="2"/>
            <rect x="35" y="50" width="10" height="12" rx="1" fill="#64748B"/>
            <rect x="49" y="38" width="10" height="24" rx="1" fill="#0F4C81"/>
            <rect x="63" y="44" width="10" height="18" rx="1" fill="#10B981"/>
            <rect x="77" y="32" width="10" height="30" rx="1" fill="#F59E0B"/>
            <path d="M30 65h60" stroke="#DCE4EC" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      case 'default':
      default:
        if (icon) {
          return (
            <div className="w-16 h-16 rounded-full bg-[#F0F5FA] text-[#0F4C81] flex items-center justify-center mx-auto mb-4">
              {icon}
            </div>
          );
        }
        return (
          <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
            <path d="M40 25h15l8 8h17c2.2 0 4 1.8 4 4v28c0 2.2-1.8 4-4 4H40c-2.2 0-4-1.8-4-4V29c0-2.2 1.8-4 4-4z" fill="#F0F5FA" stroke="#DCE4EC" strokeWidth="2"/>
            <circle cx="60" cy="52" r="10" fill="#E2E8F0" />
            <path d="M66 58l6 6" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        );
    }
  };

  return (
    <div className={cn('flex flex-col items-center justify-center p-8 text-center bg-surface-card border border-dashed border-surface-border rounded-lg shadow-subtle', className)}>
      {renderIllustration()}
      <h4 className="text-base font-semibold text-text-primary mb-1.5">{title}</h4>
      {description && <p className="text-sm text-text-secondary max-w-sm mb-5">{description}</p>}
      {actionText && onAction && (
        <Button size="sm" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </div>
  );
};
