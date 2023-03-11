import { Router } from "express";
import authControllers from "../controllers/authControllers.js";

const router = Router();

router.post("/register", authControllers);

export default router;
