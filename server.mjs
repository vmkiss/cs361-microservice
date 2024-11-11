import express from 'express';
import 'dotenv/config';
import './events-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use('/events', router)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});