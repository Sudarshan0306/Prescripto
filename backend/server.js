import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongoDb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

//app config
const app = express();
const port = process.env.PORT || 3000;
connectDb();
connectCloudinary();

//middleware

app.use(express.json());
app.use(cors());

//api endpoints
app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log(`Server is running at: ${port}`);
});
