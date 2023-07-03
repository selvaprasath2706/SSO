"use client";

import axios from "axios";
import { error } from "console";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        style={{ backgroundColor: "GrayText", padding: 10, borderRadius: 10 }}
        onClick={() =>
          axios
            .get("/api/sso")
            .then((res) => {
              console.log("success", res.data);
            })
            .catch((err) => {
              console.log("err", err);
            })
        }
      >
        Sign In with SSO
      </button>
    </main>
  );
}
