<template>
  <nav
    aria-label="Breadcrumb"
    class="w-full"
  >
    <div class="max-w-screen-xl mx-auto px-4 py-3">
      <ol class="flex items-center space-x-2 text-sm">
        <li
          v-for="(item, index) in breadcrumbItems"
          :key="index"
          class="flex items-center"
        >
          <NuxtLink
            v-if="item.to"
            :to="item.to"
            class="text-primary-300 font-medium"
          >
            {{ item.label }}
          </NuxtLink>
          <span
            v-else
            class="text-primary-200 font-medium"
          >
            {{ item.label }}
          </span>
          <svg
            v-if="index < breadcrumbItems.length - 1"
            class="w-4 h-4 mx-2 text-primary-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </li>
      </ol>
    </div>
  </nav>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

const props = defineProps<Props>();

// ホームを常に最初に追加
const breadcrumbItems = computed(() => {
  return [{ label: "ホーム", to: "/" }, ...props.items];
});
</script>

<style scoped></style>
