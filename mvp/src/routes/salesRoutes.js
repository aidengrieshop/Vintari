import express, { Router } from 'express'
import prisma from '../prismaClient.js'

const router = express.Router()

//--------------------Get Sales--------------------

router.get('/', async (req, res) => {

    // Find all sales
    try {
        const sales = await prisma.Sale.findMany({
            where: {
                userId: req.userId
            }
        })

    // Return sales
        res.json(sales)
    } catch(error) {
        console.error(error)
        res.status(503).json({error: "Failed to fetch sales"})
    }
})

//--------------------Create Sale--------------------

router.post('/', async (req, res) => {
    const { itemId, quantity, customer } = req.body
    const userId = req.userId

    // Get item
    try {
        const item = await prisma.inventoryItem.findUnique({
            where: {
                id: itemId
            }
        }
        )

    // Check if item exist and user is authorized
        if(!item ||item.userId !== userId) {
            return res.status(503).json({error: "Item not found or unauthorized"})
        }

    // Check if stock is availible
        if(quantity > item.quantity) {
            return res.status(503).json({error: "Not enough stock availible"})
        }

    // Calculate total price
        const totalPrice = Number(item.price) * quantity

    // Create new sale and remove inventory
        const sale = await prisma.$transaction(async (tx) => {
            const newSale = await tx.Sale.create({
                data: {
                    userId,
                    itemId,
                    quantity,
                    totalPrice,
                    customer
            }
            })

            await tx.inventoryItem.update({
                where: {
                    id: itemId
                }, 
                data: {
                    quantity: item.quantity - quantity
                }
            })

            return newSale
        })

    // Return sale
        res.json(sale)
        
    } catch (error) {
        console.error(error)
        res.status(503).json({error: "Failed to create sale"})
    }
})

export default router