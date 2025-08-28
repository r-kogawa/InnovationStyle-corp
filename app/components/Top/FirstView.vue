<template>
  <div
    class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen"
  >
    <!-- カラーピッカー設定パネル -->
    <div
      class="fixed bottom-10 md:bottom-10 right-3 md:right-5 z-50"
      v-if="showControls"
    >
      <div
        class="bg-white/95 backdrop-blur-xl rounded-xl p-5 shadow-2xl border border-white/20 min-w-[200px]"
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
        </div>
        <div class="flex items-center justify-between mb-3">
          <label
            for="bubbleColor"
            class="text-sm text-gray-600"
          >
            <span class="text-gray-700">バブル色:</span>
          </label>
          <input
            type="color"
            id="bubbleColor"
            class="w-10 h-8 border-none rounded-md cursor-pointer"
            v-model="customBubbleColor"
            @input="updateBubbleColor"
          />
        </div>
        <button
          @click="resetColors"
          class="w-full py-2 bg-indigo-600 text-white border-none rounded-md cursor-pointer text-sm transition-colors hover:bg-indigo-700"
        >
          リセット
        </button>
      </div>
    </div>

    <!-- 設定ボタン -->
    <button
      @click="toggleControls"
      class="fixed bottom-5 md:bottom-10 right-3 md:right-5 w-24 md:w-[150px] h-10 md:h-12 bg-white/90 backdrop-blur-xl border border-white/20 rounded-lg flex items-center justify-center cursor-pointer z-40 transition-all duration-300 shadow-lg hover:scale-110 hover:bg-white text-xs md:text-sm font-medium text-gray-700"
      :class="{ 'bg-indigo-600 text-white': showControls }"
    >
      自分色のスタイル
    </button>

    <!-- 浮遊する思考テキスト -->
    <div
      class="absolute top-0 left-0 w-full h-screen pointer-events-none overflow-hidden"
    >
      <div
        v-for="(thought, i) in thoughts"
        :key="`thought-${i}`"
        class="thought-bubble"
        :style="getThoughtStyle(i)"
      >
        <div
          class="thought-text cloud-decoration"
          :style="getThoughtTextStyle()"
        >
          {{ thought }}
          <div class="cloud-tail"></div>
        </div>
      </div>
    </div>

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
          <div class="inline-block mb-4 md:mb-6">
            <span
              class="inline-block px-3 md:px-4 py-1 md:py-2 text-xs font-semibold tracking-widest uppercase bg-white border border-gray-200 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >Innovation & Technology</span
            >
          </div>
          <h1
            class="text-4xl md:text-7xl font-extrabold leading-tight mb-4 md:mb-6 text-gray-900 tracking-tight"
          >
            Innovation
            <span
              class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Style
            </span>
          </h1>
          <p
            class="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
          >
            イノベーションとテクノロジーで未来を形作る
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 思考のテキスト配列
const thoughts = [
  "アイディア",
  "ひらめき",
  "創造力",
  "革新的",
  "問題解決",
  "クリエイティブ",
  "発想力",
  "イノベーション",
  "新しい視点",
  "可能性",
  "想像力",
  "独創性",
  "発見",
  "洞察",
  "思考",
];

// 色設定の状態管理
const showControls = ref(false);
const customTextColor = ref("#6b7280");
const customBubbleColor = ref("#ffffff");

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
  customTextColor.value = "#6b7280";
  customBubbleColor.value = "#ffffff";
};

// 思考テキストのスタイルを取得
const getThoughtTextStyle = () => {
  return {
    color: customTextColor.value,
    backgroundColor: `${customBubbleColor.value}15`, // 透明度を追加
  };
};

// 思考テキストのスタイルを生成
const getThoughtStyle = (index: number) => {
  const left = Math.random() * 90 + 5; // 5-95% (画面端を避ける)
  const animationDelay = Math.random() * 15; // 0-15s (より広い間隔)
  const animationDuration = Math.random() * 8 + 8; // 8-16s (ゆっくりと)
  const fontSize = Math.random() * 8 + 12; // 12-20px
  const opacity = Math.random() * 0.4 + 0.4; // 0.4-0.8

  // 思考中をイメージした色合い（柔らかく、夢想的な色）
  const colors = [
    "#6b7280", // グレー系 - 深い思考
    "#9ca3af", // ライトグレー - 迷い
    "#64748b", // スレートグレー - 集中
    "#78716c", // ウォームグレー - 温かい思考
    "#71717a", // ニュートラルグレー - 冷静
    "#6b6b6b", // ダークグレー - 真剣な考え
    "#8b8b8b", // ミディアムグレー - 曖昧な思考
    "#a3a3a3", // ソフトグレー - ぼんやりした思考
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];

  // フォントバリエーション（思考的なフォント）
  const fonts = [
    '"Kalam", cursive',
    '"Caveat", cursive',
    '"Comic Sans MS", cursive',
    '"Marker Felt", fantasy',
    '"Bradley Hand", cursive',
  ];
  const fontFamily = fonts[Math.floor(Math.random() * fonts.length)];

  return {
    left: `${left}%`,
    animationDelay: `${animationDelay}s`,
    animationDuration: `${animationDuration}s`,
    fontSize: `${fontSize}px`,
    opacity: opacity,
    color: color,
    fontFamily: fontFamily,
  };
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
