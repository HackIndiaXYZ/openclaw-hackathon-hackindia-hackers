"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import AuthGuard from "@/components/AuthGuard"
import CreateWorkspaceModal from "@/components/CreateWorkspaceModal";

export default function Page() {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />

        {/* Header + workspace controls */}
        {/* <WorkspaceHeader /> */}

        {/* Workspace List */}
        {/* <div className="p-4 overflow-y-auto">
          <WorkspaceList />
        </div> */}

        {/* Modal (hidden by default, managed by Zustand or props) */}
        <CreateWorkspaceModal close={undefined} />
      </div>
    </div>
  );
}