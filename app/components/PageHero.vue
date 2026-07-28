<template>
  <section
    class="relative overflow-hidden border-b border-line"
    style="
      background: radial-gradient(
        circle,
        rgba(108, 106, 240, 0.18),
        transparent 65%
      );
    "
  >
    <div class="absolute inset-0 bg-dotgrid opacity-70"></div>

    <div
      class="relative mx-auto max-w-[1180px] px-8 pb-[60px] pt-[72px] max-nav:px-5"
    >
      <!-- breadcrumb -->
      <div class="font-mono text-[11px] tracking-[0.18em]">
        <template
          v-for="(crumb, i) in crumbsAll"
          :key="i"
        >
          <NuxtLink
            v-if="crumb.to"
            :to="crumb.to"
            class="transition-colors hover:text-accent text-faint-2"
          >
            {{ crumb.label }}
          </NuxtLink>
          <span
            v-else
            class="text-accent"
          >
            {{ crumb.label }}
          </span>
          <span
            v-if="i < crumbsAll.length - 1"
            class="px-2 text-faint-2"
            >/</span
          >
        </template>
      </div>
      <!-- english title -->
      <h1
        class="mt-[18px] whitespace-pre-line font-display text-[clamp(40px,7vw,64px)] font-semibold leading-[1.05] tracking-[-0.02em]"
      >
        {{ eng }}
      </h1>
      <!-- japanese subtitle -->
      <div class="mt-2.5 text-[16px] ext-steel">
        {{ subtitle }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Crumb {
  label: string;
  to?: string;
}

const props = withDefaults(
  defineProps<{
    /** 大きな英字タイトル（`\n` で改行可） */
    eng: string;
    /** 日本語サブタイトル */
    subtitle: string;
    /** ホームを除いたパンくず（最後の要素がカレント） */
    crumbs?: Crumb[];
  }>(),
  { crumbs: () => [], dark: false }
);

const crumbsAll = computed<Crumb[]>(() => [
  { label: "ホーム", to: "/" },
  ...props.crumbs,
]);
</script>
