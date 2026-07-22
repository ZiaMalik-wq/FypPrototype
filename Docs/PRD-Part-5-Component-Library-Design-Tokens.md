# AI-Based Skill Gap Analyzer

# Product Requirements Document (PRD)

## Part 5 -- Component Library & Design Tokens

**Version:** 1.0

------------------------------------------------------------------------

# Table of Contents

1.  Design Tokens
2.  Color System
3.  Typography
4.  Spacing & Layout
5.  Icons & Imagery
6.  Component Library
7.  Data Visualization Components
8.  Form Components
9.  Feedback Components
10. Navigation Components
11. Accessibility Standards
12. Component Acceptance Criteria

------------------------------------------------------------------------

# 1. Design Tokens

Design tokens ensure consistency across the entire application.

## Border Radius

  Token         Value
  ----------- -------
  radius-xs       4px
  radius-sm       8px
  radius-md      12px
  radius-lg      16px
  radius-xl      24px

## Elevation

  Token         Usage
  ------------- -----------
  elevation-1   Cards
  elevation-2   Dropdowns
  elevation-3   Dialogs

Use subtle shadows only.

------------------------------------------------------------------------

# 2. Color System

## Brand

Primary: #2563EB

Hover: #1D4ED8

Active: #1E40AF

## Neutral

Background: #F8FAFC

Surface: #FFFFFF

Border: #E2E8F0

Primary Text: #0F172A

Secondary Text: #64748B

## Semantic

Success: #16A34A

Warning: #D97706

Danger: #DC2626

Info: #0284C7

------------------------------------------------------------------------

# 3. Typography

Preferred Fonts

-   Inter
-   Geist

Scale

  Style     Size
  --------- ------
  Display   48px
  H1        40px
  H2        32px
  H3        24px
  Body      16px
  Small     14px
  Caption   12px

Font Weight

-   Regular 400
-   Medium 500
-   Semibold 600
-   Bold 700

------------------------------------------------------------------------

# 4. Spacing & Layout

Use an 8-point spacing system.

4, 8, 12, 16, 24, 32, 40, 48, 64

Grid

-   Desktop: 12 columns
-   Tablet: 8 columns
-   Mobile: 4 columns

Maximum content width: 1440px

------------------------------------------------------------------------

# 5. Icons & Imagery

Icons

-   Lucide
-   Outline style
-   20--24px

Illustrations

-   Flat vector
-   Minimal
-   Professional

Do not use decorative AI-style artwork inside the application.

------------------------------------------------------------------------

# 6. Component Library

## Buttons

Variants

-   Primary
-   Secondary
-   Outline
-   Ghost
-   Danger

States

-   Default
-   Hover
-   Active
-   Disabled
-   Loading

------------------------------------------------------------------------

## Cards

Types

-   Metric Card
-   Report Card
-   Recommendation Card
-   Course Card
-   Trend Card

------------------------------------------------------------------------

## Badges

Variants

-   Success
-   Warning
-   Error
-   Info
-   Neutral

------------------------------------------------------------------------

## Tables

Features

-   Sorting
-   Filtering
-   Search
-   Pagination
-   Row selection
-   Sticky header

------------------------------------------------------------------------

## Dialogs

Support

-   Confirmation
-   Delete
-   Export
-   Settings

------------------------------------------------------------------------

## Upload Zone

Supports

-   Drag & Drop
-   Click to Upload
-   Progress
-   Validation
-   Error recovery

------------------------------------------------------------------------

# 7. Data Visualization Components

Supported Charts

-   Line
-   Area
-   Bar
-   Horizontal Bar
-   Donut
-   Radar
-   Gauge
-   Heatmap
-   Treemap

Chart Requirements

-   Responsive
-   Accessible
-   Legends
-   Tooltips
-   Empty states
-   Loading skeletons

------------------------------------------------------------------------

# 8. Form Components

Components

-   Text Input
-   Password Input
-   Email Input
-   Text Area
-   Search
-   Dropdown
-   Multi-select
-   Date Picker
-   Checkbox
-   Radio Button
-   Toggle
-   File Upload

Validation

-   Required
-   Format
-   Range
-   Duplicate detection

Inline validation messages required.

------------------------------------------------------------------------

# 9. Feedback Components

Use consistent messaging.

Components

-   Toast
-   Banner
-   Snackbar
-   Alert
-   Progress Bar
-   Skeleton Loader
-   Empty State

Severity

-   Success
-   Warning
-   Error
-   Information

------------------------------------------------------------------------

# 10. Navigation Components

Components

-   Sidebar
-   Top Navigation
-   Breadcrumb
-   Tabs
-   Pagination
-   Command Search
-   User Menu

Navigation Rules

-   Maximum three clicks to primary feature.
-   Persistent sidebar on desktop.
-   Drawer navigation on mobile.

------------------------------------------------------------------------

# 11. Accessibility Standards

Requirements

-   WCAG AA
-   Keyboard navigation
-   Visible focus indicators
-   Screen-reader labels
-   Color contrast compliance
-   44px minimum touch targets

------------------------------------------------------------------------

# 12. Component Acceptance Criteria

Every reusable component must:

-   Follow design tokens.
-   Support light theme.
-   Be responsive.
-   Support loading and disabled states.
-   Be keyboard accessible.
-   Provide meaningful ARIA labels.
-   Maintain visual consistency.
-   Be reusable across the application.

------------------------------------------------------------------------

# Future Component Roadmap

-   Command Palette
-   AI Chat Panel
-   Timeline Builder
-   Kanban Learning Board
-   Rich Text Notes
-   Interactive Skill Graph
-   Career Path Explorer

------------------------------------------------------------------------

# Conclusion

This component library establishes a reusable design foundation for the
AI-Based Skill Gap Analyzer. By standardizing design tokens, UI
components, interaction patterns, and accessibility requirements, the
frontend remains consistent, scalable, and maintainable while delivering
an enterprise-grade user experience.
