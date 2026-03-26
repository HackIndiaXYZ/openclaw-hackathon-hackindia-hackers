"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="w-full bg-zinc-950 border-b border-pink-600 px-6 py-3 flex justify-between items-center">
      <Link href="/" className="text-pink-500 text-2xl font-bold">
        TeamSync
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/dashboard" className="text-gray-300 hover:text-pink-400 transition">
          Dashboard
        </Link>
        <Link href="/workspaces" className="text-gray-300 hover:text-pink-400 transition">
          Workspaces
        </Link>

        {status === "loading" ? (
          <div className="w-16 h-8 bg-zinc-800 animate-pulse rounded-md" />
        ) : session ? (
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
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
    </nav>
  );
}