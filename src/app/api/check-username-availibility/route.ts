import { NextResponse } from "next/server";
import connectDB from "@/app/Database/mongodb";
import User from "@/app/models/User";
export async function POST(request:Request){
    try {
        await connectDB();
        const username = request.headers.get("username");
        const isAvailable = await User.findOne({username:username})
        if (!isAvailable){
            console.log('User not found!');
            return NextResponse.json({status:true,code:200,message:"Username is available"})
        }
        return NextResponse.json({status:false,code:404,message:"Username is not available"})
    } catch (error) {
        const err = error as Error;
        console.log("Error: ",err);
        return NextResponse.json({status:false})
    }
}