import React from 'react';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

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
  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-surface-card border border-surface-border rounded-md p-5 shadow-subtle transition-all duration-150',
        onClick && 'cursor-pointer hover:border-brand-600/40 hover:shadow-card',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">{title}</span>
        {icon && (
          <div className="w-9 h-9 rounded-sm bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
            {icon}
          </div>
        )}
      </div>

      <div className="mt-3 flex items-baseline justify-between">
        <span className="text-2xl font-bold text-text-primary tracking-tight">{value}</span>
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
              {trend === 'up' && <TrendingUp className="w-3.5 h-3.5" />}
              {trend === 'down' && <TrendingDown className="w-3.5 h-3.5" />}
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
