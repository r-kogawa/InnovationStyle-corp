<template>
  <article class="relative">
    <BackGroundAnimation>
      <Breadcrumb :items="breadcrumbItems" />
      <div class="relative w-full h-32 md:h-40 overflow-hidden">
        <!-- コンテンツレイヤー -->
        <div class="z-10 max-w-screen-xl mx-auto h-full flex items-center px-4">
          <div
            class="flex flex-col gap-2 justify-center h-fit border-l-8 border-slate-500 pl-4"
          >
            <h1 class="text-3xl font-orbitron drop-shadow-lg">MARKETING</h1>
            <p class="text-xl text-gray-900 drop-shadow-md">
              マーケティング実績
            </p>
          </div>
        </div>
      </div>

      <!-- メインコンテンツ -->
      <div class="relative max-w-screen-xl mx-auto px-0 md:px-8 pt-10 md:pt-14">
        <!-- 実績紹介セクション -->
        <section class="mb-16">
          <div class="text-center mb-12 px-4">
            <h2 class="text-3xl md:text-4xl font-orbitron mb-4">
              <AnimationFlow>SUCCESS CASE</AnimationFlow>
            </h2>
            <p class="text-lg md:text-xl text-primary-200">
              データドリブンなマーケティング支援で成果を創出した実績をご紹介します
            </p>
          </div>

          <!-- 事例グリッド -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- 事例1: 不動産投資商品開発会社 -->
            <AnimationMatrix>
              <div
                class="neon-border rounded-lg hologram p-6 transition-transform duration-300"
              >
                <div class="mb-6 space-y-6">
                  <div class="flex items-center justify-between mb-3">
                    <span
                      class="inline-block text-white bg-gradient-to-r from-gray-500 to-gray-700 text-gray-900 px-4 py-2 rounded-full text-sm font-bold"
                    >
                      SUCCESS CASE 01
                    </span>
                    <div class="text-right">
                      <div
                        class="text-primary-300 text-2xl font-bold animate-neon-glow"
                      >
                        18ヶ月
                      </div>
                      <div class="text-primary-200 text-xs">連続目標達成</div>
                    </div>
                  </div>
                  <div
                    class="w-full h-52 bg-gradient-to-r from-gray-500 to-gray-700"
                  >
                    <img
                      src="~/assets/img/white-logo.png"
                      alt="不動産投資商品開発会社"
                      class="w-full h-full object-contain"
                    />
                  </div>
                  <h3
                    class="text-xl font-bold text-primary-100 mb-3 leading-tight"
                  >
                    不動産投資商品開発会社
                  </h3>
                  <p class="text-primary-200 text-base mb-4 leading-relaxed">
                    システム連携と広告運用の組み合わせで、新規投資家リードの獲得を劇的に効率化。データを活用した精緻な広告配信で、18ヶ月連続で目標を達成しました。
                  </p>
                </div>

                <div class="space-y-4 mb-6">
                  <div class="bg-primary-800/20 py-2">
                    <h4
                      class="text-primary-100 font-bold mb-3 flex items-center"
                    >
                      <svg
                        class="w-5 h-5 mr-2 text-primary-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      実施した施策
                    </h4>
                    <ul class="text-primary-200 space-y-2 text-sm">
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">•</span>
                        <span>自社開発システムで顧客データベースを構築</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">•</span>
                        <span
                          >TikTok・Google・Facebook広告をAPI連携で一元管理</span
                        >
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">•</span>
                        <span>キャンペーンデータをCRMにリアルタイム送信</span>
                      </li>
                    </ul>
                  </div>

                  <div class="bg-primary-800/20 py-2">
                    <h4
                      class="text-primary-100 font-bold mb-3 flex items-center"
                    >
                      <svg
                        class="w-5 h-5 mr-2 text-primary-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      成果
                    </h4>
                    <ul class="text-primary-200 space-y-2 text-sm">
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>
                          リード送客目標を
                          <strong class="text-primary-300 animate-neon-glow">
                            18ヶ月連続達成
                          </strong>
                        </span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>
                          CPA（顧客獲得単価）を
                          <strong class="text-primary-300 animate-neon-glow">
                            30%削減
                          </strong>
                        </span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>
                          CRM（顧客管理）自動スコアリングで
                          <strong class="text-primary-300 animate-neon-glow">
                            商談化率15%向上
                          </strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimationMatrix>

            <!-- 事例2: トランクルーム運用会社 -->
            <AnimationMatrix>
              <div
                class="neon-border rounded-lg hologram p-6 transition-transform duration-300 bg-gradient-to-br from-primary-900/20 to-secondary-900/20"
              >
                <div class="mb-6 space-y-6">
                  <div class="flex items-center justify-between mb-3">
                    <span
                      class="inline-block text-white bg-gradient-to-r from-gray-500 to-gray-700 text-gray-900 px-4 py-2 rounded-full text-sm font-bold"
                    >
                      SUCCESS CASE 02
                    </span>
                    <div class="text-right">
                      <div
                        class="text-primary-300 text-2xl font-bold animate-neon-glow"
                      >
                        20%
                      </div>
                      <div class="text-primary-200 text-xs">CPA削減</div>
                    </div>
                  </div>
                  <div
                    class="w-full h-52 bg-gradient-to-r from-gray-500 to-gray-700"
                  >
                    <img
                      src="~/assets/img/white-logo.png"
                      alt="トランクルーム運用会社"
                      class="w-full h-full object-contain"
                    />
                  </div>
                  <h3
                    class="text-xl font-bold text-primary-100 mb-3 leading-tight"
                  >
                    トランクルーム運用会社
                  </h3>
                  <p class="text-primary-200 text-base mb-4 leading-relaxed">
                    広告とSEO、ページ表示速度改善を組み合わせた総合的なWebマーケティング支援。CPA（顧客獲得単価）20%削減を実現しました。
                  </p>
                </div>

                <div class="space-y-4 mb-6">
                  <div class="bg-primary-800/20 py-2">
                    <h4
                      class="text-primary-100 font-bold mb-3 flex items-center"
                    >
                      <svg
                        class="w-5 h-5 mr-2 text-primary-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      実施した施策
                    </h4>
                    <ul class="text-primary-200 space-y-2 text-sm">
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">•</span>
                        <span
                          >Google・Facebook広告をLP（ランディングページ）一新で改善</span
                        >
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">•</span>
                        <span>検索意図に合わせたSEOコンテンツ設計</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">•</span>
                        <span
                          >Web作品・CDN活用でPageSpeed
                          Insightsスコアを32点改善</span
                        >
                      </li>
                    </ul>
                  </div>

                  <div class="bg-primary-800/20 py-2">
                    <h4
                      class="text-primary-100 font-bold mb-3 flex items-center"
                    >
                      <svg
                        class="w-5 h-5 mr-2 text-primary-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      成果
                    </h4>
                    <ul class="text-primary-200 space-y-2 text-sm">
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>
                          CPA（顧客獲得単価）を
                          <strong class="text-primary-300 animate-neon-glow">
                            20%削減
                          </strong>
                        </span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>
                          SEO経由のリードを
                          <strong class="text-primary-300 animate-neon-glow">
                            40%増加
                          </strong>
                        </span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>
                          モバイル表示速度を
                          <strong class="text-primary-300 animate-neon-glow">
                            1.8秒→0.9秒に改善
                          </strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimationMatrix>

            <!-- 事例3: D2Cコスメブランド（EC） -->
            <AnimationMatrix>
              <div
                class="neon-border rounded-lg hologram p-6 transition-transform duration-300 bg-gradient-to-br from-primary-900/20 to-secondary-900/20"
              >
                <div class="mb-6 space-y-6">
                  <div class="flex items-center justify-between mb-3">
                    <span
                      class="inline-block text-white bg-gradient-to-r from-gray-500 to-gray-700 text-gray-900 px-4 py-2 rounded-full text-sm font-bold"
                    >
                      SUCCESS CASE 03
                    </span>
                    <div class="text-right">
                      <div
                        class="text-primary-300 text-2xl font-bold animate-neon-glow"
                      >
                        145%
                      </div>
                      <div class="text-primary-200 text-xs">新規獲得増</div>
                    </div>
                  </div>
                  <div
                    class="w-full h-52 bg-gradient-to-r from-gray-500 to-gray-700"
                  >
                    <img
                      src="~/assets/img/white-logo.png"
                      alt="D2Cコスメブランド（EC）"
                      class="w-full h-full object-contain"
                    />
                  </div>
                  <h3
                    class="text-xl font-bold text-primary-100 mb-3 leading-tight"
                  >
                    D2Cコスメブランド（EC）
                  </h3>
                  <p class="text-primary-200 text-base mb-4 leading-relaxed">
                    広告運用の最適化とシステム改善で、新規獲得数145%増を実現。データ分析に基づく施策で広告費を抑えつつ売上を大幅に向上させました。
                  </p>
                </div>

                <div class="space-y-4 mb-6">
                  <div class="bg-primary-800/20 py-2">
                    <h4
                      class="text-primary-100 font-bold mb-3 flex items-center"
                    >
                      <svg
                        class="w-5 h-5 mr-2 text-primary-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      実施した施策
                    </h4>
                    <ul class="text-primary-200 space-y-2 text-sm">
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">•</span>
                        <span>UGC調達（顧客の声）でCBO・SNS広告配信</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">•</span>
                        <span>P-MAX（Google自動広告）で新規流入を特化</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">•</span>
                        <span>初回割引LPのA/Bテストで最適化</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">•</span>
                        <span>GTMでイベント再定義・GA4導入で広告連携</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">•</span>
                        <span>EC側（決済システム）でLazy Load導入</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">•</span>
                        <span>BigQueryでデータ集約・可視化</span>
                      </li>
                    </ul>
                  </div>

                  <div class="bg-primary-800/20 py-2">
                    <h4
                      class="text-primary-100 font-bold mb-3 flex items-center"
                    >
                      <svg
                        class="w-5 h-5 mr-2 text-primary-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      成果
                    </h4>
                    <ul class="text-primary-200 space-y-2 text-sm">
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>
                          新規顧客獲得数
                          <strong class="text-primary-300 animate-neon-glow">
                            145%増（3ヶ月で達成）
                          </strong>
                        </span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>
                          平均CPA（顧客獲得単価）
                          <strong class="text-primary-300 animate-neon-glow">
                            38%削減
                          </strong>
                        </span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>
                          モバイルCVR（購入率）
                          <strong class="text-primary-300 animate-neon-glow">
                            2倍（1.4%→2.8%）
                          </strong>
                        </span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>
                          売上前月比
                          <strong class="text-primary-300 animate-neon-glow">
                            92%向上
                          </strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimationMatrix>
          </div>
        </section>
      </div>
    </BackGroundAnimation>

    <div class="w-full">
      <AnimationMatrix>
        <GridLinks :links="gridLinks" />
      </AnimationMatrix>
    </div>
  </article>
</template>

<script setup lang="ts">
import earthBg from "~/assets/img/background/earth.png";
import networkBg from "~/assets/img/illust/network.png";

const breadcrumbItems = [
  { label: "事業内容", to: "/service" },
  { label: "マーケティング実績" },
];

const gridLinks = [
  {
    to: "/service",
    image: earthBg,
    title: "SERVICE",
    description: "事業内容",
  },
  {
    to: "/contact",
    image: networkBg,
    title: "CONTACT",
    description: "お問いわせ",
  },
];
</script>

<style scoped></style>
