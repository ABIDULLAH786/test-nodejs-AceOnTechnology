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

`GET users/` - Returns a JSON array of user objects. You can hardcode an array of user objects in the script.

`GET users/:id` - Returns a JSON object of a user with the specified ID. If the user doesn't exist, return a 404 status code.

`POST users/` - Creates a new user. The request body should contain a JSON object with the user's data. Return the created user object with a 201 status code.

`PUT users/:id` - Updates an existing user with the specified ID. The request body should contain a JSON object with the updated user's data. If the user doesn't exist, return a 404 status code.

`DELETE users/:id` - Deletes an existing user with the specified ID. If the user doesn't exist, return a 404 status code. Return a 204 status code if the user is successfully deleted.

<br>

# Error Handling

If an error occurs, the API will return an error response in JSON format. Please refer to the [API documentation](./APIDocumentation.md) for the list of possible error responses and their meanings.

# License

This project is licensed under the MIT License.
