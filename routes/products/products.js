const Router = require('express').Router
const bodyParser = require('body-parser')
const boom = require('boom')
const model = require('../../models/products')

class Products {
	constructor (model) {
		 this._model = model

	    this.router = Router()
	    this.router.route('/')
	      .post(bodyParser.json(), (req, res, next) => this.new(req, res).catch(next))
	      .get((req, res, next) => this.list(req, res).catch(next))
	}

	async new (req, res) {
		const name = req.body.name
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
	    res.json(await this._model.products())
	  }

}

module.exports = new Products(model).router