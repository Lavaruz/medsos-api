const router = require("express").Router();
const authControllers = require("../controllers/authControllers");

router.get("/", authControllers.getAllUsers);
router.get("/:id", authControllers.getUserByPk);

router.post("/", authControllers.createNewUser);

module.exports = router;
