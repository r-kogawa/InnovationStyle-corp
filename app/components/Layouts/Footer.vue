<template>
  <footer
    class="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-primary-500/30 text-white overflow-hidden"
  >
    <!-- 背景エフェクト -->
    <div class="absolute inset-0">
      <div
        class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"
      ></div>
      <div class="hex-pattern absolute inset-0 opacity-10"></div>
      <div class="data-grid absolute inset-0 opacity-5"></div>
    </div>

    <!-- スキャンライン効果 -->
    <div class="absolute inset-0 scanlines"></div>

    <div class="container mx-auto py-8 px-4 md:px-0 space-y-6 relative z-10">
      <NuxtLink
        class="flex gap-3 items-center group"
        to="/"
      >
        <div class="relative">
          <img
            src="~/assets/img/white-logo.png"
            alt="logo"
            class="w-10 h-10 md:w-12 md:h-12 filter drop-shadow-lg"
          />
          <div
            class="absolute inset-0 bg-primary-500/20 rounded-full blur-lg animate-pulse"
          ></div>
        </div>
        <span
          class="text-2xl md:text-3xl font-bold font-orbitron group-hover:animate-neon-glow text-primary-100 transition-all duration-300"
        >
          Innovation Style
        </span>
      </NuxtLink>

      <!-- 会社情報 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <div
              class="w-1 h-1 bg-primary-500 rounded-full animate-pulse"
            ></div>
            <h3 class="font-orbitron text-primary-300 text-sm tracking-wider">
              LOCATION
            </h3>
          </div>
          <p class="text-primary-100 text-sm md:text-base pl-3">
            東京都港区海岸1-2-20<br />
            汐留ビルディング 3F
          </p>
        </div>

        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <div
              class="w-1 h-1 bg-primary-500 rounded-full animate-pulse"
            ></div>
            <h3 class="font-orbitron text-primary-300 text-sm tracking-wider">
              BUSINESS
            </h3>
          </div>
          <div class="text-primary-100 text-sm pl-3 space-y-1">
            <p>システム開発</p>
            <p>デジタルマーケティング</p>
          </div>
        </div>
      </div>

      <!-- ナビゲーション -->
      <div class="pt-4 border-t border-primary-500/20">
        <div
          class="flex flex-wrap gap-6 justify-center md:justify-start text-sm font-orbitron"
        >
          <NuxtLink
            to="/about"
            class="text-primary-200 hover:text-primary-400 transition-colors duration-300 relative group"
          >
            ABOUT US
            <div
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/service"
            class="text-primary-200 hover:text-primary-400 transition-colors duration-300 relative group"
          >
            SERVICE
            <div
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/company"
            class="text-primary-200 hover:text-primary-400 transition-colors duration-300 relative group"
          >
            COMPANY
            <div
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="text-primary-200 hover:text-primary-400 transition-colors duration-300 relative group"
          >
            CONTACT
            <div
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"
            ></div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- コピーライト -->
    <div
      class="relative border-t border-primary-500/20 bg-secondary-950/50 backdrop-blur-sm"
    >
      <div class="container mx-auto py-4 px-4 md:px-0">
        <div class="flex justify-center items-center">
          <p
            class="text-primary-300 text-sm font-orbitron tracking-wider text-center"
          >
            © 2023 Innovation Style., Ltd. <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
