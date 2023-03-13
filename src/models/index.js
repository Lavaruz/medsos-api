import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const config = process.env;

const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASSWORD,
  {
    host: config.DB_HOST,
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./Book.js")(sequelize, Sequelize);

module.exports = db;
