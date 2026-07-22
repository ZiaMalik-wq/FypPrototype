# AI-Based Skill Gap Analyzer

# Product Requirements Document (PRD)

## Part 2 -- Design System & UX Guidelines

**Version:** 1.0

------------------------------------------------------------------------

# Table of Contents

1.  Design Philosophy
2.  Design Principles
3.  Visual Identity
4.  Color System
5.  Typography
6.  Icons & Illustrations
7.  Layout & Grid
8.  Spacing System
9.  Elevation & Borders
10. Components
11. Forms
12. Tables
13. Charts & Data Visualization
14. Navigation
15. Feedback States
16. Responsive Design
17. Accessibility
18. Motion & Animation
19. Anti-AI Design Rules

------------------------------------------------------------------------

# 1. Design Philosophy

The product should resemble a modern enterprise application rather than
a startup concept.

Primary inspiration:

-   Microsoft Fluent 2
-   Azure Portal
-   GitHub
-   Atlassian
-   Stripe Dashboard
-   Linear
-   Notion

The interface should prioritize clarity, trust, consistency, and
usability over decoration.

------------------------------------------------------------------------

# 2. Design Principles

-   Simplicity over complexity
-   Data first, decoration second
-   Consistent spacing
-   Clear visual hierarchy
-   Progressive disclosure
-   Accessibility by default
-   Responsive across devices
-   Familiar interaction patterns

------------------------------------------------------------------------

# 3. Visual Identity

Tone: - Professional - Clean - Intelligent - Academic - Enterprise

Avoid: - Neon effects - Excessive gradients - Heavy glassmorphism -
Floating blobs - Oversaturated colors

------------------------------------------------------------------------
# 4. Color System
Brand Personality

The platform should communicate:

• Intelligence
• Trust
• Career Growth
• Academia
• Professionalism

Avoid looking like ChatGPT, Claude, Lovable, V0, or generic AI dashboards.

Primary
Deep Navy
#0F4C81

Primary Hover
#0B3D68

Accent
Emerald
#10B981

Accent Hover
#059669

Background
#F7F9FC

Surface
#FFFFFF

Sidebar
#0B172A

Sidebar Hover
#162338

Border
#DCE4EC

Primary Text
#111827

Secondary Text
#64748B

Muted Text
#94A3B8

Semantic

Success
#16A34A

Warning
#F59E0B

Danger
#DC2626

Info
#0284C7

Use gradients only on the landing hero and CTA sections.

------------------------------------------------------------------------

# 5. Typography

Preferred fonts:

-   Inter
-   Geist
-   IBM Plex Sans
-   Manrope

Hierarchy:

-   H1 40px
-   H2 32px
-   H3 24px
-   H4 20px
-   Body 16px
-   Small 14px
-   Caption 12px

Line height: 1.5

------------------------------------------------------------------------

# 6. Icons & Illustrations

## Icon Strategy

Icons should enhance usability by providing quick visual recognition without distracting from the content. Use icons consistently throughout the application to reinforce navigation, actions, and data interpretation.

### Icon Libraries

Use a combination of modern, professional icon libraries:

- **Lucide Icons** – Primary navigation, forms, actions, settings, and general UI components.
- **Phosphor Icons** – AI features, recommendations, career guidance, and learning-related visuals.
- **Material Symbols Rounded** – Analytics, dashboards, reports, monitoring, and administrative interfaces where appropriate.

Avoid mixing multiple icon styles within the same screen or component.

---

## Navigation Icons

Use simple outline icons for sidebar and top navigation.

| Feature | Recommended Icon |
|---------|------------------|
| Dashboard | LayoutDashboard |
| Profile | UserRound |
| Resume | FileText |
| Skills | BadgeCheck |
| Skill Gap Analysis | BrainCircuit |
| Recommendations | Target |
| Market Trends | TrendingUp |
| Reports | BarChart3 |
| Notifications | Bell |
| Settings | Settings2 |
| Admin | ShieldCheck |
| Analytics | ChartColumn |
| System Monitoring | Activity |
| User Management | Users |

---

## Icon Styling

Icons should follow these standards:

- Outline style only
- Stroke width: 1.75–2px
- Default size: 20–24px
- Navigation icons: 22px
- Table action icons: 18–20px
- KPI icons: 24–28px
- Hero section icons: 32–48px

Icons should remain visually lightweight and never dominate the interface.

---

## Icon Colors

Avoid making every icon the primary brand color.

Use semantic colors to improve visual scanning.

| Category | Color |
|-----------|--------|
| Navigation | White (Sidebar) / Primary Text (Top Navigation) |
| Dashboard | Deep Navy |
| Resume | Emerald |
| Skills | Teal |
| AI Analysis | Indigo |
| Recommendations | Amber |
| Market Trends | Cyan |
| Reports | Slate Blue |
| Success | Green |
| Warning | Amber |
| Error | Red |
| Information | Blue |

Icons should never appear as bright rainbow colors or gradients.

---

## KPI Icons

Every KPI card should include a colored circular icon container.

Example:

- Active Users → Users
- Match Score → Target
- Skill Coverage → BadgeCheck
- AI Analyses → BrainCircuit
- Job Trends → TrendingUp
- Reports → FileBarChart
- Notifications → Bell

The icon container should use a subtle tinted background rather than a solid fill.

---

## Empty State Illustrations

Do not use oversized icons for empty states.

Instead, use minimal flat vector illustrations with a professional appearance.

Each empty state should contain:

- Illustration
- Title
- Supporting description
- Primary action
- Optional secondary action

Examples:

**Resume**
- Upload Resume illustration
- "Upload your first resume"

**Skill Gap Analysis**
- AI analysis illustration
- "Run your first skill gap analysis"

**Reports**
- Analytics illustration
- "Generate your first report"

---

## Marketing Illustrations

Illustrations are permitted only on:

- Landing Page
- About Section
- Feature Highlights
- Empty States
- Onboarding

Preferred style:

- Flat vector
- Minimal
- Clean geometric shapes
- Academic and enterprise aesthetic

Avoid:

- Cartoon illustrations
- 3D emojis
- Isometric artwork
- Anime-style graphics
- AI-generated fantasy artwork
- Decorative blobs

---

## Accessibility

All icons must:

- Include accessible labels where appropriate.
- Never be the only way to communicate important information.
- Be paired with text for navigation and critical actions.
- Maintain sufficient contrast against their background.

---

## Consistency Rules

- Use one icon style per screen.
- Maintain consistent icon sizing.
- Keep spacing between icons and labels consistent.
- Do not stretch or distort icons.
- Do not use decorative icons without functional purpose.
- Reserve colorful illustrations for marketing and empty states only.

Icons should support usability rather than decoration and contribute to a clean, enterprise-grade user experience.
------------------------------------------------------------------------

# 7. Layout & Grid

Desktop: - Max width 1440px - 12-column grid

Tablet: - 8-column grid

Mobile: - 4-column grid

Sidebar width: - Expanded: 280px - Collapsed: 80px

Top navigation height: 64px

------------------------------------------------------------------------

# 8. Spacing System

Use an 8-point spacing system.

Scale: - 4 - 8 - 12 - 16 - 24 - 32 - 40 - 48 - 64

Avoid inconsistent spacing.

------------------------------------------------------------------------

# 9. Elevation & Borders

Cards: - Radius: 12--16px - Border: 1px #E2E8F0 - Shadow: subtle only

Buttons: - Radius: 10px

Inputs: - Radius: 10px

Avoid oversized shadows.

------------------------------------------------------------------------

# 10. Components

Reusable components include:

-   Buttons
-   Cards
-   Metric Cards
-   KPI Widgets
-   Inputs
-   Dropdowns
-   Tabs
-   Chips
-   Badges
-   Accordions
-   Modals
-   Drawers
-   Toasts
-   Timelines
-   Progress Rings
-   Upload Zones
-   Pagination
-   Breadcrumbs

All components must follow the same spacing and typography rules.

------------------------------------------------------------------------

# 11. Forms

Use labels above inputs.

Required fields must be clearly indicated.

Validation messages appear below the field.

Primary action aligned consistently.

Support: - Loading - Success - Error - Disabled

------------------------------------------------------------------------

# 12. Tables

Enterprise-style data tables.

Features: - Search - Sort - Filter - Pagination - Row selection - Sticky
headers

Keep tables readable with alternating whitespace, not alternating
colors.

------------------------------------------------------------------------

# 13. Charts & Data Visualization

Charts are a primary method of communicating insights within the AI-Based Skill Gap Analyzer. They should prioritize readability, clarity, and decision-making over visual decoration.

The overall visual style should resemble enterprise analytics platforms such as:

- Microsoft Power BI
- Azure Portal
- GitHub Insights
- Atlassian Analytics
- Tableau (minimal styling only)

Avoid dashboards that resemble marketing websites or AI-generated admin templates.

---

## Supported Chart Types

The application may use:

- Line Chart
- Bar Chart
- Horizontal Bar Chart
- Area Chart
- Radar Chart
- Donut Chart
- Pie Chart (only when appropriate)
- Heatmap
- Treemap
- Progress Ring
- Sparkline
- KPI Trend Chart

Choose the visualization that best communicates the data rather than using charts for decoration.

---

## Color Palette

Use a restrained enterprise color palette.

Primary Palette

- Deep Navy — #0F4C81
- Emerald — #10B981
- Teal — #14B8A6
- Indigo — #6366F1
- Amber — #F59E0B
- Coral — #F97316
- Slate — #64748B

Use semantic colors only when communicating status:

- Success — Green
- Warning — Amber
- Error — Red
- Information — Blue

Do not use rainbow palettes.

Do not use random chart colors.

Do not use bright neon colors.

---

## Chart Design Principles

Charts should:

- Minimize visual noise.
- Use subtle grid lines.
- Use generous spacing.
- Use readable labels.
- Use consistent axis formatting.
- Display meaningful tooltips.
- Support responsive resizing.
- Use smooth but subtle animations.

Avoid:

- 3D charts
- Exploded pie charts
- Heavy gradients
- Decorative shadows
- Excessive borders
- Loud color combinations

---

## Dashboard KPI Cards

Every dashboard should begin with KPI summary cards.

Each KPI card should contain:

- Feature icon
- Metric title
- Primary value
- Trend indicator
- Percentage change
- Optional sparkline

Example KPIs:

- Resume Match Score
- Skills Covered
- Missing Skills
- AI Analyses Completed
- Trending Technologies
- Job Postings Analysed

---

## Data Visualization Standards

Every chart must include, where applicable:

- Title
- Optional subtitle
- Legend
- Tooltip
- Axis labels
- Empty state
- Loading skeleton
- Export action (future enhancement)

Numbers should be formatted consistently using:

- K (Thousands)
- M (Millions)
- Percentage (%)
- Decimal precision where appropriate

---

## Recommended Chart Usage

### Dashboard

- KPI Cards
- Sparklines
- Area Chart
- Bar Chart

### Skill Gap Analysis

- Radar Chart
- Horizontal Bar Chart
- Progress Rings

### Recommendations

- Skill Progress Bars
- Learning Roadmap Timeline
- Priority Distribution

### Market Trends

- Line Charts
- Area Charts
- Heatmaps
- Trend Indicators

### Reports

- Bar Charts
- Donut Charts
- Treemaps
- Summary KPIs

### Admin Dashboard

- User Growth
- API Usage
- Active Sessions
- System Health
- Resource Consumption

---

## Interactive Features

Charts should support:

- Hover tooltips
- Legend filtering (where appropriate)
- Responsive resizing
- Smooth transitions
- Keyboard accessibility

Animations should remain subtle and complete within 150–250ms.

---

## Empty & Loading States

Every visualization must define:

- Loading skeleton
- No data available
- Partial data
- Error state

Example:

"No market trend data available."

"Upload additional job postings to generate insights."

---

## Consistency Rules

- Maintain identical spacing between charts.
- Use consistent corner radius.
- Keep chart titles aligned.
- Use one visual language throughout the application.
- Prefer information density over decorative visuals.
- Ensure charts remain readable on desktop, tablet, and mobile.

The objective is to create dashboards that resemble professional business intelligence software rather than generic AI-generated admin templates.
### Skill Match Visualization

The Skill Gap Analysis page should prominently display a custom Skill Match Card consisting of:

- Overall Match Score (0–100%)
- Circular Progress Ring
- Skills Already Acquired
- Missing Skills
- Emerging Skills
- Priority Skills
- Estimated Learning Time

This visualization should serve as the primary insight component and be positioned above all secondary charts.



------------------------------------------------------------------------

# 14. Navigation

Sidebar contains:

-   Dashboard
-   Profile
-   Resume
-   Skills
-   Skill Gap Analysis
-   Recommendations
-   Market Trends
-   Reports
-   Settings

Top bar contains: - Search - Notifications - User menu - Theme toggle

------------------------------------------------------------------------

# 15. Feedback States

Every feature should define:

-   Loading
-   Empty
-   Success
-   Warning
-   Error

Examples:

"No resume uploaded"

"No recommendations available"

"Analysis completed successfully"

------------------------------------------------------------------------

# 16. Responsive Design

Desktop is primary.

Requirements:

-   Collapsible sidebar
-   Responsive charts
-   Responsive tables
-   Drawer navigation on mobile
-   Touch-friendly controls

------------------------------------------------------------------------

# 17. Accessibility

Meet WCAG AA guidelines.

Requirements:

-   Keyboard navigation
-   Focus indicators
-   Color contrast
-   ARIA labels
-   Screen reader compatibility
-   Minimum 44px touch targets

------------------------------------------------------------------------

# 18. Motion & Animation

Animations must be subtle.

Allowed:

-   Fade
-   Slide
-   Hover elevation
-   Smooth page transitions

Avoid:

-   Bounce
-   Glow
-   Infinite animations
-   Particle effects

Keep durations between 150--250ms.

------------------------------------------------------------------------

# 19. Anti-AI Design Rules

Do NOT:

-   Make every page dark.
-   Use purple as the brand color.
-   Put gradients on every card.
-   Use glassmorphism everywhere.
-   Use giant rounded corners.
-   Add unnecessary decorative blobs.
-   Overuse shadows.
-   Create Dribbble-style dashboards.

Instead:

-   Build software that looks production-ready.
-   Prioritize information density with clarity.
-   Use restrained colors.
-   Keep interfaces consistent.
-   Make dashboards feel like Microsoft Azure, GitHub, or Atlassian
    products.

------------------------------------------------------------------------

# Conclusion

The design system establishes a consistent visual language for the
AI-Based Skill Gap Analyzer. Every future screen, component, and
interaction must adhere to these guidelines to ensure a cohesive,
professional, enterprise-grade user experience.
