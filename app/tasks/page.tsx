"use client";

import TaskNavbar from "@/components/tasks/TaskNavbar";
import TaskSidebar from "@/components/tasks/TaskSidebar";
import TaskBoard from "@/components/tasks/TaskBoard";
import TaskModal from "@/components/tasks/TaskModal";

export default function TasksPage() {
  return (
    <div className="flex h-screen w-full">
      <TaskSidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <TaskNavbar />
        <TaskBoard />
        <TaskModal />
      </div>
    </div>
  );
}