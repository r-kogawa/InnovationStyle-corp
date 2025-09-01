<template>
  <div
    class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen"
  >
    <!-- カラーピッカー設定パネル -->
    <div
      class="absolute bottom-5 md:bottom-10 right-3 md:right-5 z-50"
      v-if="showControls"
    >
      <div
        class="bg-white/95 backdrop-blur-xl rounded-lg p-3 shadow-2xl border border-white/20 min-w-[200px]"
      >
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-semibold text-gray-700">カラー設定</h3>
          <button
            @click="toggleControls"
            class="text-sm text-gray-600 hover:text-gray-800"
          >
            <Icon
              class="w-4 h-4"
              name="mdi:close"
            />
          </button>
        </div>
        <div class="flex items-center justify-between mb-3">
          <label
            for="textColor"
            class="text-sm text-gray-600"
          >
            <span class="text-gray-700">テキスト色:</span>
          </label>
          <input
            type="color"
            id="textColor"
            class="w-10 h-8 border-none rounded-md cursor-pointer"
            v-model="customTextColor"
            @input="updateTextColor"
          />
          {{ customTextColor }}
        </div>
        <div class="flex items-center justify-between mb-3">
          <label class="text-sm text-gray-600">
            <span class="text-gray-700">背景色:</span>
          </label>
          <input
            type="color"
            id="backgroundColor"
            class="w-10 h-8 border-none rounded-md cursor-pointer"
            v-model="customBackgroundColor"
            @input="updateBubbleColor"
          />
          {{ customBackgroundColor }}
        </div>
        <button
          @click="resetColors"
          class="w-full py-2 bg-slate-500 text-white border-none rounded-md cursor-pointer text-sm transition-colors hover:bg-indigo-700"
        >
          リセット
        </button>
      </div>
    </div>

    <!-- 設定ボタン -->
    <button
      @click="toggleControls"
      class="font-orbitron absolute bottom-5 md:bottom-10 right-3 md:right-5 w-24 md:w-[150px] h-10 md:h-12 bg-white/90 backdrop-blur-xl border border-white/20 rounded flex items-center justify-center cursor-pointer z-40 transition-all duration-300 shadow-lg hover:scale-110 hover:bg-white text-xs md:text-sm text-gray-700"
    >
      Setting Colors
    </button>

    <!-- Vanta Net背景 -->
    <div
      ref="elRef"
      class="absolute top-0 left-0 w-full h-screen pointer-events-none"
    ></div>

    <!-- コンテンツエリア -->
    <div
      class="relative z-10 flex items-center justify-center h-[calc(100vh-90px)]"
    >
      <div class="max-w-6xl mx-auto px-4 md:px-8">
        <div class="text-center">
          <div class="mb-4">
            <span
              class="px-3 md:px-4 py-1 md:py-2 text-xs font-orbitron tracking-widest uppercase"
            >
              Innovation & Technology
            </span>
          </div>
          <h1
            class="text-4xl md:text-7xl font-orbitron leading-tight mb-4 md:mb-6 text-gray-900 tracking-tight"
          >
            Innovation
            <span
              class="bg-gradient-to-r from-slate-700 to-slate-500 bg-clip-text text-transparent"
            >
              Style
            </span>
          </h1>
          <p
            class="text-lg md:text-xl text-gray-700 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
          >
            イノベーションとテクノロジーで<br />未来を形作る
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 色設定の状態管理
const showControls = ref<boolean>(false);
const customTextColor = ref<string>("#8b5cf6");
const customBackgroundColor = ref<string>("#c9c9c9");

const elRef = ref<HTMLElement | null>(null);
const vantaEffect = ref<any>(null);

onMounted(async () => {
  const [THREE, NET] = await Promise.all([
    // @ts-ignore
    import("three"),
    // @ts-ignore
    import("vanta/dist/vanta.net.min"),
  ]);

  vantaEffect.value = NET.default({
    el: elRef.value!,
    THREE: THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: parseColorCode(customTextColor.value),
    backgroundColor: parseColorCode(customBackgroundColor.value),
    points: 12.0,
    maxDistance: 20.0,
    spacing: 15.0,
  });
});

// 色の変更を監視してリアルタイム更新
watch(customTextColor, (newColor) => {
  if (vantaEffect.value) {
    vantaEffect.value.setOptions({
      color: parseColorCode(newColor),
    });
  }
});

watch(customBackgroundColor, (newColor) => {
  if (vantaEffect.value) {
    vantaEffect.value.setOptions({
      backgroundColor: parseColorCode(newColor),
    });
  }
});

onBeforeUnmount(() => {
  // コンポーネント破棄時にエフェクトを dispose
  if (vantaEffect.value && typeof vantaEffect.value.destroy === "function") {
    vantaEffect.value.destroy();
    vantaEffect.value = null;
  }
});

// コントロールパネルの表示切り替え
const toggleControls = () => {
  showControls.value = !showControls.value;
};

// 色更新関数
const updateTextColor = () => {
  // リアルタイムで色を更新
};

const updateBubbleColor = () => {
  // リアルタイムで色を更新
};

// 色をリセット
const resetColors = () => {
  customTextColor.value = "#8b5cf6";
  customBackgroundColor.value = "#f7fafc";
};

const parseColorCode = (color: string) => {
  return parseInt(color.replace("#", ""), 16);
};
</script>

<style scoped>
/* レスポンシブ調整はTailwindのresponsive variantsで対応済み */
</style>
