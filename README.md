# 🚀 Free Services for Developers

> **Build and ship your next app for $0, and know exactly when you'll have to start paying.**

Most "free tools" lists are bare link dumps. This one is different:

* **Opinionated $0 stacks** you can copy
* **Real limits** for every service, not just a "free" badge
* **"Where you hit the wall"**: what breaks first and what the next tier costs

> ⚠️ Free tiers change constantly. Rows marked ⏳ have not been re-verified recently. Always check the provider's pricing page before relying on a service in production.

---

## 🧭 Jump To

| What are you building? | Start here |
| ---------------------- | ---------- |
| 🚀 SaaS / startup MVP | [$0 SaaS Stack](#-0-saas-stack) |
| 🤖 AI app | [$0 AI Stack](#-0-ai-stack) |
| 🌐 Static site / docs | [$0 Static Site Stack](#-0-static-site-stack) |
| 🔌 API / backend | [$0 API Stack](#-0-api-stack) |
| 📱 Mobile app | [$0 Mobile Stack](#-0-mobile-stack) |
| 🧑‍💻 Side project | [$0 Side Project Stack](#-0-side-project-stack) |
| 🐙 Open source project | [$0 Open Source Stack](#-0-open-source-stack) |

Or browse by category: [Hosting](#-hosting) · [Databases](#-databases) · [Auth](#-authentication) · [Storage](#-storage) · [Email](#-email) · [AI](#-ai--llm) · [Analytics](#-analytics) · [Monitoring](#-monitoring--error-tracking) · [Search](#-search) · [Cache & Queues](#-cache--queues) · [Domains & DNS](#-domains-dns--cdn) · [Payments](#-payments) · [Dev Tools](#-developer-tools) · [Self-Host](#-self-host-only-free-software-not-free-hosting)

---

## 🏷️ Legend

| Badge | Meaning |
| ----- | ------- |
| 🟢 | Free forever (no expiry) |
| 🔵 | Free credits (runs out) |
| 🟡 | Free trial (time-limited) |
| 💳 | Credit card required |
| 😴 | Sleeps / pauses when inactive |
| ⚡ | Usage or rate limits |
| 🏠 | Self-hostable |
| 💰 | Transaction fees |
| ⏳ | Not yet re-verified |

**"Free" ≠ "free software."** A hosted free tier costs you nothing. A self-hostable project is free to download, but you pay for the server. Those are listed separately [here](#-self-host-only-free-software-not-free-hosting).

---

# 🏆 $0 Stacks

> 💡 Each stack is a starting point. Real cost depends on traffic, storage, compute, and API usage.

## 🚀 $0 SaaS Stack

```text
Frontend       → Cloudflare Pages (or Vercel for Next.js, non-commercial only)
Backend        → Cloudflare Workers
Database       → Neon or Supabase (Postgres)
Auth           → Better Auth or Supabase Auth
Storage        → Cloudflare R2
Email          → Resend
Analytics      → PostHog
Monitoring     → Sentry
Payments       → Stripe
DNS / CDN      → Cloudflare
Code + CI      → GitHub + GitHub Actions
```

**Where you hit the wall:**

* Workers + Postgres: use **Cloudflare Hyperdrive** (or a pooled connection string) or you will exhaust database connections.
* Supabase free projects pause after about a week of inactivity. Fine for dev, risky for production.
* Vercel's free Hobby plan is for non-commercial use. A paying SaaS needs Pro or a different host.
* Resend's free plan has a daily send cap that password-reset spikes can hit.

## 🤖 $0 AI Stack

```text
Frontend       → Cloudflare Pages
Backend        → Cloudflare Workers
LLM            → Gemini / Groq / Cerebras (rate-limited free tiers)
Embeddings     → Cloudflare Workers AI or Gemini
Vector DB      → Supabase pgvector (or Cloudflare Vectorize)
Database       → Supabase / Neon
Email          → Resend
Analytics      → PostHog
Monitoring     → Sentry
```

**Where you hit the wall:** free LLM tiers are rate-limited (requests per minute and per day) and often allow providers to use your prompts for training. Do not send sensitive user data. Add a provider fallback (e.g. Groq → Gemini → OpenRouter) before launch.

## 🌐 $0 Static Site Stack

```text
Hosting        → Cloudflare Pages / GitHub Pages
DNS            → Cloudflare
Analytics      → Cloudflare Web Analytics / Umami Cloud
Forms          → Tally / Formspree
```

**Where you hit the wall:** almost nowhere. Build-minute limits are the first thing you will notice on large sites.

## 🔌 $0 API Stack

```text
Runtime        → Cloudflare Workers / Render / Koyeb
Database       → Neon / Supabase
Cache          → Upstash Redis
Monitoring     → Sentry + UptimeRobot
Email          → Resend
```

**Where you hit the wall:** Render's free web service sleeps after idle (cold starts of tens of seconds), and Workers have a CPU time limit per request. Both are fine for prototypes, not for latency-sensitive production.

## 📱 $0 Mobile Stack

```text
App            → Expo (React Native) or Flutter
Backend + DB   → Supabase or Firebase
Auth           → Supabase Auth / Firebase Auth
Push           → Firebase Cloud Messaging
Storage        → Supabase Storage / Cloudflare R2
Crash reports  → Sentry / Firebase Crashlytics
```

**Where you hit the wall:** the stores, not the infrastructure. Apple Developer ($99/year) and Google Play ($25 one-time) are unavoidable for publishing.

## 🧑‍💻 $0 Side Project Stack

```text
Hosting        → Cloudflare Pages + Workers
Database       → Turso (SQLite) or Neon
Auth           → Better Auth
Analytics      → Umami Cloud / Cloudflare Web Analytics
Uptime         → UptimeRobot
```

Optimized for **lowest setup effort and no card on file**, so a forgotten project cannot surprise you with a bill.

## 🐙 $0 Open Source Stack

```text
Code + Issues  → GitHub
CI/CD          → GitHub Actions (free for public repos)
Docs           → GitHub Pages / Cloudflare Pages
Packages       → npm / GitHub Packages / GHCR
Security       → GitHub code scanning + Dependabot (free for public repos)
Dev env        → GitHub Codespaces (monthly free hours)
Community      → GitHub Discussions
```

Many paid tools offer free plans for open source projects. Always check each vendor's open-source program before paying.

---

# ☁️ Hosting

| Service | Type | Free | Limits (best known) | Card | Verified |
| ------- | ---- | ---- | ------------------- | ---- | -------- |
| [Cloudflare Pages](https://pages.cloudflare.com/) | Static / full-stack | 🟢 | Unlimited bandwidth, limited builds per month | ❌ | ⏳ |
| [Cloudflare Workers](https://workers.cloudflare.com/) | Serverless / edge | 🟢⚡ | ~100k requests/day, short CPU time per request | ❌ | ⏳ |
| [Vercel](https://vercel.com/) | Frontend | 🟢⚡ | Hobby plan is **non-commercial only**; bandwidth and function limits | ❌ | ⏳ |
| [Netlify](https://www.netlify.com/) | Frontend | 🟢⚡ | Credit-based free plan covering builds, bandwidth, functions | ❌ | ⏳ |
| [Render](https://render.com/) | App hosting | 🟢😴 | Free web services sleep when idle; free Postgres expires | ❌ | ⏳ |
| [Koyeb](https://www.koyeb.com/) | Containers | 🟢⚡ | One small free instance | ⚠️ varies | ⏳ |
| [GitHub Pages](https://pages.github.com/) | Static | 🟢 | Small site size cap, soft bandwidth cap, no server code | ❌ | ⏳ |
| [Deno Deploy](https://deno.com/deploy) | Serverless | 🟢⚡ | Request and bandwidth limits | ❌ | ⏳ |
| [Google Cloud Run](https://cloud.google.com/run) | Containers | 🟢⚡💳 | Monthly free request and compute allowance | 💳 | ⏳ |
| [Railway](https://railway.com/) | Cloud | 🔵 | Trial credits, then paid | 💳 | ⏳ |
| [Fly.io](https://fly.io/) | Cloud | 🔵 | Pay-as-you-go for new accounts, no standing free plan | 💳 | ⏳ |

---

# 💾 Databases

| Service | Engine | Free | Limits (best known) | Notes | Verified |
| ------- | ------ | ---- | ------------------- | ----- | -------- |
| [Supabase](https://supabase.com/) | PostgreSQL | 🟢😴 | ~500 MB DB, limited active projects | Pauses after about a week idle | ⏳ |
| [Neon](https://neon.tech/) | PostgreSQL | 🟢😴 | ~0.5 GB per project | Scales to zero, cold start on first query | ⏳ |
| [Aiven](https://aiven.io/) | PostgreSQL / MySQL / Valkey | 🟢⚡ | Single small node | Good for learning | ⏳ |
| [CockroachDB](https://www.cockroachlabs.com/) | Distributed SQL | 🟢⚡ | Free Basic tier with monthly usage allowance | Postgres-compatible | ⏳ |
| [Nile](https://www.thenile.dev/) | PostgreSQL | 🟢⚡ | Free tier for multi-tenant apps | Tenant-aware Postgres | ⏳ |
| [Turso](https://turso.tech/) | SQLite (libSQL) | 🟢⚡ | Several GB storage, monthly row read/write caps | Great with Workers | ⏳ |
| [MongoDB Atlas](https://www.mongodb.com/atlas) | MongoDB | 🟢⚡ | M0 cluster, ~512 MB | Shared cluster, connection caps | ⏳ |
| [Firebase](https://firebase.google.com/) | Firestore / RTDB | 🟢⚡ | Spark plan, daily read/write caps | File Storage may require the paid plan | ⏳ |

> 💡 Using Postgres from Cloudflare Workers? Put **Hyperdrive** or a pooler in front.

---

# 🔐 Authentication

| Service | Free | Limits (best known) | Notes | Verified |
| ------- | ---- | ------------------- | ----- | -------- |
| [Supabase Auth](https://supabase.com/auth) | 🟢 | Tens of thousands of MAU on the free plan | Tied to Supabase | ⏳ |
| [Firebase Authentication](https://firebase.google.com/products/auth) | 🟢 | Generous MAU on the basic plan | Phone auth is metered | ⏳ |
| [Clerk](https://clerk.com/) | 🟢⚡ | ~10k MAU | Hosted UI components | ⏳ |
| [Auth0](https://auth0.com/) | 🟢⚡ | Tens of thousands of MAU | Feature-limited free plan | ⏳ |
| [Better Auth](https://www.better-auth.com/) | 🟢🏠 | Library, no MAU limit | You own the data and the database | ⏳ |
| [Auth.js](https://authjs.dev/) | 🟢🏠 | Library, no MAU limit | Self-managed | ⏳ |

---

# 📦 Storage

| Service | Free | Limits (best known) | Notes | Verified |
| ------- | ---- | ------------------- | ----- | -------- |
| [Cloudflare R2](https://www.cloudflare.com/developer-platform/r2/) | 🟢⚡ | ~10 GB storage, **zero egress fees** | S3-compatible | ⏳ |
| [Supabase Storage](https://supabase.com/storage) | 🟢⚡ | ~1 GB on the free plan | Tied to Supabase | ⏳ |
| [Firebase Storage](https://firebase.google.com/products/storage) | ⚡💳 | Requires the paid plan for new projects | Check current terms | ⏳ |
| [Backblaze B2](https://www.backblaze.com/cloud-storage) | 🟢⚡ | ~10 GB free | S3-compatible | ⏳ |
| [Cloudinary](https://cloudinary.com/) | 🟢⚡ | Monthly credit allowance | Image/video transforms | ⏳ |

---

# 📧 Email

| Service | Free | Limits (best known) | Notes | Verified |
| ------- | ---- | ------------------- | ----- | -------- |
| [Resend](https://resend.com/) | 🟢⚡ | A few thousand emails/month, daily cap | Best developer experience | ⏳ |
| [Brevo](https://www.brevo.com/) | 🟢⚡ | Daily send cap | Includes marketing email | ⏳ |
| [Mailgun](https://www.mailgun.com/) | 🟢⚡ | Small daily cap | Check current free plan | ⏳ |
| [Amazon SES](https://aws.amazon.com/ses/) | 🔵 | New-account credit model | Cheapest at scale | ⏳ |
| [Loops](https://loops.so/) | 🟢⚡ | Limited contacts | Product and marketing email | ⏳ |

> ❌ **Removed:** SendGrid, because its standing free plan was retired.

---

# 🤖 AI & LLM

## 🧠 LLM APIs

| Service | Free | Limits (best known) | Watch out for | Verified |
| ------- | ---- | ------------------- | ------------- | -------- |
| [Google Gemini](https://ai.google.dev/) | 🟢⚡ | Per-minute and per-day request caps | Free-tier data may be used for training | ⏳ |
| [Groq](https://groq.com/) | 🟢⚡ | Rate limits per model | Very fast, open models | ⏳ |
| [Cerebras](https://www.cerebras.ai/) | 🟢⚡ | Rate limits per model | Open models | ⏳ |
| [Mistral AI](https://mistral.ai/) | 🟢⚡ | Experiment tier with rate limits | Data-sharing terms apply | ⏳ |
| [OpenRouter](https://openrouter.ai/) | 🟢⚡ | Free models, low daily request cap | Models come and go | ⏳ |
| [Hugging Face](https://huggingface.co/) | 🟢⚡ | Monthly inference credits | Cold starts on small models | ⏳ |
| [GitHub Models](https://github.com/marketplace/models) | 🟢⚡ | Rate-limited prototyping access | For prototyping only | ⏳ |
| [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/) | 🟢⚡ | Daily free allowance | Runs next to your Worker | ⏳ |

## 🖥️ Notebooks & Compute

* [Google Colab](https://colab.research.google.com/): free GPU/TPU sessions, time-limited
* [Kaggle](https://www.kaggle.com/): weekly free GPU hours
* [Lightning AI](https://lightning.ai/): monthly free credits

## 🔎 Vector Databases

* [Supabase pgvector](https://supabase.com/docs/guides/ai): runs inside your free Postgres
* [Cloudflare Vectorize](https://developers.cloudflare.com/vectorize/): pairs with Workers
* [Qdrant Cloud](https://qdrant.tech/): small free cluster
* [Pinecone](https://www.pinecone.io/): free starter plan
* [Weaviate](https://weaviate.io/): sandbox / trial clusters
* [Chroma](https://www.trychroma.com/): open source, 🏠 self-host or cloud

## 🎙️ Speech

* [Deepgram](https://deepgram.com/): free credits
* [ElevenLabs](https://elevenlabs.io/): small monthly free allowance
* [Whisper](https://github.com/openai/whisper): open-source model, 🏠 you supply the compute

## 🎨 Image Generation

* [Replicate](https://replicate.com/): pay per run, small trial credit
* [Hugging Face Spaces](https://huggingface.co/spaces): community demos
* [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/): image models with the daily allowance

---

# 📊 Analytics

| Service | Free | Limits (best known) | Notes | Verified |
| ------- | ---- | ------------------- | ----- | -------- |
| [PostHog](https://posthog.com/) | 🟢⚡ | ~1M events/month | Product analytics, replays, flags | ⏳ |
| [Umami Cloud](https://umami.is/) | 🟢⚡ | Monthly event cap | Privacy-friendly, 🏠 also self-hostable | ⏳ |
| [Google Analytics](https://analytics.google.com/) | 🟢 | Generous | Privacy and consent obligations apply | ⏳ |
| [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) | 🟢 | Free | Basic, cookie-less | ⏳ |

> 🏠 **Moved to self-host:** Plausible (paid hosted, free only if you self-host).

---

# 🐛 Monitoring & Error Tracking

| Service | Free | Limits (best known) | Notes | Verified |
| ------- | ---- | ------------------- | ----- | -------- |
| [Sentry](https://sentry.io/) | 🟢⚡ | A few thousand errors/month | Single user on free plan | ⏳ |
| [Better Stack](https://betterstack.com/) | 🟢⚡ | Limited monitors, short retention | Uptime + logs | ⏳ |
| [UptimeRobot](https://uptimerobot.com/) | 🟢⚡ | ~50 monitors, 5-minute interval | Non-commercial terms, check | ⏳ |
| [Grafana Cloud](https://grafana.com/) | 🟢⚡ | Metrics, logs, traces allowance | Good all-in-one observability | ⏳ |

---

# 🔍 Search

| Service | Free | Limits (best known) | Notes | Verified |
| ------- | ---- | ------------------- | ----- | -------- |
| [Algolia](https://www.algolia.com/) | 🟢⚡ | Monthly search request and record caps | Best hosted search UX | ⏳ |
| [Tavily](https://tavily.com/) | 🟢⚡ | Monthly credit allowance | Search API for AI agents | ⏳ |

> 🏠 **Moved to self-host:** Meilisearch, Typesense, OpenSearch (hosted plans are paid or trial only).

---

# ⚡ Cache & Queues

| Service | Free | Limits (best known) | Notes | Verified |
| ------- | ---- | ------------------- | ----- | -------- |
| [Upstash Redis](https://upstash.com/) | 🟢⚡ | Monthly command cap | HTTP API, works from Workers | ⏳ |
| [Upstash Kafka / QStash](https://upstash.com/) | 🟢⚡ | Small monthly allowance | Serverless messaging | ⏳ |
| [Cloudflare KV](https://developers.cloudflare.com/kv/) | 🟢⚡ | Daily read/write caps | Eventually consistent | ⏳ |
| [Cloudflare Queues](https://developers.cloudflare.com/queues/) | 🟢⚡ | Free-tier operations | Workers only | ⏳ |

> 🏠 **Moved to self-host:** RabbitMQ, Valkey.

---

# 🌐 Domains, DNS & CDN

> A real domain is never free. Budget about $10/year. Free subdomains (`*.pages.dev`, `*.workers.dev`, `*.vercel.app`) work for prototypes.

| Service | Free | Notes | Verified |
| ------- | ---- | ----- | -------- |
| [Cloudflare DNS + CDN](https://www.cloudflare.com/) | 🟢 | DNS, CDN, basic DDoS protection | ⏳ |
| [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) | 💳 | Domains at wholesale cost, no markup | ⏳ |
| [Bunny.net](https://bunny.net/) | 🟡 | Trial, then cheap pay-as-you-go CDN | ⏳ |
| [AWS CloudFront](https://aws.amazon.com/cloudfront/) | 🔵 | New-account credit model | ⏳ |

---

# 🔒 Security

| Service | Free | Notes | Verified |
| ------- | ---- | ----- | -------- |
| [Cloudflare](https://www.cloudflare.com/) | 🟢 | WAF basics, DDoS, bot protection (free tier) | ⏳ |
| [Snyk](https://snyk.io/) | 🟢⚡ | Limited scans/month on free plan | ⏳ |
| [GitHub code scanning + Dependabot](https://github.com/security/advanced-security) | 🟢 | Free for **public** repos only | ⏳ |
| [Socket](https://socket.dev/) | 🟢⚡ | Dependency supply-chain scanning | ⏳ |

---

# 🧑‍💻 Developer Tools

## Code Hosting

* [GitHub](https://github.com/)
* [GitLab](https://gitlab.com/)
* [Bitbucket](https://bitbucket.org/)

## CI/CD

* [GitHub Actions](https://github.com/features/actions): free for public repos, monthly minutes for private
* [GitLab CI/CD](https://docs.gitlab.com/ee/ci/): monthly compute minutes
* [CircleCI](https://circleci.com/): monthly credits
* [Buildkite](https://buildkite.com/): free tier for small teams

## Package Registries

* [npm](https://www.npmjs.com/)
* [GitHub Packages](https://github.com/features/packages)
* [Docker Hub](https://hub.docker.com/): limited pulls and private repos on free plan
* [GitHub Container Registry](https://ghcr.io/)

## Containers

* [GitLab Container Registry](https://docs.gitlab.com/ee/user/packages/container_registry/)
* [Google Artifact Registry](https://cloud.google.com/artifact-registry): small free storage allowance
* [Amazon ECR](https://aws.amazon.com/ecr/): small free allowance for new accounts

## Development Environments

* [GitHub Codespaces](https://github.com/features/codespaces): monthly free hours
* [StackBlitz](https://stackblitz.com/)
* [CodeSandbox](https://codesandbox.io/)
* [Replit](https://replit.com/): heavily limited free plan

---

# 📱 Mobile

* [Expo](https://expo.dev/): free tier for builds and updates, limited build queue
* [React Native](https://reactnative.dev/): open source
* [Flutter](https://flutter.dev/): open source
* [Firebase](https://firebase.google.com/): Auth, Firestore, FCM, Crashlytics
* [Supabase](https://supabase.com/): Postgres, Auth, Storage, Realtime

---

# 🎨 Design

* [Figma](https://www.figma.com/): free starter plan
* [Canva](https://www.canva.com/): free plan
* [Excalidraw](https://excalidraw.com/): free, open source
* [Lucide](https://lucide.dev/): open-source icons
* [Unsplash](https://unsplash.com/): free photos (check license for your use)
* [Pexels](https://www.pexels.com/): free photos and video

---

# 💳 Payments

| Service | Fees | Notes |
| ------- | ---- | ----- |
| [Stripe](https://stripe.com/) | 💰 per transaction | No monthly fee; you are the merchant |
| [Lemon Squeezy](https://www.lemonsqueezy.com/) | 💰 per transaction | Merchant of record (handles global tax) |
| [Paddle](https://www.paddle.com/) | 💰 per transaction | Merchant of record |
| [Creem](https://www.creem.io/) | 💰 per transaction | Merchant of record |

> 💡 "Free" here means no mandatory monthly platform fee, not free transactions. Merchant-of-record services charge more but handle VAT and sales tax for you.

---

# 📣 Marketing & Launch

* [Product Hunt](https://www.producthunt.com/)
* [Indie Hackers](https://www.indiehackers.com/)
* [Reddit](https://www.reddit.com/)
* [X](https://x.com/)
* [LinkedIn](https://www.linkedin.com/)
* [Beehiiv](https://www.beehiiv.com/): newsletters, free up to a subscriber cap
* [Kit (ConvertKit)](https://kit.com/): newsletters, free up to a subscriber cap

---

# 📨 Forms & Feedback

* [Tally](https://tally.so/): generous free plan
* [Google Forms](https://forms.google.com/)
* [Microsoft Forms](https://forms.office.com/)
* [Formspree](https://formspree.io/): small monthly submission cap
* [Typeform](https://www.typeform.com/): very limited free plan

---

# 🔄 Automation

* [n8n](https://n8n.io/): 🏠 free if self-hosted, paid cloud
* [Make](https://www.make.com/): free plan with monthly operation cap
* [Zapier](https://zapier.com/): very limited free plan
* [Pipedream](https://pipedream.com/): free credits for workflows
* [GitHub Actions](https://github.com/features/actions): scheduled workflows are a free cron

---

# 🏠 Self-Host Only (Free Software, Not Free Hosting)

These cost $0 to download but need a server. A small VPS or a home server typically costs a few dollars a month.

| Project | Replaces | Notes |
| ------- | -------- | ----- |
| [Meilisearch](https://www.meilisearch.com/) | Algolia | Fast, simple search |
| [Typesense](https://typesense.org/) | Algolia | Typo-tolerant search |
| [OpenSearch](https://opensearch.org/) | Elasticsearch | Heavy on RAM |
| [GlitchTip](https://glitchtip.com/) | Sentry | Sentry-SDK compatible |
| [SigNoz](https://signoz.io/) | Datadog / Sentry | OpenTelemetry-native |
| [Plausible](https://plausible.io/) | Google Analytics | Hosted version is paid |
| [Umami](https://umami.is/) | Google Analytics | Hosted free tier also exists |
| [RabbitMQ](https://www.rabbitmq.com/) | Cloud queues | Message broker |
| [Valkey](https://valkey.io/) | Redis | Open-source Redis fork |
| [n8n](https://n8n.io/) | Zapier | Workflow automation |
| [Appwrite](https://appwrite.io/) | Firebase | Backend-as-a-service |

---

# 🆚 Free Alternatives

| Popular | Free Alternatives |
| ------- | ----------------- |
| Vercel | Cloudflare Pages, Netlify |
| Supabase | Neon, Firebase, Appwrite (self-host) |
| Firebase | Supabase, Appwrite |
| Redis | Upstash, Valkey (self-host) |
| Sentry | GlitchTip, SigNoz (self-host) |
| Algolia | Meilisearch, Typesense (self-host) |
| AWS | Cloudflare, Render, Koyeb |
| Stripe | Lemon Squeezy, Paddle, Creem (merchant of record) |
| Heroku | Render, Koyeb, Railway (credits) |
| OpenAI API | Gemini, Groq, Cerebras, Mistral |
| Google Analytics | PostHog, Umami, Cloudflare Web Analytics |

---

# 💰 $0 Startup Checklist

```text
☐ Domain (~$10/year, not free)
☐ DNS / CDN
☐ Frontend
☐ Backend
☐ Database
☐ Authentication
☐ File storage
☐ Email
☐ Analytics
☐ Error tracking
☐ Uptime monitoring
☐ Payments
☐ CI/CD
☐ AI (if needed)
```

Start with free tiers. Upgrade only when a real limit blocks you.

---

# ⚠️ Free Doesn't Mean Unlimited

Before picking a service, check:

* Request, CPU, and memory limits
* Storage, bandwidth, and database size
* Concurrent connections (the usual surprise with serverless + Postgres)
* Build minutes and API rate limits
* Sleep behavior and cold starts
* Data retention and backups
* Credit card requirement
* **Commercial-use restrictions** (e.g. Vercel Hobby)
* Geographic availability
* Free-tier expiration

A service can be free and still be a bad choice for production.

---

# 🔄 How This List Stays Accurate

Every row carries a **Verified** column:

* ⏳ means not yet re-verified. Treat limits as approximate.
* A date (`2026-10-08`) means the pricing page was checked on that day.

Outdated free tier? [Open an issue](https://github.com/dereknguyen269/free-services/issues) or submit a PR.

---

# 🤝 Contributing

Adding a service? It should have:

1. A genuinely useful free tier
2. Publicly documented pricing and limits
3. A currently active free plan
4. Something distinct from existing entries

Please include: service, category, URL, free-tier limits, card required, free forever / credits / trial, commercial use allowed, sleep or expiry behavior, and last verified date.

Services that are free for only a few days, without meaningful credits, will not be accepted.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full template and [ROADMAP.md](ROADMAP.md) for what is planned (standardized metadata, `services.yaml` as the source of truth, automated pricing-page monitoring, and a searchable website).

---

# ⭐ Support

If this saved you money, **give it a ⭐ on GitHub**. Know a great free service that's missing? Open a PR.

---

## 📚 Related

* [free-for-dev](https://github.com/ripienaar/free-for-dev): the broad, community-maintained catalog
* [Awesome Selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted)
* [Public APIs](https://github.com/public-apis/public-apis)

---

## 📄 License

See [LICENSE](LICENSE) for details.

---

<p align="center">
  <strong>Build more. Pay less. Ship faster. 🚀</strong>
</p>
