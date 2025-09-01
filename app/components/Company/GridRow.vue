<template>
  <div class="grid grid-cols-5 items-center h-full">
    <div
      class="col-span-2 p-2 h-full w-full border-b border-gray-300 text-slate-500 font-medium"
    >
      <span class="flex items-center h-full"> {{ label }} </span>
    </div>
    <div
      class="col-span-3 p-2 h-full w-full border-b border-slate-400 text-slate-800"
    >
      <ul v-if="Array.isArray(value)">
        <li
          v-for="item in value"
          :key="item"
        >
          {{ item }}
        </li>
      </ul>
      <span v-else>
        <span v-html="value.replace(/\n/g, '<br />')" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  value: string | string[];
}

const props = defineProps<Props>();
</script>
