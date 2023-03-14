const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// ROUTER
const db = require("./src/models");
const authRouter = require("./src/routes/authRoutres");
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/auth", authRouter);

db.sequelize.sync().then(() => {
  app.listen(3000, () => console.log("server run at port 3000"));
});
