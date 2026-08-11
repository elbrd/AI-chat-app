import Chat from "../models/chat.model.js";

// Save chat
export const saveChat = async (prompt, answer) => {
  try {
    const result = await Chat.create({ prompt, answer });

    return {
      success: true,
      chat: result,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
