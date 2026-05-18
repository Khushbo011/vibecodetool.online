export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  cover: string;
  author: string;
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "chatgpt-vs-claude-2026",
    title: "ChatGPT vs Claude in 2026: Which AI Should You Actually Use?",
    excerpt:
      "A no-nonsense, side-by-side breakdown of GPT and Claude across coding, writing, reasoning, and pricing — based on months of daily use.",
    category: "Comparisons",
    readTime: "9 min read",
    date: "May 12, 2026",
    author: "The VibeCode Team",
    cover:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80&auto=format&fit=crop",
    content: [
      "Two years ago, picking between ChatGPT and Claude felt like picking between a Swiss Army knife and a scalpel. In 2026, both have grown sharper, faster, and noticeably more opinionated. After running them side-by-side on hundreds of real tasks — from refactoring legacy React to writing investor updates — we've stopped treating this as a debate about which model is 'smarter' and started asking a more useful question: which one fits the shape of your work?",
      "On raw reasoning, Claude's latest generation has a quieter confidence. It tends to slow down on ambiguous prompts, ask better clarifying questions, and surface the trade-offs you didn't realize you were making. ChatGPT, by contrast, leans into momentum. It will draft, ship, and iterate before you've finished typing your second sentence. Neither is wrong — they just optimize for different kinds of thinkers.",
      "For coding, the picture has flipped from where it was in 2024. Claude is now the default we reach for on serious refactors: it holds long files in working memory better, respects conventions already in the codebase, and produces diffs you can ship without babysitting. ChatGPT still wins for greenfield prototypes, quick scripts, and anything where speed of first draft matters more than long-term maintainability.",
      "Writing is closer than the loudest takes on Twitter suggest. Claude's prose feels more considered — fewer adverbs, more rhythm, less of that distinctive 'AI cadence.' ChatGPT produces output that is brighter, more confident, and easier to skim. If you publish under your own name, Claude generally needs less editing. If you're producing volume — landing pages, email sequences, ad copy — ChatGPT's speed and structure are hard to beat.",
      "Pricing in 2026 is where most teams actually make the decision. Both vendors have settled around the $20/month consumer tier and per-token API pricing for builders. The honest answer: if you're a solo operator, the consumer plan of either is sufficient. If you're building a product on top, run your top three workflows through both APIs for a week and let your invoice settle the argument.",
      "What about agents? This is where the gap widens. Claude's tool-use is more deliberate — it explains its plan, asks before destructive actions, and recovers gracefully when a tool fails. ChatGPT's agent mode is faster and more aggressive, which is excellent for browsing and research, less excellent when it's wired into your production database. We use Claude for anything that touches infrastructure and ChatGPT for anything that touches the open web.",
      "Context window matters more than benchmarks suggest. Both models now comfortably handle multi-hundred-thousand-token contexts, but how they use that context differs. Claude is better at synthesizing across a large corpus — feed it ten PDFs and ask for a thematic summary, and it will deliver. ChatGPT is better at precision retrieval — pinpoint citations, exact quotes, structured extraction.",
      "Our verdict: stop trying to pick one. The marginal cost of subscribing to both is trivial relative to the time you'll waste using the wrong tool for the job. Use Claude for code, long-form writing, and anything where a wrong answer is expensive. Use ChatGPT for speed, research, creative ideation, and tasks where iteration is cheaper than precision. Within a month, you'll stop thinking about which to open — your hand will already know.",
      "If you're only going to subscribe to one in 2026, here's our tiebreaker: pick Claude if you're a builder, a writer, or a knowledge worker whose output gets scrutinized. Pick ChatGPT if you're a generalist, a student, or anyone whose primary need is breadth and speed. Both are extraordinary; neither is universally better. The 'best AI' is, increasingly, just the one that matches how your brain actually works.",
    ],
  },
  {
    slug: "lovable-vs-antigravity",
    title: "Lovable vs Google Antigravity: The New Era of AI App Builders",
    excerpt:
      "Two very different bets on the future of building software. We break down the philosophy, workflow, and ideal user for each.",
    category: "Tools",
    readTime: "10 min read",
    date: "May 5, 2026",
    author: "The VibeCode Team",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80&auto=format&fit=crop",
    content: [
      "AI app builders used to mean drag-and-drop site generators with a chatbot bolted on. In 2026, two products have rewritten that definition from opposite directions. Lovable treats software as a conversation — you describe an outcome, it produces a working app, and every change happens in plain English. Google's Antigravity treats software as an environment — you set goals, it orchestrates a fleet of agents that write, test, and deploy on your behalf. Both are extraordinary. They are also, philosophically, almost nothing alike.",
      "Lovable's core insight is that most product work isn't blocked on code — it's blocked on translation. The friction between 'I want this' and 'here is the working version' is where weeks die. Lovable collapses that gap. You open a project, describe a feature, watch it render in a live preview, and either ship it or refine it in another sentence. The result feels less like coding and more like steering.",
      "Antigravity takes the opposite stance. It assumes you already know what you want, and that what you really need is leverage. You define a goal — 'add Stripe billing and a usage dashboard' — and a swarm of specialized agents fan out: one writes the backend, one writes the frontend, one writes the tests, one runs the deploy. You supervise. You don't type the code; you approve the plan.",
      "The user each tool is built for is different. Lovable is for the person who has a clear vision and a small team, or no team at all. Founders, designers, indie hackers, internal-tools owners — anyone who can describe the thing they need in words and would rather not context-switch into an IDE. Antigravity is for engineers and engineering teams who already think in systems and want to delegate the implementation layer.",
      "Workflow speed is where the comparison gets interesting. For a brand-new app — landing page, auth, database, three core screens — Lovable will get you to a deployable product in under an hour. Antigravity will take longer to start, because you're configuring agents and writing your spec, but it scales differently once your codebase grows beyond what a single conversation can hold in its head.",
      "Code ownership is identical on both: you get a real repository with real code. Neither product locks you in. You can export, clone, and continue in your editor of choice. This matters more than it sounds — the previous generation of no-code tools owned your data and your runtime, and migration was effectively impossible.",
      "Quality of output, in our testing, is closer than the marketing suggests. Lovable's generated code is opinionated and consistent — React, TanStack, Tailwind, clean component boundaries. Antigravity's output reflects whatever stack you've configured, and tends to look like code a competent engineer would write, with the occasional over-engineered abstraction that agents are still prone to.",
      "Debugging is where both products still have rough edges. Lovable's tight feedback loop means errors are caught early, but understanding why an agent made a particular choice can require unwinding a long chat. Antigravity provides better introspection — you can see each agent's reasoning trace — but the surface area is larger, and a misconfigured agent can produce confidently wrong work at scale.",
      "Pricing reflects the audience. Lovable runs on a generous free tier with paid plans that scale with usage and team size — accessible to a student or a solo founder. Antigravity is priced for engineering teams: more expensive per seat, but justified if you're replacing or augmenting an actual development team.",
      "Our take after building real projects in both: Lovable is the right answer for 80% of new product work today. It's faster, the learning curve is hours not weeks, and the output is production-quality. Antigravity becomes the right answer when your codebase outgrows what one person plus AI can hold in working memory — at the point where you're coordinating real engineering work, not just shipping features.",
      "The future probably isn't 'pick one.' It's a workflow where Lovable handles the 0-to-1 of new ideas and Antigravity handles the 1-to-100 of mature systems. Both companies seem to know it. The interesting question for 2027 is whether they converge in the middle, or whether the gap between 'building' and 'operating' software becomes the new defining product boundary.",
    ],
  },
  {
    slug: "ai-coding-workflow-2026",
    title: "The AI Coding Workflow That Actually Ships in 2026",
    excerpt:
      "A practical, battle-tested workflow combining Claude, Cursor, and Lovable to ship real features 4x faster — without the chaos.",
    category: "Guides",
    readTime: "11 min read",
    date: "April 28, 2026",
    author: "The VibeCode Team",
    cover:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80&auto=format&fit=crop",
    content: [
      "Everyone has an opinion about AI-assisted coding. Most of those opinions come from people who have used the tools for a weekend or who have something to sell. After six months of using AI for nearly every line of production code we ship, we've landed on a workflow that is boring, repeatable, and faster than anything we've tried before. Here it is, end to end, with the failure modes we hit along the way.",
      "The first principle: AI is a force multiplier on clear thinking, not a substitute for it. The teams shipping the most aren't the ones with the cleverest prompts — they're the ones who can describe what they want in unambiguous English. If you can't explain a feature to a smart junior engineer in one paragraph, no amount of model upgrades will save you.",
      "Step one is planning, and we do it in Claude. Open a fresh conversation, paste the relevant context (existing code, design mockups, a customer support ticket — whatever frames the problem), and ask for a written plan before any code. Claude is unusually good at this: it will surface edge cases, push back on bad assumptions, and produce a markdown spec you can paste straight into a ticket. This step takes ten minutes and saves hours.",
      "Step two is scaffolding, and we do it in Lovable for anything net-new. New page, new internal tool, new prototype — Lovable produces a working version in minutes, complete with routing, basic state management, and reasonable defaults. You don't need to love every choice it makes; you need a foundation that compiles and runs, which it always provides.",
      "Step three is integration, and this is where Cursor (or your editor of choice with an embedded AI) earns its keep. Pull the Lovable-generated scaffolding into your repo, point the AI at the existing patterns in your codebase, and refactor toward consistency. Cursor's tab-complete is the best in class for this kind of in-the-weeds work — it sees your file, your imports, your conventions, and predicts the next line with uncanny accuracy.",
      "Step four is testing. The unpopular truth: AI-generated code without tests is a liability, not a productivity gain. Use whichever model you prefer to generate test cases — Claude is excellent at thinking about edge cases, ChatGPT at boilerplate — but write the tests before you trust the feature. A two-minute test investment routinely catches the one bug that would have taken an hour to debug in production.",
      "Step five is review. Even if you're working solo, force yourself to read every line of generated code before merging. Not to second-guess every choice, but to catch the confidently-wrong moments models still produce — the API call to a deprecated endpoint, the subtle off-by-one in a date range, the security check that 'looks right' but isn't. This is the single highest-leverage habit we've developed.",
      "Step six is shipping, and the AI mostly gets out of the way. We use standard CI/CD, deploy to the same platforms we always have, monitor with the same observability stack. The only AI-shaped change to our deploy pipeline is that we now ask Claude to summarize each release for the changelog and customer-facing release notes — a tiny chore that used to fall to the bottom of the list and now ships with every push.",
      "Failure modes worth naming. The first is over-trusting agents on multi-step tasks. Anything that touches production data, infrastructure, or money should be reviewed line-by-line, no matter how confident the model sounds. The second is letting context drift across sessions — start fresh conversations for fresh problems; don't try to carry six features' worth of context in one chat. The third is using AI for problems you don't yet understand. If you don't know what good looks like, you can't tell when the AI gets it wrong.",
      "The compounding effect is real, but it takes a few months to show up. The first week, you'll save maybe 10% of your time and lose some of it to learning curve. By month three, you'll notice that features that used to take two days take an afternoon. By month six, you'll have rewritten how your team thinks about scope — because work that was previously not worth doing is suddenly trivially cheap.",
      "If you take only one thing from this guide: invest in the planning step. Every workflow we've seen that fails with AI is one where someone started typing prompts before they'd decided what they were building. Every workflow that succeeds starts with ten minutes of clear thinking, written down. The tools have caught up. The bottleneck is, and always has been, knowing what you actually want.",
    ],
  },
  {
    slug: "prompting-tips-power-users",
    title: "10 Prompting Tips That Separate Power Users From Everyone Else",
    excerpt:
      "Forget 'act as an expert.' These are the prompting habits that quietly compound and turn AI from a toy into a daily workhorse.",
    category: "Tips",
    readTime: "8 min read",
    date: "April 19, 2026",
    author: "The VibeCode Team",
    cover:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=80&auto=format&fit=crop",
    content: [
      "Prompt engineering as a discipline is mostly dead. Modern models are robust enough that the elaborate incantations of 2023 — 'You are a senior staff engineer at Google, take a deep breath, think step by step' — are now mostly noise. But there is a real gap between people who get genuinely useful work out of AI and people who get plausible-looking slop. That gap is rarely about cleverness; it's about a handful of habits that compound. Here are ten we've watched separate the power users.",
      "One: lead with context, not the task. The single highest-leverage thing you can do is paste the relevant material — the existing code, the previous email thread, the customer's actual words — before asking for anything. Models are extraordinary at pattern-matching to context they have, and bad at guessing context they don't. A prompt with three paragraphs of background and one sentence of ask outperforms the reverse every time.",
      "Two: state the constraints up front. 'Write a function' produces something generic. 'Write a function in TypeScript, using async/await not promises, with no external dependencies, that runs on a Cloudflare Worker' produces something usable. Constraints aren't a limitation on the AI — they're the shape of the answer you actually want.",
      "Three: ask for a plan before code. For any task more complex than a one-liner, ask the model to outline its approach first. Read the plan, push back on anything that looks off, and only then ask it to implement. This catches bad assumptions before they become bad code, and it's roughly five times faster than debugging a 200-line file that went the wrong direction.",
      "Four: name the audience. 'Explain this concept' produces a textbook. 'Explain this concept to a smart product manager who hasn't written code in five years' produces something useful. The model has no idea who you're speaking to until you tell it.",
      "Five: use examples liberally. Two or three examples of the format, tone, or output style you want will outperform any amount of abstract description. This is true for writing, true for code, and especially true for anything stylized — naming conventions, commit messages, marketing copy.",
      "Six: separate generation from evaluation. Ask the model to produce three or four options before picking one. Then, in a separate prompt, ask it to critique its own options. The quality of the final pick rises sharply, and you learn what 'good' looks like for that task in the process.",
      "Seven: iterate in small steps. The temptation is to write one giant prompt that does the whole task. The faster path is short prompts, fast feedback, course correction. Treat the conversation like pair programming — small turns, quick corrections, momentum.",
      "Eight: ask 'what am I missing?' before shipping. After the model has produced a draft, paste it back with the question 'what are the failure modes, edge cases, or assumptions in this that I should be worried about?' The answer is almost always more useful than the original output.",
      "Nine: cultivate a system prompt library. The custom instructions or 'project' features in modern AI tools let you save context that travels with every conversation in a workspace. Invest 30 minutes in writing yours: your role, your stack, your conventions, your no-gos. You'll save that time back in the first day.",
      "Ten: know when to stop prompting and start typing. AI is a brilliant collaborator and a frustrating dictator. If a task is going in circles after three attempts, the prompt isn't the problem — the request is. Step away, write the thing yourself in pieces, and come back to AI with a sharper question. The best users don't try to AI their way through every problem; they know which problems AI is actually good at, and which need a human brain held to the page.",
      "None of these are tricks. They're habits. They compound quietly, and once you've internalized them, the entire experience of working with AI shifts — from rolling a die and hoping for a usable answer to a steady, fast, reliable collaboration. That's the whole game.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
