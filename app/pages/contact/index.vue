<template>
  <article class="relative bg-gradient-to-br from-white to-stone-50">
    <BackGroundAnimation>
      <Breadcrumb :items="breadcrumbItems" />
      <div class="relative w-full h-32 md:h-40 overflow-hidden">
        <!-- コンテンツレイヤー -->
        <div class="z-10 max-w-screen-xl mx-auto h-full flex items-center px-4">
          <div
            class="flex flex-col gap-2 justify-center h-fit border-l-8 border-slate-500 pl-4"
          >
            <h1 class="text-3xl font-orbitron drop-shadow-lg">CONTACT</h1>
            <p class="text-xl text-gray-900 drop-shadow-md">お問い合わせ</p>
          </div>
        </div>
      </div>

      <div class="max-w-screen-sm px-4 md:px-0 mx-auto mb-10">
        <span class="text-sm md:text-lg text-slate-700 block text-center">
          下記のフォームからお問い合わせください。
        </span>
        <span class="text-sm md:text-lg text-slate-700 block text-center">
          お問い合わせ内容を確認後、担当者よりご連絡させて頂きます。
        </span>
      </div>
      <div
        class="w-full md:w-[700px] mx-auto bg-white p-6 md:p-10 rounded shadow-lg border border-slate-200 mb-20"
      >
        <AnimationMatrix>
          <div class="flex flex-col gap-4">
            <InputText
              title="COMPANY / 法人名"
              name="company_name"
              required
              placeholder="法人名"
              type="text"
            />
            <InputText
              title="NAME / お名前"
              name="name"
              required
              placeholder="お名前"
              type="text"
            />
            <InputText
              title="EMAIL / メールアドレス"
              name="email"
              required
              placeholder="Email"
              type="email"
            />
            <InputText
              title="PHONE / 電話番号"
              name="phone"
              required
              placeholder="電話番号"
              type="text"
            />
            <InputTextArea
              title="MESSAGE / お問い合わせ内容"
              name="message"
              required
              placeholder="お問い合わせ内容"
              :rows="10"
            />
          </div>
          <div class="max-w-screen-sm mx-auto pt-10 flex justify-center">
            <button
              @click="() => console.log('送信')"
              class="w-fit bg-slate-700 text-white py-2 px-20 rounded-full cursor-pointer"
            >
              内容を送信する
            </button>
          </div>
        </AnimationMatrix>
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
import aboutUsBg from "~/assets/img/illust/about_us.png";
import networkBg from "~/assets/img/illust/network.png";

const breadcrumbItems = [{ label: "お問い合わせ" }];

const gridLinks = [
  {
    to: "/about",
    image: aboutUsBg,
    title: "ABOUT US",
    description: "私たちについて",
  },
  {
    to: "/company",
    image: earthBg,
    title: "COMPANY",
    description: "会社概要",
  },
];
</script>

<style scoped></style>
