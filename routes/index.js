const Router = require('express').Router

const products = require('./products')

const router = Router()
module.exports = router

router.use('/api/products', products)

router.post('/api/tokens', (req, res) => {
  const user = {
    username: 'abcdefgh'
  }
  const secret = 'secret'
  const options = {
    expiresIn: '90s',
    issuer: 'my-app',
    audience: 'my-app'
  }

  const token = tokens.sign(user, secret, options)

  res
    .status(201)
    .json({ token })
})

router.post('/crash', () => {
	throw new Error('Crashing!')
})