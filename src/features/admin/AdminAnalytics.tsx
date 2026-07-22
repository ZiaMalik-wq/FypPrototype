import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { AreaVolumeChart } from '@/components/charts/AreaVolumeChart';
import { LineTrendChart } from '@/components/charts/LineTrendChart';
import { DonutChart } from '@/components/charts/DonutChart';
import { ChartBar, GraduationCap, Users } from '@phosphor-icons/react';

export const AdminAnalytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-card border border-surface-border p-6 rounded-md shadow-subtle">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-text-primary tracking-tight">Institutional & Platform Analytics</h1>
            <Badge variant="brand">Operational Intelligence</Badge>
          </div>
          <p className="text-xs text-text-secondary mt-1">
            Student adoption metrics, university comparison, and aggregate skill demand reporting.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">User Registration Growth Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <AreaVolumeChart />
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">University Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <DonutChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
