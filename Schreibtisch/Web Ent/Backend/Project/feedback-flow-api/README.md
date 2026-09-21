# 🌊 FeedbackFlow API

A modular, secure Node.js & Express REST API designed for embedded feature request boards. This API allows project owners to manage projects and gather user feature requests.

---

## 🗓️ Daily Standup & Progress Log

#### 🌅 Morning Plan & Risk Assessment
* **Top 3 Tasks Planned:**
  1. Set up the modular folder structure (`src/`) and configure TypeScript (`tsconfig.json`).
  2. Create Zod validation schemas for `Project` and `FeatureRequest` entities.
  3. Implement Express routes and controllers for project creation and retrieval.
* **Most Obvious Obstacle/Risk:** 
  * Time management before 3:00 PM due to attending an inline language course today.
* **Risk Resolution Plan:** 
  * Break development into small, focused micro-tasks (like defining schemas first) so progress continues smoothly around the class schedule.

---

### 🌇 End-of-Day Review (After ILP)
* **Tasks Completed:**
  * Created GitHub repository and established local project configuration with Node.js and TypeScript.
  * Designed the modular folder layout (`config`, `controllers`, `routes`, `schemas`).
  * Defined API architecture, endpoint specs, and Entity-Relationship Diagram (ERD).
* **Biggest Lesson Learned:**
  * TypeScript types only validate code at compile time, which is why runtime validation libraries like Zod are essential for securing live API requests.
* **Top Priority for Tomorrow:**
  * Connect the database layer, implement the remaining `FeatureRequest` routes, and test end-to-end request flows.

---

## 📌 Project Overview & Scope

FeedbackFlow provides a light backend for SaaS developers to collect user feedback. The system manages two main related entities:
1. **`Project`**: Represents an app or service created by a developer.
2. **`FeatureRequest`**: Represents user-submitted suggestions linked directly to a specific `Project`.

This API is built using **Node.js**, **Express**, **TypeScript/JavaScript**, and **Zod** for runtime input validation and API security.

---

## 🎯 Target Audience & Real-World Application

- **SaaS Developers:** Need a simple way to embed a feedback widget into their web apps.
- **Game Developers:** Can use this exact architecture to gather player feedback, bug reports, or community feature votes for games!

---

## 📐 Entity-Relationship Diagram (ERD)

+-------------------+           +-----------------------+
|      Project      |           |    FeatureRequest     |
+-------------------+           +-----------------------+
| id (PK)           | 1       * | id (PK)               |
| name              |<---------| projectId (FK)        |
| description       |           | title                 |
| createdAt         |           | description           |
+-------------------+           | votes                 |
| status                |
| createdAt             |
+-----------------------+

## 🛠️ Planned API Endpoints

### 1. Project Endpoints
* **`POST /api/projects`**
  * **Description:** Create a new project board.
  * **Validation:** Requires valid `name` (min 3 chars).
* **`GET /api/projects/:id`**
  * **Description:** Retrieve a project and all its associated feature requests.

### 2. Feature Request Endpoints
* **`POST /api/projects/:projectId/requests`**
  * **Description:** Submit a feature request for a specific project.
  * **Validation:** Requires `title` (min 3 chars) and `description` (min 10 chars).
* **`PATCH /api/requests/:id/vote`**
  * **Description:** Upvote a specific feature request.

---

## 🛡️ Security & Quality Best Practices

- **Strict Type Validation:** Zod schemas validate every incoming request body (`req.body`) before business logic executes.
- **Sanitized Inputs:** Prevents injection attacks and invalid data types.
- **Modular Architecture:** Clean separation between Routes, Controllers, Schemas, and Database operations.
- **Error Handling:** Returns structured HTTP status codes (`400 Bad Request`, `404 Not Found`, `500 Internal Server Error`).

---

## 🚀 Setup & Installation (Local Development)

1. Clone the repository:
   ```bash
   git clone git@github.com:Max-B80/feedback-flow-api.git