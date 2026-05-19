import { Link } from "@tanstack/react-router";
import { Sparkles, Menu, X, Mail, ArrowUpRight, Send } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/plans", label: "Plans" },
  { to: "/tutorials", label: "Tutorials" },
   { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold group">
          <span className="grid h-9 w-9 place-items-center rounded-xl transition-transform group-hover:rotate-12"
            style={{ background: "var(--gradient-hero)" }}>
            <Sparkles className="h-5 w-5 text-background" />
          </span>
          <span className="text-gradient">Vibecodetool</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-muted-foreground hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/plans" className="hidden md:inline-flex btn-primary text-sm py-2 px-5">
          Get Started
        </Link>

        {/* Mobile Menu */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} onClick={() => setOpen(false)} className="text-muted-foreground">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

/* ================= FOOTER ================= */

const tools = [
  { name: "Antigravity", href: "https://antigravity.google" },
  { name: "Claude", href: "https://claude.ai" },
  { name: "ChatGPT", href: "https://chatgpt.com" },
  { name: "Lovable", href: "https://lovable.dev" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subbed, setSubbed] = useState(false);

  return (
    <footer className="mt-32 relative overflow-hidden">

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at top, color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%)",
        }}
      />

      <div className="relative border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">

          {/* CTA */}
          <div className="grid lg:grid-cols-2 gap-10 pb-12 border-b border-border">

            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold">
                Build with the <span className="text-gradient">smartest</span> stack of 2026.
              </h3>
              <p className="mt-3 text-muted-foreground">
                One email a week. Tool drops, prompts, and tutorials worth your time.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubbed(true);
              }}
              className="flex items-center gap-2 glass rounded-full p-1.5 pl-5"
            >
              <Mail className="h-4 w-4 text-muted-foreground" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="you@yourdomain.dev"
                className="flex-1 bg-transparent outline-none text-sm py-2"
              />
              <button className="btn-primary !py-2 !px-4 text-sm">
                {subbed ? "Joined ✨" : <>Subscribe <Send className="h-3.5 w-3.5" /></>}
              </button>
            </form>

          </div>

          {/* Grid */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 py-12">

            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
                <span className="grid h-9 w-9 place-items-center rounded-xl"
                  style={{ background: "var(--gradient-hero)" }}>
                  <Sparkles className="h-5 w-5 text-background" />
                </span>
                <span className="text-gradient">Vibecodetool</span>
              </Link>

              <p className="mt-4 text-sm text-muted-foreground">
                Honest takes on AI tools, built for builders.
              </p>
            </div>

            {/* Explore */}
            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase">Explore</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="hover:text-foreground">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase">Tools</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {tools.map((t) => (
                  <li key={t.name}>
                    <a
                      href={t.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 hover:text-foreground group"
                    >
                      {t.name}
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><Link to="/privacy" className="story-link hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="story-link hover:text-foreground transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/affiliate" className="story-link hover:text-foreground transition-colors">Affiliate Disclosure</Link></li>
                <li><Link to="/contact" className="story-link hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>


          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-border text-xs text-muted-foreground flex justify-between">
            <p>© {new Date().getFullYear()} Vibecodetool</p>
            <p>All systems operational</p>
          </div>

        </div>
      </div>
    </footer>
  );
}