---
name: free-services
description: Use when choosing free services or a $0 app stack.
---

# Free Services

Use this repository as a candidate catalog, **not** as proof of current prices. Its canonical data is `data/services.yaml`; README tables may lag. No parser or account is required.

## When to use

- Choose or compare free hosting, databases, auth, email, AI, storage, or complete app stacks.
- Answer whether a proposed stack fits a no-card, commercial, or $0 constraint.
- Do not use for a guaranteed bill estimate without usage projections and official pricing.

## Procedure

1. Establish requirements: workload, scale, region, commercial use, card tolerance, latency, data sensitivity, and required layers. Ask only for missing requirements that change the answer.
2. Read `data/services.yaml` from the repository root. If only this skill was installed, fetch the catalog from `https://raw.githubusercontent.com/dereknguyen269/free-services/main/data/services.yaml` using `web_extract`; record its revision/date if available. Find the matching `stacks` entry, then the relevant `categories` rows and nested `subgroups`. Use `search_files` to locate local names, then `read_file` for full entries. Do not infer eligibility from a stack pick alone.
3. For each candidate, record the exact `limits`, `notes`, `free`, `card`, and `verified` fields if present. Missing `card` means **unknown**, not false. `⏳` means unverified. `🏠` describes software, not free hosting. `🔵` credits and `🟡` trials are not recurring $0 tiers. Do not turn approximate catalog limits into exact current quotas.
4. For any decision that depends on a current quota, billing/card requirement, commercial-use restriction, region, pause/deletion policy, or privacy terms, check the provider's official pricing/terms pages using `web_search` and `web_extract` (browser if blocked). Cite the specific official URL and retrieval date. If inaccessible or ambiguous, say **unverified**; do not certify the constraint. Never present an old `verified` date as current verification.
5. Recommend the smallest viable stack. For each layer give provider, why, cost/limit or uncertainty, and an official link where checked. Name the first likely wall and an alternative. Explicitly separate catalog claims from newly verified claims; cite repo paths/lines or links for the former. If no candidate meets every hard constraint, say so instead of relaxing constraints silently.

## Example

For a commercial SaaS needing no card, `stacks.saas` suggests Cloudflare Pages + Workers, Supabase, and Resend. The catalog marks Pages/Workers `card: false` but does not record card for Supabase or Resend; most quota rows have `verified: "⏳"`. Present this as a **candidate**, check all four providers' official billing and usage terms, and withhold the no-card guarantee until confirmed.

## Pitfalls

- `meta.updated` is a catalog edit date, not a provider-wide verification date.
- Free-tier data and README prose can disagree; favor `data/services.yaml`, then verify official terms.
- Free plans may require paid upgrades for commercial traffic, storage, bandwidth, or email spikes. Self-hosting incurs infrastructure costs.

## Verification

Before answering, confirm every named service exists in the catalog, every hard constraint is either supported by a current official source or labeled unverified, and each cited link actually supports the adjacent claim.
