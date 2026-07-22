import React from 'react';
import { useAppSelector } from '@/store';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { toast } from 'sonner';
import { Activity, Server, Cpu, HardDrive, RefreshCw } from 'lucide-react';

export const SystemMonitoring: React.FC = () => {
  const { systemHealth } = useAppSelector(state => state.admin);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-card border border-surface-border p-6 rounded-md shadow-subtle">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-text-primary tracking-tight">System Monitoring & Health</h1>
            <Badge variant="success">99.98% Platform Uptime</Badge>
          </div>
          <p className="text-xs text-text-secondary mt-1">
            Real-time latency, uptime, database performance, and background worker queues.
          </p>
        </div>

        <Button size="sm" variant="outline" onClick={() => toast.success('Services health re-checked.')} leftIcon={<RefreshCw className="w-4 h-4" />}>
          Ping Services
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {systemHealth.map(service => (
          <Card key={service.id} hoverable className="space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <Server className="w-5 h-5 text-brand-600 shrink-0" />
                <h3 className="text-sm font-bold text-text-primary">{service.serviceName}</h3>
              </div>
              <Badge variant={service.status === 'Healthy' ? 'success' : 'warning'} size="sm">
                {service.status}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
              <div className="p-2 bg-slate-50 border border-surface-border rounded-xs">
                <span className="text-[10px] font-semibold text-text-secondary uppercase">Latency</span>
                <p className="font-bold text-text-primary mt-0.5">{service.latencyMs} ms</p>
              </div>
              <div className="p-2 bg-slate-50 border border-surface-border rounded-xs">
                <span className="text-[10px] font-semibold text-text-secondary uppercase">Uptime</span>
                <p className="font-bold text-brand-600 mt-0.5">{service.uptimePercentage}%</p>
              </div>
            </div>

            <p className="text-[11px] text-text-muted">Checked: {service.lastChecked}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};
