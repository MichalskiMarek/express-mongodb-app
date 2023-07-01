import express from 'express';
import users from './api/routes/users';

const PORT = process.env.PORT || 3000;
const HOST_NAME = 'localhost';

const app = express();

app.use(express.json());

app.use('/users', users);

// app.use((err, _req, res, next) => {
// 	res.status(500).send('Uh oh! An unexpected error occurred.');
// });

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});