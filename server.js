import express, { json } from 'express';
import cors from 'cors';
import authRoutes from './auth/authRoutes.js';

const app = express();

app.use(cors());
app.use(json());
app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
