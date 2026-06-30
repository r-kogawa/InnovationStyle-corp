// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

// OGP 用のサイト共通情報
// NOTE: 本番ドメイン確定後に siteUrl を差し替える（現状はプレースホルダ）
const siteUrl = "https://innovation-style.co.jp";
const siteName = "Innovation Style株式会社";
const ogTitle = "Innovation Style | システム開発 | デジタルマーケティング";
const ogDescription =
  "革新的な発想と先進技術の融合でDX推進を実現。Web・モバイルアプリ開発、AI導入、SNS広告・SEO対策まで、企画から実行まで一気通貫でサポート。システム開発とデジタルマーケティングの専門家が、お客様のビジネス成長を総合的に支援します。";

export default defineNuxtConfig({
  nitro: {
    preset: "netlify-static",
  },
  compatibilityDate: "2024-04-03",
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      htmlAttrs: { lang: "ja" },
      script: [
        {
          // スクロールリビールを有効化（JS無効時は .reveal は常時表示のまま）
          innerHTML: "document.documentElement.classList.add('reveal-enabled')",
          tagPosition: "head",
        },
      ],
      meta: [
        // Open Graph（property 属性で出力する必要がある）
        { charset: "utf-8" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: siteName },
        { property: "og:title", content: ogTitle },
        { property: "og:description", content: ogDescription },
        { property: "og:url", content: siteUrl },
        { property: "og:image", content: `${siteUrl}/logo/ogp.png` },
      ],
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@nuxt/test-utils",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      "Space Grotesk": [400, 500, 600, 700],
      "Noto Sans JP": [400, 500, 700],
      "JetBrains Mono": [400, 500],
    },
    display: "swap",
  },
  runtimeConfig: {
    public: {
      GMAP_API_KEY: process.env.GMAP_API_KEY,
    },
  },
});
