"use client";

import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

export default function TaskBoard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/tasks?workspaceId=default");
      const data = await res.json();
      setTasks(data);
    }
    load();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto">
      {tasks.length === 0 && (
        <p className="text-neutral-500">No tasks found.</p>
      )}

      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
}