# FeedMark Backend

Express.js REST API for the FeedMark marking system.

## Tech Stack
- **Node.js** - Runtime environment
- **Express** - Web framework
- **SQLite** - Database (development)
- **dotenv** - Environment configuration

## Setup

### Prerequisites
- Node.js v18 or higher
- npm

### Installation
```bash
# Install dependencies
npm install

# Create .env file with:
PORT=5001
NODE_ENV=development
DATABASE_PATH=./feedmark.db

# Run development server
npm run dev
```

## API Endpoints

### Health Check
- `GET /` - Basic API status
- `GET /api/health` - Detailed health check

### Assignments (Coming Soon)
- `POST /api/assignments` - Create assignment
- `GET /api/assignments` - List assignments
- `GET /api/assignments/:id` - Get assignment details

## Project Status
**In Development** - Core features being implemented

## Current Progress
- ✅ Express server setup
- ✅ Basic routing
- ⏳ Database integration
- ⏳ Assignment CRUD operations
- ⏳ Feedback system