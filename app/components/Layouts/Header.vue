<template>
  <header
    class="bg-gradient-to-r from-slate-100 to-slate-200 border-b border-slate-300 shadow-sm"
  >
    <div class="container mx-auto py-6">
      <div class="flex justify-between items-center">
        <NuxtLink
          class="flex gap-4 items-center"
          to="/"
        >
          <img
            src="~/assets/img/logo.png"
            alt="logo"
            class="w-10 h-10"
          />
          <span class="text-2xl font-bold">Innovation Style</span>
        </NuxtLink>
        <div class="flex gap-10 items-center text-xl text-slate-700">
          <NuxtLink to="/">経営理念</NuxtLink>
          <NuxtLink to="/about">事業内容</NuxtLink>
          <NuxtLink to="/company">会社概要</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
