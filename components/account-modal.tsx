import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AccountModal() {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg overflow-hidden w-[90%] max-w-md">
        <div className="p-6 text-center">
          <h2 className="text-black text-xl font-semibold mb-4">Already have an account?</h2>
        </div>

        <div className="border-t border-neutral-200">
          <Link href="/login">
            <Button variant="ghost" className="w-full py-4 text-[#0095F6] text-lg font-normal rounded-none">
              Log in
            </Button>
          </Link>
        </div>

        <div className="border-t border-neutral-200">
          <Button variant="ghost" className="w-full py-4 text-[#0095F6] text-lg font-normal rounded-none">
            Continue creating account
          </Button>
        </div>
      </div>
    </div>
  )
}
