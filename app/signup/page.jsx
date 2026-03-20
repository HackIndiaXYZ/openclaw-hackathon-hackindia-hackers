"use client";

import React, { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/login");
    } else {
      setError("User already exists or error occurred.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-zinc-900 p-8 rounded-xl w-full max-w-md border border-pink-500">
        <h1 className="text-3xl font-bold text-pink-500 mb-6 text-center">Create Account</h1>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />

          <Input label="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />

          <Input label="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />

          <Button text="Sign Up" type="submit" />
        </form>

        <button
          onClick={() => signIn("google")}
          className="mt-4 w-full border border-pink-500 text-pink-400 py-2 rounded-md hover:bg-pink-600 hover:text-black transition-all"
        >
          Continue with Google
        </button>

        <p className="text-center text-gray-400 mt-4 text-sm">
          Already have an account? <a href="/login" className="text-pink-400">Login</a>
        </p>
      </div>
    </div>
  );
}