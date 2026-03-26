"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function CreateWorkspaceModal({ close }) {
  const { data: session } = useSession();

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const [allUsers, setAllUsers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/users/all").then((r) => r.json()).then(setAllUsers);
  }, []);
  const filteredUsers = allUsers.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  const addTag = () => {
    if (tagInput.trim() !== "" && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
    }
    setTagInput("");
  };

  const removeMember = (id) => {
    setSelectedMembers(selectedMembers.filter((m) => m._id !== id));
  };

  const createWorkspace = async () => {
    await fetch("/api/workspaces/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
        name,
        description: desc,
        tags,
        createdBy: session.user.id,
        members: selectedMembers.map((m) => m._id),
      }),
    });

    close();
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-8 rounded-xl w-full max-w-lg border border-pink-500">
        <h2 className="text-2xl font-bold text-pink-400 mb-4">Create Workspace</h2>
        <div className="flex flex-col gap-4">
          <input
            placeholder="Workspace Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-black border border-pink-500 px-3 py-2 rounded-md text-white"
          />

          <textarea
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="bg-black border border-pink-500 px-3 py-2 rounded-md text-white h-24"
          />
     <div>
            <div className="flex gap-2 mb-2">
              <input
                placeholder="Add tag"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                className="bg-black border border-pink-500 px-3 py-2 rounded-md text-white flex-1"
              />
              <button onClick={addTag} className="bg-pink-600 px-4 py-2 rounded-md text-black">Add</button>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="bg-pink-600 text-black px-3 py-1 rounded-full text-sm">{t}</span>
              ))}
            </div>
          </div>

          <input
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-black border border-pink-500 px-3 py-2 rounded-md text-white"
          />

          <div className="max-h-40 overflow-y-auto border border-pink-500 rounded-md">
            {filteredUsers.map((u) => (
              <div
                key={u._id}
                className="px-4 py-2 hover:bg-pink-600 hover:text-black cursor-pointer transition"
                onClick={() => !selectedMembers.includes(u) && setSelectedMembers([...selectedMembers, u])}
              >
                {u.name} — {u.email}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {selectedMembers.map((m) => (
              <span
                key={m._id}
                className="bg-pink-500 text-black px-3 py-1 rounded-full text-sm cursor-pointer"
                onClick={() => removeMember(m._id)}
              >
                {m.name} ✕
              </span>
            ))}
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button onClick={close} className="text-gray-300 hover:text-white">Cancel</button>
            <button
              onClick={createWorkspace}
              className="bg-pink-600 hover:bg-pink-500 text-black px-4 py-2 rounded-md"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}