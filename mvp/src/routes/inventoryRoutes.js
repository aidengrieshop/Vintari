import express from 'express'
import prisma from '../prismaClient.js'
import { Prisma } from '@prisma/client'

const router = express.Router()

router.get('/', async (req, res) => {

    // Find items
    try {
        const items = await prisma.inventoryItem.findMany({
            where: {
                userId: req.userId
            }
        })

    // Return items to user
        res.json(items)

    } catch (error) {
        console.error(error)
        res.status(503).json({error: "Failed to fetch inventory"})
    }
})

router.post('/', async (req, res) => {
    const { name, sku, quantity, price } = req.body

    // Add item
    try {
        const item = await prisma.inventoryItem.create({
            data: {
                userId: req.userId,
                name,
                sku,
                quantity,
                price
            }
        })
    // Return item to user
        res.json(item)

    } catch (error) {
        console.error(error)
        res.status(503).json({error: "Failed to add item"})
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { name, sku, quantity, price} = req.body

    // Find item
    try {
        const item = await prisma.inventoryItem.findUnique({
            where: {
                id
            }
        })
    
    // Check if item exist and user is authorized to make changes
        if(!item || item.userId !== req.userId) {
            return res.status(404).json({error: "Item not found or unauthorized"})
        }

    // Update item
        const updatedItem = await prisma.inventoryItem.update({
            where: {
                id
            },
            data: {
                name,
                sku,
                quantity,
                price,
            }
        })
    
    // Return updated item to user
        res.json(updatedItem)
    } catch (error) {
        console.error(error)
        res.status(503).json({error: "Failed to update item"})
        console.log(id)
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const userId = req.userId

    // Delete item while checking permissions
    try {
        const deletedItem = await prisma.inventoryItem.findUnique({
            where: {
                id,
                userId
            }
        })

    // Check if item exist and user is authorized
        if(deletedItem.count === 0 ) {return res.status(404).json({error: "Item not found or unauthorized"})}
    

        res.json({success: "Item has been successfully deleted"})
    } catch (error) {
        console.error(error)
        res.status(503).json({error: "Failed to delete item"})
    }
} )




export default router