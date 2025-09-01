<template>
  <label class="flex gap-2 items-center w-fit">
    <input
      v-model="model"
      type="checkbox"
      class="h-4 w-4"
      :required="required"
      :name="name"
      :value="value"
      :disabled="disabled"
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
  name?: string;
  disabled?: boolean;
  value: string | number | boolean | object;
}

defineProps<Props>();

const model = defineModel<any>();
</script>
