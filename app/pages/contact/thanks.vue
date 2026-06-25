<template>
  <div>
    <PageHero
      :crumbs="[{ label: 'お問い合わせ', to: '/contact' }, { label: '送信完了' }]"
      eng="THANK YOU"
      subtitle="お問い合わせ完了"
    />

    <section class="bg-white">
      <div class="mx-auto max-w-[820px] px-8 py-24 max-nav:px-5 max-nav:py-16">
        <div
          class="rounded-[6px] border border-line bg-surface px-10 py-[60px] text-center max-nav:px-6"
        >
          <div
            class="mx-auto mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-accent text-[26px] text-white"
          >
            ✓
          </div>
          <div class="text-[22px] font-bold">送信が完了しました</div>
          <p class="mt-3 text-[14px] leading-[1.9] text-body">
            お問い合わせありがとうございます。<br />担当者が内容を確認次第、2営業日以内にご連絡させていただきます。
          </p>
          <NuxtLink
            to="/"
            class="mt-8 inline-block rounded-[3px] bg-ink px-[34px] py-4 text-[14px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent"
          >
            トップページへ戻る →
          </NuxtLink>
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
