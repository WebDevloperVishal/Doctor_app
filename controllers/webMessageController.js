import webmessageModel from "../models/webMessage.js";

// create Message
export const createMessage = async (req , res)=> {
    try {
        const {name, contact,message} = req.body
        if(!name || !contact || !message){
            return res.status(402).send({
                success:false,
                message:'Provide All Fields'
            })
        }
        const webMessage = new webmessageModel({name,contact,message})
        webMessage.save()
        res.status(201).send({
            success:true,
            message:'Message Send Successfully',
            webMessage,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Web Message Api",
            error
        });
    }
}