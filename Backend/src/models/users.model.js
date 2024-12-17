import mongoose, {Schema} from "mongoose";

const expenseSchema = new Schema({
    id : {
        type : Number
    },
    color: {
        type : String
    },
    name: {
        type : String
    },
    expense: {
        type : Number
    }
})

const userSchema = new Schema({
    userName: {
        type: String
    },
    userEmailID: {
        type: String
    },
    userAvatarUrl: {
        type: String
    },
    expenses : [expenseSchema],
    createdAt: {
        type: Date,
        default: Date.now
    }
});


export const Users = mongoose.model('Users', userSchema);