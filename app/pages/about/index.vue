<template>
  <article>
    <div class="w-full h-40 md:h-60 bg-gray-100">
      <div class="h-full">
        <div class="flex flex-col gap-2 items-center justify-center h-full">
          <h1 class="text-3xl font-orbitron">ABOUT US</h1>
          <p class="text-xl text-slate-500">私たちについて</p>
        </div>
      </div>
    </div>
    <!-- メインコンテンツ -->
    <div class="max-w-screen-2xl mx-auto py-16 px-4 md:px-8 space-y-14">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <!-- 会社概要イメージ -->
        <section class="flex justify-center items-center">
          <div
            class="space-y-10 w-full max-w-md h-80 bg-gradient-to-br from-slate-50 to-zinc-200 rounded-xl border border-gray-100 shadow-lg flex flex-col items-center justify-center p-8"
          >
            <!-- テクノロジー・イノベーションのイラスト -->
            <div class="text-center">
              <div class="mb-4">
                <span
                  class="text-3xl md:text-4xl font-semibold tracking-wider uppercase bg-gradient-to-r from-slate-700 to-slate-500 bg-clip-text text-transparent"
                >
                  PHILOSOPHY
                </span>
              </div>
              <h2 class="font-bold text-gray-900">経営理念</h2>
            </div>
            <h3
              class="text-lg md:text-xl font-bold text-gray-900 leading-tight"
            >
              <span
                class="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
              >
                "革新的な発想と先進技術の融合"
              </span>
            </h3>
          </div>
        </section>
        <!-- ABOUT セクション -->
        <section class="p-1 md:p-14">
          <p class="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
            当社は、
            <span class="font-semibold text-gray-900">
              革新的な発想と先進技術を融合
            </span>
            させ、未来を切り拓くテクノロジー＆デザインのプラットフォームです。
          </p>
          <p class="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
            新規事業創出やDX（デジタルトランスフォーメーション）の実現において、
            <span class="font-semibold text-gray-900">
              企画から実行までを一気通貫で支援
            </span>
            し、スピード感を持った価値創造を推進します。
          </p>
          <p class="text-lg md:text-xl leading-relaxed text-gray-700">
            私たちは、
            <span
              class="bg-gradient-to-r from-slate-700 to-slate-500 bg-clip-text text-transparent font-semibold"
            >
              "スピードある実行"
            </span>
            こそが、日本発のグローバルイノベーションを牽引する鍵と考え、それを体現するパートナーであり続けます。
          </p>
        </section>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <!-- MISSION セクション -->
        <section class="order-2 md:order-1 p-1 md:p-14">
          <!-- ミッション詳細 -->
          <div class="prose prose-lg max-w-none">
            <p class="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
              私たちは、
              <span class="font-semibold text-gray-900">
                技術と創造を融合
              </span>
              させ、今日まだ形になっていないソリューションをいち早く社会へ実装します。
            </p>
            <p class="text-lg md:text-xl leading-relaxed text-gray-700">
              高度化するテクノロジー×創造的思考の力で、あらゆる課題に先手で挑み、新たな価値を創出する
              <span
                class="bg-gradient-to-r from-slate-700 to-slate-500 bg-clip-text text-transparent font-semibold"
              >
                "Accelerator"
              </span>
              として、未来を共にデザインしていきます。
            </p>
          </div>
        </section>
        <!-- ミッション・経営理念イメージ -->
        <section class="flex justify-center items-center order-1 md:order-2">
          <div
            class="space-y-10 w-full max-w-md h-80 bg-gradient-to-br from-slate-50 to-zinc-200 rounded-xl border border-gray-100 shadow-lg flex flex-col items-center justify-center p-8"
          >
            <div class="text-center">
              <span
                class="text-3xl md:text-4xl font-semibold tracking-wider uppercase bg-gradient-to-r from-slate-700 to-slate-500 bg-clip-text text-transparent"
              >
                Mission
              </span>
              <h2
                class="font-bold bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent"
              >
                ミッション
              </h2>
            </div>
            <h3
              class="text-lg md:text-xl font-bold text-gray-900 leading-tight"
            >
              <span
                class="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
              >
                "未来を形作るイノベーション"
              </span>
            </h3>
          </div>
        </section>
      </div>
    </div>
    <div class="w-full h-32 md:h-48 bg-gray-100 grid grid-cols-2 mt-4 md:mt-20">
      <NuxtLink
        to="/about"
        class="bg-slate-400 flex items-center justify-center text-white"
      >
        <span class="text-xl md:text-2xl"> 会社概要 </span>
      </NuxtLink>
      <NuxtLink
        to="/contact"
        class="bg-gray-500 flex items-center justify-center text-white"
      >
        <span class="text-xl md:text-2xl"> お問いわせ </span>
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts"></script>
