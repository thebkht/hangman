"use client"
import Game from "@/components/game";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Game />
    </main>
  );
}
