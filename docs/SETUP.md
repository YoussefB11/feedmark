# FeedMark Setup Instructions

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

## Installation

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## Environment Variables
Create a `.env` file in the backend directory:
```
PORT=5000
DATABASE_URL=./feedmark.db
NODE_ENV=development
```

## Development Workflow
1. Backend runs on http://localhost:5001
2. Frontend runs on http://localhost:3000
3. Database file created automatically on first run

## Testing
- Unit tests: `npm test`
- API testing: Use Postman collection (coming soon)

*Note: This document will be updated as development progresses*
