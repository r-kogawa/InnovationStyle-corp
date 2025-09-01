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
    <div class="flex items-end">
      <input
        v-model="model"
        :name="name"
        :max="props.max"
        :min="props.min"
        :required="required"
        :disabled="disabled"
        type="number"
        class="w-full border border-gray-300 rounded px-2 py-1 mt-2 text-right focus:outline-red-200"
        :class="[model! < 0 ? 'text-red-500' : 'text-gray-700', disabled ? 'bg-gray-200' : '',error != '' && error != null ? 'bg-red-200' : '']"
        @blur="IsError"
      />
      <span
        v-if="label_after"
        class="m-1"
      >
        {{ label_after }}
      </span>
    </div>
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
  max?: number;
  min?: number;
  label_after?: string;
  disabled?: boolean;
}

interface Emits {
  (e: "is-validation", error: boolean): void;
}

const emit = defineEmits<Emits>();
const props = defineProps<Props>();
const model = defineModel<number>();

watch(model, (value) => {
  if (props.min && value! < props.min!) {
    model.value = props.min!;
  } else if (props.max && value! > props.max!) {
    model.value = props.max!;
  } else if (!model.value) {
    model.value = 0;
  } else {
    model.value = Number(value);
  }
});

const error = ref<string | null>(null);

watch(error, (value) => {
  emit("is-validation", value === "");
});

const IsError = () => {
  if (props.required == true) {
    if (!model.value || model.value === null) {
      error.value = `${props.title}は必須項目です`;
    } else {
      error.value = "";
    }
  }
};
</script>
