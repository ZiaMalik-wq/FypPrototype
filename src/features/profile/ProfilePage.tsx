import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/store';
import { updateUserProfile } from '@/store/slices/authSlice';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { toast } from 'sonner';
import {
  User as UserIcon,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  Globe,
  Github,
  Linkedin,
  Save,
  CheckCircle2
} from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);

  const [fullName, setFullName] = useState(user?.fullName || 'Ali Khan');
  const [phone, setPhone] = useState('+92 300 1234567');
  const [location, setLocation] = useState('Islamabad, Pakistan');
  const [bio, setBio] = useState('Final year Computer Science student passionate about full-stack web engineering, cloud-native architectures, and AI decision systems.');
  const [linkedin, setLinkedin] = useState('https://linkedin.com/in/alikhan-cs');
  const [github, setGithub] = useState('https://github.com/alikhan-dev');
  const [portfolio, setPortfolio] = useState('https://alikhan.dev');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 600));
    dispatch(updateUserProfile({ fullName, phone, location, bio }));
    setIsSaving(false);
    toast.success('Profile information saved successfully.');
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-card border border-surface-border p-6 rounded-md shadow-subtle">
        <div className="flex items-center space-x-4">
          <img
            src={user?.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200'}
            alt="Avatar"
            className="w-16 h-16 rounded-full border-2 border-brand-600 object-cover shadow-subtle"
          />
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold text-text-primary tracking-tight">{fullName}</h1>
              <Badge variant="success" size="sm">Verified Student</Badge>
            </div>
            <p className="text-xs text-text-secondary mt-0.5">
              COMSATS University Islamabad • BS Computer Science (Class of 2027)
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button size="sm" onClick={handleSave} isLoading={isSaving} leftIcon={<Save className="w-4 h-4" />}>
            Save Profile
          </Button>
        </div>
      </div>

      <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Personal Info & Bio */}
        <div className="lg:col-span-8 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center space-x-2">
                <UserIcon className="w-4 h-4 text-brand-600" />
                <span>Personal & Bio Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-text-primary block">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-text-primary block">Email (Non-editable)</label>
                  <input
                    type="email"
                    value={user?.email || ''}
                    disabled
                    className="w-full px-3 py-2 text-sm bg-slate-100 border border-surface-border rounded-sm text-text-muted cursor-not-allowed"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-text-primary block">Phone Number</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-text-primary block">Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-text-primary block">Professional Bio</label>
                <textarea
                  rows={3}
                  value={bio}
                  onChange={e => setBio(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring"
                />
              </div>
            </CardContent>
          </Card>

          {/* Academic Profile */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-brand-600" />
                <span>Academic Record</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-slate-50 border border-surface-border rounded-sm space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">COMSATS University Islamabad</h4>
                    <p className="text-xs text-text-secondary">Bachelor of Science in Computer Science (Major: Software Engineering)</p>
                  </div>
                  <Badge variant="brand">CGPA: 3.75 / 4.0</Badge>
                </div>
                <p className="text-xs text-text-muted">Expected Graduation: June 2027 • Status: Enrolled Active</p>
              </div>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center space-x-2">
                <Briefcase className="w-4 h-4 text-brand-600" />
                <span>Work & Internship Experience</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-slate-50 border border-surface-border rounded-sm space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">Frontend Developer Intern</h4>
                    <p className="text-xs text-brand-600 font-medium">DevStudio Tech • Islamabad</p>
                  </div>
                  <span className="text-xs text-text-muted">Jun 2025 - Aug 2025</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Built interactive dashboard components using React, TypeScript, and Tailwind CSS. Integrated REST APIs with ASP.NET backend.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Social Links & Certifications */}
        <div className="lg:col-span-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center space-x-2">
                <Globe className="w-4 h-4 text-brand-600" />
                <span>Social & Portfolio Links</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-text-primary flex items-center">
                  <Linkedin className="w-3.5 h-3.5 mr-1 text-blue-600" /> LinkedIn URL
                </label>
                <input
                  type="url"
                  value={linkedin}
                  onChange={e => setLinkedin(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-text-primary flex items-center">
                  <Github className="w-3.5 h-3.5 mr-1 text-slate-800" /> GitHub URL
                </label>
                <input
                  type="url"
                  value={github}
                  onChange={e => setGithub(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-text-primary flex items-center">
                  <Globe className="w-3.5 h-3.5 mr-1 text-brand-600" /> Personal Portfolio
                </label>
                <input
                  type="url"
                  value={portfolio}
                  onChange={e => setPortfolio(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring"
                />
              </div>
            </CardContent>
          </Card>

          {/* Certifications Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center space-x-2">
                <Award className="w-4 h-4 text-brand-600" />
                <span>Certifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-slate-50 border border-surface-border rounded-sm space-y-1">
                <h5 className="text-xs font-semibold text-text-primary">Meta Front-End Developer Certificate</h5>
                <p className="text-[11px] text-text-secondary">Coursera / Meta • Issued Mar 2025</p>
                <p className="text-[10px] text-brand-600 font-mono">META-FE-99823</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </form>
    </div>
  );
};
