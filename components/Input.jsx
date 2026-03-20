import React from "react";

export default function Input({ label, type = "text", value, onChange }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm text-pink-400 font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="bg-black border border-pink-500 text-white px-3 py-2 rounded-md focus:outline-none focus:border-pink-300"
      />
    </div>
  );
}