import express from "express";
import { users } from "./data/voters.js";

const app = express();

//
app.use(express.json());

app.get("/api/users", (req, res) => {
  res.json({ users });
});

app.post("/api/users/vote", (req, res) => {
  const data = req.body;
  const user = users.find((user) => user.idNumber === data.idNumber);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const canVote = user.age >= 18;
  if (canVote) {
    res.json({ message: "You are eligible to vote" });
  } else {
    res.json({ message: "You are not eligible to vote" });
  }
});

app.get("/api/users/:idNumber", (req, res) => {
  const user = users.find((user) => user.idNumber === req.params.idNumber);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json({ user });
});

app.get("/", (req, res) => {
  res.send("Welcome to Mimmy's API");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
