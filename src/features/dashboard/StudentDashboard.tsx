import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/store';
import { Button } from '@/components/common/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common/Card';
import { MetricCard } from '@/components/common/MetricCard';
import { Badge } from '@/components/common/Badge';
import { GaugeChart } from '@/components/charts/GaugeChart';
import { SkillRadarChart } from '@/components/charts/RadarChart';
import { ArrowRight, Brain, CheckCircle, Clock, FileText, Package, Play, Sparkle, TrendUp, Upload, Warning } from '@phosphor-icons/react';

export const StudentDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector(state => state.auth);
  const { currentAnalysis } = useAppSelector(state => state.analysis);
  const { items: recommendations } = useAppSelector(state => state.recommendations);
  const { items: skills } = useAppSelector(state => state.skills);

  const matchScore = currentAnalysis?.skillMatchScore || 82;
  const resumeScore = currentAnalysis?.resumeScore || 84;
  const missingSkillsCount = currentAnalysis?.missingSkillsCount || 4;

  return (
    <div className="space-y-6">
      {/* Top Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-card border border-surface-border p-6 rounded-md shadow-subtle">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-text-primary tracking-tight">
              Welcome back, {user?.fullName?.split(' ')[0] || 'Ali'}!
            </h1>
            <Badge variant="brand">Student Portal</Badge>
          </div>
          <p className="text-xs text-text-secondary flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1 text-text-muted" />
            Last skill gap analysis performed: <span className="font-semibold text-text-primary ml-1">July 19, 2026 at 10:15 AM</span>
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" onClick={() => navigate('/resume')} leftIcon={<Upload className="w-4 h-4" />}>
            Update Resume
          </Button>
          <Button size="sm" onClick={() => navigate('/analysis')} leftIcon={<Play className="w-4 h-4" />}>
            Run New Analysis
          </Button>
        </div>
      </div>

      {/* KPI Widgets Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <MetricCard
          title="Skill Match Score"
          value={`${matchScore}%`}
          change="+4.2% vs last month"
          trend="up"
          badgeText="High Alignment"
          icon={<Brain className="w-5 h-5 text-brand-600" />}
          onClick={() => navigate('/analysis')}
        />
        <MetricCard
          title="Total Skills Identified"
          value={skills.length}
          subtitle="9 from Resume + 1 Manual"
          trend="neutral"
          icon={<Package className="w-5 h-5 text-brand-600" />}
          onClick={() => navigate('/skills')}
        />
        <MetricCard
          title="Missing Deficiencies"
          value={missingSkillsCount}
          subtitle="2 High Priority Gaps"
          change="-1 resolved"
          trend="up"
          icon={<Warning className="w-5 h-5 text-semantic-warning" />}
          onClick={() => navigate('/analysis')}
        />
        <MetricCard
          title="Resume Quality Score"
          value={`${resumeScore}/100`}
          subtitle="PDF Parsed & Validated"
          trend="up"
          icon={<FileText className="w-5 h-5 text-brand-600" />}
          onClick={() => navigate('/resume')}
        />
        <MetricCard
          title="Target Role Demand"
          value="High"
          subtitle="Full-Stack Engineer"
          change="+18% Q3 Growth"
          trend="up"
          icon={<TrendUp className="w-5 h-5 text-semantic-success" />}
          onClick={() => navigate('/market-trends')}
        />
      </div>

      {/* Main Grid: Left 70% / Right 30% */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (70%) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Skill Gap & Radar Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-card border border-surface-border rounded-md p-4 sm:p-6 shadow-subtle">
            <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-surface-border pb-6 md:pb-0 md:pr-6">
              <h3 className="text-sm font-semibold text-text-primary self-start mb-2">Overall Market Readiness</h3>
              <GaugeChart score={matchScore} title="Skill Match Score" size={200} />
              <p className="text-xs text-text-secondary text-center mt-2">
                You possess <span className="font-semibold text-text-primary">{skills.length} core skills</span> matching 82% of current enterprise job postings in Islamabad/Rawalpindi.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-text-primary">Competency Distribution</h3>
                <span className="text-[11px] text-brand-600 font-medium cursor-pointer hover:underline" onClick={() => navigate('/analysis')}>
                  View Radar &rarr;
                </span>
              </div>
              <SkillRadarChart />
            </div>
          </div>

          {/* AI Recommended Learning Actions */}
          <Card>
            <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <CardTitle className="flex items-center space-x-2 text-base">
                  <Sparkle className="w-4 h-4 text-brand-600" />
                  <span>AI Learning Recommendations</span>
                </CardTitle>
                <CardDescription>Highest impact learning goals to reach 95%+ Market Match</CardDescription>
              </div>
              <Button size="sm" variant="ghost" onClick={() => navigate('/recommendations')} rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                View All Roadmap
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {recommendations.slice(0, 3).map((rec) => (
                <div
                  key={rec.id}
                  className="p-4 border border-surface-border rounded-sm bg-slate-50/50 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="font-semibold text-sm text-text-primary mr-1">{rec.skillName}</span>
                      <Badge variant={rec.priority === 'High' ? 'danger' : 'warning'} size="sm">
                        {rec.priority} Priority
                      </Badge>
                      <Badge variant="neutral" size="sm">{rec.roadmapPhase}</Badge>
                    </div>
                    <p className="text-xs text-text-secondary">{rec.reasoning}</p>
                  </div>
                  <Button size="sm" variant="outline" className="w-full sm:w-auto shrink-0 animate-pulse-subtle" onClick={() => navigate('/recommendations')}>
                    Explore Course
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Column (30%) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Profile Completion Widget */}
          <Card className="border border-surface-border bg-surface-card">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-text-primary uppercase tracking-wider">Profile Strength</span>
              <span className="text-sm font-extrabold text-brand-600 font-mono-numbers">88%</span>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-3">
              <div className="h-full bg-brand-600 w-[88%]" />
            </div>
            <p className="text-xs text-text-secondary leading-relaxed mb-4">
              Add your <span className="font-medium text-text-primary">GitHub Profile link</span> to unlock automatic repository sync and gain +12% resume verification score.
            </p>
            <Button size="sm" variant="outline" className="w-full" onClick={() => navigate('/profile')}>
              Complete Profile
            </Button>
          </Card>

          {/* Activity Timeline Widget */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3 text-xs">
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="font-medium text-text-primary">Executed Skill Gap Analysis</p>
                  <p className="text-text-muted">July 19, 2026 • Match Score: 82%</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-xs">
                <div className="w-6 h-6 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                  <FileText className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="font-medium text-text-primary">Uploaded Resume CV</p>
                  <p className="text-text-muted">Ali_Khan_Software_Engineer_CV.pdf</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-xs">
                <div className="w-6 h-6 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="font-medium text-text-primary">Saved Docker Learning Goal</p>
                  <p className="text-text-muted">Target completion: 2 weeks</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
