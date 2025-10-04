import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";


// Register User 
export const userRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // validation

        if(!name || !email || !password){
            return res.status(400).send({
                success:false,
                message:"Provide All Fields"
            })
        } 
        // hashing Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = {name, email, password:hashedPassword}
        // save user
        const newUser = new userModel(userData)
        const user = await newUser.save()
        
        res.status(201).send({
            success: true,
            message:"user Regester Successfully",
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Something Went Wrong',
            error
        });

    }
}


// Login User
export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // validation

        if(!email || !password){
            return res.status(400).send({
                success:false,
                message:"Provide All Fields"
            })
        }
        
        // check if user exists
        const user = await userModel.findOne({ email });
        if(!user){
            return res.status(404).send({
                success:false,
                message:"User Not Found"
            })
        }
        
        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).send({
                success:false,
                message:"Invalid Credentials"
            })
        }
        
        res.status(200).send({
            success: true,
            message:"User Login Successfully",
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Something Went Wrong',
            error
        });
    }
}


// Get User
export const getUserProfile = async (req, res) => {
    try {
        const { userId } = req.body; 
        
        if(!userId){
            return res.status(400).send({
                success: false,
                message: "User ID is required"
            });
        }
        
        const user = await userModel.findById(userId).select('-password');
        
        if(!user){
            return res.status(404).send({
                success: false,
                message: "User Not Found"
            });
        }
        
        res.status(200).send({
            success: true,
            message: "User Profile Fetched Successfully",
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Something Went Wrong',
            error
        });
    }
}