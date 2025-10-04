import express from "express";
import { userRegister, userLogin, getUserProfile , getAllUsers, getAllUsersinlimite,changePassword} from "../controllers/userController.js";

// import all controllers
// import SessionController from './app/controllers/SessionController';

const router = express.Router();

// Add routes
// routes.get('/', SessionController.store);
router.post('/register', userRegister);
router.post('/login', userLogin);
router.get('/get-profile', getUserProfile); //Get user profile
router.get('/get-user', getAllUsers); //Get all user
router.get('/get-userinlimite', getAllUsersinlimite); //with the limite
router.patch('/changePassword', changePassword);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

export default router;