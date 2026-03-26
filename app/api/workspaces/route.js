import { NextResponse } from "next/server";
import WorkspaceModel from "@/models/Workspace";
import { connectDB } from "@/lib/db";

export async function GET(req) {
  await connectDB();

  const userId = req.nextUrl.searchParams.get("userId");

  const workspaces = await WorkspaceModel.find({
    $or: [{ createdBy: userId }, { members: userId }],
  });

  return NextResponse.json(workspaces);
}