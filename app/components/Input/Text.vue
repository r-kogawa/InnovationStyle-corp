<template>
  <label>
    <p class="text-gray-700 font-medium text-sm">
      <span>
        {{ title }}
      </span>
      <span
        v-if="required"
        class="text-red-500"
      >
        *
      </span>
    </p>
    <input
      v-model="model"
      :name="name"
      :required="required"
      :placeholder="placeholder"
      :type="type || 'text'"
      :disabled="disabled"
      class="w-full border border-gray-300 rounded px-2 py-1 mt-2 focus:outline-red-200"
      :class="[
        disabled ? 'bg-gray-200' : '',
        error != '' && error != null ? 'bg-red-200' : '',
      ]"
      @blur="IsError"
    />
    <p
      v-if="error != '' && error != null"
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
  name?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  type?: "text" | "email" | "tel" | "password";
}

interface Emits {
  (e: "is-validation", error: boolean): void;
}

const emit = defineEmits<Emits>();
const props = defineProps<Props>();
const model = defineModel<string>();

const error = ref<string | null>(null);

watch(error, (value) => {
  emit("is-validation", value === "");
});

const IsError = () => {
  if (props.required == true) {
    if (model.value === "" || !model.value || model.value === null) {
      error.value = `${props.title}は必須項目です`;
      return;
    }
  }

  // メールアドレスの形式チェック
  if (props.type === "email" && model.value) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(model.value)) {
      error.value = "メールアドレスの形式が正しくありません";
      return;
    }
  }

  if (props.type === "tel" && model.value) {
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(model.value)) {
      error.value = "電話番号の形式が正しくありません";
      return;
    }
  }
  error.value = "";
};
</script>
