import Link from "next/link"
import { Home, Search, PlusSquare, Heart, User } from "lucide-react"

export default function MobileNavbar() {
  return (
    <div className="flex items-center justify-between p-4 border-t border-neutral-800 bg-black">
      <Link href="/" className="text-white">
        <Home className="w-6 h-6" />
      </Link>
      <Link href="/explore" className="text-white">
        <Search className="w-6 h-6" />
      </Link>
      <Link href="/create" className="text-white">
        <PlusSquare className="w-6 h-6" />
      </Link>
      <Link href="/activity" className="text-white">
        <Heart className="w-6 h-6" />
      </Link>
      <Link href="/profile" className="text-white">
        <User className="w-6 h-6" />
      </Link>
    </div>
  )
}
