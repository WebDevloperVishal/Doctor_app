import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

// Register User 
export const userRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // validation

        if (!name || !email || !password) {
            return res.status(400).send({
                success: false,
                message: "Provide All Fields"
            })
        }
        // hashing Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = { name, email, password: hashedPassword }
        // save user
        const newUser = new userModel(userData)
        const user = await newUser.save()

        res.status(201).send({
            success: true,
            message: "user Regester Successfully",
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
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "Provide All Fields"
            })
        }
        // Find user
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            })
        }

        // matchh Password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(402).send({
                success: false,
                message: "invalid Credential",
            })

        }

        // token 
        const token = JWT.sign({ id: user?.id }, process.env.JWT_SECRET, { expiresIn: '7d' })
        user.password = undefined;
        res.status(200).send({
            success: true,
            message: "login Successfully",
            token,
            user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Something Went Wrong',
            error
        });
    }
}

// Update user details
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(404).send({
                success: false,
                message: "User id not found"
            })
        }
        const { name, phone, dob, image, gender, address } = req.body;
        const photoToBase64 = req.files && req.files.buffer.toString('base64')
        const user = await userModel.findByIdAndUpdate(id, {
            $set: { name, phone, dob, gender, address, image: photoToBase64 },
        }, { returnOriginal: false });
        
        res.status(200).send({
            success: true,
            message: "Profile update Successfully",
            user
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Something Went Wrong in Updating user',
            error
        });
    }
}

// Get User
// export const getUserProfile = async (req, res) => {
//     try {
//         const { userId } = req.body;

//         if (!userId) {
//             return res.status(400).send({
//                 success: false,
//                 message: "User ID is required"
//             });
//         }

//         const user = await userModel.findById(userId).select('-password');

//         if (!user) {
//             return res.status(404).send({
//                 success: false,
//                 message: "User Not Found"
//             });
//         }

//         res.status(200).send({
//             success: true,
//             message: "User Profile Fetched Successfully",
//             user
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success: false,
//             message: 'Something Went Wrong',
//             error
//         });
//     }
// }

// // Get Alluser without limite
// export const getAllUsers = async (req, res) => {
//     try {
//         const users = await userModel.find({}).select('-password');

//         // Validation
//         if (!users || users.length === 0) {
//             return res.status(404).send({
//                 success: false,
//                 message: "No Users Found"
//             });
//         }

//         res.status(200).send({
//             success: true,
//             message: "All Users Fetched Successfully",
//             count: users.length,
//             users
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success: false,
//             message: 'Something Went Wrong',
//             error
//         });
//     }
// }


// // Get allUser with limit of 2 User at a time
// export const getAllUsersinlimite = async (req, res) => {
//     try {
//         const users = await userModel.find({}).select('-password').limit(2);

//         // Validation
//         if (!users || users.length === 0) {
//             return res.status(404).send({
//                 success: false,
//                 message: "No Users Found"
//             });
//         }

//         res.status(200).send({
//             success: true,
//             message: "All Users Fetched Successfully",
//             count: users.length,
//             users
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success: false,
//             message: 'Something Went Wrong',
//             error
//         });
//     }
// }


// // Change Password
// export const changePassword = async (req, res) => {
//     try {
//         const { userId, oldPassword, newPassword } = req.body;

//         if (!userId || !oldPassword || !newPassword) {
//             return res.status(400).send({
//                 success: false,
//                 message: "Provide All Fields"
//             });
//         }

//         const user = await userModel.findById(userId);

//         if (!user) {
//             return res.status(404).send({
//                 success: false,
//                 message: "User Not Found"
//             });
//         }

//         // verify old password
//         const isMatch = await bcrypt.compare(oldPassword, user.password);
//         if (!isMatch) {
//             return res.status(401).send({
//                 success: false,
//                 message: "Old Password is Incorrect"
//             });
//         }

//         // hash new password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(newPassword, salt);

//         user.password = hashedPassword;
//         await user.save();

//         res.status(200).send({
//             success: true,
//             message: "Password Changed Successfully"
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success: false,
//             message: 'Something Went Wrong',
//             error
//         });
//     }
// }


// // Delete User
// export const deleteUser = async (req, res) => {
//     try {
//         const { userId } = req.body;

//         if (!userId) {
//             return res.status(400).send({
//                 success: false,
//                 message: "User ID is required"
//             });
//         }

//         const user = await userModel.findByIdAndDelete(userId);

//         if (!user) {
//             return res.status(404).send({
//                 success: false,
//                 message: "User Not Found"
//             });
//         }

//         res.status(200).send({
//             success: true,
//             message: "User Deleted Successfully"
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success: false,
//             message: 'Something Went Wrong',
//             error
//         });
//     }
// }