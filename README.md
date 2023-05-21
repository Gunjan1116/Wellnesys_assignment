# Wellnesys_assignment
## Steps Followed:

- Setting up the Node.js project: Created a new Node.js project using npm and initialized it with a package.json file.
- Installing dependencies: Installed the necessary dependencies such as Express and nodemon.
- File structure: Created separate files for the main server, middleware, and user routes to maintain a modular structure.
- Implementing the server: Set up the basic Express server that listens on a specified port.
- Implementing routes: Added routes for handling the root URL ("/") and user-related operations ("/users").
- Implementing middleware: Added a logging middleware to log request information such as method,date,route accessed and time taken to get back the response.
- Error handling: Implemented error handling middleware for invalid routes and server errors.
- Testing: Tested the application using an API testing tool using Postman to ensure the routes and responses are working correctly.

## Challenges Faced:

- Error handling: Implementing error handling for invalid routes and server errors required careful consideration and testing to ensure proper functionality.

- File operations: Working with file operations to read and write user data from a JSON file required attention to error handling and file management.

## Lessons Learned:

- Status code: I learned about the HTTP status code 409, which is used to indicate a conflict when a user is already registered. This status code is suitable for situations where a request cannot be completed due to a conflict with the current state of the target resource.
- Error handling: Proper error handling is essential to handle invalid routes and server errors gracefully and provide meaningful responses to the clients.
- File operations: Working with file operations requires attention to error handling and file management, ensuring that data is read and written correctly.

**Overall, the assignment helped in gaining hands-on experience with building a web application using Node.js and Express, understanding the importance of middleware and error handling, and implementing basic routing and file operations. It provided insights into creating a structured and maintainable codebase and testing the application to ensure its proper functionality.**

## How to Use

- Clone the repository: Clone the repository containing the code to your local system.
- Install dependencies: Open the terminal and navigate to the project directory. Run the command **npm install** to install all the dependencies mentioned in the package.json file:
- Start the server: In the terminal, run the command  **npm run server** to start the server:
- Open an API testing tool like Postman.
    - Use the tool to send HTTP requests to the server and test the routes.
    - Send a GET request to http://localhost:5000/ to see the welcome message.
    - Send a POST request to http://localhost:5000/users with the required user information in the request body. The request body should follow this structure:
        >{
            "name": "abc",
            "email": "abc@gmail.com",
            "age": 25,
            "gender": "Male",
            "city": "Delhi"
        }
    - Send a GET request to http://localhost:5000/users to retrieve all users.
- Check the logs: After making requests, you can check the logger.txt log file to see the logged request information.
