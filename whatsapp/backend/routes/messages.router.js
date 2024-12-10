import express from "express";
import { createMessage, getConversation } from "../controllers/messages.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";


const messagesRouter = express.Router();

messagesRouter.post('/send', authMiddleware, createMessage)
messagesRouter.get('/conversation/:receiver_id', authMiddleware, getConversation)

export default messagesRouter