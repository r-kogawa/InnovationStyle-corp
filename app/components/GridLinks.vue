<template>
  <div
    class="w-full h-28 md:h-48 bg-gray-100 grid grid-cols-2 border-t border-slate-200"
  >
    <NuxtLink
      v-for="(link, index) in props.links"
      :key="link.title"
      :to="link.to"
      class="relative flex items-center justify-center overflow-hidden"
      :class="index === 0 ? 'bg-gray-50' : 'bg-gray-200'"
    >
      <!-- 背景画像レイヤー（opacity適用） -->
      <div
        class="absolute inset-0 opacity-30"
        :style="{
          backgroundImage: `url(${link.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat',
        }"
      ></div>
      <!-- コンテンツレイヤー -->
      <p
        class="relative flex flex-col md:flex-row items-center justify-center z-10 text-xl md:text-2xl space-x-2 drop-shadow-lg"
      >
        <span class="font-orbitron">{{ link.title }}</span>
        <span class="text-lg md:text-xl hidden md:block">/</span>
        <span class="text-sm md:text-base text-gray-900">{{
          link.description
        }}</span>
      </p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface Props {
  links: {
    to: string;
    image: string;
    title: string;
    description: string;
  }[];
}

const props = defineProps<Props>();
</script>
