import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import movieRoutes from './routes/api/movies.js';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.json({ extended: false }));
app.use(cors({ origin: true, credentials: true }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/movies', movieRoutes);

await connectDB();

const port = process.env.PORT || 5050;
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
