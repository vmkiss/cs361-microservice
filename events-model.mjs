import mongoose from 'mongoose';
import 'dotenv/config';

// Establish database connection
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING
);

console.log(process.env.MONGODB_CONNECT_STRING)

const db = mongoose.connection;

// Confirm database connection
db.once("open", () => {
    console.log('Successfully connected to database');
});

db.on("error", (error) => {
    console.error('Error: Connection to database failed', error);
});