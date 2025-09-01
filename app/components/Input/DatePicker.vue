<template>
  <div class="flex flex-col gap-2 text-gray-700 font-semibold">
    <p>
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
    <VueDatePicker
      v-model="model"
      :format="format"
      :model-type="model_type"
      locale="ja"
      week-start="0"
      :month-picker="month"
      :min-date="min_date"
      :auto-apply="true"
      :no-today="true"
      :day-class="getClassDate"
      :name="name"
      :dark="true"
      :disabled="disabled"
    />
  </div>
</template>

<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

interface Props {
  title: string;
  name?: string;
  required?: boolean;
  min_date?: string;
  max_date?: string;
  month?: boolean;
  format?: string;
  model_type?: string;
  disabled?: boolean;
}

const props = defineProps<Props>();
// const emit = defineEmits(["on-change"]);
const model = defineModel<string | Date>();

const getClassDate = (date: any) => {
  const weekDay = new Date(date).getDay();
  if (weekDay == 6) {
    return "saturday";
  }
  if (weekDay == 0) {
    return "sunday";
  }
  return "";
};
</script>

<style>
.saturday {
  color: #0000ff;
}
.sunday {
  color: #ff0000;
}

.dp__theme_dark {
  --dp-background-color: rgb(254, 254, 255);
  --dp-text-color: rgb(55, 65, 81);
  --dp-hover-color: #484848;
  --dp-hover-text-color: #fff;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: #eca3a3;
  --dp-primary-disabled-color: #61a8ea;
  --dp-primary-text-color: #fff;
  --dp-secondary-color: #a9a9a9;
  --dp-border-color: rgb(209, 213, 219);
  --dp-menu-border-color: #2d2d2d;
  --dp-border-color-hover: #aaaeb7;
  --dp-border-color-focus: #aaaeb7;
  --dp-disabled-color: rgb(209, 213, 219);
  --dp-disabled-color-text: #d0d0d0;
  --dp-scroll-bar-background: #212121;
  --dp-scroll-bar-color: #484848;
  --dp-success-color: #00701a;
  --dp-success-color-disabled: #428f59;
  --dp-icon-color: #959595;
  --dp-danger-color: #e53935;
  --dp-marker-color: #e53935;
  --dp-tooltip-color: #3e3e3e;
  --dp-highlight-color: rgb(0 92 178 / 20%);
  --dp-range-between-dates-background-color: var(--dp-hover-color, #484848);
  --dp-range-between-dates-text-color: var(--dp-hover-text-color, #fff);
  --dp-range-between-border-color: var(--dp-hover-color, #fff);
}
</style>
