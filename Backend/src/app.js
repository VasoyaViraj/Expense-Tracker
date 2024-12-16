import express from "express"
import cors from "cors"

const app = express()

app.use(cors({
    origin: true,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

//routes import
import addUser from "./routes/addUser.routes.js"
import addExpense from "./routes/addExpense.routes.js"
import getAllExpenses from "./routes/getAllExpenses.routes.js"
import getAllUsers from "./routes/getAllUsers.routes.js"

//routes declaration
app.use("/api", addUser)
app.use("/api", addExpense)
app.use("/api", getAllExpenses)
app.use("/api", getAllUsers)

// http://localhost:8000/api/v1/users/register

export { app }