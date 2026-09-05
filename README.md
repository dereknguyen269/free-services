# free-services

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
