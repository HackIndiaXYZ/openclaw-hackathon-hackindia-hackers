import Task from "@/models/Task";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const task = await Task.create(body);

    return NextResponse.json(task, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const workspaceId = searchParams.get("workspaceId");

    const tasks = await Task.find({ workspaceId }).sort({ createdAt: -1 });

    return NextResponse.json(tasks);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}