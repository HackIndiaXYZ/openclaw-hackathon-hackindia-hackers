"use client";

import useTaskModal from "@/store/useTaskModal";
import { useState } from "react";

export default function TaskModal() {
  const { isOpen, close } = useTaskModal();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  async function handleSubmit() {
    const res = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        workspaceId: "default", // later map to real workspace
        createdBy: "user123",
      }),
    });

    if (res.ok) {
      close();
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg">

        <h2 className="text-xl font-semibold mb-4">Create Task</h2>

        <input
          className="w-full border p-2 rounded mb-3"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full border p-2 rounded mb-3"
          placeholder="Description"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button onClick={close} className="px-4 py-2 border rounded">
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}