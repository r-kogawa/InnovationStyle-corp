<template>
  <article class="relative">
    <div class="relative w-full h-60 md:h-80 overflow-hidden">
      <!-- 背景エフェクト -->
      <div class="absolute inset-0">
        <!-- ベース背景 -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900"
        ></div>

        <!-- 背景画像レイヤー -->
        <div
          class="absolute inset-0 opacity-30 mix-blend-overlay"
          :style="{
            backgroundImage: `url(${serviceBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>

        <!-- データグリッド -->
        <div class="absolute inset-0 data-grid opacity-20"></div>

        <!-- ホログラム効果 -->
        <div class="absolute inset-0 hologram opacity-30"></div>

        <!-- 動的グロー -->
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"
        ></div>
      </div>

      <!-- コンテンツレイヤー -->
      <div
        class="relative z-10 h-full flex flex-col gap-4 items-center justify-center"
      >
        <div class="text-center space-y-4">
          <h1
            class="text-4xl md:text-6xl font-orbitron text-primary-100 animate-neon-glow"
          >
            <span class="inline-block animate-cyber-pulse">SERVICE</span>
          </h1>
          <div class="flex items-center gap-3 justify-center">
            <div
              class="w-12 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"
            ></div>
            <p
              class="text-xl md:text-2xl text-primary-200 font-orbitron tracking-wider"
            >
              事業内容
            </p>
            <div
              class="w-12 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"
            ></div>
          </div>
          <div class="flex items-center justify-center gap-2 mt-6">
            <div
              class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"
            ></div>
            <div
              class="w-2 h-2 bg-primary-400 rounded-full animate-pulse"
              style="animation-delay: 0.3s"
            ></div>
            <div
              class="w-2 h-2 bg-primary-300 rounded-full animate-pulse"
              style="animation-delay: 0.6s"
            ></div>
          </div>
        </div>
      </div>

      <!-- スキャンライン -->
      <div class="absolute inset-0 scanlines opacity-20"></div>
    </div>
    <!-- メインコンテンツ -->
    <div class="relative max-w-screen-2xl mx-auto px-4 md:px-8 py-16">
      <!-- 背景エフェクト -->
      <div class="absolute inset-0 -z-10">
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent"
        ></div>
        <div class="absolute inset-0 hex-pattern opacity-10"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
        <!-- システム開発タイトル -->
        <section class="flex justify-center items-center">
          <div
            class="space-y-4 w-full max-w-xl h-52 flex flex-col items-center justify-center"
          >
            <h2 class="text-left">
              <div class="flex flex-col gap-2">
                <div class="text-2xl md:text-4xl">
                  <AnimationFlow>システム開発</AnimationFlow>
                </div>
                <div class="text-2xl md:text-4xl">
                  <AnimationFlow>SYSTEM</AnimationFlow>
                </div>
                <div class="text-2xl md:text-4xl">
                  <AnimationFlow>DEVELOPMENT</AnimationFlow>
                </div>
                <div class="text-xl md:text-2xl">
                  <AnimationFlow>"未来を形作るシステム"</AnimationFlow>
                </div>
              </div>
            </h2>
          </div>
        </section>
        <!-- システム開発詳細 -->
        <section class="p-1 md:p-14">
          <AnimationMatrix>
            <div class="relative p-6 neon-border rounded-lg hologram">
              <p
                class="text-lg md:text-xl leading-relaxed text-primary-100 mb-6 border-b border-primary-500/30 pb-6"
              >
                最先端の
                <span class="font-semibold text-primary-300 animate-neon-glow">
                  技術力と卓越したシステム設計
                </span>
                により、お客様のデジタルトランスフォーメーションを実現します。
              </p>
              <div class="space-y-4">
                <!-- Web・モバイルアプリ開発 -->
                <div
                  class="flex items-center space-x-3 p-3 rounded-md hover:bg-primary-500/10 transition-all duration-300 group"
                >
                  <div
                    class="p-2 bg-secondary-700 rounded-full group-hover:bg-primary-600 transition-colors duration-300"
                  >
                    <svg
                      class="w-4 h-4 text-primary-300 group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <span
                    class="text-primary-200 group-hover:text-primary-100 transition-colors duration-300"
                    >Web・モバイルアプリケーション開発</span
                  >
                </div>
                <!-- AI導入サービス -->
                <div
                  class="flex items-center space-x-3 p-3 rounded-md hover:bg-primary-500/10 transition-all duration-300 group"
                >
                  <div
                    class="p-2 bg-secondary-700 rounded-full group-hover:bg-primary-600 transition-colors duration-300"
                  >
                    <svg
                      class="w-4 h-4 text-primary-300 group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span
                    class="text-primary-200 group-hover:text-primary-100 transition-colors duration-300"
                    >AI導入によるインテリジェントなシステム構築</span
                  >
                </div>
                <!-- 外部サービスAPI連携 -->
                <div
                  class="flex items-center space-x-3 p-3 rounded-md hover:bg-primary-500/10 transition-all duration-300 group"
                >
                  <div
                    class="p-2 bg-secondary-700 rounded-full group-hover:bg-primary-600 transition-colors duration-300"
                  >
                    <svg
                      class="w-4 h-4 text-primary-300 group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <span
                    class="text-primary-200 group-hover:text-primary-100 transition-colors duration-300"
                    >外部API連携によるシステム拡張</span
                  >
                </div>
                <!-- クラウドサービス連携 -->
                <div
                  class="flex items-center space-x-3 p-3 rounded-md hover:bg-primary-500/10 transition-all duration-300 group"
                >
                  <div
                    class="p-2 bg-secondary-700 rounded-full group-hover:bg-primary-600 transition-colors duration-300"
                  >
                    <svg
                      class="w-4 h-4 text-primary-300 group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
                      />
                    </svg>
                  </div>
                  <span
                    class="text-primary-200 group-hover:text-primary-100 transition-colors duration-300"
                    >クラウドサービスとの連携開発</span
                  >
                </div>
              </div>
            </div>
          </AnimationMatrix>
        </section>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- デジタルマーケティング事業タイトル -->
        <section class="flex justify-center items-center order-1 md:order-2">
          <div
            class="space-y-10 w-full max-w-xl h-52 flex flex-col items-center justify-center"
          >
            <h2 class="text-left">
              <div class="flex flex-col gap-2">
                <div class="text-2xl md:text-4xl">
                  <AnimationFlow>デジタルマーケティング</AnimationFlow>
                </div>
                <div class="text-2xl md:text-4xl">
                  <AnimationFlow>DIGITAL</AnimationFlow>
                </div>
                <div class="text-2xl md:text-4xl">
                  <AnimationFlow>MARKETING</AnimationFlow>
                </div>
                <div class="text-xl md:text-2xl">
                  <AnimationFlow>"データ駆動型マーケティング"</AnimationFlow>
                </div>
              </div>
            </h2>
          </div>
        </section>
        <!-- デジタルマーケティング詳細 -->
        <section class="p-1 md:p-14 order-2 md:order-1">
          <AnimationMatrix>
            <div class="relative p-6 neon-border rounded-lg hologram">
              <p
                class="text-lg md:text-xl leading-relaxed text-primary-100 mb-6 border-b border-primary-500/30 pb-6"
              >
                デジタルマーケティングの
                <span class="font-semibold text-primary-300 animate-neon-glow">
                  専門家として、データ駆動型のアプローチ
                </span>
                でお客様のビジネス成長をサポートします。
              </p>
              <div class="space-y-4">
                <!-- リスティング広告 -->
                <div
                  class="flex items-center space-x-3 p-3 rounded-md hover:bg-primary-500/10 transition-all duration-300 group"
                >
                  <div
                    class="p-2 bg-secondary-700 rounded-full group-hover:bg-primary-600 transition-colors duration-300"
                  >
                    <svg
                      class="w-4 h-4 text-primary-300 group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <span
                    class="text-primary-200 group-hover:text-primary-100 transition-colors duration-300"
                    >リスティング広告による検索連動型の効果的な集客</span
                  >
                </div>
                <!-- SNS広告 -->
                <div
                  class="flex items-center space-x-3 p-3 rounded-md hover:bg-primary-500/10 transition-all duration-300 group"
                >
                  <div
                    class="p-2 bg-secondary-700 rounded-full group-hover:bg-primary-600 transition-colors duration-300"
                  >
                    <svg
                      class="w-4 h-4 text-primary-300 group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      />
                    </svg>
                  </div>
                  <span
                    class="text-primary-200 group-hover:text-primary-100 transition-colors duration-300"
                    >SNS広告によるプラットフォーム特性を活かした運用</span
                  >
                </div>
                <!-- SEO対策 -->
                <div
                  class="flex items-center space-x-3 p-3 rounded-md hover:bg-primary-500/10 transition-all duration-300 group"
                >
                  <div
                    class="p-2 bg-secondary-700 rounded-full group-hover:bg-primary-600 transition-colors duration-300"
                  >
                    <svg
                      class="w-4 h-4 text-primary-300 group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <span
                    class="text-primary-200 group-hover:text-primary-100 transition-colors duration-300"
                    >SEO対策による持続的な集客力向上</span
                  >
                </div>
                <!-- コンテンツマーケティング -->
                <div
                  class="flex items-center space-x-3 p-3 rounded-md hover:bg-primary-500/10 transition-all duration-300 group"
                >
                  <div
                    class="p-2 bg-secondary-700 rounded-full group-hover:bg-primary-600 transition-colors duration-300"
                  >
                    <svg
                      class="w-4 h-4 text-primary-300 group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <span
                    class="text-primary-200 group-hover:text-primary-100 transition-colors duration-300"
                    >価値あるコンテンツ制作によるエンゲージメント向上</span
                  >
                </div>
              </div>

              <!-- 実績プラットフォーム -->
              <div class="mt-8 pt-6 border-t border-primary-500/30">
                <p
                  class="text-sm text-primary-300 mb-4 text-center font-orbitron tracking-wider"
                >
                  実績のあるプラットフォーム
                </p>
                <div
                  class="flex flex-wrap justify-center items-center gap-4 md:gap-10"
                >
                  <!-- Google -->
                  <div
                    class="w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                  >
                    <img
                      :src="googleLogo"
                      alt="Google"
                      class="w-12 h-12 object-contain group-hover:animate-cyber-pulse"
                    />
                  </div>
                  <!-- Facebook -->
                  <div
                    class="w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                  >
                    <img
                      :src="facebookLogo"
                      alt="Facebook"
                      class="w-12 h-12 object-contain group-hover:animate-cyber-pulse"
                    />
                  </div>
                  <!-- Instagram -->
                  <div
                    class="w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                  >
                    <img
                      :src="instagramLogo"
                      alt="Instagram"
                      class="w-12 h-12 object-contain group-hover:animate-cyber-pulse"
                    />
                  </div>
                  <!-- X (Twitter) -->
                  <div
                    class="w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                  >
                    <img
                      :src="xLogo"
                      alt="X"
                      class="w-12 h-12 object-contain group-hover:animate-cyber-pulse"
                    />
                  </div>
                  <!-- TikTok -->
                  <div
                    class="w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                  >
                    <img
                      :src="tiktokLogo"
                      alt="TikTok"
                      class="w-12 h-12 object-contain group-hover:animate-cyber-pulse"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimationMatrix>
        </section>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- 開発フロータイトル -->
        <section class="flex justify-center items-center">
          <div
            class="space-y-10 w-full max-w-xl h-52 flex flex-col items-center justify-center"
          >
            <h2 class="text-left">
              <div class="flex flex-col gap-2">
                <div class="text-2xl md:text-4xl">
                  <AnimationFlow>DEVELOPMENT</AnimationFlow>
                </div>
                <div class="text-2xl md:text-4xl">
                  <AnimationFlow>FLOW</AnimationFlow>
                </div>
                <div class="text-xl md:text-2xl">
                  <AnimationFlow>"信頼される開発プロセス"</AnimationFlow>
                </div>
              </div>
            </h2>
          </div>
        </section>
        <!-- 開発フロー詳細 -->
        <section class="p-1 md:p-14">
          <AnimationMatrix>
            <div class="relative p-6 neon-border rounded-lg hologram">
              <p
                class="text-lg md:text-xl leading-relaxed text-primary-100 mb-6 border-b border-primary-500/30 pb-6"
              >
                カスタムソフトウェア開発、ウェブアプリ、モバイルアプリ開発において、
                <span class="font-semibold text-primary-300 animate-neon-glow">
                  最先端の技術力と卓越したユーザー体験
                </span>
                を提供します。
              </p>
              <div class="space-y-4">
                <!-- 要件定義・企画 -->
                <div
                  class="flex items-center space-x-3 p-3 rounded-md hover:bg-primary-500/10 transition-all duration-300 group"
                >
                  <div
                    class="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-primary-500 transition-colors duration-300"
                  >
                    1
                  </div>
                  <span
                    class="text-primary-200 group-hover:text-primary-100 transition-colors duration-300"
                    >要件定義・企画</span
                  >
                </div>
                <!-- デザイン・設計 -->
                <div
                  class="flex items-center space-x-3 p-3 rounded-md hover:bg-primary-500/10 transition-all duration-300 group"
                >
                  <div
                    class="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-primary-500 transition-colors duration-300"
                  >
                    2
                  </div>
                  <span
                    class="text-primary-200 group-hover:text-primary-100 transition-colors duration-300"
                    >デザイン・設計</span
                  >
                </div>
                <!-- 開発・実装 -->
                <div
                  class="flex items-center space-x-3 p-3 rounded-md hover:bg-primary-500/10 transition-all duration-300 group"
                >
                  <div
                    class="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-primary-500 transition-colors duration-300"
                  >
                    3
                  </div>
                  <span
                    class="text-primary-200 group-hover:text-primary-100 transition-colors duration-300"
                    >開発・実装</span
                  >
                </div>
                <!-- テスト・品質保証 -->
                <div
                  class="flex items-center space-x-3 p-3 rounded-md hover:bg-primary-500/10 transition-all duration-300 group"
                >
                  <div
                    class="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-primary-500 transition-colors duration-300"
                  >
                    4
                  </div>
                  <span
                    class="text-primary-200 group-hover:text-primary-100 transition-colors duration-300"
                    >テスト・品質保証</span
                  >
                </div>
                <!-- 納品・サポート -->
                <div
                  class="flex items-center space-x-3 p-3 rounded-md hover:bg-primary-500/10 transition-all duration-300 group"
                >
                  <div
                    class="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-primary-500 transition-colors duration-300"
                  >
                    5
                  </div>
                  <span
                    class="text-primary-200 group-hover:text-primary-100 transition-colors duration-300"
                    >納品・サポート</span
                  >
                </div>
              </div>
            </div>
          </AnimationMatrix>
        </section>
      </div>
    </div>

    <div class="w-full">
      <GridLinks :links="gridLinks" />
    </div>
  </article>
</template>

<script setup lang="ts">
import earthBg from "~/assets/img/background/earth.png";
import networkBg from "~/assets/img/illust/network.png";
import serviceBg from "~/assets/img/illust/ai-system.png";
// メディアロゴ
import googleLogo from "~/assets/img/service/media/google.png";
import facebookLogo from "~/assets/img/service/media/facebook.png";
import instagramLogo from "~/assets/img/service/media/instagram.png";
import xLogo from "~/assets/img/service/media/x.png";
import tiktokLogo from "~/assets/img/service/media/tiktok.png";

const gridLinks = [
  {
    to: "/about",
    image: earthBg,
    title: "COMPANY",
    description: "会社概要",
  },
  {
    to: "/contact",
    image: networkBg,
    title: "CONTACT",
    description: "お問いわせ",
  },
];
</script>
