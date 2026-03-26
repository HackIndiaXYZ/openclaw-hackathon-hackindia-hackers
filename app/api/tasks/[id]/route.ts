import Task from "@/models/Task";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const body = await req.json();

    const updated = await Task.findByIdAndUpdate(params.id, body, {
      new: true,
    });

    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    await Task.findByIdAndDelete(params.id);

    return NextResponse.json({ message: "Task deleted" });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}