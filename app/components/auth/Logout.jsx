"use client";

import { signOut } from "next-auth/react";

export default function Logged() {
  return (
    <div className="ml-2">
      <button
        className="rounded-md bg-gray-700 px-6 py-2 text-sm text-white "
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </div>
  );
}
