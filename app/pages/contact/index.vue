<template>
  <article class="relative bg-gradient-to-br from-white to-stone-50">
    <BackGroundAnimation>
      <Breadcrumb :items="breadcrumbItems" />
      <div class="relative w-full h-full overflow-hidden mb-10">
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
          <form
            @submit.prevent="handleSubmit"
            netlify
            netlify-honeypot="bot-field"
          >
            <input
              type="hidden"
              name="form-name"
              value="contact-form"
            />
            <input
              type="hidden"
              style="height: 1px"
              v-model="bot_field"
            />
            <div class="flex flex-col gap-4">
              <InputText
                title="COMPANY / 法人名"
                name="company_name"
                required
                placeholder="法人名"
                type="text"
                v-model="form.company_name"
              />
              <InputText
                title="NAME / お名前"
                name="name"
                required
                placeholder="お名前"
                type="text"
                v-model="form.name"
              />
              <InputText
                title="EMAIL / メールアドレス"
                name="email"
                required
                placeholder="Email"
                type="email"
                v-model="form.email"
              />
              <InputText
                title="PHONE / 電話番号"
                name="phone"
                required
                placeholder="電話番号"
                type="text"
                v-model="form.phone"
              />
              <InputTextArea
                title="MESSAGE / お問い合わせ内容"
                name="message"
                required
                placeholder="お問い合わせ内容"
                :rows="10"
                v-model="form.message"
              />
            </div>
            <div class="max-w-screen-sm mx-auto pt-10 flex justify-center">
              <button
                :disabled="is_submit"
                type="submit"
                class="w-fit bg-slate-700 text-white py-2 px-20 rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ is_submit ? "送信中..." : "内容を送信する" }}
              </button>
            </div>
            <div
              v-if="is_error"
              class="max-w-screen-sm mx-auto pt-10 flex justify-center"
            >
              <p class="text-red-500 text-sm">
                お問い合わせ内容の送信に失敗しました。<br />時間をおいて再度お試しください。
              </p>
            </div>
          </form>
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
// import networkBg from "~/assets/img/illust/network.png";

const bot_field = ref("");
const is_error = ref<boolean>(false);
const is_submit = ref<boolean>(false);
const breadcrumbItems = [{ label: "お問い合わせ" }];

const form = ref({
  company_name: "",
  name: "",
  email: "",
  phone: "",
  message: "",
});

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

const handleSubmit = async () => {
  console.log(form.value);
  is_submit.value = true;
  is_error.value = false;

  const formData = new FormData();
  formData.append("form-name", "contact-form");
  formData.append("name", form.value.name);
  formData.append("company", form.value.company_name);
  formData.append("email", form.value.email);
  formData.append("phone", form.value.phone);
  formData.append("textarea", form.value.message);

  await fetch("/", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
    body: formData,
  })
    .then(() => {
      navigateTo(`/contact/thanks`, {
        replace: true,
      });
    })
    .catch((error: any) => {
      is_error.value = true;
      console.log(error);
    })
    .finally(() => {
      is_submit.value = false;
      form.value.name = "";
      form.value.company_name = "";
      form.value.email = "";
      form.value.phone = "";
      form.value.message = "";
    });
};
</script>

<style scoped></style>
