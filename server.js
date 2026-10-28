import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors'
import connectDB from './config/db.js'
import partRoutes from './routes.partRoutes.js'; // 1. Import the routes


dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/parts', partRoutes);

app.get('/',(req, res) => {
    res.json('Industrial Spares API is running...')
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
