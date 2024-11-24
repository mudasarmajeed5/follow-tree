"use client";
import { Rss } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import DropMenu from "./DropMenu";
const Navbar = () => {
    const router = useRouter();
    const {data:session,status} = useSession();
    return (
        <nav className="bg-white sticky top-3 z-[50] text-black flex justify-between items-center rounded-full px-6 w-10/12 md:w-4/5 mx-auto py-4 my-6">
            <div className="flex">
                <Link href={"/"} className="flex gap-2 mx-5 items-center"><span><Rss className="text-3xl" /></span><span className="text-md md:text-xl">Follow-tree</span></Link>
                <div className="md:flex gap-2 hidden">
                    <Button variant="ghost"><Link href="/themes">Themes</Link></Button>
                    <Button variant="ghost"><Link href="/explore">Discover</Link></Button>
                    <Button variant="ghost"><Link href="/pricing">Pricing</Link></Button>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                {status == "authenticated"? <DropMenu/> :
                 <>
                 <Button onClick={()=>{router.push("/login")}}>Login</Button>
                 <Button onClick={()=>{router.push("/register")}} variant={"secondary"}>Signup</Button>
                 </>}
                
                <div className="md:hidden flex"><Menu/></div>
            </div>
        </nav>
    )
}

export default Navbar