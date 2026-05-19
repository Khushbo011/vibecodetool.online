import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Zap, Shield, Rocket, Star } from "lucide-react";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vibecodetool — Smart AI Tool Decisions" },
      { name: "description", content: "Compare Antigravity, Claude, ChatGPT, and Lovable. Ship faster with the right AI stack." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              New: AI tool comparisons for 2026
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05]">
              Pick the AI <br />
              that <span className="text-gradient">actually</span> ships.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
               Honest, no-fluff reviews of Antigravity, Claude, ChatGPT, and Lovable — real breakdowns of what actually works, what doesn’t, and what’s just hype. Built for the generation that doesn’t just scroll or benchmark tools, but actually builds with them
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/plans" className="btn-primary">Compare Plans <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/tutorials" className="btn-ghost">Read Tutorials</Link>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                <span className="ml-2">4.9 from 12k+ builders</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={hero} alt="Abstract gradient artwork" width={1536} height={1024} className="rounded-3xl shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 max-w-xs">
              <div className="text-xs text-muted-foreground">This week</div>
              <div className="font-display text-2xl font-bold">+38% velocity</div>
              <div className="text-xs text-primary">with the right stack</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Lightning reviews", desc: "Deep, hands-on testing across real-world projects—not controlled demos or artificial scenarios. We focus on how tools actually perform when you’re building something real." },
            { icon: Shield, title: "Zero hype", desc: "We don’t sugarcoat anything. Every tool gets a fair breakdown with clear trade-offs, limitations, and honest opinions—no affiliate bias, no marketing noise, just truth." },
            { icon: Rocket, title: "Ship faster", desc: "Ready-to-use templates, battle-tested prompts, and production-proven stacks designed to help you build faster, deploy quicker, and avoid common mistakes." },
          ].map((f) => (
            <div key={f.title} className="glass rounded-3xl p-8 hover:scale-[1.02] transition-transform">
              <div className="grid h-12 w-12 place-items-center rounded-2xl mb-5" style={{ background: "var(--gradient-soft)" }}>
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-[2rem] p-12 md:p-16 text-center" style={{ background: "var(--gradient-hero)" }}>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-background mb-4">Ready to level up?</h2>
          <p className="text-background/80 mb-8 max-w-xl mx-auto">Discover in-depth comparison breakdowns of the four tools shaping how Gen Z builds and ships software today.
                 Get clear insights before you choose — what to use, when to use it, and why it matters for your workflow.</p>
          <Link to="/plans" className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-3.5 font-semibold hover:scale-105 transition">
            See the plans <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
