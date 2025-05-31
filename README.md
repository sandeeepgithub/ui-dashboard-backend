# 🧑‍💼 Job Listing API

A simple Node.js + Express API for retrieving job listings with optional filters.

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. ENV

```bash
Add the env provided in mail
```

### 3. Start the Server

```bash
npm start
```

The app runs at:

```
http://localhost:8000
```

---

## 📘 API Endpoint

### `GET /api/jobs`

Retrieve job listings with optional filters.

### 🔍 Query Parameters

| Parameter        | Description                                     | Example                     |
| ---------------- | ----------------------------------------------- | --------------------------- |
| `title`          | Filter by job title (partial, case-insensitive) | `?title=developer`          |
| `profile`        | Filter by profile (partial, case-insensitive)   | `?profile=react`            |
| `minExp`         | Minimum experience in years (number)            | `?minExp=2`                 |
| `maxExp`         | Maximum experience in years (number)            | `?maxExp=5`                 |
| `employmentType` | Filter by employment type (partial match)       | `?employmentType=full-time` |

You can combine multiple filters:

```
GET /api/jobs?title=engineer&minExp=1&maxExp=3&employmentType=part
```

---

## ✅ Example Request

```http
GET http://localhost:8000/api/jobs?title=developer&minExp=2
```

## 📦 Example Response

```json
{
  "message": "success",
  "data": [
    {
      "experience": 5,
      "salary": {
        "currency": "INR"
      },
      "applicationsReceived": 0,
      "hired": 0,
      "clicks": 0,
      "underProcess": 0,
      "_id": "683a8f9b76b15cf77e",
      "title": "Product Designer",
      "profile": "UI/UX",
      "employmentType": "Remote",
      "status": "active",
      "description": "Lead the design system for our core SaaS product.",
      "createdAt": "2025-05-30T09:45:00.000Z",
      "stats": {
        "applied": 20,
        "clicked": 50,
        "underProcess": 5
      },
      "isDraft": false,
      "postedAt": "2025-05-31T05:51:53.291Z"
    }
  ],
  "total": 5
}
```

## ❌ Error Response (Invalid Experience)

```json
{
  "message": "Invalid minimum or maximum experience value"
}
```
