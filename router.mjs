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



export { router }