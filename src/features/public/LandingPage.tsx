import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import {
  Brain,
  FileText,
  TrendingUp,
  Sparkles,
  ChevronDown,
  ArrowRight,
  BarChart3,
  ShieldCheck,
  CheckCircle,
  GraduationCap
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const trustMetrics = [
    { label: 'Job Postings Analyzed', value: '14,250+' },
    { label: 'Technical Skills Tracked', value: '520+' },
    { label: 'NLP Skill Extraction Accuracy', value: '94.8%' },
    { label: 'Career Roadmap Match Index', value: '91.2%' }
  ];

  const features = [
    {
      icon: FileText,
      title: 'Automated Resume Parsing',
      description: 'Upload your CV in PDF format. AI extracts technical competencies, tools, and experience level automatically.'
    },
    {
      icon: Brain,
      title: 'Skill Gap Intelligence',
      description: 'Quantify your missing skills against real-time industry demands with radar visualizations and priority matrices.'
    },
    {
      icon: TrendingUp,
      title: 'Live Labor Market Analytics',
      description: 'Track emerging technologies, demand velocity, and regional hiring patterns across top tech employers.'
    },
    {
      icon: Sparkles,
      title: 'Actionable Learning Roadmaps',
      description: 'Receive quarter-by-quarter learning goals and curated course recommendations tailored to your targeted role.'
    },
    {
      icon: BarChart3,
      title: 'Curriculum & Academic Alignment',
      description: 'Provide academic counselors and departments with evidence-based data to align learning outcomes with market needs.'
    },
    {
      icon: ShieldCheck,
      title: 'Explainable AI Decision Support',
      description: 'Every recommendation provides clear market justification, confidence scoring, and industry evidence.'
    }
  ];

  const howItWorks = [
    { step: '01', title: 'Create Profile & Upload Resume', desc: 'Sign up with your university email and upload your latest CV.' },
    { step: '02', title: 'Automated NLP Skill Extraction', desc: 'Our engine extracts, normalizes, and categorizes your technical competencies.' },
    { step: '03', title: 'Real-Time Market Comparison', desc: 'Your skills are compared against thousands of active job market postings.' },
    { step: '04', title: 'Receive Gap Report & Roadmap', desc: 'Get a personalized score, prioritized skill deficiencies, and learning paths.' }
  ];

  const faqs = [
    {
      q: 'How does the AI extract skills from my resume?',
      a: 'The platform uses Natural Language Processing (NLP) and Named Entity Recognition (NER) models fine-tuned on technology domain vocabularies to extract programming languages, frameworks, databases, and soft skills from PDF resumes.'
    },
    {
      q: 'Is this system a recruitment or job application website?',
      a: 'No. The AI-Based Skill Gap Analyzer is a decision-support platform designed to help students, fresh graduates, and universities understand career readiness and missing skills.'
    },
    {
      q: 'Where does the labor market demand data come from?',
      a: 'Our automated web scrapers continuously ingest public job postings from tech career portals and company portals across major technology hubs.'
    },
    {
      q: 'Is my resume data kept private and secure?',
      a: 'Yes. All uploaded files are stored securely with role-based access control and processed solely for generating your personalized skill analysis.'
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="brand" className="py-1 px-3">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              AI Decision-Support System v1.0
            </Badge>

            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-tight">
              Discover Your Skill Gap. <br />
              <span className="text-brand-600">Build Your Future.</span>
            </h1>

            <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
              Align your technical skills with live labor market demand. Get AI-powered resume analysis, missing competency identification, and personalized learning roadmaps.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" onClick={() => navigate('/register')} rightIcon={<ArrowRight className="w-4 h-4" />}>
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/login')}>
                Sign In to Portal
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-xs text-text-muted pt-4">
              <span className="flex items-center"><CheckCircle className="w-4 h-4 text-semantic-success mr-1.5" /> Free for University Students</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 text-semantic-success mr-1.5" /> Instant PDF Processing</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card className="border-brand-600/20 shadow-card bg-surface-card p-6 relative">
              <div className="flex items-center justify-between pb-4 border-b border-surface-border mb-4">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-brand-600" />
                  <span className="font-semibold text-sm">Career Readiness Overview</span>
                </div>
                <Badge variant="success">82% Match</Badge>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-brand-50/60 rounded-sm border border-brand-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-700">Highest In-Demand Gap</span>
                  <span className="text-xs font-bold text-semantic-danger">Docker & Microservices</span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span>React & Frontend</span>
                    <span className="text-semantic-success">Expert (95%)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-semantic-success w-[95%]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span>ASP.NET Core & C#</span>
                    <span className="text-brand-600">Intermediate (75%)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-600 w-[75%]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span>DevOps & Containerization</span>
                    <span className="text-semantic-danger">Missing (30%)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-semantic-danger w-[30%]" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Statistics Section */}
      <section className="bg-slate-900 text-white py-12 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {trustMetrics.map((m, i) => (
            <div key={i} className="space-y-1">
              <p className="text-3xl font-extrabold text-brand-400">{m.value}</p>
              <p className="text-xs font-medium text-slate-300">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-6 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="brand">Comprehensive Capabilities</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary">
            Designed for Modern Technology Careers
          </h2>
          <p className="text-sm text-text-secondary">
            Everything you need to quantify your competencies, analyze hiring demand, and execute a structured learning plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Card key={i} hoverable className="space-y-3">
                <div className="w-10 h-10 rounded-sm bg-brand-50 text-brand-600 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-text-primary">{f.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{f.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-surface-card border-y border-surface-border py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <Badge variant="info">Simple Workflow</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">Four Steps to Job Readiness</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="p-5 bg-surface-bg border border-surface-border rounded-md space-y-2 relative">
                <span className="text-3xl font-extrabold text-brand-600/30">{step.step}</span>
                <h4 className="text-sm font-semibold text-text-primary">{step.title}</h4>
                <p className="text-xs text-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-3xl mx-auto px-6 space-y-8">
        <div className="text-center space-y-3">
          <Badge variant="neutral">Got Questions?</Badge>
          <h2 className="text-2xl font-bold text-text-primary">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-surface-border rounded-md bg-surface-card overflow-hidden">
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 text-left font-semibold text-sm text-text-primary hover:bg-slate-50 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-text-muted transition-transform ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaqIndex === idx && (
                <div className="p-4 pt-0 text-xs text-text-secondary leading-relaxed border-t border-slate-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
