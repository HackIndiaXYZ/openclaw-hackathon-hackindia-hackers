import mongoose from "mongoose";

const WorkspaceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    tags: [String],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export default mongoose.models.Workspace || mongoose.model("Workspace", WorkspaceSchema);
