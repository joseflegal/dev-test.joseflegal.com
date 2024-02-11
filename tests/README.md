# Testing


1. API testing: I tested each of the routes below

  GET    http://localhost:3000/entities   - pass
  GET    http://localhost:3000/entities/[id]  - pass
  POST   http://localhost:3000/entities - fail: creates a new record but only adds the id key, doesn't add the property key
  PUT    http://localhost:3000/entities/[id] - fail: doesn't add the property key
  DELETE http://localhost:3000/entities/[id] - pass


2. Cypress test : I've added the qa_test.js file to the spec folder to satisfy the expectations of what was needed and also created .env.production to ensure the cypress testing can still hit the server