const Router = require('express').Router

const products = require('./products')

const router = Router()
module.exports = router

router.use('/api/products', products)

router.post('/crash', () => {
	throw new Error('Crashing!')
})