<template>
  <section>
    <div class="w-full h-40 md:h-60 bg-gray-100">
      <div class="h-full">
        <div class="flex flex-col gap-2 items-center justify-center h-full">
          <h1 class="text-3xl font-bold">Company</h1>
          <p class="text-xl text-gray-500">会社概要</p>
        </div>
      </div>
    </div>
    <div
      class="max-w-screen-md mx-auto py-10 md:py-24 text-sm md:text-lg px-4 md:px-0"
    >
      <CompanyGridRow
        v-for="row in gridRows"
        :key="row.label"
        :label="row.label"
        :value="row.value"
      />

      <div class="py-10 md:py-18">
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
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const { GMAP_API_KEY } = config.public;
const location = "東京都港区新橋1-9-5KDX新橋駅前ビル";

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
    value: ["東京メトロ銀座線 新橋駅 徒歩10分", "JR新橋駅 徒歩3分"],
  },
];
</script>
