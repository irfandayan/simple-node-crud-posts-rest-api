import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import postsRoutes from "./routes/posts.js";

const app = express();
app.use(express.json());

// Middlewares
// app.use("/posts", () => {
//   console.log("This is middleware running");
// });

app.use("/posts", postsRoutes);

// Connect to DB
dotenv.config();
mongoose.connect(process.env.DB_CONNECT, () => {
  console.log("connected to DB!");
});

app.listen(3000, () => console.log("Server Running...."));
