export const SUSPENSE_CACHE_URL = "INTERNAL_SUSPENSE_CACHE_HOSTNAME.local";
const u = "_N_T_",
  l = new Set();
export class CacheAdaptor {
  constructor(t = {}) {
    this.ctx = t;
  }
  tagsManifest;
  tagsManifestKey = "tags-manifest";
  tagsManifestPromise;
  async retrieve(t) {
    throw new Error(`Method not implemented - ${t}`);
  }
  async update(t, e, a) {
    throw new Error(`Method not implemented - ${t}, ${e}, ${a}`);
  }
  async set(t, e) {
    const a = { lastModified: Date.now(), value: e },
      n = this.update(t, JSON.stringify(a), e.revalidate);
    switch (a.value?.kind) {
      case "FETCH": {
        const i = getTagsFromEntry(a);
        await this.setTags(i, { cacheKey: t });
        const s = getDerivedTags(i),
          o = s.map((c) => `${u}${c}`);
        [...s, ...o].forEach((c) => l.delete(c));
      }
    }
    await n;
  }
  async get(t, { softTags: e }) {
    const a = this.retrieve(t),
      n = this.loadTagsManifest(),
      i = await a;
    if (!i) return null;
    let s;
    try {
      s = JSON.parse(i);
    } catch {
      return null;
    }
    switch (s.value?.kind) {
      case "FETCH": {
        await n;
        const o = getTagsFromEntry(s);
        return (e ? [...o, ...e] : getDerivedTags(o)).some((d) => {
          if (l.has(d)) return !0;
          const g = this.tagsManifest?.items?.[d];
          return (
            g?.revalidatedAt &&
            g?.revalidatedAt >= (s.lastModified ?? Date.now())
          );
        })
          ? null
          : s;
      }
      default:
        return s;
    }
  }
  async revalidateTag(t) {
    await this.setTags([t], { revalidatedAt: Date.now() }), l.add(t);
  }
  async loadTagsManifest(t = !1) {
    !(t || !this.tagsManifest) ||
      (this.tagsManifestPromise ||
        (this.tagsManifestPromise = this.loadTagsManifestInternal()),
      await this.tagsManifestPromise);
  }
  async loadTagsManifestInternal() {
    try {
      const t = await this.retrieve(this.tagsManifestKey);
      t && (this.tagsManifest = JSON.parse(t));
    } catch {}
    (this.tagsManifest ??= { version: 1, items: {} }),
      (this.tagsManifestPromise = void 0);
  }
  async saveTagsManifest() {
    if (this.tagsManifest) {
      const t = JSON.stringify(this.tagsManifest);
      await this.update(this.tagsManifestKey, t);
    }
  }
  async setTags(t, { cacheKey: e, revalidatedAt: a }) {
    await this.loadTagsManifest(!0);
    const n = this.tagsManifest;
    for (const i of t) {
      const s = n.items[i] ?? { keys: [] };
      e && !s.keys.includes(e) && s.keys.push(e),
        a && (s.revalidatedAt = a),
        (n.items[i] = s);
    }
    await this.saveTagsManifest();
  }
  buildCacheKey(t) {
    return `https://${SUSPENSE_CACHE_URL}/entry/${t}`;
  }
}
export function getDerivedTags(r) {
  const t = ["/"];
  for (const e of r || [])
    if (e.startsWith("/")) {
      const a = e.split("/");
      for (let n = 1; n < a.length + 1; n++) {
        const i = a.slice(0, n).join("/");
        i && (t.push(i), t.includes(i) || t.push(i));
      }
    } else t.includes(e) || t.push(e);
  return t;
}
export function getTagsFromEntry(r) {
  return r.value?.tags ?? r.value?.data?.tags ?? [];
}
