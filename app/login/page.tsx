"use client";

import { signIn } from "next-auth/react";

import { useState } from "react";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

  const result = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (result?.ok) {

    window.location.href = "/";

  } else {

    alert("Email atau password salah");

  }
};

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white/10 border border-white/10 backdrop-blur-2xl rounded-3xl p-8">

        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Login OmniCool
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/10 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/10 text-white"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold py-4 rounded-2xl transition"
          >
            Login
          </button>

        </div>

      </div>
    </main>
  );
}