import { createFileRoute } from "@tanstack/react-router";
import { Handshake } from "lucide-react";

export const Route = createFileRoute("/affiliate")({
  head: () => ({
    meta: [
      { title: "Affiliate Disclosure — VibeCode" },
      { name: "description", content: "How VibeCode earns from affiliate links and our commitment to honest reviews." },
    ],
  }),
  component: Affiliate,
});

function Affiliate() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs mb-6">
        <Handshake className="h-3 w-3 text-primary" /> Transparency first
      </div>
      <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
        Affiliate <span className="text-gradient">Disclosure</span>
      </h1>
      <p className="text-muted-foreground mb-10">
        Honest answers about how this site is funded, written in plain language.
      </p>

      <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-foreground font-display text-2xl font-bold mb-3">1. The short version</h2>
          <p>
            Some links on VibeCode are affiliate links. If you click one and sign up for a paid plan, we may
            earn a small commission at no extra cost to you. That commission helps keep the site running
            and our reviews independent.
          </p>
        </section>
        <section>
          <h2 className="text-foreground font-display text-2xl font-bold mb-3">2. How we choose tools</h2>
          <p>
            We only feature tools we have personally used or extensively tested. A tool's affiliate program
            (or lack of one) never decides whether we cover it, and it does not influence our rating,
            ranking, or critique. If a tool we recommend offers no affiliate program, we still link to it.
          </p>
        </section>
        <section>
          <h2 className="text-foreground font-display text-2xl font-bold mb-3">3. Programs we may participate in</h2>
          <p>
            VibeCode may participate in affiliate or referral programs run by Lovable, Anthropic (Claude),
            OpenAI (ChatGPT), Google (Antigravity), and similar AI tooling providers. Program participation
            can change over time without notice.
          </p>
        </section>
        <section>
          <h2 className="text-foreground font-display text-2xl font-bold mb-3">4. Editorial independence</h2>
          <p>
            No vendor pays us for a positive review. We do not accept sponsored placements disguised as
            editorial content. When something is sponsored, we will label it clearly.
          </p>
        </section>
        <section>
          <h2 className="text-foreground font-display text-2xl font-bold mb-3">5. Your trust</h2>
          <p>
            If you ever feel a recommendation is biased or out of date, email us at{" "}
            <a href="mailto:hello@hostnestic.app" className="text-primary hover:underline">hello@hostnestic.app</a>{" "}
            — feedback directly shapes what we cover next.
          </p>
        </section>
      </div>
    </div>
  );
}
