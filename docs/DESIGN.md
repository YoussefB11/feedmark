# FeedMark System Design

## Technology Stack

### Frontend
- **React** - Component-based UI framework
  - Chosen for its strong ecosystem and reusable component architecture
  - Familiar from previous coursework
  - Good documentation and community support

### Backend
- **Node.js with Express** - RESTful API server
  - JavaScript across full stack reduces context switching
  - Express is lightweight and flexible
  - Good for rapid prototyping

### Database
- **SQLite** (development) / **PostgreSQL** (potential production)
  - SQLite: Simple setup, file-based, perfect for prototype
  - PostgreSQL: If time permits, migration path for scalability
  - Starting with SQLite for familiarity and speed

### Additional Tools
- **Git/GitHub** - Version control
- **VS Code** - Development environment
- **Postman** - API testing

## System Architecture

### High-Level Overview
```
┌─────────────┐         ┌─────────────┐         ┌─────────────┐
│   React     │ ◄─────► │   Express   │ ◄─────► │   SQLite    │
│  Frontend   │  HTTP   │   Backend   │   SQL   │  Database   │
└─────────────┘         └─────────────┘         └─────────────┘
```

### Key Components
1. **Assignment Manager** - CRUD operations for assignments
2. **Marking Scheme Builder** - Create criteria and rubrics
3. **Feedback Library** - Store and retrieve reusable comments
4. **Export Generator** - Canvas-compatible CSV output

## Database Schema (Draft)

### Tables
- **assignments** - Assignment details
- **sections** - Assignment sections/parts
- **criteria** - Individual marking criteria
- **feedback_comments** - Reusable feedback text
- **marks** - Student marks and selected feedback
