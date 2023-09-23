import express from "express";
import cors from 'cors'
import mailRoutes from "./routes/mailRoutes.js";
import Connection from "./database/db.js";
import mongoose from "mongoose";
const app = express()
const port = process.env.PORT || 8000;
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))
app.use('/', mailRoutes)
Connection()
/* const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
}); */
app.listen(port, () => { console.log(`server is running on port ${port}`); })