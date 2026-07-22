# AI-Based Skill Gap Analyzer

# Product Requirements Document (PRD)

## Part 6 -- Data Models, Mock Data & API Contracts

**Version:** 1.0

------------------------------------------------------------------------

# Table of Contents

1.  Data Architecture
2.  Core Domain Models
3.  Entity Relationships
4.  Mock Data Standards
5.  API Design Principles
6.  API Contracts
7.  Error Responses
8.  Pagination & Filtering
9.  Frontend State Models
10. Security Considerations
11. Acceptance Criteria

------------------------------------------------------------------------

# 1. Data Architecture

The frontend communicates with ASP.NET Core APIs through REST endpoints.
AI services remain abstracted behind backend services.

Core domains:

-   Authentication
-   User Profile
-   Resume
-   Skills
-   Skill Gap Analysis
-   Recommendations
-   Market Trends
-   Reports
-   Administration

------------------------------------------------------------------------

# 2. Core Domain Models

## User

  Field            Type
  ---------------- ---------
  id               UUID
  fullName         string
  email            string
  role             enum
  university       string
  degree           string
  graduationYear   integer

## Resume

  Field        Type
  ------------ ----------
  id           UUID
  fileName     string
  uploadedAt   datetime
  fileSize     number
  status       enum

## Skill

  Field         Type
  ------------- --------
  id            UUID
  name          string
  category      string
  proficiency   enum

## Skill Gap Result

  Field           Type
  --------------- ----------
  matchScore      number
  missingSkills   array
  strengths       array
  generatedAt     datetime

## Recommendation

  Field            Type
  ---------------- ---------
  id               UUID
  title            string
  priority         enum
  estimatedWeeks   integer

------------------------------------------------------------------------

# 3. Entity Relationships

``` text
User
 ├── Resume (1:Many)
 ├── Skills (1:Many)
 ├── Reports (1:Many)
 └── Recommendations (1:Many)

Resume
 └── Extracted Skills

Analysis
 ├── Skill Gap
 ├── Match Score
 └── Recommendations
```

------------------------------------------------------------------------

# 4. Mock Data Standards

Use realistic but fictional data.

Example User

``` json
{
  "id":"USR-1001",
  "fullName":"Ali Khan",
  "university":"COMSATS University Islamabad",
  "degree":"BS Computer Science",
  "graduationYear":2027
}
```

Example Skill

``` json
{
  "name":"ASP.NET Core",
  "category":"Backend",
  "proficiency":"Intermediate"
}
```

Example Recommendation

``` json
{
  "title":"Learn Docker",
  "priority":"High",
  "estimatedWeeks":3
}
```

------------------------------------------------------------------------

# 5. API Design Principles

-   RESTful naming
-   JSON responses
-   Versioned APIs (/api/v1)
-   Stateless requests
-   Consistent response envelope
-   ISO-8601 timestamps

Success Response

``` json
{
  "success": true,
  "message": "Operation completed.",
  "data": {}
}
```

Failure Response

``` json
{
  "success": false,
  "message": "Validation failed.",
  "errors": []
}
```

------------------------------------------------------------------------

# 6. API Contracts

## Authentication

  Method   Endpoint
  -------- -----------------------
  POST     /api/v1/auth/login
  POST     /api/v1/auth/register
  POST     /api/v1/auth/refresh
  POST     /api/v1/auth/logout

## Profile

GET /api/v1/profile

PUT /api/v1/profile

## Resume

POST /api/v1/resumes

GET /api/v1/resumes

DELETE /api/v1/resumes/{id}

## Skills

GET /api/v1/skills

POST /api/v1/skills

PUT /api/v1/skills/{id}

DELETE /api/v1/skills/{id}

## Analysis

POST /api/v1/analysis/run

GET /api/v1/analysis/history

## Recommendations

GET /api/v1/recommendations

## Reports

GET /api/v1/reports

GET /api/v1/reports/{id}

------------------------------------------------------------------------

# 7. Error Responses

  HTTP   Meaning
  ------ -----------------------
  400    Validation Error
  401    Unauthorized
  403    Forbidden
  404    Not Found
  409    Conflict
  422    Business Rule Failure
  500    Server Error

Every error returns: - message - code - traceId - optional validation
errors

------------------------------------------------------------------------

# 8. Pagination & Filtering

Query Parameters

-   page
-   pageSize
-   search
-   sortBy
-   sortOrder

Example

``` text
GET /api/v1/skills?page=1&pageSize=10&search=react
```

------------------------------------------------------------------------

# 9. Frontend State Models

Recommended state slices:

-   auth
-   profile
-   resume
-   skills
-   analysis
-   recommendations
-   reports
-   notifications
-   settings

Each slice maintains:

-   data
-   loading
-   error
-   lastUpdated

------------------------------------------------------------------------

# 10. Security Considerations

-   JWT authentication
-   Refresh tokens
-   HTTPS only
-   Role-based authorization
-   Input validation
-   File upload validation
-   CSRF protection where applicable

Sensitive fields should never be exposed in frontend responses.

------------------------------------------------------------------------

# 11. Acceptance Criteria

-   Consistent response schema.
-   Mock data resembles production.
-   APIs are predictable.
-   Entities use stable identifiers.
-   Pagination is supported.
-   Validation errors are descriptive.
-   Frontend state remains normalized.

------------------------------------------------------------------------

# Future Enhancements

-   GraphQL gateway
-   Real-time notifications
-   WebSocket progress updates
-   Offline caching
-   API rate limiting metadata
-   OpenAPI-generated client SDK

------------------------------------------------------------------------

# Conclusion

This section defines the application's core data contracts, entity
models, mock data strategy, and API conventions. It provides a stable
foundation for frontend implementation, backend integration, testing,
and future scalability.
