import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-sky-400 max-h-56 flex items-center py-4 justify-between px-6 shadow-lg">
      <h2 className="font-bold text-white text-2xl tracking-wide">
        WS Chat Client
      </h2>
      <div className="flex gap-x-3">
        <Button
          variant="outline"
          className="bg-white/10 cursor-pointer text-white border-white/30 hover:bg-white/20 hover:text-white hover:border-white/50 transition-all duration-200 backdrop-blur-sm"
        >
          <LogIn className="w-4 h-4" />
          Sign In
        </Button>
        <Button className="bg-white cursor-pointer text-sky-500 hover:bg-gray-100 hover:text-sky-600 transition-all duration-200 font-semibold shadow-md">
          <UserPlus className="w-4 h-4" />
          Sign Up
        </Button>
      </div>
    </header>
  );
}
