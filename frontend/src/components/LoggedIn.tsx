import { Zap, Users } from "lucide-react";
import type { LucideProps } from "lucide-react";

import type { IRoom } from "@packages/types/room";

export interface IRoomClient extends IRoom {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  members: number;
  color: string;
  isPopular?: boolean;
}

interface LoggedInProps {
  chatRooms: IRoomClient[];
}

export default function LoggedIn({ chatRooms }: LoggedInProps) {
  return (
    <>
      {/* Popular Rooms Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
          <Zap className="w-6 h-6 text-yellow-500" />
          Popular Rooms
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {chatRooms
            .filter((room) => room.isPopular)
            .map((room) => {
              const IconComponent = room.icon;
              return (
                <div
                  key={room.id}
                  className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 hover:scale-105"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`${room.color} p-3 rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white text-lg">
                        {room.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{room.members.toLocaleString()} members</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {room.description}
                  </p>
                </div>
              );
            })}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
          Discover More Rooms
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {chatRooms
            .filter((room) => !room.isPopular)
            .map((room) => {
              const IconComponent = room.icon;
              return (
                <div
                  key={room.id}
                  className="group bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 hover:scale-102"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`${room.color} p-2 rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800 dark:text-white">
                        {room.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        <Users className="w-3 h-3" />
                        <span>{room.members.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
                    {room.description}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
