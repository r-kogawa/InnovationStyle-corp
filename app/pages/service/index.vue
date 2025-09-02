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
    <div class="w-full mt-4 md:mt-20">
      <GridLinks :links="gridLinks" />
    </div>
  </article>
</template>

<script setup lang="ts">
import earthBg from "~/assets/img/background/earth.png";
import networkBg from "~/assets/img/illust/network.png";

const gridLinks = [
  {
    to: "/about",
    image: earthBg,
    title: "COMPANY",
    description: "会社概要",
  },
  {
    to: "/contact",
    image: networkBg,
    title: "CONTACT",
    description: "お問いわせ",
  },
];
</script>
