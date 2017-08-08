//#!/usr/bin/env node

const http = require('http')
const fs = require('fs')

const app = require('./app')

const port = process.env.PORT || 3000

http.createServer(app).listen(port, () => {
  console.log(`Listening on: ${port}`)
})
