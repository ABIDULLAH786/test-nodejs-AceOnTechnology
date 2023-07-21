# API Documentation

## Introduction

This API documentation provides details about the available endpoints and their functionalities for managing user data. The API allows creating, retrieving, updating, and deleting user profiles. Additionally, there is an endpoint to read a test file with lorem text.

**Base URL**: `localhost:4545`

## Endpoints

### 1. POST `/users`

**Description**: Creates a new user.

**Request**:
```json
POST /users/

Body:
{
  "firstName": "AL",
  "lastName": "text",
  "age": 30,
  "email": "john.doe@example.com",
  "phone": "+1 555 123 4567",
  "username": "johndoe"
}
```

**Response**:
```json
Status: 201 Created

{
  "message": "User created successfully",
  "data": {
    "id": 11,
    "firstName": "AL",
    "lastName": "text",
    "age": 30,
    "email": "john.doe@example.com",
    "phone": "+1 555 123 4567",
    "username": "johndoe"
  }
}
```

### 2. GET `/users`

**Description**: Get all users.

**Request**:
```json
GET /users/
```

**Response**:
```json
Status: 201 OK

{
  "message": "User data Fetched Successfully",
  "data": [
    {
      "id": 1,
      "firstName": "Terry",
      "lastName": "Medhurst",
      "age": 50,
      "email": "atuny0@sohu.com",
      "phone": "+63 791 675 8914",
      "username": "atuny0"
    },
    ...
  ]
}
```

### 3. GET `/users/:id`

**Description**: Retrieves a single user profile.

**Request**:
```json
GET /users/1
```

**Response**:
```json
Status: 200 OK

{
  "message": "User data fetched successfully",
  "data": {
    "id": 1,
    "firstName": "Terry",
    "lastName": "Medhurst",
    "age": 50,
    "email": "atuny0@sohu.com",
    "phone": "+63 791 675 8914",
    "username": "atuny0"
  }
}
```

### 4. PUT `/users/:id`

**Description**: Updates an existing user with the specified ID.

**Request**:
```json
PUT /users/1

Body:
{
  "firstName": "UpdatedName",
  "lastName": "UpdatedLastName",
  "age": 40,
  "email": "updated.email@example.com",
  "phone": "+1 555 987 6543",
  "username": "updated_username"
}
```

**Response**:
```json
Status: 200 OK

{
  "message": "User updated successfully",
  "data": {
    "id": 1,
    "firstName": "UpdatedName",
    "lastName": "UpdatedLastName",
    "age": 40,
    "email": "updated.email@example.com",
    "phone": "+1 555 987 6543",
    "username": "updated_username"
  }
}
```

### 5. DELETE `/users/:id`

**Description**: Deletes an existing user with the specified ID.

**Request**:
```json
DELETE /users/1
```

**Response**:
```json
Status: 200 OK

{
  "message": "User profile deleted successfully"
}
```

### 6. GET `/read-file`

**Description**: Reads the test file with lorem text.

**Request**:
```json
GET /read-file
```

**Response**:
```json
Status: 200 OK

File Contents (Example):
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat lorem eu velit posuere, non viverra odio vestibulum. Nulla in nibh tincidunt, blandit orci nec, rhoncus odio. Integer ultrices enim in nisl scelerisque, ac elementum elit tincidunt. Integer ac euismod mauris. Integer faucibus massa id mauris consequat, eu ullamcorper dui tristique. Vivamus ac augue vel mi consequat sollicitudin eu ut purus. Sed non vestibulum massa. Vivamus tincidunt, erat a bibendum egestas, nisi elit cursus purus, eget tincidunt mauris arcu eu nisi."
```

## Conclusion

This API allows you to manage user data effectively. You can create, retrieve, update, and delete user profiles using the provided endpoints. Additionally, you can access a test file with lorem text using the specific endpoint. Please refer to the documentation for further information on how to use each endpoint correctly. If you encounter any issues or have any questions, feel free to reach out for support. Happy coding!