<template>
  <article class="bg-gradient-to-br from-white to-stone-50">
    <BackGroundAnimation>
      <Breadcrumb :items="breadcrumbItems" />
      <div class="relative w-full h-full overflow-hidden mb-10">
        <!-- コンテンツレイヤー -->
        <div class="z-10 max-w-screen-xl mx-auto h-full flex items-center px-4">
          <div
            class="flex flex-col gap-2 justify-center h-fit border-l-8 border-slate-500 pl-4"
          >
            <h1 class="text-3xl font-orbitron drop-shadow-lg">ABOUT US</h1>
            <p class="text-xl text-gray-900 drop-shadow-md">私たちについて</p>
          </div>
        </div>
      </div>
      <!-- メインコンテンツ -->
      <div class="max-w-screen-xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- 経営理念イメージ -->
          <section class="flex justify-center items-center">
            <div
              class="space-y-10 w-full max-w-xl h-52 flex flex-col items-center justify-center"
            >
              <!-- テクノロジー・イノベーションのイラスト -->
              <h2 class="text-left">
                <div class="flex flex-col gap-2">
                  <div class="text-3xl md:text-4xl">
                    <AnimationFlow>PHILOSOPHY</AnimationFlow>
                  </div>
                  <div class="text-3xl md:text-4xl">
                    <AnimationFlow>経営理念</AnimationFlow>
                  </div>
                  <div class="text-xl md:text-2xl">
                    <AnimationFlow
                      >"革新的な発想と先進技術の融合"</AnimationFlow
                    >
                  </div>
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

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <!-- MISSION セクション -->
          <section class="order-2 md:order-1 p-1 md:p-14">
            <AnimationMatrix>
              <div class="prose prose-lg max-w-none">
                <p
                  class="text-lg md:text-xl leading-relaxed text-gray-700 mb-6"
                >
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
              class="space-y-4 w-full max-w-xl h-52 flex flex-col items-center justify-center"
            >
              <h2 class="text-left">
                <div class="flex flex-col gap-2">
                  <div class="text-3xl md:text-4xl">
                    <AnimationFlow>MISSION</AnimationFlow>
                  </div>
                  <div class="text-3xl md:text-4xl">
                    <AnimationFlow>ミッション</AnimationFlow>
                  </div>
                  <div class="text-xl md:text-2xl">
                    <AnimationFlow>"未来を形作るイノベーション"</AnimationFlow>
                  </div>
                </div>
              </h2>
            </div>
          </section>
        </div>
      </div>
    </BackGroundAnimation>
    <div class="w-full">
      <AnimationMatrix></AnimationMatrix>
      <GridLinks :links="gridLinks" />
    </div>
  </article>
</template>

<script setup lang="ts">
import missionBg from "~/assets/img/illust/mission.png";
import aboutUsBg from "~/assets/img/illust/about_us.png";
import earthBg from "~/assets/img/background/earth.png";
import networkBg from "~/assets/img/illust/network.png";

const breadcrumbItems = [{ label: "私たちについて" }];

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

useHead({
  title: "私たちについて | Innovation Style - 経営理念・ミッション",
  meta: [
    {
      name: "description",
      content:
        "Innovation Styleは革新的な発想と先進技術を融合させ、未来を切り拓くテクノロジー＆デザインのプラットフォームです。新規事業創出やDX実現において企画から実行まで一気通貫で支援。スピードある実行で日本発のグローバルイノベーションを牽引し、お客様と共に新たな価値を創出します。",
    },
  ],
});
</script>

<style scoped></style>
