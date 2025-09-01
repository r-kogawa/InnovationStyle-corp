<template>
  <footer
    class="bg-gradient-to-r from-slate-900 to-slate-700 border-t border-slate-300 shadow-sm text-white"
  >
    <div class="container mx-auto py-6 px-4 md:px-0 space-y-2">
      <NuxtLink
        class="flex gap-2 items-center"
        to="/"
      >
        <img
          src="~/assets/img/white-logo.png"
          alt="logo"
          class="w-8 h-8 md:w-10 md:h-10"
        />
        <span class="text-xl md:text-2xl font-bold">Innovation Style</span>
      </NuxtLink>
      <p class="text-sm md:text-base">東京都港区新橋1-9-5KDX 新橋駅前ビル9F</p>
    </div>
    <div class="flex justify-center items-center pb-6">
      <p>Copyright © 2023 Innovation Style., Ltd</p>
    </div>
  </footer>
</template>
<script setup lang="ts"></script>
