<template>
  <article class="relative bg-gradient-to-br from-white to-stone-50 h-full">
    <BackGroundAnimation>
      <div class="w-full h-full">
        <AnimationMatrix>
          <div
            class="max-w-2xl mx-auto px-4 py-20 neon-border rounded-lg hologram p-8 md:p-12 text-center py-10 md:py-24"
          >
            <!-- メッセージ -->
            <h1
              class="text-3xl md:text-4xl font-orbitron font-bold text-primary-100 mb-4"
            >
              <AnimationFlow>Thank You!</AnimationFlow>
            </h1>
            <p class="text-xl md:text-2xl text-primary-200 mb-8">
              お問い合わせありがとうございます
            </p>

            <div class="bg-primary-800/20 rounded-lg p-6 mb-8 text-center">
              <p class="text-primary-200 leading-relaxed mb-4">
                お問い合わせ内容を受け付けました。<br />
                担当者が内容を確認次第、
                <span class="text-primary-300 font-bold animate-neon-glow">
                  2営業日以内
                </span>
                にご連絡させていただきます。
              </p>
            </div>

            <!-- ボタンエリア -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink
                to="/"
                class="inline-flex items-center justify-center space-x-2 bg-primary-900/50 hover:bg-primary-800/70 text-primary-100 border-2 border-primary-500/50 hover:border-primary-400 px-8 py-4 font-semibold transition-all duration-300"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>トップページへ戻る</span>
              </NuxtLink>
            </div>

            <!-- フッター情報 -->
            <div class="mt-12 pt-8 border-t border-primary-500/30">
              <p class="text-primary-300 text-sm mb-2">
                お急ぎの場合やご不明な点がございましたら
              </p>
              <p class="text-primary-200 text-sm">
                お気軽に再度お問い合わせください
              </p>
            </div>
          </div>
        </AnimationMatrix>
      </div>
    </BackGroundAnimation>
  </article>
</template>

<script setup lang="ts">
import earthBg from "~/assets/img/background/earth.png";
import aboutUsBg from "~/assets/img/illust/about_us.png";
// import networkBg from "~/assets/img/illust/network.png";

const gridLinks = [
  {
    to: "/about",
    image: aboutUsBg,
    title: "ABOUT US",
    description: "私たちについて",
  },
  {
    to: "/company",
    image: earthBg,
    title: "COMPANY",
    description: "会社概要",
  },
];
// ページメタ情報
useHead({
  title: "お問い合わせ完了 - Innovation Style",
  meta: [
    {
      name: "description",
      content: "お問い合わせありがとうございます",
    },
    {
      name: "robots",
      content: "noindex,nofollow",
    },
  ],
});
</script>

<style scoped></style>
