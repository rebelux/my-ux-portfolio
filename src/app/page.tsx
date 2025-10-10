"use client";
import Link from "next/link";

export default function Home() {
  const toggleChat = () => {
    // Use the Botpress API instead of CSS
    if (typeof window === "undefined" || !window.botpress) return;

    const isOpen = window.__bpIsOpen ?? false;
    if (isOpen) {
      window.botpress.close();
      window.__bpIsOpen = false;
    } else {
      window.botpress.open();
      window.__bpIsOpen = true;
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black text-zinc-100">
      <div className="max-w-2xl px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Henry Tavarez — UX Designer
        </h1>
        <p className="mt-4 text-zinc-300">
          I design thoughtful experiences for complex products.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/projects"
            className="rounded-xl px-4 py-2 bg-white/10 hover:bg-white/20 transition"
          >
            View Projects
          </Link>

          <button
            id="open-chat"
            onClick={toggleChat}
            className="rounded-xl px-4 py-2 bg-amber-500 hover:bg-amber-600 transition"
          >
            Chat with my AI
          </button>
        </div>
      </div>
    </main>
  );
}
