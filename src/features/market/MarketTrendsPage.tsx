import React, { useState } from 'react';
import { useAppSelector } from '@/store';
import { MetricCard } from '@/components/common/MetricCard';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Dialog } from '@/components/common/Dialog';
import { LineTrendChart } from '@/components/charts/LineTrendChart';
import { HorizontalBarChart } from '@/components/charts/HorizontalBarChart';
import { DonutChart } from '@/components/charts/DonutChart';
import { ArrowSquareOut, Briefcase, Calendar, CurrencyDollar, Funnel, Stack, MagnifyingGlass, MapPin, TrendUp } from '@phosphor-icons/react';

export const MarketTrendsPage: React.FC = () => {
  const { data: marketData } = useAppSelector(state => state.market);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const [dateRange, setDateRange] = useState('Last 90 Days');
  const [regionFilter, setRegionFilter] = useState('All Pakistan');

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-card border border-surface-border p-6 rounded-md shadow-subtle">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-text-primary tracking-tight">Labor Market Trends</h1>
            <Badge variant="brand">Real-Time Aggregation</Badge>
          </div>
          <p className="text-xs text-text-secondary mt-1">
            Continuously scraped & NLP-extracted technology demand analytics across top regional employers.
          </p>
        </div>

        {/* Global Market Funnel Bar */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 bg-slate-50 border border-surface-border px-3 py-1.5 rounded-sm text-xs">
            <Calendar className="w-3.5 h-3.5 text-text-muted" />
            <select
              value={dateRange}
              onChange={e => setDateRange(e.target.value)}
              className="bg-transparent text-text-primary font-medium focus:outline-none"
            >
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>Year 2026</option>
            </select>
          </div>

          <div className="flex items-center space-x-1 bg-slate-50 border border-surface-border px-3 py-1.5 rounded-sm text-xs">
            <MapPin className="w-3.5 h-3.5 text-text-muted" />
            <select
              value={regionFilter}
              onChange={e => setRegionFilter(e.target.value)}
              className="bg-transparent text-text-primary font-medium focus:outline-none"
            >
              <option>All Pakistan</option>
              <option>Islamabad / Rawalpindi</option>
              <option>Lahore</option>
              <option>Karachi</option>
            </select>
          </div>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <MetricCard
          title="Total Job Listings"
          value={marketData.totalJobsAnalyzed.toLocaleString()}
          change="+12% this quarter"
          trend="up"
          icon={<Briefcase className="w-5 h-5 text-brand-600" />}
        />
        <MetricCard
          title="Active Technologies"
          value={marketData.activeTechnologiesCount}
          subtitle="Normalized Taxonomies"
          trend="neutral"
          icon={<Stack className="w-5 h-5 text-brand-600" />}
        />
        <MetricCard
          title="Fastest Growing Skill"
          value={marketData.fastestGrowingSkill}
          change="+18.5% demand surge"
          trend="up"
          icon={<TrendUp className="w-5 h-5 text-semantic-success" />}
        />
        <MetricCard
          title="Avg Salary Band"
          value={marketData.averageSalaryTrend}
          subtitle="Full-Stack Roles"
          trend="up"
          icon={<CurrencyDollar className="w-5 h-5 text-brand-600" />}
        />
        <MetricCard
          title="Weekly Hiring Index"
          value={`+${marketData.weeklyGrowthPercentage}%`}
          subtitle="Demand Velocity"
          trend="up"
          icon={<TrendUp className="w-5 h-5 text-semantic-success" />}
        />
      </div>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (60%): Line Chart & Horizontal Bar Chart */}
        <div className="lg:col-span-7 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-base">Quarterly Technology Growth Trends</CardTitle>
                <CardDescription>Job posting frequency trends for key stacks</CardDescription>
              </div>
              <Badge variant="brand">Q3 2025 - Q2 2026</Badge>
            </CardHeader>
            <CardContent>
              <LineTrendChart />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Top 6 Most Demanded Skills</CardTitle>
              <CardDescription>Percentage of tech job listings requiring this skill</CardDescription>
            </CardHeader>
            <CardContent>
              <HorizontalBarChart />
            </CardContent>
          </Card>
        </div>

        {/* Right Column (40%): Industry Donut Chart & Regional Breakdown */}
        <div className="lg:col-span-5 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Hiring Distribution by Industry</CardTitle>
              <CardDescription>Breakdown across tech domain sectors</CardDescription>
            </CardHeader>
            <CardContent>
              <DonutChart />
            </CardContent>
          </Card>

          {/* Regional Demand Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Regional Tech Hub Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {marketData.regionalDemand.map((reg, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedTech(reg.topSkill)}
                  className="p-3 bg-slate-50 border border-surface-border rounded-sm hover:border-brand-600 transition-colors cursor-pointer flex items-center justify-between"
                >
                  <div>
                    <h5 className="text-xs font-bold text-text-primary">{reg.region}</h5>
                    <p className="text-[11px] text-text-secondary">Top Stack: <span className="font-semibold text-brand-600">{reg.topSkill}</span></p>
                  </div>
                  <Badge variant="success" size="sm">Index: {reg.demandLevel}/100</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Technology Drilldown Drawer / Dialog */}
      <Dialog
        isOpen={!!selectedTech}
        onClose={() => setSelectedTech(null)}
        title={`Technology Drilldown: ${selectedTech}`}
        description="Detailed market intelligence metrics and job posting context."
      >
        <div className="space-y-4">
          <div className="p-4 bg-brand-50 border border-brand-200 rounded-sm space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-brand-700">{selectedTech}</span>
              <Badge variant="success">+18.5% Growth</Badge>
            </div>
            <p className="text-xs text-text-secondary">
              Present in 35% of all active backend and full-stack software development roles across Islamabad and Lahore hubs.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-text-primary uppercase">Common Associated Job Titles</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="neutral">Senior ASP.NET Core Engineer</Badge>
              <Badge variant="neutral">DevOps & Cloud Specialist</Badge>
              <Badge variant="neutral">Full-Stack .NET Developer</Badge>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <Button size="sm" onClick={() => setSelectedTech(null)}>
              Close Insights
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
