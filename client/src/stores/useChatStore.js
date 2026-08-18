import axios from "axios";
import { create } from "zustand";
import { API_URL } from "../utils/api";

export const useChatStore = create((set, get) => ({
  prompt: null,
  answer: null,
  sources: null,

  sessionId: sessionStorage.getItem("sessionId") || null,
  setSessionId: (sessionId) => {
    if (!sessionId) return;

    sessionStorage.setItem("sessionId", sessionId);

    set({
      sessionId,
    });
  },

  chatsession: null,
  fetchChatsession: async () => {
    const sessionId = get().sessionId;
    console.log(sessionId);
    if (!sessionId) {
      set({ chatsession: null });
      return;
    }

    const response = await axios.get(`${API_URL}/api/chat`, {
      headers: {
        Authorization: `Bearer ${sessionId}`,
      },
    });

    if (!response.data.success) {
      set({ chatsession: null });
      return;
    }

    set({
      chatsession: response.data.chatsession.messages,
      prompt: null,
      answer: null,
      sources: null,
    });
  },

  error: null,
  loading: null,

  sendPrompt: async (prompt) => {
    try {
      set({ prompt, answer: null, sources: null, error: false, loading: true });

      const sessionId = get().sessionId;
      const config = sessionId
        ? {
            headers: {
              Authorization: `Bearer ${sessionId}`,
            },
          }
        : {};

      const response = await axios.post(
        `${API_URL}/api/chat`,
        {
          prompt,
        },
        config,
      );

      get().setSessionId(response.data.sessionId || null);
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
