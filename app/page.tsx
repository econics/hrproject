import React from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import SdrPerformance from "@/components/SdrPerformance";
import AdminDash from "@/components/AdminDash";
import EmpDash from "@/components/ui/EmpDash";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="mb-8 text-4xl font-bold">Welcome to HR Project</h1>
        <AdminDash />
        <EmpDash />
        <SdrPerformance />
      </main>
    </div>
  );
}
