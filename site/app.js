/* Loads ../data/services.yaml (copied to ./data/services.yaml at deploy time) */
const state = { data: null, stack: "saas", q: "", badge: "", cat: "" };

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const hi = (s) => {
  const q = state.q.trim();
  if (!q) return esc(s);
  try {
    return esc(s).replace(new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>");
  } catch { return esc(s); }
};

async function load() {
  const urls = ["./data/services.yaml", "../data/services.yaml"];
  let text = null;
  for (const u of urls) {
    try { const r = await fetch(u, { cache: "no-store" }); if (r.ok) { text = await r.text(); break; } } catch {}
  }
  if (!text) { $("#categories").innerHTML = "<p>Could not load data/services.yaml</p>"; return; }
  state.data = jsyaml.load(text);
  initFromHash();
  renderAll();
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
  if (q) {
    const hay = `${s.name} ${s.url || ""} ${s.type || ""} ${s.limits || ""} ${s.notes || ""} ${s._catName} ${s._group || ""}`.toLowerCase();
    if (!hay.includes(q)) return false;
  }
  return true;
}

function renderStacks() {
  const tabs = $("#stackTabs");
  tabs.innerHTML = state.data.stacks.map((s) =>
    `<button role="tab" data-id="${s.id}" aria-selected="${s.id === state.stack}">${s.emoji} ${esc(s.name)}</button>`).join("");
  tabs.querySelectorAll("button").forEach((b) => b.onclick = () => { state.stack = b.dataset.id; location.hash = `stack=${state.stack}`; renderStacks(); renderStackDetail(); });
}
function renderStackDetail() {
  const s = state.data.stacks.find((x) => x.id === state.stack) || state.data.stacks[0];
  $("#stackDetail").innerHTML = `
    <h3 style="margin-top:0">${s.emoji} ${esc(s.name)} <span class="muted">· ${esc(s.who_for)}</span></h3>
    <table><tbody>${s.components.map((c) => `<tr><th style="width:160px">${esc(c.layer)}</th><td>${esc(c.pick)}</td></tr>`).join("")}</tbody></table>
    <h4>Where you hit the wall</h4>
    <ul>${s.walls.map((w) => `<li>${esc(w)}</li>`).join("")}</ul>`;
}

function svcRow(s) {
  const free = s.free ? `<span class="badge">${esc(s.free)}</span>` : "";
  const card = s.card === true ? `<span class="badge">💳</span>` : s.card === false ? `❌` : s.card ? `<span class="badge">${esc(s.card)}</span>` : "";
  return `<tr>
    <td><a href="${esc(s.url || "#")}" target="_blank" rel="noopener">${hi(s.name)}</a>${s._group ? `<div class="muted">${esc(s._group)}</div>` : ""}</td>
    <td>${s.type ? hi(s.type) : "<span class='muted'>—</span>"}</td>
    <td>${free}</td>
    <td>${hi(s.limits || s.notes || "—")}${s.notes && s.limits ? `<div class="muted">${hi(s.notes)}</div>` : ""}</td>
    <td>${card || "<span class='muted'>—</span>"}</td>
    <td>${esc(s.verified || "")}</td>
  </tr>`;
}

function renderCatalog() {
  const services = allServices();
  const matched = services.filter(match);
  $("#count").textContent = `${matched.length} / ${services.length} services · ${state.data.stacks.length} stacks · ${state.data.categories.length} categories`;
  const cats = state.data.categories.filter((c) => !state.cat || c.id === state.cat);
  $("#categories").innerHTML = cats.map((c) => {
    const rows = [];
    for (const s of (c.services || [])) { const full = { ...s, _cat: c.id, _catName: c.name }; if (match(full)) rows.push(svcRow(full)); }
    for (const g of (c.subgroups || [])) for (const s of (g.services || [])) { const full = { ...s, _cat: c.id, _catName: c.name, _group: g.name }; if (match(full)) rows.push(svcRow(full)); }
    if (!rows.length) return "";
    return `<div class="card" id="cat-${c.id}">
      <h3 style="margin-top:0">${c.emoji} ${esc(c.name)}</h3>
      ${c.note ? `<p class="muted">${esc(c.note)}</p>` : ""}
      <table><thead><tr><th>Service</th><th>Type</th><th>Free</th><th>Limits</th><th>Card</th><th>✓</th></tr></thead><tbody>${rows.join("")}</tbody></table>
    </div>`;
  }).join("") || `<p>No matches. Try clearing filters.</p>`;
}

function renderMeta() {
  $("#legendGrid").innerHTML = state.data.legend.map((l) => `<span class="badge">${l.badge} ${esc(l.meaning)}</span>`).join("");
  const cf = $("#catFilter");
  cf.innerHTML = `<option value="">All categories</option>` + state.data.categories.map((c) => `<option value="${c.id}">${c.emoji} ${esc(c.name)}</option>`).join("");
  cf.value = state.cat;
  $("#alternatives").innerHTML = `<table><tbody>${state.data.alternatives.map((a) => `<tr><th>${esc(a.popular)}</th><td>${esc(a.free)}</td></tr>`).join("")}</tbody></table>`;
  $("#checklist").innerHTML = state.data.checklist.map((c) => `<li>${esc(c)}</li>`).join("");
}

function renderAll() { renderMeta(); renderStacks(); renderStackDetail(); renderCatalog(); }

function initFromHash() {
  const h = location.hash.replace(/^#/, "");
  const p = new URLSearchParams(h);
  if (p.get("stack")) state.stack = p.get("stack");
  if (p.get("q")) { state.q = p.get("q"); $("#q").value = state.q; }
}

$("#q").addEventListener("input", (e) => { state.q = e.target.value; renderCatalog(); });
$("#badgeFilter").addEventListener("change", (e) => { state.badge = e.target.value; renderCatalog(); });
$("#catFilter").addEventListener("change", (e) => { state.cat = e.target.value; renderCatalog(); });

load();
