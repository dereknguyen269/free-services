# free-services

## 🚀 Free Hosting Services for Developers

| Service                  | Free Tier               | Docker | Sleep / Scale-to-Zero | Database   | ⭐ Pros                                    | ⚠️ Cons                      | Best For                     |
| ------------------------ | ----------------------- | :----: | :-------------------: | ---------- | ----------------------------------------- | ---------------------------- | ---------------------------- |
| **Render**               | ✅ 750 hrs/mo            |    ✅   |         😴 Yes        | PostgreSQL | Very easy setup, Git deploy, Docker       | Cold starts, limited free DB | **General SaaS**             |
| **Koyeb**                | ✅ 1 service             |    ✅   |         😴 Yes        | ❌          | 512 MB RAM, 2 GB SSD, easy deployment     | Free resources are limited   | **APIs / Backend**           |
| **Railway**              | ⚠️ $1 credit/mo         |    ✅   |           ❌           | PostgreSQL | ⭐ Excellent DX, very easy deployment      | Not truly free forever       | **Startups**                 |
| **Google Cloud Run**     | ✅ Free quota            |    ✅   |         ⚡ Yes         | ❌          | Docker-native, autoscaling, scale-to-zero | GCP setup can be complex     | **Container apps**           |
| **Cloudflare Workers**   | ✅                       |   ⚠️   |           ❌           | D1 / KV    | Extremely fast, global edge network       | Different runtime model      | **APIs / Edge apps**         |
| **Cloudflare Pages**     | ✅                       |   ⚠️   |           ❌           | D1 / KV    | Free CDN, Git deployment                  | Backend limitations          | **Frontend**                 |
| **Vercel**               | ✅                       |   ⚠️   |         ⚡ Yes         | ❌          | ⭐ Best for Next.js, CDN, previews         | Serverless limitations       | **Next.js**                  |
| **Netlify**              | ✅                       |   ⚠️   |         ⚡ Yes         | ❌          | Easy deployment, Functions                | Backend limitations          | **Frontend / JAMstack**      |
| **Northflank**           | ✅                       |    ✅   |           ❌           | PostgreSQL | Kubernetes-based, Docker-native           | More complex                 | **Docker / DevOps**          |
| **Zeabur**               | ⚠️ Limited              |    ✅   |         Varies        | PostgreSQL | Very easy Docker deployment               | Free quota limited           | **Side projects**            |
| **Azure Container Apps** | ✅ Free quota            |    ✅   |         ⚡ Yes         | ❌          | Serverless containers, autoscaling        | Azure complexity             | **Container APIs**           |
| **Oracle Cloud**         | ✅ Always Free resources |    ✅   |           ❌           | ✅          | Powerful free VM resources                | Difficult setup              | **Self-hosting**             |
| **AWS Lambda**           | ✅ Free quota            |    ✅   |         ⚡ Yes         | DynamoDB   | Serverless, huge ecosystem                | Execution limits             | **Serverless APIs**          |
| **AWS Amplify**          | ✅ Free quota            |   ⚠️   |         ⚡ Yes         | DynamoDB   | Full AWS integration                      | AWS complexity               | **Full-stack apps**          |
| **Firebase Hosting**     | ✅                       |    ❌   |           —           | Firebase   | Easy frontend + backend ecosystem         | Vendor lock-in               | **Web/mobile apps**          |
| **GitHub Pages**         | ✅                       |    ❌   |           —           | ❌          | Completely free, extremely simple         | Static only                  | **Documentation / websites** |


## 🗄️ Free Database Hosting — 2026

| Service                    | Database                   |   Free storage / quota | ⭐ Pros                                                                   | ⚠️ Cons                                            | Best for                 |
| -------------------------- | -------------------------- | ---------------------: | ------------------------------------------------------------------------ | -------------------------------------------------- | ------------------------ |
| **Supabase**               | PostgreSQL                 |     **500 MB/project** | ⭐ PostgreSQL + Auth + Storage + Realtime<br>⭐ Very easy<br>⭐ Great API   | Projects pause after inactivity<br>500 MB DB       | 🏆 Full-stack SaaS       |
| **Neon**                   | PostgreSQL                 |    **~500 MB/project** | ⭐ Serverless<br>⭐ Scale-to-zero<br>⭐ Branching<br>⭐ Excellent for Vercel | Compute/storage limits                             | 🏆 Next.js / serverless  |
| **Aiven**                  | PostgreSQL / MySQL / Redis |               **1 GB** | ⭐ Real managed DB<br>⭐ PostgreSQL + MySQL + Redis<br>⭐ No credit card    | Single node<br>Can power off after inactivity      | 🏆 Traditional backend   |
| **CockroachDB**            | Distributed SQL            |             **10 GiB** | ⭐ Very generous storage<br>⭐ PostgreSQL-compatible<br>⭐ Distributed      | More complexity than Postgres                      | 🌎 Distributed apps      |
| **Turso**                  | SQLite / libSQL            |               **5 GB** | ⭐ Edge database<br>⭐ Extremely fast globally<br>⭐ Great free quota       | SQLite limitations                                 | 🌎 Edge apps             |
| **Cloudflare D1**          | SQLite                     |               **5 GB** | ⭐ Excellent with Workers<br>⭐ Edge deployment<br>⭐ 5M reads/day          | Mainly Cloudflare ecosystem                        | ⚡ Cloudflare apps        |
| **MongoDB Atlas**          | MongoDB                    |             **512 MB** | ⭐ Free forever<br>⭐ Excellent MongoDB platform<br>⭐ Easy setup           | Only 512 MB<br>Shared resources                    | 📄 NoSQL apps            |
| **Firebase Firestore**     | NoSQL                      |              **1 GiB** | ⭐ Realtime<br>⭐ Mobile/web SDKs<br>⭐ Authentication ecosystem            | Read/write quotas<br>Can become expensive at scale | 📱 Mobile / realtime     |
| **Firebase Realtime DB**   | NoSQL                      |               **1 GB** | ⭐ Realtime sync<br>⭐ Very easy                                           | Less flexible querying                             | 💬 Realtime apps         |
| **Upstash**                | Redis                      |             **256 MB** | ⭐ Serverless Redis<br>⭐ HTTP API<br>⭐ Excellent for caching              | 500K commands/month                                | ⚡ Cache / sessions       |
| **Prisma Postgres**        | PostgreSQL                 |             **500 MB** | ⭐ Excellent Prisma integration<br>⭐ Easy for TypeScript                  | Usage limits                                       | 🟦 TypeScript apps       |
| **Nile**                   | PostgreSQL                 |               **1 GB** | ⭐ Multi-tenant Postgres<br>⭐ Designed for SaaS                           | Smaller ecosystem                                  | 🏢 Multi-tenant SaaS     |
| **Convex**                 | Document DB                |            **~0.5 GB** | ⭐ Realtime by default<br>⭐ Functions + DB together                       | Not traditional SQL                                | 🔄 Realtime apps         |
| **Oracle Cloud**           | MySQL / PostgreSQL etc.    | Always-free resources* | ⭐ Powerful infrastructure<br>⭐ ARM VM + database possibilities           | Setup is considerably harder                       | 🛠️ Advanced users       |
| **AWS DynamoDB**           | NoSQL                      | **25 GB Always Free**† | ⭐ Huge free storage<br>⭐ Serverless<br>⭐ Highly scalable                 | NoSQL data model                                   | 🚀 High-scale serverless |
| **Google Cloud Firestore** | NoSQL                      |              **1 GiB** | ⭐ Good SDKs<br>⭐ Realtime capabilities                                   | Daily operation limits                             | 📱 Web/mobile            |
| **Google Cloud SQL**       | PostgreSQL / MySQL         |          Trial credits | ⭐ Full managed PostgreSQL/MySQL                                          | Not permanently free                               | 🧪 Testing / migration   |


## Free Email services

| Service        |                    Free tier* | ⭐ Pros                                                                                               | ⚠️ Cons                                                                             | Best for                        |
| -------------- | ----------------------------: | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------- |
| **Resend**     |           **3,000 emails/mo** | ⭐ Excellent DX<br>⭐ Simple API<br>⭐ React Email integration<br>⭐ Very easy DNS setup                 | ⚠️ 100/day limit<br>⚠️ Smaller free quota                                           | **Modern SaaS / Next.js**       |
| **Brevo**      |            **300 emails/day** | ⭐ Large free allowance<br>⭐ SMTP + API<br>⭐ Marketing + transactional email<br>⭐ Good dashboard      | ⚠️ API/DX less developer-focused<br>⚠️ Branding/limits on free plan                 | **Startups & small businesses** |
| **Mailtrap**   |           **4,000 emails/mo** | ⭐ Excellent testing tools<br>⭐ Developer-friendly API<br>⭐ Email sandbox<br>⭐ Good debugging         | ⚠️ Free production quota limited<br>⚠️ More complex than Resend                     | **Developers & testing**        |
| **Mailgun**    |         **Limited free tier** | ⭐ Mature platform<br>⭐ Powerful API<br>⭐ Good deliverability tools<br>⭐ Webhooks & analytics         | ⚠️ Free tier relatively small<br>⚠️ More setup/configuration                        | **Production SaaS**             |
| **MailerSend** |             **500 emails/mo** | ⭐ Simple API<br>⭐ Templates<br>⭐ SMTP support<br>⭐ Good UI                                           | ⚠️ Very small free quota<br>⚠️ Less attractive at scale                             | **Small projects**              |
| **Postmark**   |             **100 emails/mo** | ⭐ Excellent deliverability<br>⭐ Very reliable<br>⭐ Great transactional focus<br>⭐ Easy API           | ⚠️ Tiny free allowance<br>⚠️ Mainly transactional email                             | **Critical emails**             |
| **Amazon SES** | **Very low cost / AWS-based** | ⭐ Extremely cheap at scale<br>⭐ Highly scalable<br>⭐ AWS integration<br>⭐ Excellent for large volume | ⚠️ Setup is more complicated<br>⚠️ Sandbox initially<br>⚠️ DX not as nice as Resend | **High-volume SaaS**            |

## 🐛 Error + Performance Tracking

| Service                    |                      Free tier | Error tracking | Performance / APM |   Logs  | ⭐ Pros                                                                               | ⚠️ Cons                                  |
| -------------------------- | -----------------------------: | :------------: | :---------------: | :-----: | ------------------------------------------------------------------------------------ | ---------------------------------------- |
| **Sentry**                 |               **5K errors/mo** |        ✅       |         ✅         | Limited | ⭐ Industry standard<br>⭐ Excellent stack traces<br>⭐ Session replay<br>⭐ Great SDKs  | Free quota can disappear quickly         |
| **GlitchTip**              | **Self-hosted / free options** |        ✅       |         ⚠️        |    ✅    | ⭐ Open source<br>⭐ Sentry-compatible<br>⭐ Can self-host                              | Less polished UI                         |
| **Better Stack**           |                      Free plan |        ✅       |         ✅         |    ✅    | ⭐ Logs + uptime + incidents<br>⭐ Beautiful dashboard<br>⭐ Very easy setup            | Free limits                              |
| **Highlight.io**           |                      Free tier |        ✅       |         ✅         |    ✅    | ⭐ Error + session replay + logs<br>⭐ Open source                                     | Smaller ecosystem                        |
| **SigNoz**                 |               Free self-hosted |        ✅       |         ✅         |    ✅    | ⭐ OpenTelemetry native<br>⭐ Full observability<br>⭐ No SaaS usage fee if self-hosted | You manage infrastructure                |
| **OpenObserve**            |               Free/self-hosted |        ✅       |         ✅         |    ✅    | ⭐ Logs + metrics + traces<br>⭐ Very high ingestion efficiency                        | Self-hosting required for unlimited use  |
| **Grafana Cloud**          |             Generous free tier |       ⚠️       |         ✅         |    ✅    | ⭐ Metrics + logs + traces<br>⭐ Grafana ecosystem<br>⭐ OpenTelemetry                  | More complex                             |
| **Prometheus + Grafana**   |         **Free / open source** |       ⚠️       |         ✅         |    ⚠️   | ⭐ Completely free<br>⭐ Industry standard metrics                                     | You operate everything                   |
| **Jaeger**                 |         **Free / open source** |        ❌       |     ✅ Tracing     |    ❌    | ⭐ Excellent distributed tracing<br>⭐ OpenTelemetry                                   | Not a complete monitoring platform       |
| **OpenTelemetry**          |         **Free / open source** |        ✅       |         ✅         |    ✅    | ⭐ Vendor-neutral<br>⭐ Collect once, send anywhere                                    | It's a framework, not a hosted dashboard |
| **Datadog**                |                      Free tier |        ✅       |         ✅         |    ✅    | ⭐ Extremely powerful<br>⭐ Excellent APM                                              | Free tier is quite limited               |
| **New Relic**              |                  **100 GB/mo** |        ✅       |         ✅         |    ✅    | ⭐ Very generous free allowance<br>⭐ Full-stack observability                         | Can be overwhelming                      |
| **AppDynamics**            |             Trial/free options |        ✅       |         ✅         |    ✅    | ⭐ Enterprise APM                                                                     | Not ideal for indie projects             |
| **Elastic Observability**  |               Free/self-hosted |        ✅       |         ✅         |    ✅    | ⭐ Logs + APM + metrics<br>⭐ Powerful search                                          | Heavy infrastructure                     |
| **Honeycomb**              |                      Free tier |       ⚠️       |         ✅         |    ✅    | ⭐ Excellent distributed tracing<br>⭐ High-cardinality data                           | More specialized                         |
| **Axiom**                  |                      Free tier |       ⚠️       |         ✅         |    ✅    | ⭐ Very fast logs<br>⭐ Great for serverless                                           | Smaller ecosystem                        |
| **Logtail / Better Stack** |                      Free tier |       ⚠️       |         ⚠️        |    ✅    | ⭐ Excellent log viewer<br>⭐ Very easy                                                | Primarily logs                           |
| **Rollbar**                |                      Free tier |        ✅       |         ⚠️        |    ⚠️   | ⭐ Error-focused<br>⭐ Good alerts                                                     | Free quota limited                       |
| **Bugsnag**                |                      Free tier |        ✅       |         ✅         |    ⚠️   | ⭐ Mobile + web error monitoring                                                      | Free plan limitations                    |
| **Airbrake**               |             Trial/free options |        ✅       |         ✅         |    ⚠️   | ⭐ Simple error monitoring                                                            | Smaller free tier                        |
| **Raygun**                 |                          Trial |        ✅       |         ✅         |    ❌    | ⭐ Excellent error + performance UI                                                   | Not really a permanent free option       |

## 🤖 Free AI API / AI Inference Services

| Service                           |          Free AI          | Models / AI                 | API | ⭐ Pros                           | ⚠️ Cons                            | Best For                  |
| --------------------------------- | :-----------------------: | --------------------------- | :-: | -------------------------------- | ---------------------------------- | ------------------------- |
| **Google AI Studio / Gemini API** |             ✅             | Gemini                      |  ✅  | ⭐ Generous free tier, multimodal | Rate limits                        | **General AI**            |
| **Groq**                          |             ✅             | Llama, Qwen, GPT OSS, etc.  |  ✅  | ⭐ Extremely fast inference       | Limited models/quotas              | **Fast APIs**             |
| **Cerebras**                      |             ✅             | Llama, Qwen, etc.           |  ✅  | ⭐ Extremely fast                 | Smaller model selection            | **LLM inference**         |
| **OpenRouter**                    |             ✅             | Many models                 |  ✅  | ⭐ One API for many providers     | Free models have limits            | **Model experimentation** |
| **Hugging Face**                  |             ✅             | Thousands of open models    |  ✅  | ⭐ Huge ecosystem                 | Free inference is limited          | **Open-source AI**        |
| **Mistral AI**                    |             ✅             | Mistral models              |  ✅  | ⭐ Strong open models             | Free API limits                    | **LLM / coding**          |
| **Cohere**                        |             ✅             | Command / Embed / Rerank    |  ✅  | ⭐ RAG/search tools               | Limited free usage                 | **RAG / search**          |
| **Cloudflare Workers AI**         |             ✅             | Llama, Qwen, etc.           |  ✅  | ⭐ Runs at the edge               | Model/compute limits               | **Edge AI**               |
| **SambaNova Cloud**               |             ✅             | Llama, DeepSeek, etc.       |  ✅  | ⭐ Very fast inference            | Free quota limited                 | **LLM APIs**              |
| **Together AI**                   |         ⚠️ Credits        | Open-source models          |  ✅  | ⭐ Huge model selection           | Free credits rather than unlimited | **AI development**        |
| **Fireworks AI**                  |         ⚠️ Credits        | Llama, Qwen, DeepSeek, etc. |  ✅  | ⭐ Excellent inference platform   | Credits expire                     | **Production AI**         |
| **DeepInfra**                     |         ⚠️ Credits        | Open-source models          |  ✅  | ⭐ Lots of models                 | Limited free credits               | **AI APIs**               |
| **Novita AI**                     |         ⚠️ Credits        | LLM + image models          |  ✅  | ⭐ Many models                    | Free usage limited                 | **Generative AI**         |
| **Replicate**                     |      ⚠️ Trial credits     | Image/video/LLM models      |  ✅  | ⭐ Huge model marketplace         | Not permanently free               | **AI experiments**        |
| **Modal**                         |         ⚠️ Credits        | Any open model              |  ✅  | ⭐ Run your own models            | Credits/compute expire             | **GPU inference**         |
| **AWS Bedrock**                   |       ⚠️ Free trials      | Claude, Llama, Nova, etc.   |  ✅  | ⭐ Enterprise-grade               | AWS complexity                     | **Production AI**         |
| **Azure AI Foundry**              |         ⚠️ Credits        | OpenAI + open models        |  ✅  | ⭐ Enterprise ecosystem           | More complex                       | **Enterprise AI**         |
| **GitHub Models**                 |             ✅             | Various open models         |  ✅  | ⭐ Easy for developers            | Rate limits                        | **Testing / development** |
| **AI21 Labs**                     |      ⚠️ Free credits      | Jamba                       |  ✅  | Good LLM APIs                    | Limited free tier                  | **LLM apps**              |
| **NVIDIA NIM**                    | ⚠️ Free developer options | NVIDIA/open models          |  ✅  | ⭐ GPU optimized                  | Usually requires NVIDIA ecosystem  | **AI infrastructure**     |

## 🧠 Free AI Chat Services

| Service               |  Free AI  | Main strength                 |
| --------------------- | :-------: | ----------------------------- |
| **ChatGPT**           |     ✅     | General AI / coding           |
| **Google Gemini**     |     ✅     | Multimodal / Google ecosystem |
| **Claude**            |     ✅     | Writing / reasoning / coding  |
| **Microsoft Copilot** |     ✅     | Web search + Microsoft        |
| **Perplexity**        |     ✅     | AI search / research          |
| **DeepSeek**          |     ✅     | Reasoning / coding            |
| **Qwen Chat**         |     ✅     | Multilingual / coding         |
| **Mistral Le Chat**   |     ✅     | General AI                    |
| **Grok**              | ✅/limited | Search / general AI           |
| **Meta AI**           |     ✅     | General AI                    |
| **Poe**               | ✅/limited | Access to multiple models     |
| **Duck.ai**           |     ✅     | Privacy-oriented AI chat      |

## 📊 Free User Tracking / Product Analytics

| Service                | Free option                     |   Event / traffic limit | Session Replay | Funnels | Retention | ⭐ Pros                                                                      | ⚠️ Cons                                |
| ---------------------- | ------------------------------- | ----------------------: | :------------: | :-----: | :-------: | --------------------------------------------------------------------------- | -------------------------------------- |
| **Microsoft Clarity**  | 🟢 **Free forever**             |    **No traffic limit** |        ✅       |    ✅    |     ⚠️    | ⭐ Unlimited traffic<br>⭐ Heatmaps<br>⭐ Session recordings<br>⭐ AI insights  | Less focused on SaaS product analytics |
| **PostHog**            | 🟢 Free tier                    | **Generous free usage** |        ✅       |    ✅    |     ✅     | ⭐ Product analytics<br>⭐ Feature flags<br>⭐ Session replay<br>⭐ Experiments | Can be complex                         |
| **Umami**              | 🟢 Cloud Hobby / self-host      |           Limited cloud |        ❌       |    ✅    |     ⚠️    | ⭐ Privacy-friendly<br>⭐ Open source<br>⭐ Simple                             | Less powerful than PostHog             |
| **Google Analytics 4** | 🟢 Free                         |            Large volume |        ❌       |    ✅    |     ✅     | ⭐ Mature<br>⭐ Powerful reporting<br>⭐ Google ecosystem                      | Complex, privacy concerns              |
| **Matomo**             | 🟢 Self-hosted                  |              Unlimited* |       ✅*       |    ✅    |     ✅     | ⭐ Open source<br>⭐ Full data ownership                                      | Requires hosting                       |
| **OpenPanel**          | 🟢 Self-hosted                  |    **Unlimited events** |        ❌       |    ✅    |     ✅     | ⭐ Open source<br>⭐ Simple product analytics                                 | Cloud version isn't permanently free   |
| **Plausible**          | 🔴 No permanent cloud free tier |                       — |        ❌       |    ✅    |     ⚠️    | ⭐ Extremely simple<br>⭐ Privacy focused                                     | Only 30-day cloud trial                |
| **Mixpanel**           | 🟢 Free tier                    |        **1M events/mo** |        ❌       |    ✅    |     ✅     | ⭐ Excellent product analytics<br>⭐ Funnels/cohorts                          | Can get expensive as you scale         |
| **Amplitude**          | 🟢 Free tier                    |                 Limited |        ❌       |    ✅    |     ✅     | ⭐ Excellent product analytics<br>⭐ Behavioral analysis                      | More complex                           |
| **Countly**            | 🟢 Self-hosted                  |              Unlimited* |        ✅       |    ✅    |     ✅     | ⭐ Open source<br>⭐ Product analytics                                        | Requires infrastructure                |
| **Ackee**              | 🟢 Self-hosted                  |              Unlimited* |        ❌       |    ⚠️   |     ⚠️    | ⭐ Lightweight<br>⭐ Privacy-focused                                          | Basic analytics                        |
| **GoatCounter**        | 🟢 Free                         |                 Limited |        ❌       |    ⚠️   |     ⚠️    | ⭐ Simple<br>⭐ Privacy focused                                               | Not a full product analytics platform  |
| **Pirsch**             | 🟢 Self-hosted                  |              Unlimited* |        ❌       |    ✅    |     ⚠️    | ⭐ Privacy focused<br>⭐ Open source                                          | Cloud is paid                          |
| **Fathom**             | 🔴 Trial                        |                       — |        ❌       |    ⚠️   |     ⚠️    | ⭐ Very simple<br>⭐ Privacy friendly                                         | No permanent free cloud plan           |

## 📣 Free Marketing Services

| Category               | Service                    | Free tier                   | ⭐ Pros                                  | ⚠️ Cons                           | Best for                 |
| ---------------------- | -------------------------- | --------------------------- | --------------------------------------- | --------------------------------- | ------------------------ |
| 📧 Email Marketing     | **Brevo**                  | ✅ 300 emails/day            | Large free allowance, automation, CRM   | Brevo branding                    | **Email campaigns**      |
| 📧 Email Marketing     | **HubSpot**                | ✅ Free                      | CRM + forms + email + landing pages     | Free features are limited         | **All-in-one marketing** |
| 📧 Email Marketing     | **Mailchimp**              | ✅ Limited                   | Mature, templates, automation           | Free tier is restrictive          | Newsletters              |
| 📧 Email Marketing     | **MailerLite**             | ✅ Limited                   | Simple UI, landing pages, email         | Subscriber/send limits            | Creators                 |
| 📧 Email Marketing     | **Sender**                 | ✅                           | Generous email quota                    | Smaller ecosystem                 | Newsletters              |
| 📧 Transactional Email | **Resend**                 | ✅                           | Excellent API, developer-friendly       | Lower free quota                  | **SaaS emails**          |
| 📧 Transactional Email | **Amazon SES**             | ⚠️ Low-cost/free allowances | Extremely cheap at scale                | AWS complexity                    | High-volume email        |
| 📱 Social Scheduling   | **Buffer**                 | ✅                           | Easy scheduling, 3 channels             | 10 scheduled posts/channel        | **Social media**         |
| 📱 Social Scheduling   | **Metricool**              | ✅ Limited                   | Social scheduling + analytics           | Limited free accounts             | Social media             |
| 📱 Social Scheduling   | **Publer**                 | ✅ Limited                   | Multi-platform scheduling               | Free limits                       | Social content           |
| 📱 Social Scheduling   | **Later**                  | ✅ Limited                   | Great visual planning                   | Limited free tier                 | Instagram                |
| 🎨 Design              | **Canva**                  | ✅                           | Templates, social graphics, video       | Pro assets locked                 | **Content creation**     |
| 🤖 AI Content          | **ChatGPT**                | ✅                           | Copy, ideas, research, strategy         | Usage limits                      | **Marketing content**    |
| 🤖 AI Content          | **Gemini**                 | ✅                           | Writing + research + multimodal         | Usage limits                      | Content                  |
| 🤖 AI Content          | **Claude**                 | ✅                           | Excellent long-form writing             | Usage limits                      | Copywriting              |
| 🔎 SEO                 | **Google Search Console**  | ✅ Free                      | Search queries, indexing, rankings      | Google search only                | **SEO**                  |
| 🔎 SEO                 | **Google Analytics**       | ✅ Free                      | Traffic + conversion analytics          | Complex                           | **Website analytics**    |
| 🔎 SEO                 | **Bing Webmaster Tools**   | ✅ Free                      | Search performance + SEO tools          | Smaller search market             | SEO                      |
| 🔎 SEO                 | **Ahrefs Webmaster Tools** | ✅ Limited                   | Site audit + backlinks                  | Limited vs paid Ahrefs            | SEO                      |
| 🔎 SEO                 | **Semrush**                | ✅ Limited                   | Keywords + competitors                  | Very restricted free tier         | SEO research             |
| 🔎 SEO                 | **Ubersuggest**            | ✅ Limited                   | Keyword research                        | Daily limits                      | Beginners                |
| 📝 Forms / Leads       | **Tally**                  | ✅                           | Unlimited forms/submissions*            | Some advanced features paid       | **Lead capture**         |
| 📝 Forms / Leads       | **Google Forms**           | ✅                           | Simple + unlimited-ish                  | Basic design                      | Simple forms             |
| 📝 Forms / Leads       | **Typeform**               | ✅ Limited                   | Beautiful forms                         | Very limited free responses       | Premium forms            |
| 📝 Forms / Leads       | **HubSpot Forms**          | ✅                           | CRM integration                         | HubSpot ecosystem                 | Lead generation          |
| 📊 Analytics           | **PostHog**                | ✅ Generous                  | Product analytics + funnels + replay    | Can be complex                    | **SaaS analytics**       |
| 📊 Analytics           | **Microsoft Clarity**      | ✅ Free                      | Unlimited traffic, heatmaps, recordings | Less product-focused              | **User behavior**        |
| 📊 Analytics           | **Umami**                  | ✅                           | Privacy-focused, open source            | Less powerful                     | Simple analytics         |
| 💬 Chat                | **Crisp**                  | ✅ Limited                   | Live chat, shared inbox                 | Free features limited             | Customer support         |
| 💬 Chat                | **Tawk.to**                | ✅                           | Very generous free chat                 | UI less polished                  | **Live chat**            |
| 💬 Chat                | **HubSpot Chat**           | ✅                           | CRM integration                         | Branding/limits                   | Lead conversion          |
| 🔗 Link-in-bio         | **Linktree**               | ✅                           | Very easy                               | Branding/features limited         | Creators                 |
| 🔗 Link-in-bio         | **Beacons**                | ✅                           | Creator-focused                         | Free tier limitations             | Creators                 |
| 🔗 Short Links         | **Dub**                    | ✅ Limited                   | Modern, analytics, developer-friendly   | Usage limits                      | SaaS marketing           |
| 🔗 Short Links         | **Bitly**                  | ✅ Limited                   | Mature + recognizable                   | Very limited free plan            | Link tracking            |
| ⚡ Automation           | **Zapier**                 | ✅ Limited                   | Huge integration ecosystem              | Task limits                       | Automation               |
| ⚡ Automation           | **Make**                   | ✅                           | Powerful workflows                      | More complicated                  | Advanced automation      |
| ⚡ Automation           | **n8n**                    | ✅ Self-hosted               | Open source, extremely powerful         | You manage hosting                | **Indie hackers**        |
| 🧲 CRM                 | **HubSpot CRM**            | ✅                           | Excellent free CRM                      | 1,000 contacts on free tools      | **Sales + marketing**    |
| 🧲 CRM                 | **Zoho CRM**               | ✅ Limited                   | Full CRM                                | Free users/features limited       | Small businesses         |
| 📰 Content             | **Substack**               | ✅                           | Newsletter + publishing                 | Platform dependency               | Writers                  |
| 📰 Content             | **Beehiiv**                | ✅ Limited                   | Newsletter-focused                      | Subscriber limits                 | Newsletter SaaS          |
| 🖼️ Images             | **Unsplash**               | ✅                           | High-quality images                     | License/usage considerations      | Blog/social              |
| 🖼️ Images             | **Pexels**                 | ✅                           | Free stock photos/videos                | Less unique content               | Content                  |
| 🎥 Video               | **CapCut**                 | ✅                           | Excellent short-form editing            | Some features paid                | **TikTok/Reels**         |
| 🎥 Video               | **Canva**                  | ✅                           | Easy social videos                      | Pro assets                        | Marketing videos         |
| 💰 Ads                 | **Google Ads**             | ⚠️ Credits/promos           | Huge reach                              | Not permanently free              | Paid acquisition         |
| 💰 Ads                 | **Meta Ads**               | ❌                           | Huge audience                           | Requires ad budget                | Paid acquisition         |
| 📈 A/B Testing         | **PostHog**                | ✅                           | Experiments + analytics                 | Requires setup                    | SaaS                     |
| 📈 A/B Testing         | **VWO**                    | ⚠️ Trial                    | Powerful experimentation                | No meaningful permanent free tier | Growth teams             |
| 🧑‍💻 Referral         | **Viral Loops**            | ⚠️ Limited                  | Referral campaigns                      | Free tier limited                 | Growth campaigns         |
