import { Router } from 'express';
import { User } from '../../db-models/index.js';
import { Routes, UserType } from '../../types/index.js';

const authRouter = Router();

authRouter.post<UserType, any, UserType>(Routes.signup, async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});
// authRouter.post<UserType, any, UserType>(Routes.login, async (req, res) => {
//   const { email, password } = req.body;
// });

export default authRouter;
