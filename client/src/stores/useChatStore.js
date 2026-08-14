import axios from "axios";
import { create } from "zustand";
import { API_URL } from "../utils/api";

export const useChatStore = create((set) => ({
  prompt: null,
  answer: null,
  sources: null,

  error: null,
  loading: null,

  sendPrompt: async (prompt) => {
    try {
      set({ prompt, answer: null, sources: null, error: false, loading: true });

      const response = await axios.post(`${API_URL}/api/chat`, {
        prompt,
      });

      set({
        answer: response.data.answer,
        sources: response.data.sources || null,
        error: false,
        loading: false,
      });
    } catch (error) {
      set({
        answer: null,
        sources: null,
        error: error.response?.data?.message || error.message,
        loading: false,
      });
    }
  },
}));
