# AI-Based Skill Gap Analyzer

# Product Requirements Document (PRD)

## Part 1 -- Product Foundation

**Version:** 1.0\
**Status:** Draft\
**Project Type:** Industrial Final Year Project\
**Authors:** Team FYP -- AI-Based Skill Gap Analyzer

------------------------------------------------------------------------

# Table of Contents

1.  Executive Summary
2.  Product Vision
3.  Product Overview
4.  Business Problem
5.  Product Objectives
6.  Success Metrics
7.  Product Principles
8.  Stakeholders
9.  Target Audience
10. User Personas
11. Functional Scope
12. Out of Scope
13. Assumptions
14. Constraints
15. Product Terminology

------------------------------------------------------------------------

# 1. Executive Summary

The AI-Based Skill Gap Analyzer is an intelligent web platform designed
to bridge the gap between university education and rapidly changing
industry requirements.

The system aggregates job postings from multiple sources, extracts
technical skills using Artificial Intelligence and Natural Language
Processing (NLP), analyzes labor market trends, and compares them with a
user's skills. It then produces an actionable skill-gap report and
personalized learning roadmap.

Unlike traditional career portals, this product is a decision-support
platform rather than a recruitment website. Its primary objective is to
empower students and educational institutions with evidence-based
insights into current and emerging market demands.

------------------------------------------------------------------------

# 2. Product Vision

To become the leading AI-powered decision-support platform that enables
students and universities to continuously align learning outcomes with
evolving labor market requirements.

The long-term vision is to reduce the mismatch between graduate
competencies and employer expectations by providing transparent,
data-driven career guidance.

------------------------------------------------------------------------

# 3. Product Overview

The platform combines three major capabilities:

-   Labor market intelligence
-   Personalized skill-gap analysis
-   Learning recommendations

Users maintain a profile containing their education, skills, and resume.
The system compares those skills against continuously analyzed
job-market data and highlights missing competencies.

------------------------------------------------------------------------

# 4. Business Problem

Technology evolves faster than academic curricula.

Students often rely on: - Social media - Online opinions - Friends -
Outdated articles

to decide which technologies to learn.

This frequently results in investing time in skills with limited market
demand while overlooking emerging technologies.

Educational institutions face similar challenges because curriculum
updates occur far less frequently than changes in industry.

The platform addresses these issues using continuously updated
labor-market intelligence.

------------------------------------------------------------------------

# 5. Product Objectives

Primary objectives:

-   Collect technology-related job postings.
-   Extract technical skills using NLP.
-   Normalize extracted skills.
-   Analyze skill demand trends.
-   Compare user skills with market demand.
-   Identify missing competencies.
-   Recommend personalized learning resources.
-   Present findings through interactive dashboards.

Secondary objectives:

-   Improve career planning.
-   Assist curriculum development.
-   Provide regional market insights.

------------------------------------------------------------------------

# 6. Success Metrics (KPIs)

  KPI                         Target
  --------------------------- --------------
  Skill extraction accuracy   ≥85%
  Gap detection accuracy      ≥90%
  Dashboard response time     \<3 seconds
  Resume processing           \<10 seconds
  User satisfaction           ≥4.5/5
  Mobile usability score      ≥90
  Lighthouse accessibility    ≥95

------------------------------------------------------------------------

# 7. Product Principles

The product should always prioritize:

1.  Simplicity
2.  Trust
3.  Transparency
4.  Data-driven recommendations
5.  Explainable AI outputs
6.  Accessibility
7.  Scalability
8.  Maintainability

Every recommendation should clearly indicate *why* it is being
suggested.

------------------------------------------------------------------------

# 8. Stakeholders

## Primary

-   Students
-   Fresh Graduates
-   Job Seekers

## Secondary

-   Universities
-   Career Counselors
-   Academic Departments

## Internal

-   Development Team
-   Project Supervisor
-   Industry Supervisor

## External

-   Job Portals
-   Course Providers

------------------------------------------------------------------------

# 9. Target Audience

The first release targets:

-   BS Computer Science students
-   Software Engineering students
-   IT graduates
-   Entry-level developers
-   Career changers into technology

Future versions may support additional disciplines.

------------------------------------------------------------------------

# 10. User Personas

## Persona 1 -- University Student

**Goal:** Learn the right technologies before graduation.

**Pain Points** - Unsure what employers currently demand. - Too many
conflicting learning resources. - Difficulty prioritizing skills.

**Needs** - Personalized roadmap. - Market insights. - Clear learning
priorities.

------------------------------------------------------------------------

## Persona 2 -- Fresh Graduate

**Goal:** Increase employability.

**Pain Points** - Resume receives few responses. - Unsure which skills
are missing.

**Needs** - Resume analysis. - Skill-gap report. - Recommended
certifications.

------------------------------------------------------------------------

## Persona 3 -- Career Counselor

**Goal:** Guide students using real data.

**Needs** - Market dashboards. - Emerging technologies. - Regional
demand statistics.

------------------------------------------------------------------------

## Persona 4 -- University Administrator

**Goal:** Improve curriculum relevance.

**Needs** - Aggregated trend reports. - Demand analytics. - Historical
comparisons.

------------------------------------------------------------------------

## Persona 5 -- System Administrator

**Goal:** Maintain platform health.

**Needs** - Scraping status. - Processing queue. - System logs. - Data
quality monitoring.

------------------------------------------------------------------------

# 11. Functional Scope

Included in Version 1:

-   Authentication UI
-   User profile
-   Resume upload
-   Skill management
-   Skill-gap analysis
-   Recommendation dashboard
-   Market trend dashboard
-   Reports
-   Admin dashboard

------------------------------------------------------------------------

# 12. Out of Scope

The following are intentionally excluded:

-   Job application portal
-   Candidate recruitment
-   Live interviews
-   Messaging system
-   Payroll
-   Applicant Tracking System
-   HR Management
-   Global labor market coverage

------------------------------------------------------------------------

# 13. Assumptions

-   Public job postings remain available.
-   Users provide accurate profile information.
-   Learning resources remain accessible.
-   NLP models maintain acceptable accuracy.

------------------------------------------------------------------------

# 14. Constraints

-   Limited development time.
-   Technology-focused job market only.
-   Prototype uses mock frontend data.
-   Recommendation quality depends on collected data.

------------------------------------------------------------------------

# 15. Product Terminology

  -----------------------------------------------------------------------
  Term                    Definition
  ----------------------- -----------------------------------------------
  Skill Gap               Difference between user skills and market
                          requirements

  Market Skill            Frequently demanded technology or competency

  Recommendation          Suggested learning resource

  Resume Score            Overall quality indicator for uploaded resume

  Skill Match Score       Similarity percentage between user profile and
                          market
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# Conclusion

This foundation establishes the strategic direction of the AI-Based
Skill Gap Analyzer. Subsequent PRD sections will define the design
system, information architecture, detailed screen specifications,
reusable component library, interaction patterns, and implementation
guidance for a production-quality frontend prototype.
