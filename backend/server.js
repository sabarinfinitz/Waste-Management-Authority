import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config({quiet: true});
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js'
import ocrRouter from './routes/ocrRoutes.js';

const app = express();
const port = process.env.PORT || 3000;
connectDB();

// parse FRONTEND_URI as comma separated list, fallback to allow all in dev
const allowedOriginsEnv = process.env.FRONTEND_URI || '';
const allowedOrigins = allowedOriginsEnv.split(',').map(s => s.trim()).filter(Boolean);

app.use(express.json());
app.use(cookieParser());

// allow requests with no origin (native apps) and check allowedOrigins when present
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // allow non-browser requests
    if (allowedOrigins.length === 0) return callback(null, true); // allow all when not configured
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('CORS not allowed'), false);
  },
  credentials: true
}));

// API Endpoints
app.get('/',(req,res) => {
    res.send('API Running...');
})

app.use('/api/auth',authRouter)
app.use('/api/ocr',ocrRouter)

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running at ${port}`)
})