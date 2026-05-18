// import { createFileRoute, Link } from "@tanstack/react-router";
// import { BookOpen, ArrowRight, Clock } from "lucide-react";
// import { posts } from "@/lib/blog-data";

// export const Route = createFileRoute("/blog")({
//   head: () => ({
//     meta: [
//       { title: "Blog — VibeCode" },
//       { name: "description", content: "Deep, honest articles on AI tools, coding workflows, and the craft of shipping with AI." },
//       { property: "og:title", content: "VibeCode Blog — AI Tools, Honestly Reviewed" },
//       { property: "og:description", content: "Long reads on ChatGPT, Claude, Lovable, Antigravity, and the workflows that actually ship." },
//     ],
//   }),
//   component: BlogIndex,
// });

// function BlogIndex() {
//   const [featured, ...rest] = posts;
//   return (
//     <div className="mx-auto max-w-7xl px-6 py-20">
//       <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs mb-6">
//         <BookOpen className="h-3 w-3 text-primary" /> The VibeCode Blog
//       </div>
//       <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
//         Long reads for people who'd rather <span className="text-gradient">ship</span> than scroll.
//       </h1>
//       <p className="text-muted-foreground text-lg max-w-2xl mb-14">
//         No hot takes, no thread-bait. Just deep, honest articles on the AI tools we use every day and the
//         workflows that actually move work forward.
//       </p>

//       {/* Featured */}
//       <Link
//         to="/blog/$slug"
//         params={{ slug: featured.slug }}
//         className="group block rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-colors mb-16"
//         data-cursor="read"
//       >
//         <div className="grid lg:grid-cols-2 gap-0">
//           <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
//             <img
//               src={featured.cover}
//               alt={featured.title}
//               className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//             />
//           </div>
//           <div className="p-8 lg:p-12 flex flex-col justify-center">
//             <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
//               <span className="px-2.5 py-1 rounded-full bg-primary/15 text-primary font-medium">{featured.category}</span>
//               <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {featured.readTime}</span>
//               <span>· {featured.date}</span>
//             </div>
//             <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4 group-hover:text-gradient transition-all">
//               {featured.title}
//             </h2>
//             <p className="text-muted-foreground mb-6">{featured.excerpt}</p>
//             <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
//               Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </span>
//           </div>
//         </div>
//       </Link>

//       {/* Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {rest.map((p) => (
//           <Link
//             key={p.slug}
//             to="/blog/$slug"
//             params={{ slug: p.slug }}
//             className="group block rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
//             data-cursor="read"
//           >
//             <div className="aspect-[16/10] overflow-hidden">
//               <img
//                 src={p.cover}
//                 alt={p.title}
//                 className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//               />
//             </div>
//             <div className="p-6">
//               <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
//                 <span className="px-2.5 py-1 rounded-full bg-primary/15 text-primary font-medium">{p.category}</span>
//                 <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readTime}</span>
//               </div>
//               <h3 className="font-display text-xl font-bold leading-snug mb-2 group-hover:text-gradient transition-all">
//                 {p.title}
//               </h3>
//               <p className="text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
import { createFileRoute, Link, Outlet, useMatchRoute } from "@tanstack/react-router";
import { BookOpen, ArrowRight, Clock } from "lucide-react";
import { posts } from "@/lib/blog-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — VibeCode" },
      { name: "description", content: "Deep, honest articles on AI tools, coding workflows, and the craft of shipping with AI." },
      { property: "og:title", content: "VibeCode Blog — AI Tools, Honestly Reviewed" },
      { property: "og:description", content: "Long reads on ChatGPT, Claude, Lovable, Antigravity, and the workflows that actually ship." },
    ],
  }),
  component: BlogLayout,
});

function BlogLayout() {
  const matchRoute = useMatchRoute();
  const isSlugRoute = matchRoute({ to: "/blog/$slug", fuzzy: true });

  // Agar slug route match ho raha hai toh sirf Outlet render karo
  if (isSlugRoute) {
    return <Outlet />;
  }

  return <BlogIndex />;
}

function BlogIndex() {
  const [featured, ...rest] = posts;
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs mb-6">
        <BookOpen className="h-3 w-3 text-primary" /> The VibeCode Blog
      </div>
      <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
        Long reads for people who'd rather <span className="text-gradient">ship</span> than scroll.
      </h1>
      <p className="text-muted-foreground text-lg max-w-2xl mb-14">
        No hot takes, no thread-bait. Just deep, honest articles on the AI tools we use every day and the
        workflows that actually move work forward.
      </p>

      {/* Featured */}
      <Link
        to="/blog/$slug"
        params={{ slug: featured.slug }}
        className="group block rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-colors mb-16"
        data-cursor="read"
      >
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
            <img
              src={featured.cover}
              alt={featured.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
              <span className="px-2.5 py-1 rounded-full bg-primary/15 text-primary font-medium">{featured.category}</span>
              <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {featured.readTime}</span>
              <span>· {featured.date}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4 group-hover:text-gradient transition-all">
              {featured.title}
            </h2>
            <p className="text-muted-foreground mb-6">{featured.excerpt}</p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rest.map((p) => (
          <Link
            key={p.slug}
            to="/blog/$slug"
            params={{ slug: p.slug }}
            className="group block rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
            data-cursor="read"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={p.cover}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span className="px-2.5 py-1 rounded-full bg-primary/15 text-primary font-medium">{p.category}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readTime}</span>
              </div>
              <h3 className="font-display text-xl font-bold leading-snug mb-2 group-hover:text-gradient transition-all">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
