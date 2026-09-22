# 🌊 FeedbackFlow API

A modular, type-safe, and secure Node.js & Express REST API built with TypeScript, Prisma v5, PostgreSQL, and Zod. Designed for embedded feature request boards, this API enables developers to manage user suggestions and feature feedback cleanly and efficiently.

---

## 🗓️ Daily Standup & Progress Log

#### 🌅 Morning Plan & Risk Assessment
* **Top 3 Tasks Planned:**
  1. Set up the modular folder structure (`src/`) and configure TypeScript (`tsconfig.json`) for ESM compatibility.
  2. Create Zod validation schemas and global error-handling middleware.
  3. Implement Express routes, Prisma controllers, and PostgreSQL database migrations for feature requests.
* **Most Obvious Obstacle/Risk:** 
  * Strict time constraints and resolving environment-specific CLI/TypeScript compilation errors.
* **Risk Resolution Plan:** 
  * Executed incremental micro-tasks (schema updates -> migration -> middleware -> route testing) and validated each stage using `npx tsc --noEmit` and Postman.

---

### 🌇 End-of-Day Review
* **Tasks Completed:**
  * Configured full ESM environment using Node.js v24, TypeScript, and Prisma v5.19.1.
  * Configured PostgreSQL schema with `User` and `FeatureRequest` entities (One-to-Many and Many-to-Many relationships).
  * Built custom Zod-based validation middleware (`validateBody`) and an Express Global Error Handler.
  * Verified request creation (`POST /api/requests`) and data retrieval (`GET /api/requests`) using Postman integration tests.
* **Biggest Lesson Learned:**
  * Runtime validation with Zod combined with Prisma foreign-key constraints ensures robust error handling (`400 Bad Request` and `404 Not Found`) before unexpected database exceptions occur.
* **Top Priority for Next Steps:**
  * Implement the upvoting endpoint (`POST /api/requests/:id/upvote`) and integrate user authentication middleware.

---

## 📌 Project Overview & Scope

FeedbackFlow provides a lightweight backend for SaaS developers and creators to collect user feedback. The system manages core entities and relationships:

1. **`User`**: Represents an app user or author submitting feature suggestions.
2. **`FeatureRequest`**: Represents user-submitted suggestions linked directly to an author.
3. **`Upvote` (Relationship)**: Enables users to vote on feature requests created by others.

---

## 🛠️ API Architecture & Endpoints

### 📡 Feature Request Endpoints

| HTTP Method | Endpoint | Description | Validation / Status |
| :--- | :--- | :--- | :--- |
| **POST** ➕ | `/api/requests` | Submit a new feature request | Requires `title` (min 3 chars), `description` (min 5 chars), and valid `authorId` (UUID). Returns `201 Created` or `404 Not Found` if author doesn't exist. |
| **GET** 📋 | `/api/requests` | Fetch all feature requests with author details | Returns `200 OK` with list of requests and embedded author objects. |

---

## 🛡️ Security & Quality Best Practices

- **Strict Input Validation:** Zod schemas validate every incoming request body (`req.body`) before business logic executes.
- **Type-Safe Architecture:** Full ESM setup using `import type` guarantees complete compile-time safety across Express middlewares and Prisma queries.
- **Centralized Error Handling:** Global Express middleware intercepts uncaught runtime exceptions to prevent process crashes and return structured JSON responses.
- **Relational Integrity:** PostgreSQL foreign-key constraints managed via Prisma ensure orphaned requests cannot be created without a valid `User`.

---

## 📐 Entity-Relationship Diagram (ERD)

```text
+-----------------------+           +-----------------------+
|         User          |           |    FeatureRequest     |
+-----------------------+           +-----------------------+
| id (PK, UUID)         | 1       * | id (PK, UUID)         |
| email (Unique)        |<--------- | authorId (FK)         |
| name                  |           | title                 |
| createdAt             |           | description           |
+-----------------------+           | createdAt             |
           ^                        +-----------------------+
           |                                   ^
           +========== (Upvoted By) ===========+
                    (Many-to-Many)


                    Tech Stack
Runtime: Node.js (v24 LTS, ESM Mode)

Framework: Express.js

Language: TypeScript

Database & ORM: PostgreSQL & Prisma v5.19.1

Validation: Zod

Execution/Dev Tools: tsx watch



