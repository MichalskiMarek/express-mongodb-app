import express from 'express';
import db from '../../dbConnect';

const router = express.Router();

router.get('/', async (req, res) => {
  const collection = await db.collection('users');
  const results = await collection.find({})
    .limit(50)
    .toArray();
  res.send(results).status(200);
});

export default router;
