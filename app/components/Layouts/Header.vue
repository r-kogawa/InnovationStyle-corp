<template>
  <header
    class="sticky top-0 z-50 border-b border-line bg-surface/80 font-sans backdrop-blur-md"
  >
    <div
      class="mx-auto flex h-[66px] max-w-[1180px] items-center justify-between px-[22px]"
    >
      <!-- ロゴ -->
      <NuxtLink
        to="/"
        class="flex items-center gap-2.5"
      >
        <img
          src="~/assets/img/logo.png"
          alt="logo"
          class="w-8 h-8"
        />
        <span
          class="font-display text-[20px] font-semibold tracking-[-0.01em] text-ink"
        >
          Innovation Style
        </span>
      </NuxtLink>

      <!-- デスクトップナビ -->
      <nav class="hidden items-center gap-7 nav:flex">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="font-mono text-[11px] tracking-[0.14em] text-[#2a2c3c] transition-colors hover:text-accent"
        >
          {{ item.label }}
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="rounded-[3px] bg-ink px-[17px] py-2.5 font-mono text-[11px] tracking-[0.14em] text-white transition-colors hover:bg-accent"
        >
          CONTACT
        </NuxtLink>
      </nav>

      <!-- バーガー（モバイル） -->
      <button
        type="button"
        aria-label="menu"
        :aria-expanded="isMenuOpen"
        class="flex h-[42px] w-[42px] flex-col items-center justify-center gap-[5px] rounded-[4px] border border-[#d4d4dc] bg-white nav:hidden"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span
          class="block h-[1.5px] w-[18px] bg-ink transition-transform duration-300"
          :class="{ 'translate-y-[6.5px] rotate-45': isMenuOpen }"
        ></span>
        <span
          class="block h-[1.5px] w-[18px] bg-ink transition-opacity duration-200"
          :class="{ 'opacity-0': isMenuOpen }"
        ></span>
        <span
          class="block h-[1.5px] w-[18px] bg-ink transition-transform duration-300"
          :class="{ '-translate-y-[6.5px] -rotate-45': isMenuOpen }"
        ></span>
      </button>
    </div>

    <!-- モバイルメニュー -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMenuOpen"
        class="absolute inset-x-0 top-full z-40 border-t border-line bg-surface/95 shadow-[0_14px_30px_-16px_rgba(20,21,42,0.25)] backdrop-blur-md nav:hidden"
      >
        <div class="flex flex-col px-[22px] pb-[18px] pt-2">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="border-b border-line-soft py-3.5 font-mono text-[13px] tracking-[0.12em] text-[#2a2c3c]"
            @click="isMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="mt-3.5 rounded-[3px] bg-ink py-3.5 text-center font-mono text-[13px] tracking-[0.12em] text-white"
            @click="isMenuOpen = false"
          >
            CONTACT
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref<boolean>(false);

const navItems = [
  { label: "ABOUT US", to: "/about" },
  { label: "SERVICE", to: "/service" },
  { label: "COMPANY", to: "/company" },
  { label: "NEWS", to: "/news" },
  { label: "RECRUIT", to: "/recruit" },
];

// ルート遷移でモバイルメニューを閉じる
const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false;
  }
);
</script>
