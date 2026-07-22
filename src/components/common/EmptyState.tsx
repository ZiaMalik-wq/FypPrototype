import React from 'react';
import { cn } from '@/lib/utils';
import { FolderOpen } from 'lucide-react';
import { Button } from './Button';

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  actionText,
  onAction,
  className
}) => {
  return (
    <div className={cn('flex flex-col items-center justify-center p-8 text-center bg-surface-card border border-dashed border-surface-border rounded-md', className)}>
      <div className="w-12 h-12 rounded-full bg-slate-100 text-text-secondary flex items-center justify-center mb-3">
        {icon || <FolderOpen className="w-6 h-6" />}
      </div>
      <h4 className="text-base font-semibold text-text-primary mb-1">{title}</h4>
      {description && <p className="text-sm text-text-secondary max-w-sm mb-4">{description}</p>}
      {actionText && onAction && (
        <Button size="sm" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </div>
  );
};
