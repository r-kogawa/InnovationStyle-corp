<template>
  <footer class="relative overflow-hidden bg-deep font-sans text-white">
    <!-- 装飾: ドットグリッド + グロー -->
    <div class="absolute inset-0 bg-dotgrid-dark opacity-60"></div>
    <div
      class="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px]"
      style="
        background: radial-gradient(
          circle,
          rgba(108, 106, 240, 0.22),
          transparent 65%
        );
      "
    ></div>

    <div
      class="relative mx-auto max-w-[1180px] px-8 pt-16 max-nav:px-[22px] max-nav:pt-12"
    >
      <div
        class="grid grid-cols-2 gap-x-6 gap-y-8 nav:grid-cols-[1.6fr_1fr_1fr_1fr] nav:gap-10"
      >
        <!-- ブランド -->
        <div class="col-span-2 nav:col-span-1">
          <NuxtLink
            to="/"
            class="flex items-center gap-2.5"
          >
            <img
              src="~/assets/img/white-logo.png"
              alt="logo"
              class="w-8 h-8 filter drop-shadow-lg"
            />
            <span
              class="font-display text-[20px] font-semibold tracking-[-0.01em] text-white"
            >
              Innovation Style
            </span>
          </NuxtLink>
          <p
            class="mt-[18px] max-w-[300px] text-[13px] leading-[1.9] text-[#9a9cb5]"
          >
            革新的な発想と先進技術の融合で、お客様のDX推進とビジネス成長を加速します。
          </p>
        </div>

        <!-- LOCATION -->
        <div>
          <div
            class="mb-4 font-mono text-[10px] tracking-[0.2em] text-accent-bright"
          >
            LOCATION
          </div>
          <p class="text-[12px] leading-[1.9] text-[#c3c5d6]">
            〒105-0022<br />
            東京都港区海岸1-2-20<br />
            汐留ビルディング 3F
          </p>
        </div>

        <!-- BUSINESS -->
        <div>
          <div
            class="mb-4 font-mono text-[10px] tracking-[0.2em] text-accent-bright"
          >
            BUSINESS
          </div>
          <p class="text-[12px] leading-[2.1] text-[#c3c5d6]">
            システム開発<br />
            デジタルマーケティング
          </p>
        </div>

        <!-- MENU -->
        <div>
          <div
            class="mb-4 font-mono text-[10px] tracking-[0.2em] text-accent-bright"
          >
            MENU
          </div>
          <div class="flex flex-col gap-[9px]">
            <NuxtLink
              v-for="item in menuItems"
              :key="item.to"
              :to="item.to"
              class="text-[12px] text-[#c3c5d6] transition-colors hover:text-white"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- ボトムバー -->
      <div
        class="mt-14 flex items-center justify-between border-t border-white/10 py-[22px] max-nav:flex-col max-nav:items-start max-nav:gap-3.5"
      >
        <div class="font-mono text-[10px] tracking-[0.08em] text-[#6f7186]">
          © 2023 Innovation Style., Ltd. All rights reserved.
        </div>
        <div class="font-mono text-[10px] tracking-[0.2em] text-[#6f7186]">
          INNOVATION &amp; TECHNOLOGY
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const menuItems = [
  { label: "ABOUT US", to: "/about" },
  { label: "SERVICE", to: "/service" },
  { label: "COMPANY", to: "/company" },
  { label: "NEWS", to: "/news" },
  { label: "RECRUIT", to: "/recruit" },
  { label: "CONTACT", to: "/contact" },
];
</script>
