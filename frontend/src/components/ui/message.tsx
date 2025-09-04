import React from "react";
import type { IChatUser } from "@packages/types/message";

export default function Message({
  id,
  content,
  roomId,
  sender,
  timestamp,
}: IChatUser) {
  const isCurrentUser = false;

  const user = "John";

  const time = "07:00";
  return (
    <div
      key={id}
      className={`flex ${isCurrentUser ? "justify-end" : "justify-start"} `}
    >
      <div className="flex flex-col max-w-xs ">
        <p
          className={`text-sm font-medium text-gray-700 mb-1 ${
            isCurrentUser ? "mr-2 self-end " : "ml-2"
          }`}
        >
          {user}
        </p>

        <div
          className={`relative px-3 py-2 rounded-lg ${
            isCurrentUser
              ? "bg-blue-500 text-white rounded-br-none"
              : "bg-white text-gray-800 rounded-bl-none shadow-sm border-2 border-blue-400"
          }`}
        >
          <p>{content}</p>
          <span className={`absolute bottom-0 ${isCurrentUser}`} />
        </div>
        <time
          className={`text-xs text-gray-500 mt-1 ${
            isCurrentUser ? "text-right mr-1" : "ml-1"
          }`}
          dateTime={time}
        >
          {time}
        </time>
      </div>
    </div>
  );
}
