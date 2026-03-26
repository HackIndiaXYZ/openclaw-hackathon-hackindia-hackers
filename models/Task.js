import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    workspaceId: { type: String, required: true },

    title: { type: String, required: true },

    description: { type: String, default: "" },

    status: {
      type: String,
      enum: ["todo", "in-progress", "completed"],
      default: "todo",
    },

    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },

    dueDate: { type: Date },

    createdBy: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);