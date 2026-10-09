/* Free Services — UX Pro Max app */
const state = { data: null, stack: "saas", q: "", badge: "", cat: "", noCard: false, view: "grid", sort: "featured" };

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const hi = (s) => {
  const q = state.q.trim();
  if (!q) return esc(s);
  try {
    return esc(s).replace(new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>");
  } catch { return esc(s); }
};
const domainOf = (url) => { try { return new URL(url).hostname; } catch { return ""; } };
const favicon = (url) => {
  const d = domainOf(url);
  return d ? `https://www.google.com/s2/favicons?domain=${d}&sz=64` : "";
};
const badgeClass = (b) => {
  if (!b) return "badge";
  if (b.includes("🟢")) return "badge b-green";
  if (b.includes("🔵")) return "badge b-blue";
  if (b.includes("🟡")) return "badge b-yel";
  if (b.includes("💳")) return "badge b-card";
  return "badge";
};

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove("show"), 1800);
}
async function copyText(text, msg) {
  try { await navigator.clipboard.writeText(text); toast(msg || "Copied ✓"); }
  catch {
    const ta = document.createElement("textarea");
    ta.value = text; document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); toast(msg || "Copied ✓"); } catch { toast("Copy failed"); }
    ta.remove();
  }
}

/* ---------- theme ---------- */
function initTheme() {
  const saved = localStorage.getItem("fs-theme");
  const root = document.documentElement;
  const btn = $("#themeBtn");
  const apply = (t) => {
    root.setAttribute("data-theme", t);
    btn.textContent = t === "light" ? "☀️" : "🌙";
  };
  let cur = saved || "dark";
  apply(cur);
  btn.onclick = () => { cur = cur === "dark" ? "light" : "dark"; localStorage.setItem("fs-theme", cur); apply(cur); };
}

/* ---------- data ---------- */
async function load() {
  const urls = ["./data/services.yaml", "../data/services.yaml"];
  let text = null;
  for (const u of urls) {
    try { const r = await fetch(u, { cache: "no-store" }); if (r.ok) { text = await r.text(); break; } } catch {}
  }
  if (!text) { $("#categories").innerHTML = `<div class="empty">Could not load <code>data/services.yaml</code>.</div>`; return; }
  state.data = jsyaml.load(text);
  if (state.data?.meta?.updated) { const el = $("#updatedAt"); if (el) el.textContent = state.data.meta.updated; }
  initFromHash();
  syncControls();
  renderAll();
  updateHeroStats();
}

function allServices() {
  const out = [];
  for (const c of state.data.categories) {
    for (const s of (c.services || [])) out.push({ ...s, _cat: c.id, _catName: c.name });
    for (const g of (c.subgroups || [])) for (const s of (g.services || [])) out.push({ ...s, _cat: c.id, _catName: c.name, _group: g.name });
  }
  return out;
}

function match(s) {
  const q = state.q.trim().toLowerCase();
  if (state.cat && s._cat !== state.cat) return false;
  if (state.badge) {
    const hay = `${s.free || ""} ${s.limits || ""} ${s.notes || ""}`;
    if (!hay.includes(state.badge)) return false;
  }
  if (state.noCard && (s.card === true || String(s.free || "").includes("💳"))) return false;
  if (q) {
    const hay = `${s.name} ${s.url || ""} ${s.type || ""} ${s.limits || ""} ${s.notes || ""} ${s._catName} ${s._group || ""}`.toLowerCase();
    if (!hay.includes(q)) return false;
  }
  return true;
}

function sortSvcs(list) {
  if (state.sort === "az") return [...list].sort((a, b) => String(a.name).localeCompare(String(b.name)));
  return list;
}

/* ---------- stacks ---------- */
function renderStacks() {
  const tabs = $("#stackTabs");
  tabs.innerHTML = state.data.stacks.map((s) =>
    `<button role="tab" data-id="${s.id}" aria-selected="${s.id === state.stack}">${s.emoji} ${esc(s.name)}</button>`).join("");
  tabs.querySelectorAll("button").forEach((b) => b.onclick = () => {
    state.stack = b.dataset.id; syncHash(); renderStacks(); renderStackDetail();
  });
}
function currentStack() {
  return state.data.stacks.find((x) => x.id === state.stack) || state.data.stacks[0];
}
function renderStackDetail() {
  const s = currentStack();
  $("#stackDetail").innerHTML = `
    <h3 style="margin-top:0">${s.emoji} ${esc(s.name)} <span class="muted">· ${esc(s.who_for)}</span></h3>
    <table class="stack-table"><tbody>${s.components.map((c) => `<tr><th>${esc(c.layer)}</th><td>${esc(c.pick)}</td></tr>`).join("")}</tbody></table>
    <h4>Where you hit the wall 🧱</h4>
    <ul class="tight wall">${s.walls.map((w) => `<li>${esc(w)}</li>`).join("")}</ul>`;
}

/* ---------- catalog ---------- */
function svcCard(s) {
  const badges = (s.free || "").split(/(?=[🟢🔵🟡💳😴⚡🏠💰])/g).filter(Boolean)
    .map((b) => `<span class="${badgeClass(b)}">${esc(b)}</span>`).join("");
  const card = s.card === true ? `<span class="${badgeClass("💳")}">💳 card</span>` : "";
  const fav = favicon(s.url || "");
  const letter = esc((s.name || "?")[0]);
  return `<div class="svc">
    <div class="svc-top">
      <span class="fav">${fav ? `<img loading="lazy" src="${fav}" alt="" onerror="this.remove()" />` : letter}</span>
      <div>
        <div class="svc-name"><a href="${esc(s.url || "#")}" target="_blank" rel="noopener">${hi(s.name)}</a> <span class="ext">↗</span></div>
        ${s._group ? `<div class="svc-group">${esc(s._group)} · ${esc(s._catName)}</div>` : `<div class="svc-group">${esc(s._catName)}${s.type ? " · " + esc(s.type) : ""}</div>`}
      </div>
    </div>
    <div class="svc-limits">${hi(s.limits || s.notes || "—")}${s.notes && s.limits ? `<div class="svc-group">${hi(s.notes)}</div>` : ""}</div>
    <div class="svc-foot">
      <div class="svc-meta">${badges}${card}</div>
      <span class="verified">${esc(s.verified || "")}</span>
    </div>
  </div>`;
}

function svcRow(s) {
  const free = s.free ? `<span class="${badgeClass(s.free)}">${esc(s.free)}</span>` : `<span class="muted">—</span>`;
  const card = s.card === true ? `<span class="${badgeClass("💳")}">💳</span>` : s.card === false ? `❌` : s.card ? `<span class="badge">${esc(s.card)}</span>` : `<span class="muted">—</span>`;
  return `<tr>
    <td><a href="${esc(s.url || "#")}" target="_blank" rel="noopener">${hi(s.name)}</a>${s._group ? `<div class="muted small">${esc(s._group)}</div>` : ""}</td>
    <td>${s.type ? hi(s.type) : "<span class='muted'>—</span>"}</td>
    <td>${free}</td>
    <td>${hi(s.limits || s.notes || "—")}${s.notes && s.limits ? `<div class="muted small">${hi(s.notes)}</div>` : ""}</td>
    <td>${card}</td>
    <td>${esc(s.verified || "")}</td>
  </tr>`;
}

function renderCatalog() {
  const services = allServices();
  const matched = services.filter(match);
  const active = [state.q && `“${state.q}”`, state.badge, state.cat, state.noCard && "no-card"].filter(Boolean).join(" · ");
  $("#count").textContent = `${matched.length} / ${services.length} services${active ? " · " + active : ""} · ${state.view} view`;

  const cats = state.data.categories.filter((c) => !state.cat || c.id === state.cat);
  const html = cats.map((c) => {
    let items = [];
    for (const s of (c.services || [])) { const full = { ...s, _cat: c.id, _catName: c.name }; if (match(full)) items.push(full); }
    for (const g of (c.subgroups || [])) for (const s of (g.services || [])) { const full = { ...s, _cat: c.id, _catName: c.name, _group: g.name }; if (match(full)) items.push(full); }
    if (!items.length) return "";
    items = sortSvcs(items);
    const body = state.view === "grid"
      ? `<div class="svc-grid">${items.map(svcCard).join("")}</div>`
      : `<div style="overflow-x:auto"><table class="data"><thead><tr><th>Service</th><th>Type</th><th>Free</th><th>Limits</th><th>Card</th><th>✓</th></tr></thead><tbody>${items.map(svcRow).join("")}</tbody></table></div>`;
    return `<div class="card cat-card" id="cat-${c.id}">
      <h3>${c.emoji} ${esc(c.name)} <span class="muted">· ${items.length}</span></h3>
      ${c.note ? `<p class="cat-note">${esc(c.note)}</p>` : ""}
      ${body}
    </div>`;
  }).join("");

  $("#categories").innerHTML = html || `<div class="empty"><h3 style="margin:0 0 6px">No matches 😕</h3><p style="margin:0 0 12px">Try a shorter keyword or clear filters.</p><button class="btn btn-sm" onclick="document.querySelector('#clearAll').click()">Clear all filters</button></div>`;
  renderJump(services);
}

function renderJump(services) {
  const nav = $("#jumpNav");
  nav.innerHTML = state.data.categories.map((c) => {
    const n = services.filter((s) => s._cat === c.id && match(s)).length;
    return `<a href="#cat-${c.id}">${c.emoji} ${esc(c.name)} <span class="n">${n}</span></a>`;
  }).join("");
}

function renderMeta() {
  $("#legendGrid").innerHTML = state.data.legend.map((l) => `<span class="${badgeClass(l.badge)}">${l.badge} ${esc(l.meaning)}</span>`).join("");
  const cf = $("#catFilter");
  const cur = state.cat;
  cf.innerHTML = `<option value="">All categories</option>` + state.data.categories.map((c) => `<option value="${c.id}">${c.emoji} ${esc(c.name)}</option>`).join("");
  cf.value = cur;
  $("#alternatives").innerHTML = `<table class="data"><tbody>${state.data.alternatives.map((a) => `<tr><th>${esc(a.popular)}</th><td>${esc(a.free)}</td></tr>`).join("")}</tbody></table>`;
  $("#checklist").innerHTML = state.data.checklist.map((c) => `<li>${esc(c)}</li>`).join("");
}

function updateHeroStats() {
  const svcs = allServices();
  $("#statServices").textContent = svcs.length;
  $("#statStacks").textContent = state.data.stacks.length;
  $("#statCats").textContent = state.data.categories.length;
}

function renderAll() { renderMeta(); renderStacks(); renderStackDetail(); renderCatalog(); }

/* ---------- url + controls ---------- */
function syncHash() {
  const p = new URLSearchParams();
  if (state.stack && state.stack !== "saas") p.set("stack", state.stack);
  if (state.q) p.set("q", state.q);
  if (state.cat) p.set("cat", state.cat);
  if (state.badge) p.set("badge", state.badge);
  if (state.view !== "grid") p.set("view", state.view);
  const h = p.toString();
  history.replaceState(null, "", h ? "#" + h : location.pathname + location.search);
}
function initFromHash() {
  const p = new URLSearchParams(location.hash.replace(/^#/, ""));
  if (p.get("stack")) state.stack = p.get("stack");
  if (p.get("q")) state.q = p.get("q");
  if (p.get("cat")) state.cat = p.get("cat");
  if (p.get("badge")) state.badge = p.get("badge");
  if (p.get("view")) state.view = p.get("view");
}
function syncControls() {
  $("#q").value = state.q;
  $("#badgeFilter").value = state.badge;
  $("#catFilter").value = state.cat;
  $("#clearQ").classList.toggle("hidden", !state.q);
  setView(state.view, true);
}

function setView(v, silent) {
  state.view = v;
  $("#viewGrid").setAttribute("aria-pressed", String(v === "grid"));
  $("#viewTable").setAttribute("aria-pressed", String(v === "table"));
  if (!silent) { syncHash(); renderCatalog(); }
}

/* ---------- events ---------- */
let deb = null;
$("#q").addEventListener("input", (e) => {
  clearTimeout(deb);
  deb = setTimeout(() => {
    state.q = e.target.value;
    $("#clearQ").classList.toggle("hidden", !state.q);
    syncHash(); renderCatalog();
  }, 120);
});
$("#clearQ").addEventListener("click", () => { $("#q").value = ""; state.q = ""; $("#clearQ").classList.add("hidden"); syncHash(); renderCatalog(); $("#q").focus(); });
$("#badgeFilter").addEventListener("change", (e) => { state.badge = e.target.value; syncHash(); renderCatalog(); });
$("#catFilter").addEventListener("change", (e) => { state.cat = e.target.value; syncHash(); renderCatalog(); });
$("#noCard").addEventListener("change", (e) => { state.noCard = e.target.checked; syncHash(); renderCatalog(); });
$("#sortSel").addEventListener("change", (e) => { state.sort = e.target.value; renderCatalog(); });
$("#viewGrid").addEventListener("click", () => setView("grid"));
$("#viewTable").addEventListener("click", () => setView("table"));
$("#clearAll").addEventListener("click", () => {
  Object.assign(state, { q: "", badge: "", cat: "", noCard: false });
  $("#q").value = ""; $("#badgeFilter").value = ""; $("#catFilter").value = ""; $("#noCard").checked = false;
  $("#clearQ").classList.add("hidden");
  syncHash(); renderCatalog(); toast("Filters cleared");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "/" && document.activeElement !== $("#q") && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
    e.preventDefault(); $("#q").focus();
  }
});
$("#copyStack").addEventListener("click", () => {
  const s = currentStack();
  const txt = `${s.emoji} ${s.name} (${s.who_for})\n` + s.components.map((c) => `${c.layer}: ${c.pick}`).join("\n") +
    `\n\nWhere you hit the wall:\n- ` + s.walls.join("\n- ");
  copyText(txt, "Stack copied ✓");
});
$("#copyLink").addEventListener("click", () => copyText(location.href, "Link copied ✓"));

const toTop = $("#toTop");
addEventListener("scroll", () => toTop.classList.toggle("hidden", scrollY < 600), { passive: true });
toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

initTheme();
load();
