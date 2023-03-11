import express from "express";
import cors from "cors";
import morgan from "morgan";

// ROUTER
import connectDb from "./src/services/db.js";
import authRouter from "./src/routes/authRoutres.js";
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/auth", authRouter);

async function startServer() {
  await connectDb();
  app.listen(3000, () => console.log("server run at port 3000"));
}
startServer();
