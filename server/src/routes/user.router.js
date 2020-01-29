import express from 'express';
import { createUser } from '../controllers/user.controller';
import { validateUserOnCreate, validateUserOnUpdate } from '../middlewares/users/validateUser.js';

const userRouter = express.Router();

userRouter.post('/', validateUserOnCreate,
createUser
);

export default userRouter;
