<template>
  <div>
    <PageHero
      :crumbs="[{ label: '会社概要' }]"
      eng="COMPANY"
      subtitle="会社概要"
    />

    <!-- ===== PROFILE TABLE ===== -->
    <section class="bg-white">
      <div
        v-reveal
        class="reveal mx-auto max-w-[980px] px-8 py-[88px] max-nav:px-5 max-nav:py-16"
      >
        <div class="border-t border-line">
          <div
            v-for="row in profile"
            :key="row.label"
            class="grid grid-cols-1 gap-1.5 border-b border-line-soft py-[26px] nav:grid-cols-[200px_1fr] nav:gap-6"
          >
            <div
              class="font-mono text-[11px] tracking-[0.1em] text-faint-2 nav:pt-[3px]"
            >
              {{ row.label }}
            </div>
            <!-- chips -->
            <div
              v-if="row.chips"
              class="flex flex-wrap gap-2.5"
            >
              <span
                v-for="chip in row.chips"
                :key="chip"
                class="rounded-[3px] border border-line bg-surface px-4 py-2 text-[13px] font-medium"
              >
                {{ chip }}
              </span>
            </div>
            <!-- multi-line -->
            <div
              v-else-if="row.lines"
              class="text-[15px] leading-[1.95]"
            >
              <template
                v-for="(line, i) in row.lines"
                :key="i"
              >
                {{ line }}<br v-if="i < row.lines.length - 1" />
              </template>
            </div>
            <!-- single value -->
            <div
              v-else
              class="text-[16px] font-medium"
            >
              {{ row.value }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== MAP ===== -->
    <section class="bg-surface">
      <div class="mx-auto max-w-[1180px] px-8 pb-[92px] max-nav:px-5">
        <div class="mb-[18px] font-mono text-[11px] tracking-[0.22em] text-faint-2">
          ACCESS MAP
        </div>
        <div
          class="overflow-hidden rounded-[6px] border border-line-strong"
        >
          <iframe
            :src="`https://www.google.com/maps/embed/v1/place?key=${GMAP_API_KEY}&zoom=15&q=${location}`"
            allowfullscreen
            class="h-[420px] w-full max-nav:h-[320px]"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            style="border: 0"
            title="googleマップ"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <ContactCtaRow
      :secondary="{
        eyebrow: 'ABOUT — 私たちについて',
        title: 'Innovation Style について',
        label: '私たちについて',
        to: '/about',
      }"
    />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const { GMAP_API_KEY } = config.public;
const location = "東京都港区海岸1-2-20 汐留ビルディング";

const profile: {
  label: string;
  value?: string;
  lines?: string[];
  chips?: string[];
}[] = [
  { label: "社名", value: "Innovation Style株式会社" },
  {
    label: "所在地",
    lines: ["〒105-0022", "東京都港区海岸1-2-20 汐留ビルディング 3F"],
  },
  { label: "代表取締役", value: "冨野 公平" },
  { label: "資本金", value: "1,000,000円" },
  { label: "設立年月日", value: "2023年12月13日" },
  { label: "事業内容", chips: ["システム開発", "デジタルマーケティング"] },
  {
    label: "アクセス",
    lines: ["都営大江戸線 大門駅 徒歩3分", "JR浜松町駅 徒歩3分"],
  },
];

useHead({
  title: "会社概要 | Innovation Style株式会社",
  meta: [
    {
      name: "description",
      content:
        "システム開発とデジタルマーケティング事業を展開。革新的な技術とマーケティングの融合で、企業のDX推進とビジネス成長をサポートします。",
    },
  ],
});
</script>
