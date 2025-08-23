import express from 'express'
import prisma from '../prismaClient.js'

const router = express.Router()

//--------------------Get Items--------------------

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

//--------------------Create Item--------------------

router.post('/', async (req, res) => {
    const { name, sku, quantity, price } = req.body
    const userId = req.userId

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

//--------------------Update item--------------------

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

//--------------------Delete Item--------------------

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const userId = req.userId

    // Delete item while checking permissions
    try {
        const deletedItem = await prisma.inventoryItem.deleteMany({
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