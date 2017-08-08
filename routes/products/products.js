const Router = require('express').Router
const bodyParser = require('body-parser')
const boom = require('boom')
const model = require('../../models/products')
const Joi = require('joi')
const celebrate = require('celebrate')
const jwt = require('express-jwt')

const productSchema = Joi.object().keys({
	name: Joi.string().min(3).max(30).required()
})

const listingSchema = Joi.object().keys({
  offset: Joi.number().positive().default(0),
  limit: Joi.number().positive().default(2),
  fields: Joi.array().items(Joi.string().valid(productSchema._inner.children.map(c => c.key))).default(false)
})

function requireAuth () {
    return jwt({
	    secret: 'secret'
	})
}

class Products {
	constructor (model) {
		 this._model = model

	    this.router = Router()
	    this.router.route('/')
	      .post(
	      	requireAuth(),
		    bodyParser.json(), 
		    celebrate({ body: productSchema }),
	      	(req, res, next) => this.new(req, res).catch(next)
	      )
	      .get(
	      	celebrate({ query: listingSchema }),
	      	(req, res, next) => this.list(req, res).catch(next)
	      )
	}

	async new (req, res) {
		const { name } = Joi.attempt(req.body, productSchema)
		if (!name) {
			throw boom.badRequest('name is missing!')
		}
		const id = this._model.length + 1
		const description = "<p>Maecenas sit amet arcu convallis, tempus nunc ut, maximus tellus. Morbi venenatis nisl nec molestie bibendum. Quisque mauris dolor, mollis id fermentum et, ullamcorper a ante. Nulla facilisi. Sed cursus sodales viverra. Nam vitae pharetra odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam libero sapien, porttitor et mi in, bibendum accumsan sem. Duis et sem rutrum mi mollis semper nec non magna. Suspendisse molestie quam ut enim ornare, quis vehicula neque rhoncus. Curabitur nec metus elit. Fusce et rutrum erat. Praesent tempus mi lacus, ac viverra tortor imperdiet vitae. Aliquam maximus, erat ac eleifend porttitor, arcu nunc faucibus nibh, ut dictum magna felis in sapien.</p>"
		const price = "0 PLN"
		if (Object.keys(req.body).length > 1) {
			throw boom.badRequest(`Extra fields given: ${Object.keys(req.body)}`)
		}
		const product = await this._model.newProduct(name)

		res
			.status(201)
			.set('Content-Location', `/api/products/${id}`)
			.json(product)
	}

	async list (req, res) {
	    const { limit, offset, fields } = req.query
	    const [len, products] = await Promise.all([
	      this._model.length,
	      this._model.products(limit, offset, fields)
	    ])
	    const hasNext = offset + limit < len
	    const hasPrev = offset > 0

	    const nextLimit = hasNext ? Math.min(limit, len - offset - limit) : limit
	    const nextOffset = offset + limit

	    const prevLimit = hasPrev ? Math.min(limit, offset) : 0
	    const prevOffset = Math.max(offset - limit, 0)

	    const link = (limit, offset) => {
	      return `${req.protocol}://${req.header('Host')}${req.baseUrl}?limit=${nextLimit}&offset=${nextOffset}`
	    }
	    res
	      .links({
	        next: hasNext ? link(nextLimit, nextOffset) : null,
	        prev: hasPrev ? link(prevLimit, prevOffset) : null
	      })
	      .json(products)
	  }

}

module.exports = new Products(model).router