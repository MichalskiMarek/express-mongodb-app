import mongoose from 'mongoose';
import { UserType } from '../types/index.js';

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const userSchema = new mongoose.Schema<UserType>({
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [(value: string) => emailRegex.test(value), 'Email format is invalid'],
  },
  password: {
    type: String,
    required: [true, 'Pleas enter an password'],
    minlength: [6, 'Minimum password length is 6 characters'],
  },
});

export const User = mongoose.model('user', userSchema, 'users');
