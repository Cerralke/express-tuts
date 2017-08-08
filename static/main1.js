"use strict";
// // DOM

// var $product = document.createElement("div");
// $product.className = "product";

// var $photo = document.createElement("div");
// $photo.className = "photo";
// var $img = document.createElement("img");
// $img.src = "https://xpla.org/ext/lorempixel/250/250/technics/1/";
// $photo.appendChild($img);

// var $name = document.createElement("div");
// $name.className = "name";
// var $header = document.createElement("h3");
// $header.textContent = "DOM TAKI FAJNY";
// $name.appendChild($header);

// var $description = document.createElement("div");
// $description.className = "description";
// $description.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et dui odio. Vivamus ultrices leo non arcu vehicula, eu tincidunt augue cursus. Nullam euismod volutpat porttitor. Pellentesque eleifend varius justo, eget pellentesque mauris interdum ac. Vivamus malesuada dictum urna, vel porttitor nibh egestas convallis. Pellentesque ornare odio nec justo gravida, a cursus sapien consectetur. Quisque sed sodales nisi. Vestibulum eget ante sem. Etiam sit amet lorem in velit pulvinar suscipit eget et ligula. Sed facilisis iaculis leo, ut dictum lorem. Praesent dapibus eu quam quis tincidunt. Donec venenatis elit eget nulla elementum, eget vulputate libero vestibulum. Praesent dapibus elit non dolor rhoncus pretium. Donec ultricies dapibus tortor, non varius lectus dictum quis. Nulla nunc urna, vehicula vel eros id, iaculis volutpat est.</p>"

// var $price = document.createElement("div");
// $price.className = "price";
// $price.textContent = "1 PLN"

// $product.appendChild($photo);
// $product.appendChild($name);
// $product.appendChild($description);
// $product.appendChild($price);

// document.querySelector(".products").appendChild($product);


// // TABLICA

// var productsArray = [
// 	{
// 		name: "Z TABLICY 1",
// 		description: "<p>Maecenas sit amet arcu convallis, tempus nunc ut, maximus tellus. Morbi venenatis nisl nec molestie bibendum. Quisque mauris dolor, mollis id fermentum et, ullamcorper a ante. Nulla facilisi. Sed cursus sodales viverra. Nam vitae pharetra odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam libero sapien, porttitor et mi in, bibendum accumsan sem. Duis et sem rutrum mi mollis semper nec non magna. Suspendisse molestie quam ut enim ornare, quis vehicula neque rhoncus. Curabitur nec metus elit. Fusce et rutrum erat. Praesent tempus mi lacus, ac viverra tortor imperdiet vitae. Aliquam maximus, erat ac eleifend porttitor, arcu nunc faucibus nibh, ut dictum magna felis in sapien.</p>",
// 		price: "300 PLN"
// 	},
// 	{
// 		name: "Z TABLICY 2",
// 		description: "<p>Maecenas sit amet arcu convallis, tempus nunc ut, maximus tellus. Morbi venenatis nisl nec molestie bibendum. Quisque mauris dolor, mollis id fermentum et, ullamcorper a ante. Nulla facilisi. Sed cursus sodales viverra. Nam vitae pharetra odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam libero sapien, porttitor et mi in, bibendum accumsan sem. Duis et sem rutrum mi mollis semper nec non magna. Suspendisse molestie quam ut enim ornare, quis vehicula neque rhoncus. Curabitur nec metus elit. Fusce et rutrum erat. Praesent tempus mi lacus, ac viverra tortor imperdiet vitae. Aliquam maximus, erat ac eleifend porttitor, arcu nunc faucibus nibh, ut dictum magna felis in sapien.</p>",
// 		price: "300 PLN"
// 	},
// 	{
// 		name: "Z TABLICY 3",
// 		description: "<p>Maecenas sit amet arcu convallis, tempus nunc ut, maximus tellus. Morbi venenatis nisl nec molestie bibendum. Quisque mauris dolor, mollis id fermentum et, ullamcorper a ante. Nulla facilisi. Sed cursus sodales viverra. Nam vitae pharetra odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam libero sapien, porttitor et mi in, bibendum accumsan sem. Duis et sem rutrum mi mollis semper nec non magna. Suspendisse molestie quam ut enim ornare, quis vehicula neque rhoncus. Curabitur nec metus elit. Fusce et rutrum erat. Praesent tempus mi lacus, ac viverra tortor imperdiet vitae. Aliquam maximus, erat ac eleifend porttitor, arcu nunc faucibus nibh, ut dictum magna felis in sapien.</p>",
// 		price: "300 PLN"
// 	}
// ]

// for (var k in productsArray) {
// 	var prod = productsArray[k];

// 	var $product = document.createElement("div");
// 	$product.className = "product";

// 	var $photo = document.createElement("div");
// 	$photo.className = "photo";
// 	var $img = document.createElement("img");
// 	$img.src = "https://xpla.org/ext/lorempixel/250/250/technics/1/";
// 	$photo.appendChild($img);

// 	var $name = document.createElement("div");
// 	$name.className = "name";
// 	var $header = document.createElement("h3");
// 	$header.textContent = prod.name;
// 	$name.appendChild($header);

// 	var $description = document.createElement("div");
// 	$description.className = "description";
// 	$description.innerHTML = prod.description;

// 	var $price = document.createElement("div");
// 	$price.className = "price";
// 	$price.textContent = prod.price;

// 	$product.appendChild($photo);
// 	$product.appendChild($name);
// 	$product.appendChild($description);
// 	$product.appendChild($price);

// 	document.querySelector(".products").appendChild($product);

// }

// API

class Model {
  constructor (products) {
    this._products = products
  }

  get products () {
    return this._products
  }
}

class View {
  constructor (model) {
    this._model = model
  }

  render () {
    return this._model.products
      .map(product => this.renderProduct(product))
  }

  renderProduct (prod) {
    var $product = document.createElement("div");
	$product.className = "product";

	var $photo = document.createElement("div");
	$photo.className = "photo";
	var $img = document.createElement("img");
	$img.src = "https://xpla.org/ext/lorempixel/250/250/technics/1/";
	$photo.appendChild($img);

	var $name = document.createElement("div");
	$name.className = "name";
	var $header = document.createElement("h3");
	$header.textContent = prod.name;
	$name.appendChild($header);

	var $description = document.createElement("div");
	$description.className = "description";
	$description.innerHTML = prod.description;

	var $price = document.createElement("div");
	$price.className = "price";
	$price.textContent = prod.price;

	$product.appendChild($photo);
	$product.appendChild($name);
	$product.appendChild($description);
	$product.appendChild($price);

    return $product
  }
}

function refresh () {
  const $products = document.querySelector('.products')
  $products.innerHTML = ''

  window.fetch('/api/products')
    .then(res => res.json())
    .then(products => {
      const model = new Model(products)
      const view = new View(model)
      view.render().map($product => {
        $products.appendChild($product)
      })
    })
}

refresh()

document.querySelector('form').addEventListener('submit', (ev) => {
  ev.preventDefault()

  const name = ev.target.querySelector('input[name=name]').value

  window.fetch('/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name })
  }).then(res => {
    if (res.ok) {
      refresh()
    } else {
      throw res.json()
    }
  }).catch(err => {
    const message = err.error ? err.error.message : err.message
    window.alert(message)
  })
})
