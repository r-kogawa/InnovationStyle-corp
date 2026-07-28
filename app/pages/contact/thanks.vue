<template>
  <div>
    <section class="bg-surface">
      <div class="mx-auto max-w-[760px] px-8 py-24 max-nav:px-5 max-nav:py-16">
        <div
          class="relative overflow-hidden rounded-[6px] border border-line bg-white px-10 py-[68px] text-center max-nav:px-6 max-nav:py-[52px]"
        >
          <!-- texture -->
          <div
            class="pointer-events-none absolute inset-0 bg-dotgrid opacity-50"
          ></div>
          <!-- glow（チェックの背後に淡いアクセント光） -->
          <div
            class="pointer-events-none absolute left-1/2 top-[-60px] h-[320px] w-[320px] -translate-x-1/2"
            style="
              background: radial-gradient(
                circle,
                rgba(108, 106, 240, 0.16),
                transparent 65%
              );
            "
          ></div>
          <!-- corner frame -->
          <div
            class="pointer-events-none absolute left-6 top-6 h-9 w-9 border-l border-t border-line-strong"
          ></div>

          <div class="relative">
            <!-- eyebrow -->
            <div
              class="mt-6 flex items-center justify-center gap-3 font-mono text-[11px] tracking-[0.24em] text-accent"
            >
              <span class="h-px w-7 bg-accent/40"></span>MESSAGE SENT<span
                class="h-px w-7 bg-accent/40"
              ></span>
            </div>
            <div class="mt-4 text-[24px] font-bold text-ink">
              送信が完了しました
            </div>
            <p
              class="mx-auto mt-3.5 max-w-[460px] text-[14px] leading-[2] text-body"
            >
              お問い合わせありがとうございます。<br />担当者が内容を確認次第、ご連絡させていただきます。
            </p>

            <!-- actions -->
            <div
              class="mt-9 flex flex-wrap items-center justify-center gap-3.5"
            >
              <NuxtLink
                to="/"
                class="group/btn relative inline-flex items-center gap-2.5 whitespace-nowrap rounded-[4px] bg-ink px-8 py-[17px] text-[14px] font-semibold text-white shadow-[0_12px_30px_-12px_rgba(20,21,42,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent"
              >
                トップページへ戻る
                <span
                  class="font-display transition-transform duration-200 group-hover/btn:translate-x-1"
                  >→</span
                >
              </NuxtLink>
              <NuxtLink
                to="/service"
                class="group/btn relative inline-flex items-center gap-2.5 whitespace-nowrap rounded-[4px] border border-line-strong px-8 py-[17px] text-[14px] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                サービスを見る
                <span
                  class="font-display transition-transform duration-200 group-hover/btn:translate-x-1"
                  >→</span
                >
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "お問い合わせ完了 | Innovation Style",
  meta: [
    { name: "description", content: "お問い合わせありがとうございます" },
    { name: "robots", content: "noindex,nofollow" },
  ],
});
</script>
