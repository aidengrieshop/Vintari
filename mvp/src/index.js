import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import prisma from "./prismaClient.js"
import path, {dirname} from 'path'
import { fileURLToPath } from 'url'

// Import routes
import authRoutes from './routes/authRoutes.js'
import inventoryRoutes from './routes/inventoryRoutes.js'
import paymentsRoutes from './routes/paymentsRoutes.js'
import reportsRoutes from './routes/reportsRoutes.js'
import salesRoutes from './routes/salesRoutes.js'

// Import middleware
import authMiddleware from './middleware/authMiddleware.js'


dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

// Health check
app.get("/health", (req, res) => {
  res.status(200)
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.json())

app.use(express.static(path.join(__dirname, '../public')))

// Send HTML to the user
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.use('/auth', authRoutes)
app.use('/inventory', authMiddleware, inventoryRoutes)