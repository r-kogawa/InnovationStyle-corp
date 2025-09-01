<template>
  <div class="border-b border-gray-200 transition-all duration-300">
    <button
      @click="isOpen = !isOpen"
      class="w-full px-6 md:px-8 py-4 text-left flex items-center justify-between"
    >
      <h3 class="text-md md:text-lg font-medium text-slate-700 pr-4">
        {{ title }}
      </h3>
      <div class="flex-shrink-0">
        <svg
          :class="{ 'rotate-180': isOpen }"
          class="w-5 h-5 text-gray-500 transform transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </button>
    <div
      v-show="isOpen"
      class="px-6 md:px-8 pb-6"
    >
      <p class="text-slate-700 leading-relaxed">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  content: string;
}>();

const isOpen = ref<boolean>(false);
</script>
