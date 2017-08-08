const express = require('express')
const morgan = require('morgan')
const serveStatic = require('serve-static')
const compression = require('compression')
const bodyParser = require('body-parser')
const boom = require('boom')
const celebrate = require('celebrate')

const routes = require('./routes')

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
app.use(routes)	

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    next(boom.unauthorized(err.message))
  } else {
    next(err)
  }
})

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
      statusCode: err.output.statusCode,
      message: err.message
    })
})

app.use(celebrate.errors())

module.exports = app