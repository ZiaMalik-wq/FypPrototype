export type UserRole = 'Student' | 'CareerCounselor' | 'UniversityAdmin' | 'SystemAdmin';

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  university?: string;
  degree?: string;
  graduationYear?: number;
  avatarUrl?: string;
  createdAt?: string;
  lastLoginAt?: string;
  isSuspended?: boolean;
}

export interface StudentProfile extends User {
  phone?: string;
  location?: string;
  bio?: string;
  cgpa?: number;
  major?: string;
  education: Education[];
  experience: Experience[];
  certifications: Certification[];
  socialLinks: {
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
  completionPercentage: number;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
}

export interface Experience {
  id: string;
  company: string;
  title: string;
  location?: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  issuingOrganization: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
}

export type SkillCategory = 'Programming Languages' | 'Frameworks' | 'Databases' | 'Cloud Platforms' | 'Tools & DevOps' | 'Soft Skills';
export type SkillProficiency = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: SkillProficiency;
  yearsOfExperience?: number;
  lastUpdated: string;
  isExtractedFromResume?: boolean;
}

export type ResumeStatus = 'Uploading' | 'Parsing' | 'Parsed' | 'Failed';

export interface Resume {
  id: string;
  fileName: string;
  fileSize: number;
  uploadedAt: string;
  status: ResumeStatus;
  resumeScore: number;
  extractedSkillsCount: number;
  downloadUrl?: string;
}

export interface PrioritySkill {
  name: string;
  category: SkillCategory;
  marketDemandScore: number; // 0 - 100
  userProficiency: SkillProficiency | 'Missing';
  priorityLevel: 'High' | 'Medium' | 'Low';
  gapDescription: string;
}

export interface SkillGapResult {
  id: string;
  generatedAt: string;
  skillMatchScore: number; // 0 - 100%
  resumeScore: number;
  totalSkillsIdentified: number;
  missingSkillsCount: number;
  highPriorityCount: number;
  confidenceScore: number; // 0 - 100%
  existingSkills: Skill[];
  missingSkills: PrioritySkill[];
  strengths: string[];
  aiReasoningSummary: string;
}

export type RecommendationPriority = 'High' | 'Medium' | 'Low';

export interface LearningCourse {
  id: string;
  title: string;
  provider: string;
  url: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
}

export interface LearningRecommendation {
  id: string;
  skillName: string;
  category: SkillCategory;
  priority: RecommendationPriority;
  estimatedWeeks: number;
  reasoning: string;
  courses: LearningCourse[];
  roadmapPhase: 'Weeks 1-2' | 'Weeks 3-4' | 'Month 2' | 'Month 3';
  isSaved?: boolean;
  isCompleted?: boolean;
}

export interface TechGrowthItem {
  technology: string;
  currentDemand: number;
  growthRate: number; // percentage
  quarterlyTrend: { period: string; count: number }[];
}

export interface TopSkillDemand {
  name: string;
  category: string;
  jobCount: number;
  percentageOfJobs: number;
}

export interface MarketTrend {
  totalJobsAnalyzed: number;
  activeTechnologiesCount: number;
  fastestGrowingSkill: string;
  averageSalaryTrend: string;
  weeklyGrowthPercentage: number;
  topSkills: TopSkillDemand[];
  growthTrends: TechGrowthItem[];
  industryDistribution: { name: string; percentage: number }[];
  regionalDemand: { region: string; demandLevel: number; topSkill: string }[];
}

export type ReportType = 'Skill Gap Report' | 'Learning Roadmap' | 'Progress Report' | 'Market Trend Summary';

export interface ReportItem {
  id: string;
  title: string;
  type: ReportType;
  createdDate: string;
  fileSize: string;
  matchScore: number;
  status: 'Ready' | 'Generating';
}

export interface JobSource {
  id: string;
  name: string;
  url: string;
  status: 'Healthy' | 'Warning' | 'Offline';
  lastSync: string;
  recordsImported: number;
  successRate: number;
  isAutoScrapeEnabled: boolean;
}

export interface SystemServiceHealth {
  id: string;
  serviceName: string;
  status: 'Healthy' | 'Degraded' | 'Offline';
  latencyMs: number;
  uptimePercentage: number;
  lastChecked: string;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  userName: string;
  userEmail: string;
  action: string;
  module: string;
  severity: 'Info' | 'Warning' | 'Error' | 'Critical';
  ipAddress: string;
}

export interface AdminAnalytics {
  totalUsers: number;
  active24h: number;
  dailyAnalyses: number;
  jobsCollectedTotal: number;
  nlpQueueSize: number;
  systemHealthScore: number;
  userGrowth: { date: string; total: number; active: number }[];
  analysisVolume: { date: string; count: number }[];
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'info' | 'success' | 'warning' | 'error';
  isRead: boolean;
  link?: string;
}
