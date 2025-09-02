<template>
  <article>
    <section>
      <TopFirstView />
    </section>
    <!-- お知らせセクション -->
    <section class="bg-white py-16 md:py-24">
      <AnimationMatrix>
        <div class="max-w-screen-lg mx-auto px-4 md:px-8">
          <!-- ヘッダー -->
          <div class="text-center mb-12 md:mb-16">
            <div class="mb-4">
              <div class="h-full">
                <div class="flex gap-1 items-end justify-center h-full">
                  <h2 class="text-3xl font-orbitron text-slate-500">NEWS</h2>
                  <span class="text-lg text-gray-500">/</span>
                  <p class="text-gray-500">お知らせ</p>
                </div>
              </div>
            </div>
          </div>
          <!-- お知らせアイテム -->
          <div class="space-y-4">
            <NewsItem
              v-for="news in newsItems"
              :key="news.id"
              :date="news.date"
              :category="news.category"
              :title="news.title"
              :summary="news.summary"
            />
          </div>
          <!-- もっと見るボタン -->
          <div class="text-center mt-12">
            <button
              @click="navigateTo('/news')"
              class="inline-flex items-center font-orbitron px-6 py-3 transition-all duration-300 cursor-pointer"
            >
              and more
              <svg
                class="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </AnimationMatrix>
    </section>
    <!-- FAQセクション -->
    <section class="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <AnimationMatrix>
        <div class="max-w-screen-lg mx-auto px-4 md:px-8">
          <!-- ヘッダー -->
          <div class="text-center mb-12 md:mb-16">
            <div class="inline-block mb-4">
              <div class="h-full">
                <div class="flex gap-1 items-end justify-center h-full">
                  <h2 class="text-3xl font-orbitron text-slate-500">FAQ</h2>
                  <span class="text-lg text-gray-500">/</span>
                  <p class="text-gray-500">よくあるご質問</p>
                </div>
              </div>
            </div>
          </div>
          <!-- FAQアイテム -->
          <div class="space-y-4">
            <FaqAccordion
              v-for="value in faqs"
              :key="value.title"
              :title="value.title"
              :content="value.content"
            />
            <!-- もっと見るボタン -->
            <div class="text-center mt-12">
              <button
                @click="navigateTo('/faq')"
                class="inline-flex items-center font-orbitron px-6 py-3 transition-all duration-300 cursor-pointer"
              >
                and more
                <svg
                  class="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </AnimationMatrix>
    </section>
  </article>
</template>

<script setup lang="ts">
const faqs = [
  {
    title: "どのような業界のお客様と取引がありますか？",
    content: `製造業、金融業、小売業、医療・ヘルスケア業界など、幅広い業界のお客様とお取引させていただいております。
          特にDX（デジタルトランスフォーメーション）推進をお考えの企業様、新規事業立ち上げをご検討の企業様からのご相談を多くいただいております。`,
  },
  {
    title: "開発期間はどの程度かかりますか？",
    content:
      "プロジェクトの規模や要件により異なりますが、一般的な開発期間の目安は以下の通りです：",
  },

  {
    title: "どのような技術スタックを使用していますか？",
    content:
      "最新の技術トレンドを取り入れつつ、安定性と保守性を重視した技術選定を行っています：",
  },

  {
    title: "保守・運用サポートは提供していますか？",
    content:
      "はい、システムの保守・運用サポートを提供しております。お客様のご要望に応じて、以下のようなサポートプランをご用意しています：",
  },

  {
    title: "見積もりや相談は無料ですか？",
    content:
      "はい、初回のご相談・お見積もりは無料で承っております。お客様のご要望やビジネス課題をお聞かせいただき、最適なソリューションをご提案いたします。オンライン・オフライン問わず対応可能ですので、お気軽にお問い合わせください。",
  },
];

// お知らせデータ
const newsItems = [
  {
    id: 1,
    date: "2024.01.15",
    category: "サービス",
    title: "新サービス「AIソリューション開発パッケージ」をリリースしました",
    summary:
      "機械学習・AI技術を活用したソリューション開発を、より効率的に進められるパッケージサービスを開始いたします。",
  },
  {
    id: 2,
    date: "2024.01.10",
    category: "イベント",
    title: "DXセミナー「デジタル変革の成功事例と実践方法」開催のお知らせ",
    summary:
      "2024年2月20日（火）にオンラインセミナーを開催いたします。参加無料、事前申込制です。",
  },
  {
    id: 3,
    date: "2024.01.05",
    category: "重要",
    title: "年末年始休業期間について",
    summary:
      "誠に勝手ながら、12月29日（金）から1月3日（水）まで年末年始休業とさせていただきます。",
  },
  {
    id: 4,
    date: "2023.12.25",
    category: "お知らせ",
    title: "ISO27001認証を取得いたしました",
    summary:
      "情報セキュリティマネジメントシステムの国際規格であるISO27001の認証を取得いたしました。",
  },
  {
    id: 5,
    date: "2023.12.20",
    category: "サービス",
    title: "クラウド移行支援サービスの提供を開始",
    summary:
      "オンプレミスからクラウドへの移行を包括的にサポートする新サービスの提供を開始いたします。",
  },
];
</script>
