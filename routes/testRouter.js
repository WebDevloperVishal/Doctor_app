import express from 'express';
import { getTestController } from '../controllers/testController.js';

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = express.Router();

// Add routes
routes.get('/', getTestController);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

export default routes;

