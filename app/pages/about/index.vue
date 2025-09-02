<template>
  <article class="bg-gradient-to-br from-white to-stone-50">
    <div class="relative w-full h-40 md:h-60 bg-white overflow-hidden">
      <!-- 背景画像レイヤー（opacity適用） -->
      <div
        class="absolute inset-0 opacity-40"
        :style="{
          backgroundImage: `url(${aboutUsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat',
        }"
      ></div>
      <!-- コンテンツレイヤー -->
      <div class="z-10 h-full">
        <div class="flex flex-col gap-2 items-center justify-center h-full">
          <h1 class="text-3xl font-orbitron drop-shadow-lg">ABOUT US</h1>
          <p class="text-xl text-gray-900 drop-shadow-md">私たちについて</p>
        </div>
      </div>
    </div>
    <!-- メインコンテンツ -->
    <div class="max-w-screen-2xl mx-auto px-4 md:px-8 py-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- 経営理念イメージ -->
        <section class="flex justify-center items-center">
          <div
            class="space-y-10 w-full max-w-xl h-80 flex flex-col items-center justify-center"
          >
            <!-- テクノロジー・イノベーションのイラスト -->
            <h2 class="text-left">
              <div class="flex flex-col gap-2 text-3xl md:text-4xl">
                <AnimationFlow> PHILOSOPHY </AnimationFlow>
                <AnimationFlow> 経営理念 </AnimationFlow>
                <AnimationFlow> "革新的な発想と先進技術の融合" </AnimationFlow>
              </div>
            </h2>
          </div>
        </section>
        <!-- ABOUT セクション -->
        <section class="p-1 md:p-14">
          <AnimationMatrix>
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
          </AnimationMatrix>
        </section>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- MISSION セクション -->
        <section class="order-2 md:order-1 p-1 md:p-14">
          <AnimationMatrix>
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
          </AnimationMatrix>
          <!-- ミッション詳細 -->
        </section>
        <!-- ミッション・経営理念イメージ -->
        <section class="flex justify-center items-center order-1 md:order-2">
          <div
            class="space-y-4 w-full max-w-xl h-72 flex flex-col items-center justify-center"
          >
            <h2 class="text-left">
              <div class="flex flex-col gap-2 text-3xl md:text-4xl">
                <AnimationFlow> MISSION </AnimationFlow>
                <AnimationFlow> ミッション </AnimationFlow>
                <AnimationFlow> "未来を形作るイノベーション" </AnimationFlow>
              </div>
            </h2>
          </div>
        </section>
      </div>
    </div>
    <div class="w-full mt-4 md:mt-20">
      <AnimationMatrix>
        <GridLinks :links="gridLinks" />
      </AnimationMatrix>
    </div>
  </article>
</template>

<script setup lang="ts">
import missionBg from "~/assets/img/illust/mission.png";
import aboutUsBg from "~/assets/img/illust/about_us.png";
import earthBg from "~/assets/img/background/earth.png";
import networkBg from "~/assets/img/illust/network.png";

const gridLinks = [
  {
    to: "/company",
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

<style scoped></style>
