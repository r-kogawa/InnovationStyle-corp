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
    <select
      v-model="model"
      class="px-2 py-1 mt-2 focus:outline-red-200"
      :class="[
        !width || width === 'full' ? 'w-full' : 'w-fit',
        !type || type == 'form'
          ? 'border border-gray-300 rounded'
          : 'border-b-2 border-red-300',
        disabled ? 'bg-gray-200' : '',
        error != '' && error != null ? 'bg-red-200' : '',
      ]"
      :disabled="disabled"
      :name="name"
      @blur="IsError"
    >
      <option
        v-for="data in [{ text: '選択してください', value: '' }, ...list]"
        :value="data.value"
        :disabled="data.value === ''"
      >
        {{ data.text }}
      </option>
    </select>
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
  title?: string;
  required?: boolean;
  name?: string;
  list: {
    value: string | number | any;
    text: string;
    selected?: boolean;
  }[];
  width?: "fit" | "full";
  type?: "form" | "search";
  disabled?: boolean;
}

interface Emits {
  (e: "is-validation", error: boolean): void;
}

const emit = defineEmits<Emits>();
const props = defineProps<Props>();
const model = defineModel<string | number | any>();

const error = ref<string | null>(null);

watch(error, (value) => {
  emit("is-validation", value === "");
});

const list_value = computed(() => {
  return props.list.map((data) => data.value);
});

const IsError = () => {
  if (props.required) {
    if (!list_value.value.includes(model.value)) {
      error.value = `${props.title}は必須項目です`;
    } else {
      error.value = "";
    }
  }
};
</script>
