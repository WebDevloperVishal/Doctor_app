import userModel from "../models/userModel.js";

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
        const userData = {name, email, password}
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