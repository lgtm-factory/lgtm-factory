import { CacheAdaptor as r } from "./adaptor.js";
export default class o extends r {
  cacheName = "suspense-cache";
  constructor(e = {}) {
    super(e);
  }
  async retrieve(e) {
    const c = await (
      await caches.open(this.cacheName)
    ).match(this.buildCacheKey(e));
    return c ? c.text() : null;
  }
  async update(e, a, c) {
    const s = await caches.open(this.cacheName),
      t = c ?? "31536000",
      n = new Response(a, {
        headers: new Headers({ "cache-control": `max-age=${t}` }),
      });
    await s.put(this.buildCacheKey(e), n);
  }
}