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

// Define event schema
// contains userID (string), attendees (list of strings), startEvent (date), endEvent (date), and title (string)
const eventSchema = new mongoose.Schema({
    userID: { type: String, required: true },
    attendees: { type: [String], required: true },
    startEvent: { type: Date, required: true },
    endEvent: { type: Date, required: true },
    title: { type: String, required: true }    
});

const events = mongoose.model('Events', eventSchema);

export { events }

