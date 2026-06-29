<template>
  <div>
    <PageHero
      :crumbs="[
        { label: '事業内容', to: '/service' },
        { label: 'システム開発実績' },
      ]"
      :eng="'SYSTEM\nDEVELOPMENT'"
      subtitle="システム開発実績"
    />

    <!-- ===== INTRO ===== -->
    <section class="bg-white">
      <div class="mx-auto max-w-[1180px] px-8 pt-[72px] max-nav:px-5">
        <div class="font-mono text-[11px] tracking-[0.22em] text-faint-2">
          CASE STUDIES
        </div>
        <div class="mt-3 max-w-[680px] text-[26px] font-bold leading-[1.5]">
          これまでに手がけた代表的な<br />システム開発事例をご紹介します
        </div>
      </div>
    </section>

    <!-- ===== CASES ===== -->
    <section class="bg-white">
      <div
        class="mx-auto flex max-w-[1180px] flex-col gap-16 px-8 pb-24 pt-[60px] max-nav:px-5 max-nav:py-16"
      >
        <div
          v-for="(c, i) in cases"
          :key="c.story"
          v-reveal
          class="reveal grid grid-cols-1 items-center gap-13 max-nav:gap-6 nav:grid-cols-2"
        >
          <!-- visual -->
          <CaseVisual
            :image="c.image"
            :alt="c.title"
            class="aspect-[16/11]"
            :class="i % 2 === 1 ? 'nav:order-2' : ''"
          >
            <div
              class="absolute left-[18px] top-4 rounded-[3px] bg-white/80 px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-faint backdrop-blur-sm"
            >
              {{ c.story }}
            </div>
            <div
              class="absolute bottom-[18px] left-[18px] rounded-[5px] bg-white px-5 py-3.5 shadow-[0_8px_24px_rgba(20,21,42,0.12)]"
            >
              <div
                class="font-display text-[38px] font-semibold leading-none text-accent"
              >
                {{ c.stat }}
              </div>
              <div class="mt-1 text-[11px] text-body">{{ c.statLabel }}</div>
            </div>
          </CaseVisual>
          <!-- content -->
          <div :class="i % 2 === 1 ? 'nav:order-1' : ''">
            <h3 class="m-0 text-[23px] font-bold leading-[1.5]">
              {{ c.title }}
            </h3>
            <p class="mt-3.5 text-[13px] leading-[1.95] text-body">
              {{ c.desc }}
            </p>
            <div
              class="mb-3 mt-6 font-mono text-[10px] tracking-[0.16em] text-faint-2"
            >
              導入効果
            </div>
            <div class="flex flex-col gap-2.5">
              <div
                v-for="effect in c.effects"
                :key="effect"
                class="flex gap-2.5 text-[13px] leading-[1.6]"
              >
                <span class="text-accent">✓</span>{{ effect }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <ContactCtaRow
      :secondary="{
        eyebrow: 'SERVICE — 事業内容',
        title: '他のサービスも見る',
        label: '事業内容に戻る',
        to: '/service',
      }"
    />
  </div>
</template>

<script setup lang="ts">
import dokoTrunkImg from "~/assets/img/service/products/doko-trunk.png";
import comparlyticsImg from "~/assets/img/service/products/comparlytics.png";

interface SystemCase {
  story: string;
  stat: string;
  statLabel: string;
  title: string;
  desc: string;
  effects: string[];
  /** 該当する製品画像（未設定時は CaseVisual がロゴを表示） */
  image?: string;
}

const cases: SystemCase[] = [
  {
    story: "SUCCESS STORY 01",
    stat: "50%",
    statLabel: "作業時間削減",
    title: "契約書作成の完全自動化システム",
    desc: "手作業で行っていた契約書作成・送付業務を完全自動化。顧客管理システムと連携し、ワンクリックで複数の契約書を一括送信できるシステムを構築しました。",
    effects: [
      "契約書作成時間を50%削減",
      "入力ミスをゼロに",
      "契約進捗をリアルタイムで把握可能",
    ],
  },
  {
    story: "SUCCESS STORY 04",
    stat: "90%",
    statLabel: "カタログ作成時間短縮",
    title: "商品カタログ管理システムの刷新",
    desc: "10年以上使用していた古いシステムを最新技術で完全リニューアル。商品情報の管理からカタログ作成まで、すべての業務を効率化しました。",
    effects: [
      "直感的で使いやすい操作画面",
      "カタログ作成を90%高速化",
      "商品情報の一元管理を実現",
    ],
  },
  {
    story: "SUCCESS STORY 05",
    stat: "150%",
    statLabel: "参加者増加",
    title: "オンラインセミナー予約システム",
    desc: "セミナーの申込みから参加まで、すべてをオンラインで完結できるシステムを構築。顧客管理システムと連携し、効果的なマーケティング活動を支援しました。",
    effects: [
      "24時間いつでもオンライン申込み可能",
      "参加者数が150%増加",
      "自動フォローアップメール送信",
    ],
  },
  {
    story: "SUCCESS STORY 06",
    stat: "70%",
    statLabel: "帳票作成時間短縮",
    title: "帳票作成・管理システム",
    desc: "請求書や見積書などの帳票を簡単に作成・管理できるシステムを開発。ドラッグ＆ドロップで直感的にレイアウトを編集できます。",
    effects: [
      "直感的なドラッグ＆ドロップ操作",
      "帳票作成時間を70%短縮",
      "印刷履歴の完全管理",
    ],
  },
  {
    story: "SUCCESS STORY 07",
    stat: "95%",
    statLabel: "在庫管理精度向上",
    title: "リアルタイム在庫管理システム",
    desc: "商品の入庫から出庫までをリアルタイムで管理できるシステムを構築。在庫不足や過剰在庫を防ぎ、効率的な在庫運用を実現しました。",
    effects: [
      "リアルタイムで在庫状況を把握",
      "在庫管理精度を95%向上",
      "自動アラートで欠品防止",
    ],
  },
];

useHead({
  title:
    "システム開発実績 | Innovation Style - 業務自動化・Webシステム開発事例",
  meta: [
    {
      name: "description",
      content:
        "契約書作成の自動化、物件検索サイト、効果測定ダッシュボード、在庫管理システムなど、Innovation Styleが手がけたシステム開発の代表的な事例をご紹介します。業務効率化とDX推進を実現した具体的な導入効果をご覧いただけます。",
    },
  ],
});
</script>
