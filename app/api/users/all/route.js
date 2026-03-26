import { NextResponse } from "next/server";
import User from "@/models/User"
import { connectDB } from "@/lib/db";

export async function GET() {
  await connectDB();
  const users = await User.find({}, "name email"); 
  return NextResponse.json(users);
}