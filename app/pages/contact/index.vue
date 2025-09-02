<template>
  <article class="relative bg-gradient-to-br from-white to-stone-50">
    <div class="relative w-full h-40 md:h-60 bg-gray-100 overflow-hidden">
      <!-- 背景画像レイヤー（opacity適用） -->
      <div
        class="absolute inset-0 opacity-50"
        :style="{
          backgroundImage: `url(${networkBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }"
      ></div>
      <!-- コンテンツレイヤー -->
      <div class="z-10 h-full">
        <div class="flex flex-col gap-2 items-center justify-center h-full">
          <h1 class="text-3xl font-orbitron drop-shadow-lg">CONTACT</h1>
          <p class="text-xl text-gray-700 drop-shadow-md">お問い合わせ</p>
        </div>
      </div>
    </div>
    <div class="max-w-screen-sm px-4 md:px-0 mx-auto my-10">
      <span class="text-sm md:text-lg text-slate-700 block text-center">
        下記のフォームからお問い合わせください。
      </span>
      <span class="text-sm md:text-lg text-slate-700 block text-center">
        お問い合わせ内容を確認後、担当者よりご連絡させて頂きます。
      </span>
    </div>
    <div class="max-w-screen-sm mx-auto my-10 text-sm md:text-lg px-4">
      <div class="flex flex-col gap-4">
        <InputText
          title="法人名"
          name="company_name"
          required
          placeholder="法人名"
          type="text"
        />
        <InputText
          title="お名前"
          name="name"
          required
          placeholder="お名前"
          type="text"
        />
        <InputText
          title="メールアドレス"
          name="email"
          required
          placeholder="Email"
          type="email"
        />
        <InputText
          title="電話番号"
          name="phone"
          required
          placeholder="電話番号"
          type="text"
        />
        <InputTextArea
          title="お問い合わせ内容"
          name="message"
          required
          placeholder="お問い合わせ内容"
          :rows="10"
        />
      </div>
    </div>
    <div class="max-w-screen-sm mx-auto py-10 flex justify-center">
      <button
        @click="() => console.log('送信')"
        class="w-fit bg-slate-700 text-white py-2 px-24 rounded-full cursor-pointer"
      >
        内容を送信する
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
import networkBg from "~/assets/img/illust/network.png";
</script>

<style scoped></style>
