import express from 'express'
import prisma from '../prismaClient.js'

const router = express.Router()

//--------------------Dashboard Summary--------------------
// Includes total items, total sales, revenue, etc.

router.get('/dashboard', async (req, res) => {
    const userId = req.userId

    try {
        const [totalItems, totalSales, totalRevenue] = await Promise.all([
            prisma.InventoryItem.count({where: { userId }}),
            prisma.Sale.count({where: { userId }}),
            prisma.Sale.aggregate({
                _sum: {totalPrice: true},
                where: { userId }
            })
        ])

        res.json({
            totalItems,
            totalSales,
            totalRevenue: totalRevenue._sum.totalPrice || 0
        })

    } catch (error) {
        console.error(error)
        res.status(503).json({error: "Failed to fetch dashboard data"})
    }
})

//--------------------Inventory Summary--------------------
router.get('/inventory', async (req, res) => {
    const userId = req.userId

    try {
        const inventory = await prisma.InventoryItem.findMany({
            where: {
                userId
            },
            select: {
                id: true,
                name: true,
                sku: true,
                quantity: true,
                price: true,
                updatedAt: true
            }
        })
        res.json(inventory)
    } catch (error) {
        console.error(error)
        res.status(503).json({error: "Failed to fetch inventory report"})
    }
})

//--------------------Sales Summary--------------------
router.get('/sales', async (req, res) => {
    const userId = req.userId
    try {
        const sales = await prisma.Sale.findMany({
            where: {
                userId
            },
            include: {
                item: {
                    select: {
                        name: true,
                        sku: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        res.json(sales)
    } catch (error) {
        console.error(error)
        res.status(503).json({error: 'Failed to fetch sales report'})
    }
})

export default router