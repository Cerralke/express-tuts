const myJSON = require("./products.json")
const express = require('express')
const morgan = require('morgan')
const serveStatic = require('serve-static')
const compression = require('compression')
const bodyParser = require('body-parser')

const app = express();

app.use(compression());

app.use((req, res, next) => {
  const start = process.hrtime()

  res.on('finish', () => {
    const time = process.hrtime(start)
    const ms = time[0] * 1e3 + time[1] * 1e-6
    console.log(`${ms} ms`)
  })

  next()
})

app.use(morgan('dev'))
app.use(express.static('static'))

const products = myJSON;

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.post('/crash', () => {
	throw new Error('Crashing!')
})

app.post(
	'/addProduct',
	bodyParser.urlencoded({ extended: false }),
	(req, res) => {
		const { name } = req.body

		products.push({
			name,
			description: "",
			price: ""
		})

		res.redirect(303, '/')
	}
)

module.exports = app