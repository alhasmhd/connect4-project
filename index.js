/**
 * Express Web Service for Connect Four
 * WBE Practical Exercises 8-12
 */

const express = require('express')
const app = express()

// Create error object
function error(status, msg) {
  const err = new Error(msg)
  err.status = status
  return err
}

// Generate random ID
function guidGenerator() {
  const S4 = function() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4())
}

// Serve static files from public directory
app.use(express.static('public'))

// API key validation middleware
app.use('/api', function(req, res, next) {
  const key = req.query['api-key']
  
  // Missing key
  if (!key) { 
    return next(error(400, 'API key required'))
  }
  // Invalid key
  if (!apiKeys.includes(key)) {
    return next(error(401, 'Invalid API key'))
  }
  // Valid key
  req.key = key
  next()
})

// Accept JSON data
app.use(express.json())

// Valid API keys
const apiKeys = ['wbeweb', 'c4game']

// In-memory database with initial game state
const data = {
  '1234567890': { demodata: "WBE is an inspiring challenge" },
  'connect4-state': {
    board: [
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '']
    ],
    currentPlayer: 'b',
    gameActive: true,
    winner: null,
    stateHistory: []
  }
}

// GET request handler
app.get('/api/data/:id', function(req, res, next) {
  const id = req.params.id
  const result = data[id]

  if (result) res.send(result)
  else next()
})

// POST request handler
app.post('/api/data', function(req, res, next) {
  const id = guidGenerator()
  data[id] = req.body
  res.send({ id })
})

// DELETE request handler
app.delete('/api/data/:id', function(req, res, next) {
  const id = req.params.id
  delete data[id]
  res.sendStatus(204)
})

// PUT request handler
app.put('/api/data/:id', function(req, res, next) {
  const id = req.params.id
  if (data[id]) {
    data[id] = req.body
    res.send(req.body)
  }
  else next()
})

// Error handling middleware
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.send({ error: err.message })
})

// 404 handler
app.use(function(req, res) {
  res.status(404)
  res.send({ error: "not found" })
})

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
  console.log('Game available at: http://localhost:3000/connect4.html')
})