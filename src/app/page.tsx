"use client";
import Link from 'next/link'

export default function Home() {
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
          {/* This button will open the chatbot in Milestone 3 */}
          <button
            id="open-chat"
            className="rounded-xl px-4 py-2 bg-amber-500 hover:bg-amber-600 transition"
            onClick={() => {
              if (typeof window !== 'undefined' && window.botpressWebChat) {
                window.botpressWebChat.sendEvent({ type: 'show' })
              } else {
                alert('Chat coming soon in Milestone 3!')
              }
            }}
          >
            Chat with my AI
          </button>
        </div>
      </div>
    </main>
  )
}
