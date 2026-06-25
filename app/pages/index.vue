<template>
  <div>
    <!-- ===== HERO (centered authority / 初回表示はビューポート高いっぱい) ===== -->
    <section
      class="relative flex min-h-[calc(100svh-67px)] flex-col justify-center overflow-hidden bg-white"
    >
      <!-- faint dot grid -->
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(
            circle,
            rgba(71, 68, 184, 0.055) 1px,
            transparent 1.4px
          );
          background-size: 30px 30px;
        "
      ></div>
      <!-- centered glow -->
      <div
        class="pointer-events-none absolute left-1/2 top-[-220px] h-[580px] w-[860px] -translate-x-1/2"
        style="
          background: radial-gradient(
            ellipse at center,
            rgba(71, 68, 184, 0.14),
            transparent 62%
          );
        "
      ></div>
      <div
        v-reveal
        class="reveal relative mx-auto w-full max-w-[800px] px-8 py-[72px] text-center max-nav:px-5 max-nav:py-[64px]"
      >
        <div
          class="mb-[30px] font-mono text-[12px] tracking-[0.3em] text-accent"
        >
          INNOVATION &amp; TECHNOLOGY
        </div>
        <h1
          class="m-0 font-display text-[clamp(40px,8vw,72px)] font-bold leading-[1.1] tracking-[0.01em]"
        >
          Innovation Style
        </h1>
        <div
          class="mt-[22px] text-[clamp(20px,3.4vw,28px)] font-bold leading-[1.5] tracking-[0.06em] text-steel"
        >
          未来を形作る。
        </div>
        <div
          class="mt-2 font-display text-[14px] tracking-[0.14em] text-faint-2"
        >
          Shape the future.
        </div>
        <p
          class="mx-auto mt-[26px] max-w-[560px] text-[15px] leading-[2.05] text-body"
        >
          革新的な発想と先進技術の融合でDXを推進。Web・モバイルアプリ開発からAI導入、SNS広告・SEO対策まで、企画から実行まで一気通貫でご支援します。
        </p>
        <div class="mt-10 flex flex-wrap justify-center gap-3">
          <NuxtLink
            to="/contact"
            class="rounded-[3px] bg-ink px-8 py-4 text-[13.5px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent"
          >
            お問い合わせ
          </NuxtLink>
          <NuxtLink
            to="/service"
            class="flex items-center gap-2 rounded-[3px] border border-[#c9cad4] px-[30px] py-4 text-[13.5px] font-medium text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            事業内容を見る <span class="font-display">→</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ===== ABOUT / positioning band ===== -->
    <section
      class="relative overflow-hidden border-t border-line-soft"
      style="
        background: radial-gradient(
              rgba(20, 21, 42, 0.05) 1px,
              transparent 1.4px
            )
            0 0 / 24px 24px,
          radial-gradient(
            120% 120% at 80% 14%,
            rgba(71, 68, 184, 0.16),
            transparent 55%
          ),
          radial-gradient(
            100% 120% at 8% 98%,
            rgba(108, 106, 240, 0.1),
            transparent 60%
          ),
          linear-gradient(160deg, #fbfbfd, #efeff4);
      "
    >
      <div
        v-reveal
        class="reveal relative mx-auto max-w-[900px] px-8 py-[112px] text-center max-nav:px-5 max-nav:py-[66px]"
      >
        <div class="font-mono text-[11px] tracking-[0.24em] text-accent">
          01 — ABOUT US
        </div>
        <h2
          class="mb-0 mt-5 text-[clamp(26px,5vw,40px)] font-bold leading-[1.5] tracking-[0.01em]"
        >
          テクノロジーとマーケティングを、<br /><span class="text-accent"
            >ひとつのチーム</span
          >で。
        </h2>
        <p
          class="mx-auto mt-[26px] max-w-[620px] text-[15px] leading-[2.1] text-[#5a5c70]"
        >
          Innovation
          Styleは、システム開発とデジタルマーケティングの両輪で企業のDXを支援します。最先端の技術力と卓越したシステム設計、そしてデータ駆動型のマーケティングで、企画から実装・運用まで一気通貫に伴走します。
        </p>
        <NuxtLink
          to="/about"
          class="group mt-8 inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.1em] text-accent"
        >
          MORE ABOUT US
          <span
            class="transition-transform duration-200 group-hover:translate-x-1.5"
            >→</span
          >
        </NuxtLink>
      </div>
    </section>

    <!-- ===== SERVICES (editorial) ===== -->
    <section class="bg-white">
      <div
        v-reveal
        class="reveal mx-auto max-w-[1180px] px-8 py-[104px] max-nav:px-5 max-nav:py-[66px]"
      >
        <div class="flex items-baseline justify-between">
          <div>
            <div class="font-mono text-[11px] tracking-[0.22em] text-faint-2">
              02 — SERVICE
            </div>
            <div class="mt-3.5 text-[30px] font-bold">事業内容</div>
          </div>
          <NuxtLink
            to="/service"
            class="font-mono text-[12px] text-accent transition-colors duration-200 hover:text-ink"
            >View all →</NuxtLink
          >
        </div>
        <div class="mt-[38px] border-t border-line-strong">
          <NuxtLink
            v-for="svc in services"
            :key="svc.no"
            :to="svc.to"
            class="group -mx-3.5 grid grid-cols-[54px_1fr] items-center gap-4 border-b border-line-strong px-3.5 py-[38px] transition-colors duration-200 hover:bg-accent/[0.04] nav:grid-cols-[90px_1fr_auto] nav:gap-6"
          >
            <div
              class="font-display text-[54px] font-semibold leading-none text-[#d6d6e0]"
            >
              {{ svc.no }}
            </div>
            <div>
              <div class="text-[24px] font-bold">{{ svc.title }}</div>
              <div
                class="my-2.5 font-mono text-[10px] tracking-[0.14em] text-faint-2"
              >
                {{ svc.en }}
              </div>
              <div class="max-w-[560px] text-[13px] leading-[1.9] text-body">
                {{ svc.desc }}
              </div>
            </div>
            <div class="font-display text-[24px] text-accent max-nav:hidden">
              →
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ===== DEVELOPMENT FLOW (light) ===== -->
    <section class="border-t border-line-soft bg-[#f7f7f9]">
      <div
        v-reveal
        class="reveal mx-auto max-w-[1180px] px-8 py-[104px] max-nav:px-5 max-nav:py-[66px]"
      >
        <div class="font-mono text-[11px] tracking-[0.22em] text-faint-2">
          03 — DEVELOPMENT FLOW
        </div>
        <div class="mt-3.5 text-[30px] font-bold">信頼される開発プロセス</div>
        <p class="mt-4 max-w-[560px] text-[14px] leading-[1.95] text-body">
          要件定義から納品・保守まで、最先端の技術力と卓越したユーザー体験を一貫してご提供します。
        </p>
        <div
          class="mt-[54px] grid grid-cols-1 gap-[18px] min-[521px]:grid-cols-2 nav:grid-cols-5"
        >
          <div
            v-for="(step, i) in flow"
            :key="step.no"
            class="relative border-t-2 pt-6"
            :class="i === 0 ? 'border-accent' : 'border-[#dddee6]'"
          >
            <div
              class="absolute -top-1.5 left-0 h-[11px] w-[11px] rounded-full"
              :class="i === 0 ? 'bg-accent' : 'bg-[#cdcfda]'"
            ></div>
            <div
              class="font-display text-[26px] font-semibold leading-none"
              :class="i === 0 ? 'text-accent' : 'text-[#c2c4d0]'"
            >
              {{ step.no }}
            </div>
            <div class="mt-2.5 text-[14px] font-bold">{{ step.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== NEWS ===== -->
    <section class="border-t border-line-soft bg-white">
      <div
        v-reveal
        class="reveal mx-auto max-w-[1180px] px-8 py-[104px] max-nav:px-5 max-nav:py-[66px]"
      >
        <div class="flex items-baseline justify-between">
          <div>
            <div class="font-mono text-[11px] tracking-[0.22em] text-faint-2">
              NEWS
            </div>
            <div class="mt-3.5 text-[30px] font-bold">お知らせ</div>
          </div>
          <NuxtLink
            to="/news"
            class="font-mono text-[12px] text-accent transition-colors duration-200 hover:text-ink"
            >View all →</NuxtLink
          >
        </div>
        <div class="mt-9 border-t border-line-strong">
          <NuxtLink
            v-for="news in newsItems"
            :key="news.title"
            :to="news.to"
            class="group -mx-3 grid grid-cols-1 items-center gap-1.5 border-b border-line-soft px-3 py-[18px] transition-colors duration-200 hover:bg-accent/[0.04] nav:grid-cols-[120px_120px_1fr_auto] nav:gap-6 nav:py-6"
          >
            <div class="font-mono text-[13px] tracking-[0.04em] text-faint">
              {{ news.date }}
            </div>
            <div
              class="justify-self-start whitespace-nowrap rounded-[3px] px-[11px] py-[5px] text-[11px] font-medium"
              :class="tagClass(news.tone)"
            >
              {{ news.category }}
            </div>
            <div class="text-[15px] font-medium leading-[1.6]">
              {{ news.title }}
            </div>
            <div class="font-display text-[18px] text-accent max-nav:hidden">
              →
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="border-t border-line-soft bg-[#f7f7f9]">
      <div
        v-reveal
        class="reveal mx-auto flex max-w-[1180px] flex-col gap-6 px-8 py-[100px] max-nav:px-5 max-nav:py-[72px]"
      >
        <!-- recruit banner -->
        <div
          class="group relative flex flex-wrap items-center justify-between gap-10 overflow-hidden rounded-[10px] border border-accent/15 p-14 max-nav:flex-col max-nav:items-start max-nav:gap-7 max-nav:p-8"
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
                rgba(108, 106, 240, 0.18),
                transparent 65%
              );
            "
          ></div>
          <!-- watermark -->
          <div
            class="pointer-events-none absolute -bottom-7 right-6 select-none font-display text-[124px] font-bold leading-none text-accent/[0.07] max-nav:hidden"
          >
            CAREERS
          </div>
          <!-- corner frame -->
          <div
            class="pointer-events-none absolute left-6 top-6 h-9 w-9 border-l border-t border-accent/30"
          ></div>

          <div class="relative max-w-[620px]">
            <div
              class="flex items-center gap-3 font-mono text-[11px] tracking-[0.24em] text-accent"
            >
              <span class="h-px w-7 bg-accent/40"></span>RECRUIT — 採用情報
            </div>
            <div
              class="mt-5 text-[clamp(22px,3.2vw,28px)] font-bold leading-[1.5] text-ink"
            >
              一緒に、未来を形作る仲間を<br
                class="max-nav:hidden"
              />募集しています。
            </div>
            <div class="mt-3 text-[13.5px] leading-[1.9] text-body">
              エンジニア・マーケター・デザイナーを募集中。
            </div>
          </div>
          <NuxtLink
            to="/recruit"
            class="relative inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-[4px] bg-accent px-8 py-[17px] text-[14px] font-semibold text-white shadow-[0_12px_30px_-12px_rgba(71,68,184,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-bright"
          >
            採用情報を見る
            <span
              class="font-display transition-transform duration-200 group-hover:translate-x-1"
              >→</span
            >
          </NuxtLink>
        </div>

        <!-- contact banner -->
        <div
          class="group relative flex flex-wrap items-center justify-between gap-10 overflow-hidden rounded-[10px] border border-line bg-white p-14 max-nav:flex-col max-nav:items-start max-nav:gap-7 max-nav:p-8"
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
            CONTACT
          </div>
          <!-- corner frame -->
          <div
            class="pointer-events-none absolute left-6 top-6 h-9 w-9 border-l border-t border-line-strong"
          ></div>

          <div class="relative max-w-[640px]">
            <div
              class="flex items-center gap-3 font-mono text-[11px] tracking-[0.24em] text-accent"
            >
              <span class="h-px w-7 bg-accent/50"></span>CONTACT — お問い合わせ
            </div>
            <div
              class="mt-5 text-[clamp(24px,3.4vw,30px)] font-bold leading-[1.45] text-ink"
            >
              プロジェクトのご相談はこちら
            </div>
            <div
              class="mt-3 max-w-[460px] text-[13.5px] leading-[1.95] text-body"
            >
              企画から実装・運用まで、まずはお気軽にお問い合わせください。
            </div>
          </div>
          <NuxtLink
            to="/contact"
            class="relative inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-[4px] bg-ink px-8 py-[17px] text-[14px] font-semibold text-white shadow-[0_12px_30px_-12px_rgba(20,21,42,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent"
          >
            お問い合わせ
            <span
              class="font-display transition-transform duration-200 group-hover:translate-x-1"
              >→</span
            >
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
type NewsTone = "press" | "info" | "achievement";

const services = [
  {
    no: "01",
    title: "システム開発",
    en: "SYSTEM DEVELOPMENT",
    to: "/service/system",
    desc: "Web・モバイルアプリケーション開発、AI導入によるインテリジェントなシステム構築、外部API連携、クラウドサービス連携まで。",
  },
  {
    no: "02",
    title: "マーケティング",
    en: "MARKETING",
    to: "/service/marketing",
    desc: "リスティング広告・SNS広告運用、SEO対策による持続的な集客力向上、価値あるコンテンツ制作によるエンゲージメント向上。",
  },
];

const flow = [
  { no: "01", label: "要件定義・企画" },
  { no: "02", label: "デザイン・設計" },
  { no: "03", label: "開発・実装" },
  { no: "04", label: "テスト・品質保証" },
  { no: "05", label: "納品・サポート" },
];

const newsItems: {
  date: string;
  category: string;
  title: string;
  tone: NewsTone;
  to: string;
}[] = [
  {
    date: "2026.05.20",
    category: "プレスリリース",
    title: "AI契約書解析機能の提供を開始しました",
    tone: "press",
    to: "/news/1",
  },
  {
    date: "2026.03.10",
    category: "お知らせ",
    title: "ゴールデンウィーク期間中の営業についてのお知らせ",
    tone: "info",
    to: "/news",
  },
  {
    date: "2026.01.15",
    category: "実績",
    title: "D2Cコスメブランドの新規顧客獲得145%増を達成しました",
    tone: "achievement",
    to: "/news",
  },
];

const tagClass = (tone: NewsTone): string => {
  const map: Record<NewsTone, string> = {
    press: "text-ink border border-ink/20 bg-ink/5",
    info: "text-accent border border-accent/20 bg-accent/5",
    achievement: "text-steel border border-steel/20 bg-steel/5",
  };
  return map[tone];
};

useHead({
  title: "Innovation Style | システム開発 | デジタルマーケティング",
  meta: [
    {
      name: "description",
      content:
        "革新的な発想と先進技術の融合でDX推進を実現。Web・モバイルアプリ開発、AI導入、SNS広告・SEO対策まで、企画から実行まで一気通貫でサポート。システム開発とデジタルマーケティングの専門家が、お客様のビジネス成長を総合的に支援します。",
    },
  ],
});
</script>
