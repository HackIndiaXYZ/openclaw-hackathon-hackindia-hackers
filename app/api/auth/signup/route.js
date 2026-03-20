import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import UserModel from "@/models/User";
import { connectDB } from "@/lib/db";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    await connectDB();

    const exist = await UserModel.findOne({ email });
    if (exist) return NextResponse.json({ error: "User exists" }, { status: 400 });

    const hashPass = await bcryptjs.hash(password, 10);

    await UserModel.create({ name, email, password: hashPass });

    return NextResponse.json({ message: "User created" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}