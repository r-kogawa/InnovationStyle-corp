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
    head: {},
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
      Kalam: [300, 400, 700],
      Caveat: [400, 500, 600, 700],
      Orbitron: [400, 500, 600, 700, 800, 900],
    },
    display: "swap",
  },
  runtimeConfig: {
    public: {
      GMAP_API_KEY: process.env.GMAP_API_KEY,
    },
  },
});
