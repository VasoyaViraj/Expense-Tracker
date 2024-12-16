import { Router } from "express";
import { getAllUser } from "../controllers/expenses.controllers.js";

const router = Router()

router.route("/getAllUsers").get(getAllUser)

export default router