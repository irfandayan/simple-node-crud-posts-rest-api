import express from "express";
const router = express.Router();

// Routes
// home page
router.get("/", async (req, res) => {
  res.send(`<h1>Please use postman to make requests to get posts</h1>`);
});

export default router;
