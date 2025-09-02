<template>
  <article class="relative bg-gradient-to-br from-white to-stone-50">
    <div class="relative w-full h-40 md:h-60 bg-white overflow-hidden">
      <!-- 背景画像レイヤー（opacity適用） -->
      <div
        class="absolute inset-0 opacity-60"
        :style="{
          backgroundImage: `url(${earthBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat',
        }"
      ></div>
      <!-- コンテンツレイヤー -->
      <div class="z-10 h-full">
        <div class="flex flex-col gap-2 items-center justify-center h-full">
          <h1 class="text-3xl font-orbitron drop-shadow-lg">Company</h1>
          <p class="text-xl text-gray-900 drop-shadow-md">会社概要</p>
        </div>
      </div>
    </div>
    <div
      class="max-w-screen-md mx-auto pt-10 pb-4 text-sm md:text-lg px-4 md:px-0"
    >
      <CompanyGridRow
        v-for="row in gridRows"
        :key="row.label"
        :label="row.label"
        :value="row.value"
      />

      <div class="py-10">
        <iframe
          :src="`https://www.google.com/maps/embed/v1/place?key=${GMAP_API_KEY}&zoom=15&q=${location}`"
          allowfullscreen
          class="w-full h-[300px] md:h-[500px]"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style="border: 0"
          title="googleマップ"
          importance="low"
        >
        </iframe>
      </div>
    </div>
    <div
      class="w-full h-28 md:h-48 bg-gray-100 grid grid-cols-2 mt-4 border-t border-slate-200"
    >
      <NuxtLink
        to="/company"
        class="relative bg-gray-50 flex items-center justify-center overflow-hidden"
      >
        <!-- 背景画像レイヤー（opacity適用） -->
        <div
          class="absolute inset-0 opacity-30"
          :style="{
            backgroundImage: `url(${aboutUsBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>
        <!-- コンテンツレイヤー -->
        <p
          class="relative flex flex-col md:flex-row items-center justify-center z-10 text-xl md:text-2xl space-x-2 drop-shadow-lg"
        >
          <span class="font-orbitron">ABOUT US</span>
          <span class="text-lg md:text-xl hidden md:block">/</span>
          <span class="text-sm md:text-base text-gray-900">私たちについて</span>
        </p>
      </NuxtLink>
      <NuxtLink
        to="/company"
        class="relative bg-gray-200 flex items-center justify-center overflow-hidden"
      >
        <!-- 背景画像レイヤー（opacity適用） -->
        <div
          class="absolute inset-0 opacity-30"
          :style="{
            backgroundImage: `url(${networkBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>
        <!-- コンテンツレイヤー -->
        <p
          class="relative flex flex-col md:flex-row items-center justify-center z-10 text-xl md:text-2xl space-x-2 drop-shadow-lg"
        >
          <span class="font-orbitron">CONTACT</span>
          <span class="text-lg md:text-xl hidden md:block">/</span>
          <span class="text-sm md:text-base text-gray-900">お問いわせ</span>
        </p>
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const { GMAP_API_KEY } = config.public;
const location = "東京都港区新橋1-9-5KDX新橋駅前ビル";

import earthBg from "~/assets/img/background/earth.png";
import aboutUsBg from "~/assets/img/illust/about_us.png";
import networkBg from "~/assets/img/illust/network.png";

const gridRows = [
  { label: "社名", value: "Innovation Style株式会社" },
  {
    label: "所在地",
    value: "〒105-0004\n東京都港区新橋1-9-5KDX新橋駅前ビル9F",
  },
  { label: "代表取締役", value: "冨野 公平" },
  { label: "資本金", value: "1,000,000円" },
  { label: "設立年月日", value: "2023年12月13日" },
  { label: "事業内容", value: ["システム開発", "デジタルマーケティング"] },
  {
    label: "アクセス",
    value: ["東京メトロ銀座線 新橋駅 徒歩1分", "JR新橋駅 徒歩3分"],
  },
];
</script>
