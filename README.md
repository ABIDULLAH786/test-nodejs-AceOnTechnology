# **Node.js Application README**

# Overview

This is a Node.js application that runs on http://localhost:4545/. It provides various endpoints for users to perform CRUD operations on a database.

<br>

# Prerequisites

Before running the application, please ensure that you have the following software installed on your computer:

- Node.js (version X.X.X) 
- NPM (version X.X.X) 

<br>

# Getting Started

To get started with the application, follow these steps:

- Clone the repository to your local machine.
- Open a terminal window and navigate to the root directory of the application.
- Run `npm install` to install all dependencies.
- Run `npm start` to start the application.
- Open a web browser and navigate to `http://localhost:4545/`.

<br>

# API Endpoints

The following API endpoints are available:

`POST users/` - create new user.

`GET users/` - Get all users.

`GET users/:id` - Retrieves single user profile from.

`PUT users/:id` - Updates an existing user.

`DELETE users/:id` - Deletes a user.

<br>

# Error Handling

If an error occurs, the API will return an error response in JSON format. Please refer to the [API documentation](./APIDocumentation.md) for the list of possible error responses and their meanings.

# License

This project is licensed under the MIT License.
