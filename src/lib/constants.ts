interface SiteMetadata {
  SITE_URL: string;
  SITE_NAME: string;
  SITE_DESC: string;
  GITHUB_URL: string;
  GITHUB_DESIGN_GUIDE_URL: string;
  TWITTER_SHARE: string;
}

const SITE_URLS = {
  development: "http://localhost:3000",
  production: "https://lgtm-factory.pages.dev",
  test: "http://localhost:3000",
};

const siteUrl = SITE_URLS[process.env.NODE_ENV];

export const siteMetadata: SiteMetadata = {
  SITE_URL: siteUrl,
  SITE_NAME: "LGTM Factory",
  SITE_DESC:
    "HTML/CSSから生成されたフリーLGTM画像のコレクション | Free & Open Source LGTM Image Generator 📦",
  GITHUB_URL: "https://github.com/lgtm-factory/lgtm-factory",
  GITHUB_DESIGN_GUIDE_URL:
    "https://github.com/lgtm-factory/lgtm-factory/blob/main/design-guide.md",
  TWITTER_SHARE:
    "https://twitter.com/intent/tweet?text=自由自在なフリーLGTM画像で、プロジェクトを彩る📦&url=https://lgtm-factory.pages.dev/&hashtags=LGTMfactory,OpenSource",
};
