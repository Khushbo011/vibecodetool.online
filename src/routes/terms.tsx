import { createFileRoute } from "@tanstack/react-router";
import { ScrollText } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Vibecodetool" },
      { name: "description", content: "The rules for using Vibecodetool." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs mb-6">
        <ScrollText className="h-3 w-3 text-primary" /> Last updated: May 2026
      </div>
      <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
        Terms & <span className="text-gradient">Conditions</span>
      </h1>
      <p className="text-muted-foreground mb-10">
        By using Vibecodetool, you agree to the following. We've kept it short and human.
      </p>

      <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-foreground font-display text-2xl font-bold mb-3">1. Use of the site</h2>
          <p>Vibecodetool publishes opinions, reviews, and tutorials about AI tools. Content is for informational purposes — not legal, financial, or professional advice.</p>
        </section>
        <section>
          <h2 className="text-foreground font-display text-2xl font-bold mb-3">2. Affiliate disclosure</h2>
          <p>Some outbound links to tools like Claude, ChatGPT, Lovable, and Antigravity may be affiliate links. We only recommend tools we actually use.</p>
        </section>
        <section>
          <h2 className="text-foreground font-display text-2xl font-bold mb-3">3. Intellectual property</h2>
          <p>All original content (articles, videos, designs) belongs to Vibecodetool. You may share with attribution, but not republish in full without permission.</p>
        </section>
        <section>
          <h2 className="text-foreground font-display text-2xl font-bold mb-3">4. User conduct</h2>
          <p>Don't abuse the contact form, attempt to break the site, or scrape content at scale. We reserve the right to block bad actors.</p>
        </section>
        <section>
          <h2 className="text-foreground font-display text-2xl font-bold mb-3">5. Limitation of liability</h2>
          <p>Vibecodetool is provided "as is". We're not liable for decisions you make based on our content. Always verify pricing and features on the official tool websites.</p>
        </section>
        <section>
          <h2 className="text-foreground font-display text-2xl font-bold mb-3">6. Contact</h2>
          <p>Questions? Email <a href="mailto:hello@Vibecodetool.app" className="text-primary hover:underline">hello@Vibecodetool</a>.</p>
        </section>
      </div>
    </div>
  );
}
