import { ObjectId } from 'mongodb';

export const Routes = {
  signup: '/signup',
  login: '/login',
} as const;

export type UserType = {
  _id: ObjectId,
  email: string,
  password: string
};
