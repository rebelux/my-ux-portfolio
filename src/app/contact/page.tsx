"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-black text-zinc-100 px-6 py-16 flex flex-col items-center">
      <section className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        <p className="text-zinc-400 mb-12">
          Have a question, collaboration idea, or want to chat about UX?  
          Send me a message — I’d love to connect.
        </p>

        {!submitted ? (
          <form
            action="https://formspree.io/f/mwprrqoq" // ← replace with your Formspree ID
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="space-y-6 text-left"
          >
            <div>
              <label htmlFor="name" className="block text-zinc-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-zinc-100 focus:border-amber-500 outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-zinc-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-zinc-100 focus:border-amber-500 outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-zinc-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-zinc-100 focus:border-amber-500 outline-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl px-6 py-3 bg-amber-500 hover:bg-amber-600 transition"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-amber-500 font-medium mt-8">
            Thanks for reaching out! I’ll get back to you soon.
          </div>
        )}
      </section>

      {/* Optional chatbot CTA */}
      <section className="mt-16 text-center">
        <p className="text-zinc-400 mb-4">
          Prefer a quicker chat? Ask my AI assistant below.
        </p>
        <button
          onClick={() => {
            if (typeof window !== "undefined" && window.botpress) {
              window.botpress.open();
            }
          }}
          className="rounded-xl px-6 py-3 bg-amber-500 hover:bg-amber-600 transition"
        >
          Chat with my AI
        </button>
      </section>
    </main>
  );
}
