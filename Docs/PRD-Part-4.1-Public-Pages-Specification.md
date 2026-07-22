# AI-Based Skill Gap Analyzer

# Product Requirements Document (PRD)

## Part 4.1 -- Public Pages Specification

**Version:** 1.0

------------------------------------------------------------------------

# Table of Contents

1.  Landing Page
2.  Login
3.  Register
4.  Forgot Password
5.  Email Verification
6.  Shared UX Standards

------------------------------------------------------------------------

# 1. Landing Page

## Purpose

The landing page introduces the platform, establishes trust, explains
the value proposition, and guides visitors toward creating an account.

## Target Users

-   University students
-   Fresh graduates
-   Career counselors
-   University administrators

## Success Criteria

-   Understand product purpose within 10 seconds.
-   Primary CTA visible without scrolling.
-   Mobile-first responsive experience.

## Layout

### Header

-   Logo
-   Navigation (Features, How It Works, About, Contact)
-   Sign In button
-   Get Started button

### Hero Section

Headline: \> Discover Your Skill Gap. Build Your Future.

Supporting text explaining AI-powered market analysis.

CTA Buttons: - Get Started - Watch Demo (placeholder)

Right Side: - Dashboard illustration mockup

### Trust Section

Display metrics: - 10,000+ Job Posts Analysed - 500+ Skills Tracked - AI
Powered Analysis - Personalized Roadmaps

### Features Section

Cards: - Resume Analysis - Skill Gap Detection - Market Trends - AI
Recommendations - Progress Tracking - Exportable Reports

### How It Works

1.  Create Account
2.  Upload Resume
3.  Analyze Skills
4.  Receive Recommendations
5.  Track Progress

### FAQ

Accordion component.

### Footer

Links: - Privacy Policy - Terms - Documentation - Contact - GitHub
(placeholder)

## Components

-   Sticky Navbar
-   Hero Banner
-   Feature Cards
-   Statistics Cards
-   Timeline
-   FAQ Accordion
-   Footer

## Empty State

Not applicable.

## Responsive Behaviour

Desktop: Two-column hero.

Tablet: Single-column hero with centered illustration.

Mobile: Stack content vertically.

## Accessibility

-   Semantic headings
-   Keyboard navigation
-   Skip-to-content link
-   WCAG AA contrast

## Acceptance Criteria

-   Lighthouse Performance \>90
-   Accessibility \>95
-   CLS \<0.1

------------------------------------------------------------------------

# 2. Login Page

## Purpose

Authenticate returning users.

## Layout

Left: - Branding - Product benefits

Right: Authentication Card

## Fields

-   Email
-   Password
-   Remember Me
-   Forgot Password

Buttons - Sign In - Continue with Google (future)

Footer: Register link.

## Validation

Email format. Password required.

## Error Messages

-   Invalid credentials.
-   Account disabled.
-   Server unavailable.

## Loading State

Disable form and show spinner.

## Acceptance Criteria

Successful login redirects to Dashboard.

------------------------------------------------------------------------

# 3. Registration Page

## Purpose

Allow new users to create an account.

## Fields

-   Full Name
-   Email
-   Password
-   Confirm Password
-   University
-   Program
-   Graduation Year

## Password Requirements

-   8+ characters
-   Uppercase
-   Lowercase
-   Number
-   Special character

## Validation

Inline validation after field blur.

## Success Flow

Register → Verification Email → Email Verification Page

------------------------------------------------------------------------

# 4. Forgot Password

## Purpose

Allow password recovery.

## Flow

Forgot Password → Enter Email → Send Reset Link → Confirmation Screen →
Reset Password

## Components

-   Email field
-   Submit button
-   Success illustration

## Error States

Unknown email. Expired link.

------------------------------------------------------------------------

# 5. Email Verification

## Purpose

Verify ownership of email address.

## States

### Pending

Message requesting user to verify email.

### Verified

Success icon. Continue button.

### Expired

Resend verification button.

### Invalid

Display support information.

## Components

-   Status Card
-   Illustration
-   CTA Button

------------------------------------------------------------------------

# 6. Shared UX Standards

## Shared Components

-   Navbar
-   Footer
-   Primary Button
-   Secondary Button
-   Input
-   Password Input
-   Alert
-   Toast
-   Modal
-   Card

## Design Rules

-   Use 8-point spacing.
-   Maximum content width: 1440px.
-   Border radius: 12px.
-   Professional enterprise styling.
-   No glassmorphism.
-   White surfaces.
-   Subtle shadows only.

## Accessibility

-   Full keyboard support.
-   Focus indicators.
-   ARIA labels.
-   Screen-reader friendly forms.

## Responsive Breakpoints

-   Mobile: \<768px
-   Tablet: 768--1023px
-   Desktop: ≥1024px

## Microcopy Examples

Login: - "Welcome back." - "Sign in to continue."

Register: - "Create your account."

Forgot Password: - "We'll send a secure password reset link."

Email Verification: - "Your email has been verified successfully."

------------------------------------------------------------------------

# Future Enhancements

-   Single Sign-On (SSO)
-   Multi-factor Authentication
-   Microsoft & GitHub OAuth
-   Social login
-   Multi-language support

------------------------------------------------------------------------

# Conclusion

This document specifies every public-facing page required before users
access the application. These screens should communicate
professionalism, establish trust, and provide a frictionless onboarding
experience while maintaining consistency with the overall enterprise
design system.
