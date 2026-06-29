<template>
  <!-- Vanta NET を描画する背景レイヤー。クリック透過させ前面の要素を妨げない -->
  <div
    ref="elRef"
    class="pointer-events-none absolute inset-0"
  ></div>
</template>

<script setup lang="ts">
interface Props {
  /** ネット（点・線）の色（16進カラーコード） */
  color?: string;
  /** 背景色（16進カラーコード） */
  backgroundColor?: string;
  /** 点の数 */
  points?: number;
  /** 線がつながる最大距離 */
  maxDistance?: number;
  /** 点の間隔 */
  spacing?: number;
}

const props = withDefaults(defineProps<Props>(), {
  color: "#4744b8",
  backgroundColor: "#dadbec",
  points: 12,
  maxDistance: 20,
  spacing: 15,
});

const elRef = ref<HTMLElement | null>(null);
const vantaEffect = ref<any>(null);

const parseColorCode = (color: string): number =>
  parseInt(color.replace("#", ""), 16);

onMounted(async () => {
  const [THREE, NET] = await Promise.all([
    // @ts-ignore three は型定義を読み込まずに利用する
    import("three"),
    // @ts-ignore vanta のサブパスには型定義がない
    import("vanta/dist/vanta.net.min"),
  ]);

  vantaEffect.value = NET.default({
    el: elRef.value!,
    THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: parseColorCode(props.color),
    backgroundColor: parseColorCode(props.backgroundColor),
    points: props.points,
    maxDistance: props.maxDistance,
    spacing: props.spacing,
  });
});

// props の色変更をライブ反映（カラーピッカー等から再利用する場合に有効）
watch(
  () => props.color,
  (next) => vantaEffect.value?.setOptions({ color: parseColorCode(next) }),
);
watch(
  () => props.backgroundColor,
  (next) =>
    vantaEffect.value?.setOptions({ backgroundColor: parseColorCode(next) }),
);

onBeforeUnmount(() => {
  if (vantaEffect.value && typeof vantaEffect.value.destroy === "function") {
    vantaEffect.value.destroy();
    vantaEffect.value = null;
  }
});
</script>
