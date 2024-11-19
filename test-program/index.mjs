import axios from 'axios';
import 'dotenv/config';

const MS_URL = process.env.MS_URL;

const createEvent = async () => {
    try {
        console.log("Creating event...")
        const response = await axios.post(`${MS_URL}/events`, {
            "userID": "2",
            "attendees": ["3",],
            "startEvent": "2025-12-18T15:30:00",
            "endEvent": "2025-12-18-T16:30:00",
            "title": "Chloe Price Appointment",
        });

        console.log('Event created successfully:', response.data);
    } catch (error) {
        if (error.response) {
            console.error('Error:', error.response.data.error);
        } else {
            console.error('Error:', error.message);
        }
    }
};

const getEvent = async() => {
    try {
        const userID = 2;
        const startEvent = "2025-12-18T15:30:00";
        const endEvent = "2025-12-18-T16:30:00";

        const response = await axios.get(`${MS_URL}/events/${userID}/dates`, {
            params: { start: startEvent, end: endEvent },
        });

        console.log('Event(s) successfully retrieved: ', response.data);
    } catch (error) {
        if (error.response) {
            console.error('Error:', error.response.data.error);
        } else {
            console.error('Error: ', error.message);
        }
    }
};

const deleteEvent = async() => {
    try {
        const deleteID = "673bd513c0cc77d74a70cbc2";

        const response = await axios.delete(`${MS_URL}/events/${deleteID}`);

        console.log(`Event with id ${deleteID} successfully deleted: `, response.data);
    } catch (error) {
        if (error.response) {
            console.error('Error: ', error.response.data.error);
        } else {
            console.error('Error: ', error.message);
        }
    }
};

createEvent();
//getEvent();
//deleteEvent();