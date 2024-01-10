const express = require("express");
const app = express();
const port = 8000;
const connectDB = require("./db/dbConnection.js");
const User = require("./db/User.js");
const cors = require("cors");
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

connectDB();
app.listen(port, () => {
  console.log("Server is listening at port 8000");
});
