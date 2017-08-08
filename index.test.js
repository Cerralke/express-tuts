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
        expect(response.body.length).to.equal(3)
      })
  })

  it('should add new product', () => {
    return request(app)
      .post('/addProduct')
      .send('name=Testowy')
      .expect(303)
      .then(res => {
        return request(app)
          .get('/api/products')
          .then(res => {
            expect(res.body.length).to.equal(4)
          })
      })
  })
})