import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import postsRoutes from "./routes/posts.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
// app.use("/posts", () => {
//   console.log("This is middleware running");
// });
app.use("/posts", postsRoutes);

// Connect to DB
dotenv.config();
mongoose.connect(process.env.DB_CONNECT, () => {
  console.log("connected to DB!");
});

app.listen(3000, () => console.log("Server Running on post 3000"));
