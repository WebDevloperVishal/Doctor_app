import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'name is required']
    },
    password: {
        type: String,
        require: [true, 'password is required']
    },
    email: {
        type: String,
        require: [true, 'email is required'],
        unique: true
    },
    image: { type: String },
    phone: { type: String },
    address: { type: String },
    dob: { type: String },
    gender: { type: String },
    isAdmin: { type: Boolean, default: false }
}, { timestamps: true });

const userModel = mongoose.model('user',userSchema)

export default userModel;