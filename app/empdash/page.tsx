import React from "react";
import EmpDash from "@/components/ui/EmpDash";

export default function empdash() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="mb-8 text-4xl font-bold">Welcome to HR Project</h1>
        <EmpDash />
      </main>
    </div>
  );
}
