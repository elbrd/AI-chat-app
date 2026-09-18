import { Schema, model } from "mongoose";

const chatsessionSchema = new Schema(
  {
    messages: [
      {
        role: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true },
);

const Chatsession = model("Chatsession", chatsessionSchema);

export default Chatsession;
