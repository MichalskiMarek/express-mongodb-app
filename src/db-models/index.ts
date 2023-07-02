import mongoose from 'mongoose';
import { UserType } from '../types/index.js';

const userSchema = new mongoose.Schema<UserType>({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

export const User = mongoose.model('user', userSchema, 'users');
