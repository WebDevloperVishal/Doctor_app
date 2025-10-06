import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";
export const userAuth = async (req, res, next) => {
    try {
        const token = req.header.authorization
        if (!token) {
            return res.status(402).send({
                success: false,
                message: "Not Authorizen User"
            })
        }

        const decode = JWT.verify(token, process.env.JWT_SECRET)
        res.user = decode;
        next();
    } catch (error) {
        console.log(error);
        res.status(402).send({
            success: false,
            message: "Error In User Auth",
            error
        })
    }
}

// Admon Auth
export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user.id)
        if (user.isAdmin === !true) {
            return res.status(402).send({
                success: false,
                message: "Unatuhorized Access"
            })
        } else {
            next();
        }
    } catch (error) {
        console.log(error),
            res.status(402).send({
                success: false,
                message: "Error in Admin Auth",
                error
            })

    }
}