<template>
  <header
    class="relative bg-gradient-to-br from-slate-50 to-zinc-200 border-b border-slate-900 shadow-sm"
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
          <span class="text-xl md:text-2xl font-bold font-orbitron"
            >Innovation Style</span
          >
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
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="relative p-1"
          >
            <Icon
              :name="isMenuOpen ? 'mdi:close' : 'mdi:menu'"
              class="w-7 h-7 text-slate-700 transition-all duration-300"
              :class="{ 'rotate-90': isMenuOpen }"
            />
          </button>
        </div>
      </div>
    </div>
    <!-- モバイルメニューのアニメーション -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMenuOpen"
        class="absolute top-18 left-0 w-full h-fit z-50 bg-white border-b border-slate-300 shadow-lg backdrop-blur-sm"
      >
        <div class="grid grid-cols-1 gap-2 h-full">
          <NuxtLink
            @click="isMenuOpen = false"
            class="flex items-center gap-1 text-left border-b border-slate-300 p-3 font-orbitron hover:bg-gray-100 transition-colors duration-200"
            to="/about"
          >
            <h2 class="font-orbitron text-slate-700">ABOUT US</h2>
            <span class="text-lg text-slate-500">/</span>
            <p class="text-sm text-gray-500">私たちについて</p>
          </NuxtLink>
          <NuxtLink
            @click="isMenuOpen = false"
            class="flex items-center gap-1 text-left border-b border-slate-300 p-3 font-orbitron hover:bg-gray-100 transition-colors duration-200"
            to="/service"
          >
            <h2 class="font-orbitron text-slate-700">SERVICE</h2>
            <span class="text-lg text-slate-500">/</span>
            <p class="text-sm text-gray-500">事業内容</p>
          </NuxtLink>
          <NuxtLink
            @click="isMenuOpen = false"
            class="flex items-center gap-1 text-left border-b border-slate-300 p-3 font-orbitron hover:bg-gray-100 transition-colors duration-200"
            to="/company"
          >
            <h2 class="font-orbitron text-slate-700">COMPANY</h2>
            <span class="text-lg text-slate-500">/</span>
            <p class="text-sm text-gray-500">会社概要</p>
          </NuxtLink>
          <NuxtLink
            @click="isMenuOpen = false"
            class="flex items-center gap-1 text-left border-b border-slate-300 p-3 font-orbitron hover:bg-gray-100 transition-colors duration-200"
            to="/contact"
          >
            <h2 class="font-orbitron text-slate-700">CONTACT</h2>
            <span class="text-lg text-slate-500">/</span>
            <p class="text-sm text-gray-500">お問い合わせ</p>
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref<boolean>(false);
</script>
