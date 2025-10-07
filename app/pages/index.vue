<template>
  <article>
    <section>
      <TopFirstView />
    </section>

    <!-- 企業メッセージセクション -->
    <BackGroundAnimation>
      <section class="py-16 md:py-20 max-w-screen-xl mx-auto px-4 md:px-8">
        <AnimationMatrix>
          <div class="text-center">
            <div class="mb-4">
              <div class="h-full">
                <div class="flex gap-1 items-end justify-center h-full">
                  <h2 class="md:text-3xl text-2xl font-orbitron text-slate-500">
                    OUR STRENGTH
                  </h2>
                  <span class="text-lg text-gray-500">/</span>
                  <p class="text-gray-500">私たちの強み</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center py-10"
          >
            <!-- ヘッダー -->
            <div class="text-center">
              <div class="text-center mb-8">
                <h3
                  class="text-xl md:text-3xl font-orbitron text-slate-700 mb-4"
                >
                  Technology × Marketing
                </h3>
                <div
                  class="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto"
                ></div>
              </div>
              <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                <span class="font-semibold text-slate-800"> システム開発 </span>
                と
                <span class="font-semibold text-slate-800">
                  マーケティング
                </span>
                の融合により、<br class="hidden md:block" />
                お客様のビジネス成長を総合的にサポートします。
              </p>
            </div>
            <!-- メッセージコンテンツ -->
            <div class="">
              <div class="text-center">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div class="text-center">
                    <div
                      class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <svg
                        class="w-8 h-8 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        ></path>
                      </svg>
                    </div>
                    <h4 class="font-orbitron text-lg text-slate-700 mb-3">
                      System Development
                    </h4>
                    <p class="text-gray-600 text-sm leading-relaxed">
                      先進技術による革新的なシステムソリューションで、<br />
                      効率的なビジネス基盤を構築
                    </p>
                  </div>

                  <div class="text-center">
                    <div
                      class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <svg
                        class="w-8 h-8 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                        ></path>
                      </svg>
                    </div>
                    <h4 class="font-orbitron text-lg text-slate-700 mb-3">
                      Digital Marketing
                    </h4>
                    <p class="text-gray-600 text-sm leading-relaxed">
                      データドリブンなマーケティング戦略で、<br />
                      ブランド価値向上と売上拡大を実現
                    </p>
                  </div>
                </div>

                <div
                  class="mt-10 p-6 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg"
                >
                  <p class="text-primary-800 font-medium text-base">
                    両分野の専門知識とデータを活用したシナジー効果により、<br
                      class="hidden md:block"
                    />
                    お客様のDX推進と事業成長を包括的にサポートいたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- もっと見るボタン -->
          <div class="text-center mt-4">
            <button
              @click="navigateTo('/service')"
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
        </AnimationMatrix>
      </section>

      <!-- お知らせセクション -->
      <section class="py-16 md:py-24 max-w-screen-lg mx-auto px-4 md:px-8">
        <AnimationMatrix>
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
          <div
            v-if="newsItems.length > 5"
            class="text-center mt-12"
          >
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
        </AnimationMatrix>
      </section>
    </BackGroundAnimation>
    <!-- FAQセクション -->
    <section
      class="bg-gradient-to-b from-gray-50 to-white opacity-90 py-16 md:py-24"
    >
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
            <div
              v-if="faqs.length > 5"
              class="text-center mt-12"
            >
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
    title: "開発期間はどの程度かかりますか？",
    content:
      "プロジェクトの規模や要件により異なりますので、お気軽にお問いわせください。",
  },

  {
    title: "どのような技術スタックを使用していますか？",
    content:
      "最新の技術トレンドを取り入れつつ、安定性と保守性を重視した技術選定を行っています",
  },

  {
    title: "保守・運用サポートは提供していますか？",
    content:
      "はい、システムの保守・運用サポートを提供しております。お客様のご要望に応じてカスマイズを行っていますので、お気軽にお問いわせください。",
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
    date: "2025.10.01",
    category: "サービス",
    title: "コーポレートサイトを全面リニューアルいたしました",
    summary:
      "最先端のテクノロジーと洗練されたデザインで生まれ変わりました。お客様のビジネス課題解決に向けた私たちの想いと実績を、より分かりやすくお伝えいたします。",
  },
];

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
