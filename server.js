const express = require("express");
const { logger } = require("./middlewares/loggerMiddleware");
const { userRoute } = require("./routes/userRoute");


const port = 5000;
const app = express();

// Middleware
app.use(express.json());
app.use(logger)

//Routes
app.get("/", (req, res) => {
    res.status(200).json({ "message": "Welcome to home page!!" })
})
app.use("/users", userRoute)

//Middleware for error handling for invalid routes 
app.use((req, res, next) => {
    res.status(404).json({ "message": "Page not found!!" });
  });

//Middleware for error handling for internal server errors
app.use((err, req, res, next) => {
    res.status(500).json({
        "error": {
            "message": 'Internal Server Error',
        },
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
