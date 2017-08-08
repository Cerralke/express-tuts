/* eslint-env mocha */

const request = require('supertest')
const expect = require('chai').expect

const app = require('./app')

describe('Server', () => {

  it('should serve HTML at /', () => {
    return request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
  })

  it('should serve list of products at /api/products', () => {
    return request(app)
      .get('/api/products')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(response => {
        expect(response.body.length).to.equal(4)
      })
  })

  it('should add new product at /api/products', () => {
    return request(app)
      .post('/api/products')
      .send({ name: "Znowu Test" })
      .expect(201)
  })

  it('should return error at /api/products with wrong data', () => {
    return request(app)
      .post('/api/products')
      .expect(400)
  })
})