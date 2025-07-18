// store/useChatStore.ts
import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export type ChatMessage = {
  id: string;
  content: string;
  createdAt: string;
  isSystem: boolean;
};

export type ChatThread = {
  id: string;
  userID: string;
  title: string;
  messages: ChatMessage[];
};

type ChatStore = {
  chatThread: ChatThread;
  addMessage: (message: Omit<ChatMessage, "id" | "createdAt">) => void;
  clearThread: () => void;
};

export const useChatStore = create<ChatStore>((set) => ({
  chatThread: {
    id: "thread-1",
    userID: "user-1",
    title: "Chat with AI",
    messages: [],
  },
  addMessage: (message) =>
    set((state) => ({
      chatThread: {
        ...state.chatThread,
        messages: [
          ...state.chatThread.messages,
          {
            ...message,
            id: uuidv4(),
            createdAt: new Date().toISOString(),
          },
        ],
      },
    })),
  clearThread: () =>
    set(() => ({
      chatThread: {
        id: "thread-1",
        userID: "user-1",
        title: "Chat with AI",
        messages: [],
      },
    })),
}));
