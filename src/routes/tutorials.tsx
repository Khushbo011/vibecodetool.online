import { createFileRoute } from "@tanstack/react-router";
import { Clock, Play, X } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/tutorials")({
  head: () => ({
    meta: [
      { title: "Tutorials — Vibecodetool" },
      { name: "description", content: "Step-by-step videos for AI-first builders." },
    ],
  }),
  component: Tutorials,
});

type Post = {
  title: string;
  time: string;
  tag: string;
  videoId: string;
  thumb: string;
  desc: string;
};

const posts: Post[] = [
  {
    title: "Ship a SaaS in a weekend with Lovable",
    time: "8 min",
    tag: "Lovable",
    videoId: "Ke90Tje7VS0",
    thumb: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    desc: "From chat prompt to deployed app — the fastest path to a real MVP.",
  },
  {
    title: "Claude Projects Workflow",
    time: "6 min",
    tag: "Claude",
    // videoId: "ysz5S6PUM-U",
    videoId: "kPa7bsKwL-c",
    thumb: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    desc: "Use Claude projects like a senior engineer.",
  },
  {
    title: "ChatGPT custom GPTs for content teams",
    time: "5 min",
    tag: "ChatGPT",
    videoId: "pq34V_V5j18",
    thumb: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=1200&q=80",
    desc: "Build a reusable assistant your whole team can ping in seconds.",
  },
  {
    title: "Antigravity vs Cursor",
    time: "10 min",
    tag: "Antigravity",
    videoId: "ScMzIvxBSi4",
    thumb: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80",
    desc: "Benchmarking modern AI IDEs.",
  },
  {
    title: "Prompt patterns Gen Z devs actually use",
    time: "7 min",
    tag: "Guide",
    videoId: "jC4v5AS4RIM",
    thumb: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    desc: "The five-prompt template that turns vibes into shippable specs.",
  },
  {
    title: "Stack picks for solo founders in 2026",
    time: "9 min",
    tag: "Stack",
    videoId: "8jLOx1hD3_o",
    thumb: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    desc: "A field guide to building, billing, and shipping on your own.",
  },
];

function Tutorials() {
  const [active, setActive] = useState<Post | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs mb-6">
          <Play className="h-3 w-3 text-primary" /> Watch & build along
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
          Tutorial <span className="text-gradient">library</span>
        </h1>
        <p className="text-muted-foreground">Hands-on videos built from real projects, not press releases.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article
            key={p.title}
            onClick={() => setActive(p)}
            className="glass rounded-3xl overflow-hidden group cursor-pointer transition-all hover:-translate-y-1 hover:shadow-2xl"
            data-cursor="play"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={p.thumb}
                alt={p.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <span className="absolute top-4 left-4 rounded-full bg-background/60 backdrop-blur px-3 py-1 text-xs font-medium">{p.tag}</span>
              <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-background/60 backdrop-blur px-3 py-1 text-xs">
                <Clock className="h-3 w-3" /> {p.time}
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-primary text-background shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-7 w-7 fill-background ml-1" />
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Modal player */}
      {active && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-background/80 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-5xl glass rounded-3xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-background/80 backdrop-blur hover:bg-primary hover:text-background transition-all hover:scale-110"
              data-cursor="close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
              <iframe
                src={`https://www.youtube.com/embed/${active.videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-primary/10 text-primary px-2.5 py-0.5">{active.tag}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {active.time}</span>
              </div>
              <h3 className="font-display text-2xl font-bold mt-2">{active.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{active.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
