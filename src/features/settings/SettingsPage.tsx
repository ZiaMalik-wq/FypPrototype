import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { toast } from 'sonner';
import {
  Settings,
  Bell,
  Lock,
  Brain,
  Shield,
  Save,
  Check
} from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [aiSensitivity, setAiSensitivity] = useState<'Standard' | 'Strict' | 'Lenient'>('Standard');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 500));
    setIsSaving(false);
    toast.success('System settings saved successfully.');
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-card border border-surface-border p-6 rounded-md shadow-subtle">
        <div>
          <h1 className="text-2xl font-bold text-text-primary tracking-tight">Account & Platform Settings</h1>
          <p className="text-xs text-text-secondary mt-1">
            Manage your AI analysis preferences, notification channels, and account security.
          </p>
        </div>

        <Button size="sm" onClick={handleSave} isLoading={isSaving} leftIcon={<Save className="w-4 h-4" />}>
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 60%: AI & Notification Settings */}
        <div className="lg:col-span-8 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center space-x-2">
                <Brain className="w-4 h-4 text-brand-600" />
                <span>AI Skill Gap Engine Preferences</span>
              </CardTitle>
              <CardDescription>Adjust how strictly the NLP model evaluates missing competencies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-text-primary block">Analysis Match Sensitivity</label>
                <div className="grid grid-cols-3 gap-3">
                  {(['Standard', 'Strict', 'Lenient'] as const).map(mode => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setAiSensitivity(mode)}
                      className={`p-3 text-left border rounded-sm transition-all text-xs ${
                        aiSensitivity === mode
                          ? 'border-brand-600 bg-brand-50/50 text-brand-700 font-semibold'
                          : 'border-surface-border bg-white text-text-secondary hover:bg-slate-50'
                      }`}
                    >
                      <span className="block font-bold mb-0.5">{mode}</span>
                      <span className="text-[10px] text-text-muted">
                        {mode === 'Standard' && 'Balanced keyword & semantic vector matching.'}
                        {mode === 'Strict' && 'Strict exact term requirements.'}
                        {mode === 'Lenient' && 'Broader conceptual matching.'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center space-x-2">
                <Bell className="w-4 h-4 text-brand-600" />
                <span>Notification Preferences</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-50 border border-surface-border rounded-sm">
                <div>
                  <p className="text-xs font-semibold text-text-primary">Email Notifications</p>
                  <p className="text-[11px] text-text-secondary">Receive alerts when new market trends affect your profile.</p>
                </div>
                <input
                  type="checkbox"
                  checked={emailNotifs}
                  onChange={e => setEmailNotifs(e.target.checked)}
                  className="w-4 h-4 text-brand-600 rounded-xs border-surface-border focus:ring-brand-600"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-50 border border-surface-border rounded-sm">
                <div>
                  <p className="text-xs font-semibold text-text-primary">Weekly Labor Market Digest</p>
                  <p className="text-[11px] text-text-secondary">Summary of fastest-growing skills in your region.</p>
                </div>
                <input
                  type="checkbox"
                  checked={weeklyDigest}
                  onChange={e => setWeeklyDigest(e.target.checked)}
                  className="w-4 h-4 text-brand-600 rounded-xs border-surface-border focus:ring-brand-600"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right 40%: Password & Security */}
        <div className="lg:col-span-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center space-x-2">
                <Lock className="w-4 h-4 text-brand-600" />
                <span>Security & Password</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-text-primary block">Current Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-text-primary block">New Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring"
                />
              </div>
              <Button size="sm" variant="outline" className="w-full mt-2" onClick={() => toast.success('Password updated successfully.')}>
                Update Password
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
