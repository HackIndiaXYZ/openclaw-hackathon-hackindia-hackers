"use client";

export default function TaskSidebar() {
  return (
    <div className="w-64 bg-neutral-100 h-full border-r p-4">
      <h2 className="text-lg font-semibold mb-4">Tasks</h2>

      <div className="space-y-3">
        <button className="block w-full text-left p-2 hover:bg-neutral-200 rounded">
          All Tasks
        </button>
        <button className="block w-full text-left p-2 hover:bg-neutral-200 rounded">
          Assigned to You
        </button>
        <button className="block w-full text-left p-2 hover:bg-neutral-200 rounded">
          Completed
        </button>
      </div>

      <hr className="my-4" />

      <p className="text-sm text-neutral-600">Labels</p>

      <div className="space-y-2 mt-2">
        <span className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 rounded bg-blue-500" /> Work
        </span>
        <span className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 rounded bg-green-500" /> Personal
        </span>
      </div>
    </div>
  );
}