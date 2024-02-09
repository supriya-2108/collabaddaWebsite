const express = require("express");
const app = express();
const port = 8000;
const connectDB = require("./db/dbConnection.js");
const User = require("./db/User.js");
const cors = require("cors");
const axios = require('axios');
app.use(express.json());
app.use(cors());
app.post("/register", async (req, res) => {
  try {
    const { username, password ,email,number} = req.body;
    const user = new User({ username, password ,email,number});
    await user.save();
    res.status(201).json({ message: "Registration Successfull" });
  } catch (err) {
    res.status(500).json({ error: "Registration Failed" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    res.status(200).json({ message: "Login Successfull" });
  } catch (error) {
    res.status(500).json({ error: "Login Failed" });
  }
});

app.post("/instagramUser",async(req,res)=>{
  try{
    const {userName}=req.body;
    const response = await axios.get(`https://www.instagram.com/api/v1/users/web_profile_info/?username=${userName}`,{headers:{
      'user-agent':'Instagram 219.0.0.12.117 Android'
  }});
    res.send(response.data)
  } catch (error) {
    console.log({error})
    res.status(error.response ? error.response.status : 500).json({ error: error.message });
  }
})
connectDB();
app.listen(port, () => {
  console.log("Server is listening at port 8000");
});
