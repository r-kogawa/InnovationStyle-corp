<template>
  <div>
    <PageHero
      :crumbs="[
        { label: '事業内容', to: '/service' },
        { label: 'マーケティング実績' },
      ]"
      eng="MARKETING"
      subtitle="マーケティング実績"
    />

    <!-- ===== INTRO ===== -->
    <section class="bg-white">
      <div class="mx-auto max-w-[1180px] px-8 pt-[72px] max-nav:px-5">
        <div class="font-mono text-[11px] tracking-[0.22em] text-faint-2">
          SUCCESS CASE
        </div>
        <div class="mt-3 max-w-[720px] text-[26px] font-bold leading-[1.5]">
          データドリブンなマーケティング支援で<br />成果を創出した実績をご紹介します
        </div>
      </div>
    </section>

    <!-- ===== CASES ===== -->
    <section class="bg-white">
      <div
        class="mx-auto flex max-w-[1180px] flex-col gap-[72px] px-8 pb-24 pt-14 max-nav:px-5 max-nav:py-16"
      >
        <div
          v-for="(c, i) in cases"
          :key="c.caseNo"
          v-reveal
          class="reveal grid grid-cols-1 items-stretch gap-13 max-nav:gap-6 nav:grid-cols-[0.82fr_1.18fr]"
        >
          <!-- visual -->
          <CaseVisual
            :image="c.image"
            :alt="c.title"
            class="aspect-[4/5] nav:aspect-auto"
            :class="i % 2 === 1 ? 'nav:order-2' : ''"
          >
            <div
              class="absolute left-[18px] top-4 rounded-[3px] bg-white/80 px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-faint backdrop-blur-sm"
            >
              {{ c.caseNo }}
            </div>
            <div
              class="absolute bottom-[18px] left-[18px] rounded-[5px] border border-line bg-white px-[22px] py-4 shadow-[0_8px_24px_rgba(20,21,42,0.12)]"
            >
              <div
                class="font-display text-[34px] font-semibold leading-none text-accent"
              >
                {{ c.stat }}
              </div>
              <div class="mt-1 text-[11px] text-body">
                {{ c.statLabel }}
              </div>
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
              実施した施策
            </div>
            <div class="flex flex-col gap-2">
              <div
                v-for="m in c.measures"
                :key="m"
                class="flex gap-2.5 text-[13px] leading-[1.6] text-[#3a3c50]"
              >
                <span class="text-faint-2">—</span>{{ m }}
              </div>
            </div>
            <div
              class="mt-[22px] rounded-[6px] border border-line bg-surface px-6 py-[22px]"
            >
              <div
                class="mb-3 font-mono text-[10px] tracking-[0.16em] text-accent"
              >
                成果
              </div>
              <div class="flex flex-col gap-2.5">
                <div
                  v-for="r in c.results"
                  :key="r.strong"
                  class="flex gap-2.5 text-[13px] leading-[1.5]"
                >
                  <span class="text-accent">✓</span>
                  <span
                    >{{ r.label
                    }}<strong class="font-bold">{{ r.strong }}</strong></span
                  >
                </div>
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

interface MarketingResult {
  label: string;
  strong: string;
}

interface MarketingCase {
  caseNo: string;
  stat: string;
  statLabel: string;
  title: string;
  desc: string;
  measures: string[];
  results: MarketingResult[];
  /** 該当する製品画像（未設定時は CaseVisual がロゴを表示） */
  image?: string;
}

const cases: MarketingCase[] = [
  {
    caseNo: "SUCCESS CASE 01",
    stat: "18ヶ月",
    statLabel: "連続目標達成",
    title: "不動産投資商品開発会社",
    desc: "システム連携と広告運用の組み合わせで、新規投資家リードの獲得を劇的に効率化。データを活用した精緻な広告配信で、18ヶ月連続で目標を達成しました。",
    measures: [
      "自社開発システムで顧客データベースを構築",
      "TikTok・Google・Facebook広告をAPI連携で一元管理",
      "キャンペーンデータをCRMにリアルタイム送信",
    ],
    results: [
      { label: "リード送客目標を", strong: "18ヶ月連続達成" },
      { label: "CPA（顧客獲得単価）を", strong: "30%削減" },
      { label: "CRM自動スコアリングで", strong: "商談化率15%向上" },
    ],
  },
  {
    caseNo: "SUCCESS CASE 02",
    stat: "20%",
    statLabel: "CPA削減",
    title: "トランクルーム運用会社",
    desc: "広告とSEO、ページ表示速度改善を組み合わせた総合的なWebマーケティング支援。CPA（顧客獲得単価）20%削減を実現しました。",
    measures: [
      "Google・Facebook広告をLP一新で改善",
      "検索意図に合わせたSEOコンテンツ設計",
      "Web改善・CDN活用でPageSpeed Insightsスコアを32点改善",
    ],
    results: [
      { label: "CPA（顧客獲得単価）を", strong: "20%削減" },
      { label: "SEO経由のリードを", strong: "40%増加" },
      { label: "モバイル表示速度を", strong: "1.8秒→0.9秒に改善" },
    ],
  },
  {
    caseNo: "SUCCESS CASE 03",
    stat: "145%",
    statLabel: "新規獲得増",
    title: "D2Cコスメブランド（EC）",
    desc: "広告運用の最適化とシステム改善で、新規獲得数145%増を実現。データ分析に基づく施策で広告費を抑えつつ売上を大幅に向上させました。",
    measures: [
      "UGC調達（顧客の声）でCBO・SNS広告配信",
      "P-MAX（Google自動広告）で新規流入を特化",
      "初回割引LPのA/Bテストで最適化",
      "GTMでイベント再定義・GA4導入で広告連携",
      "EC側（決済システム）でLazy Load導入",
      "BigQueryでデータ集約・可視化",
    ],
    results: [
      { label: "新規顧客獲得数", strong: "145%増（3ヶ月で達成）" },
      { label: "平均CPA（顧客獲得単価）", strong: "38%削減" },
      { label: "モバイルCVR（購入率）", strong: "2倍（1.4%→2.8%）" },
      { label: "売上前月比", strong: "92%向上" },
    ],
  },
];

useHead({
  title:
    "マーケティング実績 | Innovation Style - 広告運用・SEO・データ分析事例",
  meta: [
    {
      name: "description",
      content:
        "リスティング広告・SNS広告運用、SEO対策、データ分析による効果測定で成果を創出した事例をご紹介。CPA削減、新規顧客獲得数の大幅増加、CVR改善など、データドリブンなマーケティング支援の具体的な成果をご覧いただけます。",
    },
  ],
});
</script>
