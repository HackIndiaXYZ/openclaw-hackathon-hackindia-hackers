import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-black border-r border-pink-600 flex flex-col p-6 gap-6">
      <h2 className="text-pink-400 text-xl font-semibold mb-4">Menu</h2>

      <Link href="/dashboard" className="text-gray-300 hover:text-pink-400 transition">Overview</Link>
      <Link href="/workspaces" className="text-gray-300 hover:text-pink-400 transition">Workspaces</Link>
      <Link href="/settings" className="text-gray-300 hover:text-pink-400 transition">Settings</Link>
    </div>
  );
}