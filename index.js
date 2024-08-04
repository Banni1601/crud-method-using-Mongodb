//const express = require("express");
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use("/api", route);

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGO_URL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`server running at ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
