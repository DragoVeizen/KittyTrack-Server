
# 🐱 KittyTrack Backend

A **NestJS** backend for KittyTrack—a group expense-sharing app inspired by KittySplit. It includes smart LLM-based input parsing and runs on PostgreSQL via Docker.

-----

## ⚙️ Features

  * **Full REST API**: Manage users, groups, expenses, and shares, with simplified settlements and expense versioning.
  * **LLM Endpoint**: Convert natural language descriptions into structured expense data.
  * **PostgreSQL Database**: Robust data storage for all your expense-sharing needs.
  * **Dockerized Development Environment**: Easy setup and consistent development across different machines.

-----

## 🧰 Tech Stack

  * **NestJS** (TypeScript)
  * **PostgreSQL**
  * **Docker & Docker Compose**
  * **OpenAI API** or similar LLM
  * **Prisma** or **TypeORM** (your choice for ORM)

-----

## 🚀 Getting Started

### 1\. Clone and Install

```bash
git clone https://github.com/yourusername/kittytrack-backend.git
cd kittytrack-backend
```

### 2\. Create `.env` File

Create a `.env` file in the project root with the following variables:

```
DATABASE_URL=postgresql://user:password@db:5432/kittytrack
OPENAI_API_KEY=your_openai_key
```

### 3\. Run with Docker

```bash
docker-compose up --build
```

The API will be available at `http://localhost:3000`.
The PostgreSQL database will be accessible at `localhost:5432`.

-----

## 🧠 LLM API (Example)

You can use the LLM endpoint to parse natural language into structured expense data.

**POST** `/llm/parse-expense`

**Request Body:**

```json
{
  "prompt": "Sarah paid 45 euros for drinks with Mike and Emma"
}
```

**Response:**

```json
{
  "paid_by": 1,
  "total_amount": 45,
  "participants": [1, 2, 3],
  "split": {
    "1": 0.33,
    "2": 0.33,
    "3": 0.33
  }
}
```

-----

## 🗃️ Database Design

The database schema includes tables for **users**, **groups**, **expenses**, **shares**, and **settlements**. It also supports **expense versioning** to maintain an editing history.

For detailed relationship mapping, refer to the `/prisma/schema.prisma` file (if using Prisma) or the migrations folder (if using TypeORM).

-----

## 🧪 Running Tests

```bash
npm run test
```

-----

## 📦 Production

For deploying to a production environment:

```bash
docker-compose -f docker-compose.prod.yml up
```

Alternatively, you can deploy to platforms like:

  * Render / Railway / Fly.io
  * AWS ECS / DigitalOcean App Platform

-----

## 📄 License

This project is licensed under the **MIT License**. Contributions are welcome\!
