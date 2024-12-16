import { Router } from "express";
import { getAllExpenses } from "../controllers/expenses.controllers.js";

const router = Router()

router.route("/getAllExpenses").post(getAllExpenses)

export default router