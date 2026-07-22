import React from 'react';
import { useAppSelector, useAppDispatch } from '@/store';
import { toggleJobSource } from '@/store/slices/adminSlice';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { toast } from 'sonner';
import {
  Database,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  WifiOff,
  Globe,
  Power
} from 'lucide-react';

export const JobSourceManagement: React.FC = () => {
  const dispatch = useAppDispatch();
  const { jobSources } = useAppSelector(state => state.admin);

  const handleToggle = (id: string, name: string) => {
    dispatch(toggleJobSource(id));
    toast.info(`Toggled scraper for ${name}`);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-card border border-surface-border p-6 rounded-md shadow-subtle">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-text-primary tracking-tight">Job Source Ingestion Portals</h1>
            <Badge variant="brand">{jobSources.length} Configured Sources</Badge>
          </div>
          <p className="text-xs text-text-secondary mt-1">
            Manage automated web scrapers, crawler schedules, and job posting ingestion pipelines.
          </p>
        </div>

        <Button size="sm" onClick={() => toast.success('Triggered sync across all active scrapers.')} leftIcon={<RefreshCw className="w-4 h-4" />}>
          Run All Ingestions
        </Button>
      </div>

      {/* Sources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobSources.map(src => (
          <Card key={src.id} hoverable className="flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-brand-600 shrink-0" />
                  <div>
                    <h3 className="text-base font-bold text-text-primary">{src.name}</h3>
                    <span className="text-[11px] text-text-muted truncate max-w-[200px] block">{src.url}</span>
                  </div>
                </div>
                <Badge
                  variant={src.status === 'Healthy' ? 'success' : src.status === 'Warning' ? 'warning' : 'neutral'}
                  size="sm"
                >
                  {src.status}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-4">
                <div className="p-2.5 bg-slate-50 border border-surface-border rounded-xs">
                  <span className="text-[10px] font-semibold text-text-secondary uppercase">Records Imported</span>
                  <p className="text-sm font-bold text-text-primary mt-0.5">{src.recordsImported.toLocaleString()}</p>
                </div>
                <div className="p-2.5 bg-slate-50 border border-surface-border rounded-xs">
                  <span className="text-[10px] font-semibold text-text-secondary uppercase">Success Rate</span>
                  <p className="text-sm font-bold text-brand-600 mt-0.5">{src.successRate}%</p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-surface-border flex items-center justify-between text-xs">
              <span className="text-text-muted">Sync: {src.lastSync}</span>
              <Button
                size="sm"
                variant={src.isAutoScrapeEnabled ? 'outline' : 'primary'}
                onClick={() => handleToggle(src.id, src.name)}
                leftIcon={<Power className="w-3.5 h-3.5" />}
              >
                {src.isAutoScrapeEnabled ? 'Pause Scraper' : 'Enable Scraper'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
