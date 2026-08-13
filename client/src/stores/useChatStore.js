import axios from "axios";
import { create } from "zustand";
import { API_URL } from "../utils/api";

export const useChatStore = create((set) => ({
  prompt: null,
  answer: null,

  error: null,
  loading: null,

  sendPrompt: async (prompt) => {
    try {
      set({ prompt, answer: null, loading: true });

      const response = await axios.post(`${API_URL}/chat`, {
        prompt,
      });

      set({ answer: response.data.answer, error: false, loading: false });
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
      set({
        answer: null,
        error: error.response?.data?.message || error.message,
        loading: false,
      });
    }
  },
}));
