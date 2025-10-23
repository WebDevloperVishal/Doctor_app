import webmessageModel from "../models/webMessage.js";

// create Message
export const createMessage = async (req, res) => {
    try {
        const { name, contact, message } = req.body
        if (!name || !contact || !message) {
            return res.status(402).send({
                success: false,
                message: 'Provide All Fields'
            })
        }
        const webMessage = new webmessageModel({ name, contact, message })
        webMessage.save()
        res.status(201).send({
            success: true,
            message: 'Message Send Successfully',
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

// getAll messsage
export const getAllMessage = async (req, res) => {
    try {
        const webMessage = await webmessageModel.find({})
        res.status(201).send({
            success: true,
            message: 'get All message',
            totalCount: webMessage.length,
            webMessage,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in get all Web Message Api",
            error
        });
    }
}


// Delete messsage
export const DeleteMessage = async (req, res) => {
    try {
        const { id } = req.params
        if (!id)
            return res.status(404).send({
                success: false,
                message: 'Provide valid Message id'
            })
        //find message
        const webMessage = await webmessageModel.findByIdAndDelete(id)
        res.status(201).send({
            success: true,
            message: "Message has been deleted",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in get all Web Message Api",
            error
        });
    }
}

