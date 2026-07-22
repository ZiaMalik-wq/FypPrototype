import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { UploadZone } from '@/components/forms/UploadZone';
import { mockResume } from '@/services/mockData';
import { toast } from 'sonner';
import {
  FileText,
  Download,
  Trash2,
  RefreshCw,
  CheckCircle2,
  Sparkles,
  Eye,
  AlertCircle
} from 'lucide-react';

export const ResumePage: React.FC = () => {
  const [resume, setResume] = useState(mockResume);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (file: File) => {
    setIsUploading(true);
    toast.info('Uploading resume & initializing NLP skill extraction...');
    await new Promise(r => setTimeout(r, 1500));
    setIsUploading(false);

    setResume({
      id: `RES-${Date.now()}`,
      fileName: file.name,
      fileSize: file.size,
      uploadedAt: new Date().toISOString(),
      status: 'Parsed',
      resumeScore: 86,
      extractedSkillsCount: 10,
      downloadUrl: '#'
    });

    toast.success('Resume successfully uploaded and parsed!');
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete your current resume?')) {
      toast.info('Resume deleted.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-card border border-surface-border p-6 rounded-md shadow-subtle">
        <div>
          <h1 className="text-2xl font-bold text-text-primary tracking-tight">Resume Management</h1>
          <p className="text-xs text-text-secondary mt-1">
            Upload and manage your CV to power AI skill extraction and gap analysis.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" onClick={handleDelete} leftIcon={<Trash2 className="w-4 h-4 text-semantic-danger" />}>
            Delete Resume
          </Button>
          <Button size="sm" leftIcon={<Download className="w-4 h-4" />}>
            Download PDF
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 60%: Upload Area & Metadata */}
        <div className="lg:col-span-7 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center space-x-2">
                <FileText className="w-4 h-4 text-brand-600" />
                <span>Upload New Resume</span>
              </CardTitle>
              <CardDescription>Support for PDF format up to 20MB</CardDescription>
            </CardHeader>
            <CardContent>
              <UploadZone
                onFileUpload={handleFileUpload}
                isProcessing={isUploading}
                currentFileName={resume.fileName}
                currentFileSize={resume.fileSize}
              />
            </CardContent>
          </Card>

          {/* Current Resume Metadata Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-sm">Current Active Resume Details</CardTitle>
                <CardDescription>Status: {resume.status}</CardDescription>
              </div>
              <Badge variant="success" size="md">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Ready for Analysis
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-3 bg-slate-50 border border-surface-border rounded-sm">
                  <span className="text-[11px] font-semibold text-text-secondary uppercase">Resume Score</span>
                  <p className="text-xl font-bold text-brand-600 mt-1">{resume.resumeScore} / 100</p>
                </div>
                <div className="p-3 bg-slate-50 border border-surface-border rounded-sm">
                  <span className="text-[11px] font-semibold text-text-secondary uppercase">Extracted Skills</span>
                  <p className="text-xl font-bold text-text-primary mt-1">{resume.extractedSkillsCount} Skills</p>
                </div>
                <div className="p-3 bg-slate-50 border border-surface-border rounded-sm col-span-2 sm:col-span-1">
                  <span className="text-[11px] font-semibold text-text-secondary uppercase">Format</span>
                  <p className="text-sm font-bold text-text-primary mt-1">PDF Document</p>
                </div>
              </div>

              <div className="p-4 bg-brand-50/50 border border-brand-100 rounded-sm flex items-start space-x-3 text-xs text-brand-700">
                <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">NLP Extraction Summary</p>
                  <p className="mt-0.5">
                    Successfully extracted <span className="font-bold">9 technical competencies</span> (React, TypeScript, ASP.NET Core, C#, PostgreSQL, Tailwind CSS, REST APIs, Git).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right 40%: Embedded PDF Viewer Mockup */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="h-full flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4 text-brand-600" />
                <CardTitle className="text-sm">Embedded PDF Preview</CardTitle>
              </div>
              <Badge variant="neutral" size="sm">Page 1 of 1</Badge>
            </CardHeader>
            <CardContent className="flex-1 min-h-[420px] bg-slate-100 border border-surface-border rounded-sm p-4 overflow-y-auto font-sans text-xs space-y-4 text-slate-800 shadow-inner">
              {/* Document Mockup View */}
              <div className="bg-white p-6 rounded-xs shadow-card space-y-4 border border-slate-200">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-base font-bold text-slate-900">Ali Khan</h2>
                  <p className="text-[11px] text-slate-600">ali.khan@comsats.edu.pk • Islamabad, Pakistan • +92 300 1234567</p>
                </div>

                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-brand-600 mb-1">Education</h4>
                  <p className="font-semibold">COMSATS University Islamabad</p>
                  <p className="text-[11px] text-slate-600">BS Computer Science (2023 - 2027) • CGPA: 3.75</p>
                </div>

                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-brand-600 mb-1">Technical Skills</h4>
                  <p className="text-[11px] text-slate-700">
                    <span className="font-semibold">Languages:</span> JavaScript, TypeScript, C#, Python, SQL<br />
                    <span className="font-semibold">Frameworks:</span> React, ASP.NET Core, Tailwind CSS, Node.js<br />
                    <span className="font-semibold">Databases & Tools:</span> PostgreSQL, Git, GitHub, REST APIs
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-brand-600 mb-1">Experience</h4>
                  <p className="font-semibold">Frontend Developer Intern — DevStudio Tech</p>
                  <p className="text-[11px] text-slate-600">Jun 2025 - Aug 2025 • Islamabad</p>
                  <ul className="list-disc pl-4 text-[11px] space-y-0.5 text-slate-700">
                    <li>Developed responsive SaaS dashboard components with React & TypeScript.</li>
                    <li>Integrated REST APIs with backend services.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
