const express = require("express");
const connectDb = require("./config/db");
const User=require("./models/user")
const app = express();

app.use(express.json());

app.post("/signup",async(req,res)=>{

  const user=new User(req.body);

  const obj=await user.save();
  console.log(obj);
  res.send("user added successfuly");
  
})

app.get("/all",async(req,res)=>{
  const data=await User.find({});
  res.send(data);
})

connectDb().then(() =>
  app.listen(3000, () =>
    console.log("Server is successfully listening to port 3000")
  )
);
