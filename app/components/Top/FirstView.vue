<template>
  <div
    class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen"
  >
    <!-- カラーピッカー設定パネル -->
    <div
      class="absolute top-10 right-3 md:right-5 z-50"
      v-if="showControls"
    >
      <div
        class="bg-white/95 backdrop-blur-xl rounded-lg p-5 shadow-2xl border border-white/20 min-w-[200px]"
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
      class="font-orbitron absolute top-5 md:top-10 right-3 md:right-5 w-24 md:w-[150px] h-10 md:h-12 bg-white/90 backdrop-blur-xl border border-white/20 rounded flex items-center justify-center cursor-pointer z-40 transition-all duration-300 shadow-lg hover:scale-110 hover:bg-white text-xs md:text-sm text-gray-700"
    >
      Setting Colors
    </button>

    <!-- Vanta Net背景 -->
    <div
      ref="elRef"
      class="absolute top-0 left-0 w-full h-screen pointer-events-none"
    ></div>

    <!-- 思考の波 -->
    <div
      v-for="i in 3"
      :key="`wave-${i}`"
      class="absolute border-2 border-blue-200/20 rounded-full ripple-animation"
      :style="getWaveStyle(i)"
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

// 思考の波のスタイルを生成
const getWaveStyle = (index: number) => {
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  const animationDelay = Math.random() * 4;

  return {
    left: `${left}%`,
    top: `${top}%`,
    animationDelay: `${animationDelay}s`,
  };
};

const parseColorCode = (color: string) => {
  return parseInt(color.replace("#", ""), 16);
};
</script>

<style scoped>
/* アニメーション専用スタイル */

.thought-bubble {
  position: absolute;
  transform: translateY(100vh);
  animation: thoughtFloat 12s infinite linear;
}

.thought-text {
  position: relative;
  white-space: nowrap;
  font-family: "Kalam", "Comic Sans MS", "Marker Felt", "Bradley Hand", cursive;
  font-style: italic;
  letter-spacing: 0.5px;
  filter: blur(0.3px);
  padding: 0.75rem 1.25rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0.15) 100%
  );
  backdrop-filter: blur(16px);
  border-radius: 2rem 1.5rem 2rem 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(255, 255, 255, 0.1),
    0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.4);
  color: #4b5563;
  font-weight: 400;
}

/* 雲のような装飾 */
.thought-text::before {
  content: "";
  position: absolute;
  top: -8px;
  left: 20%;
  width: 16px;
  height: 16px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  box-shadow: -12px 0 0 -2px rgba(255, 255, 255, 0.3),
    12px 0 0 -2px rgba(255, 255, 255, 0.3),
    -6px 0 0 2px rgba(255, 255, 255, 0.2), 6px 0 0 2px rgba(255, 255, 255, 0.2),
    0 -8px 0 -1px rgba(255, 255, 255, 0.25),
    -8px -4px 0 -3px rgba(255, 255, 255, 0.2),
    8px -4px 0 -3px rgba(255, 255, 255, 0.2);
}

.thought-text::after {
  content: "";
  position: absolute;
  top: -6px;
  right: 15%;
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.35);
  border-radius: 50%;
  box-shadow: -8px 0 0 -1px rgba(255, 255, 255, 0.25),
    8px 0 0 -1px rgba(255, 255, 255, 0.25),
    -4px 0 0 1px rgba(255, 255, 255, 0.2), 4px 0 0 1px rgba(255, 255, 255, 0.2),
    0 -6px 0 -2px rgba(255, 255, 255, 0.2);
}

/* 雲の尻尾（吹き出し風の装飾） */
.cloud-tail {
  position: absolute;
  bottom: -8px;
  left: 25%;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 12px solid rgba(255, 255, 255, 0.2);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.cloud-tail::before {
  content: "";
  position: absolute;
  top: -15px;
  left: -6px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 9px solid rgba(255, 255, 255, 0.25);
}

/* 雲の装飾を強化 */
.cloud-decoration {
  position: relative;
}

.cloud-decoration::before {
  animation: cloudFloat 4s ease-in-out infinite;
}

.cloud-decoration::after {
  animation: cloudFloat 3s ease-in-out infinite reverse;
}

.ripple-animation {
  animation: ripple 4s infinite ease-out;
}

/* アニメーション定義 */
@keyframes thoughtFloat {
  0% {
    transform: translateY(100vh) rotate(-2deg) scale(0.7);
    opacity: 0;
    filter: blur(2px);
  }
  10% {
    opacity: 0.4;
    filter: blur(1px);
  }
  20% {
    transform: translateY(80vh) rotate(1deg) scale(0.85);
    opacity: 0.7;
    filter: blur(0.8px);
  }
  40% {
    transform: translateY(60vh) rotate(-1deg) scale(0.95);
    opacity: 0.85;
    filter: blur(0.5px);
  }
  60% {
    transform: translateY(40vh) rotate(2deg) scale(1.05);
    opacity: 0.9;
    filter: blur(0.3px);
  }
  80% {
    transform: translateY(20vh) rotate(-1deg) scale(1.1);
    opacity: 0.8;
    filter: blur(0.4px);
  }
  90% {
    opacity: 0.6;
    filter: blur(0.8px);
  }
  100% {
    transform: translateY(-5vh) rotate(1deg) scale(0.8);
    opacity: 0;
    filter: blur(2px);
  }
}

@keyframes cloudFloat {
  0%,
  100% {
    transform: translateY(0) scale(1);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-2px) scale(1.05);
    opacity: 0.6;
  }
}

@keyframes lightbulb-glow {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.9);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
  }
}

@keyframes ripple {
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 200px;
    height: 200px;
    opacity: 0;
  }
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
}

/* レスポンシブ調整はTailwindのresponsive variantsで対応済み */
</style>
