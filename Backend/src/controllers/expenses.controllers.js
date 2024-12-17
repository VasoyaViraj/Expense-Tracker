// import { Expenses } from '../models/expenses.model.js'
import { Users } from "../models/users.model.js"

const addExpense = async (req, res) => {
    
    const { userEmailID, expense } = req.body

    try {

        const user = await Users.findOne({ userEmailID });

        if (!user) {
            return res.status(404).json({
                message: 'User not found while adding expense',
                success: false
            });
        }

        let id = (user.expenses.length) + 1;
        expense.id = id;
        user.expenses.push(expense);
        await user.save();
        

        res.status(200)
            .json({
                message: "Expense added successfully",
                data: user,
                success: true
            })

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong while adding expense in database",
            error: error,
            success: false
        })
    }

}

const getAllExpenses = async (req, res) =>{

    try {
        const { userEmailID } = req.body
        let user = await Users.findOne({userEmailID})
        let AllUserExpenses = user.expenses    

        res.status(200)
            .json({
                message: "Fetched All User Expenses successfully",
                data: AllUserExpenses,
                success: true,
            })

    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong when fetching expenses",
            error: err,
            success: false
        })
    }

}

const getAllUser = async (req, res) => {
    try{
        const AllUserSchemaArray = await Users.find()

        res.status(200)
            .json({
                message: "Fetched all user successfully",
                success: true,
                data: AllUserSchemaArray
            })
    }catch(e){
        return res.status(500).json({
            message: "Something went wrong when all users ",
            error: err,
            success: false
        })
    }
}

export {
    addExpense,
    getAllExpenses,
    getAllUser
}