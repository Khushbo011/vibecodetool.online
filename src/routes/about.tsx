import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Target, Heart, Zap, ArrowRight, Quote } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vibecodetool" },
      { name: "description", content: "Why Vibecodetool exists and who it's for." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Target, title: "Honest by default", desc: "No affiliate spam, no engagement bait. Just real takes from real builds." },
  { icon: Zap, title: "Built, not benchmarked", desc: "Every tool we cover ships actual projects before it gets written about." },
  { icon: Heart, title: "Made for makers", desc: "We're the audience. Solo founders, indie hackers, weekend warriors." },
];

const timeline = [
  { year: "2023", title: "Started as a hosting blog", text: "A small site comparing where to deploy your side project." },
  { year: "2024", title: "Pivoted to AI tools", text: "Spent a year stress-testing every model, IDE, and builder we could find." },
  { year: "2025", title: "12k+ readers", text: "Indie devs, founders, and creators using us to pick their stack." },
  { year: "2026", title: "Vibecodetool today", text: "The honest, no-fluff guide to building with AI in 2026." },
];

function About() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs">
              <Sparkles className="h-3 w-3 text-primary" /> About Vibecodetool
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.02]">
              Built for the <br />
              <span className="text-gradient">build-now</span> generation.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              In 2026 the real question isn't where you host — it's which AI ships your app.
              We test every tool on actual projects, then tell you what worked and what wasted our weekend.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/plans" className="btn-primary" data-cursor="go">See the stack <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/tutorials" className="btn-ghost" data-cursor="watch">Watch tutorials</Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                alt="Team collaborating on laptops"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, oklch(0.13 0.03 265 / 0.7))" }} />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 max-w-[220px]">
              <div className="text-xs text-muted-foreground">Tools tested</div>
              <div className="font-display text-3xl font-bold text-gradient">200+</div>
              <div className="text-xs">across 18 months</div>
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-2xl p-4">
              <div className="text-xs text-muted-foreground">Live</div>
              <div className="flex items-center gap-2 font-semibold">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" /> Shipping weekly
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { n: "200+", l: "Tools tested" },
            { n: "12k", l: "Builders following" },
            { n: "100%", l: "Independent" },
            { n: "4.9★", l: "Reader rating" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-3xl p-6 text-center hover:-translate-y-1 transition-transform">
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{s.n}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold">What we <span className="text-gradient">stand for</span></h2>
          <p className="mt-3 text-muted-foreground">Three rules. They keep us honest.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="glass rounded-3xl p-8 hover:-translate-y-1 transition-transform">
              <div className="grid h-12 w-12 place-items-center rounded-2xl mb-5" style={{ background: "var(--gradient-soft)" }}>
                <v.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story / timeline */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1100&q=80"
              alt="Workspace with notes and laptop"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Our <span className="text-gradient">story</span></h2>
            <ol className="space-y-6 relative border-l-2 border-border pl-6">
              {timeline.map((t) => (
                <li key={t.year} className="relative">
                  <span className="absolute -left-[34px] top-1.5 grid h-5 w-5 place-items-center rounded-full bg-background ring-2 ring-primary">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </span>
                  <div className="text-xs uppercase tracking-wider text-primary font-semibold">{t.year}</div>
                  <div className="font-display text-xl font-bold">{t.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{t.text}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="glass rounded-3xl p-10 md:p-14 relative">
          <Quote className="absolute top-6 left-6 h-10 w-10 text-primary/30" />
          <p className="font-display text-2xl md:text-3xl leading-snug">
            "Vibecodetool is the first review site that actually feels like it's written by people who ship.
            They saved us weeks of trial and error."
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full font-bold text-background" style={{ background: "var(--gradient-hero)" }}>M</div>
            <div>
              <div className="font-semibold">Maya R.</div>
              <div className="text-xs text-muted-foreground">Indie founder, shipped 4 apps in 2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-[2rem] p-12 md:p-16 text-center" style={{ background: "var(--gradient-hero)" }}>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-background mb-4">Want our weekly drop?</h2>
          <p className="text-background/80 mb-8 max-w-xl mx-auto">One email. Best AI tools, prompts, and tutorials of the week. No fluff, ever.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-3.5 font-semibold hover:scale-105 transition" data-cursor="join">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
