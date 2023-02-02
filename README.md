# API Tango Challenge

This project provides an API that returns the Fibonacci number of a given number.

## Configuration

The project runs on port 80. If port 80 is already in use, you can change the PORT constant in server.ts to an unused port.

Before starting the project, make sure to install the dependencies.

## Scripts

You can run the following scripts using npm:

- `npm run start` to build the project and start the server.
- `npm run dev` to enter dev mode, where you can watch changes on the fly.
- `npm run test` to run the tests.

## Assumptions

The API is designed for small numbers, and performance may start to degrade for numbers greater than 40.

## Scalability

To improve the API, the following possibilities can be considered:

- Using a validation library such as Yup to handle input better.
- Implementing timeout middleware to handle requests that take too long.
- Creating a core class for API responses to standardize the responses.
- Adding a cache to store big Fibonacci numbers to improve performance.
- Adding eslint configuration to the project, to have only one coding style.
