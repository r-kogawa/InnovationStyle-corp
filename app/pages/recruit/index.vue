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
      <div
        class="relative mx-auto max-w-[1180px] px-8 pb-16 pt-[72px] max-nav:px-5"
      >
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
        <div class="mb-10 flex flex-col items-baseline gap-4">
          <div class="font-mono text-[11px] tracking-[0.22em] text-faint-2">
            WHO WE WANT
          </div>
          <div class="text-[26px] font-bold">求める人物像</div>
        </div>
        <div class="grid grid-cols-1 gap-5 nav:grid-cols-3">
          <div
            v-for="v in values"
            :key="v.no"
            class="group relative overflow-hidden rounded-[8px] border border-line bg-white p-[34px] transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_44px_-20px_rgba(71,68,184,0.3)]"
          >
            <!-- 番号はブランドのウォーターマーク意匠として薄く配置（順序ではなく装飾） -->
            <div
              class="pointer-events-none absolute -bottom-5 right-1 select-none font-display text-[78px] font-bold leading-none text-accent/[0.06]"
            >
              {{ v.no }}
            </div>
            <div
              class="relative inline-flex h-12 w-12 items-center justify-center rounded-[12px] bg-accent/[0.08] text-accent ring-1 ring-inset ring-accent/10 transition-colors duration-300 group-hover:bg-accent group-hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-6 w-6"
                aria-hidden="true"
                v-html="v.icon"
              ></svg>
            </div>
            <div class="relative mt-5 text-[18px] font-bold">{{ v.title }}</div>
            <p class="relative mt-2.5 text-[13px] leading-[1.9] text-body">
              {{ v.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== OPEN POSITIONS ===== -->
    <section class="bg-white">
      <div
        class="mx-auto max-w-[1180px] px-8 py-[92px] max-nav:px-5 max-nav:py-16"
      >
        <div class="mb-9 flex flex-col items-baseline gap-4">
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
                  :to="{ path: '/contact', query: { type: job.entryType } }"
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
        <div class="mb-9 flex flex-col items-baseline gap-4">
          <div class="font-mono text-[11px] tracking-[0.22em] text-faint-2">
            ENVIRONMENT
          </div>
          <div class="text-[26px] font-bold">働き方・環境</div>
        </div>
        <div
          class="grid grid-cols-1 gap-4 min-[521px]:grid-cols-2 nav:grid-cols-4"
        >
          <div
            v-for="env in environment"
            :key="env.title"
            class="group rounded-[8px] border border-line bg-white p-[26px] transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_18px_40px_-20px_rgba(71,68,184,0.28)]"
          >
            <div
              class="inline-flex h-11 w-11 items-center justify-center rounded-[11px] bg-accent/[0.08] text-accent ring-1 ring-inset ring-accent/10 transition-colors duration-300 group-hover:bg-accent group-hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-[22px] w-[22px]"
                aria-hidden="true"
                v-html="env.icon"
              ></svg>
            </div>
            <div class="mt-4 text-[15px] font-bold">{{ env.title }}</div>
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
      <div
        class="mx-auto max-w-[1180px] px-8 py-[88px] max-nav:px-5 max-nav:py-[64px]"
      >
        <div
          class="group relative overflow-hidden rounded-[12px] border border-accent/15 px-12 py-16 text-center max-nav:px-7 max-nav:py-12"
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
            class="pointer-events-none absolute -right-16 -top-24 h-[360px] w-[360px]"
            style="
              background: radial-gradient(
                circle,
                rgba(108, 106, 240, 0.18),
                transparent 65%
              );
            "
          ></div>
          <!-- watermark -->
          <div
            class="pointer-events-none absolute -bottom-4 right-6 select-none font-display text-[72px] font-bold leading-none text-accent/[0.06] md:text-[120px]"
          >
            JOIN US
          </div>
          <!-- corner frame -->
          <div
            class="pointer-events-none absolute left-6 top-6 h-9 w-9 border-l border-t border-accent/30"
          ></div>

          <div class="relative mx-auto max-w-[640px]">
            <div
              class="flex items-center justify-center gap-3 font-mono text-[11px] tracking-[0.24em] text-accent"
            >
              <span class="h-px w-7 bg-accent/40"></span>CASUAL TALK —
              カジュアル面談
            </div>
            <div
              class="mt-6 text-[clamp(24px,3.4vw,32px)] font-bold leading-[1.5] text-ink"
            >
              まずは、カジュアルにお話ししませんか
            </div>
            <p
              class="mx-auto mt-4 max-w-[480px] text-[14px] leading-[1.95] text-body"
            >
              選考の前に、まずは情報交換から。ご応募・ご質問は、お問い合わせフォームよりお気軽にどうぞ。
            </p>
            <NuxtLink
              :to="{ path: '/contact', query: { type: 'カジュアル面談' } }"
              class="relative mt-9 inline-flex items-center gap-2.5 rounded-[4px] bg-accent px-9 py-[17px] text-[14px] font-semibold text-white shadow-[0_12px_30px_-12px_rgba(71,68,184,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-bright"
            >
              カジュアルに相談する
              <span
                class="font-display transition-transform duration-200 group-hover:translate-x-1"
                >→</span
              >
            </NuxtLink>
          </div>
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

// アイコンは Lucide ベースの SVG inner markup（カテゴリーを表す意匠）。
// 番号（no）はカードの薄いウォーターマークとしてのみ使用する。
const values = [
  {
    no: "01",
    title: "変化を楽しめる",
    desc: "新しい技術や手法を前向きに取り入れ、学び続けられる方。",
    // sparkles: 新しさ・変化を楽しむ
    icon: '<path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0L14.06 8.5A2 2 0 0 0 15.5 9.94l6.14 1.58a.5.5 0 0 1 0 .96L15.5 14.06a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
  },
  {
    no: "02",
    title: "事業視点を持てる",
    desc: "技術や施策を「成果」につなげる視点で考えられる方。",
    // target: 成果へのフォーカス
    icon: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/>',
  },
  {
    no: "03",
    title: "チームで動ける",
    desc: "職種を越えて協働し、チームで成果を出すことを大切にできる方。",
    // users: チームでの協働
    icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  },
];

const jobs = [
  {
    title: "ソフトウェアエンジニア",
    type: "正社員",
    // contact フォームの選択肢と完全一致させる（?type= で初期選択するため）
    entryType: "採用エントリー（ソフトウェアエンジニア）",
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
    want: ["クラウド（AWS等）の構築・運用経験", "モバイル／AI領域での開発知見"],
  },
  {
    title: "デジタルマーケター",
    type: "正社員",
    entryType: "採用エントリー（マーケティング）",
    summary: "リスティング・SNS広告運用、SEO、データ分析による集客改善。",
    duties: [
      "広告（リスティング／SNS）の運用・改善",
      "検索意図に基づくSEO設計・コンテンツ企画",
      "ダッシュボードでの効果測定とレポーティング",
    ],
    must: ["広告運用またはSEOの実務経験", "データに基づいた改善提案の経験"],
    want: ["GA4／GTM／BigQueryの利用経験", "EC・D2C領域でのマーケティング知見"],
  },
  {
    title: "UI/UXデザイナー",
    type: "正社員・業務委託",
    entryType: "採用エントリー（UI/UXデザイナー）",
    summary: "プロダクト・LP・コーポレートサイトのUI設計とビジュアルデザイン。",
    duties: [
      "プロダクト／サイトのUI・UX設計",
      "プロトタイピングとデザイン検証",
      "デザインシステムの構築・運用",
    ],
    must: ["Webデザインの実務経験", "Figma等のデザインツールの使用経験"],
    want: ["フロントエンド実装の知見", "マーケティング視点でのデザイン経験"],
  },
];

const environment = [
  {
    title: "フレックス・リモート",
    desc: "柔軟な働き方で成果に集中できます。",
    // clock: 柔軟な時間
    icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  },
  {
    title: "学習・書籍支援",
    desc: "スキルアップのための学習を支援します。",
    // book-open: 学習支援
    icon: '<path d="M2 4.5h6.5A2.5 2.5 0 0 1 11 7v12a2 2 0 0 0-2-2H2z"/><path d="M22 4.5h-6.5A2.5 2.5 0 0 0 13 7v12a2 2 0 0 1 2-2h7z"/>',
  },
  {
    title: "服装自由",
    desc: "自分らしく働ける環境です。",
    // shirt: 服装自由
    icon: '<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>',
  },
  {
    title: "各種社会保険完備",
    desc: "安心して働ける制度を整えています。",
    // shield-check: 安心の制度
    icon: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
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
