const express = require("express");
const connectDb = require("./config/db");
const User = require("./models/user");
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    const obj = await user.save();
    res.send("user added successfully");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.get("/user", async (req, res) => {
  try {
    const userEmail = req.body.emailId;
    const user = await User.findOne({ emailId: userEmail });
    if (user) res.send(user);
    else res.status(404).send("No user found");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.get("/feed", async (req, res) => {
  try {
    const data = await User.find({});
    res.send(data);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.patch("/user", async (req, res) => {
  try {
    const data = req.body;
    const user = await User.findByIdAndUpdate({ _id: data._id }, data, {
      returnDocument: "after",
    });
    if (user) res.send("user updated");
    else res.status(404).send("No user found");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/user", async (req, res) => {
  try {
    const userId = req.body.userId;
    const user = await User.findByIdAndDelete(userId);
    if (user) res.send("user deleted");
    else res.status(404).send("No user found");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

connectDb().then(() =>
  app.listen(3000, () =>
    console.log("Server is successfully listening to port 3000")
  )
);
