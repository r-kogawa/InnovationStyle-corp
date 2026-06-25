<template>
  <div>
    <!-- ===== HERO ===== -->
    <section class="relative overflow-hidden border-b border-line">
      <div class="absolute inset-0 bg-dotgrid opacity-70"></div>
      <div
        class="pointer-events-none absolute -right-40 -top-28 h-[500px] w-[500px]"
        style="
          background: radial-gradient(
            circle,
            rgba(94, 110, 146, 0.16),
            transparent 65%
          );
        "
      ></div>
      <div class="relative mx-auto max-w-[1180px] px-8 pb-16 pt-[72px] max-nav:px-5">
        <div class="font-mono text-[11px] tracking-[0.18em] text-faint-2">
          <NuxtLink
            to="/"
            class="text-faint-2 transition-colors hover:text-accent"
            >ホーム</NuxtLink
          >
          <span class="px-2">/</span>
          <span class="text-accent">採用情報</span>
        </div>
        <h1
          class="mt-[18px] font-display text-[clamp(40px,7vw,64px)] font-semibold leading-none tracking-[-0.02em]"
        >
          RECRUIT
        </h1>
        <div class="mt-2 text-[16px] text-steel">採用情報</div>
      </div>
    </section>

    <!-- ===== MESSAGE ===== -->
    <section class="bg-white">
      <div
        v-reveal
        class="reveal mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-12 px-8 py-[100px] max-nav:px-5 max-nav:py-16 nav:grid-cols-[0.8fr_1.2fr]"
      >
        <div class="font-mono text-[11px] tracking-[0.22em] text-faint-2">
          MESSAGE
        </div>
        <div>
          <p
            class="m-0 text-[clamp(26px,4vw,34px)] font-bold leading-[1.55] tracking-[0.01em]"
          >
            技術とマーケティングの両輪で、<br /><span class="text-accent"
              >未来を形作る仲間</span
            >を募集しています。
          </p>
          <p class="mt-7 max-w-[600px] text-[15px] leading-[2.05] text-body">
            Innovation
            Styleは、システム開発とデジタルマーケティングの両領域を一気通貫で手がける会社です。「作って終わり」ではなく、成果が出るまで伴走する。だからこそ、領域を越えて学び、挑戦できる環境があります。あなたの専門性を、事業の成長に直結させてみませんか。
          </p>
        </div>
      </div>
    </section>

    <!-- ===== VALUES ===== -->
    <section class="bg-surface">
      <div
        v-reveal
        class="reveal mx-auto max-w-[1180px] px-8 py-[92px] max-nav:px-5 max-nav:py-16"
      >
        <div class="mb-10 flex items-baseline gap-4">
          <div class="font-mono text-[11px] tracking-[0.22em] text-faint-2">
            WHO WE WANT
          </div>
          <div class="text-[26px] font-bold">求める人物像</div>
        </div>
        <div class="grid grid-cols-1 gap-5 nav:grid-cols-3">
          <div
            v-for="v in values"
            :key="v.no"
            class="rounded-[6px] border border-line bg-white p-[34px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(20,21,42,0.09)]"
          >
            <div class="font-display text-[30px] font-semibold text-[#d6d6e0]">
              {{ v.no }}
            </div>
            <div class="mt-3.5 text-[18px] font-bold">{{ v.title }}</div>
            <p class="mt-2.5 text-[13px] leading-[1.9] text-body">
              {{ v.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== OPEN POSITIONS ===== -->
    <section class="bg-white">
      <div
        class="mx-auto max-w-[980px] px-8 py-[92px] max-nav:px-5 max-nav:py-16"
      >
        <div class="mb-9 flex items-baseline gap-4">
          <div class="font-mono text-[11px] tracking-[0.22em] text-faint-2">
            OPEN POSITIONS
          </div>
          <div class="text-[26px] font-bold">募集職種</div>
        </div>
        <div class="flex flex-col gap-3.5">
          <div
            v-for="(job, i) in jobs"
            :key="job.title"
            class="overflow-hidden rounded-[6px] border border-line bg-white"
          >
            <button
              type="button"
              class="grid w-full grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1.5 px-[26px] py-6 text-left nav:grid-cols-[1fr_auto_auto] nav:gap-[18px]"
              :aria-expanded="openIndex === i"
              @click="toggle(i)"
            >
              <div class="max-nav:col-span-2">
                <div class="text-[19px] font-bold">{{ job.title }}</div>
                <div class="mt-1.5 text-[12px] leading-[1.6] text-body">
                  {{ job.summary }}
                </div>
              </div>
              <span
                class="justify-self-start whitespace-nowrap rounded-[3px] border border-accent/20 bg-accent/5 px-3 py-1.5 font-mono text-[10px] tracking-[0.08em] text-accent"
              >
                {{ job.type }}
              </span>
              <span
                class="inline-block font-display text-[22px] text-accent transition-transform duration-200"
                :class="{ 'rotate-45': openIndex === i }"
                >+</span
              >
            </button>
            <Transition
              enter-active-class="transition-all duration-300 ease-out overflow-hidden"
              leave-active-class="transition-all duration-200 ease-in overflow-hidden"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-[800px]"
              leave-from-class="opacity-100 max-h-[800px]"
              leave-to-class="opacity-0 max-h-0"
            >
              <div
                v-if="openIndex === i"
                class="border-t border-line-soft bg-[#fbfbfc] px-[26px] py-7"
              >
                <div class="grid grid-cols-1 gap-7 nav:grid-cols-2">
                  <div>
                    <div
                      class="mb-3 font-mono text-[10px] tracking-[0.16em] text-faint-2"
                    >
                      業務内容
                    </div>
                    <div class="flex flex-col gap-2">
                      <div
                        v-for="d in job.duties"
                        :key="d"
                        class="flex gap-2.5 text-[13px] leading-[1.6] text-[#3a3c50]"
                      >
                        <span class="text-accent">▪</span>{{ d }}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      class="mb-3 font-mono text-[10px] tracking-[0.16em] text-faint-2"
                    >
                      必須スキル
                    </div>
                    <div class="mb-5 flex flex-col gap-2">
                      <div
                        v-for="m in job.must"
                        :key="m"
                        class="flex gap-2.5 text-[13px] leading-[1.6] text-[#3a3c50]"
                      >
                        <span class="text-accent">✓</span>{{ m }}
                      </div>
                    </div>
                    <div
                      class="mb-3 font-mono text-[10px] tracking-[0.16em] text-faint-2"
                    >
                      歓迎スキル
                    </div>
                    <div class="flex flex-col gap-2">
                      <div
                        v-for="w in job.want"
                        :key="w"
                        class="flex gap-2.5 text-[13px] leading-[1.6] text-body"
                      >
                        <span class="text-faint-2">+</span>{{ w }}
                      </div>
                    </div>
                  </div>
                </div>
                <NuxtLink
                  to="/contact"
                  class="mt-[26px] inline-flex items-center gap-2 rounded-[3px] bg-ink px-[26px] py-[13px] text-[13px] font-medium text-white transition-colors duration-200 hover:bg-accent"
                >
                  この職種にエントリー →
                </NuxtLink>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== ENVIRONMENT ===== -->
    <section class="bg-surface">
      <div
        v-reveal
        class="reveal mx-auto max-w-[1180px] px-8 py-[92px] max-nav:px-5 max-nav:py-16"
      >
        <div class="mb-9 flex items-baseline gap-4">
          <div class="font-mono text-[11px] tracking-[0.22em] text-faint-2">
            ENVIRONMENT
          </div>
          <div class="text-[26px] font-bold">働き方・環境</div>
        </div>
        <div class="grid grid-cols-1 gap-4 min-[521px]:grid-cols-2 nav:grid-cols-4">
          <div
            v-for="env in environment"
            :key="env.no"
            class="rounded-[6px] border border-line bg-white p-[26px]"
          >
            <div class="font-display text-[13px] font-semibold text-accent">
              {{ env.no }}
            </div>
            <div class="mt-2.5 text-[15px] font-bold">{{ env.title }}</div>
            <p class="mt-2 text-[12px] leading-[1.8] text-body">
              {{ env.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== HIRING FLOW ===== -->
    <section class="border-t border-line-soft bg-[#f7f7f9]">
      <div
        v-reveal
        class="reveal relative mx-auto max-w-[1180px] px-8 py-[92px] max-nav:px-5 max-nav:py-16"
      >
        <div class="font-mono text-[11px] tracking-[0.22em] text-faint-2">
          SELECTION FLOW
        </div>
        <div class="mt-3.5 text-[28px] font-bold">選考フロー</div>
        <div
          class="mt-11 grid grid-cols-1 gap-[18px] min-[521px]:grid-cols-2 nav:grid-cols-4"
        >
          <div
            v-for="(step, i) in selection"
            :key="step.no"
            class="relative border-t-2 pt-[22px]"
            :class="i === 0 ? 'border-accent' : 'border-[#dddee6]'"
          >
            <div
              class="absolute -top-1.5 left-0 h-[11px] w-[11px] rounded-full"
              :class="i === 0 ? 'bg-accent' : 'bg-[#cdcfda]'"
            ></div>
            <div
              class="font-display text-[13px]"
              :class="i === 0 ? 'text-accent' : 'text-faint-2'"
            >
              {{ step.no }}
            </div>
            <div class="mt-2 text-[15px] font-bold">{{ step.title }}</div>
            <p class="mt-2 text-[12px] leading-[1.8] text-body">
              {{ step.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="bg-white">
      <div class="mx-auto max-w-[1180px] px-8 py-[88px] max-nav:px-5">
        <div
          class="rounded-[6px] border border-line bg-surface px-12 py-14 text-center max-nav:px-6"
        >
          <div class="text-[26px] font-bold leading-[1.5]">
            まずはカジュアルにお話ししませんか
          </div>
          <p class="mt-3 text-[14px] text-body">
            ご応募・ご質問は、お問い合わせフォームよりお気軽にどうぞ。
          </p>
          <NuxtLink
            to="/contact"
            class="mt-7 inline-block rounded-[3px] bg-ink px-9 py-4 text-[14px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent"
          >
            エントリーする →
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const openIndex = ref<number>(0);
const toggle = (i: number) => {
  openIndex.value = openIndex.value === i ? -1 : i;
};

const values = [
  {
    no: "01",
    title: "変化を楽しめる",
    desc: "新しい技術や手法を前向きに取り入れ、学び続けられる方。",
  },
  {
    no: "02",
    title: "事業視点を持てる",
    desc: "技術や施策を「成果」につなげる視点で考えられる方。",
  },
  {
    no: "03",
    title: "チームで動ける",
    desc: "職種を越えて協働し、チームで成果を出すことを大切にできる方。",
  },
];

const jobs = [
  {
    title: "ソフトウェアエンジニア",
    type: "正社員",
    summary:
      "Web・モバイルアプリ、AI導入、API・クラウド連携の設計から実装まで。",
    duties: [
      "要件定義から実装・運用までの一貫した開発",
      "モダンな技術スタックでのWeb／モバイル開発",
      "AI導入・外部API・クラウド連携の実装",
    ],
    must: [
      "Webアプリケーション開発の実務経験",
      "Git等を用いたチーム開発の経験",
    ],
    want: [
      "クラウド（AWS等）の構築・運用経験",
      "モバイル／AI領域での開発知見",
    ],
  },
  {
    title: "デジタルマーケター",
    type: "正社員",
    summary: "リスティング・SNS広告運用、SEO、データ分析による集客改善。",
    duties: [
      "広告（リスティング／SNS）の運用・改善",
      "検索意図に基づくSEO設計・コンテンツ企画",
      "ダッシュボードでの効果測定とレポーティング",
    ],
    must: [
      "広告運用またはSEOの実務経験",
      "データに基づいた改善提案の経験",
    ],
    want: [
      "GA4／GTM／BigQueryの利用経験",
      "EC・D2C領域でのマーケティング知見",
    ],
  },
  {
    title: "UI/UXデザイナー",
    type: "正社員・業務委託",
    summary:
      "プロダクト・LP・コーポレートサイトのUI設計とビジュアルデザイン。",
    duties: [
      "プロダクト／サイトのUI・UX設計",
      "プロトタイピングとデザイン検証",
      "デザインシステムの構築・運用",
    ],
    must: [
      "Webデザインの実務経験",
      "Figma等のデザインツールの使用経験",
    ],
    want: ["フロントエンド実装の知見", "マーケティング視点でのデザイン経験"],
  },
];

const environment = [
  {
    no: "01",
    title: "フレックス・リモート",
    desc: "柔軟な働き方で成果に集中できます。",
  },
  {
    no: "02",
    title: "学習・書籍支援",
    desc: "スキルアップのための学習を支援します。",
  },
  { no: "03", title: "服装自由", desc: "自分らしく働ける環境です。" },
  {
    no: "04",
    title: "各種社会保険完備",
    desc: "安心して働ける制度を整えています。",
  },
];

const selection = [
  { no: "01", title: "エントリー", desc: "フォームよりご応募ください。" },
  { no: "02", title: "書類選考", desc: "経歴・ポートフォリオを拝見します。" },
  { no: "03", title: "面接（1〜2回）", desc: "相互理解を深めます。" },
  { no: "04", title: "内定", desc: "条件のご相談のうえ決定します。" },
];

useHead({
  title: "採用情報 | Innovation Style - エンジニア・マーケター・デザイナー募集",
  meta: [
    {
      name: "description",
      content:
        "Innovation Styleでは、ソフトウェアエンジニア・デジタルマーケター・UI/UXデザイナーを募集しています。技術とマーケティングの両輪で、成果が出るまで伴走する。領域を越えて学び挑戦できる環境で、一緒に未来を形作る仲間を募集しています。",
    },
  ],
});
</script>
