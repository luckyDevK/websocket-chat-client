import { useState } from "react";
import { ArrowLeft } from "lucide-react";

import type { IChatUser } from "@packages/types/message";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Message from "./ui/message";
import { dummyMessages } from "@/utils/messages";

export default function RoomTalks() {
  const [messages, setMessages] = useState<IChatUser[]>(dummyMessages);

  function handleBack() {
    history.back();
  }

  return (
    <div className="relative flex flex-col min-h-max max-w-2xl mx-auto p-4 bg-gray-50 rounded-lg shadow-md border-2 border-blue-400">
      <div className="absolute -bottom-13 left-0 md:-left-25 md:top-0">
        <button
          onClick={handleBack}
          className="flex justify-center items-center gap-x-1  border-2 border-blue-400 cursor-pointer text-blue-400  w-fit py-1 px-2.5 active:bg-blue-400 active:text-white md:hover:bg-blue-400 md:hover:text-white rounded-md transition-colors ease-in-out"
        >
          <ArrowLeft strokeWidth={3} size={20} />
          <span className="font-bold">Back</span>
        </button>
      </div>
      <header className="pb-4 border-b-2 border-blue-400">
        <h1 className="capitalize font-bold text-2xl text-blue-400">
          Gaming Hub Room
        </h1>
        <p className="text-sm text-gray-500">12 players online</p>
      </header>

      <div className="flex-1 overflow-y-auto py-4 space-y-4">
        {messages.map((message) => (
          <Message
            key={message.id}
            content={message.content}
            id={message.id}
            roomId={message.roomId}
            sender={message.sender}
            timestamp={message.sender}
          />
        ))}
      </div>

      <div className="flex gap-x-2 mt-5">
        <Input
          name="sendMsg"
          placeholder="send your message..."
          className="focus-visible:ring-blue-400 focus:border-0"
        />
        <Button className="bg-blue-500 cursor-pointer hover:bg-blue-700 font-semibold">
          Send
        </Button>
      </div>
    </div>
  );
}
