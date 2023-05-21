const express=require("express");


const port=5000;
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("welcome to home page!!")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
