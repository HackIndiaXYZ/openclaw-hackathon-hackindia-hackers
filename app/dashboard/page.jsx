"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import AuthGuard from "@/components/AuthGuard";

export default function DashboardPage() {
  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-black text-white">
        <Sidebar />

        <div className="flex-1">
          <Navbar />

          <div className="p-6">
            <h1 className="text-3xl font-bold text-pink-400 mb-4">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-900 border border-pink-500 p-6 rounded-xl">
                <h2 className="text-lg text-gray-300">Total Workspaces</h2>
                <p className="text-3xl font-bold text-pink-400 mt-2">0</p>
              </div>

              <div className="bg-zinc-900 border border-pink-500 p-6 rounded-xl">
                <h2 className="text-lg text-gray-300">Tasks</h2>
                <p className="text-3xl font-bold text-pink-400 mt-2">0</p>
              </div>

              <div className="bg-zinc-900 border border-pink-500 p-6 rounded-xl">
                <h2 className="text-lg text-gray-300">Members</h2>
                <p className="text-3xl font-bold text-pink-400 mt-2">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
