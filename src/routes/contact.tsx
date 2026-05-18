import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vibecodetool.online" },
      { name: "description", content: "Reach the Vibecodetool.online team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">

      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="font-display text-5xl font-bold">
          Get in <span className="text-gradient">Touch</span>
        </h1>
        <p className="text-muted-foreground mt-3">
          Have a question, suggestion, or collaboration idea? We’d love to hear from you.
        </p>
      </div>

      {/* Layout */}
      <div className="grid lg:grid-cols-2 gap-10">

        {/* LEFT SIDE INFO CARDS */}
        <div className="space-y-6">

          {/* Email Card */}
          <div className="glass rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Email Us</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              For general enquiries and collaborations.
            </p>
            <p className="text-sm mt-2 text-primary">
              hello@Vibecodetool.online.app
            </p>
          </div>

          {/* Support Card */}
          <div className="glass rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Support</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Need help with tools or tutorials?
            </p>
            <p className="text-sm mt-2 text-primary">
              support@Vibecodetool.online.app
            </p>
          </div>

          {/* Response Card */}
          <div className="glass rounded-3xl p-6">
            <h3 className="font-semibold mb-2">Response Time</h3>
            <p className="text-sm text-muted-foreground">
              We usually reply within 24–48 hours.
            </p>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="glass rounded-3xl p-8 space-y-5"
        >

          <h3 className="font-display text-2xl font-bold mb-2">
            Send a Message
          </h3>

          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              required
              className="mt-1 w-full rounded-xl bg-input border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              required
              type="email"
              className="mt-1 w-full rounded-xl bg-input border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              required
              rows={5}
              className="mt-1 w-full rounded-xl bg-input border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              placeholder="Tell us how we can help..."
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            {sent ? "Message Sent ✨" : (
              <>
                Send Message <Send className="h-4 w-4" />
              </>
            )}
          </button>

        </form>

      </div>
    </div>
  );
}