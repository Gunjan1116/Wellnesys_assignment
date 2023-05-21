const express=require("express");
const { logger } = require("./middlewares/loggerMiddleware");


const port=5000;
const app=express();

// Middleware
app.use(express.json());
app.use(logger)

//Routes
app.get("/",(req,res)=>{
    res.status(200).json({"message":"welcome to home page!!"})
})

// Start the server
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
