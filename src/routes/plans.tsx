import { createFileRoute } from "@tanstack/react-router";
import { Check, Sparkles, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/plans")({
  head: () => ({
    meta: [
      { title: "Plans — Vibecodetool.online" },
      { name: "description", content: "Compare Antigravity, Claude, ChatGPT, and Lovable side by side." },
    ],
  }),
  component: Plans,
});

const plans = [
  {
    name: "Antigravity",
    tag: "Agentic IDE",
    price: "Free",
    period: "preview",
    accent: "from-emerald-300 to-teal-400",
    features: ["Multi-agent workflows", "Deep code reasoning", "Browser + terminal control", "Best for power devs"],
    href: "https://developers.google.com/antigravity", // (official info page)
  },
  {
    name: "Claude",
    tag: "Reasoning model",
    price: "$17",
    period: "/mo",
    accent: "from-orange-300 to-amber-400",
    features: ["Long-context analysis", "Top-tier writing", "Artifacts & projects", "Best for thinking partners"],
    href: "https://www.anthropic.com/pricing", // ✅ correct pricing page
    popular: true,
  },
  {
    name: "ChatGPT",
    tag: "All-rounder",
    price: "$22",
    period: "/mo",
    accent: "from-emerald-200 to-cyan-400",
    features: ["GPT-5 + voice", "Image & video gen", "Custom GPTs", "Best for daily driver"],
    href: "https://openai.com/chatgpt/pricing", // ✅ correct pricing page
  },
  {
    name: "Lovable",
    tag: "AI app builder",
    price: "$50",
    period: "/mo",
    accent: "from-pink-300 to-fuchsia-400",
    features: ["Full-stack apps from chat", "Built-in cloud + auth", "Instant deploy", "Best for shipping fast"],
    href: "https://lovable.dev/pricing", // ✅ correct pricing page
  },
];

function Plans() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs mb-6">
          <Sparkles className="h-3 w-3 text-primary" /> Honest pricing breakdown
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Pick your <span className="text-gradient">stack</span></h1>
        <p className="text-muted-foreground">Four tools. Different superpowers. One decision.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((p) => (
          <div key={p.name} className={`relative glass rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${p.popular ? "ring-2 ring-primary scale-[1.02]" : ""}`}>
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-bold text-background" style={{ background: "var(--gradient-hero)" }}>
                Most loved
              </span>
            )}
            <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${p.accent} mb-5`} />
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{p.tag}</div>
            <h3 className="font-display text-2xl font-bold mt-1">{p.name}</h3>
            <div className="flex items-baseline gap-1 mt-4">
              <span className="font-display text-4xl font-bold">{p.price}</span>
              <span className="text-muted-foreground text-sm">{p.period}</span>
            </div>
            <ul className="mt-6 space-y-3 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className={`${p.popular ? "btn-primary" : "btn-ghost"} mt-8 w-full group`}
              data-cursor="visit"
            >
              Get {p.name}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-muted-foreground mt-10">
        Prices reflect public listings at time of writing. Always verify on the provider's site.
      </p>
    </div>
  );
}
