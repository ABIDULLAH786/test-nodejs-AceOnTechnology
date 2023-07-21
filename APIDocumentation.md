# **API Documentation**


# Register User

Registers a new user account.

**URL**: _http://localhost:5050//api/v1/users/register/_

**Method**: `POST`

> ## Request

### Headers

This endpoint does not require any headers.

### Body


| Name     | Type   | Required | Description               |
| -------- | ------ | -------- | ------------------------- |
| name     | string | Required | The name of the user.     |
| email    | string | Required | The email of the user.    |
| password | string | Required | The password of the user. |

<br>
Example request body:

```json
{
  "name": "abid",
  "email": "abid@gmail.com",
  "password": "abid123"
}
```
<br>

> ## Response

Example success response:

```json
{
  "message": "Account successfully created"
}
```

Example error response:

```json
{
  "error": true,
  "message": "Invalid Data"
}
```
<br>

> ## Response Codes


| Code | Description     |
| ---- | --------------- |
| 200  | Success         |
| 201  | Created success |
| 400  | Bad Request     |
| 500  | Server Error    |
<br>

<hr>
<br>

<!-- login user API -->

# Login User

This API endpoint is used to authenticate the user by generating an access token if the provided email and password are valid. The request is sent using the POST method.

**URL**: _http://localhost:4545/api/v1/users/login_

**Method**: `POST`

<br>

> ## Request
<br>

### Headers

This endpoint does not require any headers.
<br>

### Body

---

| Parameter | Required | Description                                  |
| --------- | -------- | -------------------------------------------- |
| email     | Yes      | The email of the user who wants to login.    |
| password  | Yes      | The password of the user who wants to login. |

---

Example request body:

```json
{
  "email": "abid@gmail.com",
  "password": "abid123"
}
```
<br>

> ## Response

Example success response:

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjA4YzE2NjNkNDU0OGIyNDVkOTc4NiIsImlhdCI6MTY4NDA1MDA4MSwiZXhwIjoxNjg0MDUwNjgxfQ.C0XiJiCHbyWyTqT_5uFlCR7Ug8_91AoBhj-sfrzRZOs",
  "id": "64608c1663d4548b245d9786",
  "message": "Login Done"
}
```

Example error response:

```json
{
  "error": true,
  "message": "Invalid user Data"
}
```
<br>

> ## Response Codes

| Code | Description  |
| ---- | ------------ |
| 202  | Accepted     |
| 200  | Success      |
| 404  | Not Found    |
| 500  | Server Error |

<br>

<hr>
<br>

<!-- Get user Profile API -->

# Get User Profile Data

This API endpoint is used to get the profile information of a user with a given ID. The request is sent using the GET method, where the `{id}` parameter is replaced with the unique identifier of the user whose profile information is requested.

**URL**: \_`http://localhost:5050/api/v1/users/profile/:id`

**Method**: `GET`

<br>

> ## Request

### Headers

Request Header Parameters

| Parameter     | Required | Description                                            |
| ------------- | -------- | ------------------------------------------------------ |
| Authorization | Yes      | The OAuth 2.0 access token for the authenticated user. |



### Body

This endpoint does not require any body as we are sending the id as parameter.

Example request:

```json
curl --location --globoff 'http://localhost:5050/api/v1/profile/64608c1663d4548b245d9786}' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjA4YzE2NjNkNDU0OGIyNDVkOTc4NiIsImlhdCI6MTY4NDA1MDA4MSwiZXhwIjoxNjg0MDUwNjgxfQ.C0XiJiCHbyWyTqT_5uFlCR7Ug8_91AoBhj-sfrzRZOs'
```
<br>

> ## Response

Example success response:
If the request is successful, the API returns a JSON response containing the following parameters:

```json
{
  "message": "Data Fetched Successfully",
  "data": {
    "name": "abid",
    "email": "abid@gmail.com"
  }
}
```

Example error response:
If the access token is invalid or has expired, the API returns an error response with the appropriate message.

```json
{
  "error": true,
  "message": "JSON Web Token is invalid"
}
```

```json
{
  "error": true,
  "message": "JSON Web Token is expired, login again"
}
```
<br>

> ## Response Codes


| Code | Description  |
| ---- | ------------ |
| 200  | Success      |
| 404  | Not Found  |
| 500  | Server Error |
<br>

<hr>
<br>

<!-- Update Profile API -->

# Update User Profile

Updates the authenticated user's profile information.

**URL**: _http://localhost:5050//api/v1/users/profile/:id/_

**Method**: `PUT`
<br>

> ## Request

### Headers

| Name          | Type   | Required | Description                                                               |
| ------------- | ------ | -------- | ------------------------------------------------------------------------- |
| Authorization | string | yes | Token obtained from the authentication endpoint using OAuth 2.0 with JWT. |


### Body

Example request:
```json
curl --location --globoff 'http://localhost:5050/api/v1/profile/64608c1663d4548b245d9786}' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjA4YzE2NjNkNDU0OGIyNDVkOTc4NiIsImlhdCI6MTY4NDA1MDA4MSwiZXhwIjoxNjg0MDUwNjgxfQ.C0XiJiCHbyWyTqT_5uFlCR7Ug8_91AoBhj-sfrzRZOs'

```
body
```json
{
  "name": "abid  123",
  "email": "abid@gmail.com",
}
```
<br>

> ## Response

Example success response:

```json
{
  "message": "Profile Updated Successfully",
  "data": {
    "name": "abid  123",
    "email": "abid@gmail.com"
  }
}
```

Example error response:

```json
{
  "error": true,
  "message": "Invalid Data"
}
```
<br>

> ## Response Codes

| Code | Description  |
| ---- | ------------ |
| 200  | Success      |
| 400  | Not Found    |
| 500  | Server Error |
<br>

<hr>
<br>

<!-- Delete API -->

# Delete User Account

Deletes the authenticated user's account.

**URL**: _http://localhost:5050/api/v1/users/profile/:id/_

**Method**: `DELETE`
<br>

> ## Request

### Headers

| Name          | Type   | Required | Description                                                               |
| ------------- | ------ | -------- | ------------------------------------------------------------------------- |
| Authorization | string | yes | Token obtained from the authentication endpoint using OAuth 2.0 with JWT. |

### Body

This endpoint does not require any body as we are sending the id as parameter.

Example request:

```json
curl --location --globoff 'http://localhost:5050/api/v1/profile/64608c1663d4548b245d9786}' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjA4YzE2NjNkNDU0OGIyNDVkOTc4NiIsImlhdCI6MTY4NDA1MDA4MSwiZXhwIjoxNjg0MDUwNjgxfQ.C0XiJiCHbyWyTqT_5uFlCR7Ug8_91AoBhj-sfrzRZOs'
```
<br>

> ## Response

```json
{
  "message": "Account Deleted Successfully"
}
```

Example error response:

```json
{
  "error": true,
  "message": "Profile not Deleted"
}
```
<br>

> ## Response Codes

| Code | Description  |
| ---- | ------------ |
| 200  | Success      |
| 400  | Not Found    |
| 500  | Server Error |

