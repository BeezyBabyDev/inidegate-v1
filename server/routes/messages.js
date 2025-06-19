const express = require('express')
const router = express.Router()
const Conversation = require('../models/Conversation')
const Message = require('../models/Message')
const User = require('../models/User')

// Get all conversations for a user
router.get('/conversations/:userId', async (req, res) => {
  try {
    const conversations = await Conversation.find({
      participants: req.params.userId,
    })
      .populate('participants', 'name email avatar userType')
      .populate({
        path: 'lastMessage',
        select: 'content status createdAt sender',
        populate: { path: 'sender', select: 'name email avatar userType' },
      })
      .sort({ updatedAt: -1 })
    res.json({ conversations })
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch conversations', details: err.message })
  }
})

// Get messages in a conversation
router.get('/:conversationId', async (req, res) => {
  try {
    const messages = await Message.find({ conversation: req.params.conversationId })
      .populate('sender', 'name email avatar userType')
      .sort({ createdAt: 1 })
    res.json({ messages })
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages', details: err.message })
  }
})

// Send a message
router.post('/:conversationId', async (req, res) => {
  try {
    const { sender, content, attachments } = req.body
    // Create new message
    const message = await Message.create({
      conversation: req.params.conversationId,
      sender,
      content,
      attachments: attachments || [],
      status: 'sent',
    })
    // Update conversation's lastMessage and updatedAt
    await Conversation.findByIdAndUpdate(req.params.conversationId, {
      lastMessage: message._id,
      updatedAt: new Date(),
    })
    res.json({ success: true, message })
  } catch (err) {
    res.status(500).json({ error: 'Failed to send message', details: err.message })
  }
})

// Create a new conversation (if not exists)
router.post('/conversations', async (req, res) => {
  try {
    const { participantIds } = req.body // Array of user IDs
    if (!participantIds || !Array.isArray(participantIds) || participantIds.length < 2) {
      return res
        .status(400)
        .json({ error: 'participantIds must be an array of at least two user IDs.' })
    }
    // Check if conversation already exists (regardless of order)
    const existing = await Conversation.findOne({
      participants: { $all: participantIds, $size: participantIds.length },
    })
    if (existing) {
      return res.json({ conversation: existing, alreadyExisted: true })
    }
    // Create new conversation
    const conversation = await Conversation.create({ participants: participantIds })
    res.json({ conversation, alreadyExisted: false })
  } catch (err) {
    res.status(500).json({ error: 'Failed to create conversation', details: err.message })
  }
})

// Mark all messages in a conversation as read for a user
router.post('/:conversationId/read', async (req, res) => {
  try {
    const { userId } = req.body
    if (!userId) {
      return res.status(400).json({ error: 'userId is required in request body.' })
    }
    // Update all messages in the conversation not sent by this user
    await Message.updateMany(
      { conversation: req.params.conversationId, sender: { $ne: userId }, status: { $ne: 'read' } },
      { $set: { status: 'read' } }
    )
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: 'Failed to mark messages as read', details: err.message })
  }
})

module.exports = router
