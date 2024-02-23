import Link from "next/link"
import { GemIcon } from "lucide-react"
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

import { buttonVariants } from "@/components/ui/button"
import SignOutButton from "./SignOutButton";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <GemIcon />
        </Link>
        {session?.user ? (
          <SignOutButton/>
        ): (
          <Link className = { buttonVariants() }href = { "/sign-in" }>Sign in</Link>
        )}
    </div>
    </div >
  )
}

export default Navbar