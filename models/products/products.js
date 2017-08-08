class Products {
	constructor (data) {
		this._data = data
	}

	async products () {
		return this._data.slice(0)
	}

	async newProduct (name) {
	    const id = this._data.length + 1
	    const description = "<p>Maecenas sit amet arcu convallis, tempus nunc ut, maximus tellus. Morbi venenatis nisl nec molestie bibendum. Quisque mauris dolor, mollis id fermentum et, ullamcorper a ante. Nulla facilisi. Sed cursus sodales viverra. Nam vitae pharetra odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam libero sapien, porttitor et mi in, bibendum accumsan sem. Duis et sem rutrum mi mollis semper nec non magna. Suspendisse molestie quam ut enim ornare, quis vehicula neque rhoncus. Curabitur nec metus elit. Fusce et rutrum erat. Praesent tempus mi lacus, ac viverra tortor imperdiet vitae. Aliquam maximus, erat ac eleifend porttitor, arcu nunc faucibus nibh, ut dictum magna felis in sapien.</p>"
	    const price = "101 PLN"
	    const product = { id, name, description, price }

	    this._data.push(product)

	    return product
	  }
}

module.exports = new Products([
  {
    "id": "1",
    "name": "SERWER 1",
    "description": "<p>Maecenas sit amet arcu convallis, tempus nunc ut, maximus tellus. Morbi venenatis nisl nec molestie bibendum. Quisque mauris dolor, mollis id fermentum et, ullamcorper a ante. Nulla facilisi. Sed cursus sodales viverra. Nam vitae pharetra odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam libero sapien, porttitor et mi in, bibendum accumsan sem. Duis et sem rutrum mi mollis semper nec non magna. Suspendisse molestie quam ut enim ornare, quis vehicula neque rhoncus. Curabitur nec metus elit. Fusce et rutrum erat. Praesent tempus mi lacus, ac viverra tortor imperdiet vitae. Aliquam maximus, erat ac eleifend porttitor, arcu nunc faucibus nibh, ut dictum magna felis in sapien.</p>",
    "price": "300 PLN"
  },
  {
    "id": "2",
    "name": "SERWER 2",
    "description": "<p>Maecenas sit amet arcu convallis, tempus nunc ut, maximus tellus. Morbi venenatis nisl nec molestie bibendum. Quisque mauris dolor, mollis id fermentum et, ullamcorper a ante. Nulla facilisi. Sed cursus sodales viverra. Nam vitae pharetra odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam libero sapien, porttitor et mi in, bibendum accumsan sem. Duis et sem rutrum mi mollis semper nec non magna. Suspendisse molestie quam ut enim ornare, quis vehicula neque rhoncus. Curabitur nec metus elit. Fusce et rutrum erat. Praesent tempus mi lacus, ac viverra tortor imperdiet vitae. Aliquam maximus, erat ac eleifend porttitor, arcu nunc faucibus nibh, ut dictum magna felis in sapien.</p>",
    "price": "300 PLN"
  },
  {
    "id": "3",
    "name": "SERWER 3",
    "description": "<p>Maecenas sit amet arcu convallis, tempus nunc ut, maximus tellus. Morbi venenatis nisl nec molestie bibendum. Quisque mauris dolor, mollis id fermentum et, ullamcorper a ante. Nulla facilisi. Sed cursus sodales viverra. Nam vitae pharetra odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam libero sapien, porttitor et mi in, bibendum accumsan sem. Duis et sem rutrum mi mollis semper nec non magna. Suspendisse molestie quam ut enim ornare, quis vehicula neque rhoncus. Curabitur nec metus elit. Fusce et rutrum erat. Praesent tempus mi lacus, ac viverra tortor imperdiet vitae. Aliquam maximus, erat ac eleifend porttitor, arcu nunc faucibus nibh, ut dictum magna felis in sapien.</p>",
    "price": "300 PLN"
  }
])