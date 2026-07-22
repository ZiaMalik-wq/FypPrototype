# UI Design Brief – AI-Based Skill Gap Analyzer

## Project Overview

The AI-Based Skill Gap Analyzer is a web-based platform that helps university students identify the gap between their current skills and the latest job market requirements. The system continuously analyzes job postings, extracts in-demand skills using AI and NLP, compares them with a student's profile and resume, and provides personalized recommendations, learning roadmaps, and career insights.

The application is designed for three primary user roles:

* **Student**
* **Employer**
* **Administrator**

The platform should present complex AI insights in a simple, clean, and visually engaging way while maintaining a professional SaaS appearance.

---

# Design Goals

The interface should:

* Feel modern and premium
* Prioritize usability and accessibility
* Present analytics clearly
* Encourage users to improve their skills
* Be responsive on Desktop, Tablet, and Mobile
* Maintain consistency across all pages

The design language should resemble modern SaaS platforms such as Notion, Linear, Vercel, Stripe Dashboard, GitHub, and Microsoft products.

---

# Target Users

## Student

Primary user of the application.

Goals:

* Upload resume
* View skill gap analysis
* Track progress
* Receive AI recommendations
* Explore job market trends
* Build learning roadmap

---

## Employer

Uses the platform to:

* View candidate profiles
* Review skill analysis
* Search students
* Analyze talent pool

---

## Administrator

Responsible for:

* Managing users
* Monitoring scraping jobs
* Managing datasets
* Viewing system analytics
* Configuring AI services

---

# Overall Design Style

Style:

* Modern SaaS
* Clean
* Minimalistic
* Professional
* Data-driven

Avoid:

* Heavy gradients
* Excessive animations
* Clutter
* Skeuomorphic elements

---

# Color Palette

Primary

* Blue (#2563EB)

Secondary

* Indigo
* Purple accents

Success

* Green

Warning

* Amber

Danger

* Red

Neutral

* White
* Light Gray
* Dark Gray

Charts should use accessible color combinations.

---

# Typography

Primary Font:

* Inter

Alternative:

* Geist
* SF Pro
* Roboto

Hierarchy:

* H1
* H2
* H3
* Subtitle
* Body
* Caption

Maintain generous spacing.

---

# Spacing System

Use an 8-point grid.

Examples:

* 8 px
* 16 px
* 24 px
* 32 px
* 48 px
* 64 px

Maintain consistent padding and margins throughout the application.

---

# Border Radius

Small

* 8 px

Medium

* 12 px

Large

* 16 px

Cards should have soft rounded corners.

---

# Shadows

Use subtle elevation.

Avoid strong drop shadows.

---

# Icons

Use a consistent icon set.

Examples:

* Lucide
* Heroicons

Icons should be simple and minimal.

---

# Layout

Desktop Width

1440 px

Sidebar Width

260 px

Top Navigation

72 px height

Content should use responsive containers.

---

# Navigation

Left Sidebar

Contains:

* Dashboard
* Resume
* Skill Gap Analysis
* Learning Roadmap
* Job Trends
* Recommendations
* Profile
* Settings

Top Navigation

Contains:

* Search
* Notifications
* User Profile
* Theme Toggle

---

# Common Components

The following components should be reusable throughout the application:

## Buttons

* Primary
* Secondary
* Outline
* Ghost
* Icon Button

---

## Forms

* Text Field
* Password Field
* Email Field
* Search Field
* Dropdown
* Multi-select
* Date Picker

---

## Cards

* Analytics Card
* Recommendation Card
* Resume Card
* Course Card
* Job Card

---

## Tables

Support:

* Sorting
* Filtering
* Pagination
* Search

---

## Charts

Support:

* Bar Chart
* Line Chart
* Area Chart
* Pie Chart
* Radar Chart

---

## Progress Components

* Progress Bar
* Circular Progress
* Skill Level Indicator

---

## Status Components

* Badge
* Chip
* Alert
* Toast
* Notification

---

## Feedback States

Design:

* Loading
* Empty State
* Error State
* Success State

---

# Accessibility

Requirements:

* WCAG compliant contrast
* Keyboard navigation
* Visible focus states
* Responsive typography
* Screen reader friendly labels

---

# Responsive Design

Generate layouts for:

Desktop

* 1440 px

Tablet

* 768 px

Mobile

* 390 px

Navigation should adapt appropriately.

---

# Primary Pages

Generate the following screens:

1. Landing Page
2. Login
3. Registration
4. Student Dashboard
5. Resume Upload
6. Resume Analysis
7. Skill Gap Analysis
8. Learning Roadmap
9. Recommended Courses
10. Job Market Trends
11. Employer Dashboard
12. Candidate Profile
13. Admin Dashboard
14. User Management
15. System Analytics
16. Notifications
17. User Profile
18. Settings
19. Error Pages
20. Empty States

---

# Dashboard Requirements

Dashboard should prominently display:

* Welcome section
* Overall Skill Score
* Skill Gap Summary
* Emerging Skills
* Resume Status
* AI Recommendations
* Learning Progress
* Job Market Trends
* Recent Activity

The dashboard should provide a quick overview without overwhelming the user.

---

# Design Principles

Every page should:

* Use Auto Layout
* Reuse existing components
* Follow consistent spacing
* Maintain visual hierarchy
* Minimize cognitive load
* Present AI insights clearly
* Use realistic sample data instead of placeholder text

---

# AI Generation Instructions

When generating UI:

* Maintain a consistent design system.
* Reuse components instead of creating duplicates.
* Use modern SaaS design patterns.
* Prioritize readability and usability.
* Apply responsive layouts.
* Keep the interface clean, professional, and production-ready.
* Ensure every screen feels like part of the same product.
