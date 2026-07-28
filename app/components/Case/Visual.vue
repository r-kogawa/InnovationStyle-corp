<script setup lang="ts">
import logoUrl from "~/assets/img/logo.png";

interface CaseVisualProps {
  /** 表示する画像 URL（import 済み）。未指定時はロゴをフォールバック表示する */
  image?: string;
  /** 画像の代替テキスト */
  alt?: string;
}

withDefaults(defineProps<CaseVisualProps>(), {
  alt: "Innovation Style",
});
</script>

<template>
  <div class="relative overflow-hidden rounded-[6px] border border-line-strong">
    <!-- 適切な画像があれば表示 -->
    <img
      v-if="image"
      :src="image"
      :alt="alt"
      class="absolute inset-0 h-full w-full object-cover"
    />
    <!-- なければロゴをフォールバック表示 -->
    <div
      v-else
      class="absolute inset-0 flex items-center justify-center bg-surface"
    >
      <img
        :src="logoUrl"
        alt="Innovation Style"
        class="w-2/5 max-w-[160px] opacity-90"
      />
    </div>
    <!-- ページ固有のバッジ・ラベルをオーバーレイ -->
    <slot />
  </div>
</template>
