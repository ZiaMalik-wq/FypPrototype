import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/store';
import { toggleSaveRecommendation, toggleCompleteRecommendation, setFilterPriority } from '@/store/slices/recommendationSlice';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { toast } from 'sonner';
import {
  Sparkles,
  Bookmark,
  CheckCircle2,
  Clock,
  ExternalLink,
  BookOpen,
  Calendar,
  Star,
  Download
} from 'lucide-react';

export const RecommendationsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: recommendations, filterPriority } = useAppSelector(state => state.recommendations);

  const filtered = recommendations.filter(r => filterPriority === 'All' || r.priority === filterPriority);

  const phases = ['Weeks 1-2', 'Weeks 3-4', 'Month 2', 'Month 3'];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-card border border-surface-border p-6 rounded-md shadow-subtle">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-text-primary tracking-tight">AI Learning Recommendations</h1>
            <Badge variant="brand">Roadmap Builder</Badge>
          </div>
          <p className="text-xs text-text-secondary mt-1">
            Personalized, quarter-by-quarter learning roadmap tailored to your skill deficiencies.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" onClick={() => toast.success('Exporting Learning Roadmap PDF...')} leftIcon={<Download className="w-4 h-4" />}>
            Export Plan
          </Button>
        </div>
      </div>

      {/* Priority Filter Toolbar */}
      <div className="flex items-center space-x-2 bg-surface-card border border-surface-border p-3 rounded-md shadow-subtle">
        <span className="text-xs font-semibold text-text-secondary mr-2">Filter Priority:</span>
        {(['All', 'High', 'Medium', 'Low'] as const).map(p => (
          <button
            key={p}
            onClick={() => dispatch(setFilterPriority(p))}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
              filterPriority === p ? 'bg-brand-600 text-white' : 'bg-slate-100 text-text-secondary hover:bg-slate-200'
            }`}
          >
            {p} {p !== 'All' ? 'Priority' : ''}
          </button>
        ))}
      </div>

      {/* Quarter-Based Learning Timeline View */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-text-primary tracking-tight">Quarterly Timeline Roadmap</h3>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {phases.map((phase, pIdx) => {
            const phaseItems = filtered.filter(r => r.roadmapPhase === phase || (pIdx === 0 && !r.roadmapPhase));
            return (
              <div key={phase} className="space-y-4">
                <div className="p-3 bg-slate-900 text-white rounded-md flex items-center justify-between shadow-subtle">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-brand-400" />
                    <span className="font-semibold text-xs">{phase}</span>
                  </div>
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-xs">
                    {phaseItems.length} Goals
                  </span>
                </div>

                <div className="space-y-4">
                  {phaseItems.length === 0 ? (
                    <div className="p-4 text-center border border-dashed border-surface-border rounded-md text-xs text-text-muted">
                      No goals scheduled for {phase}
                    </div>
                  ) : (
                    phaseItems.map(rec => (
                      <Card key={rec.id} hoverable className="space-y-3 relative">
                        <div className="flex items-start justify-between">
                          <Badge variant={rec.priority === 'High' ? 'danger' : 'warning'} size="sm">
                            {rec.priority} Priority
                          </Badge>
                          <div className="flex items-center space-x-1">
                            <button
                              onClick={() => dispatch(toggleSaveRecommendation(rec.id))}
                              className={`p-1 rounded-xs transition-colors ${rec.isSaved ? 'text-brand-600' : 'text-text-muted hover:text-text-primary'}`}
                              title="Bookmark Goal"
                            >
                              <Bookmark className="w-4 h-4 fill-current" />
                            </button>
                            <button
                              onClick={() => dispatch(toggleCompleteRecommendation(rec.id))}
                              className={`p-1 rounded-xs transition-colors ${rec.isCompleted ? 'text-semantic-success' : 'text-text-muted hover:text-text-primary'}`}
                              title="Mark Complete"
                            >
                              <CheckCircle2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-text-primary">{rec.skillName}</h4>
                          <span className="text-[11px] text-text-muted">{rec.category}</span>
                        </div>

                        <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">{rec.reasoning}</p>

                        <div className="pt-2 border-t border-surface-border flex items-center justify-between text-xs text-text-muted">
                          <span className="flex items-center">
                            <Clock className="w-3.5 h-3.5 mr-1 text-brand-600" />
                            Est: {rec.estimatedWeeks} wks
                          </span>
                          <span className="text-[11px] font-semibold text-brand-600">
                            {rec.courses.length} Course Options
                          </span>
                        </div>

                        {/* Course Links */}
                        <div className="space-y-2 pt-1">
                          {rec.courses.map(course => (
                            <a
                              key={course.id}
                              href={course.url}
                              target="_blank"
                              rel="noreferrer"
                              className="block p-2 bg-slate-50 border border-surface-border rounded-xs text-xs hover:border-brand-600 transition-colors group"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-text-primary group-hover:text-brand-600 truncate max-w-[180px]">
                                  {course.title}
                                </span>
                                <ExternalLink className="w-3 h-3 text-text-muted shrink-0" />
                              </div>
                              <div className="flex items-center space-x-2 text-[10px] text-text-muted mt-1">
                                <span>{course.provider}</span>
                                <span>•</span>
                                <span>{course.duration}</span>
                                <span>•</span>
                                <span className="flex items-center text-amber-600">
                                  <Star className="w-3 h-3 mr-0.5 fill-current" /> {course.rating}
                                </span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </Card>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
