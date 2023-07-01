import { MongoClient } from 'mongodb';
import { config } from 'dotenv';

config();

const connectionString = process.env.MONGO_STRING || '';

if (!connectionString) {
	console.error('\nNo MONGO_STRING specified');
	process.exit(1);
}

const mongoClient = new MongoClient(connectionString);

let conn;
try {
	conn = await mongoClient.connect();
} catch (e) {
	console.error(e);
	process.exit(1);
}

const db = conn.db('db-name');
export default db;
