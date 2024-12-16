import { Users } from "../models/users.model.js"

const addUser = async (req, res) => {
    
    const { userName, userEmailID, userAvatarUrl} = req.body

    try {
        const users = await Users.create({
            userName,
            userEmailID,
            userAvatarUrl
        })

        res.status(200)
            .json({
                message: "User added successfully",
                data: users,
                success: true
            })

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong while adding user in database",
            error: error,
            success: false
        })
    }

}

export {
    addUser
}