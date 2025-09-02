import { Globe, Users } from "lucide-react";

export default function Guest() {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Welcome to WS Chat Client 🎉
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Join thousands of people in our vibrant chat rooms
        </p>
        <div className="flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-sky-500" />
            <span>5,549 Online Users</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-emerald-500" />
            <span>24/7 Active</span>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Join the Conversation?
          </h3>
          <p className="text-sky-100 mb-6 text-lg">
            Sign up now and start chatting with people from around the world!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white cursor-pointer text-sky-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Create Account
            </button>
            <button className="border-2 cursor-pointer border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-500 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
