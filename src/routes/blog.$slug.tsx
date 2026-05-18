// import { createFileRoute, Link, notFound } from "@tanstack/react-router";
// import { ArrowLeft, Clock, Calendar } from "lucide-react";
// import { getPost, posts } from "@/lib/blog-data";

// export const Route = createFileRoute("/blog/$slug")({
//   loader: ({ params }) => {
//     const post = getPost(params.slug);
//     if (!post) throw notFound();
//     return { post };
//   },
//   head: ({ loaderData }) => ({
//     meta: loaderData
//       ? [
//           { title: `${loaderData.post.title} — VibeCode` },
//           { name: "description", content: loaderData.post.excerpt },
//           { property: "og:title", content: loaderData.post.title },
//           { property: "og:description", content: loaderData.post.excerpt },
//           { property: "og:image", content: loaderData.post.cover },
//           { property: "twitter:image", content: loaderData.post.cover },
//         ]
//       : [],
//   }),
//   notFoundComponent: () => (
//     <div className="mx-auto max-w-3xl px-6 py-32 text-center">
//       <h1 className="font-display text-4xl font-bold mb-4">Article not found</h1>
//       <Link to="/blog" className="text-primary hover:underline">← Back to blog</Link>
//     </div>
//   ),
//   errorComponent: ({ error }) => (
//     <div className="mx-auto max-w-3xl px-6 py-32 text-center">
//       <p className="text-muted-foreground">{error.message}</p>
//     </div>
//   ),
//   component: BlogPost,
// });

// function BlogPost() {
//   const { post } = Route.useLoaderData();
//   const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

//   return (
//     <article className="pb-24">
//       <div className="mx-auto max-w-4xl px-6 pt-12">
//         <Link
//           to="/blog"
//           className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
//           data-cursor="back"
//         >
//           <ArrowLeft className="h-4 w-4" /> All articles
//         </Link>

//         <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-5">
//           <span className="px-2.5 py-1 rounded-full bg-primary/15 text-primary font-medium">{post.category}</span>
//           <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
//           <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
//           <span>· by {post.author}</span>
//         </div>

//         <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
//           {post.title}
//         </h1>
//         <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl">
//           {post.excerpt}
//         </p>
//       </div>

//       <div className="mx-auto max-w-5xl px-6 mb-14">
//         <div className="aspect-[16/8] rounded-3xl overflow-hidden border border-border">
//           <img src={post.cover} alt={post.title} className="h-full w-full object-cover" />
//         </div>
//       </div>

//       <div className="mx-auto max-w-3xl px-6">
//         <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/90">
//           {post.content.map((p: string, i: number) => (
//             <p key={i}>{p}</p>
//           ))}
//         </div>

//         <div className="mt-16 pt-8 border-t border-border">
//           <p className="text-sm text-muted-foreground">
//             Enjoyed this? Share it, or{" "}
//             <Link to="/contact" className="text-primary hover:underline">tell us what to write next</Link>.
//           </p>
//         </div>
//       </div>

//       {related.length > 0 && (
//         <div className="mx-auto max-w-7xl px-6 mt-24">
//           <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Keep reading</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {related.map((p) => (
//               <Link
//                 key={p.slug}
//                 to="/blog/$slug"
//                 params={{ slug: p.slug }}
//                 className="group block rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
//                 data-cursor="read"
//               >
//                 <div className="aspect-[16/10] overflow-hidden">
//                   <img src={p.cover} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
//                 </div>
//                 <div className="p-5">
//                   <span className="text-xs px-2 py-0.5 rounded-full bg-primary/15 text-primary font-medium">{p.category}</span>
//                   <h3 className="font-display text-lg font-bold leading-snug mt-3 group-hover:text-gradient transition-all">
//                     {p.title}
//                   </h3>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </article>
//   );
// }
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getPost, posts } from "@/lib/blog-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);

    if (!post) {
      throw notFound();
    }

    return { post };
  },

  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          {
            title: `${loaderData.post.title} — VibeCode`,
          },
          {
            name: "description",
            content: loaderData.post.excerpt,
          },
          {
            property: "og:title",
            content: loaderData.post.title,
          },
          {
            property: "og:description",
            content: loaderData.post.excerpt,
          },
          {
            property: "og:image",
            content: loaderData.post.cover,
          },
          {
            property: "twitter:image",
            content: loaderData.post.cover,
          },
        ]
      : [],
  }),

  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl font-bold mb-4">
        Article not found
      </h1>

      <Link
        to="/blog"
        className="text-primary hover:underline"
      >
        ← Back to blog
      </Link>
    </div>
  ),

  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <p className="text-muted-foreground">
        {error.message}
      </p>
    </div>
  ),

  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();

  const related = posts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <article className="pb-24">
      {/* Top Section */}
      <div className="mx-auto max-w-4xl px-6 pt-12">
        {/* Back */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          data-cursor="back"
        >
          <ArrowLeft className="h-4 w-4" />
          All articles
        </Link>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-5">
          <span className="px-2.5 py-1 rounded-full bg-primary/15 text-primary font-medium">
            {post.category}
          </span>

          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {post.date}
          </span>

          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </span>

          <span>· by {post.author}</span>
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl">
          {post.excerpt}
        </p>
      </div>

      {/* Cover Image */}
      <div className="mx-auto max-w-5xl px-6 mb-14">
        <div className="aspect-[16/8] rounded-3xl overflow-hidden border border-border">
          <img
            src={post.cover}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="mx-auto max-w-3xl px-6">
        <div className="prose prose-invert prose-lg max-w-none">
          {post.content.map((paragraph: string, index: number) => (
            <p
              key={index}
              className="text-foreground/90 leading-8 mb-8 text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Enjoyed this? Share it, or{" "}
            <Link
              to="/contact"
              className="text-primary hover:underline"
            >
              tell us what to write next
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <div className="mx-auto max-w-7xl px-6 mt-24">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
            Keep reading
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group block rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
                data-cursor="read"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/15 text-primary font-medium">
                    {p.category}
                  </span>

                  <h3 className="font-display text-lg font-bold leading-snug mt-3 group-hover:text-gradient transition-all">
                    {p.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                    {p.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}