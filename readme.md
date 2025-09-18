
# restful_users_api_assignment

A simple RESTful API using Node.js and Express to manage users for the Module-2 assignment.

## Requirements covered
- Routes: GET /users, GET /users/:id, POST /user, PUT /user/:id, DELETE /user/:id
- Middleware: request logging (method, URL, status), validation for POST/PUT (firstName, lastName, hobby)
- Error handling: 200/201/400/404 with meaningful messages
- Data source: in-memory array with a sample user

## Setup
1) Install Node.js (LTS recommended)
2) Install dependencies:
   npm install
3) Start the server:
   npm start
4) Base URL: http://localhost:3000

## Test (for screenshots)
- GET /users → Expect array and 200
- GET /users/1 → Expect user or 404
- POST /user (JSON body) → Expect 201 and created user
- PUT /user/1 (JSON body) → Expect 200 and updated user or 404
- DELETE /user/1 → Expect 200 and deleted user or 404

Example JSON body for POST/PUT:
{
  "firstName": "John",
  "lastName": "Doe",
  "hobby": "Reading"
}

## How to run application
Run following command inside terminal with github cloning
git clone https://github.com/hrithikkeshri/restful_users_api_assignment.git
cd RestFullApi
npm install
npm run dev
Do following steps with zip file
step-1 write click on RestFullApi.zip
step-2 click on extract here
step-3 open extract file with vscode
step-4 Run following command inside terminal
npm install
npm run dev
