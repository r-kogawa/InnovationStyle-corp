<template>
  <article class="relative">
    <BackGroundAnimation>
      <Breadcrumb :items="breadcrumbItems" />
      <div class="relative w-full h-full overflow-hidden mb-10">
        <!-- コンテンツレイヤー -->
        <div class="z-10 max-w-screen-xl mx-auto h-full flex items-center px-4">
          <div
            class="flex flex-col gap-2 justify-center h-fit border-l-8 border-slate-500 pl-4"
          >
            <h1 class="text-3xl font-orbitron drop-shadow-lg">
              SYSTEM DEVELOPMENT
            </h1>
            <p class="text-xl text-gray-900 drop-shadow-md">システム開発実績</p>
          </div>
        </div>
      </div>

      <!-- メインコンテンツ -->
      <div class="relative max-w-screen-xl mx-auto px-0 md:px-8 pt-10 md:pt-14">
        <!-- 実績紹介セクション -->
        <section class="mb-16">
          <div class="text-center mb-12 px-4">
            <h2 class="text-3xl md:text-4xl font-orbitron mb-4">
              <AnimationFlow>CASE STUDIES</AnimationFlow>
            </h2>
            <p class="text-lg md:text-xl text-primary-200">
              これまでに手がけた代表的なシステム開発事例をご紹介します
            </p>
          </div>

          <!-- 事例グリッド -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- 事例1: 契約書作成サービスの開発 -->
            <AnimationMatrix>
              <div
                class="neon-border rounded-lg hologram p-6 transition-transform duration-300"
              >
                <div class="mb-6 space-y-6">
                  <div class="flex items-center justify-between mb-3">
                    <span
                      class="inline-block text-white bg-gradient-to-r from-gray-500 to-gray-700 text-gray-900 px-4 py-2 rounded-full text-sm font-bold"
                    >
                      SUCCESS STORY 01
                    </span>
                    <div class="text-right">
                      <div
                        class="text-primary-300 text-2xl font-bold animate-neon-glow"
                      >
                        50%
                      </div>
                      <div class="text-primary-200 text-xs">作業時間削減</div>
                    </div>
                  </div>
                  <div
                    class="w-full h-52 bg-gradient-to-r from-gray-500 to-gray-700"
                  >
                    <img
                      src="~/assets/img/white-logo.png"
                      alt="契約書作成の完全自動化システム"
                      class="w-full h-full object-contain"
                    />
                  </div>
                  <h3
                    class="text-xl font-bold text-primary-100 mb-3 leading-tight"
                  >
                    契約書作成の完全自動化システム
                  </h3>
                  <p class="text-primary-200 text-base mb-4 leading-relaxed">
                    手作業で行っていた契約書作成・送付業務を完全自動化。顧客管理システムと連携し、ワンクリックで複数の契約書を一括送信できるシステムを構築しました。
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
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      導入効果
                    </h4>
                    <ul class="text-primary-200 space-y-2 text-sm">
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>
                          契約書作成時間を
                          <strong class="text-primary-300 animate-neon-glow">
                            50%削減
                          </strong>
                        </span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>
                          入力ミスを
                          <strong class="text-primary-300 animate-neon-glow">
                            ゼロ
                          </strong>
                          に
                        </span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>契約進捗をリアルタイムで把握可能</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimationMatrix>

            <!-- 事例2: トランクルームポータルサイトの開発 -->
            <AnimationMatrix>
              <div
                class="neon-border rounded-lg hologram p-6 transition-transform duration-300 bg-gradient-to-br from-primary-900/20 to-secondary-900/20"
              >
                <div class="mb-6 space-y-6">
                  <div class="flex items-center justify-between mb-3">
                    <span
                      class="inline-block text-white bg-gradient-to-r from-gray-500 to-gray-700 text-gray-900 px-4 py-2 rounded-full text-sm font-bold"
                    >
                      SUCCESS STORY 02
                    </span>
                    <div class="text-right">
                      <div
                        class="text-primary-300 text-2xl font-bold animate-neon-glow"
                      >
                        300%
                      </div>
                      <div class="text-primary-200 text-xs">問い合わせ増加</div>
                    </div>
                  </div>
                  <div
                    class="w-full h-52 bg-gradient-to-r from-gray-500 to-gray-700"
                  >
                    <img
                      src="~/assets/img/white-logo.png"
                      alt="地図検索機能付き物件検索サイト"
                      class="w-full h-full object-contain"
                    />
                  </div>
                  <h3
                    class="text-xl font-bold text-primary-100 mb-3 leading-tight"
                  >
                    地図検索機能付き物件検索サイト
                  </h3>
                  <p class="text-primary-200 text-base mb-4 leading-relaxed">
                    スマートフォンの位置情報を活用し、現在地から最寄りのトランクルームを簡単に見つけられる検索サイトを開発。直感的な地図操作で物件探しが劇的に便利になりました。
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
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      導入効果
                    </h4>
                    <ul class="text-primary-200 space-y-2 text-sm">
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>地図上で直感的に物件検索が可能</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>現在地からの距離・時間を自動表示</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span
                          >問い合わせ数が
                          <strong class="text-primary-300 animate-neon-glow">
                            3倍
                          </strong>
                          に増加
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimationMatrix>

            <!-- 事例3: データ分析サービスの開発 -->
            <AnimationMatrix>
              <div
                class="neon-border rounded-lg hologram p-6 transition-transform duration-300 bg-gradient-to-br from-primary-900/20 to-secondary-900/20"
              >
                <div class="mb-6 space-y-6">
                  <div class="flex items-center justify-between mb-3">
                    <span
                      class="inline-block text-white bg-gradient-to-r from-gray-500 to-gray-700 text-gray-900 px-4 py-2 rounded-full text-sm font-bold"
                    >
                      SUCCESS STORY 03
                    </span>
                    <div class="text-right">
                      <div
                        class="text-primary-300 text-2xl font-bold animate-neon-glow"
                      >
                        80%
                      </div>
                      <div class="text-primary-200 text-xs">分析時間短縮</div>
                    </div>
                  </div>
                  <div
                    class="w-full h-52 bg-gradient-to-r from-gray-500 to-gray-700"
                  >
                    <img
                      src="~/assets/img/white-logo.png"
                      alt="マーケティング効果測定ダッシュボード"
                      class="w-full h-full object-contain"
                    />
                  </div>
                  <h3
                    class="text-xl font-bold text-primary-100 mb-3 leading-tight"
                  >
                    マーケティング効果測定ダッシュボード
                  </h3>
                  <p class="text-primary-200 text-base mb-4 leading-relaxed">
                    複数の広告媒体とウェブサイトのデータを一元管理し、リアルタイムで効果測定できるダッシュボードを構築。データに基づいた迅速な意思決定を可能にしました。
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
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      導入効果
                    </h4>
                    <ul class="text-primary-200 space-y-2 text-sm">
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>全データを1つの画面で確認可能</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>
                          分析作業時間を
                          <strong class="text-primary-300 animate-neon-glow">
                            80%削減
                          </strong>
                        </span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>異常値を自動検知・通知</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimationMatrix>

            <!-- 事例4: 車部品メーカーのカタログシステム構築 -->
            <AnimationMatrix>
              <div
                class="neon-border rounded-lg hologram p-6 transition-transform duration-300 bg-gradient-to-br from-primary-900/20 to-secondary-900/20"
              >
                <div class="mb-6 space-y-6">
                  <div class="flex items-center justify-between mb-3">
                    <span
                      class="inline-block text-white bg-gradient-to-r from-gray-500 to-gray-700 text-gray-900 px-4 py-2 rounded-full text-sm font-bold"
                    >
                      SUCCESS STORY 04
                    </span>
                    <div class="text-right">
                      <div
                        class="text-primary-300 text-2xl font-bold animate-neon-glow"
                      >
                        90%
                      </div>
                      <div class="text-primary-200 text-xs">
                        カタログ作成時間短縮
                      </div>
                    </div>
                  </div>
                  <div
                    class="w-full h-52 bg-gradient-to-r from-gray-500 to-gray-700"
                  >
                    <img
                      src="~/assets/img/white-logo.png"
                      alt="商品カタログ管理システムの刷新"
                      class="w-full h-full object-contain"
                    />
                  </div>
                  <h3
                    class="text-xl font-bold text-primary-100 mb-3 leading-tight"
                  >
                    商品カタログ管理システムの刷新
                  </h3>
                  <p class="text-primary-200 text-base mb-4 leading-relaxed">
                    10年以上使用していた古いシステムを最新技術で完全リニューアル。商品情報の管理からカタログ作成まで、すべての業務を効率化しました。
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
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      導入効果
                    </h4>
                    <ul class="text-primary-200 space-y-2 text-sm">
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>直感的で使いやすい操作画面</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>
                          カタログ作成を
                          <strong class="text-primary-300 animate-neon-glow">
                            90%高速化
                          </strong>
                        </span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>商品情報の一元管理を実現</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimationMatrix>

            <!-- 事例5: セミナー予約サイト -->
            <AnimationMatrix>
              <div
                class="neon-border rounded-lg hologram p-6 transition-transform duration-300 bg-gradient-to-br from-primary-900/20 to-secondary-900/20"
              >
                <div class="mb-6 space-y-6">
                  <div class="flex items-center justify-between mb-3">
                    <span
                      class="inline-block text-white bg-gradient-to-r from-gray-500 to-gray-700 text-gray-900 px-4 py-2 rounded-full text-sm font-bold"
                    >
                      SUCCESS STORY 05
                    </span>
                    <div class="text-right">
                      <div
                        class="text-primary-300 text-2xl font-bold animate-neon-glow"
                      >
                        150%
                      </div>
                      <div class="text-primary-200 text-xs">参加者増加</div>
                    </div>
                  </div>
                  <div
                    class="w-full h-52 bg-gradient-to-r from-gray-500 to-gray-700"
                  >
                    <img
                      src="~/assets/img/white-logo.png"
                      alt="オンラインセミナー予約システム"
                      class="w-full h-full object-contain"
                    />
                  </div>
                  <h3
                    class="text-xl font-bold text-primary-100 mb-3 leading-tight"
                  >
                    オンラインセミナー予約システム
                  </h3>
                  <p class="text-primary-200 text-base mb-4 leading-relaxed">
                    セミナーの申込みから参加まで、すべてをオンラインで完結できるシステムを構築。顧客管理システムと連携し、効果的なマーケティング活動を支援しました。
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
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      導入効果
                    </h4>
                    <ul class="text-primary-200 space-y-2 text-sm">
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>24時間いつでもオンライン申込み可能</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>
                          参加者数が
                          <strong class="text-primary-300 animate-neon-glow">
                            150%増加
                          </strong>
                        </span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>自動フォローアップメール送信</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimationMatrix>

            <!-- 事例6: 帳票作成・管理アプリケーション -->
            <AnimationMatrix>
              <div
                class="neon-border rounded-lg hologram p-6 transition-transform duration-300 bg-gradient-to-br from-primary-900/20 to-secondary-900/20"
              >
                <div class="mb-6 space-y-6">
                  <div class="flex items-center justify-between mb-3">
                    <span
                      class="inline-block text-white bg-gradient-to-r from-gray-500 to-gray-700 text-gray-900 px-4 py-2 rounded-full text-sm font-bold"
                    >
                      SUCCESS STORY 06
                    </span>
                    <div class="text-right">
                      <div
                        class="text-primary-300 text-2xl font-bold animate-neon-glow"
                      >
                        70%
                      </div>
                      <div class="text-primary-200 text-xs">
                        帳票作成時間短縮
                      </div>
                    </div>
                  </div>
                  <div
                    class="w-full h-52 bg-gradient-to-r from-gray-500 to-gray-700"
                  >
                    <img
                      src="~/assets/img/white-logo.png"
                      alt="帳票作成・管理システム"
                      class="w-full h-full object-contain"
                    />
                  </div>
                  <h3
                    class="text-xl font-bold text-primary-100 mb-3 leading-tight"
                  >
                    帳票作成・管理システム
                  </h3>
                  <p class="text-primary-200 text-base mb-4 leading-relaxed">
                    請求書や見積書などの帳票を簡単に作成・管理できるシステムを開発。ドラッグ＆ドロップで直感的にレイアウトを編集できます。
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
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      導入効果
                    </h4>
                    <ul class="text-primary-200 space-y-2 text-sm">
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>直感的なドラッグ＆ドロップ操作</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>
                          帳票作成時間を
                          <strong class="text-primary-300 animate-neon-glow">
                            70%短縮
                          </strong>
                        </span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>印刷履歴の完全管理</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimationMatrix>

            <!-- 事例7: 在庫管理システム -->
            <AnimationMatrix>
              <div
                class="neon-border rounded-lg hologram p-6 transition-transform duration-300 bg-gradient-to-br from-primary-900/20 to-secondary-900/20"
              >
                <div class="mb-6 space-y-6">
                  <div class="flex items-center justify-between mb-3">
                    <span
                      class="inline-block text-white bg-gradient-to-r from-gray-500 to-gray-700 text-gray-900 px-4 py-2 rounded-full text-sm font-bold"
                    >
                      SUCCESS STORY 07
                    </span>
                    <div class="text-right">
                      <div
                        class="text-primary-300 text-2xl font-bold animate-neon-glow"
                      >
                        95%
                      </div>
                      <div class="text-primary-200 text-xs">
                        在庫管理精度向上
                      </div>
                    </div>
                  </div>
                  <div
                    class="w-full h-52 bg-gradient-to-r from-gray-500 to-gray-700"
                  >
                    <img
                      src="~/assets/img/white-logo.png"
                      alt="リアルタイム在庫管理システム"
                      class="w-full h-full object-contain"
                    />
                  </div>
                  <h3
                    class="text-xl font-bold text-primary-100 mb-3 leading-tight"
                  >
                    リアルタイム在庫管理システム
                  </h3>
                  <p class="text-primary-200 text-base mb-4 leading-relaxed">
                    商品の入庫から出庫までをリアルタイムで管理できるシステムを構築。在庫不足や過剰在庫を防ぎ、効率的な在庫運用を実現しました。
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
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      導入効果
                    </h4>
                    <ul class="text-primary-200 space-y-2 text-sm">
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>リアルタイムで在庫状況を把握</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>
                          在庫管理精度を
                          <strong class="text-primary-300 animate-neon-glow">
                            95%向上
                          </strong>
                        </span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-primary-300 mr-2">✓</span>
                        <span>自動アラートで欠品防止</span>
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
  { label: "システム開発実績" },
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
