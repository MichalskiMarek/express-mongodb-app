import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import authRouter from './api/routes/authRoutes.js';

config();

const connectionString = process.env.MONGO_STRING || '';

if (!connectionString) {
  console.error('\nNo MONGO_STRING specified');
  process.exit(1);
}

const PORT = process.env.PORT || 3000;

const app = express();

// middleware
app.use(express.json());

// db connection
mongoose.connect(connectionString, { dbName: 'db-name' })
  .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
  .catch((err) => console.log(err));

// routes
app.use(authRouter);
