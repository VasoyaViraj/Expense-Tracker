import { Router } from "express";
import { addExpense } from "../controllers/expenses.controllers.js";

const router = Router()

router.route("/addExpense").post(addExpense)

export default router