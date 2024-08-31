import { CacheAdaptor as s } from "./adaptor.js";
export default class i extends s {
  constructor(e = {}) {
    super(e);
  }
  async retrieve(e) {
    return (
      (await process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE?.get(
        this.buildCacheKey(e),
      )) ?? null
    );
  }
  async update(e, r, t) {
    const n = t ? { expirationTtl: t } : {};
    await process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE?.put(
      this.buildCacheKey(e),
      r,
      n,
    );
  }
}
