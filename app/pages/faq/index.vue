<template>
  <div>
    <PageHero
      :crumbs="[{ label: 'よくあるご質問' }]"
      eng="FAQ"
      subtitle="よくあるご質問"
    />

    <section class="bg-white">
      <div
        class="mx-auto max-w-[820px] px-8 py-[88px] max-nav:px-5 max-nav:py-16"
      >
        <div class="flex flex-col gap-3.5">
          <FaqAccordion
            v-for="faq in faqs"
            :key="faq.title"
            :title="faq.title"
            :content="faq.content"
          />
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <ContactCtaRow
      :secondary="{
        eyebrow: 'SERVICE — 事業内容',
        title: '私たちの提供するサービス',
        label: '事業内容を見る',
        to: '/service',
      }"
    />
  </div>
</template>

<script setup lang="ts">
const faqs = [
  {
    title: "開発期間はどの程度かかりますか？",
    content:
      "プロジェクトの規模や要件により異なりますので、お気軽にお問い合わせください。",
  },
  {
    title: "どのような技術スタックを使用していますか？",
    content:
      "最新の技術トレンドを取り入れつつ、安定性と保守性を重視した技術選定を行っています。",
  },
  {
    title: "保守・運用サポートは提供していますか？",
    content:
      "はい、システムの保守・運用サポートを提供しております。お客様のご要望に応じてカスタマイズを行っていますので、お気軽にお問い合わせください。",
  },
  {
    title: "見積もりや相談は無料ですか？",
    content:
      "はい、初回のご相談・お見積もりは無料で承っております。お客様のご要望やビジネス課題をお聞かせいただき、最適なソリューションをご提案いたします。オンライン・オフライン問わず対応可能ですので、お気軽にお問い合わせください。",
  },
];

useHead({
  title: "よくあるご質問 | Innovation Style",
  meta: [
    {
      name: "description",
      content:
        "Innovation Styleへのよくあるご質問と回答をまとめています。開発期間、技術スタック、保守・運用サポート、お見積もりについてご案内します。",
    },
  ],
});
</script>
