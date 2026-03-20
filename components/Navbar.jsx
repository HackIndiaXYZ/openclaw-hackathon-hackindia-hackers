"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="w-full bg-zinc-950 border-b border-pink-600 px-6 py-3 flex justify-between items-center">
      <h1 className="text-pink-500 text-2xl font-bold">TeamSync</h1>

      <div className="flex items-center gap-6">
        <Link href="/dashboard" className="text-gray-300 hover:text-pink-400 transition">Dashboard</Link>
        <Link href="/workspaces" className="text-gray-300 hover:text-pink-400 transition">Workspaces</Link>

        {session ? (
          <button
            onClick={() => signOut()}
            className="border border-pink-500 text-pink-400 px-3 py-1 rounded-md hover:bg-pink-500 hover:text-black transition"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="border border-pink-500 text-pink-400 px-3 py-1 rounded-md hover:bg-pink-500 hover:text-black transition"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
