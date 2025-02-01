"use client";
import { Rss } from "lucide-react"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
const Navbar = () => {
    const { data: session } = useSession();
    const router = useRouter();
    return (
        <nav className="bg-slate-600 fixed md:top-3 top-3 left-1/2 translate-x-[-50%] z-[50] text-white flex justify-between items-center rounded-full px-6 w-11/12 md:w-4/5 mx-auto py-4">
            <div className="flex">
                <Link href={"/"} className="flex gap-2 mx-5 items-center"><span><Rss className="text-3xl" /></span><span className="text-md md:text-xl">Follow-tree</span></Link>
                <div className="md:flex gap-2 hidden">
                    <Button variant="ghost"><Link href="/themes">Themes</Link></Button>
                    <Button variant="ghost"><Link href="/explore">Discover</Link></Button>
                    <Button variant="ghost"><Link href="/pricing">Pricing</Link></Button>
                </div>
            </div>
            {
                session ? (
                    <div className="flex gap-2 items-center">
                        <Button onClick={() => { router.push(`/dashboard/loading`) }}>Dashboard</Button>
                        <Button onClick={() => signOut()}>Logout</Button>
                    </div>
                ) : (
                    <div className="flex gap-2 items-center">
                        <Button className='w-full' onClick={() => signIn()}>Log in</Button>
                        <Button onClick={() => { router.push("/register") }} variant={"secondary"}>Signup</Button>
                    </div>
                )
            }


        </nav>
    )
}

export default Navbar