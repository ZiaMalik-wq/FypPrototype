import React from 'react';
import { cn } from '@/lib/utils';
import { Minus, TrendDown, TrendUp } from '@phosphor-icons/react';

export interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
  badgeText?: string;
  className?: string;
  onClick?: () => void;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  change,
  trend = 'neutral',
  icon,
  badgeText,
  className,
  onClick
}) => {
  // Determine icon coloring dynamically based on the title
  let bgClass = 'bg-[#F0F5FA] text-[#0F4C81]'; // Default Deep Navy
  const lowerTitle = title.toLowerCase();
  
  if (lowerTitle.includes('match') || lowerTitle.includes('quality') || lowerTitle.includes('score')) {
    bgClass = 'bg-[#ECFDF5] text-[#10B981]'; // Emerald/Resume
  } else if (lowerTitle.includes('missing') || lowerTitle.includes('deficiencies') || lowerTitle.includes('warning') || lowerTitle.includes('alert')) {
    bgClass = 'bg-[#FEF3C7] text-[#D97706]'; // Amber/Warning
  } else if (lowerTitle.includes('trend') || lowerTitle.includes('market') || lowerTitle.includes('demand')) {
    bgClass = 'bg-[#ECFEFF] text-[#0891B2]'; // Cyan/Market Trends
  } else if (lowerTitle.includes('skills') || lowerTitle.includes('coverage') || lowerTitle.includes('verified') || lowerTitle.includes('total')) {
    bgClass = 'bg-[#F0FDFA] text-[#0D9488]'; // Teal/Skills
  } else if (lowerTitle.includes('analyses') || lowerTitle.includes('confidence') || lowerTitle.includes('ai')) {
    bgClass = 'bg-[#EEF2FF] text-[#4F46E5]'; // Indigo/AI Analysis
  } else if (lowerTitle.includes('report') || lowerTitle.includes('session')) {
    bgClass = 'bg-[#F1F5F9] text-[#475569]'; // Slate Blue/Reports
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-surface-card border border-surface-border rounded-lg p-5 shadow-subtle transition-all duration-150',
        onClick && 'cursor-pointer hover:border-brand-500/40 hover:shadow-card hover:-translate-y-0.5',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">{title}</span>
        {icon && (
          <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors", bgClass)}>
            {React.isValidElement(icon) 
              ? React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5' }) 
              : icon
            }
          </div>
        )}
      </div>

      <div className="mt-3 flex items-baseline justify-between">
        <span className="text-2xl font-bold text-text-primary tracking-tight font-mono-numbers">{value}</span>
        {badgeText && (
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-brand-50 text-brand-700">
            {badgeText}
          </span>
        )}
      </div>

      {(subtitle || change) && (
        <div className="mt-2 flex items-center text-xs space-x-1.5">
          {change && (
            <span
              className={cn(
                'font-medium inline-flex items-center gap-0.5',
                trend === 'up' && 'text-semantic-success',
                trend === 'down' && 'text-semantic-danger',
                trend === 'neutral' && 'text-text-muted'
              )}
            >
              {trend === 'up' && <TrendUp className="w-3.5 h-3.5" />}
              {trend === 'down' && <TrendDown className="w-3.5 h-3.5" />}
              {trend === 'neutral' && <Minus className="w-3.5 h-3.5" />}
              {change}
            </span>
          )}
          {subtitle && <span className="text-text-muted">{subtitle}</span>}
        </div>
      )}
    </div>
  );
};
