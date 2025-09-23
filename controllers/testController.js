export const getTestController = (req,res)=>{
    try {
        res.status(200).send({
            success: true,
            message: "Test controller is fine"
        });
    } catch (error) {
        console.log(error);
    }
}