<template>
  <div>
    <PageHero
      :crumbs="[{ label: '事業内容' }]"
      eng="SERVICE"
      subtitle="事業内容"
    />

    <!-- ===== 01 SYSTEM DEVELOPMENT ===== -->
    <section class="bg-white">
      <div
        v-reveal
        class="reveal mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 px-8 py-24 max-nav:px-5 max-nav:py-16 nav:grid-cols-2"
      >
        <div>
          <div class="flex items-baseline gap-3.5">
            <span
              class="font-display text-[52px] font-semibold leading-none text-[#d6d6e0]"
              >01</span
            >
            <div>
              <div class="text-[28px] font-bold">システム開発</div>
              <div
                class="mt-1 font-mono text-[10px] tracking-[0.16em] text-faint-2"
              >
                SYSTEM DEVELOPMENT
              </div>
            </div>
          </div>
          <div
            class="mt-6 font-display text-[18px] font-medium tracking-[-0.01em] text-accent"
          >
            "未来を形作るシステム"
          </div>
          <p class="mt-3.5 text-[14px] leading-[2] text-body">
            最先端の技術力と卓越したシステム設計により、お客様のデジタルトランスフォーメーションを実現します。
          </p>
          <div class="mt-7 border-t border-line-soft">
            <div
              v-for="item in systemList"
              :key="item.no"
              class="flex gap-3.5 border-b border-line-soft py-4 text-[14px]"
            >
              <span class="font-display text-accent">{{ item.no }}</span>
              <span>{{ item.text }}</span>
            </div>
          </div>
          <NuxtLink
            to="/service/system"
            class="group mt-[26px] inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.1em] text-accent"
          >
            システム開発実績を見る
            <span class="transition-transform duration-200 group-hover:translate-x-1.5"
              >→</span
            >
          </NuxtLink>
        </div>
        <div class="relative aspect-[4/5]">
          <div
            class="absolute -left-2.5 -top-2.5 h-[74%] w-[80%] rounded-[5px] bg-accent"
          ></div>
          <div
            class="absolute inset-0 overflow-hidden rounded-[5px] border border-line-strong bg-white"
          >
            <img
              src="~/assets/img/service/system-development.png"
              alt="システム開発"
              class="h-full w-full object-contain p-6"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 02 MARKETING ===== -->
    <section class="relative overflow-hidden border-y border-line bg-surface">
      <div class="absolute inset-0 bg-dotgrid opacity-70"></div>
      <div
        class="pointer-events-none absolute -bottom-[12%] left-[6%] h-[460px] w-[460px]"
        style="
          background: radial-gradient(
            circle,
            rgba(108, 106, 240, 0.1),
            transparent 65%
          );
        "
      ></div>
      <div
        v-reveal
        class="reveal relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 px-8 py-24 max-nav:px-5 max-nav:py-16 nav:grid-cols-2"
      >
        <div class="relative aspect-[4/5] max-nav:order-2 nav:order-1">
          <div
            class="absolute -bottom-2.5 -right-2.5 h-[74%] w-[80%] rounded-[5px] bg-accent"
          ></div>
          <div
            class="absolute inset-0 overflow-hidden rounded-[5px] border border-line-strong bg-white"
          >
            <img
              src="~/assets/img/service/ai-marketing.png"
              alt="マーケティング"
              class="h-full w-full object-contain p-6"
            />
          </div>
        </div>
        <div class="max-nav:order-1 nav:order-2">
          <div class="flex items-baseline gap-3.5">
            <span
              class="font-display text-[52px] font-semibold leading-none text-[#d6d6e0]"
              >02</span
            >
            <div>
              <div class="text-[28px] font-bold">マーケティング</div>
              <div
                class="mt-1 font-mono text-[10px] tracking-[0.16em] text-faint-2"
              >
                MARKETING
              </div>
            </div>
          </div>
          <div
            class="mt-6 font-display text-[18px] font-medium tracking-[-0.01em] text-accent"
          >
            "データ駆動型マーケティング"
          </div>
          <p class="mt-3.5 text-[14px] leading-[2] text-body">
            マーケティングの専門家として、データ駆動型のアプローチでお客様のビジネス成長をサポートします。
          </p>
          <div class="mt-7 border-t border-line-soft">
            <div
              v-for="item in marketingList"
              :key="item.no"
              class="flex gap-3.5 border-b border-line-soft py-4 text-[14px]"
            >
              <span class="font-display text-accent">{{ item.no }}</span>
              <span>{{ item.text }}</span>
            </div>
          </div>
          <div class="mt-[26px]">
            <div
              class="mb-3 font-mono text-[10px] tracking-[0.16em] text-faint-2"
            >
              実績のあるプラットフォーム
            </div>
            <div class="flex flex-wrap gap-2.5">
              <span
                v-for="p in platforms"
                :key="p"
                class="rounded-[3px] border border-line-strong px-3.5 py-2 font-mono text-[11px] text-steel"
              >
                {{ p }}
              </span>
            </div>
            <NuxtLink
              to="/service/marketing"
              class="group mt-[22px] inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.1em] text-accent"
            >
              マーケティング実績を見る
              <span
                class="transition-transform duration-200 group-hover:translate-x-1.5"
                >→</span
              >
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== DEVELOPMENT FLOW ===== -->
    <section class="bg-white">
      <div
        v-reveal
        class="reveal mx-auto max-w-[1180px] px-8 py-24 max-nav:px-5 max-nav:py-16"
      >
        <div class="font-mono text-[11px] tracking-[0.22em] text-faint-2">
          DEVELOPMENT FLOW
        </div>
        <div class="mt-3.5 text-[30px] font-bold">信頼される開発プロセス</div>
        <p class="mt-4 max-w-[600px] text-[14px] leading-[1.9] text-body">
          カスタムソフトウェア開発、ウェブアプリ、モバイルアプリ開発において、最先端の技術力と卓越したユーザー体験を提供します。
        </p>
        <div
          class="mt-12 grid grid-cols-1 gap-[18px] min-[521px]:grid-cols-2 nav:grid-cols-5"
        >
          <div
            v-for="(step, i) in flow"
            :key="step.no"
            class="pt-[18px]"
            :class="
              i === 0 ? 'border-t-2 border-accent' : 'border-t-2 border-line'
            "
          >
            <div
              class="font-display text-[30px] font-semibold"
              :class="i === 0 ? 'text-accent' : 'text-[#d6d6e0]'"
            >
              {{ step.no }}
            </div>
            <div class="mt-2 text-[14px] font-bold">{{ step.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <ContactCtaRow
      :secondary="{
        eyebrow: 'COMPANY — 会社概要',
        title: '会社情報はこちら',
        label: '会社概要を見る',
        to: '/company',
      }"
    />
  </div>
</template>

<script setup lang="ts">
const systemList = [
  { no: "01", text: "Web・モバイルアプリケーション開発" },
  { no: "02", text: "AI導入によるインテリジェントなシステム構築" },
  { no: "03", text: "外部API連携によるシステム拡張" },
  { no: "04", text: "クラウドサービスとの連携開発" },
];

const marketingList = [
  { no: "01", text: "リスティング広告による検索連動型の効果的な集客" },
  { no: "02", text: "SNS広告によるプラットフォーム特性を活かした運用" },
  { no: "03", text: "SEO対策による持続的な集客力向上" },
  { no: "04", text: "価値あるコンテンツ制作によるエンゲージメント向上" },
];

const platforms = ["Google", "Facebook", "Instagram", "X", "TikTok"];

const flow = [
  { no: "01", label: "要件定義・企画" },
  { no: "02", label: "デザイン・設計" },
  { no: "03", label: "開発・実装" },
  { no: "04", label: "テスト・品質保証" },
  { no: "05", label: "納品・サポート" },
];

useHead({
  title: "事業内容 | Innovation Style - システム開発・デジタルマーケティング",
  meta: [
    {
      name: "description",
      content:
        "Innovation Styleの事業内容をご紹介。Web・モバイルアプリ開発、AI導入支援、クラウド連携などのシステム開発から、リスティング広告、SNS広告運用、SEO対策、コンテンツマーケティングまで。要件定義から納品・保守まで一貫したサポートで、お客様のDX実現とビジネス成長を加速します。",
    },
  ],
});
</script>
