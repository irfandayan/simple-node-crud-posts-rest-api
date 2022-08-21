import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

// Routes
// home page
router.get("", async (req, res) => {
  res.send(`<h1>Please use postman to make request to get posts</h1>`);
});

// Routes
// Get all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: err });
  }
});

// Submit the post
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

// Get specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete specific post
router.delete("/:postId", async (req, res) => {
  try {
    console.log(req.body.postId);
    const removePost = await Post.remove({ _id: req.params.postId });
    res.json(removePost);
  } catch (error) {
    res.send({ message: error });
  }
});

// Update a post
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (error) {
    res.send({ message: error });
  }
});

export default router;
