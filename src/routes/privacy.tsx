import { createFileRoute } from "@tanstack/react-router";
import { Shield } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Vibecodetool.online" },
      { name: "description", content: "How Vibecodetool.online collects, uses, and protects your data." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs mb-6">
        <Shield className="h-3 w-3 text-primary" /> Last updated: May 2026
      </div>
      <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
        Privacy <span className="text-gradient">Policy</span>
      </h1>
      <p className="text-muted-foreground mb-10">
        We respect your privacy. This page explains, in plain language, what we collect and why.
      </p>

      <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-foreground font-display text-2xl font-bold mb-3">1. Information we collect</h2>
          <p>We collect minimal data: your email if you subscribe, and anonymized analytics (page views, device type) to improve the site. We do not sell or rent personal data.</p>
        </section>
        <section>
          <h2 className="text-foreground font-display text-2xl font-bold mb-3">2. How we use it</h2>
          <p>To send the newsletter you opted into, to respond to your messages, and to understand which tutorials are useful so we can build more.</p>
        </section>
        <section>
          <h2 className="text-foreground font-display text-2xl font-bold mb-3">3. Cookies</h2>
          <p>We use essential cookies and a single privacy-friendly analytics cookie. No third-party advertising trackers.</p>
        </section>
        <section>
          <h2 className="text-foreground font-display text-2xl font-bold mb-3">4. Third parties</h2>
          <p>When you click an outbound link to Antigravity, Claude, ChatGPT, or Lovable, their privacy policies apply. We are not affiliated with these companies.</p>
        </section>
        <section>
          <h2 className="text-foreground font-display text-2xl font-bold mb-3">5. Your rights</h2>
          <p>You can request deletion of your data at any time by emailing <a href="mailto:hello@Vibecodetool.online.app" className="text-primary hover:underline">hello@Vibecodetool.online.app</a>. We will action requests within 30 days.</p>
        </section>
        <section>
          <h2 className="text-foreground font-display text-2xl font-bold mb-3">6. Changes</h2>
          <p>If this policy changes, we will update the date above and notify subscribers via email.</p>
        </section>
      </div>
    </div>
  );
}
