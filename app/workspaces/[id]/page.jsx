"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import AuthGuard from "@/components/AuthGuard";
import { useParams } from "next/navigation";

export default function WorkspaceDetail() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`/api/workspaces/${id}`).then((res) => res.json()).then(setDetails);
  }, [id]);

  if (!details)
    return (
      <div className="flex items-center justify-center text-pink-400 h-screen">
        Loading workspace...
      </div>
    );

  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-black text-white">
        <Sidebar />
        <div className="flex-1">
          <Navbar />

          <div className="p-6">
            <h1 className="text-3xl font-bold text-pink-400">{details.name}</h1>
            <p className="text-gray-400 mt-2">{details.description}</p>

            <div className="flex gap-2 mt-4">
              {details.tags.map((t) => (
                <span key={t} className="bg-pink-600 text-black px-3 py-1 rounded-full text-sm">{t}</span>
              ))}
            </div>

            <h2 className="text-xl font-semibold text-pink-400 mt-6 mb-2">Members</h2>
            <ul className="text-gray-300 ml-2 list-disc">
              {details.members?.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
        
            {/* TASKS + CHAT WILL BE ADDED HERE */}
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}