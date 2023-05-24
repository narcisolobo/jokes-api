# Jokes API

## Major Differences
- I used the ES Module syntax for a unified approach to the front and back ends. All it takes is one additional property in the package.json.
- Connecting to the database is done in an async/await function.
- All controller functions use async/await as well - writing code this way feels more familiar to the beginner. It more closely resembles synchronous code.
- The routes file uses the router that's included with Express. The result is a very DRY, clean routes file.
- The server does not use the `urlencoded` middleware. All our requests have json bodies. `urlencoded` is for parsing HTML form data primarily.
- Finally, `app.listen()` is encapsulated in an async/await function along with the database connection function. This was done to handle any connection errors when attempting to spin up the server and/or when connecting to the database.