# AI-Based Skill Gap Analyzer

# Product Requirements Document (PRD)

## Part 4.4 -- Admin Portal Specification

**Version:** 1.0

------------------------------------------------------------------------

# Table of Contents

1.  Admin Dashboard
2.  User Management
3.  Job Source Management
4.  Analytics
5.  System Monitoring
6.  Logs & Audit Trail
7.  Settings & RBAC
8.  Shared Administration Standards

------------------------------------------------------------------------

# 1. Admin Dashboard

## Purpose

Provide administrators with a centralized operational overview of
platform health, user activity, AI processing, and data collection.

## Target Users

-   System Administrators
-   Platform Operators
-   Project Supervisors

## KPI Cards

-   Total Registered Users
-   Active Users (24h)
-   Daily Analyses
-   Job Posts Collected
-   NLP Queue Size
-   System Health Score
-   API Availability
-   Processing Success Rate

## Layout

### Header

-   Page title
-   Current system status
-   Last synchronization
-   Refresh button

### Main Grid

#### Left

-   User Growth (Line Chart)
-   Daily Analysis Volume (Area Chart)
-   Job Collection Trend (Bar Chart)

#### Right

-   Queue Status
-   Service Health
-   Recent Alerts
-   Quick Actions

## Quick Actions

-   Refresh Data
-   Re-run Scraping
-   Restart Processing Queue
-   View Logs

## Acceptance Criteria

Critical alerts must always appear above the fold.

------------------------------------------------------------------------

# 2. User Management

## Purpose

Manage platform users and roles.

## Features

-   Search
-   Filter
-   Sort
-   Pagination
-   Bulk Actions

## User Table Columns

-   Name
-   Email
-   Role
-   Status
-   Registration Date
-   Last Login
-   Resume Uploaded
-   Actions

## Actions

-   View Profile
-   Edit User
-   Change Role
-   Suspend Account
-   Activate Account
-   Reset Password
-   Delete (Soft Delete)

## Validation

Administrative actions require confirmation dialogs.

------------------------------------------------------------------------

# 3. Job Source Management

## Purpose

Manage job portals and ingestion sources.

## Supported Sources

-   LinkedIn (placeholder)
-   Indeed (placeholder)
-   Rozee.pk
-   Mustakbil
-   Company Career Pages

## Components

-   Source Cards
-   Status Badge
-   Last Sync
-   Records Imported
-   Success Rate

## Actions

-   Enable
-   Disable
-   Test Connection
-   Run Collection
-   View History

## States

Healthy Warning Offline

------------------------------------------------------------------------

# 4. Analytics

## Purpose

Provide operational and business intelligence.

## KPI Metrics

-   Monthly Active Users
-   Resume Uploads
-   Average Match Score
-   Most Requested Skills
-   Fastest Growing Skills
-   Most Popular Recommendations

## Charts

-   User Growth
-   Skill Demand
-   Usage Heatmap
-   Feature Adoption
-   Device Distribution
-   Geographic Distribution

## Filters

-   Date Range
-   Region
-   University
-   User Role

------------------------------------------------------------------------

# 5. System Monitoring

## Purpose

Monitor the health of backend services.

## Service Cards

-   API Gateway
-   Authentication Service
-   User Service
-   AI Analysis Service
-   Recommendation Service
-   PostgreSQL
-   MongoDB
-   Redis (Future)
-   Background Jobs

## Health Status

-   Healthy
-   Degraded
-   Offline

## Queue Monitoring

Display: - Pending Jobs - Running Jobs - Failed Jobs - Completed Jobs

## Resource Monitoring

-   CPU
-   Memory
-   Storage
-   Response Time

## Alerts

Critical issues should trigger persistent notifications.

------------------------------------------------------------------------

# 6. Logs & Audit Trail

## Purpose

Provide traceability for administrative activities.

## Log Types

-   Authentication
-   User Actions
-   System Events
-   AI Processing
-   Errors

## Log Table

-   Timestamp
-   User
-   Action
-   Module
-   Severity
-   Status

## Severity

-   Info
-   Warning
-   Error
-   Critical

## Actions

-   Search
-   Filter
-   Export
-   View Details

------------------------------------------------------------------------

# 7. Settings & Role-Based Access Control

## System Settings

-   General
-   Email
-   Appearance
-   Notifications
-   AI Configuration
-   Data Retention

## Roles

### Student

Read/Write own profile.

### Career Counselor

View reports.

### University Admin

Institution analytics.

### System Admin

Full access.

## Security

-   Session timeout
-   Password policy
-   MFA (Future)
-   Audit logging

------------------------------------------------------------------------

# 8. Shared Administration Standards

## Navigation

Sidebar: - Dashboard - Users - Job Sources - Analytics - Monitoring -
Logs - Settings

## Common Components

-   Data Tables
-   KPI Cards
-   Status Badges
-   Charts
-   Confirmation Dialogs
-   Toast Notifications
-   Breadcrumbs

## Accessibility

-   WCAG AA
-   Keyboard navigation
-   Screen-reader labels
-   High contrast

## Responsive Behaviour

Desktop: Three-column dashboard.

Tablet: Two-column grid.

Mobile: Stacked cards with drawer navigation.

## Future Enhancements

-   Multi-tenant support
-   Scheduled reports
-   Webhook integrations
-   Predictive monitoring
-   Auto-recovery workflows
-   AI anomaly detection

------------------------------------------------------------------------

# Global Acceptance Criteria

-   Administrative actions require confirmation.
-   Critical alerts are always visible.
-   Dashboard refreshes without full-page reload.
-   Tables support search, sorting, filtering, and pagination.
-   Charts are responsive.
-   Role permissions are consistently enforced.

------------------------------------------------------------------------

# Conclusion

The Admin Portal enables administrators to operate, monitor, and
maintain the AI-Based Skill Gap Analyzer. It provides operational
visibility, governance, analytics, and role-based management while
adhering to the same enterprise UX standards used throughout the
platform.
