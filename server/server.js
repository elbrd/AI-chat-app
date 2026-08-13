import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";

import chatRouter from "./routes/chat.route.js";

// Config
const app = express();
const PORT = 8081;
dotenv.config();
mongoose.connect(process.env.CONNECTION_STRING);
const database = mongoose.connection;

// Middlewares
app.use(
  cors({
    origin: ["http://localhost:5173", "https://jippidy.vercel.app"],
  }),
);
app.use(express.json());

// Routes
app.use("/api/chat", chatRouter);

// Database
database.on("error", (error) => console.log(error));
database.once("connected", () => {
  console.log("DB Connected");

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

app.use(errorHandler);
