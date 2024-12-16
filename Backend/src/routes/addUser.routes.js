import { Router } from "express";
import { addUser } from "../controllers/users.controllers.js";

const router = Router()

router.route("/addUser").post(addUser)

export default router