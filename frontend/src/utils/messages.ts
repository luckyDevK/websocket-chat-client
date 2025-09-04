import type { IChatUser } from "@packages/types/message";

export const dummyMessages: IChatUser[] = [
  {
    id: "1",
    content: "Hey, how are you doing?",
    roomId: "general",
    sender: "Alice",
    timestamp: "2025-09-04T14:20:00Z",
  },
  {
    id: "2",
    content: "I’m good, just working on my project 🚀",
    roomId: "general",
    sender: "Bob",
    timestamp: "2025-09-04T14:21:00Z",
  },
  {
    id: "3",
    content: "Nice! What project are you building?",
    roomId: "general",
    sender: "Charlie",
    timestamp: "2025-09-04T14:22:00Z",
  },
  {
    id: "4",
    content: "A chat app with WebSocket, still learning though 😅",
    roomId: "general",
    sender: "Bob",
    timestamp: "2025-09-04T14:23:00Z",
  },
  {
    id: "5",
    content: "That’s awesome! Keep it up 💪",
    roomId: "general",
    sender: "Alice",
    timestamp: "2025-09-04T14:24:00Z",
  },
];
