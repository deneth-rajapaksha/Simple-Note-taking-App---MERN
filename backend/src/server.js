import express from 'express';
import router from './routes/noteRoutes.js';
import connectDB from './config/db.js';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js'; 
import cors from 'cors';

dotenv.config();

const app = express()
;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// 1. Fixed CORS logic
if (process.env.NODE_ENV !== 'production') {
    app.use(cors({ origin: 'http://localhost:5173' })); 
}

app.use(rateLimiter);
app.use('/api/notes', router);

// 2. Optimized Production Pathing
if (process.env.NODE_ENV === 'production') {
    // path.resolve starts from the root project directory
    const frontendPath = path.resolve(__dirname, '..', '..', 'frontend', 'dist');
    
    app.use(express.static(frontendPath));

    app.get('*', (req, res) => {
        res.sendFile(path.join(frontendPath, 'index.html'));
    });
}

// 3. Use the PORT from .env or default to 3000
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`);
    });
});