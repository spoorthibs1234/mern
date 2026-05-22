import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {movieRoute} from './api.js';
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/movies", movieRoute);


// Serve static files
app.use(express.static(path.join(process.cwd(), "public")));

// Serve files from 'public' folder
app.get("/", (req, res) => {
  res.sendFile(
    path.join(process.cwd(), "public", "index.html")
  );
});


async function start() {
  const MONGO_URI="mongodb+srv://rymec-workshop:rymec-workshop-mern@cluster0.mtwivcv.mongodb.net/mern-workshop?appName=Cluster0"
  await mongoose.connect(MONGO_URI)
  const port=3080
  app.listen(port,(err) => {
    console.log('Movies API started on port http://localhost:' + port)
  })
}


start()