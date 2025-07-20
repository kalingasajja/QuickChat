import express from 'express';
import { getAllUsers, getMessages, markAsSeen, sendMessage } from '../controllers/messageController.js';
import { protectRoute } from '../middleware/auth.js';

const messageRouter = express.Router();

messageRouter.get("/users",protectRoute,getAllUsers)
messageRouter.get("/:id",protectRoute,getMessages)
messageRouter.put("/mark/:id",protectRoute,markAsSeen)
messageRouter.post("/send/:id",protectRoute,sendMessage)


export default messageRouter;
