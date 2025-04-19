import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import MobileNavbar from "@/components/mobile-navbar"
import StatusBar from "@/components/status-bar"

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#1A2A36] to-[#0F1A21] text-white">
      <StatusBar time="12:00" />

      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12 gap-8">
        <div className="w-24 h-24 flex items-center justify-center">
          <div className="w-20 h-20 rounded-xl overflow-hidden bg-gradient-to-tr from-purple-600 via-pink-600 to-yellow-500">
            <div className="w-12 h-12 bg-transparent m-4 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </div>

        <form className="w-full space-y-4">
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Correo"
              className="bg-[#121C24] border-[#121C24] text-white py-6 rounded-md"
            />

            <Input
              type="password"
              placeholder="Asunto"
              className="bg-[#121C24] border-[#121C24] text-white py-6 rounded-md"
            />
          </div>

          <Button className="w-full bg-[#0095F6] hover:bg-[#0095F6]/90 text-white py-6 rounded-md text-lg">
            Log in
          </Button>

          <div className="text-center">
            <Link href="/forgot-password" className="text-[#0095F6] text-lg">
              Forgot password?
            </Link>
          </div>
        </form>
      </div>

      <div className="mt-auto">
        <div className="border-t border-neutral-700 p-4">
          <Link href="/signup">
            <Button variant="outline" className="w-full border-neutral-600 text-[#0095F6] py-6 rounded-md text-lg">
              Create new account
            </Button>
          </Link>
        </div>

        <div className="text-center p-4 text-neutral-400">
          <div className="h-10 flex items-center justify-center">
            <span className="font-bold text-xl">Meta</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center border-t border-neutral-800 py-2 text-neutral-500 text-sm">
        <span className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-lock"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          DevMace.com — Private
        </span>
      </div>

      <MobileNavbar />
    </div>
  )
}
