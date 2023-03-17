const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// ROUTER
const db = require("./src/models");
const userRoute = require("./src/routes/userRoutes");
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/users", userRoute);

db.sequelize.sync({ alter: true }).then(() => {
  app.listen(3000, () => console.log("server run at port 3000"));
});
