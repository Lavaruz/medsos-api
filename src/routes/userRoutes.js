const router = require("express").Router();
const userController = require("../controllers/userController");

// router.get("/", authControllers.getAllUsers);
// router.get("/:id", authControllers.getUserByPk);

router.get("/", userController.getAllUsers);
router.post("/", userController.createNewUser);
router.post("/post", userController.createNewPost);

module.exports = router;
