<template>
  <section class="grid grid-cols-1 border-t border-line-soft nav:grid-cols-2">
    <!-- 左パネル: ページ固有の動線（淡いアクセント） -->
    <div
      class="group relative flex flex-col justify-between gap-10 overflow-hidden border-r border-accent/15 px-[8%] py-[92px] max-nav:border-b max-nav:border-r-0 max-nav:px-7 max-nav:py-[64px]"
      style="
        background: linear-gradient(
          145deg,
          #f4f4fc 0%,
          #ecedf8 52%,
          #e3e4f4 100%
        );
      "
    >
      <!-- texture -->
      <div
        class="pointer-events-none absolute inset-0 bg-dotgrid opacity-70"
      ></div>
      <!-- glow -->
      <div
        class="pointer-events-none absolute -right-12 -top-24 h-[320px] w-[320px]"
        style="
          background: radial-gradient(
            circle,
            rgba(108, 106, 240, 0.16),
            transparent 65%
          );
        "
      ></div>
      <!-- watermark -->
      <div
        class="pointer-events-none absolute -bottom-7 right-6 select-none font-display text-[124px] font-bold leading-none text-accent/[0.07] max-nav:hidden"
      >
        {{ watermark(secondary.eyebrow) }}
      </div>
      <!-- corner frame -->
      <div
        class="pointer-events-none absolute left-6 top-6 h-9 w-9 border-l border-t border-accent/30"
      ></div>

      <div class="relative">
        <div
          class="flex items-center gap-3 font-mono text-[11px] tracking-[0.24em] text-accent"
        >
          <span class="h-px w-7 bg-accent/40"></span>{{ secondary.eyebrow }}
        </div>
        <div
          class="mt-5 text-[clamp(22px,2.6vw,28px)] font-bold leading-[1.5] text-ink"
        >
          {{ secondary.title }}
        </div>
      </div>
      <NuxtLink
        :to="secondary.to"
        class="relative inline-flex w-fit shrink-0 items-center gap-2.5 whitespace-nowrap rounded-[4px] bg-accent px-8 py-[17px] text-[14px] font-semibold text-white shadow-[0_12px_30px_-12px_rgba(71,68,184,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-bright"
      >
        {{ secondary.label }}
        <span
          class="font-display transition-transform duration-200 group-hover:translate-x-1"
          >→</span
        >
      </NuxtLink>
    </div>

    <!-- 右パネル: お問い合わせ（白） -->
    <div
      class="group relative flex flex-col justify-between gap-10 overflow-hidden bg-white px-[8%] py-[92px] max-nav:px-7 max-nav:py-[64px]"
    >
      <!-- texture -->
      <div
        class="pointer-events-none absolute inset-0 bg-dotgrid opacity-50"
      ></div>
      <!-- glow -->
      <div
        class="pointer-events-none absolute -left-16 bottom-[-90px] h-[340px] w-[340px]"
        style="
          background: radial-gradient(
            circle,
            rgba(108, 106, 240, 0.12),
            transparent 65%
          );
        "
      ></div>
      <!-- watermark -->
      <div
        class="pointer-events-none absolute -bottom-8 right-6 select-none font-display text-[124px] font-bold leading-none text-ink/[0.04] max-nav:hidden"
      >
        {{ watermark(primary.eyebrow) }}
      </div>
      <!-- corner frame -->
      <div
        class="pointer-events-none absolute left-6 top-6 h-9 w-9 border-l border-t border-line-strong"
      ></div>

      <div class="relative">
        <div
          class="flex items-center gap-3 font-mono text-[11px] tracking-[0.24em] text-accent"
        >
          <span class="h-px w-7 bg-accent/50"></span>{{ primary.eyebrow }}
        </div>
        <div
          class="mt-5 text-[clamp(24px,2.8vw,30px)] font-bold leading-[1.45] text-ink"
        >
          {{ primary.title }}
        </div>
      </div>
      <NuxtLink
        :to="primary.to"
        class="relative inline-flex w-fit shrink-0 items-center gap-2.5 whitespace-nowrap rounded-[4px] bg-ink px-8 py-[17px] text-[14px] font-semibold text-white shadow-[0_12px_30px_-12px_rgba(20,21,42,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent"
      >
        {{ primary.label }}
        <span
          class="font-display transition-transform duration-200 group-hover:translate-x-1"
          >→</span
        >
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
interface CtaPanel {
  /** ラベル（`英字 — 日本語` 形式。英字部分は背景ウォーターマークに流用） */
  eyebrow: string;
  /** 見出し */
  title: string;
  /** ボタン文言（末尾の矢印はコンポーネント側で付与するため不要） */
  label: string;
  /** リンク先 */
  to: string;
}

withDefaults(
  defineProps<{
    /** 左パネル：各ページ固有の動線 */
    secondary: CtaPanel;
    /** 右パネル：お問い合わせ（既定値あり） */
    primary?: CtaPanel;
  }>(),
  {
    primary: () => ({
      eyebrow: "CONTACT — お問い合わせ",
      title: "プロジェクトのご相談はこちら",
      label: "お問い合わせ",
      to: "/contact",
    }),
  },
);

/** eyebrow（`SERVICE — 事業内容`）の先頭英字を背景ウォーターマーク用に抽出 */
const watermark = (eyebrow: string): string =>
  (eyebrow.split("—")[0] ?? "").trim();
</script>
