# Simple API (Express)

A simple RESTful API using Express.js with in-memory data, authentication middleware, validation, custom headers, and proper status codes.

## Requirements

- Node.js (v14+)
- npm

## Setup & API ROUTES

```bash
npm init -y
cd simple-api
npm i express
# copy files provided (middleware/auth.js, routes/items.js, app.js modifications)
node server.js

# API Routes

** Authorization: Bearer mysecrettoken **

GET all items : 
GET :- http://localhost:3000/api/items

GET item by ID : 
GET :- http://localhost:3000/api/items/id

POST create item : 
POST :-  http://localhost:3000/api/items
 "Authorization: Bearer mysecrettoken" 
   "Content-Type: application/json" 
  '{"name":"Orange","price":0.9}' 


Update Item by ID : 
PUT http://localhost:3000/api/items/id
 "Authorization: Bearer mysecrettoken"
   "Content-Type: application/json" 
  '{"price":1.5}'


Delete Item by ID :
DELETE -H "Authorization: Bearer mysecrettoken"
http://localhost:3000/api/items/id


