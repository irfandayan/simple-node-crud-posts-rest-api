import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

// Routes
router.get("/", (req, res) => {
  res.send("Welcome to postsx");
});

router.post("/", (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

export default router;
