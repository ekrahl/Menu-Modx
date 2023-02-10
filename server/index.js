import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import oysterRoutes from './routes/oysters.js';

const app = express();

app.use(express.json());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/oysters', oysterRoutes);

const MONGO_URL = 'mongodb+srv://emilykrahl:19S07Evk@cluster0.lqr6ncl.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(PORT, () => console.log(`Server is running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));