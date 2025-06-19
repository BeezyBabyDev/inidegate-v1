require('dotenv').config()
const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const cors = require('cors')
const socketIo = require('socket.io')
const messagesRouter = require('./routes/messages')

const app = express()
const server = http.createServer(app)
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected')
})
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err)
})

// Health check
app.get('/', (req, res) => {
  res.send('IndieGate Messaging API is running')
})

// Placeholder /messages route
app.get('/messages', (req, res) => {
  res.json({ message: 'Messages endpoint works!' })
})

// Socket.IO setup
io.on('connection', socket => {
  console.log('A user connected:', socket.id)
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id)
  })
})

app.use('/messages', messagesRouter)

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
