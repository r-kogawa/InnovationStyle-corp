<template>
  <div>
    <!-- ===== ARTICLE HEADER ===== -->
    <section class="relative overflow-hidden border-b border-line">
      <div class="absolute inset-0 bg-dotgrid opacity-70"></div>
      <div
        class="relative mx-auto max-w-[820px] px-8 pb-14 pt-16 max-nav:px-5"
      >
        <div class="font-mono text-[11px] tracking-[0.18em]">
          <NuxtLink
            to="/"
            class="text-faint-2 transition-colors hover:text-accent"
            >ホーム</NuxtLink
          >
          <span class="px-2 text-faint-2">/</span>
          <NuxtLink
            to="/news"
            class="text-faint-2 transition-colors hover:text-accent"
            >お知らせ</NuxtLink
          >
          <span class="px-2 text-faint-2">/</span>
          <span class="text-accent">{{ article.category }}</span>
        </div>
        <div class="mt-7 flex items-center gap-3.5">
          <span
            class="font-mono text-[13px] tracking-[0.04em] text-faint"
            >{{ article.date }}</span
          >
          <span
            class="rounded-[3px] px-[11px] py-[5px] text-[11px] font-medium"
            :class="newsChipClass(article.category)"
          >
            {{ article.category }}
          </span>
        </div>
        <h1
          class="mt-4 text-[clamp(24px,4vw,34px)] font-bold leading-[1.5] tracking-[0.01em]"
        >
          {{ article.title }}
        </h1>
      </div>
    </section>

    <!-- ===== ARTICLE BODY ===== -->
    <section class="bg-white">
      <div
        class="mx-auto max-w-[820px] px-8 pb-20 pt-16 max-nav:px-5 max-nav:py-12"
      >
        <!-- key visual -->
        <CaseVisual
          :image="keyVisual"
          :alt="article.title"
          class="mb-10 aspect-[16/8]"
        />

        <!-- blocks -->
        <template
          v-for="(block, i) in body"
          :key="i"
        >
          <h2
            v-if="block.type === 'h2'"
            class="mb-4 mt-11 text-[20px] font-bold leading-[1.6]"
          >
            {{ block.text }}
          </h2>
          <div
            v-else-if="block.type === 'checks'"
            class="mt-1 flex flex-col gap-3"
          >
            <div
              v-for="item in block.items"
              :key="item"
              class="flex gap-3 text-[15px] leading-[1.7]"
            >
              <span class="text-accent">✓</span>{{ item }}
            </div>
          </div>
          <p
            v-else
            class="m-0 text-[15px] leading-[2.1] text-[#2a2c3c]"
          >
            {{ block.text }}
          </p>
        </template>

        <!-- contact footer -->
        <div class="mt-12 border-t border-line-soft pt-6">
          <div class="text-[13px] leading-[1.9] text-faint">
            本件に関するお問い合わせ<br />Innovation Style株式会社　広報担当
          </div>
        </div>

        <!-- actions -->
        <div class="mt-11 flex flex-wrap gap-3.5">
          <NuxtLink
            to="/news"
            class="inline-flex items-center gap-2 rounded-[3px] border border-[#c9cad4] px-7 py-[15px] text-[14px] font-medium text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <span class="font-display">←</span> 一覧へ戻る
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="rounded-[3px] bg-ink px-7 py-[15px] text-[14px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent"
          >
            お問い合わせ →
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import autolpImg from "~/assets/img/service/products/autolp.png";
import comparlyticsImg from "~/assets/img/service/products/comparlytics.png";

// お知らせの画像キー → バンドル済み画像 URL の対応表
const newsImageMap: Record<string, string> = {
  autolp: autolpImg,
  comparlytics: comparlyticsImg,
};

const route = useRoute();
const { getById } = useNews();

const id = Number(route.params.id);
const article = getById(id);

// 存在しない id は 404 へ
if (!article) {
  throw createError({
    statusCode: 404,
    statusMessage: "お知らせが見つかりませんでした",
    fatal: true,
  });
}

// 画像キーに対応する画像があれば使用し、なければ CaseVisual がロゴを表示する
const keyVisual = computed(() =>
  article!.image ? newsImageMap[article!.image] : undefined,
);

const body = computed(
  () =>
    article!.body ?? [
      { type: "p" as const, text: "本記事の詳細は近日公開予定です。" },
    ],
);

useHead({
  title: `${article!.title} | お知らせ | Innovation Style`,
  meta: [
    {
      name: "description",
      content: article!.title,
    },
  ],
});
</script>
