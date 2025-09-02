<template>
  <label class="flex flex-col gap-2">
    <p class="text-gray-700 font-medium text-sm">
      <span class="font-orbitron">
        {{ title }}
      </span>
      <span
        v-if="required"
        class="text-red-500"
      >
        *
      </span>
    </p>
    <textarea
      v-model="model"
      class="border border-gray-300 w-full px-2 py-1 focus:outline-slate-400"
      :class="[
        disabled ? 'bg-gray-200' : '',
        error != null ? 'bg-red-200' : '',
      ]"
      :rows="rows"
      :required="required"
      :name="name"
      :disabled="disabled"
      @blur="IsError"
    />
    <p
      v-if="error != null"
      class="text-red-500 text-sm"
      name="error"
    >
      {{ error }}
    </p>
  </label>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  rows?: number;
  required?: boolean;
  name?: string;
  disabled?: boolean;
  minLength?: number;
}

interface Emits {
  (e: "is-error", error: boolean): void;
}

const emit = defineEmits<Emits>();
const props = defineProps<Props>();
const model = defineModel<string>();

const error = ref<string | null>(null);

watch(error, (value) => {
  emit("is-error", value != null);
});

const IsError = () => {
  if (
    props.required == true &&
    (model.value === "" || !model.value || model.value === null)
  ) {
    error.value = `${props.title}は必須項目です`;
  } else if (
    props.minLength &&
    model.value &&
    model.value.length < props.minLength
  ) {
    error.value = `${props.title}は${props.minLength}文字以上で入力してください`;
  } else {
    error.value = null;
  }
};
</script>
