import express from 'express';
import cors from 'cors';
import seedRouter from './routers/seed.router.js';

const app = express();

app.use(
    cors({
    credentials: true,
    origin: ['http://localhost:3000'],
    })
);

app.use('/api/seeds', seedRouter);

const PORT = 4000;
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});