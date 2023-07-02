import { Router, Response } from 'express';
import { MongoError } from 'mongodb';
import { Error } from 'mongoose';
import { User } from '../../db-models/index.js';
import { Routes, UserType } from '../../types/index.js';

const authRouter = Router();

const errorHandler = (error: MongoError | Error, res: Response) => {
  if (error instanceof Error.ValidationError) {
    const messages = Object.values(error.errors).map((err) => err.message);
    return res.status(400).json({
      success: false,
      message: 'Could not create user due to some invalid fields',
      error: messages,
    });
  } if ((error as MongoError).code === 11000) {
    return res.status(400).json({
      success: false,
      message: 'A user with this this email already exists',
      error: error.message,
    });
  }
  return res.status(500).json({ success: false, message: 'Internal server error', error });
};

authRouter.post<UserType, any, UserType>(Routes.signup, async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (e) {
    console.error(e);
    errorHandler(e as MongoError, res);
  }
});
// authRouter.post<UserType, any, UserType>(Routes.login, async (req, res) => {
//   const { email, password } = req.body;
// });

export default authRouter;
