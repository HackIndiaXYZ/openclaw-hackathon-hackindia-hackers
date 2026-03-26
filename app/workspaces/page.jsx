"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import CreateWorkspaceModal from "@/components/CreateWorkspaceModal";
import AuthGuard from "@/components/AuthGuard";
import Link from "next/link";

export default function WorkspacesPage() {
  const { data: session } = useSession();
  const [workspaces, setWorkspaces] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (session?.user?.id) {
      fetch(`/api/workspaces?userId=${session.user.id}`)
    .then((res) => res.json())
        .then((data) => setWorkspaces(data));
    }
  }, [session]);

  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-black text-white">
        <Sidebar />
        <div className="flex-1">
          <Navbar />

          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-pink-400">Your Workspaces</h1>
              <button
                onClick={() => setOpen(true)}
                className="bg-pink-600 hover:bg-pink-500 text-black px-4 py-2 rounded-md transition"
              >
                Create Workspace
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {workspaces.map((ws) => (
                <Link
                  href={`/workspaces/${ws._id}`}
                  key={ws._id}
                  className="bg-zinc-900 border border-pink-500 p-6 rounded-xl hover:border-pink-300 transition"
                >
                  <h2 className="text-xl font-semibold text-pink-400">{ws.name}</h2>
                  <p className="text-gray-400 text-sm mt-2">{ws.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {open && <CreateWorkspaceModal close={() => setOpen(false)} />}
    </AuthGuard>
    );
}