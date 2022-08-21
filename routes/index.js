import express from "express";
const router = express.Router();

// Routes
// home page
router.get("/", async (req, res) => {
  res.send(
    `<h1>This is an API so please use postman to make requests to get posts</h1>`
  );
});

export default router;
