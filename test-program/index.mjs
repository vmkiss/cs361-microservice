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

const getEvent = async() => {
    try {
        const userID = 1;
        const startEvent = "2024-11-14T15:30:00";
        const endEvent = "2024-11-14T16:30:00";

        const response = await axios.get(`${BASE_URL}/events/${userID}/dates`, {
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
        const deleteID = "673bc139c744404a1b60e18a";

        const response = await axios.delete(`${BASE_URL}/events/${deleteID}`);

        console.log(`Event with id ${deleteID} successfully deleted: `, response.data);
    } catch (error) {
        if (error.response) {
            console.error('Error: ', error.response.data.error);
        } else {
            console.error('Error: ', error.message);
        }
    }
};

//createEvent();
//getEvent();
deleteEvent();