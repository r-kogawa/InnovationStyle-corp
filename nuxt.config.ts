// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

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
          innerHTML:
            "document.documentElement.classList.add('reveal-enabled')",
          tagPosition: "head",
        },
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
