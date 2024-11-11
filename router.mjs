import express from 'express';
import { eventCollection } from './events-model.mjs';

const router = express.Router();

// Get events
router.get("/:userID/dates", async (req, res) => {
    const { start, end } = req.query
    const { userID } = req.params

    try {
        const events = await eventCollection.find({
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

        const event = await eventCollection.create({
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

// Delete an event
router.delete("/:id", async(req, res) => {
    const { id } = req.params
    try {
        const event = await eventCollection.findOneAndDelete({ _id: id})
        if (!event) {
            return res.status(404).json({
                error: "Unable to locate event with that id for delete operation.",
            })
        }
        res. status(200).json(patient)
    } catch (error) {
        res.status(400.).json({
            error: "Invalid request from client for event delete operation.",
        })
    }
})


export { router }