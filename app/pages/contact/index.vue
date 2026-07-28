<template>
  <div>
    <PageHero
      :crumbs="[{ label: 'お問い合わせ' }]"
      eng="CONTACT"
      subtitle="お問い合わせ"
    />

    <section class="bg-white">
      <div
        class="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-16 px-8 py-20 max-nav:px-5 max-nav:py-16 nav:grid-cols-[0.85fr_1.15fr]"
      >
        <!-- left info -->
        <div>
          <p class="m-0 text-[15px] leading-[2] text-body">
            システム開発・マーケティングに関するご相談、お見積もり、その他お問い合わせはこちらのフォームよりお気軽にご連絡ください。
          </p>
          <div class="mt-9 border-t border-line-soft">
            <div class="border-b border-line-soft py-[22px]">
              <div class="font-mono text-[10px] tracking-[0.16em] text-faint-2">
                LOCATION
              </div>
              <div class="mt-2 text-[14px] leading-[1.8]">
                〒105-0022 東京都港区海岸1-2-20<br />汐留ビルディング 3F
              </div>
            </div>
            <div class="border-b border-line-soft py-[22px]">
              <div class="font-mono text-[10px] tracking-[0.16em] text-faint-2">
                ACCESS
              </div>
              <div class="mt-2 text-[14px] leading-[1.9]">
                都営大江戸線 大門駅 徒歩3分<br />JR浜松町駅 徒歩3分
              </div>
            </div>
          </div>
        </div>

        <!-- right form (Netlify Forms) -->
        <div>
          <form
            name="contact-form"
            method="POST"
            netlify
            netlify-honeypot="bot-field"
            @submit="handleSubmit"
          >
            <input
              type="hidden"
              name="form-name"
              value="contact-form"
            />
            <p class="hidden">
              <label
                >Don't fill this out:
                <input
                  v-model="bot_field"
                  name="bot-field"
              /></label>
            </p>

            <div class="grid grid-cols-1 gap-5 min-[521px]:grid-cols-2">
              <div>
                <label :class="labelClass">会社名</label>
                <input
                  v-model="form.company_name"
                  name="company_name"
                  type="text"
                  placeholder="株式会社サンプル"
                  :class="inputClass"
                />
              </div>
              <div>
                <label :class="labelClass"
                  >お名前 <span class="text-accent">*</span></label
                >
                <input
                  v-model="form.name"
                  name="name"
                  type="text"
                  required
                  placeholder="山田 太郎"
                  :class="inputClass"
                />
              </div>
              <div>
                <label :class="labelClass"
                  >メールアドレス <span class="text-accent">*</span></label
                >
                <input
                  v-model="form.email"
                  name="email"
                  type="email"
                  required
                  placeholder="info@example.com"
                  :class="inputClass"
                />
              </div>
              <div>
                <label :class="labelClass">電話番号</label>
                <input
                  v-model="form.phone"
                  name="phone"
                  type="tel"
                  placeholder="03-0000-0000"
                  :class="inputClass"
                />
              </div>
            </div>

            <div class="mt-5">
              <label :class="labelClass">お問い合わせ種別</label>
              <select
                v-model="form.inquiry_type"
                name="inquiry_type"
                :class="inputClass"
              >
                <optgroup
                  v-for="group in inquiryGroups"
                  :key="group.label"
                  :label="group.label"
                >
                  <option
                    v-for="option in group.options"
                    :key="option"
                  >
                    {{ option }}
                  </option>
                </optgroup>
              </select>
            </div>

            <div class="mt-5">
              <label :class="labelClass"
                >お問い合わせ内容 <span class="text-accent">*</span></label
              >
              <textarea
                v-model="form.message"
                name="message"
                rows="6"
                required
                placeholder="お問い合わせ内容をご記入ください"
                :class="[inputClass, 'resize-y']"
              ></textarea>
            </div>

            <label
              class="mt-5 flex items-start gap-2.5 text-[12px] leading-[1.6] text-body"
            >
              <input
                v-model="agreed"
                type="checkbox"
                class="mt-0.5 accent-accent"
              />
              <span>個人情報の取り扱いについて同意します</span>
            </label>

            <button
              type="submit"
              :disabled="is_submit || !agreed"
              class="mt-[26px] w-full rounded-[3px] bg-ink py-[17px] text-[15px] font-medium text-white transition-colors duration-200 hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
            >
              {{ is_submit ? "送信中..." : "送信する　→" }}
            </button>

            <p
              v-if="is_error"
              class="mt-5 text-center text-[13px] text-red-500"
            >
              お問い合わせ内容の送信に失敗しました。<br />時間をおいて再度お試しください。
            </p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const labelClass = "mb-2 block text-[12px] font-medium";
const inputClass =
  "w-full rounded-[3px] border border-line-strong bg-white px-3.5 py-3 font-sans text-[14px] text-ink transition-colors focus:border-accent focus:outline-none";

const bot_field = ref("");
const is_error = ref<boolean>(false);
const is_submit = ref<boolean>(false);
const agreed = ref<boolean>(false);

// お問い合わせ種別（select の選択肢はここを唯一の定義元にする）。
// option 文言を変える場合はここだけ直せば、表示とクエリ検証の両方に反映される。
const inquiryGroups = [
  {
    label: "お問い合わせ",
    options: [
      "システム開発について",
      "マーケティングについて",
      "お見積もり・ご相談",
      "その他",
    ],
  },
  {
    label: "採用",
    options: [
      "採用エントリー（ソフトウェアエンジニア）",
      "採用エントリー（マーケティング）",
      "採用エントリー（UI/UXデザイナー）",
      "カジュアル面談",
    ],
  },
];
const DEFAULT_INQUIRY_TYPE = "システム開発について";

// リクルートページ等から ?type= で遷移してきたとき、該当種別を初期選択する。
// 既存の選択肢に一致する値のみ採用し、不正値は既定へフォールバックする。
const route = useRoute();
const queryType = Array.isArray(route.query.type)
  ? route.query.type[0]
  : route.query.type;
const initialInquiryType = inquiryGroups.some((g) =>
  g.options.includes(queryType ?? "")
)
  ? (queryType as string)
  : DEFAULT_INQUIRY_TYPE;

const form = ref({
  company_name: "",
  name: "",
  email: "",
  phone: "",
  inquiry_type: initialInquiryType,
  message: "",
});

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  is_submit.value = true;
  is_error.value = false;

  // application/x-www-form-urlencoded で Netlify Forms へ送信
  const formData = new URLSearchParams();
  formData.append("form-name", "contact-form");
  formData.append("company_name", form.value.company_name);
  formData.append("name", form.value.name);
  formData.append("email", form.value.email);
  formData.append("phone", form.value.phone);
  formData.append("inquiry_type", form.value.inquiry_type);
  formData.append("message", form.value.message);

  await fetch("/", {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    method: "POST",
    body: formData.toString(),
  })
    .then(() => {
      navigateTo("/contact/thanks", { replace: true });
    })
    .catch((error: unknown) => {
      is_error.value = true;
      console.error(error);
    })
    .finally(() => {
      is_submit.value = false;
      form.value.company_name = "";
      form.value.name = "";
      form.value.email = "";
      form.value.phone = "";
      form.value.message = "";
    });
};

useHead({
  title: "お問い合わせ | Innovation Style株式会社",
  meta: [
    {
      name: "description",
      content:
        "お気軽にお問い合わせください。お問い合わせ内容を確認後、担当者よりご連絡させていただきます。",
    },
  ],
});
</script>
