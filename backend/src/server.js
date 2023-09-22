import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import seedRouter from './routers/seed.router.js';
import userRouter from './routers/user.router.js';
import orderRouter from './routers/order.router.js';

import { dbconnect } from './config/database.config.js';
dbconnect();

const app = express();

app.use(express.json());

app.use(
    cors({
    credentials: true,
    origin: ['http://localhost:3000'],
    })
);

app.use('/api/seeds', seedRouter);
app.use('/api/users', userRouter);
app.use('/api/users', orderRouter);

const PORT = 4000;
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});