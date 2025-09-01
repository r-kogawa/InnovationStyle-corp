<template>
  <label
    class="flex gap-2 items-center w-fit"
    :class="[font === 'bold' ? ' font-semibold' : '']"
  >
    <input
      v-model="model"
      type="radio"
      class="h-4 w-4"
      :required="required"
      :name="name"
      :value="value"
    />
    <span class="text-gray-700 font-medium text-sm">
      {{ title }}
    </span>
  </label>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  required?: boolean;
  disabled?: boolean;
  name?: string;
  font?: "bold" | "normal";
  value: string | number | boolean | object;
}

const props = defineProps<Props>();
const model = defineModel<any>();
</script>
