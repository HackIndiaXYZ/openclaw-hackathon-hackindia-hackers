"use client";

import React, { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password,
    });

    if (res.error) {
      setError("Invalid email or password.");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-zinc-900 p-8 rounded-xl w-full max-w-md border border-pink-500">
        <h1 className="text-3xl font-bold text-pink-500 mb-6 text-center">Welcome Back</h1>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <Input label="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />

          <Input label="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />

          <Button text="Login" type="submit" />
        </form>

        <button
          onClick={() => signIn("google")}
          className="mt-4 w-full border border-pink-500 text-pink-400 py-2 rounded-md hover:bg-pink-600 hover:text-black transition-all"
        >
          Continue with Google
        </button>

        <p className="text-center text-gray-400 mt-4 text-sm">
          Don’t have an account? <a href="/signup" className="text-pink-400">Create one</a>
        </p>
      </div>
    </div>
  );
}
