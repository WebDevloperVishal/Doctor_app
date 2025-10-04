import express from "express";
import { userRegister, userLogin, getUserProfile } from "../controllers/userController.js";

// import all controllers
// import SessionController from './app/controllers/SessionController';

const router = express.Router();

// Add routes
// routes.get('/', SessionController.store);
router.post('/register', userRegister);
router.post('/login', userLogin);
router.get('/get-user', getUserProfile);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

export default router;