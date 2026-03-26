# Brian, Cui - Portfolio

MERN Stack portfolio website.

## Features
- Responsive design with TailwindCSS
- MongoDB database
- RESTful API
- Scalable MVC architecture

## Setup

### Install dependencies
```bash
npm run install-all
```

### Configure MongoDB
Update `backend/.env` with your MongoDB URI

### Start application
```bash
npm start
```

Backend: http://localhost:5000
Frontend: http://localhost:3000

## Structure
```
backend/
  ├── config/         # Database configuration
  ├── controllers/    # Business logic
  ├── models/         # Mongoose schemas
  ├── routes/         # API routes
  └── server.js       # Entry point

frontend/
  ├── src/
  │   ├── components/ # Reusable components
  │   ├── pages/      # Page components
  │   └── services/   # API services
  └── public/
```
