<template>
  <div class="overflow-hidden rounded-[6px] border border-line bg-white">
    <button
      type="button"
      class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left max-nav:px-5"
      :aria-expanded="isOpen"
      @click="isOpen = !isOpen"
    >
      <span class="flex gap-3 text-[15px] font-bold leading-[1.6]">
        <span class="font-display text-accent">Q</span>{{ title }}
      </span>
      <span
        class="inline-block flex-shrink-0 font-display text-[22px] text-accent transition-transform duration-200"
        :class="{ 'rotate-45': isOpen }"
        >+</span
      >
    </button>
    <Transition
      enter-active-class="transition-all duration-300 ease-out overflow-hidden"
      leave-active-class="transition-all duration-200 ease-in overflow-hidden"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-[400px]"
      leave-from-class="opacity-100 max-h-[400px]"
      leave-to-class="opacity-0 max-h-0"
    >
      <div
        v-show="isOpen"
        class="border-t border-line-soft bg-[#fbfbfc] px-6 py-5 max-nav:px-5"
      >
        <p class="flex gap-3 text-[14px] leading-[1.95] text-body">
          <span class="font-display text-faint-2">A</span>{{ content }}
        </p>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  content: string;
}>();

const isOpen = ref<boolean>(false);
</script>
