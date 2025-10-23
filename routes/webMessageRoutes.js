import express from "express";
import { createMessage } from "../controllers/webMessageController.js";

const routes = express.Router()

// create Message ||POST
routes.post('/create',createMessage)

export default routes;