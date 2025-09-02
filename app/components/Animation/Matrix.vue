<template>
  <div
    ref="root"
    class="matrix anim"
  >
    <span class="bg-wrap">
      <span class="inn">
        <slot />
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
const root = ref<HTMLElement | null>(null);
let io: IntersectionObserver | null = null;

onMounted(() => {
  io = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("is-animated");
          // 一度きりの発火にしたいので監視解除
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.2 }
  );

  if (root.value) io.observe(root.value);
});

onBeforeUnmount(() => {
  io?.disconnect();
  io = null;
});
</script>

<style scoped>
/* ----- あなたのCSSをそのまま反映（SFC用に若干整形） ----- */
.matrix .bg-wrap,
.matrix .bg-wrap .inn {
  display: block;
}

.matrix .bg-wrap {
  overflow: hidden;
  opacity: 0; /* 初期は非表示（親に透過） */
}

.matrix .bg-wrap + .bg-wrap {
  margin-top: 10px;
}

/* 初期状態：下に100px押し出しておく（matrix(a,b,c,d,tx,ty) の ty=100 相当） */
.matrix .bg-wrap .inn {
  opacity: 0;
  transform: matrix(1, 0, 0, 1, 0, 100);
  transition: 1.2s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform, opacity;
}

/* 表示領域に入ったら発火（IntersectionObserverで .is-animated を付与） */
.matrix.is-animated .bg-wrap {
  opacity: 1;
}
.matrix.is-animated .bg-wrap .inn {
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

/* ちょっとした段階的ディレイ（行ごと） */
.matrix.is-animated .bg-wrap:nth-child(1) .inn {
  transition-delay: 0s;
}
.matrix.is-animated .bg-wrap:nth-child(2) .inn {
  transition-delay: 0.12s;
}

/* お好みで丸みや背景など追加してもOK
.matrix .bg-wrap .inn { border-radius: 6px; }
*/
</style>
