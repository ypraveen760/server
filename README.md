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
