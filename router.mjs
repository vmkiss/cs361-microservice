import express from 'express';
import { events } from './events-model.mjs';

const router = express.Router();

// Get events
router.get("/:userID/dates", async (req, res) => {
    const { start, end } = req.query
    const { userID } = req.params

    try {
        const events = await Event.find({
            userID: userID,
            startEvent: {
                $gte: start,
                $lt: end
            }
        }).sort({ startEvent: 1})
        res.status(200).json(events)
    } catch (error) {
        res.status(400).json({
            error: "Invalid request from client from matching events.",
        })
    }
})

// Create new event
router.post("/", async(req, res) => {
    try {
        const { userId, attendees, startEvent, endEvent, title } = req.body;

        const event = await Event.create({
            userID,
            attendees,
            startEvent,
            endEvent,
            title
        })
        res.status(200).json(event)
    } catch (error) {
        res.status(400).json({
            error: "Invalid request from client for event creation operation.",
        })
    }
});



export { router }