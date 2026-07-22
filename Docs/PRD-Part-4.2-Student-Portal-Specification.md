# AI-Based Skill Gap Analyzer

# Product Requirements Document (PRD)

## Part 4.2 -- Student Portal Specification

**Version:** 1.0

------------------------------------------------------------------------

# Table of Contents

1.  Student Dashboard
2.  Profile Management
3.  Resume Management
4.  Skills Management
5.  Shared Student Portal UX Standards

------------------------------------------------------------------------

# 1. Student Dashboard

## Purpose

The dashboard is the student's home screen after authentication. It
summarizes career readiness, AI analysis, market insights, and pending
actions.

## Target Users

-   University Students
-   Fresh Graduates
-   Job Seekers

## Success Criteria

-   Display the most important information within the first viewport.
-   Enable access to all primary features within three clicks.
-   Surface actionable recommendations rather than raw data.

## Page Layout

### Header

-   Breadcrumb
-   Page title
-   Last analysis timestamp
-   Run Analysis button

### KPI Row

-   Skill Match Score
-   Total Skills
-   Missing Skills
-   Resume Score
-   Trending Technologies

### Main Content

#### Left (70%)

-   Career Readiness Gauge
-   Market Demand Trends
-   Skill Gap Summary
-   AI Recommendations Preview

#### Right (30%)

-   Profile Completion
-   Upcoming Learning Goals
-   Notifications
-   Recent Activity

## Components

-   KPI cards
-   Gauge chart
-   Line chart
-   Recommendation cards
-   Progress widgets
-   Activity timeline

## Empty State

Prompt the user to upload a resume and complete their profile.

## Loading State

Display skeleton placeholders for all widgets.

## Error State

Display retry option with friendly messaging.

## Acceptance Criteria

-   Dashboard loads in under 3 seconds using mock data.
-   Charts remain readable on tablet devices.

------------------------------------------------------------------------

# 2. Profile Management

## Purpose

Allow users to manage personal, educational, and professional
information.

## Sections

### Personal Information

-   Full Name
-   Email
-   Phone
-   Location
-   Profile Photo

### Education

-   University
-   Degree
-   Major
-   CGPA
-   Graduation Year

### Experience

-   Internships
-   Projects
-   Employment History

### Certifications

### Social Links

-   LinkedIn
-   GitHub
-   Portfolio

## Components

-   Editable cards
-   Avatar upload
-   Save button
-   Cancel button
-   Profile completion indicator

## Validation

-   Required fields
-   Email format
-   URL validation
-   Phone number validation

## Empty State

Encourage users to complete missing sections.

## Acceptance Criteria

Profile completion percentage updates automatically.

------------------------------------------------------------------------

# 3. Resume Management

## Purpose

Upload, preview, replace, and manage resumes.

## Layout

### Resume Card

-   Upload Area
-   Last Uploaded
-   File Size
-   File Type

### Resume Preview

Embedded PDF preview placeholder.

### Resume Actions

-   Upload
-   Replace
-   Delete
-   Download

## Validation

Accepted formats: - PDF

Maximum Size: 20 MB

## Upload Flow

Upload ↓ Validation ↓ Processing ↓ Preview ↓ Success

## Error States

-   Unsupported format
-   File too large
-   Upload failed

## Acceptance Criteria

Resume upload progress must be visible.

------------------------------------------------------------------------

# 4. Skills Management

## Purpose

Provide a central location for users to manage their skills.

## Categories

-   Programming Languages
-   Frameworks
-   Databases
-   Cloud Platforms
-   Tools
-   Soft Skills

## Layout

Top Toolbar - Search - Category Filter - Add Skill

Content Grouped skill cards by category.

## Skill Card

Contains - Skill Name - Category - Proficiency Level - Last Updated -
Edit - Delete

## Skill Levels

-   Beginner
-   Intermediate
-   Advanced
-   Expert

## Primary Actions

-   Add Skill
-   Edit Skill
-   Delete Skill
-   Update Proficiency

## Validation

Prevent duplicate skills.

## Empty State

"No skills added yet."

Provide CTA: "Add Your First Skill"

## Loading State

Skeleton cards.

## Accessibility

Keyboard navigation for chips and dropdowns.

## Acceptance Criteria

Changes should update immediately in the UI.

------------------------------------------------------------------------

# 5. Shared Student Portal UX Standards

## Navigation

Persistent sidebar: - Dashboard - Profile - Resume - Skills - Skill Gap
Analysis - Recommendations - Market Trends - Reports - Settings

## Breadcrumbs

Display on all secondary pages.

## Notifications

Accessible from every page.

## Search

Global search available in the top navigation.

## Common Components

-   Metric Cards
-   Charts
-   Data Tables
-   Timeline
-   Upload Zone
-   Progress Bar
-   Badges
-   Toast Notifications
-   Confirmation Dialogs

## Design Guidelines

-   White background
-   Enterprise appearance
-   Minimal shadows
-   8-point spacing
-   Consistent typography
-   Fluent-inspired components

## Accessibility

-   WCAG AA compliant
-   Keyboard navigation
-   Screen reader labels
-   Focus indicators
-   High color contrast

## Responsive Behaviour

Desktop - Sidebar expanded - Two-column layouts

Tablet - Collapsible sidebar - Responsive charts

Mobile - Drawer navigation - Stacked cards - Full-width forms

## Future Enhancements

-   Multiple resumes
-   Resume version comparison
-   Skill endorsements
-   Portfolio integration
-   GitHub repository synchronization
-   AI profile optimization assistant

------------------------------------------------------------------------

# Conclusion

The Student Portal forms the core user experience of the AI-Based Skill
Gap Analyzer. These specifications define the expected layouts, reusable
components, validation rules, and interaction patterns needed to build a
consistent, enterprise-grade interface focused on helping students
understand and improve their employability.
