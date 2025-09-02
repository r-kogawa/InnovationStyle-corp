<template>
  <article>
    <div class="w-full h-40 md:h-60 bg-gray-100">
      <div class="h-full">
        <div class="flex flex-col gap-2 items-center justify-center h-full">
          <h1 class="text-3xl font-orbitron">SERVICE</h1>
          <p class="text-xl text-gray-500">事業内容</p>
        </div>
      </div>
    </div>
    <div class="py-10 md:py-24"></div>
    <div
      class="w-full h-32 md:h-48 bg-gray-100 grid grid-cols-2 mt-4 md:mt-20 border-t border-slate-200"
    >
      <NuxtLink
        to="/company"
        class="relative bg-gray-50 flex items-center justify-center overflow-hidden"
      >
        <!-- 背景画像レイヤー（opacity適用） -->
        <div
          class="absolute inset-0 opacity-30"
          :style="{
            backgroundImage: `url(${earthBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>
        <!-- コンテンツレイヤー -->
        <p
          class="relative flex flex-col md:flex-row items-center justify-center z-10 text-xl md:text-2xl space-x-2 drop-shadow-lg"
        >
          <span class="font-orbitron">COMPANY</span>
          <span class="text-lg md:text-xl hidden md:block">/</span>
          <span class="text-sm md:text-base text-gray-900">会社概要</span>
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
import earthBg from "~/assets/img/background/earth.png";
import networkBg from "~/assets/img/illust/network.png";
</script>
