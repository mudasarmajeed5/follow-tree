"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const Dashboard = () => {
  const router = useRouter();
  const {data:session,status} = useSession();
  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status !== "authenticated") {
    // Prevent rendering the Dashboard while redirecting
    return( 
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex justify-center items-center gap-2">
        <span>Redirecting...</span>
        <span className="p-2 border-t-yellow-500 border-white border rounded-full animate-spin"></span>
      </div>
      </div>)
  }
  return (
    <div className="min-h-screen">Dashboard</div>
  )
}

export default Dashboard