# User Management API

## Project Description

This project provides a backend API for managing user data. The API endpoints support the following operations:

* **Create a new user**
* **Fetch a random user**
* **Check if a user exists**
* **List users above a certain age**
* **List all user names**

## Technologies

* Node.js
* Express.js
* MongoDB
* Mongoose

## Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/pintu544/User-Management-API

2. **Install Dependencies:**
```bash
cd user-management-api
npm install
npm start


3. **API Endpoints:**
Endpoint	        Method	Description
/api/users	        POST	Creates a new user
/api/users/random	GET	    Returns data of a random user
/api/users/exists	POST	Checks if a user with the given name exists
/api/users/above-age?age=X	GET	Returns users whose age is greater than or equal to the value X
/api/users/names	GET	    Returns an array of all user names