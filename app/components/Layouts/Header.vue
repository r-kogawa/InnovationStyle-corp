<template>
  <header
    class="relative bg-gradient-to-r from-slate-100 to-slate-200 border-b border-slate-300 shadow-sm"
  >
    <div class="container mx-auto py-4 md:py-6 px-4 md:px-0">
      <div class="flex justify-between items-center">
        <NuxtLink
          class="flex gap-2 items-center"
          to="/"
        >
          <img
            src="~/assets/img/logo.png"
            alt="logo"
            class="w-8 h-8 md:w-10 md:h-10"
          />
          <span class="text-xl md:text-2xl font-bold">Innovation Style</span>
        </NuxtLink>
        <div class="hidden md:flex gap-10 items-center text-lg text-black">
          <NuxtLink to="/">経営理念</NuxtLink>
          <NuxtLink to="/about">事業内容</NuxtLink>
          <NuxtLink to="/company">会社概要</NuxtLink>
          <NuxtLink to="/contact">お問い合わせ</NuxtLink>
        </div>
        <div class="md:hidden">
          <button @click="isMenuOpen = !isMenuOpen">
            <Icon
              name="mdi:menu"
              class="w-7 h-7 text-slate-700"
            />
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="isMenuOpen"
      class="absolute top-16 left-0 w-full h-fit z-50 bg-gradient-to-r from-slate-200 to-white border-b border-slate-300"
    >
      <div class="grid grid-cols-1 gap-2 h-full">
        <NuxtLink
          class="text-left border-b border-slate-300 p-2"
          to="/"
        >
          経営理念
        </NuxtLink>
        <NuxtLink
          class="text-left border-b border-slate-300 p-2"
          to="/about"
        >
          事業内容
        </NuxtLink>
        <NuxtLink
          class="text-left border-b border-slate-300 p-2"
          to="/company"
        >
          会社概要
        </NuxtLink>
        <NuxtLink
          class="text-left border-b border-slate-300 p-2"
          to="/contact"
        >
          お問い合わせ
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref<boolean>(false);
</script>
