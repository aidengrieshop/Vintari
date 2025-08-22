import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import prisma from '../prismaClient.js'
import { Prisma } from '@prisma/client'
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router()

//--------------------Register--------------------

// Endpoint to register a new user
router.post('/register', async (req, res) => {
    const {name, email, password} = req.body

    if (!name || !email || !password) {
        return res.status(400).json({ error: "Name, email, and password are required" });
    }

    try {
    // Encrypt password before it is sent to db
    const hashedPassword = await bcrypt.hash(password, 10)
        const user = await prisma.User.create({
            data: {
                name,
                email,
                passwordHash: hashedPassword
            }
        })

        // Create default inventory item

        await prisma.InventoryItem.create({
          data: {
            userId: user.id,
            name: 'Default Item, add some more to get started!',
            sku: `DEFAULT-${Date.now()}`, // unique
            quantity: 1,
            price: new Prisma.Decimal(0)
          }
        })

        // Create a token
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '4h'})
        res.json({ token })        
    } catch (error) {
        console.log(error)

        if (error.code === 'P2002') {
            return res.status(409).json({ error: 'Email already exists' });
        }

        res.status(503).json({ error: "Registration failed"})
    }
})

//--------------------Login--------------------

router.post('/login', async (req, res) => {
    const {email, password} = req.body

    // Find user in db
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        const user = await prisma.User.findUnique({
            where: {
                email: email
            }
        })

        // Validate that the user exist
        if(!user) {return res.status(404).json({error: "User not found"})}

        // Validate that the password is correct
        const passwordIsValid = await bcrypt.compare(password, user.passwordHash)
        if(!passwordIsValid) {return res.status(401).json({error: "Invalid password"})}

        // User is authenticated
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '4h'})
        res.json({ token })
        
    } catch (error) {
        console.log(error.message)
        res.status(503).json({error: "Login failed"})
    }
})

//--------------------Get Profile--------------------

router.get('/me', authMiddleware, async (req, res) => {
<<<<<<< HEAD
    
    // Get user information from db
=======
>>>>>>> 3a466c4e6e1743f9b957d530c656760e4e47a583
    try {
        const user = await prisma.User.findUnique({
            where: {
                id: req.userId
            },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true
            }
        })

        if(!user) {
            return res.status(404).json({error: "User not found"})
        }

        res.json(user)

    } catch (error) {
        console.error(error)
        res.status(503).json({error: "Failed to fetch user info"})
    }
})

export default router