import { Schema, model } from "mongoose";

const chatSchema = new Schema(
  {
    prompt: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Chat = model("Chat", chatSchema);

export default Chat;
