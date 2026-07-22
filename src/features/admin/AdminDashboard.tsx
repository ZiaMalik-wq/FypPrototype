import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@/store';
import { MetricCard } from '@/components/common/MetricCard';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { AreaVolumeChart } from '@/components/charts/AreaVolumeChart';
import { LineTrendChart } from '@/components/charts/LineTrendChart';
import { toast } from 'sonner';
import { ArrowClockwise, Brain, CheckCircle, Database, Play, Pulse, Scroll, HardDrives, Shield, Users, Warning } from '@phosphor-icons/react';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { analytics, systemHealth, jobSources } = useAppSelector(state => state.admin);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-card border border-surface-border p-6 rounded-md shadow-subtle">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-text-primary tracking-tight">System Operational Overview</h1>
            <Badge variant="success">All Core Systems Operational</Badge>
          </div>
          <p className="text-xs text-text-secondary mt-1">
            Platform operations, scrapers, background queues, and user activity monitoring.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => toast.success('Scraper job triggered in background queue.')}
            leftIcon={<ArrowClockwise className="w-4 h-4" />}
          >
            Re-run Scraping
          </Button>
          <Button size="sm" onClick={() => navigate('/admin/users')} leftIcon={<Users className="w-4 h-4" />}>
            Manage Users
          </Button>
        </div>
      </div>

      {/* Operational KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        <MetricCard
          title="Total Registered Users"
          value={analytics.totalUsers.toLocaleString()}
          change="+48 this week"
          trend="up"
          icon={<Users className="w-5 h-5 text-brand-600" />}
          onClick={() => navigate('/admin/users')}
        />
        <MetricCard
          title="Active Users (24h)"
          value={analytics.active24h}
          subtitle="23% Daily Active"
          trend="up"
          icon={<Pulse className="w-5 h-5 text-semantic-success" />}
        />
        <MetricCard
          title="Daily AI Analyses"
          value={analytics.dailyAnalyses}
          change="+14% volume"
          trend="up"
          icon={<Brain className="w-5 h-5 text-brand-600" />}
        />
        <MetricCard
          title="Job Posts Collected"
          value={analytics.jobsCollectedTotal.toLocaleString()}
          subtitle="5 Portals Ingestion"
          trend="up"
          icon={<Database className="w-5 h-5 text-brand-600" />}
          onClick={() => navigate('/admin/job-sources')}
        />
        <MetricCard
          title="NLP Worker Queue"
          value={analytics.nlpQueueSize}
          subtitle="Avg Latency: 140ms"
          trend="neutral"
          icon={<HardDrives className="w-5 h-5 text-brand-600" />}
        />
        <MetricCard
          title="System Health Score"
          value={`${analytics.systemHealthScore}%`}
          subtitle="Uptime 99.98%"
          trend="up"
          icon={<Shield className="w-5 h-5 text-semantic-success" />}
          onClick={() => navigate('/admin/system')}
        />
      </div>

      {/* Main Grid: Charts & System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (65%): Volume Trends */}
        <div className="lg:col-span-8 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Daily Skill Gap Analysis Volume</CardTitle>
              <CardDescription>Total AI analysis requests processed per day</CardDescription>
            </CardHeader>
            <CardContent>
              <AreaVolumeChart data={analytics.analysisVolume} />
            </CardContent>
          </Card>

          {/* Quick Admin Actions Row */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Quick Operational Commands</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => toast.success('Flushed Redis Cache & Refreshed System Indexes.')}
                leftIcon={<ArrowClockwise className="w-3.5 h-3.5" />}
              >
                Clear System Cache
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/admin/job-sources')}
                leftIcon={<Database className="w-3.5 h-3.5" />}
              >
                Job Portals Sync
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/admin/system')}
                leftIcon={<HardDrives className="w-3.5 h-3.5" />}
              >
                Service Monitoring
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/admin/logs')}
                leftIcon={<Scroll className="w-3.5 h-3.5" />}
              >
                Inspect Audit Logs
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column (35%): Services Status Summary */}
        <div className="lg:col-span-4 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base">Microservices Status</CardTitle>
              <span className="text-xs text-brand-600 font-medium cursor-pointer hover:underline" onClick={() => navigate('/admin/system')}>
                View All &rarr;
              </span>
            </CardHeader>
            <CardContent className="space-y-3">
              {systemHealth.slice(0, 5).map(service => (
                <div key={service.id} className="p-3 bg-slate-50 border border-surface-border rounded-sm flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold text-text-primary">{service.serviceName}</p>
                    <p className="text-text-muted">Latency: {service.latencyMs}ms • Uptime: {service.uptimePercentage}%</p>
                  </div>
                  <Badge variant={service.status === 'Healthy' ? 'success' : 'warning'} size="sm">
                    {service.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
