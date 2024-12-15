# Basic Node.js and Express API

This repository contains a basic Node.js and Express application that provides an API for managing a list of voters. The application includes endpoints to fetch all voters, verify a voter's ID, and check if a voter is eligible to vote based on their age.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/basic-node-express-api.git
   ```

2. Navigate to the project directory

   ```bash
    cd basic-node-express-api
   ```

3. Install the dependencies
   ```bash
    npm install
   ```

## Running the Application

1. Start the server:
   The server will be running on http://localhost:3000.

## API Endpoints

1.  Get All Users

    - URL: /api/users
    - Method: GET
    - Response `{
"users": [
    {
    "idNumber": "12345",
    "name": "John Doe",
    "age": 30
    },
    ...
]
}`

2.  Verify Voter's Id

    - URL: /api/users/vote
    - Method: POST
    - Description: Verifies if a user is eligible to vote based on their ID number and age.
    - Request Body: `{
"idNumber": "12345"
}`

3.  Get User by ID - URL: /api/users/:idNumber - Method: GET - Description: Fetches a user by their ID number. - Response:
    If the user is found: `{
  "user": {
    "idNumber": "12345",
    "name": "John Doe",
    "age": 30
  }
}`

        If the user is not found: `{

    "message": "User not found"
    }`
