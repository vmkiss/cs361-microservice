import axios from 'axios';

const BASE_URL = 'http://localhost:3000'

const createEvent = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/events`, {
            "userID": "1",
            "attendees": ["3",],
            "startEvent": "2024-11-14T15:30:00",
            "endEvent": "2024-11-14T16:30:00",
            "title": "John Doe Appointment",
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

createEvent();