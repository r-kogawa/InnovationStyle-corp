<template>
  <header
    class="relative bg-gradient-to-br from-slate-50 to-zinc-200 border-b border-slate-300 shadow-sm"
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
        <div
          class="hidden md:flex gap-10 items-center text-lg text-slate-700 font-orbitron"
        >
          <NuxtLink
            to="/about"
            class="hover:border-b hover:border-slate-500 transition-all duration-50"
          >
            ABOUT US
          </NuxtLink>
          <NuxtLink
            to="/service"
            class="hover:border-b hover:border-slate-500 transition-all duration-50"
          >
            SERVICE
          </NuxtLink>
          <NuxtLink
            to="/company"
            class="hover:border-b hover:border-slate-500 transition-all duration-50"
          >
            COMPANY
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="hover:border-b hover:border-slate-500 transition-all duration-50"
          >
            CONTACT
          </NuxtLink>
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
      class="absolute top-16 left-0 w-full h-fit z-50 bg-gradient-to-br from-slate-50 to-zinc-200 border-b border-slate-300"
    >
      <div class="grid grid-cols-1 gap-2 h-full">
        <NuxtLink
          class="flex items-center gap-1 text-left border-b border-slate-300 p-2 font-orbitron"
          to="/about"
        >
          <h2 class="font-orbitron text-slate-700">ABOUT US</h2>
          <span class="text-lg text-slate-500">/</span>
          <p class="text-sm text-gray-500">会社概要</p>
        </NuxtLink>
        <NuxtLink
          class="flex items-center gap-1 text-left border-b border-slate-300 p-2 font-orbitron"
          to="/service"
        >
          <h2 class="font-orbitron text-slate-700">SERVICE</h2>
          <span class="text-lg text-slate-500">/</span>
          <p class="text-sm text-gray-500">事業内容</p>
        </NuxtLink>
        <NuxtLink
          class="flex items-center gap-1 text-left border-b border-slate-300 p-2 font-orbitron"
          to="/company"
        >
          <h2 class="font-orbitron text-slate-700">COMPANY</h2>
          <span class="text-lg text-slate-500">/</span>
          <p class="text-sm text-gray-500">会社概要</p>
        </NuxtLink>
        <NuxtLink
          class="flex items-center gap-1 text-left border-b border-slate-300 p-2 font-orbitron"
          to="/contact"
        >
          <h2 class="font-orbitron text-slate-700">CONTACT</h2>
          <span class="text-lg text-slate-500">/</span>
          <p class="text-sm text-gray-500">お問い合わせ</p>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref<boolean>(false);
</script>
