# 🚀 Free Services for Developers

A comprehensive, curated guide to **free-forever**, trial, and generous free-tier services for building, deploying, and scaling applications in 2026.

> **Important:** Free tiers, quotas, eligibility rules, regions, and billing policies change frequently. This guide was last reviewed on **2026-10-07**. Treat every quota as indicative, verify the provider’s current pricing before deploying, and set billing alerts where available. “Free” does not necessarily mean no credit card, no overage charges, or a production SLA.

### Selected official pricing references

- [Fly.io pricing](https://fly.io/docs/about/pricing/) — usage-based billing; legacy plans and trials are subject to separate terms.
- [Mailgun pricing](https://www.mailgun.com/pricing/) — current free plan allowance and plan conditions.
- [PlanetScale pricing](https://planetscale.com/pricing) — current database products and paid pricing.

---

## 📑 Quick Navigation

| Category | Services |
|----------|----------|
| 🏠 **Hosting** | Web apps, containers, serverless |
| 💾 **Databases** | PostgreSQL, MongoDB, Redis, SQLite |
| 📧 **Email** | Transactional & marketing |
| 🐛 **Monitoring** | Errors, performance, logs, APM |
| 🤖 **AI/LLM** | APIs & chat interfaces |
| 📊 **Analytics** | User tracking & product insights |
| 📣 **Marketing** | Email, SEO, forms, content, automation |

---

## 🏠 Hosting & Deployment

### Frontend Hosting

| Service | Free Tier | Best For | Key Feature |
|---------|-----------|----------|------------|
| **GitHub Pages** | ✅ Unlimited | Documentation, static sites | Git-native, no setup |
| **Vercel** | ✅ Hobby | Next.js, React | Edge network, serverless |
| **Netlify** | ✅ Free | Static + functions | Git deploy, forms |
| **Cloudflare Pages** | ✅ Unlimited | Speed-focused | Global CDN, D1 database |

### Backend & Full-Stack Hosting

| Service | Free Tier | Compute | Database | Sleep/Scale-to-Zero | Best For |
|---------|-----------|---------|----------|---------------------|----------|
| **Vercel** | ✅ Hobby | Serverless | ❌ | ⚡ Yes | Full-stack Next.js & React |
| **Render** | ✅ 750 hrs/mo | 0.5 CPU | PostgreSQL | 😴 Yes | General SaaS |
|| **Railway** | 🔴 30-day trial only ($5 credits) | Yes | PostgreSQL | ❌ | Startups |
| **Koyeb** | ✅ 1 service | 512 MB RAM | ❌ | 😴 Yes | APIs & backends |
|| **Fly.io** | ❌ No free tier (legacy accounts only) | Shared CPU | Self-managed PostgreSQL | ⚡ Yes | Docker apps & full-stack |
| **Google Cloud Run** | ✅ Free quota | Containers | ❌ | ⚡ Yes | Containerized apps |
| **Azure Container Apps** | ✅ Free quota | Yes | ❌ | ⚡ Yes | Microsoft ecosystem |
| **AWS Lambda** | ✅ Free tier | Serverless | DynamoDB | ⚡ Yes | Event-driven apps |
| **Firebase Hosting** | ✅ Free | Limited backend | Firebase | — | Web/mobile apps |
| **Oracle Cloud** | ✅ Always Free | Powerful VMs | MySQL/PostgreSQL | ❌ | Self-hosting |
| **Zeabur** | ⚠️ Limited | Docker | PostgreSQL | Varies | Side projects |
|| **Northflank** | ✅ Free (2 services, 2 jobs, 1 addon) | Kubernetes | PostgreSQL | ⚡ Yes | Docker/Kubernetes |

---

## 💾 Databases & Storage

### SQL Databases

| Service | Type | Free Quota | Scale-to-Zero | Best For |
|---------|------|-----------|----------------|-----------| 
| **Supabase** | PostgreSQL | 500 MB | ✅ | Full PostgreSQL + Auth + Realtime |
| **Neon** | PostgreSQL | 500 MB | ✅ Serverless | Branching + Vercel integration |
|| **PlanetScale** | MySQL | 🔴 No free tier (Hobby removed Apr 2024) | ❌ | MySQL (serverless) |
| **Prisma Postgres** | PostgreSQL | 500 MB | ✅ | TypeScript/Prisma-first |
| **Nile** | PostgreSQL | 1 GB | ✅ | Multi-tenant SaaS |
| **CockroachDB** | Distributed SQL | 10 GiB | ✅ | Distributed systems |
| **Aiven** | PostgreSQL/MySQL/Redis | 1 GB | ⚠️ | Multiple database types |

### NoSQL & Document Databases

| Service | Type | Free Quota | Realtime | Best For |
|---------|------|-----------|----------|----------|
| **MongoDB Atlas** | MongoDB | 512 MB | ❌ | Document storage |
| **Firebase Firestore** | NoSQL | 1 GiB | ✅ | Mobile + web apps |
| **Firebase Realtime DB** | NoSQL | 1 GB | ✅ | Simple sync |
| **Convex** | Document DB | ~0.5 GB | ✅ | Realtime-first apps |
| **Turso** | SQLite | 5 GB | ✅ | Edge-first SQLite |
| **Cloudflare D1** | SQLite | 5 GB | ✅ | Workers integration |

### Cache & Search

| Service | Type | Free Tier | Best For |
|---------|------|-----------|----------|
| **Upstash** | Redis | 256 MB | Serverless caching |
| **Redis Cloud** | Redis | 30 MB | In-memory cache |
| **Meilisearch** | Search | Self-hosted | Full-text search |
| **Typesense** | Search | Self-hosted | Fast search API |

---

## 📧 Email Services

### Transactional Email

| Service | Free Quota | Key Strength | Best For |
|---------|-----------|--------------|----------|
| **Resend** | 3,000/mo (100/day) | Excellent DX, React Email | SaaS notifications |
| **Brevo** | 300/day | SMTP + API | High-volume email |
| **Amazon SES** | 200/day (first 30 days) | Extremely cheap at scale | Production email |
| **Mailtrap** | 4,000/mo | Testing + production sandbox | Development |
| **Mailgun** | 100/day free plan | Powerful API, webhooks | Reliable delivery |
| **Postmark** | 100/mo | Excellent deliverability | High-importance email |
| **MailerSend** | 500/mo | Simple API, templates | Quick setup |

### Email Marketing & Newsletters

| Service | Free Tier | Subscribers | Best For |
|---------|-----------|------------|----------|
| **Brevo** | 300/day + automation | Unlimited | Email campaigns + CRM |
| **Mailchimp** | ✅ Limited | Up to 500 | Traditional email marketing |
| **MailerLite** | Limited | Up to 1,000 | Creators & small business |
| **HubSpot** | ✅ Free | 1,000 contacts | All-in-one marketing |
| **Substack** | ✅ Free | Unlimited | Newsletter publishing |
| **Beehiiv** | Limited | 1,000 subscribers | Paid newsletter platform |

---

## 🐛 Monitoring, Errors & Performance

### Error Tracking

| Service | Free Tier | Stack Traces | Session Replay | Best For |
|---------|-----------|--------------|----------------|----------|
| **Sentry** | 5K events/mo | ✅ Excellent | ✅ Full replay | Industry standard |
| **Highlight.io** | Free tier | ✅ | ✅ Error + logs + replay | All-in-one observability |
| **Rollbar** | Free tier | ✅ | ⚠️ Limited | Simple error monitoring |
| **Bugsnag** | Free tier | ✅ | ⚠️ Limited | Mobile + web errors |
| **GlitchTip** | Self-hosted / Free | ✅ | ⚠️ | Open-source Sentry alternative |
| **Airbrake** | Trial/free | ✅ | ⚠️ | Mature error monitoring |

### Logs, Metrics & APM

| Service | Free Tier | Logs | Metrics | Traces | Best For |
|---------|-----------|------|---------|--------|----------|
| **Better Stack** | ✅ Free | ✅ | ✅ Uptime | ✅ | Logs + incident management |
| **Grafana Cloud** | Generous free | ✅ | ✅ | ✅ | Metrics + logs + traces |
| **New Relic** | 100 GB/mo | ✅ | ✅ | ✅ | Full-stack observability |
| **SigNoz** | Self-hosted | ✅ | ✅ | ✅ OpenTelemetry | Complete observability |
| **OpenObserve** | Self-hosted/free | ✅ High efficiency | ✅ | ✅ | Logs + metrics + traces |
| **Elastic Observability** | Self-hosted/free | ✅ Powerful | ✅ | ✅ | Logs + APM + metrics |
| **Prometheus + Grafana** | ✅ Open source | ⚠️ | ✅ Industry std | ⚠️ | Metrics & dashboards |
| **Honeycomb** | Free tier | ⚠️ | ⚠️ | ✅ Distributed tracing | High-cardinality observability |
| **Jaeger** | ✅ Open source | ❌ | ❌ | ✅ | Distributed tracing |
| **Datadog** | Free tier | ✅ | ✅ | ✅ | Powerful all-in-one APM |

---

## 🤖 AI & Machine Learning

### AI APIs & LLM Inference

| Service | Free Tier | Models | Speed | Best For |
|---------|-----------|--------|-------|----------|
| **Google Gemini API** | ✅ Generous | Gemini | Fast | Multimodal, general AI |
| **Groq** | ✅ Free | Llama, Qwen, etc. | ⚡ Extremely fast | Fast API inference |
| **Cerebras** | ✅ Free | Llama, Qwen | ⚡ Extremely fast | LLM inference |
| **Mistral AI** | ✅ Free | Mistral models | Good | Open models |
| **GitHub Models** | ✅ Free | Various open | Good | Developer-friendly |
| **OpenRouter** | ✅ Free | 200+ models | Variable | Multi-model experimentation |
| **Hugging Face** | ✅ Free | 1000s of models | Variable | Open-source AI ecosystem |
| **Cloudflare Workers AI** | ✅ Free | Llama, Qwen | Edge | Edge AI deployment |
| **Cohere** | ✅ Free | Command, Embed | Good | RAG & search |
| **SambaNova Cloud** | ✅ Free | Llama, DeepSeek | ⚡ Fast | Production inference |
| **Together AI** | ⚠️ Free credits | Open models | Good | Model variety |
| **Fireworks AI** | ⚠️ Free credits | Llama, Qwen, DeepSeek | Good | Production platform |
| **DeepInfra** | ⚠️ Free credits | Open models | Good | Many models |
| **Replicate** | ⚠️ Trial credits | Image/video/LLM | Variable | Model marketplace |
| **Modal** | ⚠️ Credits | Any model | Flexible | Run your own models |
| **AWS Bedrock** | ⚠️ Free trials | Claude, Llama, Nova | Good | Enterprise-grade |
| **Azure AI Foundry** | ⚠️ Credits | OpenAI + open | Good | Microsoft ecosystem |

### Free AI Chat Interfaces

| Service | Features |
|---------|----------|
| **ChatGPT** | General AI, coding, web search (limited) |
| **Google Gemini** | Multimodal, Google ecosystem integration |
| **Claude** | Excellent writing & reasoning |
| **DeepSeek** | Reasoning, coding, affordable |
| **Mistral Le Chat** | General AI, open models |
| **Perplexity** | AI search & research |
| **Qwen Chat** | Multilingual, strong coding |
| **Meta AI** | General AI across Meta platforms |
| **Grok** | Real-time search integration |
| **Microsoft Copilot** | Web search + Microsoft integration |
| **Poe** | Access to multiple AI models |

---

## 📊 Analytics & Tracking

### Product Analytics & Session Replay

| Service | Free Tier | Events | Session Replay | Funnels | Self-hosted |
|---------|-----------|--------|----------------|---------|-------------|
| **PostHog** | Generous free | Unlimited-ish | ✅ Full | ✅ | ✅ |
| **Microsoft Clarity** | ✅ Free forever | Unlimited traffic | ✅ | ✅ | ❌ |
| **Umami** | Cloud/self-hosted | Limited cloud | ✅ | ⚠️ | ✅ |
| **Matomo** | ✅ Self-hosted | Unlimited | ✅ | ✅ | ✅ |
| **OpenPanel** | ✅ Self-hosted | Unlimited events | ✅ | ✅ | ✅ |
| **Mixpanel** | Free tier | 1M events/mo | ❌ | ✅ | ❌ |
| **Amplitude** | Free tier | Limited | ❌ | ✅ | ❌ |
| **Google Analytics 4** | ✅ Free | Large volume | ✅ | ✅ | ❌ |
| **Plausible** | 🔴 Trial only | — | ❌ | ❌ | ❌ |
| **Countly** | ✅ Self-hosted | Unlimited | ✅ | ✅ | ✅ |
| **Ackee** | ✅ Self-hosted | Unlimited | ❌ | ⚠️ | ✅ |
| **GoatCounter** | ✅ Free | Limited | ❌ | ⚠️ | ❌ |
| **Pirsch** | ✅ Self-hosted | Unlimited | ❌ | ✅ | ✅ |
| **Fathom** | 🔴 Trial only | — | ❌ | ⚠️ | ❌ |

### Website & SEO Analytics

| Service | Free Tier | Best For |
|---------|-----------|----------|
| **Google Search Console** | ✅ Free | Search performance, indexing |
| **Google Analytics 4** | ✅ Free | Website traffic & conversions |
| **Bing Webmaster Tools** | ✅ Free | Bing search optimization |
| **Ahrefs Webmaster Tools** | Limited | Site audit, backlinks |
| **Semrush** | Limited | Keywords, competitor analysis |
| **Ubersuggest** | Limited | Keyword research |

---

## 📣 Marketing & Growth

### Email Marketing

*See Email Services section above*

### Social Media & Content

| Category | Service | Free Tier | Best For |
|----------|---------|-----------|----------|
| **Social Scheduling** | Buffer | ✅ | 3 channels, social media |
| **Social Scheduling** | Metricool | Limited | Analytics + scheduling |
| **Social Scheduling** | Publer | Limited | Multi-platform |
| **Social Scheduling** | Later | Limited | Instagram planning |
| **Content Creation** | Canva | ✅ | Graphics, video, social |
| **AI Content** | ChatGPT | ✅ Limited | Copy, ideas, strategy |
| **AI Content** | Claude | ✅ Limited | Long-form writing |
| **AI Content** | Gemini | ✅ Limited | Writing, research |

### Forms & Lead Capture

| Service | Free Tier | Submissions | Best For |
|---------|-----------|------------|----------|
| **Tally** | ✅ | Unlimited* | Simple forms |
| **Google Forms** | ✅ | Unlimited-ish | Quick surveys |
| **HubSpot Forms** | ✅ | Unlimited | CRM integration |
| **Typeform** | Limited | Very limited responses | Beautiful forms |

### Contact & Live Chat Platforms

| Service | Type | Free Tier | Best For | Key Caveat |
|---------|------|-----------|----------|------------|
| [tawk.to](https://www.tawk.to/) | Live chat + forms | ✅ Forever; unlimited team members | Website chat with a shared inbox | Branding and advanced services are paid add-ons |
| [Crisp](https://crisp.chat/en/) | Live chat + contact forms | ✅ Forever; 2 seats, 100 customer profiles | Small teams centralizing chat and form submissions | AI, shared email, and advanced automation require paid plans |
| [Chatwoot](https://www.chatwoot.com/) | Live chat | ✅ Cloud Hacker; 2 agents, 500 conversations/mo | Basic support inbox or self-hosted customer support | Cloud free plan has 30-day retention and limited channels |
| [Tidio](https://www.tidio.com/) | Live chat + automation | ✅ Forever; 50 conversations/mo, 10 agents | Small websites needing human chat and basic automation | Chat becomes unavailable after the monthly conversation quota is reached |
| [Formspree](https://formspree.io/) | Contact forms | ✅; 50 submissions/mo | Hosted forms for static sites without a backend | Free history is retained for only 30 days and is positioned mainly for testing/development |
| [Fillout](https://www.fillout.com/) | Contact forms + workflows | ✅ Forever; 1,000 responses/mo | Surveys, applications, registrations, and multi-page forms | Free plan includes branding and excludes CAPTCHA, custom domains, and some field types |

Always verify current quotas, retention periods, branding, and overage behavior on the provider’s pricing page before using a service in production.

### Automation & Integration

| Service | Free Tier | Best For |
|---------|-----------|----------|
| **Make (Zapier alternative)** | ✅ Workflows | Powerful automation |
| **Zapier** | Limited | 100+ integration ecosystem |
| **n8n** | ✅ Self-hosted | Open-source automation |

### CRM & Sales

| Service | Free Tier | Contacts | Best For |
|---------|-----------|----------|----------|
| **HubSpot CRM** | ✅ Free | 1,000 limit | Sales + marketing |
| **Zoho CRM** | Limited | Limited | Small businesses |

### Other Marketing Tools

| Category | Service | Free Tier |
|----------|---------|-----------|
| **Linkography** | Linktree | ✅ Basic |
| **Linkography** | Beacons | ✅ Creator-focused |
| **Short Links** | Dub | Limited + analytics |
| **Short Links** | Bitly | Limited |
| **Live Chat** | HubSpot Chat | ✅ Free |

---

## 🎨 Design & Media

### Images & Stock Photos

| Service | Free Tier | Usage |
|---------|-----------|-------|
| **Unsplash** | ✅ | High-quality images |
| **Pexels** | ✅ | Free stock photos + videos |
| **Pixabay** | ✅ | Stock images & vectors |

### Video & Editing

| Service | Free Tier | Best For |
|---------|-----------|----------|
| **CapCut** | ✅ | Short-form video editing |
| **Canva** | ✅ | Social videos, graphics |
| **DaVinci Resolve** | ✅ Open source | Professional video editing |

---

## 🛠️ Developer Tools

### Version Control & CI/CD

| Service | Free Tier |
|---------|-----------|
| **GitHub** | ✅ Unlimited public/private + Actions |
| **GitLab** | ✅ Free tier with CI/CD |
| **Gitea** | ✅ Self-hosted Git |

### Code Quality & Testing

| Service | Free Tier |
|---------|-----------|
| **SonarCloud** | ✅ Free for open-source |
| **CodeFactor** | ✅ Basic analysis |

### API Development

| Service | Free Tier |
|---------|-----------|
| **Postman** | ✅ Limited but generous |
| **Insomnia** | ✅ Open source |

---

## 💡 Tips for Choosing Free Services

✅ **Check the fine print:**
- Does it have hard usage limits that will hit you?
- Does it require a credit card? (⚠️ Can lead to unexpected charges)
- Is it "free forever" or trial-only?

✅ **Evaluate for production:**
- Free tier reliability & uptime SLAs
- Support quality (community vs. enterprise)
- Pricing cliff (how much when you outgrow free tier?)

✅ **Privacy & data considerations:**
- Data residency requirements
- GDPR/compliance needs
- Vendor lock-in risk

---

## 📋 Best Practices & Use Cases

| Service | Best Use Case | Why | Watch Out |
|---|---|---|---|
| **GitHub Pages** | Static docs, portfolios | Git-native deploy, free SSL | No server-side logic |
| **Vercel** | Next.js / React SSR | Edge network, preview deployments | Serverless cold starts, function limits |
| **Netlify** | Static sites + serverless functions | Forms, splits testing built-in | Function compute minutes capped |
| **Cloudflare Pages** | High-traffic static + D1 | Global edge, free Workers/D1 | D1 egress billing above free quota |
| **Render** | General SaaS backend | Free PostgreSQL + 750 hrs/mo, sleep to zero | Sleeping service warms up on first request |
| **Koyeb** | APIs / backends | Always-on free instance, global deploy | Limited to 1 service on free plan |
| **Fly.io** | Docker apps behind a proxy (legacy free tier only) | Self-managed, VM-level control | Pay-as-you-go for new accounts |
| **Google Cloud Run** | Containerized stateless services | Generous free quota per month | Egress beyond free tier billed |
| **AWS Lambda** | Event-driven, sporadic workloads | Always-free 1M req/mo | Complexity, cold starts, cost spikes at scale |
| **Supabase** | Full Postgres + auth + realtime for MVPs | 500 MB, instant auth/realtime | 500 MB storage fills fast |
| **Neon** | Postgres with branching / dev environments | Serverless, branch like Git, Vercel-native | Compute hours cap per project |
| **Prisma Postgres** | TypeScript/Prisma-first apps | 500 MB, zero config, branch | Smaller ecosystem than Supabase |
| **Nile** | Multi-tenant SaaS backends | 1 GB, per-tenant isolation | Smaller community |
| **CockroachDB** | Distributed, geo-redundant systems | 10 GiB free, ACID distributed SQL | Slower than single-region Postgres |
| **MongoDB Atlas** | Document stores, quick prototypes | 512 MB shared cluster | No real-time sync, storage cap tight |
| **Firebase Firestore** | Mobile + web apps with live sync | 1 GiB, realtime listeners | Pricing escalates with reads |
| **Turso** | Edge-first apps needing SQLite | 5 GB, 500M reads/mo, 100 DBs | Reduced features on free tier (no edge replication) |
| **Cloudflare D1** | Apps already on Workers | 5 GB, native Workers integration | Egress billed over free tier |
| **Upstash Redis** | Rate limiting, caching, queues | Serverless, 256 MB free | Command pricing above free quota unpredictable |
| **Meilisearch / Typesense** | Full-text search for small catalogs | Free on self-host | Needs your own infra |
| **Resend** | SaaS transactional email with React Email | 3,000/mo, excellent DX | No marketing features |
| **Brevo** | High-volume email + automation | 300/day, SMTP + API, CRM | Branding on free plan |
| **Amazon SES** | Production email at low cost | 200/day first 30 days, cheapest at scale | Steep setup, needs reputation management |
| **Mailgun** | Developer API with webhooks | 100/day, 1 domain | Low daily cap |
| **Postmark** | High-importance email (password resets, receipts) | 100/mo, best deliverability | Tiny cap, expensive after |
| **Sentry** | Error tracking + session replay for any stack | 5K errors/mo, full replay | Overages dropped silently on free |
| **Better Stack** | Logs + uptime monitoring | Generous free logs + uptime checks | Log retention limited |
| **Grafana Cloud** | Metrics + logs + traces in one | 100% OpenTelemetry | Alerting limited on free |
| **PostHog** | Product analytics + feature flags + replay | Unlimited-ish events, self-host option | Cloud free has capture limits |
| **Microsoft Clarity** | Heatmaps + session recordings | Unlimited sessions, free forever | No funnels without paid |
| **Matomo** | Privacy-first analytics, GDPR-friendly | Self-host, unlimited | You manage hosting/updates |
| **Google Search Console** | SEO health, indexing issues | Free, direct from Google | Data only for your property |
| **Buffer / Metricool** | Social scheduling for small teams | Free posts/month, analytics | Post count caps |
| **Tally** | Unlimited-form lead capture | No form limit, clean UI | Branded on free |
| **Tawk.to / Crisp** | Live chat for small sites | Forever free, shared inbox | Branding, limited AI on free |
| **n8n** | Automation, self-hosted | Free on your infra, visual flows | Self-hosting responsibility |
| **HubSpot CRM** | Small business sales pipeline | Free up to 1,000 contacts | Heavy upsell, data lock-in |

💡 When picking, rank by: (1) real free cap vs your projected usage, (2) sleep/cold-start behavior if latency matters, (3) data egress and overage pricing, (4) how painful migration is if you outgrow it. Set billing alerts on every account with a card attached.

---

## 📝 Contributing

Found an outdated service or missing tool? **Pull requests welcome!**

Please include:
- Service name & link
- Free tier details
- Key pros/cons
- Best use case

---

## 📄 License

MIT - Free to use and modify
