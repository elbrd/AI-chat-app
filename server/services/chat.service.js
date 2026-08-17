import Chat from "../models/chat.model.js";
import Chatsession from "../models/chatsession.model.js";

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

// Create chatsession
export const createChatsession = async (messages) => {
  try {
    console.log(messages);
    const result = await Chatsession.create(messages);

    return {
      success: true,
      chatsession: result,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

// Get chatsession
export const getChatsession = async (_id) => {
  try {
    const result = await Chatsession.findById(_id);

    if (result) {
      return {
        success: true,
        chatsession: result,
      };
    } else throw new Error("Failed to fetch chatsession");
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
