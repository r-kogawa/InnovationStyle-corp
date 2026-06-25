<template>
  <div>
    <PageHero
      :crumbs="[{ label: 'お知らせ' }]"
      eng="NEWS"
      subtitle="お知らせ"
    />

    <!-- ===== LIST ===== -->
    <section class="bg-white">
      <div
        class="mx-auto max-w-[980px] px-8 pb-24 pt-14 max-nav:px-5 max-nav:py-16"
      >
        <!-- filter tabs -->
        <div class="mb-5 flex flex-wrap gap-2">
          <button
            v-for="cat in categories"
            :key="cat"
            type="button"
            class="rounded-[3px] px-4 py-[9px] font-mono text-[11px] tracking-[0.08em] transition-colors"
            :class="
              activeCat === cat
                ? 'border border-ink bg-ink text-white'
                : 'border border-line-strong bg-white text-body hover:border-accent hover:text-accent'
            "
            @click="activeCat = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- rows -->
        <div class="border-t border-line">
          <NuxtLink
            v-for="item in filtered"
            :key="item.id"
            :to="`/news/${item.id}`"
            class="group -mx-3 grid grid-cols-1 items-center gap-2 border-b border-line-soft px-3 py-[22px] transition-colors duration-200 hover:bg-accent/[0.04] nav:grid-cols-[120px_120px_1fr_auto] nav:gap-6 nav:py-[26px]"
          >
            <div class="font-mono text-[13px] tracking-[0.04em] text-faint">
              {{ item.date }}
            </div>
            <div
              class="justify-self-start whitespace-nowrap rounded-[3px] px-[11px] py-[5px] text-[11px] font-medium"
              :class="newsChipClass(item.category)"
            >
              {{ item.category }}
            </div>
            <div class="text-[15px] font-medium leading-[1.6]">
              {{ item.title }}
            </div>
            <div
              class="font-display text-[18px] text-accent max-nav:hidden"
            >
              →
            </div>
          </NuxtLink>
        </div>

        <p
          v-if="filtered.length === 0"
          class="py-16 text-center text-[14px] text-faint"
        >
          該当するお知らせはありません。
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { articles, categories } = useNews();

const activeCat = ref<(typeof categories)[number]>("ALL");

const filtered = computed(() =>
  activeCat.value === "ALL"
    ? articles
    : articles.filter((a) => a.category === activeCat.value),
);

useHead({
  title: "お知らせ | Innovation Style",
  meta: [
    {
      name: "description",
      content:
        "Innovation Styleからのお知らせ・プレスリリース・実績・メディア掲載情報をご紹介します。",
    },
  ],
});
</script>
