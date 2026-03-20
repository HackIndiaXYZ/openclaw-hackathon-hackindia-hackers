import React from "react";

export default function Button({ text, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-pink-600 hover:bg-pink-500 text-black font-semibold py-2 rounded-md transition-all"
    >
      {text}
    </button>
  );
}
