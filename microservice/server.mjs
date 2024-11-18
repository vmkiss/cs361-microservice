import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import './events-model.mjs';
import { router } from './router.mjs';

const PORT = process.env.PORT;
const app = express();
//app.use(cors({credentials: true, origin: "*"}))
app.use(express.json());
app.use('/events', router)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});