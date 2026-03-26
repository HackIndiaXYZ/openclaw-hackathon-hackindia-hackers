import { NextResponse } from "next/server";
import Workspace from "@/models/Workspace";
import { connectDB } from "@/lib/db";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const newWS = await Workspace.create(body);

    return NextResponse.json(newWS);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Failed to create workspace" }, { status: 500 });
  }
}