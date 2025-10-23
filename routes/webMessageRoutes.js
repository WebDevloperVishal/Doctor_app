import express from "express";
import { createMessage } from "../controllers/webMessageController.js";

const router = express.Router()

// create Message ||POST
router.post('/create',createMessage)

export default router;