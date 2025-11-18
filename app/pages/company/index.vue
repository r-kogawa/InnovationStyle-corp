<template>
  <article class="relative">
    <BackGroundAnimation>
      <Breadcrumb :items="breadcrumbItems" />
      <div class="relative w-full h-full overflow-hidden mb-10">
        <!-- コンテンツレイヤー -->
        <div class="z-10 max-w-screen-xl mx-auto h-full flex items-center px-4">
          <div
            class="flex flex-col gap-2 justify-center h-fit border-l-8 border-slate-500 pl-4"
          >
            <h1 class="text-3xl font-orbitron drop-shadow-lg">Company</h1>
            <p class="text-xl text-gray-900 drop-shadow-md">会社概要</p>
          </div>
        </div>
      </div>

      <AnimationMatrix>
        <section class="max-w-screen-xl mx-auto mb-20">
          <div
            class="text-sm md:text-lg p-4 grid items-start grid-cols-1 md:grid-cols-2 md:gap-10 gap-4 h-full"
          >
            <div>
              <CompanyGridRow
                v-for="row in gridRows"
                :key="row.label"
                :label="row.label"
                :value="row.value"
              />
            </div>

            <div class="pt-10">
              <iframe
                :src="`https://www.google.com/maps/embed/v1/place?key=${GMAP_API_KEY}&zoom=15&q=${location}`"
                allowfullscreen
                class="w-full h-[300px] md:h-[370px]"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                style="border: 0"
                title="googleマップ"
                importance="low"
              >
              </iframe>
            </div>
          </div>
        </section>
      </AnimationMatrix>
    </BackGroundAnimation>
    <div class="w-full bg-white">
      <AnimationMatrix>
        <GridLinks :links="gridLinks" />
      </AnimationMatrix>
    </div>
  </article>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const { GMAP_API_KEY } = config.public;
const location = "東京都港区海岸1-2-20 汐留ビルディング";

import earthBg from "~/assets/img/background/earth.png";
import aboutUsBg from "~/assets/img/illust/about_us.png";
import networkBg from "~/assets/img/illust/network.png";

const gridRows = [
  { label: "社名", value: "Innovation Style株式会社" },
  {
    label: "所在地",
    value: "〒105-0022\n東京都港区海岸1-2-20\n 汐留ビルディング 3F",
  },
  { label: "代表取締役", value: "冨野 公平" },
  { label: "資本金", value: "1,000,000円" },
  { label: "設立年月日", value: "2023年12月13日" },
  { label: "事業内容", value: ["システム開発", "デジタルマーケティング"] },
  {
    label: "アクセス",
    value: ["都営大江戸線 大門駅 徒歩3分", "JR浜松町駅 徒歩3分"],
  },
];

const breadcrumbItems = [{ label: "会社概要" }];

const gridLinks = [
  {
    to: "/about",
    image: aboutUsBg,
    title: "ABOUT US",
    description: "私たちについて",
  },
  {
    to: "/contact",
    image: networkBg,
    title: "CONTACT",
    description: "お問いわせ",
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
