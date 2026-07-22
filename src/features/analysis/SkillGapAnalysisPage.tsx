import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@/store';
import { startAnalysis, setAnalysisStep, finishAnalysis } from '@/store/slices/analysisSlice';
import { mockSkillGapResult } from '@/services/mockData';
import { Button } from '@/components/common/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { MetricCard } from '@/components/common/MetricCard';
import { GaugeChart } from '@/components/charts/GaugeChart';
import { SkillRadarChart } from '@/components/charts/RadarChart';
import { Dialog } from '@/components/common/Dialog';
import { toast } from 'sonner';
import {
  Brain,
  Play,
  FileSpreadsheet,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Zap,
  Clock,
  ShieldCheck,
  Download
} from 'lucide-react';

export const SkillGapAnalysisPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentAnalysis, isAnalyzing, analysisProgressStep } = useAppSelector(state => state.analysis);
  const [isExportDialogOpen, setIsExportDialogOpen] = useState(false);

  const steps = [
    'Parsing PDF Resume CV',
    'Extracting & Normalizing Skills',
    'Ingesting Active Market Postings',
    'Comparing Vector Match Score',
    'Generating Learning Roadmap'
  ];

  const handleRunAnalysis = async () => {
    dispatch(startAnalysis());
    for (let i = 1; i <= 5; i++) {
      dispatch(setAnalysisStep(i));
      await new Promise(r => setTimeout(r, 600));
    }
    dispatch(finishAnalysis(mockSkillGapResult));
    toast.success('Skill gap analysis generated with 94% confidence score!');
  };

  const gapResult = currentAnalysis || mockSkillGapResult;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-card border border-surface-border p-6 rounded-md shadow-subtle">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-text-primary tracking-tight">AI Skill Gap Analysis</h1>
            <Badge variant="brand">NLP Engine v1.0</Badge>
          </div>
          <p className="text-xs text-text-secondary mt-1">
            Real-time comparison between your skills and 14,000+ technology job listings.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExportDialogOpen(true)}
            leftIcon={<FileSpreadsheet className="w-4 h-4" />}
          >
            Export Gap Report
          </Button>
          <Button
            size="sm"
            onClick={handleRunAnalysis}
            isLoading={isAnalyzing}
            leftIcon={<Play className="w-4 h-4" />}
          >
            {isAnalyzing ? 'Analyzing...' : 'Re-Run Analysis'}
          </Button>
        </div>
      </div>

      {/* Simulated 5-Step Processing Progress Indicator */}
      {isAnalyzing && (
        <Card className="bg-brand-50/50 border-brand-200">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-brand-700">
              <span className="flex items-center">
                <RefreshCw className="w-4 h-4 animate-spin mr-1.5" />
                Executing NLP Analysis Pipeline Step {analysisProgressStep} of 5
              </span>
              <span>{analysisProgressStep * 20}% Completed</span>
            </div>
            <div className="w-full h-2 bg-brand-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-600 transition-all duration-300"
                style={{ width: `${analysisProgressStep * 20}%` }}
              />
            </div>
            <p className="text-xs text-text-secondary italic">
              Current Step: {steps[analysisProgressStep - 1] || 'Processing...'}
            </p>
          </div>
        </Card>
      )}

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <MetricCard
          title="Overall Match Score"
          value={`${gapResult.skillMatchScore}%`}
          change="Market Target: 90%"
          trend="up"
          badgeText="82% Quantified"
          icon={<Brain className="w-5 h-5 text-brand-600" />}
        />
        <MetricCard
          title="Resume Quality Score"
          value={`${gapResult.resumeScore}/100`}
          subtitle="Valid PDF Architecture"
          trend="neutral"
          icon={<CheckCircle2 className="w-5 h-5 text-semantic-success" />}
        />
        <MetricCard
          title="Verified Skills"
          value={gapResult.totalSkillsIdentified}
          subtitle="Extracted & Normalized"
          trend="neutral"
          icon={<Zap className="w-5 h-5 text-brand-600" />}
        />
        <MetricCard
          title="Missing Skills Count"
          value={gapResult.missingSkillsCount}
          subtitle="Deficiencies Detected"
          trend="down"
          icon={<AlertTriangle className="w-5 h-5 text-semantic-danger" />}
        />
        <MetricCard
          title="Confidence Score"
          value={`${gapResult.confidenceScore}%`}
          subtitle="High Data Freshness"
          trend="up"
          icon={<ShieldCheck className="w-5 h-5 text-brand-600" />}
        />
      </div>

      {/* Main Analysis Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Panel (65%) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Missing Skills Priority List */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-base flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-semantic-warning" />
                  <span>Identified Missing Competencies</span>
                </CardTitle>
                <CardDescription>Ranked by current labor market demand and career impact</CardDescription>
              </div>
              <Badge variant="danger">{gapResult.highPriorityCount} High Priority</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              {gapResult.missingSkills.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-surface-border rounded-sm bg-surface-card space-y-2 hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-sm text-text-primary">{item.name}</span>
                      <Badge variant={item.priorityLevel === 'High' ? 'danger' : item.priorityLevel === 'Medium' ? 'warning' : 'neutral'} size="sm">
                        {item.priorityLevel} Priority
                      </Badge>
                    </div>
                    <span className="text-xs font-semibold text-brand-600">Demand Score: {item.marketDemandScore}%</span>
                  </div>

                  <p className="text-xs text-text-secondary">{item.gapDescription}</p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.priorityLevel === 'High' ? 'bg-semantic-danger' : 'bg-semantic-warning'}`}
                        style={{ width: `${item.marketDemandScore}%` }}
                      />
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => navigate('/recommendations')}
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      Get Recommended Course
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Competency Radar Graph */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Skill Domain Radar Mapping</CardTitle>
              <CardDescription>Your verified skill profile vs. market demand benchmarks</CardDescription>
            </CardHeader>
            <CardContent>
              <SkillRadarChart />
            </CardContent>
          </Card>
        </div>

        {/* Right Panel (35%) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Gauge Widget */}
          <Card className="flex flex-col items-center justify-center p-6 text-center">
            <h3 className="text-sm font-semibold text-text-primary mb-2">Quantified Match Gauge</h3>
            <GaugeChart score={gapResult.skillMatchScore} title="Skill Match Score" size={210} />
            <p className="text-xs text-text-secondary mt-3">
              You meet <span className="font-bold text-text-primary">82% of core requirements</span> for entry-to-mid level Full Stack Engineers.
            </p>
          </Card>

          {/* AI Reasoning Summary */}
          <Card className="bg-gradient-to-br from-surface-card to-brand-50/30">
            <CardHeader>
              <CardTitle className="text-base flex items-center space-x-2 text-brand-700">
                <Sparkles className="w-4 h-4 text-brand-600" />
                <span>Explainable AI Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-xs text-text-secondary leading-relaxed font-normal">
                "{gapResult.aiReasoningSummary}"
              </p>

              <div className="p-3 bg-white border border-surface-border rounded-sm space-y-1.5">
                <p className="text-xs font-semibold text-text-primary">Key Profile Strengths:</p>
                <ul className="text-[11px] text-text-secondary space-y-1 list-disc pl-4">
                  {gapResult.strengths.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              <Button size="sm" className="w-full" onClick={() => navigate('/recommendations')}>
                Open Learning Roadmap
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Export Report Dialog */}
      <Dialog
        isOpen={isExportDialogOpen}
        onClose={() => setIsExportDialogOpen(false)}
        title="Export Skill Gap Analysis Report"
        description="Generate a formatted PDF report with executive summary and skill recommendations."
      >
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 border border-surface-border rounded-sm space-y-2">
            <h4 className="text-sm font-semibold text-text-primary">Full Stack Developer Skill Gap Report</h4>
            <p className="text-xs text-text-secondary">Includes Match Score (82%), 4 Missing Deficiencies, and 3 Course Roadmaps.</p>
            <Badge variant="brand">Format: Portable Document Format (PDF)</Badge>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsExportDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                toast.success('Downloading Skill Gap Report PDF...');
                setIsExportDialogOpen(false);
              }}
              leftIcon={<Download className="w-4 h-4" />}
            >
              Download PDF Report
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
