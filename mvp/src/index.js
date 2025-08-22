import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Routes
import authRoutes from './routes/authRoutes.js';
//import inventoryRoutes from './routes/inventoryRoutes.js';
//import paymentsRoutes from './routes/paymentsRoutes.js';
//import reportsRoutes from './routes/reportsRoutes.js';
//import salesRoutes from './routes/salesRoutes.js';

// Middleware
//import authMiddleware from './middleware/authMiddleware.js';

// Config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// Utils
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Health check
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Routes
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.use('/auth', authRoutes);
//app.use('/inventory', authMiddleware, inventoryRoutes);
//app.use('/payments', paymentsRoutes);
//app.use('/reports', reportsRoutes);
//app.use('/sales', salesRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
