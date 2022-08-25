import express from "express";

import {
  getAllPosts,
  submitPost,
  getSpecificPost,
  deleteSpecificPost,
  updatePost,
} from "../controllers/posts.js";

const router = express.Router();

// Routes
// Get all the posts
router.get("/", getAllPosts);

// Submit the post
router.post("/", submitPost);

// Get specific post
router.get("/:postId", getSpecificPost);

// Delete specific post
router.delete("/:postId", deleteSpecificPost);

// Update a post
router.patch("/:postId", updatePost);

export default router;
