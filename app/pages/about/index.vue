<template>
  <div>
    <PageHero
      :crumbs="[{ label: '私たちについて' }]"
      eng="ABOUT US"
      subtitle="私たちについて"
    />

    <!-- ===== MISSION ===== -->
    <section class="bg-white">
      <div
        v-reveal
        class="reveal mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-12 px-8 py-[104px] max-nav:px-5 max-nav:py-16 nav:grid-cols-[0.7fr_1.3fr]"
      >
        <div class="font-mono text-[11px] tracking-[0.22em] text-faint-2">
          MISSION
        </div>
        <div>
          <p
            class="m-0 text-[clamp(26px,4vw,38px)] font-bold leading-[1.5] tracking-[0.01em]"
          >
            革新的な発想と<br />先進技術の融合で、<br /><span class="text-accent"
              >DXの推進</span
            >を実現する。
          </p>
          <p class="mt-[30px] max-w-[620px] text-[15px] leading-[2.1] text-body">
            Innovation
            Styleは、システム開発とデジタルマーケティングという2つの専門領域を掛け合わせ、企業のデジタルトランスフォーメーションを支援するテクノロジーカンパニーです。最先端の技術力と卓越したシステム設計、そしてデータ駆動型のマーケティングで、企画から実装・運用まで一気通貫に伴走します。
          </p>
        </div>
      </div>
    </section>

    <!-- ===== TWO PILLARS ===== -->
    <section class="bg-surface">
      <div
        v-reveal
        class="reveal mx-auto max-w-[1180px] px-8 py-24 max-nav:px-5 max-nav:py-16"
      >
        <div class="mb-9 font-mono text-[11px] tracking-[0.22em] text-faint-2">
          TWO PILLARS
        </div>
        <div class="grid grid-cols-1 gap-6 nav:grid-cols-2">
          <!-- 01 system -->
          <div
            class="rounded-[6px] border border-line bg-white p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(20,21,42,0.09)]"
          >
            <div class="font-display text-[13px] font-semibold text-accent">
              01 / SYSTEM
            </div>
            <div class="mt-3.5 text-[22px] font-bold">テクノロジー</div>
            <p class="mt-3.5 text-[13px] leading-[1.95] text-body">
              Web・モバイルアプリ開発からAI導入、API連携、クラウド構築まで。事業の根幹を支えるシステムを、設計から運用まで一貫して構築します。
            </p>
          </div>
          <!-- 02 marketing -->
          <div
            class="relative overflow-hidden rounded-[6px] border border-accent/20 bg-accent/[0.05] p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(71,68,184,0.12)]"
          >
            <div
              class="pointer-events-none absolute -right-16 -top-16 h-60 w-60"
              style="
                background: radial-gradient(
                  circle,
                  rgba(108, 106, 240, 0.12),
                  transparent 65%
                );
              "
            ></div>
            <div class="relative">
              <div class="font-display text-[13px] font-semibold text-accent">
                02 / MARKETING
              </div>
              <div class="mt-3.5 text-[22px] font-bold">マーケティング</div>
              <p class="mt-3.5 text-[13px] leading-[1.95] text-body">
                広告運用・SEO・コンテンツ制作まで、データ駆動型のアプローチで成果を最大化。作ったシステムを「使われる」状態まで届けます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== STRENGTHS ===== -->
    <section class="bg-white">
      <div
        v-reveal
        class="reveal mx-auto max-w-[1180px] px-8 py-24 max-nav:px-5 max-nav:py-16"
      >
        <div class="mb-10 flex items-baseline gap-4">
          <div class="font-mono text-[11px] tracking-[0.22em] text-faint-2">
            STRENGTHS
          </div>
          <div class="text-[26px] font-bold">選ばれる理由</div>
        </div>
        <div class="grid grid-cols-1 border-t border-line nav:grid-cols-3">
          <div
            v-for="(s, i) in strengths"
            :key="s.no"
            class="py-[34px]"
            :class="
              i < strengths.length - 1
                ? 'border-line-soft max-nav:border-b nav:border-r nav:pr-7'
                : 'nav:pl-7'
            "
          >
            <div class="font-display text-[40px] font-semibold text-[#d6d6e0]">
              {{ s.no }}
            </div>
            <div class="mt-3.5 text-[18px] font-bold">{{ s.title }}</div>
            <p class="mt-2.5 text-[13px] leading-[1.9] text-body">
              {{ s.desc }}
            </p>
          </div>
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
const strengths = [
  {
    no: "01",
    title: "開発×集客の一気通貫",
    desc: "作って終わりではなく、成果が出るまで。開発とマーケティングを同じチームで担います。",
  },
  {
    no: "02",
    title: "先進技術への対応力",
    desc: "AI・クラウド・各種APIなど、最新技術を実装に落とし込み、事業価値へと変換します。",
  },
  {
    no: "03",
    title: "伴走するプロセス",
    desc: "要件定義から納品・保守まで5つのステップで、透明性のある開発プロセスをご提供します。",
  },
];

useHead({
  title: "私たちについて | Innovation Style - 経営理念・ミッション",
  meta: [
    {
      name: "description",
      content:
        "Innovation Styleは革新的な発想と先進技術を融合させ、未来を切り拓くテクノロジー＆デザインのプラットフォームです。新規事業創出やDX実現において企画から実行まで一気通貫で支援。スピードある実行で日本発のグローバルイノベーションを牽引し、お客様と共に新たな価値を創出します。",
    },
  ],
});
</script>
