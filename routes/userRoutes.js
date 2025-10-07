import express from "express";
import { userRegister, userLogin, updateUser } from "../controllers/userController.js";
import { userAuth } from "../middlewares/authMiddlerares.js";
import upload from "../middlewares/multer.js";

// import all controllers
// import SessionController from './app/controllers/SessionController';

const router = express.Router();

// Add routes

// register //POST
router.post('/register', userRegister);

// Login //POST
router.post('/login', userLogin);

// Update Profile || PATCH
router.patch('/update/:id', userAuth, upload.single("image"), updateUser);



// router.get('/get-profile', getUserProfile); //Get user profile
// router.get('/get-user', getAllUsers); //Get all user
// router.get('/get-userinlimite', getAllUsersinlimite); //with the limite
// router.patch('/changePassword', changePassword);
// router.delete('/delete-user', deleteUser);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

export default router;