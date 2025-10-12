"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mwprrqoq", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 7000);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  }

  return (
    <main className="min-h-screen bg-black text-zinc-100 px-6 py-24 flex flex-col items-center">
      <section className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        <p className="text-zinc-400 mb-12">
          Have a question, collaboration idea, or want to chat about design leadership or UX
          strategy? Send me a message — I’d love to connect.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
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
              className="w-full rounded-xl px-6 py-3 bg-amber-500 hover:bg-amber-600 transition font-medium"
            >
              Send Message
            </button>

            {error && (
              <p className="text-red-500 text-sm mt-4 text-center">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        ) : (
          <motion.div
            className="text-amber-500 font-medium mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Thanks for reaching out! I’ll get back to you soon.
          </motion.div>
        )}
      </section>

      {/* === Chatbot CTA === */}
      <section className="mt-20 text-center max-w-2xl">
        <p className="text-zinc-400 mb-6">
          Prefer a quicker chat? My AI Assistant can answer questions about my work, projects, or
          design approach — instantly.
        </p>
        <button
          onClick={() => {
            if (typeof window !== "undefined" && window.botpress) {
              window.botpress.open();
              window.botpress.sendMessage?.("Hi! I’d like to contact Henry.");
            }
          }}
          className="rounded-xl px-6 py-3 bg-amber-500 hover:bg-amber-600 transition font-medium"
        >
          Chat with My AI Assistant
        </button>
      </section>
    </main>
  );
}
