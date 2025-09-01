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
      v-model="displayDate"
      :name="name"
      :required="required"
      :placeholder="placeholder"
      :min="minDate"
      :max="maxDate"
      type="date"
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
  minDate?: Date;
  maxDate?: Date;
}

interface Emits {
  (e: "is-validation", error: boolean): void;
}

const emit = defineEmits<Emits>();
const props = defineProps<Props>();

const model = defineModel<Date>();
const displayDate = ref<string>("");

displayDate.value = model.value!.toISOString().split("T")[0] || "";

const error = ref<string | null>(null);

watch(error, (value) => {
  emit("is-validation", value === "");
});

watch(
  () => displayDate.value,
  (value) => {
    console.log(value);
    model.value = new Date(value);
  }
);

const minDate = computed(() => {
  if (props.minDate) {
    return props.minDate?.toISOString().split("T")[0];
  } else {
    return "";
  }
});

const maxDate = computed(() => {
  if (props.maxDate) {
    return props.maxDate?.toISOString().split("T")[0];
  } else {
    return "";
  }
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
