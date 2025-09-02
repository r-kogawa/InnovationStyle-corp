<template>
  <div
    ref="root"
    class="bg"
  >
    <span class="bg-wrap w-fit">
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
.bg .bg-wrap {
  position: relative;
  margin-top: 5px;
}
.bg.is-animated .bg-wrap::before {
  animation: bg 2.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  background: linear-gradient(to right, #2b2b2b 0%, #646464 50%, #c3c3c3 100%);
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: left center;
}
.bg .bg-wrap .inn {
  color: #fff;
  font-weight: bold;
  padding: 15px 15px;
  position: relative;
  z-index: 1;
}

@keyframes bg {
  0% {
    opacity: 0;
    transform: scaleX(0) translateX(-5%);
  }
  30% {
    transform: scaleX(1) translateX(0);
  }
  100% {
    transform: scaleX(1) translateX(0);
  }
  30%,
  100% {
    opacity: 1;
  }
}
</style>
