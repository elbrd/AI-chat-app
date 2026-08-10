import mongoose, { Schema, model } from "mongoose";

const chatSchema = new Schema({
  prompt: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  timestamp = true,
});

const Chat = model("Chat", chatSchema);

export default Chat;
