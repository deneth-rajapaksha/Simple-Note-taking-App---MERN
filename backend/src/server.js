import express from 'express';
import router from './routes/noteRoutes.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import rateLimit from './config/upstash.js';
import rateLimiter from './middleware/rateLimiter.js';  
import cors from 'cors';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' })); // Enable CORS for frontend origin
app.use(rateLimiter);  // Apply rate limiting middleware
app.use('/api/notes', router);


connectDB().then(() => {
  app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
});
