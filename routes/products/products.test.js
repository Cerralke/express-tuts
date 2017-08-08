/* eslint-env mocha */

const express = require('express')
const request = require('supertest')
const expect = require('chai').expect

const products = require('./products')
const app = express()
app.use(products)

describe('Products', () => {
  it('should serve list of products', () => {
    return request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(response => {
        expect(response.body.length).to.equal(3)
      })
  })

  it('should add new product', () => {
    return request(app)
      .post('/')
      .send({
        name: 'Test'
      })
      .expect(201)
      .then(res => {
        return request(app)
          .get('/')
          .then(res => {
            expect(res.body.length).to.equal(4)
          })
      })
  })
})