<template>
  <section>
    <div class="w-full h-40 md:h-60 bg-gray-100">
      <div class="h-full">
        <div class="flex flex-col gap-2 items-center justify-center h-full">
          <h1 class="text-3xl font-orbitron">SERVICE</h1>
          <p class="text-xl text-gray-500">事業内容</p>
        </div>
      </div>
    </div>
    <div class="py-10 md:py-24"></div>
    <div class="w-full h-32 md:h-48 bg-gray-100 grid grid-cols-2 mt-4 md:mt-20">
      <NuxtLink
        to="/about"
        class="bg-slate-400 flex items-center justify-center text-white"
      >
        <span class="text-xl md:text-2xl"> 会社概要 </span>
      </NuxtLink>
      <NuxtLink
        to="/contact"
        class="bg-gray-500 flex items-center justify-center text-white"
      >
        <span class="text-xl md:text-2xl"> お問いわせ </span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
