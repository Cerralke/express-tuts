const myJSON = require("./products.json")
const express = require('express')
const morgan = require('morgan')
const serveStatic = require('serve-static')
const compression = require('compression')
const bodyParser = require('body-parser')
const boom = require('boom')

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
	'/api/products',
	bodyParser.json(),
	(req, res) => {
		const name = req.body.name
		if (!name) {
			throw boom.badRequest('name is missing!')
		}
		const id = products.length + 1
		if (!id) {
			throw boom.badRequest('id is not given correctly!')
		}
		const description = "<p>Maecenas sit amet arcu convallis, tempus nunc ut, maximus tellus. Morbi venenatis nisl nec molestie bibendum. Quisque mauris dolor, mollis id fermentum et, ullamcorper a ante. Nulla facilisi. Sed cursus sodales viverra. Nam vitae pharetra odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam libero sapien, porttitor et mi in, bibendum accumsan sem. Duis et sem rutrum mi mollis semper nec non magna. Suspendisse molestie quam ut enim ornare, quis vehicula neque rhoncus. Curabitur nec metus elit. Fusce et rutrum erat. Praesent tempus mi lacus, ac viverra tortor imperdiet vitae. Aliquam maximus, erat ac eleifend porttitor, arcu nunc faucibus nibh, ut dictum magna felis in sapien.</p>"
		const price = "0 PLN"
		if (Object.keys(req.body).length > 1) {
			throw boom.badRequest(`Extra fields given: ${Object.keys(req.body)}`)
		}
		const product = { id, name, description, price }

		products.push(product)

		res
			.status(201)
			.set('Content-Location', `/api/products/${id}`)
			.json(product)
	}
)

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next()
  }

  if (!err.isBoom) {
    return next(err)
  }

  res
    .status(err.output.statusCode)
    .json({
      code: err.output.statusCode,
      message: err.message
    })
})

module.exports = app