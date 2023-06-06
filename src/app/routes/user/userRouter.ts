import express from 'express';
import { UserController } from '../../controllers/user/userController';

const userRoutes = express.Router();
const userController = new UserController();

// userRoutes.get('/users', userController.getUsers(userController));

export { userRoutes };