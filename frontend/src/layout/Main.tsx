import {
  MessageCircle,
  Gamepad2,
  Coffee,
  Music,
  Book,
  Code,
  Heart,
  Zap,
} from "lucide-react";

import LoggedIn from "@/components/LoggedIn";
import RoomTalks from "@/components/RoomTalks";

const chatRooms = [
  {
    id: 1,
    name: "General Chat",
    description: "Open discussion for everyone",
    icon: MessageCircle,
    members: 1247,
    color: "bg-blue-500",
    isPopular: true,
  },
  {
    id: 2,
    name: "Tech Talk",
    description: "Discuss latest in technology",
    icon: Code,
    members: 892,
    color: "bg-green-500",
    isPopular: true,
  },
  {
    id: 3,
    name: "Gaming Hub",
    description: "Gamers unite and play together",
    icon: Gamepad2,
    members: 1034,
    color: "bg-purple-500",
    isPopular: true,
  },
  {
    id: 4,
    name: "Coffee Corner",
    description: "Chill and casual conversations",
    icon: Coffee,
    members: 654,
    color: "bg-amber-500",
  },
  {
    id: 5,
    name: "Music Lounge",
    description: "Share and discover new music",
    icon: Music,
    members: 723,
    color: "bg-pink-500",
  },
  {
    id: 6,
    name: "Book Club",
    description: "Literary discussions and reviews",
    icon: Book,
    members: 456,
    color: "bg-indigo-500",
  },
  {
    id: 7,
    name: "Random",
    description: "Anything and everything goes",
    icon: Zap,
    members: 1156,
    color: "bg-yellow-500",
  },
  {
    id: 8,
    name: "Support",
    description: "Help and encouragement",
    icon: Heart,
    members: 387,
    color: "bg-red-500",
  },
];

export default function Main() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-7xl mx-auto md:mt-10">
        <RoomTalks />
      </div>
    </section>
  );
}
