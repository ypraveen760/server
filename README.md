# Task Management

## Description

Task Management Application backend using Node.js and Express.js with full CRUD
functionality. This task evaluates your skills in RESTful API design, database integration, and
handling basic server-side logic.

## Features

- ErrorHandling middleware
- Database integration
- API endpoints
- Middleware

## Tech Stack

- **Programming Language**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Others**:
  - Mongoose
  - Dotenv

## Installation

Steps to set up the project locally:

```bash
# Clone the repository
git clone https://github.com/ypraveen760/server.git

# Navigate into the project directory
cd server

# Install dependencies
npm install
```

## Configuration

- Rename .env copy to .env and past DBString to CONNECTION_STRING

# Start the development server

npm run dev

# For production

npm start

# Folder Structure

project-root/
│
├── src/
│ ├── models/ # Mongoose models
│ ├── routes/ # Route handlers
│ ├── middleware/ # Middleware functions
│ ├── utils/ # Utility functions
│ └── app.js # Express app setup and Entry point
│
├── .env # Environment variables
├── .gitignore # Git ignore rules
├── package.json # Dependencies and scripts
├── README.md # Project documentation
└── LICENSE # License file

## APIs DOCUMENT

## API ENDPOINTS

Base URL
http://localhost:3000/api

# POST /tasks

- Description

  - Create a new task.

- Request Body:
  {
  "title": "Task Title",
  "description": "Task Description",
  "status": "pending" // One of "pending", "inProgress", "completed"
  }

- Response:
  {
  "id": "task_id",
  "message": "Task Created Success"
  }

- Status Codes:

  - 200 OK – Task created successfully.
  - 400 Bad Request – Invalid input.

# GET /tasks

- Description

  - Get a list of tasks with pagination and optional filtering by status or search term.

- Query Parameters:

  - status (optional) – Filter tasks by status. Possible values: pending, inProgress, completed.
  - page (optional) – The page number to fetch (default: 1).
  - limit (optional) – The number of tasks per page (default: 10, max: 10).
  - search (optional) – Search tasks by title.
  - Example Request:
    - GET /tasks?page=1&limit=5&status=pending&search=homepage

- Response:
  [
  {
  "id": "task_id",
  "title": "Sample Task",
  "description": "Description of the task",
  "status": "pending"
  },
  {
  "id": "task_id",
  "title": "Another Task",
  "description": "Description of another task",
  "status": "inProgress"
  }
  ]

- Status Codes:

  - 200 OK – Successfully fetched tasks.
  - 400 Bad Request – Invalid parameters.

# GET /tasks/:id

- Description

  - Get a specific task by its ID.

- URL Parameter:

  - id (required) – The ID of the task to fetch.

- Example Request:

  - GET /tasks/605c72ef153207001f7767e

- Response:
  {
  "id": "task_id",
  "title": "Sample Task",
  "description": "Description of the task",
  "status": "pending"
  }

- Status Codes:

  - 200 OK – Task found and returned.
  - 400 Bad Request – Invalid task ID.
  - 404 Not Found – Task not found.

# PUT /tasks/:id

- Description
  Update an existing task by its ID.

- URL Parameter:

  - id (required) – The ID of the task to update.

- Request Body:
  {
  "title": "Updated Task Title",
  "description": "Updated task description",
  "status": "inProgress" // Optional
  }

- Example Request:

  - PUT /tasks/605c72ef153207001f7767e

- Response:
  {
  "id": "task_id",
  "title": "Updated Task Title",
  "description": "Updated task description",
  "status": "inProgress"
  }

- Status Codes:

  - 200 OK – Task updated successfully.
  - 400 Bad Request – Invalid task ID or input data.
  - 404 Not Found – Task not found.

# DELETE /tasks/:id

- Description

  - Delete a task by its ID.

- URL Parameter:

  - id (required) – The ID of the task to delete.

- Example Request:

  - DELETE /tasks/605c72ef153207001f7767e

- Response:
  {
  "message": "Task Deleted Successfully",
  "deleteID": "task_id"
  }
- Status Codes:

  - 200 OK – Task deleted successfully.
  - 400 Bad Request – Invalid task ID.
  - 404 Not Found – Task not found.

# Error Handling

- Example Error Response:
  {
  "message": "Invalid Task Id",
  "status": 400
  }
- Error Status Codes:
  - 400 Bad Request – Invalid input or parameter.
  - 404 Not Found – Resource not found.
  - 500 Internal Server Error – Unexpected error.
