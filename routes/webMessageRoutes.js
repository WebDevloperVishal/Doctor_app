import express from "express";
import { createMessage, DeleteMessage, getAllMessage } from "../controllers/webMessageController.js";
import { isAdmin, userAuth } from "../middlewares/authMiddlerares.js";

const routes = express.Router()

// create Message ||POST
routes.post('/create',createMessage);

routes.get('/getallmsg',getAllMessage);

routes.delete('/deletemsg/:id',userAuth,isAdmin,DeleteMessage);

export default routes;