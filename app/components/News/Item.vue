<template>
  <div class="border-b border-gray-200 transition-all duration-300 p-6">
    <div
      class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
    >
      <!-- 左側：日付とカテゴリ -->
      <div class="flex items-center gap-4">
        <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <span class="text-sm font-orbitron text-slate-700 py-1">
            {{ date }}
          </span>
        </div>
      </div>
      <!-- 右側：タイトルとアイコン -->
      <div class="flex items-center justify-between flex-1 md:ml-6">
        <h3 class="text-lg md:text-xl font-medium text-slate-700">
          {{ title }}
        </h3>
        <svg
          class="w-5 h-5 text-gray-400 flex-shrink-0 ml-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
    <!-- 概要（オプション） -->
    <div
      v-if="summary"
      class="mt-2"
    >
      <p class="text-slate-700 leading-relaxed">{{ summary }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// プロパティの定義
const props = defineProps<{
  date: string;
  category: string;
  title: string;
  summary?: string;
}>();

// カテゴリに応じたスタイルを返す関数
// const getCategoryClass = (category: string) => {
//   switch (category) {
//     case "サービス":
//       return "bg-blue-100 text-blue-800";
//     case "イベント":
//       return "bg-green-100 text-green-800";
//     case "重要":
//       return "bg-red-100 text-red-800";
//     case "お知らせ":
//       return "bg-gray-100 text-gray-800";
//     default:
//       return "bg-gray-100 text-gray-800";
//   }
// };
</script>
