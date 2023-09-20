import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ChatMessage = string;

type UserChat = {
  isOpen: boolean;
  messages: ChatMessage[];
  error?: string;
};

const initialState: UserChat = {
  isOpen: false,
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    openChatModal: (state) => {
      state.isOpen = true;
    },
    closeChatModal: (state) => {
      state.isOpen = false;
    },
    toggleChatModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    sendMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload);
    },
  },
});

export const { openChatModal, closeChatModal, toggleChatModal, sendMessage } =
  chatSlice.actions;
export const chatReducer = chatSlice.reducer;
