"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
const DropMenu = () => {
    const { data: session } = useSession();
    let username;
    if (session && session.user && session.user.email) {
        username = session?.user?.email.split("@")[0];
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger><img src={session?.user?.image || "/profile.png"} width={40} className="rounded-full" alt="P" /></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Link href={`/${username}/dashboard`}>Dashboard</Link></DropdownMenuItem>
                <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                <DropdownMenuItem>Switch Account</DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>Signout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default DropMenu
