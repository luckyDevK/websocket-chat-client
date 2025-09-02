import React, { useState } from "react";

export default function RoomTalks() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Khamr",
      text: "skskskkskskks",
      time: "20:00",
      isCurrentUser: false,
    },
    {
      id: 2,
      user: "You",
      text: "Hey everyone! What games are we playing tonight?",
      time: "20:02",
      isCurrentUser: true,
    },
    {
      id: 3,
      user: "GamerGirl92",
      text: "I'm up for some Valorant if anyone's interested!",
      time: "20:03",
      isCurrentUser: false,
    },
    {
      id: 4,
      user: "ProGamer",
      text: "I just got the new racing game. It's amazing!",
      time: "20:05",
      isCurrentUser: false,
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const newMsg = {
      id: messages.length + 1,
      user: "You",
      text: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isCurrentUser: true,
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
      <button>back</button>
      <header className="pb-4 border-b border-gray-200">
        <h1 className="capitalize font-bold text-2xl text-blue-600">
          Gaming Hub Room
        </h1>
        <p className="text-sm text-gray-500">12 players online</p>
      </header>

      <div className="flex-1 overflow-y-auto py-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.isCurrentUser ? "justify-end" : "justify-start"
            }`}
          >
            <div className="flex flex-col max-w-xs">
              {!message.isCurrentUser && (
                <p className="text-sm font-medium text-gray-700 mb-1 ml-1">
                  {message.user}
                </p>
              )}
              <div
                className={`relative px-4 py-2 rounded-lg ${
                  message.isCurrentUser
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-white text-gray-800 rounded-bl-none shadow-sm"
                }`}
              >
                <p>{message.text}</p>
                <span
                  className={`absolute bottom-0 ${message.isCurrentUser}`}
                />
              </div>
              <time
                className={`text-xs text-gray-500 mt-1 ${
                  message.isCurrentUser ? "text-right mr-1" : "ml-1"
                }`}
                dateTime={message.time}
              >
                {message.time}
              </time>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} className="mt-4 flex items-center">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-r-0 focus:border-transparent"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-r-lg hover:bg-blue-700 focus:outline-none cursor-pointer transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}
