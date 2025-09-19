<template>
  <div class="masthead segment">
    <div class="ui page grid">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.masthead.segment {
  position: relative;
  overflow: hidden;
  background-image: radial-gradient(
    farthest-corner,
    rgb(255, 255, 255),
    rgb(210, 210, 210)
  );
  height: 100%;
}

.ui.page.grid {
  margin: 0;
  padding: 0 0;
}

.masthead.segment {
  transform-style: preserve-3d;
  perspective: 1000px;
  animation: colors 120s linear infinite;
}

.masthead.segment::after {
  position: absolute;
  z-index: -1;
  width: 135%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  background: url("https://semantic-ui.com/images/ui.png");
  opacity: 0.09;
  animation: splash 40s linear infinite;
  transform: rotateX(50deg) translateY(-14%) translateX(-14%) translateZ(370px);
}

@keyframes splash {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 0% -475px;
  }
}

@keyframes colors {
  0% {
    background-color: #ffffff; /* primary-500 */
  }
  14% {
    background-color: #ffffff; /* primary-600 */
  }
  28% {
    background-color: #ffffff; /* primary-700 */
  }
  42% {
    background-color: #ffffff; /* primary-800 */
  }
  57% {
    background-color: #ffffff; /* primary-900 */
  }
  71% {
    background-color: #ffffff; /* secondary-700 */
  }
  85% {
    background-color: #ffffff; /* secondary-800 */
  }
  100% {
    background-color: #ffffff; /* primary-500 */
  }
}
</style>
