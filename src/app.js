const express= require("express");

const app=express();


app.get("/user/:random1/:random2",(req,res)=>{
    const query=req.query;
    res.send({
        ...query,
        ...req.params,
        fName:"Happy",
        lName:"Kumar"
    })
})

app.post("/user",(req,res)=>{
    res.send("Data saved successfully");
})

app.delete("/user",(req,res)=>{
    res.send("Data deleted successfully");
})

app.use("/test",(req,res)=>{
    res.send("Hello from server");
})

app.listen(3000,()=>console.log("Server is successfully listening to port 3000")
);