import express from "express";
import { userRegister } from "../controllers/userController.js";

// import all controllers
// import SessionController from './app/controllers/SessionController';

const router = express();

// Add routes
// routes.get('/', SessionController.store);
router.post('/register', userRegister);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = router