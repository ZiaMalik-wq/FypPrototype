import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

// Layouts
import { PublicLayout } from '@/layouts/PublicLayout';
import { AuthLayout } from '@/layouts/AuthLayout';
import { AppLayout } from '@/layouts/AppLayout';
import { ProtectedRoute, AdminRoute } from '@/routes/ProtectedRoute';

// Public & Auth Pages
import { LandingPage } from '@/features/public/LandingPage';
import { LoginPage } from '@/features/auth/LoginPage';
import { RegisterPage } from '@/features/auth/RegisterPage';
import { ForgotPasswordPage } from '@/features/auth/ForgotPasswordPage';
import { VerifyEmailPage } from '@/features/auth/VerifyEmailPage';

// Student Portal Pages
import { StudentDashboard } from '@/features/dashboard/StudentDashboard';
import { ProfilePage } from '@/features/profile/ProfilePage';
import { ResumePage } from '@/features/resume/ResumePage';
import { SkillsPage } from '@/features/skills/SkillsPage';

// AI & Market Features
import { SkillGapAnalysisPage } from '@/features/analysis/SkillGapAnalysisPage';
import { RecommendationsPage } from '@/features/recommendations/RecommendationsPage';
import { MarketTrendsPage } from '@/features/market/MarketTrendsPage';
import { ReportsPage } from '@/features/reports/ReportsPage';
import { SettingsPage } from '@/features/settings/SettingsPage';
import { NotificationsPage } from '@/features/notifications/NotificationsPage';

// Admin Portal Pages
import { AdminDashboard } from '@/features/admin/AdminDashboard';
import { UserManagement } from '@/features/admin/UserManagement';
import { JobSourceManagement } from '@/features/admin/JobSourceManagement';
import { AdminAnalytics } from '@/features/admin/AdminAnalytics';
import { SystemMonitoring } from '@/features/admin/SystemMonitoring';
import { AdminLogs } from '@/features/admin/AdminLogs';

export const router = createBrowserRouter([
  // Public Landing Routes
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <LandingPage /> }
    ]
  },

  // Auth Routes
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/forgot-password', element: <ForgotPasswordPage /> },
      { path: '/verify-email', element: <VerifyEmailPage /> }
    ]
  },

  // Protected Student & App Routes
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { path: '/dashboard', element: <StudentDashboard /> },
          { path: '/profile', element: <ProfilePage /> },
          { path: '/resume', element: <ResumePage /> },
          { path: '/skills', element: <SkillsPage /> },
          { path: '/analysis', element: <SkillGapAnalysisPage /> },
          { path: '/recommendations', element: <RecommendationsPage /> },
          { path: '/market-trends', element: <MarketTrendsPage /> },
          { path: '/reports', element: <ReportsPage /> },
          { path: '/settings', element: <SettingsPage /> },
          { path: '/notifications', element: <NotificationsPage /> },

          // Admin Routes nested inside AppLayout with Admin Guard
          {
            element: <AdminRoute />,
            children: [
              { path: '/admin', element: <AdminDashboard /> },
              { path: '/admin/users', element: <UserManagement /> },
              { path: '/admin/job-sources', element: <JobSourceManagement /> },
              { path: '/admin/analytics', element: <AdminAnalytics /> },
              { path: '/admin/system', element: <SystemMonitoring /> },
              { path: '/admin/logs', element: <AdminLogs /> }
            ]
          }
        ]
      }
    ]
  },

  // Fallback redirect
  { path: '*', element: <Navigate to="/" replace /> }
]);
