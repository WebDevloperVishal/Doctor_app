import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    image: { type: String },
    phone: { type: String },
    address: { type: String },
    dob: { type: String },
    gender: { type: String },
    isAdmin: { type: Boolean, default: false }
}, { timestamps: true });

const userModel = mongoose.model('user', userSchema);

export default userModel;