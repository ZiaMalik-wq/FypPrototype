import {
  User,
  StudentProfile,
  Skill,
  Resume,
  SkillGapResult,
  LearningRecommendation,
  MarketTrend,
  ReportItem,
  JobSource,
  SystemServiceHealth,
  AuditLog,
  AdminAnalytics,
  NotificationItem
} from '@/types';

export const mockStudentUser: StudentProfile = {
  id: 'USR-1001',
  fullName: 'Ali Khan',
  email: 'ali.khan@comsats.edu.pk',
  role: 'Student',
  university: 'COMSATS University Islamabad',
  degree: 'BS Computer Science',
  graduationYear: 2027,
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  phone: '+92 300 1234567',
  location: 'Islamabad, Pakistan',
  bio: 'Final year Computer Science student passionate about full-stack web engineering, cloud-native architectures, and AI decision systems.',
  cgpa: 3.75,
  major: 'Software Engineering',
  education: [
    {
      id: 'EDU-1',
      institution: 'COMSATS University Islamabad',
      degree: 'Bachelor of Science',
      fieldOfStudy: 'Computer Science',
      startDate: '2023-09-01',
      endDate: '2027-06-30',
      isCurrent: true
    }
  ],
  experience: [
    {
      id: 'EXP-1',
      company: 'DevStudio Tech',
      title: 'Frontend Developer Intern',
      location: 'Islamabad',
      startDate: '2025-06-01',
      endDate: '2025-08-31',
      isCurrent: false,
      description: 'Built interactive dashboard components using React, TypeScript, and Tailwind CSS. Integrated REST APIs.'
    }
  ],
  certifications: [
    {
      id: 'CERT-1',
      name: 'Meta Front-End Developer Professional Certificate',
      issuingOrganization: 'Coursera / Meta',
      issueDate: '2025-03-15',
      credentialId: 'META-FE-99823'
    }
  ],
  socialLinks: {
    linkedin: 'https://linkedin.com/in/alikhan-cs',
    github: 'https://github.com/alikhan-dev',
    portfolio: 'https://alikhan.dev'
  },
  completionPercentage: 88
};

export const mockAdminUser: User = {
  id: 'ADM-9001',
  fullName: 'Dr. Tariq Mahmood',
  email: 'tariq.admin@skillgap.ai',
  role: 'SystemAdmin',
  university: 'NUST / Industry Board',
  degree: 'Ph.D. Computer Science',
  graduationYear: 2012,
  avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  createdAt: '2024-01-10'
};

export const mockSkills: Skill[] = [
  { id: 'SK-1', name: 'React', category: 'Frameworks', proficiency: 'Advanced', yearsOfExperience: 2, lastUpdated: '2026-07-10', isExtractedFromResume: true },
  { id: 'SK-2', name: 'TypeScript', category: 'Programming Languages', proficiency: 'Advanced', yearsOfExperience: 2, lastUpdated: '2026-07-10', isExtractedFromResume: true },
  { id: 'SK-3', name: 'ASP.NET Core', category: 'Frameworks', proficiency: 'Intermediate', yearsOfExperience: 1, lastUpdated: '2026-07-01', isExtractedFromResume: true },
  { id: 'SK-4', name: 'C#', category: 'Programming Languages', proficiency: 'Intermediate', yearsOfExperience: 2, lastUpdated: '2026-07-01', isExtractedFromResume: true },
  { id: 'SK-5', name: 'JavaScript (ES6+)', category: 'Programming Languages', proficiency: 'Expert', yearsOfExperience: 3, lastUpdated: '2026-07-15', isExtractedFromResume: true },
  { id: 'SK-6', name: 'Tailwind CSS', category: 'Tools & DevOps', proficiency: 'Expert', yearsOfExperience: 2, lastUpdated: '2026-07-15', isExtractedFromResume: true },
  { id: 'SK-7', name: 'PostgreSQL', category: 'Databases', proficiency: 'Intermediate', yearsOfExperience: 1, lastUpdated: '2026-06-20', isExtractedFromResume: true },
  { id: 'SK-8', name: 'Git & GitHub', category: 'Tools & DevOps', proficiency: 'Advanced', yearsOfExperience: 3, lastUpdated: '2026-07-18', isExtractedFromResume: true },
  { id: 'SK-9', name: 'RESTful API Architecture', category: 'Frameworks', proficiency: 'Advanced', yearsOfExperience: 2, lastUpdated: '2026-07-05', isExtractedFromResume: true },
  { id: 'SK-10', name: 'Agile Teamwork', category: 'Soft Skills', proficiency: 'Advanced', yearsOfExperience: 2, lastUpdated: '2026-05-12', isExtractedFromResume: false }
];

export const mockResume: Resume = {
  id: 'RES-8821',
  fileName: 'Ali_Khan_Software_Engineer_CV.pdf',
  fileSize: 1024 * 1024 * 1.8, // 1.8 MB
  uploadedAt: '2026-07-18T14:32:00Z',
  status: 'Parsed',
  resumeScore: 84,
  extractedSkillsCount: 9,
  downloadUrl: '#'
};

export const mockSkillGapResult: SkillGapResult = {
  id: 'GAP-7710',
  generatedAt: '2026-07-19T10:15:00Z',
  skillMatchScore: 82,
  resumeScore: 84,
  totalSkillsIdentified: 9,
  missingSkillsCount: 4,
  highPriorityCount: 2,
  confidenceScore: 94,
  existingSkills: mockSkills,
  missingSkills: [
    {
      name: 'Docker & Containerization',
      category: 'Tools & DevOps',
      marketDemandScore: 92,
      userProficiency: 'Missing',
      priorityLevel: 'High',
      gapDescription: 'Required in 74% of entry-level to mid backend & full-stack job listings in Q3 2026.'
    },
    {
      name: 'Microservices Architecture',
      category: 'Frameworks',
      marketDemandScore: 88,
      userProficiency: 'Missing',
      priorityLevel: 'High',
      gapDescription: 'Demanded by 68% of enterprise backend roles using ASP.NET Core.'
    },
    {
      name: 'Redis In-Memory Caching',
      category: 'Databases',
      marketDemandScore: 78,
      userProficiency: 'Missing',
      priorityLevel: 'Medium',
      gapDescription: 'Commonly paired with ASP.NET Core for API performance optimization.'
    },
    {
      name: 'Kubernetes Orchestration',
      category: 'Cloud Platforms',
      marketDemandScore: 65,
      userProficiency: 'Missing',
      priorityLevel: 'Low',
      gapDescription: 'Growing demand in cloud-native deployment pipelines.'
    }
  ],
  strengths: [
    'Strong React & TypeScript foundation matching modern enterprise frontend standards.',
    'Solid grasp of REST API integration and clean C# fundamentals.',
    'Excellent modern styling capabilities with Tailwind CSS.'
  ],
  aiReasoningSummary: 'Your profile demonstrates strong client-side development competencies. To reach a 95%+ Market Readiness index for Full-Stack Developer roles, prioritize Docker containerization and Microservices patterns with ASP.NET Core.'
};

export const mockRecommendations: LearningRecommendation[] = [
  {
    id: 'REC-101',
    skillName: 'Docker & Containerization',
    category: 'Tools & DevOps',
    priority: 'High',
    estimatedWeeks: 2,
    reasoning: 'Present in 74% of target job postings. Essential for devops-aligned modern software teams.',
    roadmapPhase: 'Weeks 1-2',
    isSaved: true,
    isCompleted: false,
    courses: [
      {
        id: 'CRS-1',
        title: 'Docker Mastery: with Kubernetes +Swarm from a Docker Captain',
        provider: 'Udemy',
        url: 'https://coursera.org',
        duration: '12 hours',
        difficulty: 'Intermediate',
        rating: 4.8
      },
      {
        id: 'CRS-2',
        title: 'Containerizing ASP.NET Core Applications with Docker',
        provider: 'Pluralsight',
        url: 'https://pluralsight.com',
        duration: '4 hours',
        difficulty: 'Intermediate',
        rating: 4.9
      }
    ]
  },
  {
    id: 'REC-102',
    skillName: 'Microservices Architecture with .NET',
    category: 'Frameworks',
    priority: 'High',
    estimatedWeeks: 3,
    reasoning: 'Critical architectural pattern required by enterprise software houses and fintechs.',
    roadmapPhase: 'Weeks 3-4',
    isSaved: true,
    isCompleted: false,
    courses: [
      {
        id: 'CRS-3',
        title: 'Building Microservices with ASP.NET Core and Docker',
        provider: 'Coursera / Microsoft',
        url: 'https://coursera.org',
        duration: '18 hours',
        difficulty: 'Advanced',
        rating: 4.7
      }
    ]
  },
  {
    id: 'REC-103',
    skillName: 'Redis Caching & Performance Optimization',
    category: 'Databases',
    priority: 'Medium',
    estimatedWeeks: 2,
    reasoning: 'Improves response times and database load handling in high-throughput APIs.',
    roadmapPhase: 'Month 2',
    isSaved: false,
    isCompleted: false,
    courses: [
      {
        id: 'CRS-4',
        title: 'Redis University: Redis Data Structures for .NET',
        provider: 'Redis University',
        url: 'https://university.redis.com',
        duration: '8 hours',
        difficulty: 'Intermediate',
        rating: 4.9
      }
    ]
  }
];

export const mockMarketTrend: MarketTrend = {
  totalJobsAnalyzed: 14250,
  activeTechnologiesCount: 520,
  fastestGrowingSkill: 'Docker & Kubernetes',
  averageSalaryTrend: '$45,000 - $75,000 / yr',
  weeklyGrowthPercentage: 4.2,
  topSkills: [
    { name: 'React / Next.js', category: 'Frontend', jobCount: 4850, percentageOfJobs: 34 },
    { name: 'ASP.NET Core / C#', category: 'Backend', jobCount: 4120, percentageOfJobs: 29 },
    { name: 'TypeScript', category: 'Languages', jobCount: 3900, percentageOfJobs: 27 },
    { name: 'Docker & Containers', category: 'DevOps', jobCount: 3550, percentageOfJobs: 25 },
    { name: 'PostgreSQL / SQL', category: 'Databases', jobCount: 3410, percentageOfJobs: 24 },
    { name: 'Python & AI NLP', category: 'AI/ML', jobCount: 2980, percentageOfJobs: 21 },
    { name: 'AWS Cloud', category: 'Cloud', jobCount: 2750, percentageOfJobs: 19 }
  ],
  growthTrends: [
    {
      technology: 'Docker',
      currentDemand: 92,
      growthRate: 18.5,
      quarterlyTrend: [
        { period: 'Q3 2025', count: 2100 },
        { period: 'Q4 2025', count: 2550 },
        { period: 'Q1 2026', count: 3100 },
        { period: 'Q2 2026', count: 3550 }
      ]
    },
    {
      technology: 'ASP.NET Core',
      currentDemand: 88,
      growthRate: 12.3,
      quarterlyTrend: [
        { period: 'Q3 2025', count: 3200 },
        { period: 'Q4 2025', count: 3500 },
        { period: 'Q1 2026', count: 3800 },
        { period: 'Q2 2026', count: 4120 }
      ]
    },
    {
      technology: 'React',
      currentDemand: 95,
      growthRate: 14.1,
      quarterlyTrend: [
        { period: 'Q3 2025', count: 3900 },
        { period: 'Q4 2025', count: 4200 },
        { period: 'Q1 2026', count: 4500 },
        { period: 'Q2 2026', count: 4850 }
      ]
    }
  ],
  industryDistribution: [
    { name: 'Fintech & Banking', percentage: 32 },
    { name: 'Software Product Houses', percentage: 28 },
    { name: 'HealthTech & AI', percentage: 18 },
    { name: 'E-Commerce & Retail', percentage: 14 },
    { name: 'EdTech & Government', percentage: 8 }
  ],
  regionalDemand: [
    { region: 'Islamabad / Rawalpindi', demandLevel: 95, topSkill: 'ASP.NET Core & React' },
    { region: 'Lahore Tech Zone', demandLevel: 90, topSkill: 'React & Mobile' },
    { region: 'Karachi Financial Hub', demandLevel: 88, topSkill: 'Fintech & Cloud' }
  ]
};

export const mockReports: ReportItem[] = [
  {
    id: 'RPT-1001',
    title: 'Full Stack Developer Skill Gap Report',
    type: 'Skill Gap Report',
    createdDate: '2026-07-19',
    fileSize: '2.4 MB',
    matchScore: 82,
    status: 'Ready'
  },
  {
    id: 'RPT-1002',
    title: 'Q3 2026 Personal Learning Roadmap',
    type: 'Learning Roadmap',
    createdDate: '2026-07-15',
    fileSize: '1.1 MB',
    matchScore: 82,
    status: 'Ready'
  },
  {
    id: 'RPT-1003',
    title: 'Regional Labor Market Analysis - .NET Ecosystem',
    type: 'Market Trend Summary',
    createdDate: '2026-07-01',
    fileSize: '3.8 MB',
    matchScore: 78,
    status: 'Ready'
  }
];

export const mockJobSources: JobSource[] = [
  { id: 'SRC-1', name: 'LinkedIn Jobs Portal', url: 'https://linkedin.com/jobs', status: 'Healthy', lastSync: '12 mins ago', recordsImported: 6420, successRate: 98.4, isAutoScrapeEnabled: true },
  { id: 'SRC-2', name: 'Rozee.pk Career Gateway', url: 'https://rozee.pk', status: 'Healthy', lastSync: '35 mins ago', recordsImported: 4120, successRate: 97.1, isAutoScrapeEnabled: true },
  { id: 'SRC-3', name: 'Mustakbil Tech Jobs', url: 'https://mustakbil.com', status: 'Healthy', lastSync: '1 hour ago', recordsImported: 2150, successRate: 96.5, isAutoScrapeEnabled: true },
  { id: 'SRC-4', name: 'Company Direct Career Crawlers', url: 'https://careers.techhouses.com', status: 'Warning', lastSync: '3 hours ago', recordsImported: 1560, successRate: 88.2, isAutoScrapeEnabled: true },
  { id: 'SRC-5', name: 'Indeed Regional RSS', url: 'https://indeed.com', status: 'Offline', lastSync: '1 day ago', recordsImported: 0, successRate: 0, isAutoScrapeEnabled: false }
];

export const mockSystemHealth: SystemServiceHealth[] = [
  { id: 'SYS-1', serviceName: 'API Gateway (ASP.NET Core 9)', status: 'Healthy', latencyMs: 24, uptimePercentage: 99.98, lastChecked: 'Just now' },
  { id: 'SYS-2', serviceName: 'Authentication Service (JWT Provider)', status: 'Healthy', latencyMs: 18, uptimePercentage: 100.0, lastChecked: 'Just now' },
  { id: 'SYS-3', serviceName: 'AI Skill Extraction NLP Engine (Python/FastAPI)', status: 'Healthy', latencyMs: 140, uptimePercentage: 99.85, lastChecked: '1 min ago' },
  { id: 'SYS-4', serviceName: 'PostgreSQL Domain Database', status: 'Healthy', latencyMs: 12, uptimePercentage: 99.99, lastChecked: 'Just now' },
  { id: 'SYS-5', serviceName: 'MongoDB Unstructured Job Posting Store', status: 'Healthy', latencyMs: 28, uptimePercentage: 99.92, lastChecked: 'Just now' },
  { id: 'SYS-6', serviceName: 'RabbitMQ Background Queue Worker', status: 'Degraded', latencyMs: 210, uptimePercentage: 98.40, lastChecked: '2 mins ago' }
];

export const mockAuditLogs: AuditLog[] = [
  { id: 'LOG-501', timestamp: '2026-07-20 22:45:12', userName: 'Ali Khan', userEmail: 'ali.khan@comsats.edu.pk', action: 'EXECUTED_ANALYSIS', module: 'AI Engine', severity: 'Info', ipAddress: '192.168.1.45' },
  { id: 'LOG-502', timestamp: '2026-07-20 21:10:05', userName: 'Ali Khan', userEmail: 'ali.khan@comsats.edu.pk', action: 'UPLOADED_RESUME', module: 'Resume Service', severity: 'Info', ipAddress: '192.168.1.45' },
  { id: 'LOG-503', timestamp: '2026-07-20 18:30:40', userName: 'Dr. Tariq Mahmood', userEmail: 'tariq.admin@skillgap.ai', action: 'MANUAL_JOB_SCRAPE_TRIGGER', module: 'Job Source', severity: 'Warning', ipAddress: '10.0.0.12' },
  { id: 'LOG-504', timestamp: '2026-07-20 15:12:00', userName: 'System Worker', userEmail: 'system@internal.job', action: 'SCRAPE_SOURCE_TIMEOUT', module: 'Indeed Crawler', severity: 'Error', ipAddress: '127.0.0.1' }
];

export const mockAdminAnalytics: AdminAnalytics = {
  totalUsers: 1480,
  active24h: 342,
  dailyAnalyses: 128,
  jobsCollectedTotal: 14250,
  nlpQueueSize: 14,
  systemHealthScore: 98,
  userGrowth: [
    { date: 'Mon', total: 1320, active: 280 },
    { date: 'Tue', total: 1360, active: 310 },
    { date: 'Wed', total: 1400, active: 295 },
    { date: 'Thu', total: 1430, active: 330 },
    { date: 'Fri', total: 1455, active: 350 },
    { date: 'Sat', total: 1470, active: 310 },
    { date: 'Sun', total: 1480, active: 342 }
  ],
  analysisVolume: [
    { date: '07/14', count: 85 },
    { date: '07/15', count: 110 },
    { date: '07/16', count: 98 },
    { date: '07/17', count: 142 },
    { date: '07/18', count: 135 },
    { date: '07/19', count: 160 },
    { date: '07/20', count: 128 }
  ]
};

export const mockNotifications: NotificationItem[] = [
  {
    id: 'NOTIF-1',
    title: 'Skill Gap Analysis Ready',
    message: 'Your latest resume analysis was completed with an 82% Skill Match score.',
    timestamp: '10 minutes ago',
    type: 'success',
    isRead: false,
    link: '/analysis'
  },
  {
    id: 'NOTIF-2',
    title: 'New High Demand Skill Identified',
    message: 'Docker demand in Islamabad region increased by +18% this quarter.',
    timestamp: '2 hours ago',
    type: 'info',
    isRead: false,
    link: '/market-trends'
  },
  {
    id: 'NOTIF-3',
    title: 'Profile Completion Reminder',
    message: 'Complete your GitHub link to boost your resume score by +5 points.',
    timestamp: '1 day ago',
    type: 'warning',
    isRead: true,
    link: '/profile'
  }
];
